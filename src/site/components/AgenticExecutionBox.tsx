import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import JourneyReveal from '@/site/components/ui/journey-reveal';
import { CONNECTOR_DRAW } from '@/site/components/ui/connector-layer';

const ITEMS = [
  { title: 'Agent Orchestration', desc: 'Graph-based control flow across planners, workers and tools.' },
  { title: 'Planning & Reasoning', desc: 'Task decomposition with reflection and self-correction.' },
  { title: 'Tool Calling', desc: 'Type-safe function schemas and validated API execution.' },
  { title: 'Memory & Context', desc: 'Short-term state, long-term memory and context windows.' },
  { title: 'Multi-Agent Coordination', desc: 'Delegation, hand-offs and shared state between agents.' },
  { title: 'Deterministic Execution', desc: 'Retries, idempotency and reproducible outcomes.' },
  { title: 'Evaluation & Guardrails', desc: 'Output checks, policy filters and regression evals.' },
];

/** Left-side journey stage listing the agentic execution layers as a stacked system diagram. */
export default function AgenticExecutionBox() {
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  return (
    <section id="agentic" className="py-20">
      <div className="px-4 sm:px-6 lg:px-0">
        <JourneyReveal
          from="left"
          className="relative z-10 rounded-3xl border p-6 sm:p-10 w-full lg:w-[58%] max-w-3xl mx-auto lg:ml-[4%] lg:mr-auto"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <span className="badge-editorial">System Architecture</span>
          <h2 className="mt-5 mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Agentic Execution{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Architecture.</em>
          </h2>

          <ol ref={listRef} className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[15px] top-4 bottom-4 w-px"
              style={{ background: 'var(--border)' }}
            />
            {ITEMS.map((item, i) => (
              <motion.li
                key={item.title}
                className="relative flex gap-4 py-3"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={inView || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: reduce ? 0 : CONNECTOR_DRAW * 0.85 + 0.5 + i * 0.12 }}
              >
                <span
                  className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[10px] font-bold"
                  style={{
                    background: 'var(--card)',
                    borderColor: 'var(--border-strong)',
                    color: 'var(--primary)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ fontFamily: "'Inter', sans-serif", color: 'var(--foreground)', fontSize: '0.8125rem', lineHeight: 1.3, margin: 0 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </JourneyReveal>
      </div>
    </section>
  );
}
