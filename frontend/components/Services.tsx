'use client';

import { SERVICES_DATA } from '@/lib/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 border-b overflow-hidden"
      style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="badge-editorial">Engineering Capabilities</span>
          <h2
            className="mt-5 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            From Idea to{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
              Intelligent Product.
            </em>
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}
          >
            We design, engineer and deploy AI-powered products across web, mobile
            and enterprise environments with production stability.
          </p>
        </div>

        {/* Alternating Cards Container */}
        <div className="relative">
          {/* Central Dotted Line for Desktop */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] pointer-events-none z-10">
            <svg className="w-full h-full" overflow="visible">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="var(--border-strong)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeOpacity="0.7"
              />
            </svg>
          </div>

          {/* Cards List */}
          <div className="flex flex-col">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
