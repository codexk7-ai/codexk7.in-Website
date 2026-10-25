/**
 * Single source of truth for motion timing. Components import these instead of
 * hard-coding durations and easings, so the whole site moves with one consistent feel.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.12,
} as const;

/** Entrance for a block that rises into place. */
export const riseVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE_OUT } },
};

/** Parent that staggers its children in. Use with `riseVariants` children. */
export const staggerParent = (delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren: STAGGER.base } },
});

/** Headline line: slides up out of a masked wrapper for a crisp, editorial reveal. */
export const lineVariants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: DURATION.slow, ease: EASE_OUT } },
};
