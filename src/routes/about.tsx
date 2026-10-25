import { createFileRoute } from '@tanstack/react-router';
import Page from '@/site/pages/about';

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About the Studio — CODEXK7' },
      { name: 'description', content: 'CODEXK7 is an AI engineering studio building production-ready agentic systems.' },
      { property: 'og:title', content: 'About the Studio — CODEXK7' },
      { property: 'og:description', content: 'CODEXK7 is an AI engineering studio building production-ready agentic systems.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
});
