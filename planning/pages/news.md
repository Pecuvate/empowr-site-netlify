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

| Slug | Date | Title |
|---|---|---|
| `2026-05-20-welcome-to-our-new-website` | 2026-05-20 | Welcome to Our New Website |

---

## Status
**Live — needs regular posts.**

**Outstanding:**
- Site relaunch post is live but the team should add posts regularly to keep the site active
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
