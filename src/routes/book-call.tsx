import { createFileRoute } from '@tanstack/react-router';
import Page from '@/site/pages/book-call';

export const Route = createFileRoute('/book-call')({
  head: () => ({
    meta: [
      { title: 'Book a Call — Start a Conversation | CODEXK7' },
      { name: 'description', content: 'Schedule an AI engineering consultation with CODEXK7. Share your project, timeline and goals.' },
      { property: 'og:title', content: 'Book a Call — Start a Conversation | CODEXK7' },
      { property: 'og:description', content: 'Schedule an AI engineering consultation with CODEXK7. Share your project, timeline and goals.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
});
