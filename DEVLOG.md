# Empowr Main Site — Dev Log

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

## 2026-07-24

- Built the contact-page "Ask Empowr" chat embed prototype (decided 2026-07-23, see `project_empowr_contact_chat_concept` memory): `src/components/ChatEmbed.tsx` sits above the existing `ContactForm` on `/contact`, additive — form untouched. On branch `feat/contact-chat-embed`, PR #1 open (github.com/Pecuvate/empowr-site-netlify/pull/1), not yet merged
- Architecture: since this site is a static Next.js export (`output: "export"`, no server runtime), the browser can't call PecuvateCRM's widget API directly (no CORS there) — added 6 Netlify Functions (`chat-config`/`chat-session`/`chat-session-status`/`chat-message`/`chat-escalate`/`chat-end`) as a same-origin proxy that does server-to-server fetches to `crm.pecuvate.com`. Requires one companion CRM-side route (already live, see PecuvateCRM DEVLOG) and a new `CRM_API_BASE_URL` env var (set in both `production` and `deploy-preview` Netlify contexts)
- Added `react-markdown`/`remark-gfm` deps (matching CRM's versions) to render the AI's formatted replies
- Tested end-to-end via Playwright against the real Netlify deploy preview (not just curl): real greeting, real ~15s AI round-trip with correct live KB content, full escalate flow (name/email capture → confirmation) — all through the actual proxy chain, zero CORS errors. Test data cleaned from the prod CRM DB afterward
- Decision: escalation notification email is NOT built here — it's a CRM-side change (see that project's DEVLOG) since the escalate route itself needed the fix regardless of which frontend calls it
- UX gap found (not yet built): "Speak to the team" currently only appears before the first message is sent, then disappears for the rest of the conversation — no way to escalate after an unsatisfying AI answer. Next session: remove it from the initial quick-reply pills, add a persistent "Did that answer your question?" prompt after each AI reply with "That's all" (end chat) / "Speak to the team" options
- Next: merge PR #1 once ready to go live; then build the post-reply escalate/end-chat prompt redesign

---

## 2026-07-22

- Removed all age labels and the per-programme name list from the "Our Work" cards (`src/app/our-work/page.tsx`) — left title + description only. Ages had drifted out of sync between this site and `eela.empowrcic.org`, and the Book a Session CTA already routes to EELA, which carries the real per-session age, so the overview cards no longer need to restate it
- Decision: EELA is now the canonical source for session/camp/course ages across Empowr CIC (see PecuvateCRM's KB accuracy pass, same day) — this site's programme content should defer to it rather than maintaining its own age figures
- Updated `planning/pages/our-work.md` Section 4 to match — it still described the old per-programme age list, including the same wrong course-age figures (13+) the KB pass caught
- Explored (not built) a chat-first Q&A concept for the `/contact` page — an AI section above the existing form, escalating into it when it can't answer, reusing PecuvateCRM's widget escalation flow. Decision + rationale saved to Claude memory (`project_empowr_contact_chat_concept`); nothing in this repo yet
- Next: pick up the contact-page chat prototype when ready; unrelated EELA sub-programme name drift in this same planning doc (Section 3 — "Mind Body & Wellness" vs. code's "MindWell" etc.) noticed but out of scope this session

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
