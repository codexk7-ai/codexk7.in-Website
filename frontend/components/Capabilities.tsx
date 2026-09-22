'use client';

import { useState } from 'react';
import { Brain, Wrench, PlayCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    id: 'think',
    title: 'THINK',
    subtitle: 'Reasoning & Planning Systems',
    description: 'Autonomous reasoning engines that evaluate user queries, decompose complex goals into sequential action graphs, and maintain context across long-horizon interactions.',
    icon: Brain,
    steps: ['User Goal Parsing', 'Graph Decomposition', 'State & Memory Lookup', 'Constraint Verification'],
    output: 'Structured Plan Graph',
  },
  {
    id: 'act',
    title: 'ACT',
    subtitle: 'Tool & API Invocation',
    description: 'Intelligent agent interfaces capable of calling REST endpoints, invoking database queries, running vector searches, and executing custom code deterministically.',
    icon: Wrench,
    steps: ['Function Selection', 'Parameter Validation', 'Secure API Request', 'Response Parsing'],
    output: 'Validated Tool Payload',
  },
  {
    id: 'execute',
    title: 'EXECUTE',
    subtitle: 'Automated Outcomes',
    description: 'Production-ready execution pipelines that process actions in real-time, generate structured deliverables, handle retry fallbacks, and log audit traces.',
    icon: PlayCircle,
    steps: ['Workflow Trigger', 'Distributed Task Queue', 'Error Self-Healing', 'Outcome Persistence'],
    output: 'Verified Business Result',
  },
];

export default function Capabilities() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="capabilities" className="py-20 bg-muted/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Core Operating Model
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            AI THAT DOES MORE THAN CHAT.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            CODEXK7 builds agentic systems designed to process intent, call external tools, and execute workflows to deliver verified results.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="mb-12 rounded-2xl border border-border bg-white p-4 shadow-2xs">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold">
            {['INPUT', 'REASON', 'PLAN', 'TOOLS', 'EXECUTE', 'RESULT'].map((step, idx) => {
              const isHighlight = idx === activeStage * 2 || idx === activeStage * 2 + 1;
              return (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      isHighlight
                        ? 'border-[#E50914] bg-[#E50914] text-white shadow-xs'
                        : 'border-border bg-muted text-foreground/70'
                    }`}
                  >
                    {step}
                  </span>
                  {idx < 5 && <ArrowRight className="h-3.5 w-3.5 text-foreground/30 hidden sm:inline" />}
                </div>
              );
            })}
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
                onClick={() => setActiveStage(idx)}
                className={`relative flex flex-col justify-between rounded-2xl border bg-white p-8 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-[#E50914] shadow-md ring-1 ring-[#E50914]/20'
                    : 'border-border shadow-xs hover:border-foreground/30'
                }`}
              >
                {/* Accent Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#E50914] bg-[#E50914]/10 px-3 py-1 rounded-md">
                      STAGE 0{idx + 1}
                    </span>
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-[#E50914] text-white' : 'bg-muted text-foreground'}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-foreground/60 mb-4 font-semibold">
                    {cap.subtitle}
                  </p>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Internal Pipeline Steps */}
                <div className="pt-6 border-t border-border/70">
                  <span className="text-[11px] font-mono text-foreground/50 uppercase font-semibold block mb-3">
                    Execution Steps
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-foreground/80 mb-6">
                    {cap.steps.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#E50914]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-xs font-mono pt-3 border-t border-dashed border-border text-foreground/70">
                    <span>Output:</span>
                    <span className="font-bold text-[#E50914]">{cap.output}</span>
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
