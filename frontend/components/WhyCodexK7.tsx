'use client';

import { CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    title: 'AI-FIRST ENGINEERING',
    description: 'We build native agentic systems from the ground up, combining modern LLMs, vector search, and tool execution into unified codebases.',
  },
  {
    title: 'PRODUCT THINKING',
    description: 'We don’t just train models or script chains. We build complete, intuitive user interfaces, billing flows, and polished product experiences.',
  },
  {
    title: 'PRODUCTION READY',
    description: 'All deliverables undergo rigorous type checking, linting, error boundary handling, rate-limiting, and security isolation.',
  },
  {
    title: 'LONG-TERM SCALABILITY',
    description: 'Clean modular code architecture engineered to allow seamless model upgrades, API substitutions, and feature expansion over time.',
  },
];

export default function WhyCodexK7() {
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Left Headline */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
              Studio Philosophy
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mt-2 mb-6 leading-tight">
              WHY <br />
              <span className="text-[#E50914]">CODEXK7?</span>
            </h2>
            <p className="text-base text-foreground/75 leading-relaxed font-normal">
              Most agencies add wrapper APIs to generic templates. CODEXK7 designs custom AI product architecture built for performance, security, and real business impact.
            </p>
          </div>

          {/* Points List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-muted/30 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-[#E50914]" />
                    <h3 className="text-base font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-foreground/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
