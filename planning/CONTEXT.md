# planning/ — Pre-Code Thinking

This workspace is for thinking before building. Nothing here is deployed. Nothing here is code.

---

## What lives here

| Folder | Purpose |
|---|---|
| `pages/` | **As-built docs** — one file per page; current sections, status, and outstanding items |
| `layout/` | **As-built docs** — Nav and Footer structure and behaviour |
| `architecture/` | Pre-build thinking — site structure, original blueprints, content requirements |
| `decisions/` | Architectural decision records (ADRs) — why past choices were made |
| `specs/` | Feature specifications — written before implementation starts |

**Start here for any page-level work:** `pages/_index.md` — all routes, status, and outstanding items at a glance.  
**`architecture/page-blueprints.md`** is the original pre-build plan (May 2026) — useful for historical context but superseded by the `pages/` files.

---

## When to use this workspace

- Any planning, structural, or content decision goes into a file here — not into the chat window.
- Before implementing any feature, write a spec in `specs/`.
- When a significant architectural or infrastructure choice is made, record it in `decisions/`.
- Site structure changes (new pages, section changes) go into the relevant `architecture/` file.

---

## File naming

| Type | Location | Naming |
|---|---|---|
| Architecture docs | `architecture/` | `topic.md` (e.g. `site-map.md`) |
| Decision records | `decisions/` | `YYYY-MM-DD-decision-title.md` |
| Feature specs | `specs/` | `feature-name_spec.md` |

---

## Key files

| File | Purpose |
|---|---|
| `pages/_index.md` | All routes at a glance — status + outstanding items |
| `pages/[route].md` | As-built doc for each page — sections, status, notes |
| `layout/nav.md` | Nav structure, links, active state behaviour |
| `layout/footer.md` | Footer columns, routing, registered details |
| `architecture/site-map.md` | Original site map and navigation plan |
| `architecture/page-blueprints.md` | Original pre-build page designs (May 2026 — superseded) |
| `architecture/content-requirements.md` | Content the client needs to provide |
| `architecture/technical-decisions.md` | Tech stack, infrastructure, deployment choices |
| `decisions/` | Individual ADRs for each significant decision |
