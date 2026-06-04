# Site Map

**Last updated:** 2026-06-04

---

## Routes

| Route | Page title | Primary audiences | In nav |
|---|---|---|---|
| `/` | Home | All | No (logo) |
| `/about` | Who We Are | Public, Funders | Yes |
| `/our-work` | What We Do | Public, Funders, Community | Yes |
| `/impact` | Our Impact | Funders, Public | Yes |
| `/get-involved` | Get Involved | All | Yes |
| `/work-with-us` | Work With Us | Practitioners | Yes |
| `/news` | News & Updates | All | Yes |
| `/news/[slug]` | Individual news post | All | — |
| `/contact` | Contact | All | Yes |
| `/eccp` | ECCP — Coming Soon | Practitioners, Partners | No (footer only) |
| `/partner-with-us` | Partner With Us | Organisations, Schools | No (footer only) |
| `/legal` | Legal Policies | All | No (footer only) |

---

## Navigation

**Primary nav (top, all pages):** About · Our Work · Impact · Get Involved · Work With Us · News · Contact  
**CTA button (right):** Support Us → `hero.empowrcic.org` (external)  
See `planning/layout/nav.md` for full behaviour spec.

**Footer (6 columns, all pages):** Brand · About Us · Get In Touch · Connect With Us · Programmes · Legal  
See `planning/layout/footer.md` for full column breakdown.

---

## Audience routing

| Audience | Entry point | Routed to |
|---|---|---|
| General public | Home → About | `/about`, `/our-work` |
| Potential funders / partners | Home → Impact | `/impact`, `/about` (CIC section) |
| Organisations / commissioners | Home → Get Involved → Partner With Us | `/partner-with-us` |
| Freelancers / practitioners | Home → Get Involved → Work With Us | `/work-with-us` |
| Community members | Home → Get Involved | `/contact` |
| Supporters / donors | Home → Get Involved → Support Our Work | Heroes platform (external) |

---

## External links

All external links centralised in `src/lib/links.ts`. Key external destinations:

| Destination | Purpose | Route it appears on |
|---|---|---|
| Empowr Heroes platform (`hero.empowrcic.org`) | Donation / support CTA | Home, Get Involved, Nav CTA, Footer |
| EELA platform (`eela.empowrcic.org`) | Book a session | Our Work |
| Companies House — 2024–25 accounts | Annual report link | Impact |
| Companies House — 2023–24 accounts | Annual report link | Impact |
| LegalHub — 6 Empowr org policies | Policy hub | `/legal` page + footer |
