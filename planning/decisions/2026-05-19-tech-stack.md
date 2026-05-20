# ADR: Tech Stack Selection

**Date:** 2026-05-19
**Status:** Accepted

---

## Decision

Next.js (App Router), TypeScript, custom CSS, Nunito font, Netlify deployment — matching the Empowr Heroes platform.

## Alternatives considered

- Different framework (Astro, Remix, plain HTML)
- Tailwind CSS instead of custom CSS
- Different hosting provider

## Why this was chosen

- The Heroes platform already uses Next.js, Netlify, custom CSS, and Nunito. Sharing the stack means shared conventions, no new tooling to learn, and consistent brand implementation across all Empowr touchpoints.
- Netlify is the workspace-standard deployment platform and DNS is already on Route 53.
- Custom CSS with shared variables is the simplest way to guarantee visual consistency with Heroes without copying design files.

## Trade-offs

- No Tailwind means utility classes aren't available — all styles must be written by hand. Accepted: this is already the pattern on Heroes and it works.
- Next.js is heavier than a static site generator for a primarily informational site. Accepted: the flexibility for future dynamic features (forms, news, CMS) is worth the overhead.
