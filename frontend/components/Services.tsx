'use client';

import { SERVICES_DATA } from '@/lib/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden border-b border-border">
      {/* Technical Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#E50914]">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mt-2 mb-4">
            FROM IDEA TO INTELLIGENT PRODUCT.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            We design, engineer and deploy AI-powered products across web, mobile and enterprise environments with production stability.
          </p>
        </div>

        {/* Alternating Cards Container with Dotted Connecting Curve */}
        <div className="relative">
          {/* Central S-Curve Dotted Line for Desktop (≥1024px) */}
          <div className="hidden lg:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-[2px] pointer-events-none z-10">
            <svg className="w-full h-full" overflow="visible">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#000000"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeOpacity="0.3"
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
