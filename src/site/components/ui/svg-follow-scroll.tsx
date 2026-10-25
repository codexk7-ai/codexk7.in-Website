
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { CONNECTOR_STEP, CONNECTOR_DRAW } from '@/site/components/ui/connector-layer';
import JourneyReveal from '@/site/components/ui/journey-reveal';
import Link from '@/site/next-link';
import { ArrowRight } from 'lucide-react';
import { FEATURED_SERVICES } from '@/site/lib/services';
import { FeaturedServiceCard } from '@/site/components/ServiceCard';

const JOURNEY_STEPS = [
  { id: 'idea', label: 'IDEA', title: 'Problem Discovery', desc: 'Deconstructing intent, constraints & targets' },
  { id: 'ai', label: 'AI', title: 'Foundation Models', desc: 'Model evaluation, fine-tuning & prompt grounding' },
  { id: 'agent', label: 'AGENT', title: 'Reasoning Core', desc: 'Graph-based planning, memory & reflection loops' },
  { id: 'tools', label: 'TOOLS', title: 'Deterministic Tooling', desc: 'Type-safe schema execution & external APIs' },
  { id: 'data', label: 'DATA', title: 'Hybrid RAG & Vector Store', desc: 'Dense + sparse retrieval with citation grounding' },
  { id: 'automation', label: 'AUTOMATION', title: 'Workflow Orchestration', desc: 'Asynchronous event pipelines & self-healing runs' },
  { id: 'product', label: 'PRODUCT', title: 'Shipped to Production', desc: 'Scalable fullstack application live with monitoring' },
];


const JOURNEY_PATH = "M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89";

/** The upper, intricate loop of the journey thread — used by the Hero. */
export const HERO_LOOP_PATH = "M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655";

export const LinePath = ({
  className,
  scrollYProgress,
  d = JOURNEY_PATH,
  viewBox = '0 0 1278 2319',
  width = 1278,
  height = 2319,
  strokeWidth = 10,
  startLength = 0.15,
  endProgress = 0.95,
  trackColor = 'var(--border)',
  trackOpacity = 0.5,
  isStatic = false,
}: {
  className?: string;
  scrollYProgress: MotionValue<number>;
  d?: string;
  viewBox?: string;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
  /** Fraction of the red path visible at scroll progress 0. */
  startLength?: number;
  /** Scroll progress at which the red path is fully drawn. */
  endProgress?: number;
  trackColor?: string;
  trackOpacity?: number;
  /** Reduced-motion: render a fixed partial stroke, not bound to scroll. */
  isStatic?: boolean;
}) => {
  // Pure scroll mapping: values only change when scrollYProgress changes.
  // pathLength alone draws one continuous stroke from the path's start; an extra
  // strokeDashoffset would shift the dash and split it into disconnected pieces.
  const pathLength = useTransform(scrollYProgress, [0, endProgress], [startLength, 1], { clamp: true });

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      overflow="visible"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Background track path */}
      <path
        d={d}
        stroke={trackColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={trackOpacity}
      />
      {/* Scroll-driven stroke in CODEXK7 red */}
      {isStatic ? (
        <path
          d={d}
          pathLength={1}
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="0.45 1"
        />
      ) : (
        <motion.path
          d={d}
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
        />
      )}
    </svg>
  );
};

