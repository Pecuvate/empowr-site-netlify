# Empowr Main Site — Dev Log

---

## Session 23 — 2026-06-12

**What was done:**

**`/experiential-learning/report` — full report sub-page:**
- New page at `src/app/experiential-learning/report/page.tsx`
- Ports the full "A Non-Medical Approach to Mental Health" report from Heroes (`why-experiential-learning/page.tsx`) into the Main Site
- Adapted from Heroes-specific CSS classes to Main Site Tailwind tokens (blue, cream, border, mid, muted, rounded-2xl, etc.)
- Sections: stats strip → The Problem → The Science (callout box) → The Evidence (5 cards) → The Economic Case (4 cards) → Our Commitment → Sources (collapsible `<details>`)
- No CTA section — removed entirely pending decision on what to put there
- Hero: eyebrow "Empowr Report · 2025", h1 "A Non-Medical Approach to Mental Health", `← Experiential Learning` back link
- `links.ts`: `experientialLearningReport` updated from `https://hero.empowrcic.org/why-experiential-learning` → `/experiential-learning/report` (internal)

**`ExperientialLearningTabs.tsx` — "Why It Matters" condensed:**
- Tab 3 "Why It Matters" stripped to a teaser: 1-para intro + 4 stats grid + 1-para summary + "Read the full report →" (internal `<Link>`)
- "Read the full report →" links in tabs 2 and 3 changed from `<a target="_blank">` to `<Link>` (now internal)

**Footer + home page inline link:**
- Footer Programmes column: "Our Philosophy" link added → `/experiential-learning`
- Home page hero sub-copy: "experiential learning" text wrapped in `<Link href={LINKS.experientialLearning}>` with `underline` style

**Outstanding before launch:**
- Heroes `src/lib/links.ts` — add direct URL to `/experiential-learning/report`
- 3 additional board members
- Client review of programme descriptions
- DNS cutover (`empowrcic.org`)

---

## Session 22 — 2026-06-12

**What was done:**

**New page — `/experiential-learning`:**
- Built canonical EELA philosophy page at `src/app/experiential-learning/page.tsx`
- Client component `src/components/ExperientialLearningTabs.tsx` — 5 tabs: What is EELA? / The Science / The Evidence / Why It Matters / Our Vision
- Hero: eyebrow "Our Philosophy", headline "People learn and grow best through doing." — EELA-forward, not crisis-reactive
- v1 was restructured during the session: originally led with NHS health crisis stats and "A Non-Medical Approach to Mental Health" (report tone). Reframed so EELA is the story and the mental health context lives inside the "Why It Matters" tab as supporting evidence
- Stats (1 in 4, 8.7M, +45%, 11.4) moved from above-the-fold strip into "Why It Matters" tab
- References section removed entirely — replaced with "Read the full report →" link to `hero.empowrcic.org/why-experiential-learning` in "The Evidence" and "Why It Matters" tabs
- `src/lib/links.ts`: added `experientialLearning: "/experiential-learning"` and `experientialLearningReport: "https://hero.empowrcic.org/why-experiential-learning"`
- `src/app/our-work/page.tsx`: "Find out more about EELA →" updated from external `eela.empowrcic.org/about` to internal `/experiential-learning`
- Planning doc: `planning/pages/experiential-learning.md` created and kept in sync throughout — documents v1 issues and v2 reframe rationale

**DNS cutover — executed this session:**
- `bookings.empowrcic.org`: CNAME → `cdn1.wixdns.net` replaced with A records → `185.230.63.107`, `185.230.63.186`, `185.230.63.171` (Wix IPs, matches root domain)
- `empowrcic.org` A record: Wix IPs → `75.2.60.5` (Netlify load balancer)
- `www.empowrcic.org` CNAME: `cdn1.wixdns.net` → `empowr-main-site.netlify.app`
- Both root records at TTL 60 — propagation fast
- Netlify already had `empowrcic.org` set as primary custom domain; SSL will auto-provision via Let's Encrypt
- EELA `feat/bookings-domain-cutover` branch left unmerged — booking links use default Wix URL, not `bookings.empowrcic.org`

