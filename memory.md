# memory.md — Empowr Main Site

Current phase status and key facts that would otherwise need re-explaining at the start of every session.

---

## Current Phase

**Live — post-launch iteration**

The custom Next.js site is live on Netlify at `empowrcic.org` and `www.empowrcic.org`. Continue from `DEVLOG.md` for current post-launch work.

**2026-07-22:** "Our Work" programme cards (`src/app/our-work/page.tsx`) now show title + description only — no ages, no per-programme name list. `eela.empowrcic.org` is the canonical source for session/camp/course ages across Empowr CIC now (decided during a PecuvateCRM KB accuracy pass); this site's own programme copy should not restate ages going forward. `planning/pages/our-work.md` updated to match.

**2026-07-24:** The `/contact` chat-first Q&A concept is now **built and Playwright-tested**, not just decided — `src/components/ChatEmbed.tsx` + 6 Netlify Functions proxy on branch `feat/contact-chat-embed`, PR #1 open at `github.com/Pecuvate/empowr-site-netlify/pull/1`. **NOT yet merged to `main`** — do not assume this is live on `empowrcic.org`. Full detail in `project_empowr_contact_chat_concept` memory. Known follow-up: "Speak to the team" currently disappears after the first message is sent (only shows pre-first-message) — redesign planned for next session, not yet built.

**2026-07-27:** `/faqs` expanded from 2 to 15 questions across 5 grouped sections, content sourced from the Empowr KB. Merged to `main` and deployed (commit `ce70e15`). `FaqsAccordion.tsx` structure changed: flat `FAQS` array → `FAQ_SECTIONS`. Content rule going forward: never hardcode schedules/prices/ages in FAQ answers — route to `eela.empowrcic.org`.

**2026-07-27 — floating chat bubble rebuilt, still not merged.** The old `feat/chat-bubble` branch (23 commits stale) is superseded by `feat/chat-bubble-v2` — `ChatBubble.tsx` + `layout.tsx` wiring, PR #2 open at `github.com/Pecuvate/empowr-site-netlify/pull/2`, live Netlify deploy preview at `deploy-preview-2--empowr-main-site.netlify.app`. A real bug was found and fixed during review (CRM-side): the embedded widget went completely inert in restricted third-party-storage browser contexts — fixed, verified on this site's own preview. **NOT yet merged to `main`** — do not assume the bubble is live on `empowrcic.org`. Open UX decision at merge time: `/contact` will show both this bubble and the separate inline chat embed (`feat/contact-chat-embed`, PR #1, also not merged) — see `project_empowr_contact_chat_concept` memory.

**2026-07-27 (session 2) — contact form now routes into PecuvateCRM, merged and live.** `src/netlify/functions/contact.ts` calls a new CRM channel route (`CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` in `src/.env.local`, not the root one) as its primary path — submissions land in the CRM's Escalations dashboard as `escalated` sessions, grouped by subject (General Enquiry, Work With Us, etc., added same day CRM-side). Falls back to the old direct Resend internal email only if the CRM call fails; the visitor's own auto-reply is unchanged. Verified with a real production submission. Committed `63b7dfc`/`07fc9dc`. Full detail in PecuvateCRM's own memory.md and DEVLOG.

**2026-07-27:** The `/contact` chat embed concept above was built on `feat/contact-chat-embed` (PR #1, not yet merged) — see that branch and `project_empowr_contact_chat_concept` in Claude memory for the full build. This session: fixed the "speak to the team" option disappearing after the first message (`ChatEmbed.tsx`, commit `22f23a1`), and reverted the contact form's live routing from CRM-primary back to direct-Resend-only at the owner's request ahead of a launch (env-var toggle on Netlify, no code change — `CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` currently unset in production). Re-enabling CRM routing later is just restoring those two vars + a Netlify rebuild.

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
- Contact form: currently direct-Resend-only (CRM routing temporarily reverted 2026-07-27, see Current Phase) — `contact.ts` supports both paths, toggled by whether `CRM_CONTACT_API_URL`/`CRM_CONTACT_API_KEY` are set on Netlify; visitor auto-reply always via Resend either way
- News: MDX files in `src/content/news/` — no CMS in Phase 1

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

- Supporter Prospectus: **live on site** (Next.js page, 2026-07-15) — KB master at `KNOWLEDGE BASE/synthesis/supporter-prospectus.md`; update KB first, then site page
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
