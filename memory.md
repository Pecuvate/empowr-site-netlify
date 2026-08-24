# memory.md — Empowr Main Site

Current phase status and key facts that would otherwise need re-explaining at the start of every session.

---

## Current Phase

- **🔄 2026-08-24 (session 2): Site copy synced to the Empowr CIC vault after the vault moved ahead of it.** The KB vault (`F:\Projects\vaults\EMPOWR CIC`, not this repo) is source of truth for programme/session terminology; this repo is a consumer that can drift behind it. This session found and fixed real drift: `participant`→`member` rename (FAQs, ECCP, Our Work — CIC 34 regulatory figures correctly left as "participant"), Kit List answer (added Quad Roller Skates, scoped to structured sessions only), and MindWell's definition ("Mindfulness & Recovery" → "Body-Mind Skill Development", outcome-framed not activity-listed) on both `our-work/page.tsx` and `prospectus/page.tsx`. **Take this as a standing pattern, not a one-off**: whenever the vault's `entities/sessions`, `entities/eccp`, `entities/eela-programme`, or `synthesis/supporter-prospectus` change, check whether this repo's FAQs/ECCP/Our Work/Prospectus pages need the same update — nothing here watches the vault automatically. Full detail: DEVLOG 2026-08-24 (session 2).
- **🔗 2026-08-20: `contact.ts` now accepts cross-origin submissions from EELA.** CORS allow-list (`eela.empowrcic.org` + its Netlify preview domain) and `OPTIONS` preflight handling added, commit `5fe0c69`, live. EELA's new Private Bookings enquiry modal reuses this exact function rather than a duplicate backend — same CRM routing, spam protection, confirmation email. **If this function is ever refactored, the CORS headers must be preserved or EELA's enquiry form breaks.** CRM routing (`CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY`) is still deliberately unset as of this date (see 2026-08-12 entry below) — both this site's form and EELA's fall to direct-Resend until those vars are restored.
- **♿ 2026-08-24: most of the 2026-08-20 accessibility findings are fixed and re-verified against a rebuilt static export.** Focus indicator on `/about` "See more" fixed. Tap-target: traced to 2 shared components (mobile-nav hamburger, footer) — fixing those cleared most findings on every page at once (`/about`/`/faqs` went 27→3 medium rows across 3 rebuild-and-reaudit cycles). Contrast: the `--color-blue-light` token (3.45:1, matched the 08-20 cited example) is fixed, but **contrast is NOT fully resolved** — still 26-64 low-contrast nodes/page from other causes (`text-muted`, hover states, the Trustpilot badge). **Still open, not attempted**: sitewide contrast beyond that token, unsized `<img>`, `clipped-content` overflow on a few pages, missing `aria-current` on 6 routes, homepage-specific undersized CTAs. Full detail: DEVLOG 2026-08-24. **Use `/design-audit` to re-check** (new skill, built this session) instead of hand-running the harness — it auto-detects this site's static-export build and handles serve/cleanup.

**Live — post-launch iteration**

The custom Next.js site is live on Netlify at `empowrcic.org` and `www.empowrcic.org`. Continue from `DEVLOG.md` for current post-launch work.

**2026-07-22:** "Our Work" programme cards (`src/app/our-work/page.tsx`) now show title + description only — no ages, no per-programme name list. `eela.empowrcic.org` is the canonical source for session/camp/course ages across Empowr CIC now (decided during a PecuvateCRM KB accuracy pass); this site's own programme copy should not restate ages going forward. `planning/pages/our-work.md` updated to match.

**2026-07-24:** The `/contact` chat-first Q&A concept is now **built and Playwright-tested**, not just decided — `src/components/ChatEmbed.tsx` + 6 Netlify Functions proxy on branch `feat/contact-chat-embed`, PR #1 open at `github.com/Pecuvate/empowr-site-netlify/pull/1`. Full detail in `project_empowr_contact_chat_concept` memory. Known follow-up: "Speak to the team" currently disappears after the first message is sent (only shows pre-first-message) — redesign planned for next session, not yet built. **Update 2026-08-12: PR #1 merged to `main`, then deliberately reverted from rendering same day — see the dated entry below. `ChatEmbed.tsx` and its functions are in the codebase now, just not called from `contact/page.tsx`.**

