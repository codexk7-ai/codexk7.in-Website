'use client';

import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className="py-24 border-t overflow-hidden relative"
      style={{ borderColor: 'var(--border)', background: 'var(--surface-alt)' }}
    >
      {/* Subtle warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(168,32,32,0.12) 0%, rgba(168,32,32,0.04) 60%, transparent 100%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="badge-editorial inline-block mb-8">
          READY TO SHIP?
        </span>

        <h2
          className="max-w-3xl mx-auto leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Have an idea?{' '}
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
            Let&apos;s build it.
          </em>
        </h2>

        <p
          className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed font-normal mb-10"
          style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
        >
          Partner with CODEXK7 to design, engineer, and deploy intelligent AI
          systems and production-ready applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/book-call"
            className="btn-primary inline-flex items-center justify-center min-h-[3rem] px-8 rounded-lg text-sm group"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/book-call"
            className="btn-outline inline-flex items-center justify-center min-h-[3rem] px-8 rounded-lg text-sm group"
          >
            <Calendar className="mr-2 h-4 w-4" style={{ color: 'var(--primary)' }} />
            <span>BOOK A CONSULTATION</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
