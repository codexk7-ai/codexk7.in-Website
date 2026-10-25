import JourneyReveal from '@/site/components/ui/journey-reveal';

import { CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    title: 'AI-FIRST ENGINEERING',
    description:
      'We build native agentic systems from the ground up, combining modern LLMs, vector search, and tool execution into unified codebases.',
  },
  {
    title: 'PRODUCT THINKING',
    description:
      'We don\u2019t just train models or script chains. We build complete, intuitive user interfaces, billing flows, and polished product experiences.',
  },
  {
    title: 'PRODUCTION READY',
    description:
      'All deliverables undergo rigorous type checking, linting, error boundary handling, rate-limiting, and security isolation.',
  },
  {
    title: 'LONG-TERM SCALABILITY',
    description:
      'Clean modular code architecture engineered to allow seamless model upgrades, API substitutions, and feature expansion over time.',
  },
];

export default function WhyCodexK7() {
  return (
    <section
      className="py-20 border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <JourneyReveal from="bottom" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Headline */}
          <div className="lg:col-span-5">
            <span className="badge-editorial">Studio Philosophy</span>
            <h2
              className="mt-5 mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                lineHeight: 1.05,
              }}
            >
              Why{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
                CODEXK7?
              </em>
            </h2>
            <p
              className="text-base leading-relaxed font-normal"
              style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
            >
              Most agencies add wrapper APIs to generic templates. CODEXK7 designs
              custom AI product architecture built for performance, security, and
              real business impact.
            </p>
          </div>

          {/* Points List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((item) => (
              <div
                key={item.title}
                className="glass-card-hover rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0"
                      style={{ color: 'var(--primary)' }}
                    />
                    <h3
                      className="text-base font-bold tracking-tight"
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
                    className="text-xs leading-relaxed font-normal"
                    style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </JourneyReveal>
    </section>
  );
}
