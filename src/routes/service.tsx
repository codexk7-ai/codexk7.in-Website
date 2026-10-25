import { createFileRoute } from '@tanstack/react-router';
import Page from '@/site/pages/service';

export const Route = createFileRoute('/service')({
  head: () => ({
    meta: [
      { title: 'AI Engineering & Agentic Services — CODEXK7' },
      { name: 'description', content: 'Agentic AI, automation, generative AI, RAG, AI SaaS and AI integrations engineered by CODEXK7.' },
      { property: 'og:title', content: 'AI Engineering & Agentic Services — CODEXK7' },
      { property: 'og:description', content: 'Agentic AI, automation, generative AI, RAG, AI SaaS and AI integrations engineered by CODEXK7.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
});
