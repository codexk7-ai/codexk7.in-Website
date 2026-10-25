import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export type Currency = 'INR' | 'USD';
export type BudgetRange = 'under-50k' | '50k-1l' | '2l-4l' | '5l-plus';

/** Stable budget ids with their display labels per currency (USD ≈ INR / 96.15, rounded). */
export const BUDGET_OPTIONS: { id: BudgetRange; INR: string; USD: string }[] = [
  { id: 'under-50k', INR: 'Under ₹50K', USD: 'Under $520' },
  { id: '50k-1l', INR: '₹50K – ₹1L', USD: '$520 – $1,040' },
  { id: '2l-4l', INR: '₹2L – ₹4L', USD: '$2,080 – $4,160' },
  { id: '5l-plus', INR: '₹5L+', USD: '$5,200+' },
];

export function CurrencyToggle({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="inline-flex rounded-lg p-0.5" role="radiogroup" aria-label="Budget currency" style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
      {(['INR', 'USD'] as const).map((c) => {
        const active = value === c;
        return (
          <button
            key={c}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(c)}
            className="px-3 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: active ? 'var(--primary)' : 'transparent',
              color: active ? '#ffffff' : 'var(--foreground)',
            }}
          >
            {c === 'INR' ? 'INR ₹' : 'USD $'}
          </button>
        );
      })}
    </div>
  );
}

export function BudgetSelector({
  currency,
  value,
  onChange,
}: {
  currency: Currency;
  value: BudgetRange | '';
  onChange: (b: BudgetRange) => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Budget expectation">
      {BUDGET_OPTIONS.map((opt) => {
        const selected = value === opt.id;
        return (
          <motion.button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(opt.id)}
            animate={{ scale: selected && !reduce ? 1.01 : 1 }}
            className="py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer overflow-hidden"
            style={{
              fontFamily: "'Inter', sans-serif",
              border: `1px solid ${selected ? 'var(--primary)' : 'var(--border)'}`,
              background: selected ? 'var(--primary)' : 'var(--surface)',
              color: selected ? '#ffffff' : 'var(--muted-fg)',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={currency}
                className="block"
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                transition={{ duration: 0.12 }}
              >
                {opt[currency]}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
