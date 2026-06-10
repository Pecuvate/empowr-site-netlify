# FAQs — `/faqs`

**Purpose:** Answer common questions about Empowr CIC, its structure, programmes, and how it works.  
**Audience:** New visitors, potential participants, partners, and funders who want to understand the organisation before engaging.

---

## Structure

- **Server component:** `app/faqs/page.tsx` — exports metadata, renders layout
- **Client component:** `app/faqs/FaqsAccordion.tsx` — accordion logic (`useState` per item)

## Sections

### 1. Page Header
- Blue background
- Headline: "Frequently Asked Questions"
- Sub-copy: "Answers to common questions about Empowr CIC, our programmes, and how we work."

### 2. FAQ Accordion
- Cream background
- Single card (`bg-warm-white`, rounded-2xl, border) containing all FAQ items
- Each item: question row (button) + collapsible answer paragraph
- Icon: `+` rotates to `×` on open (`rotate-45`)
- Questions live in the `FAQS` array in `FaqsAccordion.tsx`

---

## Current FAQs

1. **What is a Community Interest Company (CIC)?** — CIC structure, profit reinvestment, CIC Regulator link (gov.uk), annual CIC 34 reporting
2. **Why did Empowr become a CIC?** — reinvesting surpluses into community; flexibility vs charities and traditional businesses; community commitment

---

## Status

**Live — 2 FAQs.** Build out the full question set when content is ready.

**To add more FAQs:** append to the `FAQS` array in `app/faqs/FaqsAccordion.tsx`.

**Note:** `answer` type is `ReactNode` (not `string`) — use JSX for answers that need inline links or multiple paragraphs.

---

## Notes

- Linked from the footer "About Us" column
- CIC explanation was originally on `/about` — moved here in the About page improvement pass
