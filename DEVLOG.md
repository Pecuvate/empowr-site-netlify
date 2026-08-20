# Empowr Main Site — Dev Log

---

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
## 2026-08-14

- Created `README.md` at the project root, closing an M10 gap flagged by the scheduled mwp-health compliance audit.
- Converted a near-miss "Skills and Tools Available" heading in `CLAUDE.md` to the compliant M8 table format.

---

## 2026-08-12 — Inline chat embed and CRM-routed contact form both tried live, then both deliberately reverted

- **Merged PR #1** (`feat/contact-chat-embed`, open since 24 Jul) — the inline "Ask Empowr" chat box above the `/contact` form. **Closed PR #2** (`feat/chat-bubble-v2`) without merging — a site-wide floating bubble would have doubled up with the inline box on this one page; branch left in place, not deleted, in case that pattern is wanted elsewhere later.
- **Re-enabled the contact-form → CRM pipeline** (`CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` back on Netlify prod) — this completes the 2026-07-27 note that said it "stays off until the owner explicitly says to re-enable it." **Found and fixed a mistake in the process**: first attempt copied the value straight from local `.env.local`, which correctly points at `localhost:3001` for dev — wrong on production, where it silently fell back to direct email every time. Corrected to `https://crm.pecuvate.com/api/channels/contact-form`, rebuilt, verified with a real submission that landed in the CRM as an `escalated` session.
- **Owner reviewed the live result and reverted both**, same session. Two separate reasons: the chat embed wasn't wanted live yet at all; the CRM routing, on inspection, only sends the team a bare "new enquiry, click here" link-notification (`notifyEscalation.ts`) rather than the actual message content — not what "you get an email" was expected to mean. Reverted `/contact` to the pre-embed form-only layout, and unset the two Netlify env vars again, restoring the exact pre-session direct-Resend-only behaviour.
- **Net effect: `/contact` is unchanged from before this session** — but `ChatEmbed.tsx`, its five Netlify Function proxies, and the CRM routing are all still in the codebase, dormant, one page-edit and two env vars away from switching back on whenever the team is ready to commit to it (likely alongside a fix to `notifyEscalation.ts` so the inbox gets real content, not just a link).
- Two throwaway test escalations created while verifying the CRM path were deleted from prod afterward.

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

