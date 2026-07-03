# Empowr Main Site — Dev Log

---

## 2026-07-03

- Prospectus: updated `info@empowrcic.org` → `outreach@empowrcic.org` across 4 instances (2 mailto links, 2 contact section entries)
- Prospectus: updated `shaun@empowrcic.org` → `shaun.barnett@empowrcic.org`
- Prospectus: updated Shaun Barnett's title from CVO to Co-Founder and Executive Director
- Prospectus: website field updated to `www.empowrcic.org` with full `https://` href (was relative `/`)
- Prospectus: Active Partnerships sentence now breaks onto new line below the bold title via `<br />`
- Prospectus: added descriptions to all 5 EELA sub-programme rows in `EELA_PROGRAMMES` array, sourced from `our-work/page.tsx`

---

## 2026-07-03

- KB alignment audit: compared all live site content against Empowr KB entities; identified and fixed 8 gaps across founders, eccp, sessions, empowr-cic, collaborators, and experiential-learning
- Reverted `ExperientialLearningTabs.tsx`: removed 6-stage learning framework cards from "What is EELA?" tab; restored original intro text + sub-programmes list
- Reverted `our-work/page.tsx`: EELA description restored to original paragraph (4-step methodology reference removed)
- Design decision: Empowr Learning Spiral (Challenge→Attempt→Reflect→Adjust→Improve→Develop) established as canonical methodology; `experiential-learning.md` KB updated with spiral model + 5-stage framework reframed as delivery conditions; site implementation deferred pending proper architectural placement

---

## 2026-07-02

- Updated Empowr logo across the site: replaced old illustrated multicolour eye with new clean monochromatic design; source PNGs saved to `_brand/logos/` (6 variants including transparent and dark-transparent)
- Nav logo (`src/components/Nav.tsx`): now uses `_brand/logos/empowr-logo-dark-transparent.png` (navy #1a3a6c on transparent), sized `h-16` with `py-1` nav padding
- Favicon set regenerated from new source (`empowr-logo-source.png`, 1080×1080): eye-only crop with auto-detected bounding box, white on brand blue (#1a3a6c) background; all 6 sizes + favicon.ico updated in `_brand/favicons/` and `src/public/`
- `generate-favicons.mjs` updated to reference new source path; Python script at `AppData/Local/Temp/generate_favicons_v3.py` is the canonical regeneration tool going forward
- Committed and pushed to `main` only — `feat/chat-bubble` branch kept clean and unchanged
- Outstanding: if a proper SVG/vector source is obtained from the designer, rerun favicon generation for sharper edges at small sizes
- Logo rolled out to all 5 other Empowr CIC sites (EELA, Landing Page, Waivers, Heroes, EFN) — all now use `empowr-logo-dark-transparent.png` as `logo.png`
- Heroes + EFN switched from S3 CDN (`empowr-cic.s3.amazonaws.com/empowr_logo.png`) to local file; `links.ts` and `Hero.tsx` updated accordingly
- Decided against centralised logo hosting — updates are infrequent enough that copying to each repo is acceptable; revisit if logo changes become frequent

---

## Session 32 — 2026-06-29

**What was done:**

**My Account nav placeholder (`feat/my-account-nav` — parked, not merged):**
- `src/lib/links.ts` — added `membersUrl: ""` placeholder with TODO comment for future members platform URL
- `src/components/Nav.tsx` — disabled account icon (person-circle SVG) added before "Support Us" on desktop; icon + "My Account" label with "Coming soon" pill added to mobile menu; both non-functional (`<button disabled>`)
- Branch parked on GitHub pending new members platform build

**Decisions:**
- Team decided not to route to Wix (all Wix account URLs broken — 500 errors)
- New standalone members platform to be built (separate project under Empowr CIC); this nav will be activated and merged once that platform has a live URL

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
