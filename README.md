# CODEXK7 Website

Marketing site for CODEXK7, built with TanStack Start (React 19, Vite, Tailwind CSS 4) and deployed on Vercel.

## Local development

Requirements: Node.js 20 or newer.

```sh
cp .env.example .env   # then fill in the values (see Configuration)
npm install
npm run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server |
| `npm run build` | Generates the sitemap, then builds for production |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type-check |
| `npm test` | Vitest (routing and lead validation) |

## Configuration

All values are read from environment variables. Never commit `.env`.

| Variable | Scope | Purpose |
| --- | --- | --- |
| `LEAD_WEBHOOK_URL` | Server secret | Contact-form leads are forwarded here (CRM, Zapier/Make, Slack, Sheets). Without it the form shows an error. |
| `VITE_SITE_URL` | Public | Full site URL, e.g. `https://www.example.com`. Used for the Open Graph image and the sitemap. |
| `VITE_PLAUSIBLE_DOMAIN` | Public | Optional. Enables privacy-friendly analytics when set. |

## Project layout

- `src/routes/`: file-based routes (`/`, `/service`, `/product`, `/about`, `/book-call`)
- `src/site/components/`: page sections and UI building blocks
- `src/site/lib/`: content data, navigation, motion tokens, analytics
- `src/site/server/`: server functions (contact-form lead intake)
- `public/`: static assets (favicon, Open Graph image, robots.txt, generated sitemap)
- `scripts/generate-sitemap.mjs`: build-time sitemap generator

Motion timing lives in `src/site/lib/motion.ts`. The site respects the operating system's reduce-motion setting.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository. Vercel detects the framework and runs `npm install` and `npm run build`.
3. Under **Settings → Environment Variables**, add `LEAD_WEBHOOK_URL`, `VITE_SITE_URL` and, optionally, `VITE_PLAUSIBLE_DOMAIN`.
4. Deploy. Every push to the main branch redeploys production, and every other branch gets a preview URL.

## Quality checks before shipping

Run `npm run lint`, `npx tsc --noEmit`, `npm test` and `npm run build`. All four should pass.