**2026-07-27:** `/faqs` expanded from 2 to 15 questions across 5 grouped sections, content sourced from the Empowr KB. Merged to `main` and deployed (commit `ce70e15`). `FaqsAccordion.tsx` structure changed: flat `FAQS` array → `FAQ_SECTIONS`. Content rule going forward: never hardcode schedules/prices/ages in FAQ answers — route to `eela.empowrcic.org`.

**2026-07-27 — floating chat bubble rebuilt, still not merged.** The old `feat/chat-bubble` branch (23 commits stale) is superseded by `feat/chat-bubble-v2` — `ChatBubble.tsx` + `layout.tsx` wiring, PR #2 open at `github.com/Pecuvate/empowr-site-netlify/pull/2`, live Netlify deploy preview at `deploy-preview-2--empowr-main-site.netlify.app`. A real bug was found and fixed during review (CRM-side): the embedded widget went completely inert in restricted third-party-storage browser contexts — fixed, verified on this site's own preview. **Resolved 2026-08-12: the open UX decision was decided — inline embed (PR #1) over floating bubble, to avoid both on `/contact` at once. PR #2 closed without merging** (branch kept, not deleted). Then the inline embed itself was reverted same day too — see the dated entry below. Neither chat surface is live on this site as of 2026-08-12.

**2026-08-12 — chat embed and CRM-routed contact form both tried live, then both reverted.** Merged PR #1 (inline `/contact` embed), closed PR #2 (floating bubble) unmerged. Re-enabled `CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` on Netlify prod — caught and fixed a real mistake in the process: the first attempt copied the value straight from local `src/.env.local`, which correctly holds `http://localhost:3001/...` for dev, onto *production*, where it silently fell back to direct email every time until corrected. Verified working with a real submission landing in the CRM as an `escalated` session. **Then reverted both, on inspection**: the CRM's notification email (`notifyEscalation.ts`, PecuvateCRM) is a bare "new enquiry, click here" link, not the actual message content — not what re-enabling was meant to achieve. `/contact` is back to the pre-session form-only layout; the two env vars are unset again. Nothing lost — `ChatEmbed.tsx`, its functions, and the CRM routing all still exist, dormant, for whenever there's a real decision to switch over (likely needs a `notifyEscalation.ts` fix first so the inbox gets real content). Two test escalations created during verification were deleted from prod. Full narrative: `DEVLOG.md` (this project's, plus PecuvateCRM's and the Empowr CIC workspace-level one).

**2026-07-27 (session 2) — contact form now routes into PecuvateCRM, merged and live.** `src/netlify/functions/contact.ts` calls a new CRM channel route (`CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` in `src/.env.local`, not the root one) as its primary path — submissions land in the CRM's Escalations dashboard as `escalated` sessions, grouped by subject (General Enquiry, Work With Us, etc., added same day CRM-side). Falls back to the old direct Resend internal email only if the CRM call fails; the visitor's own auto-reply is unchanged. Verified with a real production submission. Committed `63b7dfc`/`07fc9dc`. Full detail in PecuvateCRM's own memory.md and DEVLOG.

