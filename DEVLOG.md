# Empowr Main Site — Dev Log

---

## 2026-08-12 — Inline chat embed and CRM-routed contact form both tried live, then both deliberately reverted

- **Merged PR #1** (`feat/contact-chat-embed`, open since 24 Jul) — the inline "Ask Empowr" chat box above the `/contact` form. **Closed PR #2** (`feat/chat-bubble-v2`) without merging — a site-wide floating bubble would have doubled up with the inline box on this one page; branch left in place, not deleted, in case that pattern is wanted elsewhere later.
- **Re-enabled the contact-form → CRM pipeline** (`CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` back on Netlify prod) — this completes the 2026-07-27 note that said it "stays off until the owner explicitly says to re-enable it." **Found and fixed a mistake in the process**: first attempt copied the value straight from local `.env.local`, which correctly points at `localhost:3001` for dev — wrong on production, where it silently fell back to direct email every time. Corrected to `https://crm.pecuvate.com/api/channels/contact-form`, rebuilt, verified with a real submission that landed in the CRM as an `escalated` session.
- **Owner reviewed the live result and reverted both**, same session. Two separate reasons: the chat embed wasn't wanted live yet at all; the CRM routing, on inspection, only sends the team a bare "new enquiry, click here" link-notification (`notifyEscalation.ts`) rather than the actual message content — not what "you get an email" was expected to mean. Reverted `/contact` to the pre-embed form-only layout, and unset the two Netlify env vars again, restoring the exact pre-session direct-Resend-only behaviour.
- **Net effect: `/contact` is unchanged from before this session** — but `ChatEmbed.tsx`, its five Netlify Function proxies, and the CRM routing are all still in the codebase, dormant, one page-edit and two env vars away from switching back on whenever the team is ready to commit to it (likely alongside a fix to `notifyEscalation.ts` so the inbox gets real content, not just a link).
- Two throwaway test escalations created while verifying the CRM path were deleted from prod afterward.

## 2026-08-05 — Legacy Wix *page* URLs redirected (`c3438a0`) — a much bigger class than `/service-page/*`

Started as "verify the domain in Search Console" and turned up a far larger problem. **The domain is already verified** — a `google-site-verification` TXT record is live on the apex (`2bygrBV5H6yayACEvbpjnrG5qxJBaD9WGiYhHRWkjWU`), so no setup was needed. But a Google `site:` search immediately revealed indexed Wix URLs that had never appeared in any PostHog query.

- **Method that found it.** A `site:` search showed stale URLs; querying PostHog for *every trafficked path that isn't a real route* then quantified it: **~300 visits/180d (bot-filtered, excluding today) landing on 404s**. The yesterday pass only looked at `/service-page/*` and `/product-page/*`, so it saw ~26 of them. The lesson generalises — grepping for a known pattern only finds that pattern; enumerate against the real route list instead.
- **Highest impact: `/risk-waiver` (11) and `/photograph-consent` (7) were dead ends.** `waiver.empowrcic.org` is the only place risk waivers and photo consent are captured, so these were people trying to complete compliance forms and failing.
- Biggest by volume: `/sk8-skool` (105) and `/kidzspace` (51) → EELA. `/sk8-skool` covers both kids and adult variants so it goes to EELA home to self-select.
- Pages with equivalents *here*: `/contact-us` → `/contact`, `/t-c-s` → `/legal`, and two Wix news URLs → their dated `/news/` slugs.
- Added `/event-details/*` and `/booking-calendar/*` wildcards — two more Wix-generated URL families.
- **Deliberately left to 404:** `/a-night-to-remember`, `/bouldering-support-group`, `/international-streetskate`, `/copy-of-empowr-champion-program`, `/team-4`, and our own deleted `/cookie-preferences`. Redirecting dead content to the home page is treated as a **soft 404** by Google and delays de-indexing; a real 404 is the honest signal. Redirect only where a genuine equivalent exists.
- Rejected a bad check along the way: testing candidate paths for 404 proves nothing on a static export, since *every* unknown path 404s. Guesses like `/gallery` and `/team` "passed" that test with no evidence they ever existed — evidence came from the search index and PostHog, not from probing.
- 29 redirect rules total, TOML validated, no duplicate `from=`. All verified live after deploy, including that the deliberate-404 set still 404s.

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
- Committed + pushed as `3f524ce`; Netlify auto-deployed.

**Correction to the traffic figures.** The audit query omitted the bot filter the `/posthog-analyse` skill mandates, and counted the user's own testing — 7 of the 12 hits on the headline URL were from investigating it that day. Honest volume is ~24 hits across all `/service-page/*` slugs in 90 days, concentrated late June/early July. The redirects still stand; the urgency did not.

### Same day — sitemap added (`4a3ed7c`)

- No `sitemap.xml` existed, yet `robots.txt` had been declaring `Sitemap: https://empowrcic.org/sitemap.xml` — a 404, and on the wrong host (the apex 301s to `www`). Both fixed.
- Added `src/app/sitemap.ts` — 22 URLs: 16 static routes plus the 6 MDX news posts derived from `getAllPosts()` so publishing can't leave it stale, with `lastModified` from each post's date.
- **`export const dynamic = 'force-static'` is required** under `output: 'export'` — without it the build fails collecting page data for `/sitemap.xml`. Not a type error, so `tsc` and review both pass it. Caught only by running the build.
- Verified live (200, 22 URLs) after deploy, not just pushed.

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

---

## 2026-07-29 - Cross-site UTM tagging (T5 alternative): every outbound link to hero/eela/start now carries ?utm_source=empowr-main&utm_medium=internal, after full cross-domain session linking was ruled out as incompatible with cookieless mode (`2cbb95d`)

---

## 2026-07-28 (session 2) - Added `/product-page/*` -> Wix shop redirect (`0ce523e`); PostHog showed the ~330 hits/14d were headless-Chrome bot traffic, not lost sales; Analytics Hub contamination clears 27 Aug 2026

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
