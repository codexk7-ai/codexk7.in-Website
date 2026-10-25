import Hero from '@/site/components/Hero';
import SVGFollowScroll from '@/site/components/ui/svg-follow-scroll';
import RopeJourney from '@/site/components/ui/rope-journey';
import LifecycleJourney from '@/site/components/ui/lifecycle-journey';
import AgenticExecutionBox from '@/site/components/AgenticExecutionBox';
import TrustStrip from '@/site/components/TrustStrip';
import Marquee from '@/site/components/Marquee';
import DarkManifesto from '@/site/components/DarkManifesto';
import Process from '@/site/components/Process';
import Technologies from '@/site/components/Technologies';
import CaseStudies from '@/site/components/CaseStudies';
import ProductShowcase from '@/site/components/ProductShowcase';
import AgentDemo from '@/site/components/AgentDemo';
import Engineering from '@/site/components/Engineering';
import WhyCodexK7 from '@/site/components/WhyCodexK7';
import CTA from '@/site/components/CTA';
import Footer from '@/site/components/Footer';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* 1–2. Hero + Scroll Journey, joined by one continuous scroll-driven rope */}
      <RopeJourney>
        <Hero />
        {/* Serpentine journey: lifecycle → studio (R) → methodology (L) → stack (L) → agentic (R) → proven (C) */}
        <LifecycleJourney>
          <SVGFollowScroll />
          <Process />
          <Technologies />
          <AgenticExecutionBox />
          <CaseStudies />
          <TrustStrip />
          <Marquee />
          <ProductShowcase />
          <AgentDemo />
          <Engineering />
          <WhyCodexK7 />
        </LifecycleJourney>
      </RopeJourney>




      {/* CTA & Footer */}
      <DarkManifesto />
      <CTA />
      <Footer />
    </main>
  );
}
