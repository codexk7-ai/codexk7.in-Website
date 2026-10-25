import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState, type ReactNode } from 'react';

/**
 * 3D flip card: flips on mouse hover, toggles on tap for touch.
 * Front and back share one grid cell so the card takes the taller side's height.
 * Reduced motion: no 3D rotation, simple crossfade.
 */
export default function AnimatedProductCard({
  front,
  back,
  label,
}: {
  front: ReactNode;
  back: ReactNode;
  label: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const reduce = useReducedMotion();

  const handlers = {
    onPointerEnter: (e: React.PointerEvent) => e.pointerType === 'mouse' && setFlipped(true),
    onPointerLeave: (e: React.PointerEvent) => e.pointerType === 'mouse' && setFlipped(false),
    onClick: (e: React.MouseEvent) => {
      // Let links on the card work; taps elsewhere toggle (touch has no hover).
      if ((e.target as HTMLElement).closest('a')) return;
      setFlipped((f) => !f);
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    },
  };

  const face = 'card-editorial-hover rounded-xl p-6 flex flex-col justify-between [grid-area:1/1] h-full';

  if (reduce) {
    return (
      <div role="button" tabIndex={0} aria-pressed={flipped} aria-label={label} className="grid cursor-pointer" {...handlers}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={flipped ? 'back' : 'front'}
            className={face}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {flipped ? back : front}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={label}
      className="cursor-pointer"
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      {...handlers}
    >
      <motion.div
        className="grid h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className={face} style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }} aria-hidden={flipped}>
          {front}
        </div>
        <div
          className={face}
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          aria-hidden={!flipped}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}
