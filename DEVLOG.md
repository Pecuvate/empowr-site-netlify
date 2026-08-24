# Empowr Main Site — Dev Log

---

## 2026-08-24 (session 2) — Synced site copy to the Empowr CIC vault's participant→member rename and MindWell correction

Cross-project session, driven from the KB vault (`vaults/EMPOWR CIC`) — full narrative in that project's `log.md` and the Empowr CIC workspace `DEVLOG.md`. This entry covers only what changed in this repo.

- **`participant` → `member` sweep**: `FaqsAccordion.tsx` (ECCP answer, Kit List answer, cancellation-policy answer), `eccp/page.tsx` (Level 2 description, "experiences for..."), `our-work/page.tsx` (Courses card description, ECCP paragraph) — brought in line with the KB's same-day rename, which the FAQ page's own "Content Rules" declare as source of truth.
- **Kit List answer rewritten**: now scoped to structured lessons/courses/camps only (Skate Jam, Roller Disco, Roller Skate Events explicitly exempted), Quad Roller Skates added to the required list — matches the KB's `entities/sessions` Kit List change same session.
- **MindWell definition corrected** on `our-work/page.tsx` and `prospectus/page.tsx`: tagline "Mindfulness & Recovery" → "Body-Mind Skill Development", description rewritten from passive framing ("relaxation and rejuvenation") to outcome-focused, no-activity-list copy ("Building body control, awareness, and resilience through active, skill-based practice") — the same superseded definition already tracked in the KB against the prospectus (Open Question 3) turned out to also be live here; found while doing the sweep above, confirmed with the user, fixed in both places same session.
- **Two stale planning-doc references fixed**: `planning/pages/our-work.md` had pre-Well-branding EELA sub-programme names (the actual `EELA_PROGRAMMES` array in code was already correct — doc-only drift); `planning/pages/faqs.md`'s KB grounding-page list cited `entities/governance`, which was split into `entities/board` + `processes/governance` in the vault back on 2026-08-18.
- Type-checked clean (`tsc --noEmit`) before each commit. Two commits, both pushed to `main`: `ad19c8b` (participant/member + Kit List + doc refs), `04a7975` (MindWell).
- **Left untouched, not part of this session**: pre-existing uncommitted changes to `Footer.tsx`, `Nav.tsx`, `ChatEmbed.tsx`, `OurStorySection.tsx`, `globals.css`, `DEVLOG.md` were already sitting in the working tree when this session started — staged and committed only the files this session actually edited, left the rest for whoever's mid-work on them.

## 2026-08-24 — Fixed the focus/contrast/tap-target findings from the 2026-08-20 harness audit, re-verified against a rebuilt static export

Picked up the open items from the read-only audit below. Rebuilt (`next build`, static export served via `npx serve out`) and re-ran `design-audit.mjs` three times over the course of the session to verify each fix against real rendered output, not just the source.

