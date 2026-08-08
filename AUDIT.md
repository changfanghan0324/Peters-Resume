# Portfolio audit — 2026-08-08

## Scope

This audit covers the public portfolio at `peters-resume.vercel.app` and the
source of truth in `src/content`. The intended audience is U.S. finance,
banking, risk, FP&A, financial analytics, and business analytics recruiting.

## Findings

- The previous default route opened the interactive journey. The recruiter-first
  overview is now the default, with the journey preserved at `/en/journey` and
  `/zh-tw/journey`.
- Public content now separates Completed, In development, and Roadmap work.
- Demonstrated capabilities point to an evidence item; developing capabilities
  are not presented as advanced or completed.
- Sensitive personal details are not published in the public profile: full birth
  date, precise birthplace, phone number, Instagram, and Handshake.
- The visual scenes remain decorative story assets. They are not represented as
  project evidence or photographs.
- BrowserRouter is the canonical routing model. Vercel serves the SPA fallback,
  and legacy hash links are redirected to the matching localized route.

## Remaining risks

- `TODO_FACT_CHECK` remains for the exact display-name format. Confirm it against
  the PDF résumé and LinkedIn before using the name in other professional media.
- The public project pages do not yet include uploaded screenshots, reports,
  dashboards, certificates, or redacted work samples. They use repository/live
  links when those links were provided and say when an artifact is not yet
  available.
- No external logging drain or analytics vendor is configured. This keeps the
  static portfolio lightweight and privacy-conscious, but it is not a substitute
  for production monitoring for future interactive applications.

## Evidence policy

Only facts supplied by the owner or observable in the public repositories are
used. A planned project cannot support a demonstrated capability. New claims
must be added to `CONTENT_FACT_CHECK.md` before they are made public.

## Verification snapshot

- TypeScript application and Vite production build pass on 2026-08-08.
- ESLint 9 passes with no errors or warnings.
- Browser smoke checks pass for English, Traditional Chinese, nested project
  routes, the legacy hash redirect, the interactive journey skip link, and the
  localized 404 route.
- Desktop render checked at 1536×1024 and mobile render at 390×844. The mobile
  document has no horizontal overflow; images have alt text and explicit
  dimensions; visible controls meet the 44px touch-target check.
- Production bundle baseline: 59.02 KB CSS and 284.49 KB raw / 93.37 KB gzip
  entry JavaScript before route chunks; scene media is WebP and below the
  initial-load budget when lazy-loaded.
