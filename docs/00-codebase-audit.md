# Phase 00 — Frontend Codebase Audit

## Objective

Inspect the existing frontend only. Record framework, routes, pages, components, styling, assets, dependencies, responsive system, and functionality. Recommend the safest starting point. Do not implement the site in this phase.

## Existing Files Inspected

- `CLAUDE.md` — agent behavior (minimal changes, no secrets, no speculative features)
- `AGENT.md` — full CODEXK7 website spec (brand, sections, stack preference, content rules)
- `PROMPT.md` — phased frontend workflow and documentation rules
- `pyproject.toml` — Python stub `codexk7-in` 0.1.0, no dependencies
- `.python-version` — 3.10
- `.gitignore` — Python/venv only
- `README.md` — empty

Searched for and **not found**:

- `frontend/`
- `package.json` / lockfiles
- `app/` / `pages/` / `src/`
- `components/`
- `public/` / `assets/`
- `next.config.*` / `vite.config.*` / `tailwind.config.*`
- `docs/` (this file is the first docs artifact)

## Finding

**There is no existing frontend to inspect.**

This repository is a specification + empty Python project. The CODEXK7 marketing UI described in `AGENT.md` / `PROMPT.md` has not been scaffolded.

A previous Next.js app under `frontend/` appeared in older local Cursor history. It is **not in this working tree** and **not in git**. This audit does not treat that history as reusable code.

## Framework

| Item | Current |
|------|---------|
| Frontend framework | None |
| Language | None (repo has unused Python 3.10) |
| App Router / Pages / Vite | None |
| Preferred by `AGENT.md` | React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Lucide React |

Safest match: **Next.js App Router + TypeScript + Tailwind** when implementation starts. Do not migrate the Python stub into a website runtime.

## Routes

None. No `app/` or `pages/` directory.

Specified later (not implemented): Home, Services, Products, About, Contact (from `AGENT.md` navigation).

## Pages

None.

## Components

None on disk.

Target sections from `PROMPT.md` (build one phase at a time):

Navbar → Hero → Hero Architecture → Trust Strip → Services → Think / Act / Execute → How We Build → Technology Ecosystem → Case Studies → Product Showcase → Agent Demo → Engineering → Why CODEXK7 → CTA → Contact → Footer

## Styling

No CSS, Tailwind, CSS modules, or design tokens in code.

Target language (`PROMPT.md` / `AGENT.md`):

- White / black / red accent (`#e50914`)
- Minimal, technical, premium
- Tokens specified in `AGENT.md` (`--background`, `--foreground`, `--primary`, etc.)

## Assets

No `public/`, logos, favicons, fonts, or screenshots in the repository.

Footer/social URLs and case-study media: **UNKNOWN** until provided. Do not invent them.

## Dependencies

No frontend `package.json`. Python `dependencies = []`.

Do not install packages until the scaffold phase. Then add only what that phase needs.

## Responsive System

None implemented.

Specified breakpoints (`AGENT.md`): mobile 320–767, tablet 768–1439, desktop 1440+. Support mobile from the first UI phase (`PROMPT.md`).

## Existing Functionality

| Area | Status |
|------|--------|
| Navigation | Absent |
| Pages | Absent |
| Forms | Absent |
| Auth | Absent |
| API / backend in this tree | Absent |
| Animations | Absent |
| SEO files | Absent |
| Tests / build | No frontend to build |

Live `codexk7.in` is outside this repo (domain parking). It is not this frontend.

## Files Created

- `docs/00-codebase-audit.md` (this file)

## Files Modified

None (application code untouched).

## Components Added

None.

## Design Decisions

None in code. Spec already decides brand (white/black/red) and section order. Implementation must follow `AGENT.md` and not copy reference sites.

## Functionality Implemented

None.

## Responsive Behavior

N/A.

## Dependencies Added

None.

## Testing Performed

- Directory listing and glob for `frontend/**` and `docs/**`
- Read of spec and root config files

No `npm run build` / lint / TypeScript check: there is no frontend toolchain.

## Issues Found

1. **Critical:** No frontend application.
2. **High:** Git has no commits/remote; previous frontend is not recoverable from this tree.
3. **High:** No verified project/case-study assets in-repo (`AGENT.md` forbids invented clients/metrics).
4. **Medium:** Python skeleton is unrelated to the planned JS frontend and can confuse later work.

## Issues Fixed

None (audit only).

## Remaining Work

Scaffold the frontend, then implement sections per `PROMPT.md` phases, documenting each in `docs/<phase>.md`.

## Safest Starting Point

**Do not restore or rewrite a missing app.** Start with a thin Next.js scaffold and design tokens only.

Recommended order:

1. Create `frontend/` with Next.js App Router, TypeScript, Tailwind.
2. Put CODEXK7 CSS variables in `frontend/app/globals.css`.
3. Keep `app/page.tsx` a blank (or nearly blank) shell.
4. Update `.gitignore` for Node/`.next`/`.env*`.
5. Run a production build before any marketing sections.
6. Next UI slice: layout primitives + navbar — not the full homepage.

Do not in the first implementation pass:

- Add Framer Motion, shadcn, or Lenis unless that phase needs them
- Add contact APIs, auth, or a chatbot
- Add case studies with unverified content
- Delete `AGENT.md` / `PROMPT.md` / `CLAUDE.md`
- Invent GitHub/LinkedIn/project URLs

## Next Phase

Frontend scaffold + design tokens (blank page, working `dev`/`build`). Stop after that phase and document it before Navbar/Hero.
