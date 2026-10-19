'use client';

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Layers, Sparkles, Workflow, Bot, Database } from 'lucide-react';

const JOURNEY_STEPS = [
  { id: 'idea', label: 'IDEA', title: 'Problem Discovery', desc: 'Deconstructing intent, constraints & targets' },
  { id: 'ai', label: 'AI', title: 'Foundation Models', desc: 'Model evaluation, fine-tuning & prompt grounding' },
  { id: 'agent', label: 'AGENT', title: 'Reasoning Core', desc: 'Graph-based planning, memory & reflection loops' },
  { id: 'tools', label: 'TOOLS', title: 'Deterministic Tooling', desc: 'Type-safe schema execution & external APIs' },
  { id: 'data', label: 'DATA', title: 'Hybrid RAG & Vector Store', desc: 'Dense + sparse retrieval with citation grounding' },
  { id: 'automation', label: 'AUTOMATION', title: 'Workflow Orchestration', desc: 'Asynchronous event pipelines & self-healing runs' },
  { id: 'product', label: 'PRODUCT', title: 'Shipped to Production', desc: 'Scalable fullstack application live with monitoring' },
];

const SERVICES_LIST = [
  { name: 'Agentic AI', icon: Bot },
  { name: 'AI Automation', icon: Workflow },
  { name: 'Generative AI', icon: Sparkles },
  { name: 'RAG Systems', icon: Database },
  { name: 'AI SaaS', icon: Layers },
  { name: 'AI Integrations', icon: Cpu },
];

const LinePath = ({
  className,
  scrollYProgress,
}: {
  className?: string;
  scrollYProgress: MotionValue<number>;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 0.95], [0.15, 1]);
  const strokeDashoffset = useTransform(pathLength, (value: number) => 1 - value);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Background track path */}
      <path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="var(--border)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.5}
      />
      {/* Animated stroke path in CODEXK7 red */}
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke="#A82020"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          pathLength,
          strokeDashoffset,
        }}
      />
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
              <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}>
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

  if (shouldReduceMotion) {
    return <StaticVersion />;
  }

  return (
    <section
      ref={ref}
      className="mx-auto flex w-full max-w-full flex-col items-center overflow-hidden relative pb-24"
      style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      aria-label="CODEXK7 AI Scroll Journey"
    >
      {/* Top sticky/relative header; the halo keeps text legible where the red path crosses it */}
      <div
        className="mt-24 sm:mt-32 relative z-10 flex w-full max-w-4xl flex-col items-center justify-center gap-4 text-center px-4"
        style={{ textShadow: '0 0 8px var(--background), 0 0 16px var(--background), 0 0 24px var(--background)' }}
      >
        <span className="badge-editorial inline-block mb-1">
          THE ENGINEERING LIFECYCLE
        </span>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          From Initial Idea <br />
          to <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Autonomous System.</em>
        </h2>

        <p
          className="max-w-xl text-base sm:text-lg font-normal leading-relaxed mt-2"
          style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
        >
          Scroll to follow the architecture path from raw concept into production-ready software.
        </p>

        {/* Ambient SVG background path */}
        <div className="absolute -right-[35%] sm:-right-[20%] lg:-right-[10%] top-6 pointer-events-none -z-10 opacity-80">
          <LinePath scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* Middle Checkpoint Indicators */}
      <div className="mt-32 w-full max-w-5xl px-4 relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {JOURNEY_STEPS.map((step, idx) => (
          <div
            key={step.id}
            className="card-editorial p-3.5 rounded-xl flex flex-col justify-between"
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(255, 255, 255, 0.85)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold" style={{ color: 'var(--primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                0{idx + 1}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider block" style={{ fontFamily: "'Inter', sans-serif" }}>
              {step.label}
            </span>
            <span className="text-xs leading-snug line-clamp-2 mt-1" style={{ color: 'var(--muted-fg)' }}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Grand Reveal Section (Dark warm charcoal contrasting block) */}
      <div
        className="mt-20 rounded-3xl sm:rounded-4xl w-[92%] sm:w-[94%] max-w-6xl pb-14 px-6 sm:px-12 relative z-10 shadow-xl border"
        style={{
          background: 'var(--surface-dark)',
          color: '#F9F6F1',
          borderColor: 'rgba(168, 32, 32, 0.2)',
        }}
      >
        <div className="pt-10 sm:pt-14 pb-8 border-b" style={{ borderColor: 'rgba(249, 246, 241, 0.1)' }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest block mb-2"
                style={{ color: 'var(--primary-on-dark)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.12em' }}
              >
                CODEXK7 ENGINEERING STUDIO
              </span>
              <h2
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We build intelligent products <br />
                <span style={{ color: 'var(--primary-on-dark)' }}>and AI systems.</span>
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

        {/* Services Matrix Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {SERVICES_LIST.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.name}
                className="p-4 rounded-xl border transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(168, 32, 32, 0.12)',
                    color: 'var(--primary-on-dark)',
                  }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <h4
                  className="text-xs sm:text-sm font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif", color: '#F9F6F1' }}
                >
                  {srv.name}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Studio Specs Footer Row */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs uppercase"
          style={{
            borderTop: '1px solid rgba(249, 246, 241, 0.1)',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(249, 246, 241, 0.6)',
          }}
        >
          <div>
            <span className="text-[11px] block" style={{ color: 'var(--primary-on-dark)' }}>STUDIO ARCHITECTURE</span>
            <span className="font-semibold text-white">Fullstack &bull; Agentic &bull; Edge</span>
          </div>
          <div>
            <span className="text-[11px] block" style={{ color: 'var(--primary-on-dark)' }}>OPERATIONAL STANDARD</span>
            <span className="font-semibold text-white">Deterministic &bull; Zero-Hallucination</span>
          </div>
          <div>
            <span className="text-[11px] block" style={{ color: 'var(--primary-on-dark)' }}>RELIABILITY SLA</span>
            <span className="font-semibold text-white">99.99% Uptime &bull; Enterprise Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skiper19 };
export default Skiper19;
