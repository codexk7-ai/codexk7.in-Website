import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { HERO_LOOP_PATH } from '@/site/components/ui/svg-follow-scroll';

/**
 * Scroll-driven loop drawn in the Hero only; the lifecycle uses ConnectorLayer.
 * The existing loop geometry is reused twice (upper loop in the Hero, lower loop
 * below the lifecycle cards) and joined by a smooth connector that runs beside,
 * never through, the lifecycle heading. Anchors are plain divs marked with
 * data-rope-anchor; the path is rebuilt in page pixels whenever layout changes.
 */

const VB = { x: 470, y: -20, w: 830, h: 610 };
// Loop start / end points and their tangents, taken from HERO_LOOP_PATH.
const LOOP_START = { x: 876.605, y: 394.131 };
const LOOP_START_DIR = { x: 788.982 - 876.605, y: 335.917 - 394.131 };
const LOOP_END = { x: 953.797, y: 561.655 };
const LOOP_END_DIR = { x: 953.797 - 956.297, y: 561.655 - 483.647 };

type Box = { x: number; y: number; w: number; h: number };
type Fit = { s: number; ox: number; oy: number };

function fitBox(b: Box): Fit {
  const s = Math.min(b.w / VB.w, b.h / VB.h);
  return {
    s,
    ox: b.x + (b.w - VB.w * s) / 2 - VB.x * s,
    oy: b.y + (b.h - VB.h * s) / 2 - VB.y * s,
  };
}

function transformPath(d: string, f: Fit) {
  let i = 0;
  return d.replace(/-?\d*\.?\d+(?:e-?\d+)?/g, (n) => {
    const v = parseFloat(n);
    const out = i % 2 === 0 ? v * f.s + f.ox : v * f.s + f.oy;
    i++;
    return out.toFixed(2);
  });
}

const pt = (p: { x: number; y: number }, f: Fit) => ({ x: p.x * f.s + f.ox, y: p.y * f.s + f.oy });
const norm = (v: { x: number; y: number }) => {
  const l = Math.hypot(v.x, v.y) || 1;
  return { x: v.x / l, y: v.y / l };
};
const f2 = (n: number) => n.toFixed(2);

function contentRect(el: Element) {
  const r = document.createRange();
  r.selectNodeContents(el);
  return r.getBoundingClientRect();
}

export default function RopeJourney({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [geo, setGeo] = useState<{ d: string; w: number; h: number; stroke: number } | null>(null);

  const { scrollY } = useScroll();
  // Scroll distance at which the rope reaches the lifecycle heading box.
  const endRef = useRef(800);
  // Pure scroll mapping — no timers or autoplay. Small portion visible at the top.
  const pathLength = useTransform(scrollY, (v) => 0.06 + 0.94 * Math.min(1, Math.max(0, v / endRef.current)));

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const measure = () => {
      const rr = root.getBoundingClientRect();
      const rel = (r: DOMRect): Box => ({ x: r.left - rr.left, y: r.top - rr.top, w: r.width, h: r.height });
      const heroEl = root.querySelector('[data-rope-anchor="hero"]');
      if (!heroEl) return;
      const W = rr.width;
      const fHero = fitBox(rel(heroEl.getBoundingClientRect()));
      let d = transformPath(HERO_LOOP_PATH, fHero);
      // Hand-off: from the loop's tip, one open curve down into the top of the
      // lifecycle heading box, where the dashed connectors take over.
      const hubEl = root.querySelector('[data-rope-hub]');
      if (hubEl) {
        const hub = rel(hubEl.getBoundingClientRect());
        const p0 = pt(LOOP_END, fHero);
        const t0 = norm(LOOP_END_DIR);
        const b = { x: hub.x + hub.w * (W < 640 ? 0.5 : 0.7), y: hub.y };
        const len = Math.hypot(b.x - p0.x, b.y - p0.y);
        const c1 = { x: p0.x + t0.x * len * 0.25, y: p0.y + t0.y * len * 0.25 };
        const c2 = { x: b.x + Math.min(160, Math.abs(p0.x - b.x) * 0.45) * Math.sign(p0.x - b.x || 1), y: b.y - Math.min(110, (b.y - p0.y) * 0.45) };
        d += ` C${f2(c1.x)} ${f2(c1.y)} ${f2(c2.x)} ${f2(c2.y)} ${f2(b.x)} ${f2(b.y)}`;
        endRef.current = Math.max(200, rr.top + window.scrollY + hub.y - window.innerHeight * 0.55);
      }

      const stroke = W < 640 ? 2.5 : 3.5;
      setGeo({ d, w: W, h: rr.height, stroke });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div ref={ref} className="relative" style={{ overflowX: 'clip' }}>
      {children}
      {geo && (
        <svg
          className="pointer-events-none absolute left-0 top-0 z-0"
          width={geo.w}
          height={geo.h}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d={geo.d}
            stroke="var(--border-strong)"
            strokeWidth={geo.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.45}
          />
          {reduce ? (
            <path
              d={geo.d}
              pathLength={1}
              stroke="var(--primary)"
              strokeWidth={geo.stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="0.3 1"
            />
          ) : (
            <motion.path
              d={geo.d}
              stroke="var(--primary)"
              strokeWidth={geo.stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength }}
            />
          )}
        </svg>
      )}
    </div>
  );
}
