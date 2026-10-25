'use client';

import Link from 'next/link';

interface TechItemProps {
  name: string;
  description: string;
  tag?: string;
}

export default function TechnologyCard({ name, description, tag }: TechItemProps) {
  return (
    <Link
      href="/book-call"
      className="glass-card-hover rounded-xl p-5 transition-all duration-200 block text-inherit no-underline"
      title={`Consult with us regarding ${name}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4
          className="text-base font-bold tracking-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.01em',
            color: 'var(--foreground)',
          }}
        >
          {name}
        </h4>
        {tag && (
          <span
            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: 'rgba(168,32,32,0.08)',
              border: '1px solid rgba(168,32,32,0.2)',
              color: 'var(--primary)',
            }}
          >
            {tag}
          </span>
        )}
      </div>
      <p
        className="text-xs leading-relaxed font-normal"
        style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
      >
        {description}
      </p>
    </Link>
  );
}
