import Hero from '@/components/Hero';
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
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. AI ENGINEERING • AGENTIC SYSTEMS • PRODUCT STUDIO */}
      <Hero />

      {/* 2. System Architecture */}
      <ArchitectureVisual />

      {/* 3. Core Operating Model */}
      <TrustStrip />

      {/* 4. Engineering Methodology */}
      <Process />

      {/* 5. Technical Stack */}
      <Technologies />

      {/* 6. Proven Engineering */}
      <CaseStudies />

      {/* 7. Proprietary IP & Tools */}
      <ProductShowcase />

      {/* 8. Interactive UI Simulation */}
      <AgentDemo />

      {/* 9. Engineering Standard */}
      <Engineering />

      {/* 10. Studio Philosophy */}
      <WhyCodexK7 />

      {/* Call To Action & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
