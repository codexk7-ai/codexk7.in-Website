'use client';

import { Shield, Cpu, Activity, Server } from 'lucide-react';

const PILLARS = [
  {
    id: 'scalability',
    title: 'SCALABILITY',
    icon: Server,
    description: 'Serverless stateful agent architectures designed to handle concurrent LLM requests, high vector search throughput, and auto-scaling background jobs.',
    metrics: ['Asynchronous Event Queues', 'Distributed Caching', 'Horizontal Worker Scaling'],
  },
  {
    id: 'security',
    title: 'SECURITY',
    icon: Shield,
    description: 'Enterprise guardrail isolation, PII data redaction before model inference, encrypted token storage, and strict Row Level Security (RLS) data policies.',
    metrics: ['PII Redaction Layer', 'Strict Schema Validation', 'Role-Based Access Control'],
  },
  {
    id: 'observability',
    title: 'OBSERVABILITY',
    icon: Activity,
    description: 'Complete trace logging for multi-step agent reasoning, tool call duration tracking, token usage metering, and real-time error reporting.',
    metrics: ['Trace & Span Logging', 'Token Cost Attribution', 'Latency Breakdown'],
  },
  {
    id: 'reliability',
    title: 'RELIABILITY',
    icon: Cpu,
    description: 'Deterministic fallback routing, multi-provider model redundancy, self-healing retry strategies, and automated circuit breaking.',
    metrics: ['Provider Failover', 'Deterministic Retries', 'Zero-Downtime Releases'],
  },
];

export default function Engineering() {
  return (
    <section className="py-20 bg-muted/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Engineering Standard
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            ENGINEERED FOR PRODUCTION.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Every CODEXK7 system is architected around four core engineering pillars to ensure reliability under real-world workload demands.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-border bg-white p-8 shadow-xs hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-muted text-foreground">
                    <Icon className="h-6 w-6 text-[#E50914]" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-foreground/75 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                <div className="pt-5 border-t border-border/70 space-y-2">
                  {pillar.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2 text-xs font-mono text-foreground/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E50914]" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
