# Footer — `src/components/Footer.tsx`

6-column layout on desktop (`lg:grid-cols-6`), 2 on tablet, 1 on mobile. Black background, appears on all pages via `src/app/layout.tsx`.

---

## Columns

### Brand (col 1)
- "Empowr CIC" heading
- Tagline: *"Promoting lifelong wellbeing through the transformative power of experiential learning."*
- Company info beneath tagline:
  - Registered in England and Wales
  - Company no. 13660924 (linked to Companies House)
  - Crown House, 27 Old Gloucester Street, London, WC1N 3AX

### About Us (col 2)
- Who We Are → `/about`
- News → `/news`
- Our Impact → `/impact`

### Get In Touch (col 3)
- Contact Us → `/contact`
- Partner With Us → `/partner-with-us`
- Work With Us → `/eccp`

### Connect With Us (col 4)
- Instagram → `instagram.com/empowr.cic` (external)
- Facebook → `facebook.com/empowr.cic` (external)
- YouTube → `youtube.com/@empowr.cic` (external)

### Programmes (col 5)
- All Programmes → `/our-work`
- Empowr Heroes → `hero.empowrcic.org` (external)
- ECCP *(Soon badge)* → `/eccp`
- Certified Coach → `/eccp`

### Legal (col 6)
- Empowr Legal Policies → `/legal`

---

## Footer Bar

- Left: © {year} Empowr CIC. All rights reserved.
- Right: Instagram · Facebook · YouTube (social links, repeat of Connect With Us column)

Company registration details live in the Brand column, not the footer bar.

---

## Notes
- "Work With Us" footer link → `/eccp` (not `/work-with-us`) — intentional; this is the future ECCP platform entry point
- All 6 individual policy links replaced by a single "Empowr Legal Policies" → `/legal` in Session 9
- Footer is a Server Component — no `"use client"` needed
