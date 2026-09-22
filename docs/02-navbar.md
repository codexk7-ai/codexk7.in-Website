# Phase 02 — Navbar

## Objective

Add a reusable sticky CODEXK7 navbar with desktop links, a Book Free Call control, and an accessible mobile menu. No Hero or other sections.

## Files Created

- `frontend/components/Navbar.tsx`
- `docs/02-navbar.md`

## Files Modified

- `frontend/app/layout.tsx` — render `<Navbar />`
- `frontend/app/globals.css` — header, menu, and CTA styles

Removed `frontend/components/.gitkeep` (replaced by the component).

## Components

`Navbar` (`frontend/components/Navbar.tsx`)

- Left brand: `CODEX` + red `K7` → `/`
- Center (desktop ≥1024px): Home, Services, Products, About, Contact
- Right: Book Free Call → `/#contact`
- Placeholder hashes (`/#services`, `/#products`, `/#about`, `/#contact`) so no extra pages are created
- Client-only for scroll class, menu open state, Escape, and resize close

## Desktop Behavior

- White bar, black type, thin `--border`, red brand/hover accent
- Sticky
- After 8px scroll: slightly stronger border + light shadow
- Hamburger hidden; primary nav + CTA visible

## Mobile Behavior

- Brand + menu button (`< 1024px`, including 768px)
- Button toggles `aria-expanded` and a panel with the five links plus Book Free Call
- Choosing a link or the brand closes the menu
- Escape closes; viewport ≥1024px closes; body scroll locked while open

## Accessibility

- Semantic `<nav>` (`Primary` / `Mobile`)
- Menu button: `aria-label`, `aria-expanded`, `aria-controls`
- Home uses `aria-current="page"`
- Existing `:focus-visible` outline
- Real `<a>` / Next.js `Link` and a real `<button>`

## Responsive Testing

Checked in the local preview (no horizontal overflow):

| Width | Result |
|-------|--------|
| 320px | Hamburger, no overflow |
| 375px | Menu opens/closes; Close menu / Open menu labels; Home closes panel |
| 768px | Hamburger still (tablet) |
| 1024px | Desktop links + CTA; toggle hidden |
| 1440px | Desktop layout, no overflow |

## Dependencies Added

None.

## Testing

From `frontend/`:

- `npx tsc --noEmit` — pass
- `npm run lint` — pass
- `npm run build` — pass

## Issues Found

- An initial 3-column grid with four children would misplace the toggle; grouped into a right-side cluster.
- Port 3000 already had a Next.js dev server; preview used that process.

## Issues Fixed

- Header bar uses `1fr auto 1fr` on desktop and a brand + actions cluster on small screens.

## Remaining Work

Hero, section ids for the hash links, and later pages. No favicon yet.

## Next Phase

Phase 03 — Hero (do not start until requested).
