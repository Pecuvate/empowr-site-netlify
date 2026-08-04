# Empowr Main Site — Dev Log

---

## 2026-08-04 — `/service-page/*` 404s fixed + full legacy-Wix-URL audit via PostHog

PostHog showed a visit to `/service-page/kids-skate-jam-with-coaching-5-15-yrs`, which 404s on the current Next.js export. Same root cause as the `/product-page/*` fix (2026-08-01): Wix Bookings/Stores auto-generate `/service-page/*` and `/product-page/*` URLs per bookable item, Google indexed them pre-cutover (2026-06-13), and the Next.js export has no equivalent routes.

- Ran a 90-day HogQL query against `empowr-main` for every `/service-page/*` and `/product-page/*` hit — found 19 distinct legacy slugs still receiving traffic, not just the one reported.
- User wants these routed forward to EELA (kids vs adult section) rather than back to Wix.
- Classified each `/service-page/*` slug by audience from its name:
  - Explicit **kids** matches (`kids-skate-jam-with-coaching-5-15-yrs`, `wednesday-skate-lesson-5-12-yrs`, `sk8-skool-for-kidz-5-15-yrs-1`, `roller-skating-camp-5-12years`) → individual `netlify.toml` redirects to `eela.empowrcic.org/kids-space`.
  - Explicit **adult** match (`adult-skate-jam-with-coaching-15`) → redirect to `eela.empowrcic.org/adults`.
  - Ambiguous slugs (`sk8-skool-backwards-skating-masterclass`, `each1teach1-skate-jam`, the `sk8-skool-*-13-*` ones — the `13` isn't reliably an age, Wix also uses numeric suffixes for duplicate service names) were **not** guessed — EELA's own age bands are `kids-space` = 5+ (no cap) and `adults` = 15+ explicitly, so a wrong guess on a 13-year-old's class is plausible. These fall through the `/service-page/*` wildcard to `eela.empowrcic.org` (has both a "Kids Space (5+)" and "Adults (15+)" CTA for self-select).
  - Netlify redirects are first-match-wins, so the explicit slug rules are ordered before the wildcard.
- `/product-page/*` left as-is (still bridges to the Wix shop — out of scope for this pass).
- Not committed/pushed yet — pending user confirmation.

## 2026-07-30 — PostHog route-change tracking fix + "Support Us" conversion path

Came out of a full review of Empowr Heroes; both findings apply here.

### Done

- **`capture_pageview: 'history_change'`** in `PostHogProvider.tsx` (was `true`). posthog-js gates `HistoryAutocapture` on an exact string match, so `true` captures hard page loads only — client-side `<Link>` navigation produced **no pageview at all**. Every internal navigation on this site has been invisible; bounce rate and pages/session were artefacts. Fixed fleet-wide (Heroes, EELA, Members, Landing) plus the canonical templates in `_config/guides/posthog-consent.md`.
- **"Support Us" CTA now lands on `/become`, not `/`.** Added `LINKS.heroesDonate` alongside the existing `heroesplatform`. Heroes' home page is a long-form mission page with the tier chooser several screens down — someone clicking "Support Us" has already responded to the ask and shouldn't have to read a second pitch. Informational mentions (footer, FAQs, prospectus) still point at `/`; explicit asks (nav "Support Us" ×2, `/get-involved` "Become a Hero") point at `/become`.
- **Dropped `target="_blank"`** from those same explicit-ask CTAs. A conversion path shouldn't spawn a background tab. `/get-involved` gained a `sameTab` flag on the route object so the shared renderer keeps `_blank` for genuinely external links (the WhatsApp community).
- Planning docs updated per the sync rule — `planning/layout/nav.md`, `planning/pages/get-involved.md`.

### Follow-up, same day — three CTAs missed on the first pass

The first commit only caught the nav and `/get-involved`. My initial audit grepped for the literal `hero.empowrcic.org` string, which silently skipped every file referencing `LINKS.heroesplatform` by constant. Caught it verifying the live deploy — three `target="_blank"` Heroes links remained on the homepage where I expected one (the footer).

Also repointed, now on `LINKS.heroesDonate` + same tab:

- `src/app/page.tsx` — `ROUTE_CARDS` "Become a Hero" card (gained a `sameTab` flag, same pattern as `/get-involved`)
- `src/app/page.tsx` — closing band "Support Our Work"
- `src/app/experiential-learning/page.tsx` — closing band "Support Our Work"

**The rule, recorded in `planning/layout/nav.md`:** explicit asks → `heroesDonate` → `/become`, same tab. Informational mentions → `heroesplatform` → `/`, new tab. Six explicit asks total (nav ×2, home ×2, get-involved, experiential-learning); three informational (footer, FAQs, prospectus).

Noted, not changed: `faqs/FaqsAccordion.tsx` and `prospectus/page.tsx` hardcode the Heroes URL instead of using `LINKS`, against this project's own "external URLs → `src/lib/links.ts`" rule. Destination is correct, so left alone rather than widening this change.

### Checked, no action

Security headers are **fine here**. This site is a static export (`output: "export"`, `publish = "out"`), so `netlify.toml` `[[headers]]` apply normally — all four verified live on `www.empowrcic.org`. An earlier check appeared to show them missing; that was `curl` against the apex domain reading the 301's headers instead of the destination's. (Heroes *is* affected, because it runs the Next.js runtime — fixed separately in that repo.)

### Context

Heroes gets ~70 pageviews/30d against this site's ~1,634, and produced 2 referred visits in that window. A fundraising campaign is being planned; these changes are part of making the path convert and be measurable before it launches.

### Verified

`npx tsc --noEmit` clean · `npm run build` clean

---

## 2026-07-29 (session 2) — Removed dead cookie consent banner + preferences system

### Done

- Deleted `CookieBanner.tsx`, `ConsentContext.tsx`, `lib/consent.ts`, `CookiePreferencesButton.tsx`, `/cookie-preferences` page; updated `layout.tsx` (unwrapped `ConsentProvider`) and `Footer.tsx` (removed the dead link). 7 files changed, 341 lines removed.
- Root cause: `PostHogProvider.tsx` runs `cookieless_mode: 'always'` — nothing is ever written to the device, so the banner's Accept/Decline/Manage-preferences choices did nothing (`posthog.init()` ran unconditionally either way), and the deleted `/cookie-preferences` page described fictional "analytics cookies... duration up to 2 years" that were never actually set.
- Verified live via Playwright: home page loads with zero console errors, no banner, Footer Legal column shows only "All Our Policies." Planning docs (`footer.md`, `_index.md`) already didn't document the dead system, so no doc updates were needed.
- Commit `c4c77b5`, pushed to `main` — Netlify auto-deploys (static export).

### Decisions

- User confirmed removal after the legal reasoning: PECR doesn't apply (nothing stored on device), GDPR lawful basis is legitimate interest documented via the Privacy Policy — same basis already adopted project-wide during the T3 cookieless migration. Standard practice for this pattern is no banner, disclosure via a standard footer Privacy Policy link — which Main Site already has, independent of the deleted system.
- Left `/legal/cookie-policy` (Netlify redirect to LegalHub/Sanity content) untouched — separate CMS system; its copy likely still needs a cookieless-wording update but that's a `/update-sanity` task.

### Next

- Follow-up flagged, not scoped: update the LegalHub `cookie-policy` Sanity document to cookieless wording.

---

## 2026-07-29 — Cross-site UTM tagging (T5 alternative)

- `src/lib/links.ts`, `FaqsAccordion.tsx`, `prospectus/page.tsx`: every outbound link to hero.empowrcic.org, eela.empowrcic.org, and start.empowrcic.org now carries `?utm_source=empowr-main&utm_medium=internal` — the practical alternative to full cross-domain session linking, which was ruled out this session as incompatible with the site's cookieless PostHog mode (`identify()` is disallowed under `cookieless_mode: 'always'`; full reasoning in AnalyticsHub DEVLOG)
- Commit `2cbb95d`, pushed to `main`, Netlify auto-deployed

---

## 2026-07-28 (session 2)

- Added a `netlify.toml` redirect: `/product-page/*` → `https://empowrcic.wixsite.com/empowrcic/shop` (301, `force = true`, commit `0ce523e`) — these are leftover Wix product URLs from before the 2026-06-13 DNS cutover, still indexed by Google, 404ing on the current Next.js export
- Investigated via PostHog before building anything: ~330 hits/14d on these dead URLs, all `$direct` referrer, one pageview per session every time, and **330 of 331 hits came from just 2 distinct user agents, all "X11; Linux" headless-Chrome, zero mobile/Windows/Mac** — this is automated crawler/bot traffic, not real customers hitting a dead end. Corrected an earlier overclaim in-session that this was "lost sales"
- Because this is a static-export site (`publish = "out"`), the redirect fires at Netlify's edge before the app (and its PostHog script) ever loads — verified live (`301` → correct Location header) and confirmed via HogQL that this stops these hits from generating `empowr-main` pageview/bounce events in Analytics Hub going forward
- One hit slipped through ~45 min after the deploy was confirmed live (different product slug, `colour-edit-sk8-fam-t-shirt-by-empowr`) — most likely caught in CDN propagation right after deploy; re-tested that exact URL afterward and it redirects correctly, so treated as a one-off, not a leak
- **Contamination timeline for Analytics Hub** (rolling windows, not a hard cutover): last observed contaminated hit `2026-07-28T21:40:23+01:00`. 7-day trend badge (14-day window) clears **11 August 2026**; pageviews/visitors/bounce/top-pages/referrers (30-day window) clears **27 August 2026**. Immediate cleanup would need a manual PostHog data deletion — not done, would need explicit go-ahead first
- **Wix exit context surfaced by the user this session** (recorded in `project_empowr_members_platform` memory): booking (already being rebuilt on Empowr Members) and the shop are the only remaining Wix uses; plan is basic-plan downgrade once booking cuts over, then full exit once Members platform is live. Today's redirect target is a bridge — it'll need repointing when the shop leaves Wix

---

## 2026-07-28 — PostHog switched to cookieless server hash mode (`cookieless_mode: 'always'`), replacing memory-mode persistence; cookie banner retained at the time

## 2026-07-27 (session 3) — Reverted contact form to direct-Resend-only at owner's request (stays off until explicitly re-enabled); fixed "Speak to the team" disappearing-after-first-message bug in ChatEmbed.tsx (PR #1), same bug found + fixed in PecuvateCRM's own widget

---

## 2026-07-27 (session 2) — Routed contact form submissions into PecuvateCRM's Escalations dashboard as primary path (direct-Resend as fallback); verified live with a real submission; committed `63b7dfc`

---

## 2026-07-27 — Rebuilt floating chat bubble on `feat/chat-bubble-v2` (PR #2, not merged); fixed a real bug where the iframed CRM widget went inert under blocked third-party storage; open decision on `/contact` double-chat UX at merge time

---

## 2026-07-27 — Expanded `/faqs` from 2 to 15 questions across 5 grouped sections, sourced from the Empowr KB; refactored `FaqsAccordion.tsx` to `FAQ_SECTIONS`; deployed `ce70e15`

---

## 2026-07-24 — Built the contact-page "Ask Empowr" chat embed prototype (`ChatEmbed.tsx` + 6 Netlify Functions proxy to PecuvateCRM's widget API), PR #1 open, not merged; Playwright-verified end-to-end against the real deploy preview; "speak to the team" disappearing-after-first-message gap found (fixed 2026-07-27, above)

---

## 2026-07-22 — Removed age labels from "Our Work" cards, deferring to eela.empowrcic.org as canonical; explored (not built) a chat-first Q&A concept for /contact

---

## 2026-07-08 — Cookie consent UI: banner + preferences page links corrected (Cookie Policy vs Privacy Policy); verified with `npm run build`

---

## 2026-07-03 — Prospectus contact-detail fixes (outreach@/shaun.barnett@ emails, Shaun's title, website link, layout tweak) + EELA sub-programme descriptions added to `EELA_PROGRAMMES`

---

## 2026-07-03 — KB alignment audit: fixed 8 gaps against Empowr KB entities; reverted EELA experiential-learning framework changes pending proper architectural placement; Empowr Learning Spiral established as canonical methodology

---

## 2026-07-02 — Rolled out new monochromatic Empowr logo + regenerated favicons across all 6 Empowr CIC sites; decided against centralised logo hosting

---

## Session 32 — 2026-06-29 — My Account nav placeholder built (feat/my-account-nav, parked, not merged) pending new standalone members platform; team decided against routing to Wix (broken account URLs)

---

## Session 31 — 2026-06-26 — Prospectus converted to Next.js page (src/app/prospectus/page.tsx); old HTML deleted; not indexed, shared as direct link at empowrcic.org/prospectus

---

## Session 30 — 2026-06-26 — Prospectus full content overhaul (mission rewrite, founding story intro, beliefs section, how-we-work redesign, impact narrative); EELA sub-programme names updated to MoveWell/MindWell/CreateWell/ExploreWell/ConnectWell in our-work/page.tsx

---

## Session 29 — 2026-06-22 — Built full PECR-compliant cookie consent system (ConsentContext, CookieBanner, /cookie-preferences page, PostHog guard)

## Session 28 — 2026-06-13 — Fixed /legal route redirect bug (netlify.toml splat → :slug pattern); verified contact form routing in production

## Session 27 — 2026-06-13 — KB sync: updated Empowr CIC Obsidian vault to align with live site (8 entity/planning updates)

## Session 26 — 2026-06-13 — DNS cutover executed (empowrcic.org → Netlify); 8 planning docs audited and updated; footer Legal link text updated

## Session 25 — 2026-06-13 — Planning doc audit: 4 gaps fixed across footer.md, home.md, experiential-learning.md, _index.md; planning doc sync memory saved

## Session 24 — 2026-06-13 — Report page emoji + layout polish; footer Shop column added; Empowr brand favicon replaced Vercel default

## Session 23 — 2026-06-12 — Built /experiential-learning/report sub-page; condensed ExperientialLearningTabs "Why It Matters" tab to teaser + link

## Session 22 — 2026-06-12 — Built /experiential-learning EELA philosophy page (5-tab client component); DNS cutover executed

## Session 21 — 2026-06-12 — Home page "Everyone is welcome" section updated to 3 audience cards (Children/Adults/All Ages)

## Session 20 — 2026-06-10 — About page (Jasmine role, Meet Team button); History + FAQs (2 new entries); Impact + Work With Us layout polish

## Session 19 — 2026-06-09 — Video hero added (portrait video, FFmpeg); centred layouts across home, about, our-work pages

## Session 18 — 2026-06-09 — Wix page coverage audit; 6 news posts migrated to MDX; News restored to nav; Shop link placeholder added

## Session 17 — 2026-06-06 — About page: real team PNGs added; C# flood fill to remove AI checkerboard background; .gitignore created

## Session 16 — 2026-06-06 — Nav logo added; About page headline + Our Story expand/collapse; contact form subject column fix

## Session 15 — 2026-06-05 — Contact form query-param pre-fill (?subject, ?message); mobile responsive pass across all pages

## Session 14 — 2026-06-05 — Our Work page full pass: content fixes, EELA Framework redesign, 2-col layout, planning doc updated

## Session 13 — 2026-06-04 — Get Involved + Work With Us rebuilt; ECCP practitioner sections added; Contact form built (Netlify Function + Resend, live)

## Session 12 — 2026-06-04 — About page full pass (values reorder, Our Story, bios); FAQs page created; planning docs updated

## Session 11 — 2026-06-04 — Home hero restructured (new headline, sub copy); News section removed temporarily pending content

## Session 10 — 2026-06-04 — Planning docs audited; footer restructured (6 columns, SVG social icons, LinkedIn + WhatsApp)

## Session 9 — 2026-06-04 — 3 new pages (/eccp, /partner-with-us, /legal); footer rebuilt (6 columns); planning/pages/ created with 11 docs

## Session 8 — 2026-06-03 — Content consistency audit; policy link audit; footer restructured (5 columns, dedicated Legal + Connect columns)

## Session 7 — 2026-06-01 — Companies House filing URLs wired; Impact page overhauled with real stats; all 6 policy links activated

## Session 6 — 2026-05-21 — 6 org-wide Empowr policies written + published to LegalHub; policy naming convention established; links.ts updated

## Session 5 — 2026-05-21 — Deployed to Netlify; all 5 Wix policies audited; decision: all policies to be hosted on LegalHub

## Session 4 — 2026-05-20 — All 7 remaining pages built; MDX news system set up; first news post created; build clean (12 static pages)

## Session 3 — 2026-05-20 — Stack decisions (Tailwind v4 + shadcn/ui, static export); Next.js scaffolded; Nav, Footer, Home built; build clean

## Session 2 — 2026-05-20 — Wix site analysis; narrative.md + founding-story.md + programme-descriptions.md created from Notion; key decisions confirmed

## Session 1 — 2026-05-19 — Project scaffolded: folder created, site plan written, CLAUDE.md/CONTEXT.md/DEVLOG.md created

---

<!--
COMPRESSED SESSION DETAIL — 2026-07-03
Sessions 1–31 compressed from ~1100 lines to summary lines above.
Full detail available in git history.
-->
