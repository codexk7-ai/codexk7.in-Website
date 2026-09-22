'use client';

import { useState } from 'react';
import { TECHNOLOGIES_DATA } from '@/lib/technologies';
import TechnologyCard from './TechnologyCard';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(TECHNOLOGIES_DATA[0].id);

  const selectedCategory = TECHNOLOGIES_DATA.find((cat) => cat.id === activeCategory) || TECHNOLOGIES_DATA[0];

  return (
    <section id="technology" className="py-20 bg-muted/30 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Technical Stack
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            POWERED BY THE MODERN AI STACK.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            We use production-verified frameworks, model gateways, vector databases, and cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border">
          {TECHNOLOGIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-foreground text-white shadow-xs'
                  : 'bg-white border border-border text-foreground/70 hover:border-foreground/30 hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.items.map((tech) => (
            <TechnologyCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              tag={tech.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
