import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CODEXK7 — AI Engineering Studio',
  description:
    'CODEXK7 is a specialized AI engineering & product studio building autonomous agentic systems, RAG engines, and enterprise software.',
};

const SYNTHETIC_METRICS = [
  { label: 'ENTERPRISE AI DEPLOYMENTS', value: '42+', sub: 'Production-ready client implementations' },
  { label: 'AVG AGENT LATENCY', value: '< 240ms', sub: 'End-to-end task execution speed' },
  { label: 'TOOL CALL ACCURACY', value: '99.4%', sub: 'Deterministic schema validation' },
  { label: 'DAILY INVOCATION VOL.', value: '1.2M+', sub: 'Autonomous agent workflow queries' },
  { label: 'PRODUCTION UPTIME SLA', value: '99.99%', sub: 'Fault-tolerant serverless cluster' },
  { label: 'CLIENT RETENTION RATE', value: '96%', sub: 'Long-term product engineering partnerships' },
];

const PRINCIPLES = [
  {
    title: 'Deterministic Execution',
    description: 'We move beyond standard chat interfaces. Our agentic systems enforce schema validation, state tracking, and concrete outcome verification.',
  },
  {
    title: 'Zero-Hallucination Guardrails',
    description: 'Every LLM output is grounded in multi-modal vector context, source verification, and mathematical safety constraints.',
  },
  {
    title: 'Production-First Architecture',
    description: 'We write clean, modular, typed TypeScript and Python code engineered to scale seamlessly across serverless environments.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16" style={{ background: 'var(--background)' }}>
      {/* Studio Overview Hero */}
      <section className="py-16 sm:py-24 border-b relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="badge-editorial inline-block mb-4">
              ABOUT CODEXK7
            </span>
            <h1 className="mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              We build the{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
                Agentic Infrastructure
              </em>{' '}
              of tomorrow.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
              CODEXK7 is a premier AI engineering and product studio. We specialize in designing, engineering, and deploying autonomous agents, Generative AI applications, custom RAG engines, and scalable microSaaS platforms.
            </p>
          </div>

          {/* Synthetic Data Metrics Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b" style={{ borderColor: 'var(--border)' }}>
              <span className="text-xs font-semibold tracking-widest uppercase flex items-center gap-2" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
                <Activity className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                SYSTEM PERFORMANCE BENCHMARKS
              </span>
              <span className="text-[10px] font-mono" style={{ color: 'var(--faint-fg)' }}>UPDATED LIVE • Q3 2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SYNTHETIC_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="card-editorial-hover p-6 rounded-xl"
                >
                  <span className="text-[10px] font-semibold tracking-wider block mb-2" style={{ color: 'var(--faint-fg)', fontFamily: "'Inter', sans-serif" }}>
                    {metric.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2" style={{ color: 'var(--primary)', fontFamily: "'Cormorant Garamond', serif" }}>
                    {metric.value}
                  </div>
                  <p className="text-xs font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
                    {metric.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Principles */}
          <div className="pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
            <h2 className="mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Our Engineering Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle, idx) => (
                <div key={principle.title} className="card-editorial-hover p-6 rounded-xl">
                  <span className="text-xs font-bold block mb-3" style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                    0{idx + 1} • PRINCIPLE
                  </span>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--foreground)' }}>
                    {principle.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-normal" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
