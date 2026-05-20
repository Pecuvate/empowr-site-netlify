# Empowr Main Site
Public website for Empowr CIC (empowrcic.org) — mission, programmes, impact, and audience routing. Replacing Wix. Not a transactional site.

This file is the map. Workspace detail lives in each CONTEXT.md.

## Routing
| Task | Go to | Read | Skills |
|---|---|---|---|
| Copy, page blueprints, narrative, programme descriptions | planning/ | planning/CONTEXT.md | — |
| UI, components, pages, routing, styling, news | src/ | src/CONTEXT.md | — |
| Deploy, env vars, Netlify config, domain cutover | ops/ | ops/CONTEXT.md | /netlify-deploy |

## Cross-Workspace Flows
- Content → build: read `planning/architecture/` for the target page → implement in `src/app/`
- Deploy: verify `src/` build → ops/ for Netlify deploy and Route 53 DNS cutover

## Naming Conventions
- Components: PascalCase (`HeroSection.tsx`)
- Pages: lowercase route segment (`about/page.tsx`)
- Content files: kebab-case (`founding-story.md`)
- External link keys: camelCase in `src/lib/links.ts`

## File Placement
- External URLs → `src/lib/links.ts`
- Shared TypeScript types → `src/lib/types.ts`
- Reusable components → `src/components/`
- Page files → `src/app/[route]/page.tsx`
- News posts → `src/content/news/`
- Architectural decisions → `planning/decisions/`

## Token Management
- Do not load `planning/architecture/` unless writing copy or building a specific page
- Do not load `planning/decisions/` unless reviewing or amending an architectural decision
- Do not load `ops/CONTEXT.md` unless deploying or configuring environment variables
- Do not load reference guides from `_config/` unless the task involves that concern

## Deployment
- Platform: Netlify
- Domain: empowrcic.org
- Branch: main
- Base directory: src/

## Skills and Tools
- /netlify-deploy — deploy to Netlify and configure Route 53 DNS
