# Legal — `/legal`

**Purpose:** Policy hub. One place to find all 6 Empowr CIC legal policies. Cards link through to the full documents hosted on LegalHub.  
**Audience:** Participants, parents, partners — anyone needing to read a specific policy.

---

## Sections

### 1. Page Header
- Blue background
- Headline: *"Policies & Documents"*
- Sub-copy: applies to website use and programme participation

### 2. Policy Cards
- Cream background, 3-column grid
- Each card: policy name · short description · "Read policy →"

| Policy | LegalHub Slug | Description |
|---|---|---|
| Privacy Policy | `privacy-policy` | UK GDPR — data collection, use, and protection |
| Cookie Policy | `cookie-policy` | Cookie use on the website |
| Terms & Conditions | `terms-and-conditions` | Website use and programme participation |
| Risk Waiver | `risk-waiver` | Physical activity risks and equipment |
| Photography & Media Consent | `photography-consent` | Image/video use, safeguarding under-18s |
| Programme Policies | `programme-policies` | Session rules, code of conduct, membership |

---

## Status
Complete.

---

## How policy links resolve

1. Click "Read policy →" on `/legal` — e.g. for Privacy Policy, `href="/legal/privacy-policy"`
2. `netlify.toml` proxies `/legal/*` → `https://legalhub.pecuvate.com/share/empowr/org/:splat` (status 200, force)
3. LegalHub queries Sanity: `slug.current == "privacy-policy" && platform == "org" && company == "empowr"`
4. Full policy rendered on LegalHub

The `/legal` page itself is **not** caught by this proxy (proxy is `/legal/*`, not `/legal`).

---

## Notes
- **Not in the main nav** — accessible from the footer Legal column only
- The footer "Empowr Legal Policies" link points here
- Previously, each policy had its own footer link — consolidated to a single hub link in Session 9
- Policy documents are managed in Sanity via PecuvateHubCMS (`/update-sanity` skill)
