import { motion, useReducedMotion, type Variants, type MotionStyle } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

const spring = { type: 'spring', stiffness: 400, damping: 28, mass: 0.6 } as const;
const soft = { type: 'spring', stiffness: 260, damping: 26, mass: 0.7 } as const;

/** Grid wrapper: staggers its cards in once when the grid enters the viewport. */
export function AnimatedCardGrid({ className, children, delay = 0.35 }: { className?: string; children: ReactNode; delay?: number }) {
  return (
    <motion.div
      data-connector-node
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.9, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

/** Card with a subtle spring lift on hover and staggered inner content. */
export function AnimatedEngineeringCard({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.4, staggerChildren: 0.07 } } }
    : {
        hidden: { opacity: 0, y: 25, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { ...soft, staggerChildren: 0.07, delayChildren: 0.08 } },
        hover: {
          y: -4,
          scale: 1.02,
          boxShadow: '0 18px 40px -18px rgba(28,25,23,0.22)',
          transition: spring,
        },
      };
  return (
    <motion.div
      className={className}
      variants={variants}
      {...(reduce ? {} : { whileHover: 'hover' })}
      style={{ borderRadius: '1rem' }}
    >
      {children}
    </motion.div>
  );
}

/** Inner content item: fades/unblurs in, stays still on hover. */
export function CardItem({ className, children, stagger, style }: { className?: string; children: ReactNode; stagger?: boolean; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: stagger ? 0.05 : 0 } } }
    : {
        hidden: { opacity: 0, y: 12, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1, transition: stagger ? { ...soft, staggerChildren: 0.07 } : soft },
      };
  return (
    <motion.div className={className} style={(style ?? {}) as MotionStyle} variants={variants}>
      {children}
    </motion.div>
  );
}

/** Icon that scales/rotates very slightly when its card is hovered. */
export function CardIcon({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="inline-flex"
      variants={reduce ? {} : { hover: { scale: 1.08, rotate: 3, transition: spring } }}
    >
      {children}
    </motion.span>
  );
}

/** Heading line that rises in after a delay. */
export function RiseIn({ delay, children }: { delay: number; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
