# Phase 19 — UI & Theme Quality Pass

## Objective
Raise the visual quality and accessibility of the existing warm editorial theme, taking product-console cues from the reference sites (lmvsystems.com, gwcdata.ai) without copying their layout, copy, or assets.

## Existing Files Inspected
`CLAUDE.md`, `AGENT.md` (§4–7, §9–10, §39), `PROMPT.md`, `docs/frontend-redesign.md`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, all home-page components, `components/ServiceVisualizer.tsx`, `app/product/page.tsx`.

## Files Created
- `docs/19-ui-theme-polish.md`

## Files Modified
- `app/globals.css` — grey tokens, new `--primary-on-dark`, heading color, eyebrow badge style
- `components/Hero.tsx` — run-trace console panel (≥1024px)
- `components/ui/svg-follow-scroll.tsx` — path layering + text halo, removed empty scroll area, second `h1` → `h2`, on-dark accent
- `components/ArchitectureVisual.tsx` — node labels wrap instead of clipping
- `components/Footer.tsx`, `components/AgentDemo.tsx`, `components/ServiceVisualizer.tsx` — dark-surface contrast
- `components/CaseStudies.tsx`, `components/TechnologyCard.tsx`, `app/about/page.tsx`, `app/product/page.tsx` — 11px text floor, AA status colors
- `components/TrustStrip.tsx` — decorative separators hidden from screen readers
- `docs/frontend-redesign.md` — token table

## Components Added
None. The hero console is inline markup in `Hero.tsx`.

## Design Decisions
- Kept the documented warm palette and fonts (Cormorant Garamond / Inter / JetBrains Mono). AGENT.md §5/§7 (white + `#e50914`, single sans font) differs; the owner chose to keep the warm theme (2026-10-20).
- Reference cues adopted: a product-UI panel instead of an illustration (hero console showing the §10 USER → ACTION pipeline), and mono uppercase eyebrows with a 6px radius instead of pills (AGENT.md: avoid excessive pills).
- `--muted-fg` `#6B6560` → `#57514B`; `--faint-fg` `#9E9890` → `#6B6560`. Faint text was 2.5–2.9:1; it is now ≥4.6:1 on every light surface, and the two grey levels keep their hierarchy.
- New `--primary-on-dark` `#E8615F` for red text on `--surface-dark` (5.25:1; `#A82020` is 2.41:1 there). Buttons keep `--primary`.
- Headings no longer force `color`; they inherit, so headings inside dark blocks stay legible.
- 11px minimum for UI text (some was 8–10px).

## Functionality Implemented
No behavior changes. The scroll-drawn path animation is kept; its section now has natural height.

## Responsive Behavior
- Hero console renders at ≥1024px only; the mobile hero is unchanged.
- Architecture diagram minimum width 700px → 880px so labels fit on two lines; it still scrolls horizontally on mobile.
- No horizontal page overflow at 375px.

## Dependencies Added
None.

## Testing Performed
- Automated WCAG contrast scan of all rendered text on `/`, `/service`, `/product`, `/about`, `/book-call`: 0 AA failures (the home page had ~66 before).
- Visual checks at 1280px and 375px.
- `npm run lint` — clean. `npx tsc --noEmit` — clean. `npm run build` — 9/9 routes static.

## Issues Found
- Reveal-block heading rendered charcoal on charcoal (global heading color), and the home page had two `h1`s.
- Red scroll path painted over the section heading; a static `translate-y` left ~1000px of empty scroll.
- Clipped architecture labels; sub-AA grey, red-on-dark, and cream-on-dark text; 8–10px text.

## Issues Fixed
All of the above.

## Remaining Work
- Unverified performance claims in copy — "99.99% Uptime" and "Zero-Hallucination" (`svg-follow-scroll.tsx`), "Sub-10ms" (`app/product/page.tsx`), simulated latency figures (`ServiceVisualizer.tsx`). AGENT.md §6 forbids fake performance numbers.
- `/book-call` has no `h1`.
- Element styles in `globals.css` are unlayered, so Tailwind size/color utilities on `h1`–`h3` are ignored.
- Unused legacy CSS aliases (`btn-gradient`, `btn-glass`, `glow-orb-*`, `badge-violet`, `gradient-text*`).

## Next Phase
Content and claims review.
