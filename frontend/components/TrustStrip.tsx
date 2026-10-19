export default function TrustStrip() {
  const TRUST_ITEMS = [
    'AI Agentic Products',
    'AI Startups',
    'Enterprise AI',
    'Workflow Automation',
    'Digital Products',
  ];

  return (
    <section
      className="py-5 border-b"
      style={{ borderColor: 'var(--border)', background: 'var(--surface-alt)' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span
            className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: 'var(--faint-fg)',
              letterSpacing: '0.1em',
            }}
          >
            Engineered For
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            {TRUST_ITEMS.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: 'var(--muted-fg)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
                {idx < TRUST_ITEMS.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{
                      color: 'var(--primary)',
                      fontSize: '0.5rem',
                      opacity: 0.5,
                    }}
                  >
                    ◆
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
