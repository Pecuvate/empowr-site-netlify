# ADR: Domain Strategy

**Date:** 2026-05-19
**Status:** Accepted

---

## Decision

The Empowr Main Site will eventually replace the current Wix site at `empowrcic.org`. The Wix site is left untouched until Phase 4. DNS is already on Route 53 — the cutover is a DNS record change only.

## Current state

- Domain registrar: Namecheap
- DNS: AWS Route 53 (migrated from Wix — already complete)
- Live site: Wix continues to serve `empowrcic.org` until Phase 4
- Heroes platform: separate domain / subdomain (managed separately)

## Phase 4 cutover plan

1. Deploy the Empowr Main Site to Netlify under a staging URL first
2. Review and sign off the full site on the staging URL
3. Update the Route 53 A record / CNAME to point `empowrcic.org` at Netlify
4. Verify propagation
5. Decommission Wix

## Why this approach

- DNS is already on Route 53, so the cutover is a single record change — no registrar involvement needed.
- Keeping Wix live until Phase 4 means there is no period where `empowrcic.org` serves nothing. The switchover is atomic.
- Staging review on Netlify before DNS cutover means the site is fully verified before it is public.

## Trade-offs

- Wix and the new site coexist during development — any Wix content updates during this period will not carry forward automatically. This is accepted: Wix is treated as frozen from the point this project starts.
- Netlify will need a custom domain configured before Phase 4. This is part of the `/netlify-deploy` skill workflow.
