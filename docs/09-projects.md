# Phase 09 — Case Studies & Real Projects

## Objective
Display verified internal studio products and engineering case studies with badges ("CODEXK7 PRODUCT", "INTERNAL PRODUCT", "ENGINEERING CASE").

## Existing Files Inspected
- `frontend/app/page.tsx`

## Files Created
- `frontend/lib/projects.ts`
- `frontend/components/CaseStudies.tsx`
- `docs/09-projects.md`

## Files Modified
- `frontend/app/page.tsx` — Mounted `<CaseStudies />`

## Components Added
- `CaseStudies` (`frontend/components/CaseStudies.tsx`)

## Design Decisions
- Strict adherence to rule against inventing client stats/reviews. Mockup terminal window header per card.

## Responsive Behavior
- 1 column on mobile, 3 columns on desktop.

## Dependencies Added
- None.

## Testing Performed
- `npx tsc --noEmit` — PASSED.
- `npm run lint` — PASSED.
- `npm run build` — PASSED.

## Issues Found & Fixed
- None.
