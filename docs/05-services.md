# Phase 05 — Services Section

## Objective
Build a reusable service card layout featuring 8 distinct CODEXK7 services with alternating left-right card placement connected by a curving dotted SVG line.

## Existing Files Inspected
- Reference screenshots attached by user
- `frontend/app/globals.css`

## Files Created
- `frontend/lib/services.ts`
- `frontend/components/Services.tsx`
- `frontend/components/ServiceCard.tsx`
- `docs/05-services.md`

## Files Modified
- `frontend/app/page.tsx` — Mounted `<Services />`
- `frontend/app/globals.css` — Added `.bg-grid-pattern`

## Components Added
- `Services` (`frontend/components/Services.tsx`)
- `ServiceCard` (`frontend/components/ServiceCard.tsx`)

## Design Decisions
- Alternating left and right card layout with central dotted connector lines matching the prompt reference design.
- Each card includes service number, Lucide icon, headline, description, capability tags, and red accent line hover state.

## Responsive Behavior
- Desktop (≥1024px) renders two-column alternating flow with dotted line connector. Mobile (<1024px) stacks cards cleanly vertically.

## Dependencies Added
- None.

## Testing Performed
- `npx tsc --noEmit` — PASSED.
- `npm run lint` — PASSED.

## Issues Found & Fixed
- Added `overflow-hidden` to avoid horizontal scrollbar from dot connectors on mobile screens.
