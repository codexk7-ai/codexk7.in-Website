import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { Sparkles, Clock, ArrowRight, Shield, Zap, Lock, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Proprietary AI Products & Tools — CODEXK7',
  description:
    'CODEXK7 proprietary AI tools, agentic SDKs, and enterprise microSaaS modules. Coming soon.',
};

const UPCOMING_PRODUCTS = [
  {
    title: 'CODEX-SWARM SDK',
    tagline: 'Multi-Agent Orchestration Framework',
    status: 'IN PRIVATE BETA',
    description:
      'High-throughput framework for deploying autonomous agent teams with built-in consensus loops, memory synchronization, and fallback routing.',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
  },
  {
    title: 'K7-VECTOR ENGINE',
    tagline: 'Sub-10ms Hybrid RAG Indexer',
    status: 'EARLY ACCESS',
    description:
      'Enterprise vector search wrapper offering multi-modal embedding generation, dynamic reranking, and zero-trust security scoping.',
    badgeColor: 'bg-[#E50914]/10 text-[#E50914] border-[#E50914]/30',
  },
  {
    title: 'AGENT AUDIT LAB',
    tagline: 'Deterministic Agent Benchmark & Safety Evaluator',
    status: 'DEVELOPMENT PHASE',
    description:
      'Continuous verification suite for testing AI agent outputs, measuring tool invocation accuracy, and enforcing guardrail constraints.',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/30',
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-16">
      <section className="py-20 sm:py-28 border-b border-border bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E50914]/30 bg-[#E50914]/10 mb-6">
            <Clock className="h-4 w-4 text-[#E50914] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#E50914] uppercase">
              STATUS: PROPRIETARY PRODUCTS COMING SOON
            </span>
          </div>

          {/* Page Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
            NEXT-GEN AGENTIC TOOLS & SUITES.
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            We are actively engineering out-of-the-box microSaaS products and developer tooling for agentic AI deployment. Get notified when public beta opens.
          </p>

          {/* Waitlist Subscription Box */}
          <div className="max-w-md mx-auto rounded-2xl border border-border bg-muted/30 p-2 sm:p-2.5 flex items-center gap-2 shadow-xs mb-16">
            <input
              type="email"
              placeholder="Enter your work email..."
              className="w-full bg-white px-4 py-3 rounded-xl text-sm border border-border focus:outline-none focus:border-[#E50914] font-mono text-foreground placeholder:text-foreground/40"
            />
            <button
              type="button"
              className="px-5 py-3 rounded-xl bg-foreground text-white font-mono font-bold text-xs uppercase hover:bg-[#E50914] transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>JOIN WAITLIST</span>
              <Bell className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="text-left grid grid-cols-1 md:grid-cols-3 gap-6">
            {UPCOMING_PRODUCTS.map((prod) => (
              <div
                key={prod.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-xs hover:border-[#E50914]/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border ${prod.badgeColor}`}>
                      {prod.status}
                    </span>
                    <Lock className="h-4 w-4 text-foreground/30" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1 font-mono tracking-tight">
                    {prod.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#E50914] mb-3">
                    {prod.tagline}
                  </p>
                  <p className="text-xs text-foreground/75 leading-relaxed mb-6 font-normal">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-foreground/60">
                  <span>RELEASE TARGET</span>
                  <span className="font-bold text-foreground">Q4 2026</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