- **Focus indicator, `/about` "See more" button**: `focus:outline-none` had no replacement ring. Added `focus:ring-2 focus:ring-blue/30` to match the convention already used elsewhere in this codebase (ContactForm, ChatEmbed). [OurStorySection.tsx:34](src/components/OurStorySection.tsx#L34).
- **Contrast token**: `--color-blue-light` (`#c8ddf8` on `bg-blue`) measured 3.45:1, below the 4.5:1 AA floor for normal text — used as "secondary text on blue background" across 16 files. Lightened to `#f5f9fe` (~4.53:1) in [globals.css](src/app/globals.css) so every page inherits the fix from one edit. **This did not fix contrast sitewide** — the harness still shows 26-64 low-contrast text nodes per page, driven by unrelated combos (`text-muted`/`text-mid` on certain backgrounds, hover states, a Trustpilot badge). That's a separate, larger initiative, not touched this session.
- **Mobile nav hamburger** (`button.md:hidden`, 34×40px) was failing the 44px tap-target floor on **every single page** — highest-leverage single fix. Given a guaranteed `h-11 w-11 flex items-center justify-center` hit area instead of relying on padding math. [Nav.tsx:63](src/components/Nav.tsx#L63). Confirmed gone from every subsequent audit.
- **Footer links** (both the ~24 sidebar nav links and the 5 social icons), also present on every page, were sized to their text/icon content only (as low as 16-20px tall). Given `inline-flex min-h-11 min-w-11 items-center` (text links) and `flex h-11 w-11 items-center justify-center` (icon links) — hit area only, no visible size change. [Footer.tsx](src/components/Footer.tsx). Deliberately **left untouched**: the "Company no." link and the bottom Privacy Policy/Terms & Conditions links, which sit inline in a sentence/copyright line — the same WCAG target-size exception the framework's own 44px floor was raised past (AAA, not the letter of AA).
- **`/contact` "input 186x24"** turned out to be a false positive, not a real defect: ContactForm's honeypot field (`id="company"`) is wrapped in a 1×1px `overflow:hidden` div with `aria-hidden`, but the harness measures the *input's own* unclipped intrinsic box, not what's actually visible. No code change — this is a checker blind spot worth fixing in the harness itself another time, not a site bug.
- **Verified progression on `/about` and `/faqs`** (re-run after each fix): tap-target findings went 27→11→8→3 medium rows per page. What's left on those 3: the two intentionally-exempted inline-sentence links, and a ~2px shortfall on 2 social icons at the 320px viewport only (a flex-shrink edge case, not chased down).
- **Still open, not attempted this session** (full list only exists in the harness's own report, not restated here): sitewide contrast beyond the one token, unsized `<img>` tags (layout-shift risk) on nearly every route, `clipped-content` overflow on a handful of pages, missing `aria-current` on 6 routes, and homepage-specific undersized CTA links. None are HIGH severity.

## 2026-08-20 — Contact form's Netlify Function opened up to accept cross-origin submissions from EELA

- `src/netlify/functions/contact.ts` gained a CORS origin allow-list (`eela.empowrcic.org` + its Netlify preview domain) and `OPTIONS` preflight handling, commit `5fe0c69`, live. Driven by EELA's new Private Bookings enquiry modal, which reuses this exact function (same CRM routing, honeypot spam check, confirmation email) instead of duplicating a backend on EELA's own site — see EELA's `DEVLOG.md` for the full feature.
- **This push also carried 3 unrelated, already-committed mwp-health doc-compliance commits** that had been sitting unpushed on `main` since 2026-08-14 (README/M8 formatting) — pushed together at the user's explicit go-ahead, not created this session.
- **Confirmed with the user: CRM routing (`CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY`) is currently deliberately unset**, paused while deciding how best to wire it — so both this site's own form and EELA's new cross-origin one currently fall to the existing Resend-direct-to-`enquiries@empowrcic.org` path. No code change needed when CRM routing resumes; both forms pick it up automatically since they share this one function.

## 2026-08-20 — First multi-viewport audit: contrast and tap-target findings across 5 routes

Read-only audit from outside this project; **no files here were changed.**

- Swept `/`, `/about`, `/contact`, `/our-work`, `/legal/privacy-policy` at 8 viewports (320-1920), 40/40 combinations, by the Web Build Framework harness.
- **`button.text-blue "See more"` on `/about` has no visible focus indicator** at any viewport — a keyboard-accessibility defect, and the only HIGH finding.
- **~48 of 109 sampled text nodes fall below WCAG AA**, including `p.text-lg` at 3.45:1 and `span.text-[#00b67a]` at 2.63:1. The check is approximate (nearest opaque ancestor, blind to gradients) so these are leads to confirm — but body text at 3.45:1 is very likely real.
- **34-35 interactive targets below 44x44px** at mobile widths, including the mobile menu button at 34x40, plus one unsized `<img>` (layout-shift risk).
- Nothing fixed this session — logged so the next session on this site has the list.
## 2026-08-14 — Created README.md (closing an mwp-health M10 gap) and converted a near-miss heading in CLAUDE.md to compliant M8 table format

## 2026-08-12 — Inline chat embed and CRM-routed contact form both tried live, then both deliberately reverted; net effect /contact unchanged, ChatEmbed.tsx + CRM routing left dormant in codebase

## 2026-08-05 — Legacy Wix *page* URLs redirected (`c3438a0`, 29 rules total) — found via PostHog "every trafficked path that isn't a real route", ~300 visits/180d hitting 404s; `/risk-waiver`+`/photograph-consent` → waiver.empowrcic.org were the highest-impact fix; content with no real equivalent deliberately left to 404 rather than soft-404'd to home

## 2026-08-04 — `/service-page/*` 404s fixed + full legacy-Wix-URL audit via PostHog

## 2026-07-30 — PostHog `capture_pageview` fixed to `'history_change'` fleet-wide (was `true`, which silently dropped every client-side `<Link>` pageview); all explicit "Support Us"/"Become a Hero" CTAs repointed to `/become` in the same tab via new `LINKS.heroesDonate` (informational mentions kept at `/` in a new tab), rule recorded in `planning/layout/nav.md`; security headers confirmed fine on this static export

## 2026-07-29 (session 2) — Removed dead cookie consent banner + preferences system

## 2026-07-29 - Cross-site UTM tagging (T5 alternative): every outbound link to hero/eela/start now carries ?utm_source=empowr-main&utm_medium=internal, after full cross-domain session linking was ruled out as incompatible with cookieless mode (`2cbb95d`)

## 2026-07-28 (session 2) - Added `/product-page/*` -> Wix shop redirect (`0ce523e`); PostHog showed the ~330 hits/14d were headless-Chrome bot traffic, not lost sales; Analytics Hub contamination clears 27 Aug 2026

## 2026-07-28 — PostHog switched to cookieless server hash mode (`cookieless_mode: 'always'`), replacing memory-mode persistence; cookie banner retained at the time

## 2026-07-27 (session 3) — Reverted contact form to direct-Resend-only at owner's request (stays off until explicitly re-enabled); fixed "Speak to the team" disappearing-after-first-message bug in ChatEmbed.tsx (PR #1), same bug found + fixed in PecuvateCRM's own widget

## 2026-07-27 (session 2) — Routed contact form submissions into PecuvateCRM's Escalations dashboard as primary path (direct-Resend as fallback); verified live with a real submission; committed `63b7dfc`

## 2026-07-27 — Rebuilt floating chat bubble on `feat/chat-bubble-v2` (PR #2, not merged); fixed a real bug where the iframed CRM widget went inert under blocked third-party storage; open decision on `/contact` double-chat UX at merge time

## 2026-07-27 — Expanded `/faqs` from 2 to 15 questions across 5 grouped sections, sourced from the Empowr KB; refactored `FaqsAccordion.tsx` to `FAQ_SECTIONS`; deployed `ce70e15`

## 2026-07-24 — Built the contact-page "Ask Empowr" chat embed prototype (`ChatEmbed.tsx` + 6 Netlify Functions proxy to PecuvateCRM's widget API), PR #1 open, not merged; Playwright-verified end-to-end against the real deploy preview; "speak to the team" disappearing-after-first-message gap found (fixed 2026-07-27, above)

## 2026-07-22 — Removed age labels from "Our Work" cards, deferring to eela.empowrcic.org as canonical; explored (not built) a chat-first Q&A concept for /contact

## 2026-07-08 — Cookie consent UI: banner + preferences page links corrected (Cookie Policy vs Privacy Policy); verified with `npm run build`

## 2026-07-03 — Prospectus contact-detail fixes (outreach@/shaun.barnett@ emails, Shaun's title, website link, layout tweak) + EELA sub-programme descriptions added to `EELA_PROGRAMMES`

## 2026-07-03 — KB alignment audit: fixed 8 gaps against Empowr KB entities; reverted EELA experiential-learning framework changes pending proper architectural placement; Empowr Learning Spiral established as canonical methodology

## 2026-07-02 — Rolled out new monochromatic Empowr logo + regenerated favicons across all 6 Empowr CIC sites; decided against centralised logo hosting

