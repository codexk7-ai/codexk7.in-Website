import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Book a Call — Start a Conversation | CODEXK7',
  description:
    'Schedule an AI engineering consultation with CODEXK7. Share your project details, timeline, and goals.',
};

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-16">
      <section className="py-12 sm:py-16">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
