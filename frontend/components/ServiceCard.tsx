'use client';

import { ServiceItem } from '@/lib/services';
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
      {/* Visual Dot Connector for SVG Dotted Line Node */}
      <div className={`hidden lg:flex absolute top-8 ${isLeft ? 'right-[-2.5rem]' : 'left-[-2.5rem]'} items-center justify-center z-20 pointer-events-none`}>
        <div className="h-5 w-5 rounded-full border-2 border-foreground bg-white flex items-center justify-center shadow-xs">
          <div className="h-2 w-2 rounded-full bg-[#E50914]" />
        </div>
      </div>

      {/* Main Card Surface */}
      <div className="group relative w-full lg:w-[46%] rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E50914]/40 hover:shadow-lg">
        {/* Accent Red Top Line on Hover */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#E50914] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-bold text-[#E50914] bg-[#E50914]/10 px-2.5 py-1 rounded-md">
            {service.number}
          </span>
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-muted text-foreground transition-colors group-hover:bg-[#E50914] group-hover:text-white">
              <IconComponent className="h-5 w-5" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-transform group-hover:text-[#E50914] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-[#E50914] transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-foreground/70 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Capability Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center text-[11px] font-mono font-medium text-foreground/80 bg-muted px-2.5 py-1 rounded-md border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