**Not yet done (next session):**
- Footer link (Programmes column) + home page inline link (hero sub-copy "experiential learning" → `/experiential-learning`)
- Heroes project `src/lib/links.ts` — add direct URL to this page
- Nav placement — client decision pending
- Commit and push
- Verify `empowrcic.org` serving Netlify site + SSL provisioned

---

## Session 21 — 2026-06-12

**What was done:**

**Home page:**
- "Everyone is welcome here" section: replaced 4 programme-type cards (Drop In, Learn to Skate, Holiday Camps, Push Your Skills) with 3 audience-focused cards (Sessions for Children, Sessions for Adults, Sessions for All Ages)
- Updated copy in each card with client-supplied descriptions
- Grid updated from `lg:grid-cols-4` to `lg:grid-cols-3`; ages label row removed
- Pushed to `main` — Netlify auto-deployed

---

## Session 20 — 2026-06-10

**What was done:**

**About page:**
- Jasmine Barnett role changed from "Co-founder" to "Founder"
- "Meet the full team" button added below team grid — disabled (opacity-40, cursor-not-allowed) pending `/team` page build
- Page header and team section heading centred

**History page:**
- Creative Collaborators section description rewritten with client copy
- HAF Programme and Lewisham Young Mayor's Team added to Organisations We've Worked With

**FAQs:**
- `FaqsAccordion.tsx` refactored: `answer` type changed from `string` to `ReactNode` to support inline links
- "What is a CIC?" updated — "CIC Regulator" links to gov.uk CIC Regulator page
- "Why did Empowr become a CIC?" added with client-supplied copy

**Home page:**
- CIC callout strip removed (to rethink)
- Impact section pill renamed from "Read our full story →" to "Explore our history →"

**Impact page:**
- Page header, all section headings and sub-copy centred
- Transparency Statement `max-w-3xl` centred on page; heading centred
- History callout strip added at end of page (centred): "Empowr has been showing up for over three years" → `/history`

**Work With Us:**
- Page header centred
- Roles intro rebuilt: two centred paragraphs combining values-first copy with warm community invite
- "facilitator" added to the list of roles in the invite paragraph

**Footer:**
- "Our History" link added to About Us column → `/history`

**planning/layout/footer.md updated** to reflect History link and corrected News link status.

**Still outstanding before launch:**
- 3 additional board members
- Client review of programme descriptions
- DNS cutover (`empowrcic.org`)
- Shop subdomain
- Welcome post (`2026-05-20-welcome-to-our-new-website.mdx.draft` → rename to `.mdx`)
- `/team` page build (board members, founders, coaches, ops staff with photos + bios)

---

**What was done (earlier this session):**

**Video cleanup:**
- Deleted 4 untracked raw MP4s from `src/public/`: 3 AI-generated source clips + `hero-banner.mp4` (the processed 3-clip version)
- `git rm src/public/hero-banner2.mp4` — portrait source video removed; `hero-banner2-sharp.mp4` is the production asset and is all that's needed

**Still outstanding before launch:**
- 3 additional board members
- Client review of programme descriptions
- DNS cutover (`empowrcic.org`)
- Shop subdomain
- Welcome post (`2026-05-20-welcome-to-our-new-website.mdx.draft` → rename to `.mdx`)

---

## Session 19 — 2026-06-09

**What was done:**

**Video hero — homepage:**
- Installed FFmpeg 8.1.1 via winget (`Gyan.FFmpeg`) — safe, open-source Windows build
- Uploaded 3 AI-generated MP4 clips + 1 portrait video (`hero-banner2.mp4`) to `src/public/`
- Processed 3-clip version: concatenated, trimmed to 5s each, 0.7x slow motion, 1s crossfades, vignette → `hero-banner.mp4`
- Portrait video sharpened (`unsharp=5:5:1.5`) → `hero-banner2-sharp.mp4` (already committed)
- Final hero: portrait video (`hero-banner2-sharp.mp4`) centred at `h-[200%]` with `bg-blue/65` overlay
- 3-clip source videos and `hero-banner.mp4` left untracked — can be deleted or gitignored

