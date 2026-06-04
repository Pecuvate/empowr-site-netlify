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

## Session 6 — 2026-05-21

**What was done:**

**Policy naming convention established and applied across LegalHub:**
- Confirmed naming rule: audience/product-specific policies carry a prefix (Donor, EFN); org-wide standard policies carry no prefix
- Renamed two misnamed Donor policies in Sanity (they had no prefix despite being Donor-platform-specific):
  - `Privacy Policy - Empowr` → **Donor Privacy Policy** (slug: `empowr-donor-privacy-policy`)
  - `Cookie Policy - Empowr` → **Donor Cookie Policy** (slug: `empowr-donor-cookie-policy`)
- Updated Heroes platform `links.ts` to point at the renamed slugs
- Renamed source markdown files and updated `policyMap` in `import-policies.ts` and `seed.ts` to match

**6 new org-wide Empowr CIC policies written and published to LegalHub:**
1. Privacy Policy (`empowr-privacy-policy`) — UK GDPR-compliant, covers website and programme data
2. Cookie Policy (`empowr-cookie-policy`) — static site, no tracking cookies
3. Terms & Conditions (`empowr-terms-and-conditions`) — website use and programme participation
4. Risk Waiver (`empowr-risk-waiver`) — physical activity risks, equipment requirements
5. Photography & Media Consent (`empowr-photography-media-consent`) — image use, consent, under-18 safeguarding
6. Programme Policies (`empowr-programme-policies`) — session rules, code of conduct, Kidz Skate Jam membership

- 3 new policy types added to Sanity: Risk Waiver, Photography & Media Consent, Programme Policies
- All markdown source files in `PecuvateHubCMS/content/policies/empowr/`
- `links.ts` in Empowr Main Site updated with all 6 confirmed LegalHub URLs — TODO placeholder removed

**Still outstanding before launch:**
- Confirm Companies House filing URLs (`cicReport2025`, `cicReport2024` in `links.ts`)
- Headline impact stats from most recent CIC accounts (for `/impact`)
- Team photos and bios (currently initials avatars on `/about`)
- Three additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- Confirm registered address display with client
- DNS cutover: lower TTL in Route 53, then swap A/CNAME from Wix to Netlify

---

## Session 7 — 2026-06-01

**What was done:**

**Companies House filing URLs sourced and wired:**
- Fetched Companies House filing history for company 13660924
- Found direct AA filing document links for both years (2024–25 and 2023–24)
- PDFs are image-based scans — rendered to PNG via PyMuPDF to read content
- Updated `links.ts`: `cicReport2025` and `cicReport2024` now point to direct Companies House document URLs
- Read Community Interest Report from the 2024–25 accounts (pages 10–12)

**Impact page overhauled with real data:**
- Replaced all placeholder stats with figures from the official Community Interest Report
- Stats: 10,000+ participant attendances, 428 sessions (corrected from 426), 500+ hours paid/volunteer work, Feb 2022 founding date
- Added Highlights section: HAF Year 2 commissioning, Birmingham + Badalona international reach, 100% YoY growth narrative
- Fixed copy: annual accounts filed on Companies House, not the CIC Regulator separately
- Report links now labelled "View on Companies House"

**All 6 policies wired into the site:**
- Footer: Terms & Conditions added alongside Privacy Policy and Cookie Policy
- `/our-work`: new "Policies & Documents" strip added above CTA — Programme Policies, Risk Waiver, Photography & Media Consent

**KB audit — Empowr Obsidian vault compared against site:**
- Added St Winifred's School and BOST (Bankside Open Spaces Trust) to partners list
- Updated EELA box to name MoveWell as the current active sub-programme
- Updated ECCP box with all 3 certification levels; noted piloting began Year 3
- Added EELA Framework section to Our Work — 5-card grid, MoveWell (Active) + 4 planned sub-programmes
- Added Health Activities Provider aspiration to Our Work approach narrative

**UI polish:**
- Blue background paragraph text: lightened `--color-blue-light` from `#7093d4` to `#c8ddf8` — single CSS variable change fixes contrast across all pages
- Desktop nav active state: `usePathname` added; current route gets bold + blue underline; nested routes handled correctly
- Booking link updated to `https://eela.empowrcic.org/` across all "Book a Session" buttons

