import { motion, useReducedMotion } from 'framer-motion';
import { CONNECTOR_DRAW } from '@/site/components/ui/connector-layer';

export default function TrustStrip() {
  const TRUST_ITEMS = [
    'AI Agentic Products',
    'AI Startups',
    'Enterprise AI',
    'Workflow Automation',
    'Digital Products',
  ];

  const reduce = useReducedMotion();
  const item = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } } };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          data-connector-node
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl px-6 py-5"
          style={{ background: 'var(--surface-alt)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: {}, visible: { transition: { delayChildren: reduce ? 0 : CONNECTOR_DRAW * 0.9, staggerChildren: 0.13 } } }}
        >
          <motion.span
            variants={item}
            className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'var(--faint-fg)',
              letterSpacing: '0.1em',
            }}
          >
            Engineered For
          </motion.span>
          <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }} className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            {TRUST_ITEMS.map((label, idx) => (
              <motion.div key={label} variants={item} className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--muted-fg)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
                {idx < TRUST_ITEMS.length - 1 && (
                  <span
                    style={{
                      color: 'var(--primary)',
                      fontSize: '0.5rem',
                      opacity: 0.5,
                    }}
                  >
                    ◆
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
