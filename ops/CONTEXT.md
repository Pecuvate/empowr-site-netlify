# ops — Deployment and Infrastructure

Netlify deployment, environment variables, and domain cutover for empowrcic.org.

## Process
1. Confirm `src/` builds cleanly: `npm run build` from `src/`
2. Run /netlify-deploy to push to Netlify and wire Route 53 DNS
3. Verify at the Netlify preview URL before cutting over the domain
4. Domain cutover: update Route 53 A/CNAME to Netlify — Wix goes offline at this point

## Inputs and Outputs
- In: clean build from `src/`; Netlify auth; Route 53 credentials
- Out: live site at empowrcic.org

## Tools
- /netlify-deploy — automated deploy + Route 53 DNS setup

## Constraints
- Do not cut over the domain until the site is fully reviewed and signed off
- Wix is live at empowrcic.org until Phase 4 — do not touch DNS before that
- Netlify base directory: `src/`
- Node version: 20 (pinned in `src/netlify.toml`)
- Never commit `.env.local`
- Every env var must have a corresponding entry in `src/.env.example`

## Infrastructure
- Domain registrar: Namecheap
- DNS: AWS Route 53 (already managing empowrcic.org)
- Hosting: Netlify
- Current live site: Wix — untouched until Phase 4
