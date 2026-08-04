import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/news'

// Required under `output: 'export'` — without it the build fails collecting
// page data for /sitemap.xml.
export const dynamic = 'force-static'

// Canonical host is www — the apex 301s to it, so listing the apex here would
// point crawlers at a redirect.
const BASE = 'https://www.empowrcic.org'

// News entries are derived from the MDX files so publishing a post can't leave
// the sitemap stale. /legal is included as an index page only; the individual
// /legal/:slug URLs are rewritten to LegalHub, which owns the canonical copy.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/our-work`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/experiential-learning`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/impact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/get-involved`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/news`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/partner-with-us`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/work-with-us`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/experiential-learning/report`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/prospectus`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/eccp`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/faqs`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/history`, changeFrequency: 'yearly', priority: 0.5 },
    ...getAllPosts().map((post) => ({
      url: `${BASE}/news/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    { url: `${BASE}/legal`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
