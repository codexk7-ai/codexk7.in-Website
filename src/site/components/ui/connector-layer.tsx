import { motion } from 'framer-motion';
import { useEffect, useRef, useState, type RefObject } from 'react';

/**
 * Individual dashed Bézier connectors between consecutive lifecycle nodes
 * (heading box → 01 … 07 → studio panel). Positions are measured from elements
 * marked data-connector-node inside the container, so paths stay attached when
 * layout changes. Each path draws in sequence once `active` turns true.
 */

type Box = { x: number; y: number; w: number; h: number };
type P = { x: number; y: number };
type Seg = { d: string; a: P; b: P };

export const CONNECTOR_STEP = 0.75; // seconds between successive connectors
export const CONNECTOR_DRAW = 1.6; // draw duration per connector

const f = (n: number) => n.toFixed(1);

function build(boxes: Box[], W: number): Seg[] {
  const segs: Seg[] = [];
  const mobile = W < 640;
  for (let i = 0; i < boxes.length - 1; i++) {
    const s = boxes[i]!;
    const t = boxes[i + 1]!;
    const sameRow = Math.abs(s.y - t.y) < 8 && Math.abs(s.h - t.h) < 8;
    let a: P;
    let b: P;
    let c1: P;
    let c2: P;
    if (sameRow) {
      // Arc over the top between neighbouring cards.
      a = { x: s.x + s.w / 2, y: s.y };
      b = { x: t.x + t.w / 2, y: t.y };
      const lift = Math.min(70, Math.abs(b.x - a.x) * 0.55) + 12;
      c1 = { x: a.x + (b.x - a.x) * 0.15, y: a.y - lift };
      c2 = { x: b.x - (b.x - a.x) * 0.15, y: b.y - lift };
    } else {
      // Leave from the bottom, sweep down into the next node's top (S-curve).
      const sc = s.x + s.w / 2;
      const tc = t.x + t.w / 2;
      const sign = Math.abs(tc - sc) < 4 ? 1 : Math.sign(tc - sc);
      const wideT = t.w > 300;
      a = { x: i === 0 && s.w > 300 && !mobile ? s.x + s.w * 0.12 : sc, y: s.y + s.h };
      b = { x: wideT ? tc - sign * t.w * 0.18 : tc, y: t.y };
      const dy = Math.max(b.y - a.y, 30);
      const k = mobile ? 0.8 : 0.6;
      c1 = { x: a.x, y: a.y + dy * k };
      c2 = { x: b.x, y: b.y - dy * k };
    }
    segs.push({
      d: `M${f(a.x)} ${f(a.y)} C${f(c1.x)} ${f(c1.y)} ${f(c2.x)} ${f(c2.y)} ${f(b.x)} ${f(b.y)}`,
      a,
      b,
    });
  }
  return segs;
}

export default function ConnectorLayer({
  containerRef,

  reduce,
}: {
  containerRef: RefObject<HTMLElement | null>;
  reduce: boolean;
}) {
  const [geo, setGeo] = useState<{ w: number; h: number; segs: Seg[] } | null>(null);
  // delays[i] set once segment i should draw (it activates when its end node is in view).
  const [delays, setDelays] = useState<number[]>([]);
  const revealedRef = useRef(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-connector-node]'));
    const io = new IntersectionObserver(
      (entries) => {
        let target = revealedRef.current;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const idx = nodes.indexOf(e.target as HTMLElement);
          if (idx > 0) target = Math.max(target, idx);
        }
        const from = revealedRef.current;
        if (target <= from) return;
        revealedRef.current = target;
        setDelays((d) => {
          const next = d.slice();
          for (let i = from; i < target; i++) next[i] = (i - from) * CONNECTOR_STEP;
          return next;
        });
      },
      { threshold: 0.35 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const measure = () => {
      const rr = root.getBoundingClientRect();
      const nodes = Array.from(root.querySelectorAll<HTMLElement>('[data-connector-node]'));
      const boxes = nodes.map((el) => {
        // offsetTop-based geometry ignores in-flight entrance transforms.
        let x = 0;
        let y = 0;
        let n: HTMLElement | null = el;
        while (n && n !== root) {
          x += n.offsetLeft;
          y += n.offsetTop;
          n = n.offsetParent as HTMLElement | null;
        }
        if (n !== root) {
          const r = el.getBoundingClientRect();
          return { x: r.left - rr.left, y: r.top - rr.top, w: r.width, h: r.height };
        }
        return { x, y, w: el.offsetWidth, h: el.offsetHeight };
      });
      setGeo({ w: rr.width, h: rr.height, segs: build(boxes, rr.width) });
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
  }, [containerRef]);

  if (!geo) return null;

  return (
    <svg
      className="pointer-events-none absolute left-0 top-0 z-0"
      width={geo.w}
      height={geo.h}
      viewBox={`0 0 ${geo.w} ${geo.h}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {geo.segs.map((s, i) => (
          <mask id={`lc-conn-${i}`} key={i} maskUnits="userSpaceOnUse">
            <motion.path
              d={s.d}
              stroke="#fff"
              strokeWidth={8}
              strokeLinecap="round"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: reduce || delays[i] !== undefined ? 1 : 0 }}
              transition={{
                duration: reduce ? 0 : CONNECTOR_DRAW,
                delay: reduce ? 0 : (delays[i] ?? 0),
                ease: [0.65, 0, 0.35, 1],
              }}
            />
          </mask>
        ))}
      </defs>
      {geo.segs.map((s, i) => (
        <g key={i}>
          <path
            d={s.d}
            mask={`url(#lc-conn-${i})`}
            stroke="var(--border-strong)"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeDasharray="6 8"
          />
          {[s.a, s.b].map((p, k) => (
            <motion.circle
              key={k}
              cx={p.x}
              cy={p.y}
              r={4}
              fill="var(--background)"
              stroke="var(--border-strong)"
              strokeWidth={1.75}
              initial={{ opacity: reduce ? 1 : 0 }}
              animate={{ opacity: reduce || delays[i] !== undefined ? 1 : 0 }}
              transition={{
                duration: reduce ? 0 : 0.4,
                delay: reduce ? 0 : (delays[i] ?? 0) + (k ? CONNECTOR_DRAW * 0.9 : 0),
              }}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}