**2026-07-27:** The `/contact` chat embed concept above was built on `feat/contact-chat-embed` (PR #1, not yet merged) — see that branch and `project_empowr_contact_chat_concept` in Claude memory for the full build. This session: fixed the "speak to the team" option disappearing after the first message (`ChatEmbed.tsx`, commit `22f23a1`), and reverted the contact form's live routing from CRM-primary back to direct-Resend-only at the owner's request ahead of a launch (env-var toggle on Netlify, no code change — `CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` currently unset in production). Re-enabling CRM routing later is just restoring those two vars + a Netlify rebuild — but only do that on the owner's explicit go-ahead, not automatically once other CRM work (e.g. the Queries/Cost-breakdown UI polish) is finished.

**2026-08-05 — legacy Wix URL cleanup, and the method that found it.** `netlify.toml` now carries 29 redirect rules. The `/service-page/*` + `/product-page/*` passes only caught what PostHog had *observed being clicked*; a Google `site:` search revealed a much larger indexed set, and querying PostHog for **every trafficked path that isn't a real route** quantified it at ~300 visits/180d hitting 404s. Fixed: `/risk-waiver` + `/photograph-consent` → `waiver.empowrcic.org` (the only place waivers are captured — these were the worst dead ends), `/sk8-skool` (105 views) + `/kidzspace` (51) → EELA, `/contact-us` → `/contact`, `/t-c-s` → `/legal`, two Wix news URLs → dated `/news/` slugs, plus `/event-details/*` and `/booking-calendar/*` wildcards. Commit `c3438a0`. **Two rules worth keeping:** (1) old content with no equivalent is left to 404 on purpose — redirect-to-home is a soft 404 to Google and delays de-indexing; (2) don't probe candidate paths to "confirm" they're stale — on a static export every unknown path 404s, so that test proves nothing. **Google Search Console — set up 2026-08-05.** A `google-site-verification` TXT record was already live on the apex, and creating the property verified **instantly**, which proves the user's own Google account issued that original token (it was never a stranded Wix-era account — that concern is closed). It is a **Domain property**, confirmed by all four subdomain sitemaps being accepted under it: `www`, `eela`, `start`, `hero`. **Do not add another TXT record** — one token, already correct. **Open item:** export *Indexing → Pages → Not found (404)* and convert it to redirects. A new property takes a day or two to populate that report, so it may look empty at first. That export is the complete list of dead URLs Google knows about — strictly larger than what PostHog or a `site:` search can show, since those only surface paths someone clicked or that ranked for a guessed query.

**2026-08-04:** Two changes. (1) `netlify.toml` gained `/service-page/*` redirects — legacy Wix *Bookings* URLs (the sibling of the `/product-page/*` Stores case below), still Google-indexed from before the 2026-06-13 cutover. Five slugs with an unambiguous audience go to `eela.empowrcic.org/kids-space` or `/adults`; everything else falls through a wildcard to EELA home to self-select. Unlike the `/product-page/*` case these point *forward* to EELA, not back to Wix, so they don't need repointing at the Wix exit. Commit `3f524ce`. (2) **`src/app/sitemap.ts` added** (22 URLs, news posts derived from `getAllPosts()` with `lastModified`) and `robots.txt` fixed — it had been declaring `Sitemap: https://empowrcic.org/sitemap.xml`, which 404'd *and* used the apex host (the apex 301s to `www`). Commit `4a3ed7c`. **The sitemap route needs `export const dynamic = 'force-static'`** because this is a static export — without it the build fails collecting page data for `/sitemap.xml`, and it's not a type error so `tsc` won't catch it.

**2026-07-30:** Two changes. (1) `capture_pageview` was `true` in `PostHogProvider.tsx`, which disables posthog-js client-side route-change tracking entirely — **no internal `<Link>` navigation on this site has ever been recorded**, so all bounce-rate and pages/session data before this date is an artefact. Now `'history_change'` (commit `52e39c4`), fixed fleet-wide plus the canonical template in `_config/guides/posthog-consent.md`. (2) Every *explicit* "Support Us"/"Become a Hero" CTA now points at `hero.empowrcic.org/become` (the tier chooser) in the **same tab**, via new `LINKS.heroesDonate`; informational mentions of Heroes keep `LINKS.heroesplatform` → `/` in a new tab. Six explicit asks, three informational — the rule is recorded in `planning/layout/nav.md`. Commits `52e39c4`, `f3d90ed`, `4a3cef1`. Context: Heroes had ~0.1% click-through from this site and zero donations ever. **Security headers on this site were checked and are fine** — it's a static export, so netlify.toml headers apply; only Heroes (Next.js runtime) was affected.

**2026-07-28:** PostHog switched from `persistence: 'memory'` to `cookieless_mode: 'always'` (`src/components/PostHogProvider.tsx`, commit `30e4f06`) — part of the Empowr CIC-wide cookieless rollout, fixes bounce rate/session data that was structurally invalid under memory mode. No other change. Full detail in AnalyticsHub DEVLOG/memory.

**2026-07-29:** Every outbound link to hero.empowrcic.org, eela.empowrcic.org, and start.empowrcic.org (`links.ts`, `FaqsAccordion.tsx`, `prospectus/page.tsx`) now carries `?utm_source=empowr-main&utm_medium=internal` — shipped as the practical alternative to full cross-domain session linking, which was ruled out this session as incompatible with `cookieless_mode: 'always'`. Full reasoning in AnalyticsHub DEVLOG. Commit `2cbb95d`.

**2026-07-28 (session 2):** `netlify.toml` gained a `/product-page/*` → `https://empowrcic.wixsite.com/empowrcic/shop` redirect (301, commit `0ce523e`) — leftover Wix product URLs from the pre-migration site, still indexed by Google, were 404ing and (before this fix) firing PostHog pageviews from the 404 page. Investigated first: ~330 hits/14d, but 330/331 came from just 2 headless-Chrome UAs with zero mobile/Windows/Mac — bot traffic, not lost sales. **This redirect target is temporary** — the shop is leaving Wix as part of the broader Wix exit (see `project_empowr_members_platform` memory); update the redirect when that happens, or it'll 301 people to a dead Wix site instead of a dead Next.js route.

**2026-07-29 (session 2):** The cookie consent banner system built in Session 29 is now **gone entirely** — `CookieBanner.tsx`, `ConsentContext.tsx`, `lib/consent.ts`, `CookiePreferencesButton.tsx`, and the `/cookie-preferences` page were deleted; `layout.tsx` and `Footer.tsx` updated to match. Reason: PostHog here runs `cookieless_mode: 'always'` (see 2026-07-28 entry above) — nothing is ever written to the device, so the banner's Accept/Decline/Manage-preferences choices did nothing, and `/cookie-preferences` described fictional "analytics cookies" that were never set. No consent is legally required under this mode (legitimate interest, disclosed via the Privacy Policy footer link, which is untouched). **Do not re-add a cookie banner to this site without first checking whether the underlying PostHog config is still `cookieless_mode: 'always'`** — if that ever changes (e.g. a members area gets added and cross-day identity becomes needed), the Variant B pattern (EELA's `CookieConsentBanner` + `on_reject` mode) is the rebuild template, not this deleted code. Commit `c4c77b5`, pushed.

