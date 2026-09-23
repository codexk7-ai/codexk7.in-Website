'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

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

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
}
