import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { Shield, Cpu, Activity, Award, CheckCircle2, ArrowRight, Zap, Target, Users, Server } from 'lucide-react';

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
    <main className="min-h-screen bg-background text-foreground pt-16">
      {/* Studio Overview Hero */}
      <section className="py-16 sm:py-24 border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914] bg-[#E50914]/10 px-3 py-1 rounded-md">
              ABOUT CODEXK7
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-4 mb-4">
              WE BUILD THE AGENTIC INFRASTRUCTURE OF TOMORROW.
            </h1>
            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed font-normal">
              CODEXK7 is a premier AI engineering and product studio. We specialize in designing, engineering, and deploying autonomous agents, Generative AI applications, custom RAG engines, and scalable microSaaS platforms.
            </p>
          </div>

          {/* Synthetic Data Metrics Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-border">
              <span className="text-xs font-mono font-bold tracking-widest text-foreground/60 uppercase flex items-center gap-2">
                <Activity className="h-4 w-4 text-[#E50914]" />
                SYSTEM PERFORMANCE SYNTHETIC BENCHMARKS
              </span>
              <span className="text-[10px] font-mono text-foreground/40">UPDATED LIVE • Q3 2026</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SYNTHETIC_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 rounded-2xl border border-border bg-muted/20 shadow-xs hover:border-[#E50914]/40 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold tracking-wider text-foreground/60 block mb-2">
                    {metric.label}
                  </span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono tracking-tight text-[#E50914] mb-2">
                    {metric.value}
                  </div>
                  <p className="text-xs text-foreground/70 font-normal">
                    {metric.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Principles */}
          <div className="pt-10 border-t border-border">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
              OUR ENGINEERING PHILOSOPHY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRINCIPLES.map((principle, idx) => (
                <div key={principle.title} className="p-6 rounded-2xl border border-border bg-white shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#E50914] block mb-3">
                    0{idx + 1} // PRINCIPLE
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed font-normal">
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
