'use client';

import { PRODUCTS_DATA } from '@/lib/projects';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section
      id="products"
      className="py-20 border-b"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="badge-editorial">Proprietary IP &amp; Tools</span>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            We don&apos;t just build AI.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
              We build with it.
            </em>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            Internal products engineered by CODEXK7 to accelerate AI deployment,
            enhance safety guardrails, and streamline multi-agent workflows.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((prod) => (
            <Link
              key={prod.id}
              href="/book-call"
              className="glass-card-hover rounded-2xl p-8 flex flex-col justify-between block text-inherit no-underline"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      background: 'rgba(168,32,32,0.07)',
                      border: '1px solid rgba(168,32,32,0.2)',
                      color: 'var(--primary)',
                    }}
                  >
                    <Zap className="h-3.5 w-3.5" style={{ color: 'var(--primary)' }} />
                    <span>STATUS: {prod.status}</span>
                  </span>
                  <ShieldCheck
                    className="h-5 w-5"
                    style={{ color: 'var(--faint-fg)' }}
                  />
                </div>

                <h3
                  className="text-2xl font-bold tracking-tight mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--foreground)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {prod.title}
                </h3>
                <p
                  className="text-xs font-semibold mb-4"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--primary)',
                  }}
                >
                  {prod.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed mb-6 font-normal"
                  style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
                >
                  {prod.description}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {prod.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-md"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: 'var(--surface-alt)',
                        border: '1px solid var(--border)',
                        color: 'var(--muted-fg)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div
                className="pt-6 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <span
                  className="text-xs"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--faint-fg)',
                  }}
                >
                  Engineering Studio Asset
                </span>
                <span
                  className="inline-flex items-center text-xs font-bold"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--primary)',
                  }}
                >
                  <span>REQUEST ACCESS</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
