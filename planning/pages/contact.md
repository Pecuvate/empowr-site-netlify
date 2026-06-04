# Contact — `/contact`

**Purpose:** Makes it easy to reach Empowr. Single form routes to the right inbox by subject.  
**Audience:** Anyone wanting to get in touch — participants, media, partners, funders, practitioners.

---

## Sections

### 1. Page Header
- Blue background
- Eyebrow: *"Contact"*
- Headline: *"Get In Touch"*
- No sub-copy

### 2. Contact Form
- Cream background
- Sub-copy: "Fill in the form below and your message will reach the right person. We aim to respond within 2 working days."
- Fields: Name · Email · Subject (dropdown) · Message
- Submit states: idle → submitting (button disabled) → success message or inline error with fallback email link
- Subject routing (handled by `netlify/functions/contact.ts`):
  - Work With Us → `opportunities@empowrcic.org`
  - General Enquiry, Partnership, Media → `enquiries@empowrcic.org`
- Confirmation email sent to sender via Resend on every submission

---

## Status
**Complete (Phase 2 — Netlify Function + Resend form).**

**Outstanding:**
- Add `RESEND_API_KEY`, `CONTACT_EMAIL`, `OPPORTUNITIES_EMAIL` to Netlify environment variables before form will work in production

---

## Notes
- Phase 1 mailto route cards removed in Session 13
- Registered Details, Email Us Directly, and Follow Us sections removed in Session 13 — registered details remain in the footer brand column
- Function lives at `src/netlify/functions/contact.ts`; configured via `[functions]` in `netlify.toml`
- `resend` added as a dependency in `src/package.json`
