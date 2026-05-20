# Technical Decisions

Stable architectural and infrastructure choices for the Empowr Main Site. Each decision here has a corresponding ADR in `planning/decisions/`.

**Last updated:** 2026-05-19

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Matches Heroes platform; workspace standard |
| Language | TypeScript | Workspace standard |
| Styling | Custom CSS (CSS variables, no Tailwind) | Matches Heroes platform; brand consistency |
| Font | Nunito via `next/font/google` | Same as Heroes (weights 400–900) |
| Deployment | Netlify | Workspace standard; DNS already on Route 53 |
| News / blog | MDX files in `src/content/news/` | Simple, no CMS dependency in Phase 1 |
| CMS | None (Phase 1) | Sanity can be added later if news volume justifies it |
| Contact form | mailto link (Phase 1) | Resend integration in Phase 2 if needed |

---

## Infrastructure

| Item | Detail | ADR |
|---|---|---|
| Domain | `empowrcic.org` — replacing Wix | `decisions/2026-05-19-domain-strategy.md` |
| DNS | AWS Route 53 (already managing the domain) | — |
| Current live site | Wix at `empowrcic.org` — not touched until Phase 4 | `decisions/2026-05-19-domain-strategy.md` |
| Hosting | Netlify | — |
| Email sending | Not required in Phase 1 | — |

---

## Data and content

| Item | Choice | ADR |
|---|---|---|
| CIC Annual Reports | External links to CIC Regulator site — no hosted PDFs | `decisions/2026-05-19-cic-reports.md` |
| All external URLs | Centralised in `src/lib/links.ts` | — |
| Policy documents | Hosted at LegalHub (`legalhub.pecuvate.com`) — link from footer | — |

---

## Phase Plan

| Phase | Scope |
|---|---|
| 1 — Structure | Scaffold, all pages with draft content, Nav, Footer, CIC report links, Heroes link |
| 2 — Content | Real copy, team section, real report links, headline stats |
| 3 — Growth | News posts, partner logos, impact stories |
| 4 — Go live | Switch `empowrcic.org` DNS from Wix to Netlify, decommission Wix |
