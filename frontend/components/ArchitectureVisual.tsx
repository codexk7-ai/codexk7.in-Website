'use client';

import { useState, useEffect } from 'react';
import { User, Cpu, Bot, Wrench, Database, FileText, CheckCircle2 } from 'lucide-react';

const NODES = [
  { id: 'user',     label: 'USER',       icon: User,         desc: 'User Intent & Query' },
  { id: 'gateway',  label: 'AI GATEWAY', icon: Cpu,          desc: 'Guardrails & Rate Limit' },
  { id: 'agent',    label: 'AGENT',      icon: Bot,          desc: 'Reasoning & Planning' },
  { id: 'tools',    label: 'TOOLS',      icon: Wrench,       desc: 'Function Execution' },
  { id: 'rag',      label: 'RAG',        icon: FileText,     desc: 'Hybrid Vector Search' },
  { id: 'database', label: 'DATABASE',   icon: Database,     desc: 'State & Persistence' },
  { id: 'action',   label: 'ACTION',     icon: CheckCircle2, desc: 'Production Outcome' },
];

const EXECUTION_STEPS = [
  '1. Receiving user prompt & verifying payload schema',
  '2. Routing via AI Gateway with token guardrails',
  '3. Agent initialising graph state & tool selector',
  '4. Tool execution & API invocation triggered',
  '5. Context retrieval from hybrid vector RAG store',
  '6. State persistence updated in database',
  '7. Task execution completed with deterministic output',
];

export default function ArchitectureVisual() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % NODES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-12 border-y"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{
                color: 'var(--primary)',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.1em',
              }}
            >
              System Architecture
            </span>
            <h2
              className="mt-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--foreground)',
              }}
            >
              Agentic Execution Architecture
            </h2>
          </div>
          <div
            className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs card-editorial"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--muted-fg)',
              flexShrink: 0,
            }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse flex-shrink-0"
              style={{ background: 'var(--primary)' }}
            />
            <span className="truncate max-w-[220px] sm:max-w-none">
              {EXECUTION_STEPS[activeStep]}
            </span>
          </div>
        </div>

        {/* Node Flow Diagram */}
        <div className="card-editorial rounded-2xl p-6 md:p-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[880px] gap-2">
            {NODES.map((node, index) => {
              const Icon = node.icon;
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <div key={node.id} className="flex items-center flex-1">
                  {/* Node Card */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveStep(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveStep(index);
                      }
                    }}
                    className="flex flex-col items-center text-center p-3 rounded-xl transition-all duration-300 cursor-pointer w-full select-none"
                    style={{
                      border: `1px solid ${isActive ? 'rgba(168,32,32,0.6)' : isPast ? 'rgba(168,32,32,0.2)' : 'var(--border)'}`,
                      background: isActive
                        ? 'rgba(168,32,32,0.07)'
                        : isPast
                        ? 'rgba(168,32,32,0.03)'
                        : 'var(--card)',
                      transform: isActive ? 'scale(1.06)' : 'scale(1)',
                      boxShadow: isActive ? '0 4px 20px rgba(168,32,32,0.12)' : 'none',
                      touchAction: 'manipulation',
                    }}
                  >
                    <div
                      className="p-2 rounded-lg mb-2"
                      style={{
                        background: isActive
                          ? 'var(--primary)'
                          : isPast
                          ? 'rgba(168,32,32,0.1)'
                          : 'var(--surface)',
                        color: isActive ? '#fff' : isPast ? 'var(--primary)' : 'var(--faint-fg)',
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="text-xs font-bold tracking-wider"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: isActive ? 'var(--primary)' : 'var(--muted-fg)',
                      }}
                    >
                      {node.label}
                    </span>
                    <span
                      className="text-[11px] leading-snug mt-1 line-clamp-2"
                      style={{ color: 'var(--faint-fg)', fontFamily: "'Inter', sans-serif" }}
                    >
                      {node.desc}
                    </span>
                  </div>

                  {/* Connector */}
                  {index < NODES.length - 1 && (
                    <div className="relative mx-1 w-6 sm:w-10 flex items-center justify-center">
                      <div
                        className="h-[1.5px] w-full"
                        style={{ background: 'var(--border)' }}
                      />
                      <div
                        className="absolute top-0 bottom-0 left-0 h-[1.5px] transition-all duration-500"
                        style={{
                          width: isPast ? '100%' : isActive ? '50%' : '0%',
                          background: 'var(--primary)',
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
