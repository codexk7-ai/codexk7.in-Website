'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, Cpu, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider text-foreground/80 shadow-xs mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#E50914] animate-pulse" />
          <span>AI ENGINEERING • AGENTIC SYSTEMS • PRODUCT STUDIO</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.08] mb-6">
            WE BUILD <br className="hidden sm:inline" />
            <span className="text-[#E50914] relative inline-block">
              AGENTIC AI.
              <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#E50914]/20 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg sm:text-xl text-foreground/75 leading-relaxed font-normal mb-10">
            CODEXK7 engineers intelligent products, AI agents, automation systems and production-ready applications that turn ambitious ideas into scalable technology.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center min-h-[3.25rem] px-7 rounded-xl bg-foreground text-white font-medium text-base hover:bg-[#E50914] transition-all duration-200 group shadow-sm hover:shadow-md"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center min-h-[3.25rem] px-7 rounded-xl border border-border bg-white text-foreground font-medium text-base hover:bg-muted transition-colors duration-200 group"
            >
              <span>EXPLORE OUR WORK</span>
              <ChevronRight className="ml-1 h-4 w-4 text-foreground/60 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Supporting Technical Feature Tags */}
          <div className="pt-8 border-t border-border/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-foreground/70">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-[#E50914]" />
              <span>Multi-Agent Planning</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-[#E50914]" />
              <span>Deterministic Tool Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#E50914]" />
              <span>Production Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
