import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/** Thin reading-progress bar across the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left pointer-events-none"
      style={{ scaleX: reduce ? scrollYProgress : scaleX, background: 'var(--primary)' }}
    />
  );
}
