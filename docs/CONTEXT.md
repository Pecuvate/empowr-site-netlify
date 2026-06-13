# Empowr Main Site — Docs Index

This directory contains technical documentation for the Empowr CIC main website. Read these files when picking up this project cold.

---

## Files

| File | What it covers |
|---|---|
| [tech-stack.md](./tech-stack.md) | Dependencies, framework, design system, folder structure, naming conventions |
| [system-flow.md](./system-flow.md) | Request lifecycle, data flow, contact form, deployment pipeline, external integrations |

---

## What Is This Project?

The **Empowr CIC Main Site** is the public-facing website for Empowr CIC (Community Interest Company), a UK organisation promoting lifelong wellbeing through experiential learning. It is a narrative and routing site — its primary job is to tell the Empowr story and direct audiences to the right platform (booking, donation, legal, jobs).

- **Live URL:** [empowrcic.org](https://empowrcic.org)
- **Stack:** Next.js 16 (static export) + TypeScript + Tailwind CSS v4
- **Hosting:** Netlify — auto-deploy on push to `main`
- **Repo:** `Pecuvate/empowr-main-site` (GitHub, private)
- **DNS:** Route 53 — cutover from Wix completed 2026-06-12

---

## Pages

| Route | Purpose | Nav |
|---|---|---|
| `/` | Homepage — mission, audience routing cards, impact stats, reviews | Yes |
| `/about` | Organisation story, values, board members | Yes |
| `/our-work` | EELA framework + programme descriptions | Yes |
| `/impact` | Stats, highlights, annual CIC reports | Yes |
| `/get-involved` | Audience routing — 4 pathways | Yes |
| `/work-with-us` | Broad roles (sessions, ops, management, volunteering) | Yes |
| `/contact` | Contact form with subject-based routing | Yes |
| `/news` | News listing (MDX posts) | Yes |
| `/news/[slug]` | Individual news article | No |
| `/experiential-learning` | EELA philosophy — 5-tab deep-dive | Linked only |
| `/experiential-learning/report` | Full "Non-Medical Approach to Mental Health" report | No |
| `/partner-with-us` | Strategic partnerships | No |
| `/impact` | Impact stats + Companies House filings | Yes |
| `/eccp` | Coming Soon — Empowr Certified Coaching Programme | No |
| `/faqs` | Accordion FAQ | No |
| `/history` | Timeline, collaborators, partners (unlisted) | No |
| `/legal` | Policy hub — proxies to LegalHub (6 policies) | Footer |

---

## Phases

| Phase | Scope | Status |
|---|---|---|
| 1 — Structure | Scaffold, draft content, Nav, Footer | Complete |
| 2 — Content | Real copy, team, impact stats | Complete |
| 3 — Growth | News posts, partner logos, impact stories | Complete |
| 4 — Go live | DNS cutover empowrcic.org → Netlify | **Complete (2026-06-12)** |
| 5 — Post-launch | 3 board members, welcome post, `/team` page, shop | In progress |

---

## Outstanding (Phase 5)

1. **3 additional board members** — add to `TEAM` array in `/about/page.tsx` when provided
2. **Programme descriptions** — awaiting client review; in `planning/architecture/programme-descriptions.md`
3. **Welcome post** — rename `2026-05-20-welcome-to-our-new-website.mdx.draft` → `.mdx`
4. **`/team` page** — full team (board, founders, coaches, ops); activate "Meet the full team" button on About
5. **`/experiential-learning` nav** — client decision pending on whether to add to main nav
6. **Shop subdomain** — placeholder in footer; enable when ready

---

## Key Relationships

| Project | Relation |
|---|---|
| Empowr Heroes (`hero.empowrcic.org`) | Donation platform — linked from "Support Us" CTA in Nav |
| EELA (`eela.empowrcic.org`) | Session booking — linked from all programme CTAs |
| LegalHub (`legalhub.pecuvate.com`) | Policy host — `/legal/:slug` proxies here via Netlify redirect |
| Wix shop (`empowrcic.wixsite.com`) | Shop link in footer (main site DNS now on Netlify) |

---

## Organisation Facts

- **CIC Number:** 13660924
- **Incorporated:** October 2021 | First activities: February 2022
- **Registered address:** Crown House, 27 Old Gloucester Street, London, WC1N 3AX
- **Founders:** Jasmine Barnett & Shaun Barnett
- **3rd Director:** Clifton George Barrett (appointed Sep 2025)
- **Tagline:** "Live by growing. Grow by learning. Learn by doing."
- **Mission:** "Promoting lifelong well-being through the transformative power of experiential learning."

---

## Planning & Ops

| Location | Contains |
|---|---|
| `planning/pages/_index.md` | All routes at a glance — status + build notes |
| `planning/pages/*.md` | Per-page sections, outstanding items |
| `planning/layout/nav.md` | Nav structure and active state rules |
| `planning/layout/footer.md` | Footer columns and link inventory |
| `planning/architecture/technical-decisions.md` | Stack choices and rationale |
| `planning/architecture/narrative.md` | Core messaging, tagline, mission, vision |
| `planning/decisions/` | ADR log (4 decisions) |
| `ops/CONTEXT.md` | Netlify config, deploy process, env vars, constraints |
