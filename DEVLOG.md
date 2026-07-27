# Empowr Main Site — Dev Log

---

## 2026-07-27 (session 3)

- Reverted the contact form from the CRM-primary pipeline back to direct-Resend-only at the owner's request ahead of a launch — unset `CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` on Netlify prod and triggered a rebuild via the Netlify API (`createSiteBuild`) since Functions bake env vars in at build time. No code change either direction — `contact.ts`'s CRM-then-fallback logic (session 2, below) is already env-driven; re-enabling later is just restoring those two vars + a rebuild
- Fixed `ChatEmbed.tsx` (PR #1, `feat/contact-chat-embed`): the "Speak to the team" option lived only inside the zero-message quick-replies block (the UX gap flagged 2026-07-24, below), so it disappeared the instant a visitor sent anything, with no way back to a human handoff. Shipped a simpler fix than the redesign planned 2026-07-24 — a persistent "Speak to the team instead" footer link once the conversation is active with ≥1 message, rather than a post-reply "Did that answer your question?" prompt. Verified live in a browser against the real CRM backend (sent a message, confirmed the link stayed visible, clicked it, confirmed the escalation form appeared); found the identical bug copied into PecuvateCRM's own live widget and fixed it there too (see that repo's DEVLOG). Committed `22f23a1`, pushed to PR #1
- Next: Queries/Cost-breakdown UI polish is the last item PecuvateCRM owner wants done before switching this site's contact form back to the CRM path; PR #1 and PR #2 (`feat/chat-bubble-v2`) both still open, unmerged

---

## 2026-07-27 (session 2)

- `src/netlify/functions/contact.ts` now routes submissions into PecuvateCRM's Escalations dashboard as the primary path (new `notifyCrm()` call, authenticated via `CRM_CONTACT_API_KEY` shared-secret header) instead of only sending an internal Resend email — the CRM record is what agents actually work from now. Falls back to the original direct Resend notification if the CRM call fails or the env vars aren't set, so a submission can't silently vanish; the visitor's own auto-reply email is unchanged. Honeypot/validation still run first, unchanged — bots never reach the CRM.
- New env vars `CRM_CONTACT_API_URL` / `CRM_CONTACT_API_KEY` — added to `src/.env.local` (not the root one; `netlify.toml`'s `base = "src"` means `netlify dev` only loads env from there, confirmed via its injection log) and set on Netlify production.
- Verified with a real live submission through `empowrcic.org`'s contact form after both sites deployed — landed as a genuine `escalated` `chat_sessions` row in PecuvateCRM, cleaned up after.
- Committed `63b7dfc`; CRM-side changes + full design detail in that project's DEVLOG (2026-07-27 session 2).
- Next: the chat-bubble-v2 merge decision above is still open; contact-form → CRM was the other queued item and is now done.

---

## 2026-07-27

- Rebuilt the floating chat bubble fresh on `feat/chat-bubble-v2` (old `feat/chat-bubble` branch was 23 commits stale) — `ChatBubble.tsx` + `layout.tsx` wiring, mobile-safe sizing added; PR #2 open (github.com/Pecuvate/empowr-site-netlify/pull/2) with a live Netlify deploy preview at `deploy-preview-2--empowr-main-site.netlify.app`; NOT yet merged
- Found and fixed a real bug during review: the bubble iframes the CRM widget from a third-party origin, and `WidgetClient.tsx`'s unguarded `localStorage` access threw in that context — widget rendered but was completely inert with no error shown. Fix landed CRM-side (see that project's DEVLOG), verified working on this site's preview under simulated blocked storage
- Open decision, not yet made: if `feat/chat-bubble-v2` merges, `/contact` will show both the floating bubble and the existing inline chat embed (`feat/contact-chat-embed`, PR #1) — needs a UX call at merge time
- Next: get sign-off on the deploy preview, then merge; decide the `/contact` double-chat question

---

## 2026-07-27

- Expanded `/faqs` from 2 to 15 questions across 5 grouped sections (About Empowr, Programmes, Sessions & Booking, Getting Involved, Impact & Accountability) — content sourced from the Empowr KB (`entities/*`, `concepts/experiential-learning`, `synthesis/impact-report`)
- Refactored `FaqsAccordion.tsx` from a flat `FAQS` array to `FAQ_SECTIONS` (`{title, items[]}`), each section rendering its own heading + card
- Content rules baked into `planning/pages/faqs.md`: never hardcode schedules/prices/ages (route to eela.empowrcic.org instead), cancellation answer must track legal policy version (currently T&Cs/Programme Policies v1.1), impact figures CIC 34-verified only
- Typecheck + `npm run build` both passed before push; deployed via Netlify auto-deploy on push to `main` (commit `ce70e15`)
- Process note: user asked for a plan first intending to hand execution to Sonnet — I implemented directly on Fable instead; saved as a standing feedback memory (`feedback_plan_first_means_stop_at_plan`) to stop at the plan next time unless told to proceed

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
