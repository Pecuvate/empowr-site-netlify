# Technical Decisions

Stable architectural and infrastructure choices for the Empowr Main Site. Each decision here has a corresponding ADR in `planning/decisions/`.

**Last updated:** 2026-06-12

---

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Matches Heroes platform; workspace standard |
| Language | TypeScript | Workspace standard |
| Styling | Tailwind v4 + shadcn/ui | Revised Session 3 — see `decisions/2026-05-20-styling-and-framework.md` |
| Font | Nunito via `next/font/google` | Same as Heroes (weights 400–900) |
| Deployment | Netlify | Workspace standard; DNS already on Route 53 |
| News / blog | MDX files in `src/content/news/` | Simple, no CMS dependency in Phase 1 |
| CMS | None (Phase 1) | Sanity can be added later if news volume justifies it |
| Contact form | Resend (Phase 2 complete) | Routes to `enquiries@` or `opportunities@` by subject; confirmation email sent to sender |

---

## Infrastructure

| Item | Detail | ADR |
|---|---|---|
| Domain | `empowrcic.org` — replacing Wix | `decisions/2026-05-19-domain-strategy.md` |
| DNS | AWS Route 53 (already managing the domain) | — |
| Current live site | **Netlify at `empowrcic.org`** — DNS cutover executed 2026-06-12 | `decisions/2026-05-19-domain-strategy.md` |
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

| Phase | Scope | Status |
|---|---|---|
| 1 — Structure | Scaffold, all pages with draft content, Nav, Footer, CIC report links, Heroes link | Complete |
| 2 — Content | Real copy, team section, real report links, headline stats | Complete |
| 3 — Growth | News posts, partner logos, impact stories | Complete |
| 4 — Go live | Switch `empowrcic.org` DNS from Wix to Netlify | **Complete — 2026-06-12** |
| 5 — Post-launch | Board members, welcome post, `/team` page, shop subdomain | In progress |
