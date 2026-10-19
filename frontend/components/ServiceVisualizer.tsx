'use client';

import { useState, useEffect } from 'react';
import { Cpu, Database, Zap, ShieldCheck, Code2 } from 'lucide-react';

interface NodeItem {
  id: string;
  name: string;
  type: string;
  latency: string;
  status: 'ACTIVE' | 'PROCESSING' | 'IDLE';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div
      className="rounded-2xl p-6 relative overflow-hidden"
      style={{
        background: 'var(--surface-dark)',
        border: '1px solid rgba(168,32,32,0.12)',
        fontFamily: "'JetBrains Mono', monospace",
        color: '#E8E3DC',
      }}
    >
      {/* Header Bar */}
      <div
        className="flex items-center justify-between pb-4 mb-6 text-xs"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full animate-pulse"
            style={{ background: 'var(--primary)' }}
          />
          <span
            className="font-bold tracking-widest uppercase"
            style={{ color: 'var(--primary-on-dark)' }}
          >
            AI ENGINE REAL-TIME VISUALIZER
          </span>
        </div>
        <span style={{ color: 'rgba(232,227,220,0.6)', fontSize: '11px' }}>
          CODEXK7 SYSTEM SIMULATOR v2.4
        </span>
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
              role="button"
              tabIndex={0}
              onClick={() => setActiveNodeId(node.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveNodeId(node.id);
                }
              }}
              className="p-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-all select-none"
              style={{
                border: `1px solid ${
                  isSelected
                    ? 'rgba(168,32,32,0.5)'
                    : 'rgba(255,255,255,0.07)'
                }`,
                background: isSelected
                  ? 'rgba(168,32,32,0.08)'
                  : 'rgba(255,255,255,0.03)',
                touchAction: 'manipulation',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background:
                      isSelected || isPulsing
                        ? 'var(--primary)'
                        : 'rgba(255,255,255,0.07)',
                    color: isSelected || isPulsing ? '#fff' : 'rgba(232,227,220,0.5)',
                  }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-bold"
                      style={{ color: '#E8E3DC' }}
                    >
                      {node.name}
                    </span>
                    {isPulsing && (
                      <span
                        className="text-[11px] px-1.5 py-0.5 rounded font-bold"
                        style={{
                          background: 'rgba(168,32,32,0.15)',
                          border: '1px solid rgba(168,32,32,0.35)',
                          color: 'var(--primary-on-dark)',
                        }}
                      >
                        RUNNING
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[11px] block tracking-wider"
                    style={{ color: 'rgba(232,227,220,0.6)' }}
                  >
                    {node.type}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span
                  className="text-[11px] font-bold block"
                  style={{ color: '#6EE7B7' }}
                >
                  {node.latency}
                </span>
                <span
                  className="text-[11px] uppercase"
                  style={{ color: 'rgba(232,227,220,0.6)' }}
                >
                  LATENCY
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div
        className="p-4 rounded-xl text-xs"
        style={{
          border: '1px solid rgba(168,32,32,0.25)',
          background: 'rgba(168,32,32,0.07)',
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: 'var(--primary-on-dark)' }}
          >
            SELECTED MODULE INSPECTOR
          </span>
          <span style={{ color: 'rgba(232,227,220,0.6)', fontSize: '11px' }}>
            NODE ID: #{activeNode.id}
          </span>
        </div>
        <p
          className="text-xs leading-relaxed mb-3"
          style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(232,227,220,0.8)' }}
        >
          {activeNode.details}
        </p>
        <div
          className="flex items-center justify-between text-[11px] pt-2"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: 'rgba(232,227,220,0.6)',
          }}
        >
          <span>PIPELINE STATUS:</span>
          <span
            className="font-bold uppercase flex items-center gap-1.5"
            style={{ color: '#E8E3DC' }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: '#6EE7B7' }}
            />
            OPERATIONAL
          </span>
        </div>
      </div>
    </div>
  );
}
