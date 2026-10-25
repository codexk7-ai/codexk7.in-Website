import Footer from '@/site/components/Footer';
import CTA from '@/site/components/CTA';
import { Clock, Lock, Bell, Globe } from 'lucide-react';
import AnimatedProductCard from '@/site/components/ui/animated-product-card';


const inProcessBadge = {
  background: 'rgba(217, 92, 32, 0.08)',
  color: '#C2410C',
  border: '1px solid rgba(217, 92, 32, 0.28)',
};
const DIWALI_URL = 'https://diwali-royale.vercel.app/';
const font = { fontFamily: "'Inter', sans-serif" };
const serif = { fontFamily: "'Cormorant Garamond', serif", color: 'var(--foreground)' };

function Badge({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) {
  return (
    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-md" style={style}>
      {children}
    </span>
  );
}

function BackList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((i) => (
        <li key={i} className="flex items-center gap-2 text-xs" style={{ ...font, color: 'var(--muted-fg)' }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
          {i}
        </li>
      ))}
    </ul>
  );
}

const ViewProject = () => (
  <a
    href={DIWALI_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs font-semibold no-underline"
    style={{ ...font, color: 'var(--primary)' }}
  >
    VIEW PROJECT ↗
  </a>
);

export default function ProductPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-16" style={{ background: 'var(--background)' }}>
      <section className="py-20 sm:py-28 border-b relative overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: 'rgba(168,32,32,0.25)', background: 'rgba(168,32,32,0.06)' }}>
            <Clock className="h-4 w-4 animate-pulse" style={{ color: 'var(--primary)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)', fontFamily: "'Inter', sans-serif" }}>
              STATUS: PROPRIETARY PRODUCTS COMING SOON
            </span>
          </div>

          {/* Page Heading */}
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Next-Gen{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>
              Agentic Tools &amp; Suites.
            </em>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-10" style={{ color: 'var(--muted-fg)', fontFamily: "'Inter', sans-serif" }}>
            We are actively engineering out-of-the-box microSaaS products and developer tooling for agentic AI deployment. Get notified when public beta opens.
          </p>

          {/* Waitlist Subscription Box */}
          <div className="max-w-md mx-auto rounded-xl p-2 sm:p-2.5 flex items-center gap-2 mb-16" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <input
              type="email"
              placeholder="Enter your work email..."
              className="w-full px-4 py-3 rounded-lg text-sm focus:outline-none"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontFamily: "'Inter', sans-serif",
              }}
            />
            <button
              type="button"
              className="btn-primary px-5 py-3 rounded-lg text-xs font-semibold uppercase transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
            >
              <span>JOIN WAITLIST</span>
              <Bell className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="text-left grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedProductCard
              label="CODEX-SWARM SDK — flip for details"
              front={
                <>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={inProcessBadge}>IN PROCESS</Badge>
                      <Lock className="h-4 w-4" style={{ color: 'var(--faint-fg)' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-1 tracking-tight" style={serif}>CODEX-SWARM SDK</h3>
                    <p className="text-xs font-semibold mb-3" style={{ ...font, color: 'var(--primary)' }}>
                      Multi-Agent Orchestration Framework
                    </p>
                    <p className="text-xs leading-relaxed mb-6 font-normal" style={{ ...font, color: 'var(--muted-fg)' }}>
                      High-throughput framework for deploying autonomous agent teams with built-in consensus loops, memory synchronization, and fallback routing.
                    </p>
                  </div>
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                    <span className="text-[11px]" style={{ ...font, color: 'var(--faint-fg)' }}>Beta Release • Q4 2026</span>
                    <span className="text-xs font-semibold" style={{ ...font, color: 'var(--primary)' }}>NOTIFY ME →</span>
                  </div>
                </>
              }
              back={
                <>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={inProcessBadge}>IN PROCESS</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight" style={serif}>Multi-agent orchestration framework</h3>
                    <BackList items={['Agent coordination', 'Planning & reasoning', 'Memory synchronization', 'Consensus loops', 'Fallback routing']} />
                  </div>
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                    <span className="text-[11px]" style={{ ...font, color: 'var(--faint-fg)' }}>CODEX-SWARM SDK</span>
                    <span className="text-xs font-semibold" style={{ ...font, color: 'var(--primary)' }}>NOTIFY ME →</span>
                  </div>
                </>
              }
            />
            <AnimatedProductCard
              label="DIWALI ROYALE — flip for details"
              front={
                <>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={{ background: 'rgba(168,32,32,0.08)', color: 'var(--primary)', border: '1px solid rgba(168,32,32,0.25)' }}>
                        INTERACTIVE WEB EXPERIENCE
                      </Badge>
                      <Globe className="h-4 w-4" style={{ color: 'var(--faint-fg)' }} />
                    </div>
                    <img
                      src="/images/diwali-royale-preview.jpg"
                      alt="Screenshot of the Diwali Royale interactive website"
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                      className="w-full aspect-[16/9] object-cover object-left-top rounded-lg mb-4"
                      style={{ border: '1px solid var(--border)' }}
                    />
                    <h3 className="text-xl font-bold mb-1 tracking-tight" style={serif}>DIWALI ROYALE</h3>
                    <p className="text-xs leading-relaxed mb-6 font-normal" style={{ ...font, color: 'var(--muted-fg)' }}>
                      An immersive Diwali-themed interactive web experience built with rich motion, festive visuals, and responsive interactions.
                    </p>
                  </div>
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                    <span className="text-[11px]" style={{ ...font, color: 'var(--faint-fg)' }}>Live Project</span>
                    <ViewProject />
                  </div>
                </>
              }
              back={
                <>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={{ background: 'rgba(168,32,32,0.08)', color: 'var(--primary)', border: '1px solid rgba(168,32,32,0.25)' }}>
                        LIVE
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-tight" style={serif}>DIWALI ROYALE</h3>
                    <BackList items={['Interactive experience', 'Motion-driven UI', 'Responsive design', 'Festive visual system']} />
                  </div>
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border)' }}>
                    <span className="text-[11px]" style={{ ...font, color: 'var(--faint-fg)' }}>diwali-royale.vercel.app</span>
                    <ViewProject />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <CTA />
      <Footer />
    </main>
  );
}
