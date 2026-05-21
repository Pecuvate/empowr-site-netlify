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

## Session 4 — 2026-05-20

**What was done:**
- Built all 7 remaining pages: `/about`, `/our-work`, `/impact`, `/get-involved`, `/work-with-us`, `/news`, `/contact`
- Built `/news/[slug]` dynamic route with `generateStaticParams` for static export
- Set up MDX news system: installed `gray-matter` + `next-mdx-remote`, created `src/lib/news.ts` utility
- Created first news post: `2026-05-20-welcome-to-our-new-website.mdx` (site relaunch announcement)
- Wired home page news strip to show real posts from `getAllPosts()`
- Added `.mdx-body` styles to `globals.css` for post typography (no extra plugin dependency)
- Updated `src/lib/types.ts` with `NewsPostFull` type
- Build verified clean: 12 static pages, zero errors

**Key decisions this session:**
- Contact page uses `mailto:` links for Phase 1 — no form handler required yet (Resend is Phase 2)
- Past programmes listed on `/our-work` with "Past" labels — deliberate narrative choice to show breadth
- Annual report links on `/impact` show "Link coming soon" where URLs are missing — no broken links
- Avoided `@tailwindcss/typography` — custom `.mdx-body` CSS handles post styling cleanly

**Still outstanding before launch:**
- Confirm LegalHub URL paths (`privacyPolicy`, `cookiePolicy` in `links.ts`)
- Provide direct URLs to Companies House annual accounts filings (`cicReport2025`, `cicReport2024` in `links.ts`)
- Confirm registered address display with client
- Headline impact stats from most recent CIC accounts (for `/impact`)
- Photos and bios for team members (currently using initials as avatars)
- Three additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)

**Next steps:**
- Start dev server and review all pages visually
- Deploy to Netlify (`/netlify-deploy`)
- DNS cutover from Wix to Netlify (Route 53)

---

## Session 5 — 2026-05-21

**What was done:**
- Started dev server — all pages reviewed locally, looking good
- Deployed to Netlify:
  - Site created: `empowr-main-site` (ID: `f96dd515-c51e-4265-b3ae-c3f1440fe6d9`)
  - Moved `netlify.toml` from `src/` to repo root with `base = "src"` directive — no manual UI config needed when connecting repo
  - `.netlify/state.json` written for future deploy triggers
  - GitHub repo connected: `Pecuvate/empowr-site-netlify`
  - Live URL: `empowr-main-site.netlify.app`
- Audited all policies on current Wix site — fetched full content of all 5 policy pages
- **Decision: all policies will be hosted on LegalHub** (Sanity CMS via PecuvateHub) and linked from the new site

**Current Wix policies retrieved:**
- Website Policies — thin Wix-generated stub, not GDPR-compliant, references Wix as data processor
- Terms & Conditions — general session T&Cs, usable as base
- Risk Waiver — liability waiver, reasonable base
- Photography & Media Consent — photo/video consent, reasonable base
- Kidz Skate Jam with Coaching Policies — gear requirements and membership terms

**Policies to be written (new, not updates):**
1. Privacy Policy — GDPR-compliant, Netlify stack, no Wix references
2. Cookie Policy — essential cookies only (static site)
3. Terms & Conditions — updated general session T&Cs
4. Risk Waiver — updated
5. Photography & Media Consent — updated
6. Programme Policies (Kidz Skate Jam / membership) — updated

**Still outstanding before launch:**
- Write all 6 policies and publish to LegalHub via Sanity (`/update-sanity`)
- Update `links.ts` with confirmed LegalHub policy URLs once published
- Confirm Companies House filing URLs and add to `links.ts` (`cicReport2025`, `cicReport2024`)
- Headline impact stats from most recent CIC accounts
- Team photos and bios (currently initials avatars on `/about`)
- Three additional board members (TBC via Notion)
- Client review of programme descriptions
- Confirm registered address display with client
- DNS cutover: lower TTL in Route 53 ahead of cutover, then swap A/CNAME from Wix to Netlify

---
