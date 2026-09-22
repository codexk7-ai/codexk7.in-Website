'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-foreground text-white overflow-hidden relative">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914] bg-[#E50914]/20 px-3.5 py-1.5 rounded-full inline-block mb-6">
          READY TO SHIP?
        </span>

        <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-3xl mx-auto leading-tight mb-6">
          HAVE AN IDEA? <br />
          <span className="text-[#E50914]">LET&apos;S BUILD IT.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed font-normal mb-10">
          Partner with CODEXK7 to design, engineer, and deploy intelligent AI systems and production-ready applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center min-h-[3.25rem] px-8 rounded-xl bg-[#E50914] text-white font-medium text-base hover:bg-[#c70712] transition-colors duration-200 group shadow-md"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center min-h-[3.25rem] px-8 rounded-xl border border-white/20 bg-white/5 text-white font-medium text-base hover:bg-white/10 transition-colors duration-200 group"
          >
            <Calendar className="mr-2 h-4 w-4 text-[#E50914]" />
            <span>BOOK A CONSULTATION</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