---

## Phase Status

| Phase | Status |
|---|---|
| Planning | Complete |
| Scaffold (Next.js init, layout, globals) | Complete |
| Core pages | Complete |
| MDX news system | Complete |
| Content population (report links, stats, bios) | Partially complete — some client content still outstanding |
| Domain cutover to Netlify | Complete |

---

## Key Facts

- Live domains: `empowrcic.org` and `www.empowrcic.org`
- Hosting: Netlify (`empowr-main-site.netlify.app` behind the custom domains)
- Stack: Next.js 16 + Tailwind v4 + shadcn/ui. Static export (`output: "export"`). One line to go full dynamic.
- CIC reports: external links to Companies House — not hosted PDFs
- Contact form: currently direct-Resend-only (CRM routing temporarily reverted 2026-07-27, see Current Phase) — `contact.ts` supports both paths, toggled by whether `CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` are set on Netlify; visitor auto-reply always via Resend either way. Also serves cross-origin submissions from EELA's Private Bookings enquiry modal since 2026-08-20 (CORS allow-list) — same function, same behavior, not a separate integration to reason about
- News: MDX files in `src/content/news/` — no CMS in Phase 1
- Cookie consent: **none** — no banner, no `/cookie-preferences` page (removed 2026-07-29). Analytics runs cookieless under legitimate interest; disclosure is the Privacy Policy footer link only

