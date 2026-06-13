# News — `/news` + `/news/[slug]`

**Purpose:** Keeps the site alive and shows Empowr is active. A record of announcements, events, stories, and updates.  
**Audience:** Returning visitors, followers, media, anyone checking Empowr is still active.

---

## Implementation

**Storage:** MDX files in `src/content/news/` — one `.mdx` file per post.  
**Routing:** Static export with `generateStaticParams` — each post renders as a static page at build time.  
**Utility:** `src/lib/news.ts` — `getAllPosts()` and `getPost(slug)`.  
**Types:** `src/lib/types.ts` — `NewsPost` and `NewsPostFull`.

---

## List View (`/news`)

- Blue-pale page header
- Grid of post cards: date · title · excerpt · Read more link
- "All news →" link from the Home page latest news strip

## Individual Post (`/news/[slug]`)

- Title, date, body rendered from MDX via `next-mdx-remote`
- `.mdx-body` CSS class in `globals.css` handles typography
- ← Back to News link

---

## Current Posts

| Slug | Date | Title | Status |
|---|---|---|---|
| `2022-02-04-launch-of-empowr-first-skate-jam` | 2022-02-04 | The Launch of Empowr with the 1st Session: Skate Jam | Live |
| `2022-05-28-donated-computer-from-catbytes-cic` | 2022-05-28 | Donated Computer from Catbytes CIC | Live |
| `2022-06-04-jubilee-family-funday` | 2022-06-04 | Our Jubilee Family Funday | Live |
| `2022-06-05-street-skate-support-group` | 2022-06-05 | A Support Group for Beginners on the Streets | Live |
| `2023-01-13-first-partnership-ivydale-primary` | 2023-01-13 | Our First Partnership in Schools and Organisations | Live |
| `2023-02-06-one-year-anniversary` | 2023-02-06 | Our 1 Year Anniversary Celebrations | Live |
| `2026-05-20-welcome-to-our-new-website` | 2026-05-20 | Welcome to Our New Website | Draft (`.mdx.draft` — not yet published) |

---

## Status
**Live — 6 published posts. 1 draft pending.**

**Outstanding:**
- Publish the site relaunch post (`2026-05-20-welcome-to-our-new-website.mdx.draft`) when ready — rename file to `.mdx` to go live
- Add posts regularly to keep the site active
- Consider: session highlights, event announcements, milestone updates, community stories
- Category/filter system is not needed until 8–10+ posts exist

---

## Adding a New Post

1. Create `src/content/news/YYYY-MM-DD-post-title.mdx`
2. Add frontmatter:
   ```
   ---
   title: "Post Title"
   date: "YYYY-MM-DD"
   excerpt: "One or two sentence summary."
   ---
   ```
3. Write MDX body below the frontmatter
4. Commit and push — Netlify auto-deploys
