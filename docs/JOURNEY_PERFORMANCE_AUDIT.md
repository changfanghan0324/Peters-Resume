# Journey performance audit

Baseline captured before the fix branch changes on 2026-08-08 at
`http://127.0.0.1:5173/en/journey`, using the in-app Chromium browser at
1440×900. The same route was checked at 390×844 during the reproduction pass.

## Baseline architecture

- Journey data was the full `experiences` array: **15 chapters**.
- The DOM mounted **15 full-screen `.journey-scene img` elements** at once.
- `JourneyPage` attached a raw `scroll` listener and called `setProgress` on
  every scroll event. `activeIndex` was derived with
  `Math.round(progress * (experiences.length - 1))`, so there were no real
  chapter sections or IntersectionObserver boundaries.
- The document used a synthetic `.scroll-space` of approximately 10,620px at
  the 1440×900 baseline viewport, rather than normal chapter sections.
- The SVG path had a continuously running `roadFlow` animation using
  `stroke-dashoffset`, plus a blurred shadow path and a `drop-shadow` filter.
- Every scene figure had permanent `will-change: opacity, transform`; scene
  images also used a CSS brightness/saturation/contrast filter.
- The hotspot used a continuous `hotspot` glow animation and backdrop blur.
- The chapter panel used `backdrop-filter: blur()` and a large box shadow.
- `AnimatePresence mode="wait"` unloaded the previous panel before showing the
  next one. The transition key included hovered state, so hover could remount
  the panel.
- The horizontal progress rail was rendered with a vertical `height` style in
  React, even though its CSS layout was horizontal.

## Asset baseline

The scene URLs for the reported late chapters were:

| Chapter | Existing index | Scene URL | Shell HTTP status | Browser decode |
| --- | ---: | --- | ---: | --- |
| May 2026 · Tutor Platform | 9 | `/assets/scenes/tutor.webp` | 200 | complete, naturalWidth 1200 |
| August 2026 · Northstar Credit Platform | 12 | `/assets/scenes/credit-risk.webp` | 200 | complete, naturalWidth 1200 |
| September 2026 · FP&A Roadmap | 13 | `/assets/scenes/fpa-platform.webp` | 200 | complete, naturalWidth 1200 |
| Boston University | 14 | `/assets/scenes/bu.webp` | 200 | complete, naturalWidth 1200 |

The baseline browser loaded all 15 images during a warm local run. That does
not disprove the reported production failure: all images were still mounted,
native lazy loading was the only late-image strategy, and the scene stack could
keep 15 composited full-screen layers alive under cache-disabled or slower
network conditions.

## Reproduction notes

- Scrolled from the top through May, July, August, September, and Boston at
  1440×900, then repeated the route at 390×844.
- A local `PerformanceObserver` sample did not record a >50ms Long Task in this
  short warm-cache run. The browser QA harness does not expose a complete
  Chrome DevTools Performance recording or compositor-layer count, so those
  values are recorded as **not available**, not inferred.
- The visible architecture explains the symptoms: every scroll pixel updated
  React, every scene stayed in the DOM, the SVG continuously repainted, and a
  late native-lazy image could become the active opaque layer before it had
  decoded.
- Console errors and React warnings were empty in the warm baseline route.

## Fix acceptance targets

The replacement uses normal chapter sections, IntersectionObserver
chapter selection, a two-layer decoded-image crossfade, static SVG path styling,
and a horizontal transform-scaled progress line. The runtime assertion is:

```js
document.querySelectorAll('.journey-scene img').length <= 3
```

## Root-cause answers

- **Why the dotted path flickered:** the old `roadFlow` infinite
  `stroke-dashoffset` animation continuously repainted the SVG, and the path
  also had blur/drop-shadow filters. The new path is a single static stroke;
  progress is a separate horizontal `scaleX` line.
- **Why May onward became janky:** every scroll pixel updated React state while
  15 full-screen scene layers remained mounted. The new page uses normal
  sections and an `IntersectionObserver`; state changes only when the winning
  section index changes.
- **Why August was worse:** August was competing with the same 15-layer stack,
  permanent `will-change`, image filters, and a wait-mode transition. The new
  double-buffer keeps only the decoded current/incoming scene and uses an
  opacity-only 200ms crossfade.
- **Why September/Boston could show blank frames:** the old active layer could
  be selected before a native-lazy image had decoded, while `AnimatePresence`
  had already removed the previous panel. The new flow preloads with
  `new Image()` and `decode()` before showing the incoming layer; decode failure
  keeps the previous image and renders a small fallback message.

## After architecture and measured acceptance checks

- `src/content/journey.ts` now contains **6 narrative chapters** while the
  detailed Experience page keeps all 15 original routes available.
- `JourneyPage` renders 6 real sections (`85svh`–`100svh` responsive sizing)
  with `data-journey-index` and an `IntersectionObserver` using a stable
  `-30% / -45%` root margin.
- `JourneyCanvas` uses a decoded-image double buffer. During a transition the
  local browser measured **2 `.journey-scene img` nodes / 2 scene layers**;
  when settled it measured **1 / 1**. It never exceeded the runtime assertion
  `document.querySelectorAll('.journey-scene img').length <= 3`.