---

## Confirmed from Current Site and Notion Workspace

- CIC / Companies House number: **13660924**
- Registered address: **Crown House, 27 Old Gloucester Street, London, WC1N 3AX**
- Incorporated: **October 2021** | First activities: **February 2022**
- Geographic base: **SE London, Lewisham area**
- Social handles: **@empowr.cic** — Instagram, Facebook, YouTube
- Founders: **Jasmine Barnett** (community, operations, culture) & **Shaun Barnett** (narrative, structure, strategic vision)
- Tagline: *"Live by growing. Grow by learning. Learn by doing."*
- Mission: *"Promoting lifelong well-being through the transformative power of experiential learning."*
- Vision: leading Health Activities Provider — full text in `narrative.md`
- Founding story: full narrative in `founding-story.md` — Ikigai inspiration, empty spaces, RC pivot, skating emerging naturally
- Core frameworks: EELA (Empowr Experiential Learning Activities) and ECCP (Empowr Certified Coaching Program)
- Community roles: Champions (ground support), Ambassadors (network carriers), Heroes (sustainers)
- Key quotes and wider impact narrative: all in `narrative.md`
- Commissioning partners: HAF, public health initiatives, schools, youth organisations
- Confirmed community partners: Ivydale Primary School, Somerville TRA, Barnes Wallis Community Centre, Lewisham Tenants Fund, Catbytes CIC
- One confirmed stat: Street Skate Support Group averaged 50+ participants/week over 12 weeks
- Notion source: `planning/architecture/narrative.md` and `planning/architecture/founding-story.md`

---

- Values: **Confirmed** — Growth Through Action, Community and Belonging, Wellbeing as a Way of Life (in `narrative.md`)
- Heroes URL: **Confirmed** — hero.empowrcic.org
- Third director: **Clifton George Barrett** — appointed Sep 2025 (from Companies House). Role/bio needed.
- Company year end: **31 October** | Accounts filed as "AA" on Companies House
- CIC accounts confirmed: to 31 Oct 2025 (filed Feb 2026) and to 31 Oct 2024 (filed Feb 2025)

- Supporter Prospectus: **live on site** (Next.js page, `src/app/prospectus/page.tsx`, not a static HTML file — `src/public/prospectus.html` was deleted Session 31, 2026-06-28) — KB master at `F:\Projects\vaults\EMPOWR CIC\synthesis\supporter-prospectus.md` (corrected 2026-08-24; the `KNOWLEDGE BASE/...` path previously here was stale — the vault migrated off that OneDrive/Obsidian location to `F:\Projects\vaults\` under KB spec v3.0). Update KB first, then site page.
- Contact email: **enquiries@empowrcic.org**
- Heroes URL: **hero.empowrcic.org**
- Clifton George Barrett: **Director of Events**, Board of Directors
- Active programmes: confirmed from empowrcic.org/book-online — 10 programmes across drop-ins, lessons, courses, camps (full table in `content-requirements.md`)
- Board of Directors: 3 confirmed (Jasmine, Shaun, Clifton), 3 more TBC — client will add to Notion

## Still Awaiting

- Three additional Board of Directors members (client adding to Notion) — add to TEAM array in `about/page.tsx` when confirmed
- Client review of programme descriptions (`planning/architecture/programme-descriptions.md`)
- Main site DNS is cut over to Netlify; continue post-launch work from `DEVLOG.md`
- **"Work With Empowr" page** — needed to surface the prospectus with a clear link/CTA; three pathways: commission, partner, support/legacy gift
- **Commissioning Pack** and **Partnership Proposition** — next two funding documents after the prospectus (see KB `synthesis/supporter-prospectus.md` for sequencing)

---

## Pre-close Checklist

Before ending any session:
1. Update this file with current phase status
2. Add any new decisions to `DEVLOG.md`
3. If a new architectural decision was made, add an ADR to `planning/decisions/`
4. Prompt the user to commit and push
