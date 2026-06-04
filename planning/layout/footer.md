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
- News → unclickable (temporarily disabled — no posts published yet)
- Our Impact → `/impact`
- FAQs → `/faqs`

### Programmes (col 3)
- All Programmes → `/our-work`
- Empowr Heroes → `hero.empowrcic.org` (external)
- Certified Coach → `/eccp`

### Connect With Us (col 4)
- Instagram → `instagram.com/empowr.cic` (external)
- Facebook → `facebook.com/empowr.cic` (external)
- YouTube → `youtube.com/@empowr.cic` (external)
- LinkedIn → `linkedin.com/company/empowr-cic` (external) — confirm URL
- WhatsApp → `chat.whatsapp.com/BuKlBkfDxHs2jdPyRzXwza` (external)

### Get In Touch (col 5)
- Contact Us → `/contact`
- Partner With Us → `/partner-with-us`
- Work With Us → `/work-with-us`

### Legal (col 6)
- Empowr Legal Policies → `/legal`

---

## Footer Bar

- Left: © {year} Empowr CIC. All rights reserved. · Privacy Policy · Terms & Conditions
- Right: Instagram · Facebook · YouTube · LinkedIn · WhatsApp (SVG icons with aria-labels)

Company registration details live in the Brand column, not the footer bar.

---

## Notes
- "Work With Us" footer link → `/work-with-us`
- "Certified Coach" in Programmes column also → `/eccp`; ECCP entry removed to avoid duplication
- All 6 individual policy links consolidated to "Empowr Legal Policies" → `/legal`; Privacy Policy and Terms & Conditions additionally surfaced in the footer bar for immediate visibility
- Footer is a Server Component — no `"use client"` needed
