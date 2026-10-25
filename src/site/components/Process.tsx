import JourneyReveal from '@/site/components/ui/journey-reveal';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER',
    description:
      'Deconstruct requirements, define user objectives, map AI capabilities, and specify deterministic outcome targets.',
    details: ['Goal Mapping', 'Data Audit', 'Feasibility Check'],
  },
  {
    step: '02',
    title: 'ARCHITECT',
    description:
      'Design multi-agent system state graphs, API schemas, database indexing models, and LLM guardrail boundaries.',
    details: ['System Design', 'Schema Spec', 'Security Guardrails'],
  },
  {
    step: '03',
    title: 'ENGINEER',
    description:
      'Develop full-stack web/mobile apps, agent tools, RAG retriever pipelines, and asynchronous job handlers.',
    details: ['Next.js App', 'FastAPI Backend', 'Vector Indexing'],
  },
  {
    step: '04',
    title: 'INTEGRATE',
    description:
      'Connect AI provider gateways, external REST tools, payment webhooks, and real-time event web sockets.',
    details: ['Model Gateway', 'REST Integrations', 'State Sync'],
  },
  {
    step: '05',
    title: 'DEPLOY',
    description:
      'Ship to scalable serverless cloud infrastructure with observability, usage metering, and automated CI/CD.',
    details: ['Edge Delivery', 'Token Metering', 'Health Monitoring'],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20"
      style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
    >
      <div className="px-4 sm:px-6 lg:px-0">
      <JourneyReveal
        from="left"
        className="relative z-10 rounded-3xl border p-6 sm:p-10 w-full lg:w-[66%] max-w-6xl mx-auto lg:mr-auto lg:ml-[4%]"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="badge-editorial">Engineering Methodology</span>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            From Idea to Production.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            Our structured 5-phase engineering process guarantees reliability,
            transparency, and rapid delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 h-[1px] pointer-events-none"
            style={{ background: 'var(--border)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="group flex flex-col">
                {/* Step Circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                  <div
                    className="h-14 w-14 rounded-xl flex items-center justify-center font-bold text-sm text-white transition-all duration-300 group-hover:shadow-md flex-shrink-0"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: 'var(--primary)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        'var(--primary-hover)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        'var(--primary)';
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-lg font-bold tracking-tight"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: '-0.01em',
                      color: 'var(--foreground)',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className="text-xs leading-relaxed mb-6 flex-1"
                  style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
                >
                  {item.description}
                </p>

                <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <ul className="space-y-1.5">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-2 text-xs"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: 'var(--faint-fg)',
                        }}
                      >
                        <span
                          className="h-1 w-1 rounded-full flex-shrink-0"
                          style={{ background: 'var(--primary)' }}
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </JourneyReveal>
      </div>
    </section>
  );
}
