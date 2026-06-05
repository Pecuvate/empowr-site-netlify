# Contact — `/contact`

**Purpose:** Makes it easy to reach Empowr. Single form routes to the right inbox by subject.  
**Audience:** Anyone wanting to get in touch — participants, media, partners, funders, practitioners.

---

## Sections

### 1. Contact Form
- Cream background, full min-height, centred `max-w-2xl` column — no hero banner
- Headline: *"Get In Touch"* (inline, not a separate section)
- Sub-copy: "Fill in the form below and your message will reach the right person. We aim to respond within 2 working days."
- Fields: Name · Email · Subject (dropdown) · Message
- Submit states: idle → submitting (button disabled) → success message or inline error with fallback email link
- Subject routing (handled by `netlify/functions/contact.ts`):
  - Work With Us → `opportunities@empowrcic.org`
  - General Enquiry, Partnership, Media → `enquiries@empowrcic.org`
- Confirmation email sent to sender via Resend on every submission

### Query param pre-fill
Both params are optional and independent:
- `?subject=Partnership` — pre-selects the subject dropdown (validated against allowed values)
- `?message=...` — pre-fills the message textarea (any string, user can edit)
- `?subject=Partnership&message=...` — both together

Current wired links:
- `/partner-with-us` "Get In Touch" → `/contact?subject=Partnership`
- `/work-with-us` role cards + bottom CTA → `/contact?subject=Work%20With%20Us`

---

## Status
**Complete.**

---

## Notes
- Phase 1 mailto route cards removed in Session 13
- Registered Details, Email Us Directly, and Follow Us sections removed in Session 13 — registered details remain in the footer brand column
- Function lives at `src/netlify/functions/contact.ts`; configured via `[functions]` in `netlify.toml`
- `resend` added as a dependency in `src/package.json`
