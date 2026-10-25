import ServiceVisualizer from '@/site/components/ServiceVisualizer';
import Capabilities from '@/site/components/Capabilities';
import Services from '@/site/components/Services';
import Footer from '@/site/components/Footer';
import CTA from '@/site/components/CTA';
import Link from '@/site/next-link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';


export default function ServicePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-16" style={{ background: 'var(--background)' }}>
      {/* Service Page Hero Header */}
      <section className="py-16 sm:py-24 border-b relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Interactive AI Animation / Visualizer */}
            <div className="lg:col-span-6">
              <ServiceVisualizer />
            </div>

            {/* Right Side: Service Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="badge-editorial inline-block mb-3">
                  OUR AI ENGINEERING SERVICES
                </span>
                <h1 className="mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Production-grade{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
                    AI Systems &amp; Agents.
                  </em>
                </h1>
                <p className="text-base leading-relaxed font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
                  We translate complex generative AI and autonomous agent research into robust, fault-tolerant software products designed for scale.
                </p>
              </div>

              {/* Highlight Points */}
              <div className="space-y-3 pt-2">
                {[
                  'Autonomous Reasoning & Multi-Agent Orchestration',
                  'Enterprise RAG & Hybrid Vector Search Pipelines',
                  'Fullstack AI SaaS Architecture & Stripe Billing',
                  'Deterministic Tool Calling & Custom API Integration',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--foreground)', fontFamily: "'Inter', sans-serif" }}>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-call"
                  className="btn-primary px-6 py-3 rounded-lg font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2"
                >
                  <span>Book Engineering Call</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/product"
                  className="btn-outline px-6 py-3 rounded-lg font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2"
                >
                  <span>Explore Products</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Capabilities Section */}
      <Capabilities />

      {/* Full Services Matrix */}
      <Services />

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
