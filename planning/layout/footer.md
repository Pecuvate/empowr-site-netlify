# Footer — `src/components/Footer.tsx`

8-column layout on desktop (`lg:grid-cols-8`), 2 on tablet, 1 on mobile. Black background, appears on all pages via `src/app/layout.tsx`. Max width `max-w-7xl`.

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
- Our Philosophy → `/experiential-learning`
- Our Impact → `/impact`
- Our History → `/history`
- News → `/news`
- FAQs → `/faqs`

### Programmes (col 3)
- All Programmes → `/our-work`
- Empowr Heroes → `hero.empowrcic.org` (external)
- Certified Coach → `/eccp`

### Connect With Us (col 4)
- Instagram → `instagram.com/empowr.cic` (external)
- Facebook → `facebook.com/empowr.cic` (external)
- YouTube → `youtube.com/@empowr.cic` (external)
- LinkedIn → `linkedin.com/company/empowr-cic` (external)
- WhatsApp → `chat.whatsapp.com/BuKlBkfDxHs2jdPyRzXwza` (external)

### Get In Touch (col 5)
- Contact Us → `/contact`
- Partner With Us → `/partner-with-us`
- Work With Us → `/work-with-us`

### Shop (col 6)
- Coming Soon — disabled `<span>` at 50% opacity; placeholder until `shop.empowrcic.org` is wired

### Legal (cols 7–8, `lg:col-span-2`)
- All Our Policies → `/legal` (internal hub)
- Privacy Policy → `/legal/privacy-policy` (external, opens new tab)
- Cookie Policy → `/legal/cookie-policy` (external, opens new tab)
- Terms & Conditions → `/legal/terms-and-conditions` (external, opens new tab)
- Risk Waiver → `/legal/risk-waiver` (external, opens new tab)
- Photography & Media Consent → `/legal/photography-consent` (external, opens new tab)
- Programme Policies → `/legal/programme-policies` (external, opens new tab)

---

## Footer Bar

- Left: © {year} Empowr CIC. All rights reserved. · Privacy Policy · Terms & Conditions
- Right: Instagram · Facebook · YouTube · LinkedIn · WhatsApp (SVG icons with aria-labels)

Company registration details live in the Brand column, not the footer bar.

---

## Notes
- "Work With Us" footer link → `/work-with-us`
- "Certified Coach" in Programmes column also → `/eccp`; ECCP entry removed to avoid duplication
- Individual policy links in "Our Policies" column use `<a target="_blank">` — open LegalHub content via proxy in a new tab
- Footer bar Privacy Policy and Terms & Conditions remain as `<Link>` (same-tab internal navigation)
- Footer is a Server Component — no `"use client"` needed
