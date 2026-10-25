/**
 * Privacy-friendly analytics and client error monitoring.
 *
 * Analytics are opt-in: the Plausible script is only injected when
 * VITE_PLAUSIBLE_DOMAIN is set (see src/routes/__root.tsx). Without it, every
 * trackEvent call is a no-op. Nothing personal is collected: no cookies, no
 * user identifiers, and error messages are truncated.
 */

type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
  }
}

export function trackEvent(name: string, props?: EventProps): void {
  try {
    window.plausible?.(name, props ? { props } : undefined);
  } catch {
    // Analytics must never break the page.
  }
}

/** Reports uncaught client errors as analytics events. Installs once. */
let monitoringInstalled = false;
export function installErrorMonitoring(): void {
  if (monitoringInstalled || typeof window === 'undefined') return;
  monitoringInstalled = true;

  window.addEventListener('error', (event) => {
    trackEvent('client_error', { message: String(event.message ?? 'unknown').slice(0, 120) });
  });
  window.addEventListener('unhandledrejection', () => {
    trackEvent('client_error', { message: 'unhandled_promise_rejection' });
  });
}
