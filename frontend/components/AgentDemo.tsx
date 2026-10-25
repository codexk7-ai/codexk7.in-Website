'use client';

import { useState } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, Bot, ArrowRight } from 'lucide-react';

const PRESET_PROMPTS = [
  'Analyze customer churn data and propose automated retention workflow',
  'Build hybrid RAG vector index for 5,000 PDF technical documents',
  'Deploy autonomous voice agent for inbound customer appointment booking',
];

const SIMULATED_LOGS: Record<string, { steps: string[]; output: string }> = {
  'Analyze customer churn data and propose automated retention workflow': {
    steps: [
      '[1/4] INITIALIZING AGENT: Parsing goal & state variables...',
      '[2/4] TOOL SELECTED: postgres_query_tool -> fetching churn metrics.',
      '[3/4] REASONING LOOP: Identifying high-risk customer segments (usage drops > 40%).',
      '[4/4] EXECUTING WORKFLOW: Generating webhook trigger to send custom retention offer.',
    ],
    output: `STATUS: EXECUTED SUCCESS
---------------------------------------
Identified 142 at-risk accounts.
Workflow trigger: Webhook sent to CRM API.
Action result: 3-step automated email & SMS sequence initialized.`,
  },
  'Build hybrid RAG vector index for 5,000 PDF technical documents': {
    steps: [
      '[1/4] INITIALIZING RAG ENGINE: Ingesting PDF payload metadata...',
      '[2/4] TOOL SELECTED: text_chunker & openai_embedding_v3.',
      '[3/4] VECTOR SEARCH: Indexing 42,000 text chunks into Pinecone vector store.',
      '[4/4] EXECUTING WORKFLOW: Verifying hybrid sparse-dense keyword search precision.',
    ],
    output: `STATUS: EXECUTED SUCCESS
---------------------------------------
Vector index online (dimension 1536).
Hybrid RAG retrieval test: 98.4% top-k recall.
Citations engine: Enabled with line-level page matching.`,
  },
  'Deploy autonomous voice agent for inbound customer appointment booking': {
    steps: [
      '[1/4] INITIALIZING VOICE AGENT: Loading WebRTC streaming audio pipeline...',
      '[2/4] TOOL SELECTED: calendar_slot_checker & deepgram_stt.',
      '[3/4] REASONING LOOP: Checking available doctor/advisor appointment slots.',
      '[4/4] EXECUTING WORKFLOW: Booking slot & sending SMS confirmation payload.',
    ],
    output: `STATUS: EXECUTED SUCCESS
---------------------------------------
Voice stream latency: 340ms average response time.
Appointment booked: Thursday at 2:30 PM EST.
Confirmation SMS: Sent via Twilio API adapter.`,
  },
};

export default function AgentDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState(PRESET_PROMPTS[0]);
  const [customPrompt] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const activePrompt = customPrompt.trim() !== '' ? customPrompt : selectedPrompt;
  const currentLogs = SIMULATED_LOGS[selectedPrompt] || SIMULATED_LOGS[PRESET_PROMPTS[0]];

  const handleRunDemo = () => {
    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < currentLogs.steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsRunning(false);
          setIsCompleted(true);
          return prev;
        }
      });
    }, 900);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setCurrentStep(-1);
  };

  return (
    <section
      id="agent-demo"
      className="py-20 border-b"
      style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="badge-editorial">Interactive Demo</span>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Live Agent{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Demo.</em>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            Test how CODEXK7 agentic workflows execute multi-step reasoning,
            tool invocations, and deterministic actions.
          </p>
        </div>

        {/* Demo Playground Layout */}
        <div
          className="rounded-2xl p-6 md:p-8"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Preset Prompt Selectors */}
          <div className="mb-6">
            <label
              className="block text-xs font-bold uppercase mb-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: 'var(--muted-fg)',
                letterSpacing: '0.08em',
              }}
            >
              Select Sample Execution Task:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PRESET_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => {
                    setSelectedPrompt(prompt);
                    handleReset();
                  }}
                  className={`p-3.5 rounded-xl text-left text-xs transition-all cursor-pointer`}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    border: `1px solid ${
                      selectedPrompt === prompt && customPrompt === ''
                        ? 'rgba(168,32,32,0.5)'
                        : 'var(--border)'
                    }`,
                    background:
                      selectedPrompt === prompt && customPrompt === ''
                        ? 'rgba(168,32,32,0.06)'
                        : 'var(--surface)',
                    color:
                      selectedPrompt === prompt && customPrompt === ''
                        ? 'var(--foreground)'
                        : 'var(--muted-fg)',
                    fontWeight:
                      selectedPrompt === prompt && customPrompt === '' ? 700 : 400,
                  }}
                >
                  &ldquo;{prompt}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div
              className="flex items-center gap-2 text-xs"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: 'var(--muted-fg)',
              }}
            >
              <Bot className="h-4 w-4" style={{ color: 'var(--primary)' }} />
              <span>Agent Mode: Deterministic Multi-Step</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium cursor-pointer disabled:opacity-50"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--muted-fg)',
                }}
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleRunDemo}
                disabled={isRunning}
                className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold cursor-pointer disabled:opacity-50"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{isRunning ? 'RUNNING DEMO...' : 'EXECUTE AGENT'}</span>
              </button>
            </div>
          </div>

          {/* Terminal Console */}
          <div
            className="rounded-xl p-5 font-mono text-xs"
            style={{
              background: 'var(--surface-dark)',
              border: '1px solid rgba(168,32,32,0.15)',
              color: '#E8E3DC',
            }}
          >
            <div
              className="flex items-center justify-between pb-3 mb-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                <span style={{ color: 'rgba(232,227,220,0.6)' }}>
                  CODEXK7 Agentic Execution Console v1.0.4
                </span>
              </div>
              <span
                className="text-[10px] font-bold"
                style={{ color: 'var(--primary)' }}
              >
                {isRunning ? '● EXECUTING' : isCompleted ? '✓ FINISHED' : 'STANDBY'}
              </span>
            </div>

            {/* Prompt */}
            <div className="mb-4" style={{ color: 'rgba(232,227,220,0.8)' }}>
              <span className="font-bold" style={{ color: 'var(--primary)' }}>
                &gt; TASK:{' '}
              </span>
              <span>{activePrompt}</span>
            </div>

            {/* Step Trace */}
            <div className="space-y-2 mb-6 min-h-[100px]">
              {currentStep < 0 && (
                <div style={{ color: 'rgba(232,227,220,0.35)', fontStyle: 'italic' }}>
                  Click &apos;EXECUTE AGENT&apos; to simulate workflow...
                </div>
              )}
              {currentLogs.steps.slice(0, currentStep + 1).map((stepText, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2"
                  style={{ color: 'rgba(232,227,220,0.9)' }}
                >
                  <ArrowRight
                    className="h-3.5 w-3.5 mt-0.5 shrink-0"
                    style={{ color: 'var(--primary)' }}
                  />
                  <span>{stepText}</span>
                </div>
              ))}
            </div>

            {/* Result */}
            {isCompleted && (
              <div
                className="p-4 rounded-lg"
                style={{
                  background: 'rgba(168,32,32,0.08)',
                  border: '1px solid rgba(168,32,32,0.25)',
                }}
              >
                <div
                  className="flex items-center gap-2 font-bold mb-2"
                  style={{ color: 'var(--primary)' }}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  <span>WORKFLOW COMPLETED</span>
                </div>
                <pre
                  className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed"
                  style={{ color: 'rgba(232,227,220,0.8)' }}
                >
                  {currentLogs.output}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