**Centred layouts — homepage:**
- Hero: headline, subtext, CTAs all centred; overlay changed to uniform `bg-blue/65`
- What We Offer: section heading + description centred
- Impact: heading, description, footnote, link buttons centred
- Reviews: heading + description centred
- Get Involved: heading + description centred

**Centred layouts — about page (via subagents):**
- Page hero (`h1` strip): centred
- What We Stand For + Our Team section headings centred
- Our Story heading centred (`OurStorySection.tsx`); narrative body left left-aligned

**Centred layouts — our-work page (via subagents):**
- Page hero (`h1` strip): centred
- EELA Framework heading + description centred
- Our Programmes heading + description centred; Book a Session CTA removed from header row, added centred below programme cards

**Commit:** `035558f` — pushed to `main`, auto-deployed to Netlify

**Still outstanding before launch:**
- 3 additional board members
- Client review of programme descriptions
- DNS cutover (`empowrcic.org`)
- Shop subdomain
- Clean up untracked raw video files from `public/`

---

## Session 18 — 2026-06-09

**What was done:**

**Wix → new site: page coverage audit:**
- Compared all Wix pages against new Next.js site
- All Wix pages are now covered: Home, What We Do, Who We Are, Our Programs, Contact, all 5 policy pages
- Wix Shop page noted as needing an external subdomain (`shop.empowrcic.org`) — link added as disabled footer item for now
- DNS cutover deferred to a future session — Wix pages should not be deleted until after cutover

**Migrated 6 Wix news posts to MDX:**
- Fetched all posts from the live Wix site (2 had dedicated URLs, 2 had inline content only, 2 were program pages serving as news)
- Created MDX files in `src/content/news/`:
  - `2022-02-04-launch-of-empowr-first-skate-jam.mdx` — inaugural Skate Jam, Feb 2022
  - `2022-05-28-donated-computer-from-catbytes-cic.mdx` — Catbytes donation + ICT room, May 2022
  - `2022-06-04-jubilee-family-funday.mdx` — 400+ attendees, 11 partners, Jun 2022
  - `2022-06-05-street-skate-support-group.mdx` — 12-week free programme, 50+ skaters/week
  - `2023-01-13-first-partnership-ivydale-primary.mdx` — first school partnership, Jan 2023
  - `2023-02-06-one-year-anniversary.mdx` — 1-year celebration + retrospective, Feb 2023

**Nav and Footer:**
- News link restored to main nav (between Our Work and Impact)
- Footer: News `<span>` replaced with active `<Link href="/news">`
- Footer About Us column: disabled `<span>Shop</span>` added below FAQs

**links.ts:**
- `shop: "https://shop.empowrcic.org"` added as placeholder — update when SumUp/Shopify subdomain is live

**Build:** 22 static pages, all 7 news slugs generated, zero errors

**Still outstanding before launch:**
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route53, swap A/CNAME from Wix to Netlify (`empowrcic.org`)
- Shop subdomain (`shop.empowrcic.org`) — wire to SumUp or Shopify when ready; update `links.ts` and activate footer link

---

## Session 17 — 2026-06-06

**What was done:**

**About page — real team portrait photos:**
- Replaced DiceBear SVG placeholder avatars with real PNG portraits for all three team members (Jasmine, Shaun, Clifton)
- Switched `<img>` to Next.js `<Image>` component — automatic WebP conversion, correct size served, lazy loading
- Wrapped in `overflow-hidden` container div with `rounded-full` for reliable circular crop; `object-cover object-center` handles non-square source (Jasmine is 1184×864)
- PNG backgrounds: AI image generator had baked the checkerboard "transparency indicator" in as solid opaque pixels (not real alpha). Confirmed with full pixel scan (0 transparent pixels) and RGB sampling. Fixed using a C# flood fill compiled via PowerShell `Add-Type` — seeds from all four image edges, replaces all connected near-white/neutral-grey pixels with warm-white (#fdfcfa), stops at portrait pixels. Jasmine's checkerboard grey (~227) was slightly below the initial threshold — re-run with tolerance=30 to catch it.

