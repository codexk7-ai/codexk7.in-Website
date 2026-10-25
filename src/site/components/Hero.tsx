import { motion, useReducedMotion } from 'framer-motion';
import Link from '@/site/next-link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { lineVariants, riseVariants, staggerParent } from '@/site/lib/motion';
import { trackEvent } from '@/site/lib/analytics';

const FEATURES = ['Multi-Agent Planning', 'Deterministic Tool Execution', 'Production Infrastructure'];

export default function Hero() {
  const reduce = useReducedMotion();
  // With reduced motion, everything is shown immediately; otherwise it is choreographed.
  const container = reduce ? { hidden: {}, visible: {} } : staggerParent(0.15);
  const rise = reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : riseVariants;
  const line = reduce ? { hidden: { y: 0 }, visible: { y: 0 } } : lineVariants;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--background)',
        paddingTop: 'clamp(5rem, 10vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      }}
    >
      <div className="absolute inset-0 bg-warm-grid pointer-events-none" />

      <motion.div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: 720,
          height: 720,
          top: -260,
          right: -200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,32,32,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Anchor box for the upper loop of the page-wide rope (drawn by RopeJourney) */}
      <div className="hero-loop pointer-events-none absolute z-0" data-rope-anchor="hero" aria-hidden="true" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={rise} className="mb-8 inline-flex">
          <span className="badge-editorial">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
            AI Engineering &bull; Agentic Systems &bull; Product Studio
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              fontSize: 'clamp(3.25rem, 9vw, 7.5rem)',
              color: 'var(--foreground)',
            }}
          >
            {/* Each line sits in a masked wrapper and slides up into place. */}
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" variants={line} style={{ display: 'block' }}>
                We Build
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.em
                className="block"
                variants={line}
                style={{ fontStyle: 'italic', color: 'var(--primary)', display: 'block' }}
              >
                Agentic AI.
              </motion.em>
            </span>
          </h1>

          <motion.p
            variants={rise}
            className="mb-10 max-w-2xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 1.8vw, 1.1875rem)',
              color: 'var(--muted-fg)',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            CODEXK7 engineers intelligent products, AI agents, automation systems and production-ready
            applications that turn ambitious ideas into scalable technology.
          </motion.p>

          <motion.div variants={rise} className="mb-16 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/book-call" className="btn-primary min-h-[3rem] px-7 text-sm gap-2 group" onClick={() => trackEvent('cta_click', { location: 'hero_primary' })}>
              <span>Start a Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/service" className="btn-outline min-h-[3rem] px-7 text-sm gap-2 group">
              <span>Explore Our Work</span>
              <ChevronRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                style={{ color: 'var(--muted-fg)' }}
              />
            </Link>
          </motion.div>

          <motion.ul
            variants={rise}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 list-none m-0 p-0"
            style={{ borderTop: '1px solid var(--border)', fontFamily: "'Inter', sans-serif" }}
          >
            {FEATURES.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2.5"
                style={{ color: 'var(--muted-fg)', fontSize: '0.8125rem' }}
              >
                <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--primary)' }} />
                <span style={{ fontWeight: 500 }}>{label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
