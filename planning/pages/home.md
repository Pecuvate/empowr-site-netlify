# Home — `/`

**Purpose:** First impression and narrative builder. Communicates the mission instantly, shows what's on offer, builds trust through impact and community proof, then routes every visitor — participant, funder, partner, or practitioner — to where they need to go.  
**Audience:** Everyone. This is a catch-all page. No single audience is prioritised.

---

## Sections

### 1. Hero
- Blue background, white text
- Headline: *"Live by growing. Grow by learning. Learn by doing."*
- Sub-copy: *"We design and deliver experiential learning programmes that improve long-term mental, physical, and emotional wellbeing — for people of every age."*
- CTAs: **Book a Session** → `eela.empowrcic.org` (primary, white button) | **Find Out More** → `/about` (ghost) | **Support Our Work** → `hero.empowrcic.org` (ghost)

### 2. Everyone Is Welcome Here — Find Your Session
- Cream background
- Headline: *"Everyone is welcome here."*
- Sub: *"Empowr works with people of all ages and backgrounds. Whether you're stepping on skates for the first time or looking to push your limits — there's a session for you."*
- "See all programmes →" link → `/our-work`
- 4 cards (participant intent framing):
  - **Drop In & Skate** — Ages 5+ · All levels
  - **Learn to Skate** — Ages 5+ · Beginner to advanced
  - **Holiday Camps** — Ages 5–15 · School holidays
  - **Push Your Skills** — Ages 13+ · Intermediate to advanced
- **Book a Session** CTA → `eela.empowrcic.org`

### 3. Our Impact
- Blue-pale background
- Headline: *"Thousands of people. One community."*
- Sub: *"Since February 2022, Empowr has been showing up. Our mission is to empowr as many people as possible — here's our reach so far."* (empowr italicised)
- "See our full impact →" link → `/impact`
- 4 white cards: **10,000+** Participant attendances · **428** Sessions delivered · **500+** Hours of paid & volunteer work · **2** Countries reached

### 4. See What Others Say (Reviews)
- Warm-white background
- Headline: *"See what others say"*
- Sub: *"Real people. Real sessions. Here's what our community thinks."*
- Horizontal carousel — 7 Trustpilot reviews, arrow navigation (left/right chevron buttons), scrollbar hidden
- Each card: ★★★★★ (Trustpilot green) · Verified badge (where applicable) · review title · body (6-line clamp) · date
- "See all reviews on Trustpilot →" link → `trustpilot.com/review/empowrcic.org`
- Component: `src/components/ReviewsCarousel.tsx` (client component)

### 5. Get Involved
- Cream background, 4 cards
- **Support Our Work** → `hero.empowrcic.org` (external)
- **See Our Impact** → `/impact`
- **Work With Us** → `/work-with-us`
- **Partner With Us** → `/partner-with-us`

### 6. Latest News *(temporarily removed)*
- Removed — no posts yet. Restore when content is published.
- Pattern: `getAllPosts()` from `src/lib/news.ts`, 3 most recent posts, link to `/news`

---

## Status
Complete. News section temporarily removed pending content.

---

## Notes
- "What We Stand For" section (belief pillar cards) was removed — moved to `/about` as the values section
- "Who We Work With" audience chips section was removed — replaced by the Find Your Session section which carries the inclusive message more effectively
- The home page intentionally avoids funder/donor bias — it routes all audiences equally
- Partner With Us card updated from `/contact` → `/partner-with-us` (own dedicated page)
- Eyebrow removed from hero — tagline promoted to headline; old headline dropped
- Book a Session is the primary hero CTA — intentional prioritisation of participant journey
- Page narrative arc: offer → proof (impact) → social proof (reviews) → routes (get involved)
- Reviews data lives in `ReviewsCarousel.tsx` — update there when new reviews come in
