import { motion, useReducedMotion } from 'framer-motion';
import { riseVariants, staggerParent } from '@/site/lib/motion';

const PRINCIPLES = [
  {
    title: 'Production first',
    body: 'Every build moves through Idea, MVP, Beta, Production and Scale, with the controls each stage needs.',
  },
  {
    title: 'Deterministic where possible',
    body: 'AI is used where it earns its place. The rest of the system stays predictable, testable and cheap to run.',
  },
  {
    title: 'Guardrails by design',
    body: 'Model output is schema-validated before it touches your data. Agents get only the tools they need.',
  },
  {
    title: 'Observable by default',
    body: 'Traces, token usage, latency and cost are tracked from the first release, so problems are visible early.',
  },
];

/** Dark band that states how CODEXK7 builds. Uses the existing --surface-dark token. */
export default function DarkManifesto() {
  const reduce = useReducedMotion();
  return (
    <section
      aria-labelledby="manifesto-heading"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ background: 'var(--surface-dark)', color: '#E8E3DC' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(232,227,220,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-14"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerParent()}
        >
          <motion.span variants={riseVariants} className="badge-editorial" style={{ background: 'rgba(168,32,32,0.14)' }}>
            How We Build
          </motion.span>
          <motion.h2
            id="manifesto-heading"
            variants={riseVariants}
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F9F6F1' }}
          >
            Engineering that <em style={{ fontStyle: 'italic', color: 'var(--primary-light)' }}>survives production.</em>
          </motion.h2>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none m-0 p-0"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerParent()}
        >
          {PRINCIPLES.map((p, i) => (
            <motion.li
              key={p.title}
              variants={riseVariants}
              className="spotlight-card rounded-2xl p-7"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="font-mono text-xs" style={{ color: 'var(--primary-light)' }}>
                0{i + 1}
              </span>
              <h3 className="mt-3 mb-2 text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#F9F6F1' }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,227,220,0.7)', fontFamily: "'Inter', sans-serif" }}>
                {p.body}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
