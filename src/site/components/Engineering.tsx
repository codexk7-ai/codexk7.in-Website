import JourneyReveal from '@/site/components/ui/journey-reveal';
import { CardItem } from '@/site/components/ui/animated-engineering-card';

import { Shield, Cpu, Activity, Server } from 'lucide-react';

const PILLARS = [
  {
    id: 'scalability',
    title: 'SCALABILITY',
    icon: Server,
    description:
      'Serverless stateful agent architectures designed to handle concurrent LLM requests, high vector search throughput, and auto-scaling background jobs.',
    metrics: ['Asynchronous Event Queues', 'Distributed Caching', 'Horizontal Worker Scaling'],
  },
  {
    id: 'security',
    title: 'SECURITY',
    icon: Shield,
    description:
      'Enterprise guardrail isolation, PII data redaction before model inference, encrypted token storage, and strict Row Level Security (RLS) data policies.',
    metrics: ['PII Redaction Layer', 'Strict Schema Validation', 'Role-Based Access Control'],
  },
  {
    id: 'observability',
    title: 'OBSERVABILITY',
    icon: Activity,
    description:
      'Complete trace logging for multi-step agent reasoning, tool call duration tracking, token usage metering, and real-time error reporting.',
    metrics: ['Trace & Span Logging', 'Token Cost Attribution', 'Latency Breakdown'],
  },
  {
    id: 'reliability',
    title: 'RELIABILITY',
    icon: Cpu,
    description:
      'Deterministic fallback routing, multi-provider model redundancy, self-healing retry strategies, and automated circuit breaking.',
    metrics: ['Provider Failover', 'Deterministic Retries', 'Zero-Downtime Releases'],
  },
];

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="py-20"
    >
      <div className="px-4 sm:px-6 lg:px-0">
      <JourneyReveal from="right" className="relative z-10 w-full lg:w-[66%] max-w-6xl mx-auto lg:ml-auto lg:mr-[4%]">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <CardItem><span className="badge-editorial">Engineering Standard</span></CardItem>
          <CardItem>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Engineered for{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
              Production.
            </em>
          </h2>
          </CardItem>
          <CardItem>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            Every CODEXK7 system is architected around four core engineering
            pillars to ensure reliability under real-world workload demands.
          </p>
          </CardItem>
        </div>

        {/* Pillars Grid */}
        <CardItem stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <CardItem key={pillar.id}><div className="glass-card-hover rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: 'rgba(168,32,32,0.08)',
                      border: '1px solid rgba(168,32,32,0.18)',
                      color: 'var(--primary)',
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className="text-xl font-bold tracking-tight"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: 'var(--foreground)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {pillar.title}
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6 font-normal"
                  style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
                >
                  {pillar.description}
                </p>

                <div
                  className="pt-5 space-y-2"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  {pillar.metrics.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'var(--muted-fg)',
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: 'var(--primary)' }}
                      />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div></CardItem>
            );
          })}
        </CardItem>
      </JourneyReveal>
      </div>
    </section>
  );
}
