# Experiential Learning — `/experiential-learning`

**Purpose:** Canonical statement of Empowr's philosophy and the EELA framework — what it is, how it works, and why it matters. All external links from the Heroes platform, EELA site, and other properties point here.  
**Audience:** Prospective participants and families wanting to understand the "why", funders and partners assessing credibility, curious visitors who followed a link from the Heroes donation platform.

---

## Narrative Direction

**EELA is the story. The medical report is supporting context.**

The page must read as a confident, forward-looking statement of philosophy — not as a response to a crisis. EELA is not a reaction to the NHS data; the NHS data is one piece of evidence that explains why the EELA approach matters.

### The problem with v1 (built June 2026)

The first build structured the page as a health report:

> *"Here's the UK mental health crisis → here are the alarming stats → here's a non-medical solution → here's the evidence."*

This made EELA feel like a workaround to a broken system rather than a coherent, proactive philosophy. Specific issues:

- **Hero headline** — *"A Non-Medical Approach to Mental Health"* is a report title, not a philosophy statement. It leads with a negative (what EELA is *not*) and frames the page as a response to a problem.
- **Stats strip above the fold** — NHS crisis figures (prescriptions, suicide rate) as the first thing a visitor reads sets a clinical, reactive tone before EELA has even been introduced.
- **Tab order: Challenge first** — Opening with "When Medical Alone Isn't Enough" made the mental health crisis the headline narrative, with EELA as an answer to it.
- **Overall voice** — Reactive rather than confident. The page apologised for the status quo before making Empowr's case.

### The reframe (v2)

Lead with EELA. Frame the NHS/mental health data as context that validates the approach — not as the reason the approach exists.

> *"Here's our philosophy and framework — what it is, how it works, what the research says. Here's the context that shows why it's needed. Here's where we're going."*

Concrete changes:
1. **Hero** — EELA-forward headline and intro. Confident and philosophical, not crisis-reactive.
2. **Stats strip** — Remove from above the fold. The figures move inside the "Why It Matters" tab as supporting context.
3. **Tab order** — EELA leads. The challenge/context tab comes later.
4. **Voice throughout** — Affirmative. Empowr is building something, not fixing something broken.

---

## Side-effects on other files

| File | Change |
|---|---|
| `src/lib/links.ts` | Add `experientialLearning: "/experiential-learning"` ✓ done |
| `src/app/our-work/page.tsx` | Update "Find out more about EELA →" to point to `/experiential-learning` ✓ done |
| Heroes project `src/lib/links.ts` | Add `site.experientialLearning` pointing to `https://empowrcic.org/experiential-learning` |

---

## Sections (v2)

### 1. Page Header
- Blue background
- Eyebrow: *"Our Philosophy"*
- Headline: *"People learn and grow best through doing."*
- Sub-copy (1 para): Empowr designs all its programmes through EELA — the Empowr Experiential Learning Activities framework. This page explains what that means, why it works, and what the research says.

### 2. Tab Section (Client Component)

No stats strip above the fold. The tabs begin immediately after the hero.

**Tab order:**
1. **What is EELA?**
2. **The Science**
3. **The Evidence**
4. **Why It Matters**
5. **Our Vision**

Tab bar: active tab = filled blue pill, inactive = white with `border-border`.

---

#### Tab 1 — What is EELA?

**Content:**
- Definition callout: Experiential learning is a structured cycle — *do*, *reflect*, *conceptualise*, *apply*.
- EELA paragraph: the architecture that every Empowr programme lives within. Grounded in psychological safety, inclusion, meaningful challenge, and joy.
- **5 sub-programme cards**: MoveWell (Active) + 4 Coming Soon
- Link: "See our active programmes →" → `/our-work`

---

#### Tab 2 — The Science

**Content:**
- h2: "Why Experiential Learning Works"
- Body: neuroplasticity, neural pathway formation, stress hormone reduction, cognitive flexibility
- 2/3 + 1/3 layout: body copy left, 3 callout cards right (Neuroplasticity / Stress Response / Cognitive Flexibility)

---

#### Tab 3 — The Evidence

**Content:**
- h2: "What the Research Shows"
- Intro: "Five areas of research consistently support the experiential learning approach."
- 2-col grid of 5 white cards: Neuroplasticity / Resilience & Self-Efficacy / Social Connection / Physical Health Synergy / Long-Term Impact
- Source attribution line

---

#### Tab 4 — Why It Matters

**Replaces "The Challenge" — same content, reframed.**  
The NHS data and mental health context lives here as *supporting context*, not as the lead narrative of the page.

**Content:**
- h2: "The Context That Drives Our Work"
- Intro: positions the data as the backdrop that makes EELA's mission urgent — not as the reason EELA exists
- **Stats strip** (moved here from above the fold): 1 in 4 / 8.7M / +45% / 11.4
- Para: antidepressant use, NHS capacity gap, rising prevalence
- Para: youth mental health (2017–2023 data)
- Callout: *"These trends highlight an urgent need for complementary, non-medical strategies."*
- Source attribution: NHS Digital, ONS

---

#### Tab 5 — Our Vision

**Content:**
- h2: "A Smarter Investment in Society"
- Intro para
- 2x2 economic impact grid: Greater Workforce Engagement / Health System Relief / A More Resilient Population / Indirect Public Benefit
- Blue callout: "Recognised as a Health Activities Provider" ambition
- Closing: "Empowr is committed to leading this movement — because we believe in the potential for every individual to thrive through experience."

---

### 3. CTA Section
- Blue background
- h2: "Ready to be part of it?"
- 3 buttons: See Our Programmes → `/our-work` | Join a Session → `eela.empowrcic.org` | Support Our Work → `hero.empowrcic.org`

### 4. References
- Collapsible `<details>` element
- 13 academic references (Empowr 2025 report)

---

## Colour Sequence
`blue → cream (tabs) → blue → cream (collapsible)`

---

## Technical Notes

- Tabs: `"use client"` wrapper in `ExperientialLearningTabs.tsx`
- Page shell (`page.tsx`) is server-rendered — hero, CTA, references
- No new dependencies — pure `useState` for active tab
- `output: "export"` compatible

---

## Nav Placement

**Undecided.** Recommend linked-only for now — via Our Work page, footer (to be added), and inline from home page hero copy. Revisit when team has reviewed.

---

## Status
**Built (v1) — reframe in progress (v2).**

**v1 issues resolved by v2:**
- Hero and stats strip reframed to EELA-first
- Stats strip moved inside "Why It Matters" tab
- Tab order corrected: EELA → Science → Evidence → Context → Vision

**Still outstanding:**
- Footer link and home page inline link (to add after v2 is confirmed)
- Heroes project `links.ts` update
- Client to confirm nav placement
