import Contact from '@/site/components/Contact';
import Footer from '@/site/components/Footer';


export default function BookCallPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-16" style={{ background: 'var(--background)' }}>
      <section className="py-12 sm:py-16">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
