'use client';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Deconstruct requirements, define user objectives, map AI capabilities, and specify deterministic outcome targets.',
    details: ['Goal Mapping', 'Data Audit', 'Feasibility Check'],
  },
  {
    step: '02',
    title: 'ARCHITECT',
    description: 'Design multi-agent system state graphs, API schemas, database indexing models, and LLM guardrail boundaries.',
    details: ['System Design', 'Schema Spec', 'Security Guardrails'],
  },
  {
    step: '03',
    title: 'ENGINEER',
    description: 'Develop full-stack web/mobile apps, agent tools, RAG retriever pipelines, and asynchronous job handlers.',
    details: ['Next.js App', 'FastAPI Backend', 'Vector Indexing'],
  },
  {
    step: '04',
    title: 'INTEGRATE',
    description: 'Connect AI provider gateways, external REST tools, payment webhooks, and real-time event web sockets.',
    details: ['Model Gateway', 'REST Integrations', 'State Sync'],
  },
  {
    step: '05',
    title: 'DEPLOY',
    description: 'Ship to scalable serverless cloud infrastructure with observability, usage metering, and automated CI/CD.',
    details: ['Edge Delivery', 'Token Metering', 'Health Monitoring'],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Engineering Methodology
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            FROM IDEA TO PRODUCTION.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Our structured 5-phase engineering process guarantees reliability, transparency, and rapid delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px] bg-border pointer-events-none" />

          {/* Process Grid (Responsive: vertical on mobile, horizontal on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="group flex flex-col justify-between">
                <div>
                  {/* Step Circle Header */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                    <div className="h-12 w-12 rounded-xl bg-foreground text-white flex items-center justify-center font-mono font-bold text-sm group-hover:bg-[#E50914] transition-colors shadow-xs">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-[#E50914] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-foreground/75 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Sub-bullet details */}
                <div className="pt-4 border-t border-border/60">
                  <ul className="space-y-1 text-[11px] font-mono text-foreground/70">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#E50914]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