**Security:**
- Root-level `.gitignore` created at `Empowr Main Site/.gitignore`
- `.env.local` was untracked but unignored at the repo root — outside the scope of `src/.gitignore`. Now explicitly ignored.

**Still outstanding before launch:**
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 16 — 2026-06-06

**What was done:**

**Nav logo:**
- Replaced "Empowr CIC" text link with `logo.png` from `Empowr CIC/_brand/`
- Copied to `src/public/logo.png`; `Nav.tsx` uses `<img src="/logo.png" h-10 w-auto />`

**About page — headline and Our Story:**
- Headline: "We promote..." → "Promoting lifelong wellbeing..."
- Our Story section extracted to `src/components/OurStorySection.tsx` (client component)
- First paragraph + question visible by default; "See more →" button reveals remaining 3 paragraphs + blockquote

**Home page — UI cleanup:**
- Hero: "Find Out More" button removed; "Book a Session" and "Support Our Work" remain
- "Everyone is welcome" section: "See all programmes →" text link removed

**Contact form:**
- Subject `<select>` moved into left half of a 2-col grid (was full-width, appeared too wide)

**Message pre-fill on contact links:**
- `partner-with-us`: "Get In Touch" → `/contact` with subject=Partnership + partnership-specific starter message
- `work-with-us`: all three "Express Interest" role cards carry role-specific starter messages (Ops, Management, Volunteering); bottom CTA carries general message
- Uses Next.js Link `href={{ pathname, query }}` object form — URL-encodes automatically

**Home impact section — annual report context:**
- Added muted footnote below the stats grid: `"Figures from our 2024–25 Annual Report — one year's output."`
- Original sub-copy ("Since February 2022...") preserved unchanged

**Discussed and deferred:**
- Cumulative impact stats across all years: would need Companies House filings for 2022–23 and 2023–24 to get real totals. Deferred to a future session.

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 15 — 2026-06-05

**What was done:**

**Contact form — subject + message pre-fill:**
- `ContactForm.tsx` split into `ContactFormInner` (uses `useSearchParams`) + outer `ContactForm` (wraps in `Suspense` for static export compatibility)
- Subject field made controlled; initialised from `?subject=` query param, validated against `SUBJECTS` array — no arbitrary values accepted
- Message field uses `defaultValue` initialised from `?message=` query param — any string accepted, user can edit freely
- Both params are optional and independent: `?subject=Partnership`, `?message=...`, or `?subject=Partnership&message=...`
- `partner-with-us`: "Get In Touch" CTA → `/contact?subject=Partnership`
- `work-with-us`: 3 role card "Express Interest" links + bottom CTA → `/contact?subject=Work%20With%20Us`

**Mobile responsive pass — all pages:**
- **Headline sizing**: `text-4xl md:text-5xl` page headers → `text-3xl md:text-4xl lg:text-5xl` (about, eccp, faqs, legal, partner-with-us); home hero `text-4xl md:text-6xl` → `text-3xl md:text-5xl lg:text-6xl`
- **Section padding**: `py-20 md:py-28` → `py-12 md:py-20 lg:py-28` across all pages; contact `py-24 md:py-32` → `py-12 md:py-24 lg:py-32`; sub-sections `py-16 md:py-20` → `py-10 md:py-16 lg:py-20`
- **Stat numbers**: impact page `text-5xl` (bare) → `text-3xl md:text-5xl`; home stats `text-4xl md:text-5xl` → `text-2xl md:text-4xl lg:text-5xl`; partner-with-us stats `text-4xl` → `text-2xl md:text-4xl`
- **Two-column stacked grids**: `gap-16` → `gap-8 lg:gap-16` on our-work, get-involved, work-with-us, eccp
- **Nav**: mobile menu link touch target `py-2` → `py-3`
- **Footer**: social icon SVGs `w-5 h-5` → `w-6 h-6`

**Skill updated:**
- `pre-build-check` GUIDE.md: new "Tailwind Responsive Checks" section (R1–R5) — H1 sizing, section padding, stacked grid gaps, bare stat sizes, touch targets. Runs as part of `/pre-build-check` before any deploy.

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 14 — 2026-06-05

**What was done:**

