import { motion, useInView, useReducedMotion, type MotionStyle } from 'framer-motion';
import { useRef, type CSSProperties, type ReactNode } from 'react';
import { CONNECTOR_DRAW } from '@/site/components/ui/connector-layer';

/**
 * Journey stage wrapper: marks a connector node and slides the stage in from
 * its side after the incoming connector has finished drawing.
 */
export default function JourneyReveal({
  from,
  className,
  style,
  children,
}: {
  from: 'left' | 'right' | 'bottom';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  const hidden =
    from === 'left'
      ? { opacity: 0, x: -40, scale: 0.97 }
      : from === 'right'
        ? { opacity: 0, x: 40, scale: 0.97 }
        : { opacity: 0, y: 30, scale: 0.97 };
  return (
    <motion.div
      ref={ref}
      data-connector-node
      className={className}
      style={(style ?? {}) as MotionStyle}
      variants={{
        hidden: reduce ? { opacity: 0 } : hidden,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: reduce ? 0.3 : from === 'bottom' ? 0.95 : 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: reduce ? 0 : CONNECTOR_DRAW * 0.85,
            delayChildren: reduce ? 0 : CONNECTOR_DRAW * 0.85 + 0.35,
            staggerChildren: 0.07,
          },
        },
      }}
      initial="hidden"
      animate={inView || reduce ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
