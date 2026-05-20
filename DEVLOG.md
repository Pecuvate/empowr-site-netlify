# Empowr Main Site — Dev Log

---

## Session 1 — 2026-05-19

**What was done:**
- Project folder created: `F:\Projects\Empowr CIC\Empowr Main Site\`
- Site plan written: `planning/site-plan.md`
  - Full site map across 8 routes
  - Page blueprints for every route
  - CIC report strategy: links to CIC Regulator site (not hosted PDFs)
  - Brand confirmed: shared with Heroes platform (Empowr blue, Nunito)
  - Phase plan documented (Phase 1–4)
- `CLAUDE.md`, `CONTEXT.md`, `DEVLOG.md` created

**Key decisions made:**
- CIC Annual Reports will link directly to the CIC Regulator / Companies House filing page — no PDFs hosted locally
- Domain target is `empowrcic.org` — will replace Wix when ready (DNS already on Route 53)
- Brand shared with Heroes platform — same CSS variables, same Nunito font, no Tailwind
- News/blog will use MDX files initially — can migrate to Sanity CMS later if volume justifies it
- All external links centralised in `src/lib/links.ts`

**Next steps:**
- Review and sign off the site plan
- Scaffold Next.js project (`npx create-next-app@latest`)
- Set up global CSS with brand variables
- Build layout (Nav + Footer)
- Build Home page first, then remaining pages in order

---

## Session 2 — 2026-05-20

**What was done:**
- Fetched and analysed the current Wix site (www.empowrcic.org) — identified seven key narrative and structural problems vs. the new site plan
- Created `planning/architecture/current-site-analysis.md` — full analysis with improvement rationale for each section
- Connected to Empowr CIC Notion workspace — fetched "The Empowr Movement" and "The Empowr Journey" pages
- Created `planning/architecture/narrative.md` — all core messaging: tagline, mission, vision, approach, why, wider impact, EELA, ECCP, community roles, values, key quotes
- Created `planning/architecture/founding-story.md` — full founding narrative sourced from Notion, ready to inform the About page
- Created `planning/architecture/programme-descriptions.md` — draft copy for all 10 active programmes grouped into 5 categories; awaiting client review
- Updated all planning files with confirmed data throughout
- Restructured planning/ to match MWP developer model

**Key decisions confirmed this session:**
- CIC / Companies House number: 13660924
- Registered address: Crown House, 27 Old Gloucester Street, London WC1N 3AX
- Incorporated: October 2021 | First activities: February 2022
- Founders: Jasmine Barnett (community/ops/culture) and Shaun Barnett (narrative/strategy/vision)
- Third director: Clifton George Barrett — Director of Events
- Three additional Board of Directors members TBC — client will add to Notion
- Contact email: enquiries@empowrcic.org
- Heroes platform URL: hero.empowrcic.org
- Values: Growth Through Action, Community and Belonging, Wellbeing as a Way of Life
- CIC annual accounts on Companies House (AA filings) — years to Oct 2024 and Oct 2025 confirmed
- Active programmes: 10 confirmed from booking page — drop-ins, lessons, courses, camps, advanced

**Still outstanding before build:**
- Client review of programme descriptions (`programme-descriptions.md`)
- Direct URLs to Companies House account filings (for impact page report links)
- Headline impact stats from most recent accounts
- Bios and photos for Clifton and future board members
- Three additional board members (TBC via Notion)
- Whether registered address is appropriate to display publicly

---

## Session 3 — 2026-05-20

**What was done:**
- Revised stack decisions: Tailwind v4 + shadcn/ui (replaces custom CSS); Next.js static export. ADR filed at `planning/decisions/2026-05-20-styling-and-framework.md`.
- Rewrote `CLAUDE.md` to MWP spec — routing table, token management, 7-component structure
- Created `src/CONTEXT.md` — Next.js workspace context, brand tokens, constraints
- Created `ops/CONTEXT.md` — Netlify deployment, DNS cutover, infrastructure
- Scaffolded Next.js 16 + Tailwind v4 project in `src/` via `create-next-app`
- Configured `next.config.ts` with `output: "export"` (static build, one-line upgrade path)
- Created `src/netlify.toml` — build config, Node 20, security headers
- Created `src/.env.example`
- Set up `src/app/globals.css` with all brand colour tokens under `@theme inline`
- Wired Nunito font (weights 400–900) in `src/app/layout.tsx`
- Created `src/lib/links.ts` — all external URLs centralised
- Created `src/lib/types.ts` — `NewsPost` type
- Built `src/components/Nav.tsx` — sticky header, desktop + mobile responsive, Support Us CTA
- Built `src/components/Footer.tsx` — brand, nav, contact, social, legal, registered details
- Built `src/app/page.tsx` — full Home page: Hero, What We Stand For, Who We Work With, Get Involved Routes, News placeholder
- Build verified clean: `npm run build` passes with zero errors

**Key decisions this session:**
- Styling: Tailwind v4 (workspace standard for new Empowr CIC projects)
- Framework: Next.js with `output: "export"` — static by default, upgrade by removing one config line
- Registered address included in footer — can be removed if client requests
- LegalHub privacy/cookie policy URLs are placeholders — need confirming before launch

**Next steps:**
- Build remaining pages: `/about`, `/our-work`, `/impact`, `/get-involved`, `/work-with-us`, `/news`, `/contact`
- Wire up MDX news system (`src/content/news/`) — create first post (site relaunch announcement)
- Populate `/impact` when Companies House filing URLs and impact stats are provided
- Confirm registered address display with client
- Confirm LegalHub URL paths before launch

---
