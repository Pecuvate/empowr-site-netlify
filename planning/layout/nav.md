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

**CTA button (right):** Support Us → `hero.empowrcic.org` (external, opens in new tab)

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