- Scene URLs for Origins, Night Market, UVU, Study Abroad, Mochilune, Tutor,
  InvestIQ, FP&A, and Boston all returned HTTP 200 in the local asset sweep.
- The SVG path has no animation, filter, blur, or drop-shadow. `will-change`
  is present only on the two layers while `.is-transitioning` is active and is
  removed after the 200ms timer.
- The progress rail now fills with `transform: scaleX(...)`, jumps through
  section refs, exposes `aria-current="step"`/`aria-pressed`, and uses 44×44px
  controls (including the horizontally scrollable mobile rail).
- Desktop 1440×900, wide desktop 1920×900, mobile 390×844, English, and Traditional Chinese sweeps
  completed without blank frames, horizontal overflow, console errors, or
  React warnings. Rapid forward/reverse sweeps ended on the requested final
  chapter with one settled scene image.
- Reduced-motion emulation completed with the global transition reduced to
  the browser's 0.01ms accessibility rule and no path animation.
- The short warm-cache long-task observer remained empty after the fix. A full
  Chrome DevTools compositor/layer recording is not exposed by this harness,
  so compositor counts remain **not available** rather than inferred. The
  standalone Playwright smoke file provides the repeatable route/scroll checks.

## Homepage and navigation acceptance

The English and Traditional Chinese overview routes now expose exactly five
top-level content blocks: Hero, Selected Work, Experience & Evidence, About /
How I Work, and the combined Contact + Journey CTA. The primary desktop nav is
Work, Experience, Journey, About, with Contact as the visible CTA; Résumé and
language controls remain. `/projects`, `/capabilities`, `/contact`, and the
localized legacy routes remain valid.

The follow-up storytelling pass consolidates the Journey narrative to six
chapters: Origins; Learning Through Operations; Building Community; Finance and
Analytics Transition; Building Decision Tools; and Boston Chapter. The fixed
rail now translates with `transform` so the active node stays centered while
nearby years remain visible. Full detail remains in Experience, where timeline
nodes now sit above their cards with a minimum 80px separation and no text/node
collision. About's How I Work section is an editorial glass card with a
responsive one-column mobile layout.

## Tests and evidence

Commands run after the changes:

```text
node_modules/typescript/bin/tsc --noEmit -p tsconfig.app.json   PASS
node_modules/typescript/bin/tsc --noEmit -p tsconfig.node.json  PASS
node_modules/vite/bin/vite.js build                            PASS
node_modules/eslint/bin/eslint.js .                            PASS
NODE_PATH=<workspace Playwright modules> node tests/journey.playwright.mjs  PASS
NODE_PATH=<workspace Playwright modules> node tests/responsive-layout.playwright.mjs  PASS
```

`pnpm install`, `pnpm build`, and `pnpm lint` were attempted first as required;
the environment's pnpm policy blocked `esbuild@0.28.1` build scripts with
`ERR_PNPM_IGNORED_BUILDS`. The direct TypeScript/Vite/ESLint commands above
completed successfully against the existing installed toolchain.

Screenshots captured for review:

- Baseline overview: `/private/tmp/peters-resume-overview-2026-08-08-final.png`
- After overview/navigation: `/private/tmp/peters-resume-overview-after-2026-08-08.png`
- After Journey desktop: `/private/tmp/peters-resume-journey-after-2026-08-08.png`
- Final Journey desktop: `/private/tmp/journey-final.png`
- Final Traditional Chinese mobile Journey: `/private/tmp/journey-final-zh.png`
- Final Experience desktop: `/private/tmp/experience-final.png`
- Final About / How I Work: `/private/tmp/about-how-work-final.png`

## Changed files

- `src/content/journey.ts`
- `src/components/JourneyCanvas.tsx`
- `src/components/ProgressRail.tsx`
- `src/pages/JourneyPage.tsx`
- `src/components/Header.tsx`
- `src/pages/OverviewPage.tsx`
- `src/pages/AboutPage.tsx`
- `src/i18n/en.ts`, `src/i18n/zh-TW.ts`
- `src/styles/header.css`, `src/styles/overview.css`, `src/styles/journey.css`,
  `src/main.tsx`
- `src/styles.css` (removed duplicate/legacy overview and Journey rules)
- `tests/journey.playwright.mjs`
- `tests/responsive-layout.playwright.mjs`

## Removed legacy CSS and runtime patterns

Removed the old Journey `.scroll-space`, full-scene layer rules, path glow and
filter rules, `roadFlow` animation, vertical progress-height styling, and the
unused overview `.evidence-strip`, `.capability-summary-grid`,
`.journey-invitation`, and `.overview-contact` blocks. No `!important` rule was
added to resolve the cascade.

## Remaining risks

- A full Chrome DevTools Performance trace, exact compositor-layer count, and
  Slow-4G/cache-disabled run require a manually attached DevTools session; the
  local Playwright sweep covers the deterministic DOM and route assertions.
- The mobile progress rail intentionally translates horizontally so the six
  chapter controls retain a 44px touch target; the document itself remains
  overflow-free.