**Key decisions this session:**
- Registered address confirmed as virtual — appropriate to display publicly in footer
- "Health Activities Provider" framing is aspirational ("aims to become"), not current positioning
- Booking destination is now the EELA platform, not the old Wix booking page

**Still outstanding before launch:**
- Team photos and bios (currently initials avatars on `/about`)
- Three additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap A/CNAME from Wix to Netlify

---

## Session 11 — 2026-06-04

**What was done:**

**LinkedIn URL confirmed:**
- Removed TODO comment from `links.ts` — `socialLinkedIn: "https://www.linkedin.com/company/empowr-cic"` confirmed

**Home page hero — restructured:**
- Eyebrow removed entirely
- Headline updated to: "Live by growing. Grow by learning. Learn by doing." (promoted from eyebrow)
- Sub copy updated: "We design and deliver experiential learning programmes that improve long-term mental, physical, and emotional wellbeing — for people of every age."
- Book a Session CTA added as primary button (→ EELA platform); Find Out More and Support Our Work demoted to secondary ghost buttons

**Temporarily removed:**
- Latest News section removed from home page — no posts yet. Restore when content is published: re-add import from `@/lib/news`, `latestPosts` const, and the News section JSX (pattern is in git history).

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- Practitioner copy for `/work-with-us`
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 10 — 2026-06-04

**What was done:**

**Planning doc audit — `planning/architecture/`**
- `page-blueprints.md` — deprecation header added; redirects to `planning/pages/`
- `technical-decisions.md` — Styling row corrected (Tailwind v4 + shadcn/ui, was wrong); Phase Plan updated with Status column (Phases 1–3 complete, Phase 4 next)
- `site-map.md` — 3 new routes added (`/eccp`, `/partner-with-us`, `/legal`); nav and footer descriptions rewritten to match `layout/nav.md` and `layout/footer.md`; audience routing fixed
- `content-requirements.md` — resolved items marked confirmed (CIC report links, impact stats, registered address, contact emails, launch post, partners); `/work-with-us` section added; "Not required from client" section updated

**Footer — further restructure**
- Column order changed: Brand · About Us · **Programmes** · **Connect With Us** · **Get In Touch** · Legal
- ECCP entry removed from Programmes column (Certified Coach kept, pointing to `/eccp`)
- Work With Us footer link fixed: `/eccp` → `/work-with-us`
- Footer bar left: Privacy Policy and Terms & Conditions links added alongside copyright
- Footer bar right: social text links replaced with inline SVG icons (Instagram, Facebook, YouTube)
- LinkedIn added to Connect With Us column and footer bar
- WhatsApp added to Connect With Us column and footer bar (`chat.whatsapp.com/BuKlBkfDxHs2jdPyRzXwza`)
- `links.ts`: `socialLinkedIn` and `socialWhatsApp` keys added

**Process — `src/CONTEXT.md`**
- Step 6 added to Process: update corresponding `planning/pages/` or `planning/layout/` doc after making code changes

**All changes committed and pushed to `feat/session-9-restructure`.**

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- Practitioner copy for `/work-with-us`
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 9 — 2026-06-04

**What was done:**

**Team avatars — `/about`**
- Replaced initials placeholders with DiceBear `adventurer` style SVG avatars
- Avatars downloaded locally to `public/avatars/` (jasmine.svg, shaun.svg, clifton.svg) — no external API calls at runtime
- Skin tones: Jasmine `#8d5524`, Shaun `#4a2912`, Clifton `#7b4e2d`
- Avatar size increased to 80px (w-20 h-20)

**Home page — restructured as catch-all**
- Removed "What We Stand For" section (4 belief pillar cards) — values moved to `/about`
- "Partner With Us" Get Involved card updated: `/contact` → `/partner-with-us`

**About page — values updated**
- VALUES array expanded from 3 to 4
- "Growth Through Action" renamed to "Growth Through Learning"
- "Inclusion For All" added as fourth value

