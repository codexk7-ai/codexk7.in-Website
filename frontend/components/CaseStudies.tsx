'use client';

import { CASE_STUDIES_DATA } from '@/lib/projects';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section id="projects" className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Proven Engineering
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            BUILT TO SHIP. BUILT TO SCALE.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Real systems engineered and battle-tested within the CODEXK7 studio stack.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E50914]/40 hover:shadow-lg"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] font-bold text-[#E50914] bg-[#E50914]/10 px-2.5 py-1 rounded-md">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-foreground/50">
                    {project.category}
                  </span>
                </div>

                {/* Mockup Preview Area */}
                <div className="relative mb-6 rounded-xl border border-border/80 bg-muted/60 p-4 h-36 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] font-mono text-foreground/40">system://{project.id}</span>
                  </div>

                  <div className="my-auto flex items-center justify-center gap-2 text-foreground/60">
                    <Layers className="h-6 w-6 text-[#E50914]" />
                    <span className="font-mono text-xs font-bold text-foreground">{project.title}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-[#E50914] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-foreground/75 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6 space-y-1.5">
                  {project.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-mono text-foreground/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#E50914]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Footer & CTA */}
              <div className="pt-5 border-t border-border/70 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded-md border border-border/40 text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center text-xs font-mono font-bold text-foreground group-hover:text-[#E50914] transition-colors"
                >
                  <span>REQUEST AUDIT</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
