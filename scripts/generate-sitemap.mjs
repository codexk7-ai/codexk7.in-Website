// Generates public/sitemap.xml from the public routes at build time.
// Requires VITE_SITE_URL (e.g. https://codexk7.example). Without it, the script
// skips generation with a warning, so builds never publish a sitemap with wrong URLs.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROUTES = ['/', '/service', '/product', '/about', '/book-call'];

const siteUrl = (process.env.VITE_SITE_URL ?? '').replace(/\/$/, '');
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'sitemap.xml');

if (!/^https:\/\/[^/\s]+/.test(siteUrl)) {
  console.warn('[sitemap] VITE_SITE_URL is not set to an https URL; skipping sitemap generation.');
  process.exit(0);
}

const lastmod = new Date().toISOString().slice(0, 10);
const body = ROUTES.map(
  (route) => `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
).join('\n');

writeFileSync(
  out,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
);
console.log(`[sitemap] wrote ${ROUTES.length} URLs to public/sitemap.xml`);
