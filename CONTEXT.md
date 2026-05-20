# Empowr Main Site — Context

Read this after `CLAUDE.md` to orient within the project.

---

## What This Is

The main public website for Empowr CIC. Narrative and information site — not transactional. Routes audiences to the right places and surfaces CIC reports, programme info, and contact routes.

**Status:** Planning → Scaffold → Build
**Target domain:** `empowrcic.org` (replacing Wix — DNS already on Route 53)

---

## Architecture

```
src/
  app/                    Pages (Next.js App Router)
    page.tsx              / — Home
    about/page.tsx        /about
    our-work/page.tsx     /our-work
    impact/page.tsx       /impact
    get-involved/page.tsx /get-involved
    work-with-us/page.tsx /work-with-us
    news/
      page.tsx            /news (list)
      [slug]/page.tsx     /news/[slug] (individual post)
    contact/page.tsx      /contact
    layout.tsx            Root layout (nav, footer)
    globals.css           All CSS variables and base styles
  components/             Shared UI components
    layout/
      Nav.tsx
      Footer.tsx
    ui/                   Reusable UI (cards, buttons, etc.)
  lib/
    links.ts              All external URLs — update here only
  content/
    news/                 MDX files for news posts (one per post)
planning/
  site-plan.md            Full site plan and page blueprints
DEVLOG.md                 Running dev log — read before every session
CLAUDE.md                 Project rules
```

---

## Key Files

| File | Purpose |
|---|---|
| `src/lib/links.ts` | ALL external URLs — CIC report links, Heroes platform link, policy links |
| `src/app/globals.css` | All CSS variables and base styles |
| `src/app/layout.tsx` | Root layout — Nav and Footer live here |
| `planning/site-plan.md` | Full content plan, page blueprints, phase plan |
| `DEVLOG.md` | Session-by-session decisions and in-progress state |

---

## Related Projects

| Project | Location | Relation |
|---|---|---|
| Empowr Heroes | `../empowr-heroes-nextjs/` | Donation platform — linked from Get Involved |
| LegalHub | `Pecuvate/PecuvateHub/LegalHub/` | Hosts privacy and cookie policies |
