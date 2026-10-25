/**
 * Global spotlight: any element with `.spotlight-card` (or `.glass-card-hover`)
 * gets its pointer position written to --mx / --my, which the CSS radial glow reads.
 * One delegated listener serves the whole site.
 */
export function installSpotlight(): () => void {
  const onMove = (event: PointerEvent) => {
    const target = (event.target as Element | null)?.closest?.('.spotlight-card, .glass-card-hover') as HTMLElement | null;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };
  document.addEventListener('pointermove', onMove, { passive: true });
  return () => document.removeEventListener('pointermove', onMove);
}
