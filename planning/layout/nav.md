# Navigation — `src/components/Nav.tsx`

Sticky header, appears on all pages via `src/app/layout.tsx`.

---

## Current Nav Links

| Label | Route |
|---|---|
| About | `/about` |
| Our Work | `/our-work` |
| Impact | `/impact` |
| Get Involved | `/get-involved` |
| Work With Us | `/work-with-us` |
| News | `/news` |
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

- `/eccp`, `/partner-with-us`, and `/legal` are **not** in the main nav — accessible from footer only
- The Support Us CTA routes directly to the Heroes donation platform, not to any internal page
