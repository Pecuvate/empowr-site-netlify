# Navigation — `src/components/Nav.tsx`

Sticky header, appears on all pages via `src/app/layout.tsx`.

---

## Current Nav Links

| Label | Route |
|---|---|
| About | `/about` |
| Our Work | `/our-work` |
| News | `/news` |
| Impact | `/impact` |
| Get Involved | `/get-involved` |
| Work With Us | `/work-with-us` |
| Contact | `/contact` |

**CTA button (right):** Support Us → `hero.empowrcic.org/become` (external, same tab)

---

## Behaviour

- Sticky (`sticky top-0 z-50`)
- Active state: current route gets bold text + blue underline (`border-b-2 border-blue`)
- Nested routes handled: `pathname.startsWith(link.href + "/")` catches `/news/[slug]`
- Mobile: hamburger menu (`☰` / `✕`), full-width dropdown below header
- `"use client"` — requires `useState` (mobile open state) and `usePathname` (active state)

---

## Notes

- `/eccp`, `/partner-with-us`, `/legal`, `/faqs`, `/history`, and `/experiential-learning` are **not** in the main nav — accessible from footer or inline links
- `/news` restored to nav (between Our Work and Impact) — 6 historical posts live
- `/experiential-learning` nav placement pending client decision — currently linked-only
- The Support Us CTA routes directly to the Heroes donation platform, not to any internal page
- It lands on `/become` (the tier chooser), not the Heroes home page. Someone clicking "Support Us" has already responded to the ask — sending them to the Heroes mission page makes them read a second pitch before they can give. Informational mentions of Heroes (footer, FAQs, prospectus) still point at `/`.
- Same tab, not `_blank` (changed 2026-07-30). This is a conversion path, not a reference link — a new tab turns a decision into a background tab and removes any sense of having committed to the journey.

**The rule, site-wide:** every *explicit ask* ("Support Us", "Support Our Work", "Become a Hero") uses `LINKS.heroesDonate` → `/become`, same tab. Every *informational mention* of the Heroes platform (footer programme list, FAQs, prospectus) uses `LINKS.heroesplatform` → `/`, new tab. Six explicit asks currently: nav ×2, home ×2, `/get-involved`, `/experiential-learning`.
