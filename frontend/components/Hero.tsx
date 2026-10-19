'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

// Hero console: the USER → ACTION pipeline from the architecture spec, shown as a run trace
const TRACE = [
  { step: 'intent.parse', detail: 'request → task spec' },
  { step: 'gateway.guard', detail: 'policy & PII checks' },
  { step: 'agent.plan', detail: 'multi-step graph' },
  { step: 'tools.call', detail: 'typed API calls' },
  { step: 'rag.retrieve', detail: 'grounded context' },
  { step: 'state.persist', detail: 'durable memory' },
  { step: 'action.commit', detail: 'deterministic output' },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--background)',
        paddingTop: 'clamp(5rem, 10vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      }}
    >
      {/* Subtle warm texture */}
      <div className="absolute inset-0 bg-warm-grid pointer-events-none" />

      {/* Warm ambient tint — very subtle */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 720,
          height: 720,
          top: -260,
          right: -200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,32,32,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-x-12">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex">
          <span className="badge-editorial">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--primary)' }}
            />
            AI Engineering &bull; Agentic Systems &bull; Product Studio
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.04,
              color: 'var(--foreground)',
            }}
          >
            We Build{' '}
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color: 'var(--primary)',
              }}
            >
              Agentic AI.
            </em>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-2xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 1.8vw, 1.1875rem)',
              color: 'var(--muted-fg)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            CODEXK7 engineers intelligent products, AI agents, automation systems
            and production-ready applications that turn ambitious ideas into
            scalable technology.
          </p>

          {/* CTAs */}
          <div className="mb-16 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/book-call"
              className="btn-primary min-h-[3rem] px-7 text-sm gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/service"
              className="btn-outline min-h-[3rem] px-7 text-sm gap-2 group"
            >
              <span>Explore Our Work</span>
              <ChevronRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                style={{ color: 'var(--muted-fg)' }}
              />
            </Link>
          </div>

          {/* Feature tags */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
            style={{
              borderTop: '1px solid var(--border)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {[
              { label: 'Multi-Agent Planning' },
              { label: 'Deterministic Tool Execution' },
              { label: 'Production Infrastructure' },
            ].map((feat) => (
              <div
                key={feat.label}
                className="flex items-center gap-2.5"
                style={{ color: 'var(--muted-fg)', fontSize: '0.8125rem' }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--primary)' }}
                />
                <span style={{ fontWeight: 500 }}>{feat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Run trace console (desktop) */}
        <div
          aria-hidden="true"
          className="hidden lg:block lg:col-start-2 lg:row-start-1 lg:row-span-2 self-center rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: 'var(--surface-dark)',
            border: '1px solid rgba(255,255,255,0.08)',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#E8E3DC',
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3 text-[11px]"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', color: 'rgba(232,227,220,0.6)' }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'rgba(232,227,220,0.2)' }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'rgba(232,227,220,0.2)' }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--primary-on-dark)' }} />
            <span className="ml-2">codexk7 · agent.run</span>
          </div>
          <ol className="relative px-5 py-5 space-y-3.5 text-xs">
            {TRACE.map(({ step, detail }, i) => {
              const done = i === TRACE.length - 1;
              return (
                <li key={step} className="flex items-baseline gap-3">
                  <span style={{ color: done ? 'var(--primary-on-dark)' : 'rgba(232,227,220,0.6)' }}>
                    {done ? '✓' : '›'}
                  </span>
                  <span className="font-semibold" style={{ color: done ? 'var(--primary-on-dark)' : '#E8E3DC' }}>
                    {step}
                  </span>
                  <span className="ml-auto text-[11px]" style={{ color: 'rgba(232,227,220,0.6)' }}>
                    {detail}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