**Footer — full restructure**
- 5 columns → 6 columns (`lg:grid-cols-6`)
- Brand column: tagline + company info (reg number + address) — social links removed from here
- About Us column: Who We Are · News · Our Impact
- Get In Touch column: Contact Us · Partner With Us · Work With Us
- Connect With Us column: Instagram · Facebook · YouTube (restored as dedicated column)
- Programmes column: All Programmes · Empowr Heroes · ECCP (Soon) · Certified Coach
- Legal column: Empowr Legal Policies → `/legal`
- Footer bar: copyright (left) + social links (right) — company info removed from footer bar

**New pages created**
- `/eccp` — ECCP Coming Soon: what it is, 3 certification levels, register interest CTA (→ opportunities@empowrcic.org)
- `/partner-with-us` — Partnership page: why Empowr, 4 partner types, impact stats, contact CTA
- `/legal` — Policy hub: 6 policy cards linking through to LegalHub via netlify.toml proxy

**links.ts**
- Added `opportunitiesEmail: "opportunities@empowrcic.org"`

**Planning directory — as-built docs**
- Created `planning/pages/` with 11 page files + `_index.md` (status overview)
- Created `planning/layout/` with `nav.md` and `footer.md`
- Updated `planning/CONTEXT.md` — `pages/` is now the primary reference; `page-blueprints.md` noted as superseded
- All docs reflect current built state, not pre-build plans

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- Practitioner copy for `/work-with-us`
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 8 — 2026-06-03

**What was done:**

Content consistency audit — all pages reviewed against planning docs. Three issues found and fixed.

**Policy links — confirmed correct (background):**
The `links.ts` policy paths (`/legal/privacy-policy`, `/legal/cookie-policy`, etc.) were audited and verified working. How they resolve:
1. `netlify.toml` proxies `empowrcic.org/legal/*` → `legalhub.pecuvate.com/share/empowr/org/:splat` (status 200, force=true)
2. LegalHub's share route queries Sanity: `slug.current == $policySlug && platform == "org" && company == "empowr"`
3. The Sanity slugs are the short form — `privacy-policy`, `cookie-policy`, `terms-and-conditions`, `risk-waiver`, `photography-media-consent`, `programme-policies` — NOT the original `empowr-*` prefixed slugs from DEVLOG Session 6. The prefix was stripped by `patch-policy-platforms.ts` (PecuvateHubCMS) when the `platform` field was added to the policy schema, making the prefix redundant (company + platform + slug is already unique). The `links.ts` paths correctly map to these renamed slugs.
See `PecuvateHubCMS/scripts/patch-policy-platforms.ts` and `LegalHub/DEVLOG.md` (2026-06-02 session) for full context.

**Fixes applied:**
- `/our-work`: "Who We Work With" section changed from `bg-blue-pale` to `bg-cream` — was adjacent to EELA Framework section (also `bg-blue-pale`) with no visual break between them
- `Footer.tsx`: "well-being" → "wellbeing" to match all other pages; added "Get Involved" to footer nav (was in main nav but missing from footer)
- `contact/page.tsx`: Facebook handle display fixed `empowr.cic` → `@empowr.cic` (Instagram and YouTube already had `@` prefix)

**Footer restructured (5 columns):**
- Added dedicated **Legal** column with all 6 policies: Privacy Policy, Cookie Policy, Terms & Conditions, Risk Waiver, Photography & Media Consent, Programme Policies
- Added dedicated **Connect With Us** column with social links (Instagram, Facebook, YouTube) — moved out of the brand column
- Removed the "Policies & Documents" strip from `/our-work` — all policies now live in the footer, accessible from every page
- Footer layout: 5 columns on desktop (`lg:grid-cols-5`), 2 on tablet (`sm:grid-cols-2`), 1 on mobile; consistent `gap-8` throughout
- Column order: Brand → Navigate → Connect With Us → Get In Touch → Legal

All changes committed and pushed to `Pecuvate/empowr-site-netlify` (main). Netlify auto-deploys on push.

**Still outstanding before launch:**
- Team photos and bios (currently initials avatars on `/about`)
- Three additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap A/CNAME from Wix to Netlify

---
