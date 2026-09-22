export default function TrustStrip() {
  const TRUST_ITEMS = [
    'AI AGENTIC PRODUCTS',
    'AI STARTUPS',
    'ENTERPRISE AI',
    'WORKFLOW AUTOMATION',
    'DIGITAL PRODUCTS',
  ];

  return (
    <section className="py-6 border-b border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono font-bold tracking-widest text-foreground/50 whitespace-nowrap">
            ENGINEERED FOR
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-8 gap-y-2 text-xs font-mono font-semibold tracking-wider text-foreground/80">
            {TRUST_ITEMS.map((item, idx) => (
              <div key={item} className="flex items-center gap-3">
                <span className="hover:text-[#E50914] transition-colors">{item}</span>
                {idx < TRUST_ITEMS.length - 1 && (
                  <span className="text-[#E50914] text-[10px]">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
