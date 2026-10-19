'use client';

import { CASE_STUDIES_DATA } from '@/lib/projects';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="py-20 border-b"
      style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="badge-editorial">Proven Engineering</span>
          <h2 className="mt-5 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Built to Ship. Built to Scale.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            Real systems engineered and battle-tested within the CODEXK7 studio stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((project) => (
            <Link
              key={project.id}
              href="/book-call"
              className="glass-card-hover group relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 block text-inherit no-underline"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-md"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: 'rgba(168,32,32,0.07)',
                      border: '1px solid rgba(168,32,32,0.2)',
                      color: 'var(--primary)',
                    }}
                  >
                    {project.badge}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: 'var(--faint-fg)',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Mockup Preview Area */}
                <div
                  className="relative mb-6 rounded-xl p-4 h-36 flex flex-col justify-between overflow-hidden"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="flex items-center justify-between pb-2"
                    style={{ borderBottom: '1px solid var(--border)' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-500/70" />
                    </div>
                    <span
                      className="text-[11px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--faint-fg)',
                      }}
                    >
                      system://{project.id}
                    </span>
                  </div>
                  <div className="my-auto flex items-center justify-center gap-2">
                    <Layers className="h-6 w-6" style={{ color: 'var(--primary)' }} />
                    <span
                      className="text-xs font-bold"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--foreground)',
                      }}
                    >
                      {project.title}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold tracking-tight mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: '-0.02em',
                    color: 'var(--foreground)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-6 font-normal"
                  style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
                >
                  {project.description}
                </p>

                <div className="mb-6 space-y-1.5">
                  {project.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2 text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--muted-fg)',
                      }}
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 flex-shrink-0"
                        style={{ color: 'var(--primary)' }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pt-5 flex items-center justify-between"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-md"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--faint-fg)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className="inline-flex items-center text-xs font-bold transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--primary)',
                  }}
                >
                  <span>REQUEST AUDIT</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
