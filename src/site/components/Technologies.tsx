import { useState } from 'react';
import JourneyReveal from '@/site/components/ui/journey-reveal';
import { TECHNOLOGIES_DATA } from '@/site/lib/technologies';
import TechnologyCard from './TechnologyCard';

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(TECHNOLOGIES_DATA[0].id);
  const selectedCategory =
    TECHNOLOGIES_DATA.find((cat) => cat.id === activeCategory) ||
    TECHNOLOGIES_DATA[0];

  return (
    <section
      id="technology"
      className="py-20"
      style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
    >
      <div className="px-4 sm:px-6 lg:px-0">
      <JourneyReveal
        from="right"
        className="relative z-10 rounded-3xl border p-6 sm:p-10 w-full lg:w-[66%] max-w-6xl mx-auto lg:ml-auto lg:mr-[4%]"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        <div className="max-w-3xl mb-12">
          <span className="badge-editorial">Technical Stack</span>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Powered by the Modern AI Stack.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            We use production-verified frameworks, model gateways, vector
            databases, and cloud infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10 pb-4"
        >
          {TECHNOLOGIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer"
              style={{
                fontFamily: "'Inter', sans-serif",
                background:
                  activeCategory === cat.id ? 'var(--primary)' : 'var(--card)',
                color: activeCategory === cat.id ? '#fff' : 'var(--muted-fg)',
                border: `1px solid ${
                  activeCategory === cat.id ? 'var(--primary)' : 'var(--border)'
                }`,
                letterSpacing: '0.03em',
              }}
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
      </JourneyReveal>
      </div>
    </section>
  );
}
