const ITEMS = [
  'Agentic Systems',
  'Retrieval-Augmented Generation',
  'Tool-Using Agents',
  'AI SaaS Products',
  'Workflow Automation',
  'Voice AI',
  'Evaluation & Guardrails',
  'Production Infrastructure',
];

/** Slow, pausable ticker of capabilities. Pure CSS; freezes for reduced-motion users. */
export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <section aria-label="Capabilities overview" className="marquee overflow-hidden border-y py-5" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="marquee__track flex w-max items-center whitespace-nowrap">
        {track.map((label, i) => (
          <span
            key={`${label}-${i}`}
            aria-hidden={i >= ITEMS.length ? true : undefined}
            className="flex items-center gap-10 pr-10 font-display text-2xl sm:text-3xl italic"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--foreground)' }}
          >
            {label}
            <span aria-hidden="true" style={{ color: 'var(--primary)', fontStyle: 'normal', fontSize: '0.6em' }}>◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
