# planning/ — Pre-Code Thinking

This workspace is for thinking before building. Nothing here is deployed. Nothing here is code.

---

## What lives here

| Folder | Purpose |
|---|---|
| `architecture/` | Site structure, page blueprints, content requirements — the "what" before the "how" |
| `decisions/` | Architectural decision records (ADRs) — why past choices were made |
| `specs/` | Feature specifications — written before implementation starts (empty until build begins) |

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
| `architecture/site-map.md` | Full site map, routes, navigation structure |
| `architecture/page-blueprints.md` | Section-by-section content plan for every page |
| `architecture/content-requirements.md` | Content the client needs to provide before build can complete |
| `architecture/technical-decisions.md` | Tech stack, infrastructure, deployment choices |
| `decisions/` | Individual ADRs for each significant decision |
