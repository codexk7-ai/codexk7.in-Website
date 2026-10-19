import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Clock, Lock, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proprietary AI Products & Tools — CODEXK7',
  description:
    'CODEXK7 proprietary AI tools, agentic SDKs, and enterprise microSaaS modules. Coming soon.',
};

const UPCOMING_PRODUCTS = [
  {
    title: 'CODEX-SWARM SDK',
    tagline: 'Multi-Agent Orchestration Framework',
    status: 'IN PRIVATE BETA',
    description:
      'High-throughput framework for deploying autonomous agent teams with built-in consensus loops, memory synchronization, and fallback routing.',
    badgeStyle: {
      background: 'rgba(16, 185, 129, 0.08)',
      color: '#047857',
      border: '1px solid rgba(16, 185, 129, 0.25)',
    },
  },
  {
    title: 'K7-VECTOR ENGINE',
    tagline: 'Sub-10ms Hybrid RAG Indexer',
    status: 'EARLY ACCESS',
    description:
      'Enterprise vector search wrapper offering multi-modal embedding generation, dynamic reranking, and zero-trust security scoping.',
    badgeStyle: {
      background: 'rgba(168, 32, 32, 0.08)',
      color: 'var(--primary)',
      border: '1px solid rgba(168, 32, 32, 0.25)',
    },
  },
  {
    title: 'AGENT AUDIT LAB',
    tagline: 'Deterministic Agent Benchmark & Safety Evaluator',
    status: 'DEVELOPMENT PHASE',
    description:
      'Continuous verification suite for testing AI agent outputs, measuring tool invocation accuracy, and enforcing guardrail constraints.',
    badgeStyle: {
      background: 'rgba(217, 119, 6, 0.08)',
      color: '#92400E',
      border: '1px solid rgba(217, 119, 6, 0.25)',
    },
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-16" style={{ background: 'var(--background)' }}>
      <section className="py-20 sm:py-28 border-b relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(168,32,32,0.25)', background: 'rgba(168,32,32,0.06)' }}>
            <Clock className="h-4 w-4 animate-pulse" style={{ color: 'var(--primary)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)', fontFamily: "'Inter', sans-serif" }}>
              STATUS: PROPRIETARY PRODUCTS COMING SOON
            </span>
          </div>

          {/* Page Heading */}
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Next-Gen{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
              Agentic Tools &amp; Suites.
            </em>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-10" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
            We are actively engineering out-of-the-box microSaaS products and developer tooling for agentic AI deployment. Get notified when public beta opens.
          </p>

          {/* Waitlist Subscription Box */}
          <div className="max-w-md mx-auto rounded-xl p-2 sm:p-2.5 flex items-center gap-2 mb-16" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <input
              type="email"
              placeholder="Enter your work email..."
              className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontFamily: "'Inter', sans-serif",
              }}
            />
            <button
              type="button"
              className="btn-primary px-5 py-3 rounded-lg text-xs font-semibold uppercase transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>JOIN WAITLIST</span>
              <Bell className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-6">
            {UPCOMING_PRODUCTS.map((prod) => (
              <div
                key={prod.title}
                className="card-editorial-hover rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      style={prod.badgeStyle}
                    >
                      {prod.status}
                    </span>
                    <Lock className="h-4 w-4" style={{ color: 'var(--faint-fg)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-1 tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--foreground)' }}>
                    {prod.title}
                  </h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: 'var(--primary)', fontFamily: "'Inter', sans-serif" }}>
                    {prod.tagline}
                  </p>
                  <p className="text-xs leading-relaxed mb-6 font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-[11px]" style={{ color: 'var(--faint-fg)', fontFamily: "'Inter', sans-serif" }}>
                    Beta Release • Q4 2026
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'var(--primary)', fontFamily: "'Inter', sans-serif" }}>
                    NOTIFY ME →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
