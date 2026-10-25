'use client';

import { useState } from 'react';
import { Brain, Wrench, PlayCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'think',
    title: 'THINK',
    subtitle: 'Reasoning & Planning Systems',
    description:
      'Autonomous reasoning engines that evaluate user queries, decompose complex goals into sequential action graphs, and maintain context across long-horizon interactions.',
    icon: Brain,
    steps: ['User Goal Parsing', 'Graph Decomposition', 'State & Memory Lookup', 'Constraint Verification'],
    output: 'Structured Plan Graph',
  },
  {
    id: 'act',
    title: 'ACT',
    subtitle: 'Tool & API Invocation',
    description:
      'Intelligent agent interfaces capable of calling REST endpoints, invoking database queries, running vector searches, and executing custom code deterministically.',
    icon: Wrench,
    steps: ['Function Selection', 'Parameter Validation', 'Secure API Request', 'Response Parsing'],
    output: 'Validated Tool Payload',
  },
  {
    id: 'execute',
    title: 'EXECUTE',
    subtitle: 'Automated Outcomes',
    description:
      'Production-ready execution pipelines that process actions in real-time, generate structured deliverables, handle retry fallbacks, and log audit traces.',
    icon: PlayCircle,
    steps: ['Workflow Trigger', 'Distributed Task Queue', 'Error Self-Healing', 'Outcome Persistence'],
    output: 'Verified Business Result',
  },
];

export default function Capabilities() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="capabilities"
      className="py-20 border-b relative overflow-hidden"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="badge-editorial">Core Operating Model</span>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            AI that does more than{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Chat.</em>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            CODEXK7 builds agentic systems designed to process intent, call
            external tools, and execute workflows to deliver verified results.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div
          className="mb-12 rounded-2xl p-4"
          style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold">
            {['INPUT', 'REASON', 'PLAN', 'TOOLS', 'EXECUTE', 'RESULT'].map(
              (step, idx) => {
                const isHighlight =
                  idx === activeStage * 2 || idx === activeStage * 2 + 1;
                return (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className="px-3 py-1.5 rounded-lg transition-all"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        border: `1px solid ${isHighlight ? 'rgba(168,32,32,0.5)' : 'var(--border)'}`,
                        background: isHighlight
                          ? 'var(--primary)'
                          : 'var(--surface)',
                        color: isHighlight ? '#fff' : 'var(--muted-fg)',
                      }}
                    >
                      {step}
                    </span>
                    {idx < 5 && (
                      <ArrowRight
                        className="h-3.5 w-3.5 hidden sm:inline"
                        style={{ color: 'var(--faint-fg)' }}
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* 3 Major Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeStage === idx;

            return (
              <div
                key={cap.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveStage(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStage(idx);
                  }
                }}
                className="relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 cursor-pointer select-none"
                style={{
                  border: `1px solid ${isActive ? 'rgba(168,32,32,0.4)' : 'var(--border)'}`,
                  background: isActive ? 'rgba(168,32,32,0.05)' : 'var(--card)',
                  boxShadow: isActive
                    ? '0 4px 20px rgba(168,32,32,0.08)'
                    : 'none',
                  touchAction: 'manipulation',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-bold tracking-widest px-3 py-1 rounded-md"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: 'rgba(168,32,32,0.07)',
                        border: '1px solid rgba(168,32,32,0.18)',
                        color: 'var(--primary)',
                      }}
                    >
                      STAGE 0{idx + 1}
                    </span>
                    <div
                      className="p-3 rounded-xl transition-colors"
                      style={{
                        background: isActive
                          ? 'var(--primary)'
                          : 'var(--surface)',
                        color: isActive ? '#fff' : 'var(--muted-fg)',
                        border: `1px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-bold tracking-tight mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--foreground)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-4"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: 'var(--primary)',
                    }}
                  >
                    {cap.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6 font-normal"
                    style={{
                      color: 'var(--muted-fg)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {cap.description}
                  </p>
                </div>

                {/* Internal Pipeline Steps */}
                <div
                  className="pt-6"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <span
                    className="text-[11px] uppercase font-semibold block mb-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: 'var(--faint-fg)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Execution Steps
                  </span>
                  <ul className="space-y-2 text-xs mb-6">
                    {cap.steps.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: 'var(--muted-fg)',
                        }}
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5"
                          style={{ color: 'var(--primary)' }}
                        />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center justify-between text-xs pt-3"
                    style={{
                      borderTop: '1px dashed var(--border)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <span style={{ color: 'var(--faint-fg)' }}>Output:</span>
                    <span
                      className="font-bold"
                      style={{ color: 'var(--primary)' }}
                    >
                      {cap.output}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
