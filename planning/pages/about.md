# About — `/about`

**Purpose:** Build trust and understanding. Explains what Empowr is, why it exists, its values, and the people who lead it.  
**Audience:** New visitors, potential partners, funders, participants wanting to understand the organisation.

---

## Sections

### 1. Page Header
- Blue background
- Headline: *"We promote lifelong wellbeing through the transformative power of experiential learning."*
- Sub-copy: "Empowr CIC is a community organisation based in SE London. Our mission is to be the number one Health Activities Provider in the UK, providing people with safe spaces where they can feel empowered to learn, develop and grow as an individual."
- No eyebrow. No mission callout.

### 2. What We Stand For
- Cream background
- Headline: *"What We Stand For"*
- Sub: "Empowr is more than an organisation — it is a movement built on four core beliefs."
- 2×2 grid (`sm:grid-cols-2`), cards with left-border accent (`border-l-4 border-l-blue`)
- **Wellbeing as a Way of Life** — everyday habits, not one-off interventions
- **Community and Belonging** — spaces where everyone feels valued and connected
- **Growth Through Learning** — transformation through doing, not watching
- **Inclusion For All** — wellbeing is for everyone, at every age

### 3. Our Story
- Blue-pale background
- Eyebrow: "How we got here." (`text-xs font-semibold uppercase tracking-widest text-muted`)
- Headline: *"Our Story"*
- 4 paragraphs:
  1. Founding observation — empty halls, Ikigai, the deep question about wellbeing
  2. The Ikigai insight — growth through experience, the founding principle
  3. The RC workshop pivot — tried RC first, planning took over, skating emerged naturally
  4. First sessions — people connecting, parents staying, young people finding confidence, a movement forming
- Blockquote (below paragraphs, `text-xl md:text-2xl`, italic):
  *"Empty spaces can become places of growth..."*

### 4. Our Team
- Warm-white background, 3-column grid
- DiceBear adventurer avatars (local SVGs in `public/avatars/`)
- **Jasmine Barnett** — Co-founder. Warmth, community, operations, culture
- **Shaun Barnett** — Co-founder. Narrative, structure, strategic vision
- **Clifton George Barrett** — Director of Events. Planning and delivery of events, values in every event
- Avatar files: `public/avatars/jasmine.svg`, `shaun.svg`, `clifton.svg`

### 5. CTA
- Blue background: Our Work | Get In Touch

---

## Status
**Pending client content.**

**Outstanding:**
- Team photos — currently using DiceBear adventurer avatars as placeholders. When real photos arrive: add `photo` field to TEAM array, swap `src` from avatar URL to photo path
- 3 additional board members (TBC via Notion)

---

## Notes
- "What Is a CIC?" section removed from this page — content lives in `/faqs`
- Values section moved before Our Story as part of the About page improvement pass
- RC workshop pivot paragraph sourced from `planning/architecture/founding-story.md`
- Avatar skin tones: Jasmine (`#8d5524`), Shaun (`#4a2912`), Clifton (`#7b4e2d`)
