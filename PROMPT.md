# CODEXK7 Frontend Development

Build the CODEXK7 frontend step by step.

## Rules

Before every phase:

1. Read `CLAUDE.md`.
2. Read `AGENT.md`.
3. Read `PROMPT.md`.
4. Read all relevant files inside `docs/`.
5. Inspect the existing implementation before changing it.

## Development Strategy

Do NOT build the entire frontend in one task.

Implement only the phase requested in the current prompt.

For every phase:

```text
READ
↓
UNDERSTAND
↓
IMPLEMENT
↓
TEST
↓
FIX
↓
DOCUMENT
```

## Documentation Rule

After completing each phase, create or update the corresponding file:

```text
docs/<phase>.md
```

Each documentation file must contain:

```text
# Phase

## Objective

## Existing Files Inspected

## Files Created

## Files Modified

## Components Added

## Design Decisions

## Functionality Implemented

## Responsive Behavior

## Dependencies Added

## Testing Performed

## Issues Found

## Issues Fixed

## Remaining Work

## Next Phase
```

Keep documentation concise but complete.

Do not duplicate the entire source code inside documentation.

## Code Rules

* Reuse existing components where possible.
* Do not rewrite unrelated files.
* Do not remove working functionality.
* Do not install unnecessary packages.
* Do not expose secrets.
* Do not invent client/project information.
* Use reusable components.
* Keep TypeScript types safe.
* Keep accessibility in mind.
* Support mobile from the beginning.
* Test after every phase.
* Fix errors before moving forward.

## Design Direction

CODEXK7 should look like a premium AI engineering/product studio.

Core visual language:

```text
WHITE
BLACK
RED ACCENT
```

Style:

```text
minimal
technical
premium
modern
precise
high-performance
```

Avoid:

```text
generic AI illustrations
cheap agency templates
excessive gradients
cyberpunk
excessive glassmorphism
unnecessary 3D
fake statistics
fake testimonials
```

## Target Frontend

```text
Navbar
Hero
Hero Architecture
Trust Strip
Services
Think / Act / Execute
How We Build
Technology Ecosystem
Case Studies
Product Showcase
Agent Demo
Engineering
Why CODEXK7
CTA
Contact
Footer
```

Build these sections one phase at a time.

Never implement future phases unless explicitly requested.

## Completion Rule

At the end of every phase:

1. Run the relevant checks.
2. Fix errors caused by your changes.
3. Update the phase documentation.
4. Clearly report:

   * what changed
   * files changed
   * tests performed
   * remaining work
   * next recommended phase

Then STOP.
