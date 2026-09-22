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
    <section id="agent-demo" className="py-20 bg-white border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Interactive UI Simulation
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            LIVE AGENT DEMO.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Test how CODEXK7 agentic workflows execute multi-step reasoning, tool invocations, and deterministic actions.
          </p>
        </div>

        {/* Demo Playground Layout */}
        <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-8 shadow-xs">
          {/* Top Controls: Preset Prompt Selectors */}
          <div className="mb-6">
            <label className="block text-xs font-mono font-bold text-foreground/70 uppercase mb-3">
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
                  className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                    selectedPrompt === prompt && customPrompt === ''
                      ? 'border-[#E50914] bg-white text-foreground shadow-xs ring-1 ring-[#E50914]/30 font-bold'
                      : 'border-border bg-white/70 text-foreground/70 hover:border-foreground/30'
                  }`}
                >
                  &quot;{prompt}&quot;
                </button>
              ))}
            </div>
          </div>

          {/* Action Execution Button Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs font-mono text-foreground/60">
              <Bot className="h-4 w-4 text-[#E50914]" />
              <span>Agent Mode: Deterministic Multi-Step</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-white text-xs font-mono font-medium text-foreground hover:bg-muted cursor-pointer disabled:opacity-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleRunDemo}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-foreground text-white text-xs font-mono font-bold hover:bg-[#E50914] transition-colors cursor-pointer disabled:opacity-50 shadow-xs"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>{isRunning ? 'RUNNING DEMO...' : 'EXECUTE AGENT'}</span>
              </button>
            </div>
          </div>

          {/* Terminal Console Execution Log */}
          <div className="rounded-xl border border-foreground/20 bg-foreground text-white p-5 font-mono text-xs shadow-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-white/60">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#E50914]" />
                <span>CODEXK7 Agentic Execution Console v1.0.4</span>
              </div>
              <span className="text-[10px] text-[#E50914] font-bold">
                {isRunning ? '● EXECUTING' : isCompleted ? '✓ FINISHED' : 'STANDBY'}
              </span>
            </div>

            {/* Prompt Display */}
            <div className="mb-4 text-white/80">
              <span className="text-[#E50914] font-bold">&gt; TASK: </span>
              <span>{activePrompt}</span>
            </div>

            {/* Step Trace Output */}
            <div className="space-y-2 mb-6 min-h-[100px]">
              {currentStep < 0 && (
                <div className="text-white/40 italic">Click &apos;EXECUTE AGENT&apos; to simulate workflow...</div>
              )}
              {currentLogs.steps.slice(0, currentStep + 1).map((stepText, idx) => (
                <div key={idx} className="flex items-start gap-2 text-white/90">
                  <ArrowRight className="h-3.5 w-3.5 text-[#E50914] mt-0.5 shrink-0" />
                  <span>{stepText}</span>
                </div>
              ))}
            </div>

            {/* Final Outcome Output */}
            {isCompleted && (
              <div className="p-4 rounded-lg bg-white/5 border border-white/15 text-white/90">
                <div className="flex items-center gap-2 text-[#E50914] font-bold mb-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>WORKFLOW COMPLETED</span>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-white/80">
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
