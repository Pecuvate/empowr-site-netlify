# ADR: Styling and Framework Revision

**Date:** 2026-05-20
**Status:** Accepted
**Supersedes:** `2026-05-19-tech-stack.md` (partial — framework target unchanged, styling and export mode revised)

---

## Decisions

1. **Styling:** Tailwind v4 + shadcn/ui (replaces custom CSS)
2. **Build mode:** Next.js with `output: 'export'` (static export, upgradeable)

## Why styling was changed

The Session 1 ADR chose custom CSS to match the Heroes platform. Since Session 1, `_config/guides/styling.md` was updated to mandate Tailwind v4 + shadcn/ui for all new Empowr CIC projects. With the main site being built from scratch, it is the right moment to adopt the current workspace standard. The visual consistency argument no longer applies — brand tokens are registered via `@theme` in `globals.css` and produce identical design outcomes.

## Why static export

The site is content-focused (8 informational pages, MDX news). Static export produces plain HTML/CSS/JS at build time — same performance profile as a static site generator, no Node.js server required at runtime. To enable full server-side Next.js features later, remove `output: 'export'` from `next.config.ts`. No migration required.

## Trade-offs

- Tailwind v4 means different patterns from Heroes — accepted, as Heroes is now a legacy exception per the styling guide.
- Static export restricts some Next.js features (no Route Handlers, no server actions, no middleware) — accepted for Phase 1. The upgrade path is a single config line change.
