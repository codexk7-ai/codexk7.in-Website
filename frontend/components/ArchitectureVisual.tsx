'use client';

import { useState, useEffect } from 'react';
import { User, Cpu, Bot, Wrench, Database, FileText, CheckCircle2 } from 'lucide-react';

const NODES = [
  { id: 'user', label: 'USER', icon: User, desc: 'User Intent & Query' },
  { id: 'gateway', label: 'AI GATEWAY', icon: Cpu, desc: 'Guardrails & Rate Limit' },
  { id: 'agent', label: 'AGENT', icon: Bot, desc: 'Reasoning & Planning' },
  { id: 'tools', label: 'TOOLS', icon: Wrench, desc: 'Function Execution' },
  { id: 'rag', label: 'RAG', icon: FileText, desc: 'Hybrid Vector Search' },
  { id: 'database', label: 'DATABASE', icon: Database, desc: 'State & Persistence' },
  { id: 'action', label: 'ACTION', icon: CheckCircle2, desc: 'Production Outcome' },
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
    <section className="py-12 border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
              System Architecture
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mt-1">
              Agentic Execution Architecture
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white border border-border px-3.5 py-1.5 text-xs font-mono text-foreground/80 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#E50914] animate-ping" />
            <span>State: {EXECUTION_STEPS[activeStep]}</span>
          </div>
        </div>

        {/* Node Flow Diagram */}
        <div className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-xs overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {NODES.map((node, index) => {
              const Icon = node.icon;
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <div key={node.id} className="flex items-center flex-1">
                  {/* Node Card */}
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all duration-300 cursor-pointer w-full ${
                      isActive
                        ? 'border-[#E50914] bg-[#E50914]/5 shadow-sm scale-105'
                        : isPast
                        ? 'border-foreground/30 bg-muted/50 text-foreground'
                        : 'border-border bg-white text-foreground/60 hover:border-foreground/20'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg mb-2 ${
                        isActive
                          ? 'bg-[#E50914] text-white'
                          : isPast
                          ? 'bg-foreground/10 text-foreground'
                          : 'bg-muted text-foreground/60'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider">{node.label}</span>
                    <span className="text-[10px] text-foreground/50 mt-1 line-clamp-1">{node.desc}</span>
                  </div>

                  {/* Connector Line */}
                  {index < NODES.length - 1 && (
                    <div className="relative mx-1 w-6 sm:w-10 flex items-center justify-center">
                      <div className="h-[2px] w-full bg-border" />
                      <div
                        className={`absolute top-0 bottom-0 left-0 h-[2px] transition-all duration-500 ${
                          isPast ? 'w-full bg-[#E50914]' : isActive ? 'w-1/2 bg-[#E50914]' : 'w-0'
                        }`}
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
