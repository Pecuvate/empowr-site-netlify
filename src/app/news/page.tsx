import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Updates | Empowr CIC",
  description:
    "The latest news, announcements, stories, and updates from Empowr CIC.",
};

const CATEGORY_COLOURS: Record<string, string> = {
  Announcement: "bg-blue text-white",
  Event: "bg-blue-pale text-blue",
  Story: "bg-warm-white text-mid border border-border",
  Update: "bg-warm-white text-mid border border-border",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Page Header */}
      <section className="bg-blue text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-blue-light text-sm font-semibold uppercase tracking-widest mb-4">
            News
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl mb-6">
            News &amp; Updates
          </h1>
          <p className="text-lg text-blue-light max-w-xl leading-relaxed">
            Announcements, events, stories, and updates from Empowr CIC.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-mid text-lg">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-warm-white rounded-2xl p-7 border border-border flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLOURS[post.category] ?? CATEGORY_COLOURS.Update}`}
                    >
                      {post.category}
                    </span>
                    <time className="text-muted text-xs">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <h2 className="text-lg font-bold text-black mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-mid text-sm leading-relaxed flex-1 mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="text-blue font-semibold text-sm hover:text-blue-dark transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
