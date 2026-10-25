import { createFileRoute } from '@tanstack/react-router';
import Page from '@/site/pages/Home';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'CODEXK7 — Agentic AI & AI Engineering Studio' },
      { name: 'description', content: 'CODEXK7 builds Agentic AI systems, AI agents, Generative AI applications, AI SaaS products and automation workflows.' },
      { property: 'og:title', content: 'CODEXK7 — Agentic AI & AI Engineering Studio' },
      { property: 'og:description', content: 'CODEXK7 builds Agentic AI systems, AI agents, Generative AI applications, AI SaaS products and automation workflows.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
});
