'use client';

import { PRODUCTS_DATA } from '@/lib/projects';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-muted/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Proprietary IP & Tools
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            WE DON&apos;T JUST BUILD AI. WE BUILD WITH IT.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Internal products engineered by CODEXK7 to accelerate AI deployment, enhance safety guardrails, and streamline multi-agent workflows.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((prod) => (
            <div
              key={prod.id}
              className="rounded-2xl border border-border bg-white p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E50914] bg-[#E50914]/10 px-3 py-1 rounded-full">
                    <Zap className="h-3.5 w-3.5" />
                    <span>STATUS: {prod.status}</span>
                  </span>
                  <ShieldCheck className="h-5 w-5 text-foreground/40" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1">
                  {prod.title}
                </h3>
                <p className="text-xs font-mono text-foreground/60 mb-4 font-semibold">
                  {prod.subtitle}
                </p>
                <p className="text-sm text-foreground/75 leading-relaxed mb-6 font-normal">
                  {prod.description}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {prod.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono bg-muted px-3 py-1 rounded-md border border-border/50 text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-foreground/50">Engineering Studio Asset</span>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-xs font-mono font-bold text-[#E50914] hover:underline"
                >
                  <span>REQUEST ACCESS</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
