# CODEXK7 Frontend Redesign — Claude-Inspired Warm Editorial Theme

## 1. Overview
The CODEXK7 website frontend has undergone a complete architectural redesign, transforming the previous dark cyberpunk/violet neon interface into a **Claude-inspired warm, minimal, editorial aesthetic**. The design communicates technical sophistication, human-centered engineering, and high-trust AI product delivery.

---

## 2. Color System
The color system emphasizes warm, calm, human tones with a dedicated red accent:

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--background` | `#F9F6F1` | Primary page canvas (warm cream / off-white) |
| `--surface` | `#F3EFE8` | Card background & alternating section panels |
| `--surface-alt` | `#EDE8E0` | Elevated strips (e.g. TrustStrip, CTA section) |
| `--surface-dark` | `#1C1917` | Contrast surfaces (Footer, Terminal console) |
| `--foreground` | `#1C1917` | Primary typography (dark charcoal/brown) |
| `--muted-fg` | `#6B6560` | Secondary & description copy |
| `--faint-fg` | `#9E9890` | Sub-labels, metadata, system tags |
| `--primary` | `#A82020` | Signature accent color (CTAs, active paths, badges) |
| `--primary-hover` | `#8B1A1A` | Button hover & interactive states |
| `--primary-light` | `#C43030` | Subtle active borders / indicators |
| `--border` | `#E0D9CF` | Structural borders & card dividers |
| `--border-strong` | `#C8BEB0` | High-contrast boundaries & input borders |

> **Rule Enforced:** `#A82020` is strictly used as an accent/indicator and is **never** used as a full-page background. All neon/purple/violet gradients (`#7C3AED`, `#A855F7`) and glowing orbs have been eliminated.

---

## 3. Typography & Fonts
Replaced futuristic/tech fonts with an editorial typographic hierarchy:

- **Headings & Display:** `Cormorant Garamond` (Google Font)
  - Editorial, serif, confident, human, and distinctive.
  - Used with italic accents (e.g., `<em>Agentic AI.</em>`, `<em>Intelligent Product.</em>`) in `#A82020`.
- **Body & Primary UI:** `Inter` (Google Font)
  - Highly legible, neutral, balanced letter-spacing, optimized for readability across devices.
- **Code & Technical Metadata:** `JetBrains Mono`
  - Clean monospace for terminal outputs, execution states, system diagnostics, and timestamps.

---

## 4. Visual Direction
- **Warm & Editorial:** Soft warm cream surfaces replacing cold obsidian dark modes.
- **Minimalist Architecture:** Fine lines (`1px` borders in `#E0D9CF`), generous white space, and restrained hierarchy.
- **No Cyberpunk / Neon:** Removed glowing radial orbs, heavy glassmorphism, rainbow gradients, and futuristic 3D widgets.
- **Subtle Texture:** Light radial dot patterns (`bg-warm-grid`) providing paper-like tactical depth without clutter.

---

## 5. Image & Visual Element Direction
Visuals directly represent CODEXK7's core engineering capabilities:
- **System Flow Diagrams:** Interactive and animated node maps showing user intent, AI gateway, reasoning agents, tool dispatch, RAG vector retrieval, and deterministic action execution.
- **Abstract Data Flows:** SVG curves and clean connector lines illustrating multi-agent workflows.
- **Live Terminal Emulation:** Interactive Agent Demo displaying realistic reasoning traces, tool invocations, and deterministic outcomes in a clean charcoal terminal.
- **Authentic Engineering Artifacts:** Code-level system cards, architecture pipelines, and verified production pillars.

---

## 6. Home Page Scroll Experience (`components/ui/svg-follow-scroll.tsx`)
Inspired by scroll-driven SVG interactions, custom-engineered for CODEXK7:

- **Concept:** Visualizes the journey from an initial concept to a deployed AI product:
  $$\text{IDEA} \longrightarrow \text{AI} \longrightarrow \text{AGENT} \longrightarrow \text{TOOLS} \longrightarrow \text{DATA} \longrightarrow \text{AUTOMATION} \longrightarrow \text{PRODUCT}$$
- **Technology:** Built with Framer Motion (`useScroll`, `useTransform`, `motion.path`, `motion.g`, `motion.circle`).
- **Desktop Interaction:** An S-curve SVG path progressively drawn in `#A82020` as the user scrolls through the section, dynamically lighting up numbered node stations with their operational titles and sub-descriptions.
- **Mobile Interaction:** A vertical timeline with an animated progress bar and node indicators optimized for single-column mobile viewports.
- **Motion Safety:** Full support for `prefers-reduced-motion` with an accessible static version.

---

## 7. Components Changed

