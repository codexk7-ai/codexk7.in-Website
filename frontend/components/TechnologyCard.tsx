'use client';

interface TechItemProps {
  name: string;
  description: string;
  tag?: string;
}

export default function TechnologyCard({ name, description, tag }: TechItemProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E50914]/40 hover:shadow-xs">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-base font-bold tracking-tight text-foreground group-hover:text-[#E50914] transition-colors">
          {name}
        </h4>
        {tag && (
          <span className="text-[10px] font-mono font-semibold text-[#E50914] bg-[#E50914]/10 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        )}
      </div>
      <p className="text-xs text-foreground/70 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}
