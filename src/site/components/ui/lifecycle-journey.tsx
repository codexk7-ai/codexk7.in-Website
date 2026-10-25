import { useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import ConnectorLayer from '@/site/components/ui/connector-layer';

/** Positioned wrapper hosting one ConnectorLayer across several page sections. */
export default function LifecycleJourney({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  return (
    <div ref={ref} className="relative" style={{ overflowX: 'clip' }}>
      <ConnectorLayer containerRef={ref} reduce={reduce} />
      {children}
    </div>
  );
}
