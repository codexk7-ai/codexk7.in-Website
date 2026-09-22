'use client';

import { useState, useEffect } from 'react';
import { Cpu, Database, Zap, ShieldCheck, Code2, ArrowRight, Play, RefreshCw } from 'lucide-react';

interface NodeItem {
  id: string;
  name: string;
  type: string;
  latency: string;
  status: 'ACTIVE' | 'PROCESSING' | 'IDLE';
  icon: any;
  details: string;
}

const INITIAL_NODES: NodeItem[] = [
  { id: '1', name: 'User Intent Engine', type: 'INPUT PARSER', latency: '12ms', status: 'ACTIVE', icon: Cpu, details: 'Deconstructs natural language inputs into target execution graphs.' },
  { id: '2', name: 'Vector Memory Store', type: 'RAG CONTEXT', latency: '45ms', status: 'ACTIVE', icon: Database, details: 'Queries multi-modal embeddings across high-dimensional vector space.' },
  { id: '3', name: 'Agent Reasoning Core', type: 'LLM ORCHESTRATOR', latency: '110ms', status: 'PROCESSING', icon: Zap, details: 'Generates multi-step decision trees and determines tool invocation strategy.' },
  { id: '4', name: 'Tool & API Connector', type: 'EXECUTION GATEWAY', latency: '38ms', status: 'IDLE', icon: Code2, details: 'Validates schemas and dispatches safe API calls to target endpoints.' },
  { id: '5', name: 'Verification & Guard', type: 'SAFETY EVALUATOR', latency: '18ms', status: 'IDLE', icon: ShieldCheck, details: 'Audits outputs against safety rules and business constraint benchmarks.' },
];

export default function ServiceVisualizer() {
  const [activeNodeId, setActiveNodeId] = useState('3');
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % INITIAL_NODES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const activeNode = INITIAL_NODES.find((n) => n.id === activeNodeId) || INITIAL_NODES[2];

  return (
    <div className="rounded-2xl border border-border bg-foreground text-white p-6 shadow-xl relative overflow-hidden font-mono">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#E50914]/15 blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#E50914] animate-pulse" />
          <span className="font-bold tracking-widest text-[#E50914] uppercase">AI ENGINE REAL-TIME VISUALIZER</span>
        </div>
        <span className="text-white/40 text-[11px]">CODEXK7 SYSTEM SIMULATOR v2.4</span>
      </div>

      {/* Node Flow Diagram */}
      <div className="space-y-3 mb-6">
        {INITIAL_NODES.map((node, index) => {
          const Icon = node.icon;
          const isSelected = node.id === activeNodeId;
          const isPulsing = index === pulseIndex;

          return (
            <div
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                isSelected
                  ? 'border-[#E50914] bg-white/10 ring-1 ring-[#E50914]/50'
                  : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isSelected || isPulsing ? 'bg-[#E50914] text-white' : 'bg-white/10 text-white/70'}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white">{node.name}</span>
                    {isPulsing && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/40 font-bold">
                        RUNNING
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-white/50 block tracking-wider">{node.type}</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-bold text-emerald-400 block">{node.latency}</span>
                <span className="text-[9px] text-white/40 uppercase">LATENCY</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className="p-4 rounded-xl border border-[#E50914]/30 bg-[#E50914]/10 text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E50914]">SELECTED MODULE INSPECTOR</span>
          <span className="text-[10px] text-white/60">NODE ID: #{activeNode.id}</span>
        </div>
        <p className="text-xs text-white/90 leading-relaxed font-sans mb-3">
          {activeNode.details}
        </p>
        <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10 text-white/60">
          <span>PIPELINE STATUS:</span>
          <span className="font-bold text-white uppercase flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            OPERATIONAL
          </span>
        </div>
      </div>
    </div>
  );
}
