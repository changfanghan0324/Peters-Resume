# Peter Chang — Finance & Business Analytics Portfolio

Recruiter-first, bilingual personal résumé and portfolio platform for finance,
business analytics, credit, investment research, FP&A, and FinTech roles.

Live site: [peters-resume.vercel.app](https://peters-resume.vercel.app/en)

## Information architecture

- `/en` and `/zh-tw` — Professional Overview
- `/en/experience` and `/zh-tw/experience` — evidence-oriented experience
- `/en/projects` and `/zh-tw/projects` — Completed / In development / Roadmap
- `/en/capabilities` and `/zh-tw/capabilities` — evidence-backed capabilities
- `/en/about` and `/zh-tw/about` — CliftonStrengths and working style
- `/en/journey` and `/zh-tw/journey` — optional interactive visual journey
- `/en/contact` and `/zh-tw/contact` — professional contact
- Localized detail routes for experience and project case studies

Old hash URLs redirect to the equivalent English route for compatibility.

## Content model

- `src/content/portfolio.ts` — localized experience records, public profile,
  project status metadata, limitations, artifacts, and next steps.
- `src/content/capabilities.ts` — eight evidence-backed capabilities and the
  five CliftonStrengths records.
- `src/i18n/en.ts` and `src/i18n/zh-TW.ts` — centralized UI copy.
- `CONTENT_FACT_CHECK.md` — claims register and unresolved `TODO_FACT_CHECK`
  items. Read it before adding new public claims.
- `INFORMATION_ARCHITECTURE.md` — route and content hierarchy.
- `AUDIT.md` — privacy, evidence, and maintainability audit.

Add a new experience object and, when relevant, a `projectMeta` entry. Do not
call a project completed or a capability demonstrated without an evidence item.

## Local development

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm preview
```

Vite serves the BrowserRouter SPA. `vercel.json` rewrites application routes to
`index.html`; `public/robots.txt` and `public/sitemap.xml` support indexing.

## Deployment

The `main` branch is connected to Vercel. GitHub pushes create production
deployments at [peters-resume.vercel.app](https://peters-resume.vercel.app/en).

## Design and performance

- Deep navy, warm amber, mist blue, warm paper, editorial serif, and clean sans.
- Visual journey scenes are decorative context, never evidence.
- Scene images are optimized WebP with explicit dimensions and lazy loading.
- No AI chatbot, neural-network background, fake dashboard, fake certificate, or
  invented user/result metrics.
- Reduced-motion mode removes drift and long transitions.
- Contact remains available from the overview, header, footer, and contact route.
