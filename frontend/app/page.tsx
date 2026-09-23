import Hero from '@/components/Hero';
import SVGFollowScroll from '@/components/ui/svg-follow-scroll';
import ArchitectureVisual from '@/components/ArchitectureVisual';
import TrustStrip from '@/components/TrustStrip';
import Process from '@/components/Process';
import Technologies from '@/components/Technologies';
import CaseStudies from '@/components/CaseStudies';
import ProductShowcase from '@/components/ProductShowcase';
import AgentDemo from '@/components/AgentDemo';
import Engineering from '@/components/Engineering';
import WhyCodexK7 from '@/components/WhyCodexK7';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* 1. Hero — headline + CTAs */}
      <Hero />

      {/* 2. Scroll Journey — IDEA → PRODUCT */}
      <SVGFollowScroll />

      {/* 3. Agentic System Architecture */}
      <ArchitectureVisual />

      {/* 4. Engineered For strip */}
      <TrustStrip />

      {/* 5. Engineering Methodology */}
      <Process />

      {/* 6. Technical Stack */}
      <Technologies />

      {/* 7. Proven Engineering */}
      <CaseStudies />

      {/* 8. Proprietary IP & Tools */}
      <ProductShowcase />

      {/* 9. Interactive Agent Demo */}
      <AgentDemo />

      {/* 10. Engineering Standard */}
      <Engineering />

      {/* 11. Studio Philosophy */}
      <WhyCodexK7 />

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
