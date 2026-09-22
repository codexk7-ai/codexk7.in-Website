# Phase 07 — How We Build Process Timeline

## Objective
Build a 5-step process timeline (01 DISCOVER, 02 ARCHITECT, 03 ENGINEER, 04 INTEGRATE, 05 DEPLOY).

## Existing Files Inspected
- `frontend/app/page.tsx`

## Files Created
- `frontend/components/Process.tsx`
- `docs/07-process.md`

## Files Modified
- `frontend/app/page.tsx` — Mounted `<Process />`

## Components Added
- `Process` (`frontend/components/Process.tsx`)

## Design Decisions
- Horizontal connector line on desktop, vertical layout on mobile.
- Red accent highlights on hover and step badges.

## Responsive Behavior
- 1 column on mobile, 5 columns on desktop (≥1024px).

## Dependencies Added
- None.

## Testing Performed
- `npx tsc --noEmit` — PASSED.
- `npm run lint` — PASSED.
- `npm run build` — PASSED.

## Issues Found & Fixed
- None.
