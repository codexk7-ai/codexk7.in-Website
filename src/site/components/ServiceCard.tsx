
import Link from '@/site/next-link';
import type { ServiceItem, FeaturedService } from '@/site/lib/services';
import { Bot, Sparkles, Workflow, Layers, Mic, Database, Smartphone, Cpu, ArrowUpRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Sparkles,
  Workflow,
  Layers,
  Mic,
  Database,
  Smartphone,
  Cpu,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Bot;
  const isLeft = service.alignment === 'left';

  return (
    <div className={`relative flex flex-col ${isLeft ? 'lg:items-start' : 'lg:items-end'} w-full my-6 md:my-10`}>
      {/* Visual Dot Connector */}
      <div
        className={`hidden lg:flex absolute top-8 ${isLeft ? 'right-[-2.5rem]' : 'left-[-2.5rem]'} items-center justify-center z-20 pointer-events-none`}
      >
        <div
          className="h-5 w-5 rounded-full flex items-center justify-center"
          style={{
            border: '1px solid rgba(168,32,32,0.4)',
            background: 'var(--background)',
          }}
        >
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: 'var(--primary)' }}
          />
        </div>
      </div>

      {/* Main Card Surface as Clickable Link */}
      <Link
        href="/book-call"
        className="group relative w-full lg:w-[46%] glass-card-hover rounded-2xl p-6 sm:p-8 transition-all duration-300 block text-inherit no-underline"
      >
        {/* Accent Red Top Line on Hover */}
        <div
          className="absolute top-0 left-6 right-6 h-[2px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"
          style={{ background: 'var(--primary)' }}
        />

        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-md"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: 'rgba(168,32,32,0.07)',
              border: '1px solid rgba(168,32,32,0.18)',
              color: 'var(--primary)',
            }}
          >
            {service.number}
          </span>
          <div className="flex items-center gap-2">
            <div
              className="p-2.5 rounded-xl transition-colors"
              style={{
                background: 'rgba(168,32,32,0.07)',
                border: '1px solid rgba(168,32,32,0.18)',
                color: 'var(--primary)',
              }}
            >
              <IconComponent className="h-5 w-5" />
            </div>
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: 'var(--faint-fg)' }}
            />
          </div>
        </div>

        {/* Title & Description */}
        <h3
          className="text-xl font-bold tracking-tight mb-3 transition-colors group-hover:text-primary"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'var(--foreground)',
            letterSpacing: '-0.02em',
          }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-6 font-normal"
          style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
        >
          {service.description}
        </p>

        {/* Capability Tags */}
        <div
          className="flex flex-wrap gap-2 pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-md"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: 'var(--muted-fg)',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Light editorial card used for the six featured services             */
/* ------------------------------------------------------------------ */

export function FeaturedServiceCard({ service }: { service: FeaturedService }) {
  const IconComponent = ICON_MAP[service.iconName] || Bot;

  return (
    <Link href={service.href} className="svc-card group" data-accent={service.accent}>
      <div className="flex items-start justify-between">
        <span className="svc-card__number">{service.number}</span>
        <div className="flex items-center gap-3">
          <span className="svc-card__icon">
            <IconComponent className="h-[18px] w-[18px]" />
          </span>
          <ArrowUpRight className="svc-card__arrow h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      <h3 className="svc-card__title mt-10 mb-3">{service.title}</h3>
      <p className="svc-card__desc mb-8">{service.description}</p>

      <ul className="mt-auto flex flex-wrap gap-2" aria-label={`${service.title} technologies`}>
        {service.tags.map((tag) => (
          <li key={tag} className="svc-card__tag">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