// Static accessible version when prefers-reduced-motion is active
const StaticVersion = () => {
  return (
    <section className="py-24 px-4 border-b" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="mx-auto max-w-4xl text-center mb-16">
        <span className="badge-editorial inline-block mb-3">
          ENGINEERING ARCHITECTURE
        </span>
        <h2 className="text-3xl font-bold sm:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          From Idea to{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Intelligent Product.</em>
        </h2>
        <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
          CODEXK7 engineers intelligent products, AI agents, automation systems and production-ready applications.
        </p>
      </div>

      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {JOURNEY_STEPS.map((step, idx) => (
          <div key={step.id} className="card-editorial p-5 rounded-xl flex items-start gap-4">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
              style={{ background: 'var(--primary)', color: '#fff' }}
            >
              0{idx + 1}
            </span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                {step.label}
              </span>
              <h3 className="text-base font-semibold text-foreground mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-xs text-muted-fg mt-1" style={{ color: 'var(--muted-fg)' }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURED_SERVICES.map((service) => (
          <FeaturedServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

const Skiper19 = () => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const cardsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardsRef, { once: true, amount: 0.4 });

  if (shouldReduceMotion) {
    return <StaticVersion />;
  }

  return (
    <section
      ref={ref}
      className="mx-auto flex w-full max-w-full flex-col items-center overflow-hidden relative pb-24"
      style={{ color: 'var(--foreground)' }}
      aria-label="CODEXK7 AI Scroll Journey"
    >
      {/* Top sticky/relative header */}
      <div className="mt-6 sm:mt-8 w-full max-w-7xl px-4 sm:px-10 lg:px-16 flex justify-center lg:justify-start">
      <div
        data-rope-hub
        data-connector-node
        className="relative z-10 flex w-full max-w-[820px] lg:w-auto flex-col items-center gap-4 text-center rounded-[2rem] border px-6 py-10 sm:px-12 sm:py-12"
        style={{ borderColor: 'var(--border)' }}
      >
        <span className="badge-editorial inline-block mb-1">
          THE ENGINEERING LIFECYCLE
        </span>

        <h2
          data-rope-avoid
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          <span className="sm:whitespace-nowrap">From Initial Idea</span> <br />
          <span className="sm:whitespace-nowrap">to <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Autonomous System.</em></span>
        </h2>

        <p
          data-rope-avoid
          className="max-w-xl text-base sm:text-lg font-normal leading-relaxed mt-2"
          style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
        >
          Scroll to follow the architecture path from raw concept into production-ready software.
        </p>
      </div>
      </div>

      {/* Middle Checkpoint Indicators */}
      <div ref={cardsRef} data-rope-anchor="cards" className="mt-14 sm:mt-16 w-full max-w-5xl px-4 relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {JOURNEY_STEPS.map((step, idx) => (
          <motion.div
            key={step.id}
            data-connector-node
            className="card-editorial p-3.5 rounded-xl flex flex-col justify-between"
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.85)' }}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: idx * CONNECTOR_STEP + CONNECTOR_DRAW * 0.8 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold" style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                0{idx + 1}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider block" style={{ fontFamily: "'Inter', sans-serif" }}>
              {step.label}
            </span>
            <span className="text-[11px] line-clamp-1 mt-1" style={{ color: 'var(--muted-fg)' }}>
              {step.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Grand Reveal Section — light editorial studio panel */}
      <JourneyReveal
        from="right"
        className="rounded-3xl w-[92%] sm:w-[94%] lg:w-[64%] max-w-6xl lg:max-w-none mt-20 sm:mt-24 lg:ml-auto lg:mr-[4%] pb-12 px-5 sm:px-10 relative z-10 border"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        <div className="pt-10 sm:pt-14 pb-8 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span
                className="text-xs font-semibold uppercase block mb-2"
                style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.12em' }}
              >
                CODEXK7 ENGINEERING STUDIO
              </span>
              <h2
                className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--foreground)' }}
              >
                We build intelligent products <br />
                <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>and AI systems.</em>
              </h2>
            </div>

            <Link
              href="/book-call"
              className="btn-primary min-h-[3rem] px-7 text-sm font-semibold inline-flex items-center gap-2 self-start lg:self-end"
            >
              <span>Start Engineering</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Six service cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURED_SERVICES.map((service) => (
            <FeaturedServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Studio Specs Footer Row */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs uppercase"
          style={{
            borderTop: '1px solid var(--border)',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'var(--muted-fg)',
          }}
        >
          <div>
            <span className="text-[10px] block" style={{ color: 'var(--primary)' }}>STUDIO ARCHITECTURE</span>
            <span className="font-semibold" style={{ color: 'var(--foreground)' }}>Fullstack &bull; Agentic &bull; Edge</span>
          </div>
          <div>
            <span className="text-[10px] block" style={{ color: 'var(--primary)' }}>OPERATIONAL STANDARD</span>
            <span className="font-semibold" style={{ color: 'var(--foreground)' }}>Deterministic &bull; Zero-Hallucination</span>
          </div>
          <div>
            <span className="text-[10px] block" style={{ color: 'var(--primary)' }}>RELIABILITY SLA</span>
            <span className="font-semibold" style={{ color: 'var(--foreground)' }}>99.99% Uptime &bull; Enterprise Ready</span>
          </div>
        </div>
      </JourneyReveal>
    </section>
  );
};

export { Skiper19 };
export default Skiper19;