1. **`app/globals.css`**
   - Replaced all dark/violet design tokens with warm editorial cream tokens.
   - Defined `.badge-editorial`, `.btn-primary`, `.btn-outline`, `.card-editorial`, `.card-editorial-hover`.
   - Updated `.site-header` to cream frosted glass (`rgba(249, 246, 241, 0.9)`).
2. **`app/layout.tsx`**
   - Injected `Cormorant_Garamond`, `Inter`, and `JetBrains_Mono` fonts.
3. **`app/page.tsx`**
   - Integrated `SVGFollowScroll` component directly following the `Hero` section.
4. **`components/ui/svg-follow-scroll.tsx`**
   - Custom-built scroll-driven SVG animation component adapting the `Skiper19` line path and scroll animation to CODEXK7.
5. **`components/ui/demo.tsx`**
   - Standalone demo component exporting `DemoOne` rendering `Skiper19`.
6. **`components/Navbar.tsx`**
   - Cream navbar, `#A82020` brand accent, editorial navigation links, and styled CTA button.
7. **`components/Hero.tsx`**
   - Editorial headline with serif italic red accent, warm grid background, and dual CTAs.
7. **`components/ArchitectureVisual.tsx`**
   - Warm card container, red node highlights, and active step tracker.
8. **`components/TrustStrip.tsx`**
   - Warm strip background with red diamond separators.
9. **`components/Process.tsx`**
   - 5-step horizontal/vertical timeline with red step indicators.
10. **`components/Technologies.tsx` & `TechnologyCard.tsx`**
    - Warm category tabs, red active states, and editorial tech cards.
11. **`components/CaseStudies.tsx`**
    - Clean editorial project cards, system mockups, and red tag badges.
12. **`components/ProductShowcase.tsx`**
    - Proprietary tools showcase with status badges and red accenting.
13. **`components/AgentDemo.tsx`**
    - Interactive simulation playground with charcoal terminal and red step indicators.
14. **`components/Engineering.tsx`**
    - 4 production pillars with red icon treatments and metrics.
15. **`components/WhyCodexK7.tsx`**
    - Studio philosophy section with editorial typography and red checkmarks.
16. **`components/CTA.tsx`**
    - Final conversion section with warm ambient tint and red primary button.
17. **`components/Footer.tsx`**
    - High-contrast charcoal footer (`#1C1917`) with warm text and red accents.
18. **`components/Services.tsx` & `ServiceCard.tsx`**
    - Alternating card layout with central connector and red hover lines.
19. **`components/ServiceVisualizer.tsx`**
    - Real-time engine simulator with red active node pulsing.
20. **`components/Capabilities.tsx`**
    - Think/Act/Execute 3-stage operating model with red active highlighting.
21. **`components/Contact.tsx`**
    - Clean editorial inquiry form with warm input backgrounds and red submit CTA.
22. **`app/service/page.tsx`**
    - Warm-themed AI engineering services page.
23. **`app/product/page.tsx`**
    - Warm-themed proprietary products waitlist page.
24. **`app/about/page.tsx`**
    - Warm-themed studio overview and synthetic benchmarks page.
25. **`app/book-call/page.tsx`**
    - Warm-themed consultation booking page.

---

## 8. Dependencies Added / Utilized
- **`framer-motion`**: Already installed at `^13.4.0` — leveraged for `useScroll`, `useTransform`, and SVG path animations.
- **`lucide-react`**: Utilized for iconography.
- **`next`**: `16.3.5` with Turbopack.
- **`react`**: `19.2.8`.
- **`tailwindcss`**: `^4`.

---

## 9. Responsive Behavior
- **320px – 375px (Mobile):**
  - Mobile hamburger drawer with full-width action button.
  - S-curve SVG dynamically switches to a vertical timeline preventing horizontal overflow.
  - Heading sizes scale responsively using CSS `clamp()`.
- **768px (Tablet):**
  - Multi-column grids collapse gracefully (e.g. 2-column service and technology grids).
- **1024px – 1440px+ (Desktop):**
  - Full S-curve desktop SVG animation with smooth curve rendering.
  - Sticky navigation bar with compact height on scroll.
  - Alternating service cards and timeline connectors.

---

## 10. Accessibility (A11y)
- **Contrast Ratios:** Dark charcoal text (`#1C1917`) on cream background (`#F9F6F1`) achieves WCAG AAA compliance (> 12:1 ratio).
- **Reduced Motion:** Fully integrated `@media (prefers-reduced-motion: reduce)` in CSS and `useReducedMotion()` in `svg-follow-scroll.tsx`, delivering a static, accessible version when preferred.
- **Semantic HTML & ARIA:** Interactive dialogs, navigation drawers, and tabs have valid ARIA labels and keyboard accessibility (`Escape` key listener on menus).

---

## 11. Remaining Issues / Future Notes
- **None:** The build compiles with 0 TypeScript errors and 0 ESLint warnings. All static routes prerender seamlessly.