**Our Work page — full pass:**

**Content fixes:**
- Headline changed to *"Delivering programmes that use hands-on experience as the route to lasting wellbeing."* and reduced to `text-3xl md:text-4xl` (consistent with all other inner pages)
- Sub-copy removed from page header
- EELA programme data aligned with `eela.empowrcic.org/about`: "Creative Expression" → "Creative Expression & Arts"; taglines, descriptions, and "Coming soon" labels updated throughout
- EELA intro text aligned with EELA site framing
- ECCP paragraph rewritten from KB source (`entities/eccp.md`): *"converts participants into certified coaches — building Empowr's delivery capacity from within the community"*
- `LINKS.eelaAbout` added to `links.ts`

**Our Approach section:**
- Info cards (EELA + ECCP) removed — content was duplicated from the paragraphs
- Restored 2-col layout (lg:col-span-2 left + 1 right): left holds narrative + CTAs, right holds two blue-pale callout cards (The Science / Where We're Headed)
- "Find out more about EELA →" CTA added (→ `eela.empowrcic.org/about`, external)
- "Find out more about ECCP →" CTA added (→ `/eccp`, internal)

**EELA Framework section:**
- Replaced 5-column card grid with a vertical list — each row: name + tagline + status badge + description
- MoveWell row styled with `bg-white border-blue/30`; Coming soon rows with `bg-white/60 border-border`

**Our Programmes section:**
- Card background changed from `bg-warm-white` to `bg-white` (better contrast on cream)
- Past Programmes given `border-t` separator within the section

**Who We Work With + Partners:**
- Merged into a single 2-col section on `bg-warm-white` — both tell the same story (who Empowr reaches and works with)

**Colour sequence:** `blue → cream → blue-pale → cream → warm-white → blue` — no consecutive same-colour sections

**Planning docs updated:**
- `planning/pages/our-work.md` — fully rewritten to reflect current built state

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

---

## Session 13 — 2026-06-04

**What was done:**

**Our Impact page — header polish:**
- Eyebrow restored: *"Our Impact"*
- Headline promoted from sub-copy: *"As a registered CIC, we are publicly held to account for the community benefit we deliver. Here is our evidence."*
- Font size reduced to `text-3xl md:text-4xl` to suit the longer headline

**Get Involved page — full improvement pass:**
- Headline changed to *"There is more than one way to be part of the team"* (swapped with Work With Us)
- Sub-copy removed from page header
- Partner With Us card: href updated to `/partner-with-us`, CTA changed to "Find Out More"
- Join the Community card: href updated to `LINKS.socialWhatsApp`, CTA changed to "Join on WhatsApp", marked external
- New section added: "Whatever your role, you're part of the same thing" — 2-column warm-white section with narrative left and 3 left-border blue pillars right (Growth never stops / Community is the work / Every form of involvement matters)

**Work With Us page — complete rebuild:**
- Page purpose changed from practitioner-specific to a broad roles hub
- Headline changed to *"Welcoming anyone who wishes to support us on our mission"* (swapped with Get Involved)
- 4 role cards: Session Delivery (→ `/eccp`), Operations & Coordination, Management & Leadership, Volunteering — latter three route to `opportunities@`
- New "We invest in the people who represent us" section — same 2-column pattern with 3 pillars (Values before credentials / You join a community, not a roster / Quality is non-negotiable)
- Blue CTA at bottom: "Ready to start the conversation?" → `opportunities@empowrcic.org`
- Practitioner-specific content (Who We're Looking For, How It Works) moved to ECCP

**Key decision:** Work With Us was too narrowly focused on session practitioners. Broader roles (Ops, Management, Volunteering) had no home. Practitioner recruitment belongs on ECCP since ECCP is the pathway in for session delivery anyway.

**ECCP page — practitioner recruitment sections added:**
- "Who We're Looking For" section added (cream, 2-column) — facilitators not instructors narrative + 3 value cards (Values first / Community-minded / Committed to quality)
- "How It Works" section added (blue-pale) — freelance associate model, EELA framework onboarding, community not a roster
- Register Interest CTA unchanged

**Contact page — contact form built:**
- All mailto route cards removed
- New `ContactForm` client component: name, email, subject dropdown (General Enquiry, Partnership, Work With Us, Media), message
- Idle → Submitting → Success/Error states with fallback email link on error
- Netlify Function `netlify/functions/contact.ts`: routes Work With Us to `opportunities@empowrcic.org`, all other subjects to `enquiries@empowrcic.org`; sends confirmation email to sender via Resend
- `netlify.toml` updated with `[functions] directory = "netlify/functions"`
- `resend` installed as dependency
- `.env.example` updated: `RESEND_API_KEY`, `CONTACT_EMAIL`, `OPPORTUNITIES_EMAIL`
- Removed sections: Email Us Directly, Follow Us, Registered Details

**Nav:**
- News link removed temporarily (no posts published yet)

**Footer:**
- News link replaced with unclickable `<span>` at 50% opacity

**Planning docs updated:**
- `impact.md` — header section reflects eyebrow + headline pattern
- `get-involved.md` — header, card links, Spirit of Involvement section documented
- `work-with-us.md` — fully rewritten to reflect new broad roles structure
- `eccp.md` — Who We're Looking For and How It Works sections added; note on migration from Work With Us
- `_index.md` — Work With Us status updated to Complete; pending item moved from `/work-with-us` to `/eccp`

**Additional changes this session:**

**Get In Touch CTA routing — all pages:**
- `partner-with-us`: CTA changed from `mailto:` to `Link href="/contact"`
- `work-with-us`: bottom CTA and all 3 role cards (Ops, Management, Volunteering) changed from `mailto:` to `/contact`; unused `LINKS` import removed

**Contact page — layout simplified:**
- Hero banner removed entirely
- Page is now a single cream section with centred `max-w-2xl` column — headline and form only

**Netlify env vars — pushed via CLI:**
- `RESEND_API_KEY`, `CONTACT_EMAIL`, `OPPORTUNITIES_EMAIL` imported to Netlify using `netlify env:import`
- Contact form is now fully live in production

**check-cli skill — shared env files lookup added:**
- `GUIDE.md` and `SKILL.md` updated: before asking for any API key, check `F:\Projects\.env.shared` and `F:\Projects\.env.pecuvate` first

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

**Next session:**
- Contact form query param pre-fill: `/contact?subject=Partnership` pre-selects dropdown and optionally pre-fills message — requires `useSearchParams()` in `ContactForm.tsx`

---

## Session 12 — 2026-06-04

**What was done:**

**About page — full improvement pass:**
- Header: eyebrow removed; headline updated to "We promote lifelong wellbeing through the transformative power of experiential learning."; sub-copy updated to mission/Health Activities Provider framing; mission callout block removed
- Section reorder: "What We Stand For" (values) moved before "Our Story"
- Values section renamed from "Our Values" → "What We Stand For"; sub updated to "Empowr is more than an organisation — it is a movement built on four core beliefs."; cards given left-border blue accent
- Our Story: eyebrow "How we got here." added (`text-xs uppercase tracking-widest font-semibold text-muted`); RC workshop pivot paragraph added from founding story source doc; blockquote sized up
- "What Is a CIC?" section removed from About page — moved to FAQs
- All three team bios improved; Clifton's bio notably expanded

**FAQs page — created:**
- `/faqs` — accordion pattern; server component (`page.tsx`) + client component (`FaqsAccordion.tsx`)
- Seeded with one FAQ: "What is a Community Interest Company (CIC)?" — sourced from the removed About section
- FAQs link added to footer "About Us" column

**Planning docs updated:**
- `planning/pages/about.md` — fully rewritten to reflect current built state
- `planning/pages/faqs.md` — created
- `planning/pages/_index.md` — `/faqs` row added
- `planning/layout/footer.md` — FAQs link added to About Us column

**Still outstanding before launch:**
- Team photos and bios (currently DiceBear avatars on `/about`)
- 3 additional board members (TBC via Notion)
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- Practitioner copy for `/work-with-us`
- Build out remaining FAQs content
- DNS cutover: lower TTL in Route 53, then swap from Wix to Netlify

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
