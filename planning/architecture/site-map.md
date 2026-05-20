# Site Map

**Last updated:** 2026-05-19

---

## Routes

| Route | Page title | Primary audiences |
|---|---|---|
| `/` | Home | All |
| `/about` | Who We Are | Public, Funders |
| `/our-work` | What We Do | Public, Funders, Community |
| `/impact` | Our Impact | Funders, Public |
| `/get-involved` | Get Involved | All |
| `/work-with-us` | Work With Us | Practitioners |
| `/news` | News & Updates | All |
| `/news/[slug]` | Individual news post | All |
| `/contact` | Contact | All |

---

## Navigation

**Primary nav (top, all pages):**
Home · About · Our Work · Impact · Get Involved · News · Contact

**Footer nav (all pages):**
About · Our Work · Impact · Work With Us · Contact · Empowr Heroes [external] · Privacy Policy [external — LegalHub]

---

## Audience routing

| Audience | Entry point | Routed to |
|---|---|---|
| General public | Home → About | `/about`, `/our-work` |
| Potential funders / partners | Home → Impact | `/impact`, `/about` (CIC section) |
| Freelancers / practitioners | Home → Get Involved → Work With Us | `/work-with-us` |
| Community members | Home → Get Involved | `/contact` |
| Supporters / donors | Home → Get Involved → Support Our Work | Heroes platform (external) |

---

## External links

All external links centralised in `src/lib/links.ts`. Key external destinations:

| Destination | Purpose | Route it appears on |
|---|---|---|
| Empowr Heroes platform | Donation / support CTA | Home, Get Involved |
| CIC Regulator filing (per year) | Each CIC 34 annual report | Impact |
| LegalHub — Privacy Policy | Footer legal requirement | Footer (all pages) |
| LegalHub — Cookie Policy | Footer legal requirement | Footer (all pages) |
