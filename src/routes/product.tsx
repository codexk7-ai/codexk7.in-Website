import { createFileRoute } from '@tanstack/react-router';
import Page from '@/site/pages/product';

export const Route = createFileRoute('/product')({
  head: () => ({
    meta: [
      { title: 'Products & Proprietary Tools — CODEXK7' },
      { name: 'description', content: 'Explore the AI products and proprietary engineering tools built by CODEXK7.' },
      { property: 'og:title', content: 'Products & Proprietary Tools — CODEXK7' },
      { property: 'og:description', content: 'Explore the AI products and proprietary engineering tools built by CODEXK7.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
});
