# Information architecture

## Localized public routes

| Route | Purpose |
| --- | --- |
| `/en` · `/zh-tw` | Professional Overview: recruiter-first summary, featured work, selected experience, capabilities, working style, and contact. |
| `/en/experience` · `/zh-tw/experience` | Evidence-oriented professional experience index with filters. |
| `/en/projects` · `/zh-tw/projects` | Completed, in-development, and roadmap project index. |
| `/en/capabilities` · `/zh-tw/capabilities` | Evidence-backed capability explorer with demonstrated/developing states. |
| `/en/about` · `/zh-tw/about` | How I work, CliftonStrengths attribution, contact, and professional context. |
| `/en/journey` · `/zh-tw/journey` | Interactive visual journey mode; intentionally separate from the overview. |
| `/en/contact` · `/zh-tw/contact` | Direct contact page with professional email, LinkedIn, GitHub, and résumé download. |
| `/en/experience/:slug` · `/zh-tw/experience/:slug` | Detailed experience record. |
| `/en/projects/:slug` · `/zh-tw/projects/:slug` | Project case study with status, methodology, limitations, artifacts, and next steps. |

## Navigation model

The header keeps Overview, Experience, Projects, Capabilities, About, Journey,
and Contact visible at desktop sizes. The résumé download and contact action are
always reachable. Strengths lives under About / How I Work rather than competing
with recruiter-facing primary navigation.

## Content hierarchy

1. Professional Overview
2. Evidence-backed work and capabilities
3. Detailed experience/project records
4. Interactive Journey as an optional exploratory mode

This keeps the first 60–90 seconds focused while retaining the visual story for
visitors who want a deeper path through the work.

## Status hierarchy

- **Completed**: an artifact or public result is available.
- **In development**: repository/prototype or active implementation exists; last
  observed activity and remaining limitations are explicit.
- **Roadmap**: proposed scope only; never used as demonstrated evidence.

## Legacy compatibility

Old hash URLs such as `/#/projects` and `/#/experience/investiq` redirect to the
equivalent English localized route. Canonical links and language alternates point
to BrowserRouter URLs.
