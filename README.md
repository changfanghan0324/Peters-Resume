# Fang Han Chang — Interactive Journey

An interactive 3D portfolio built from the 2026 résumé. Mouse-wheel scrolling moves the camera through seven experience dioramas; each chapter supports hover summaries and a reusable detail page.

## Update content

All résumé copy, links, skills, credentials, and scene paths live in `src/content/portfolio.ts`. Add a new object to `experiences` and the timeline, progress rail, routing, and detail page update automatically.

Images live in `public/assets/scenes`. Certificate PDFs or images can be added under `public/assets/credentials` and linked from the same content file.

## Local development

```bash
pnpm install
pnpm dev
```

Production check:

```bash
pnpm build
pnpm preview
```

## Deployment

The `main` branch is connected to Vercel. Every GitHub push automatically creates a new production deployment at [peters-resume.vercel.app](https://peters-resume.vercel.app).

## Design system

- Deep ink: `#07121F`
- Amber: `#F0A85A`
- Mist blue: `#8FB9C7`
- Editorial serif + geometric system sans
- Generated 3D dioramas are project assets; UI text remains code-native.
