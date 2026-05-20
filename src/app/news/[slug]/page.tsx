import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs } from "@/lib/news";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Empowr CIC`,
    description: post.excerpt,
  };
}

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

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Post Header */}
      <section className="bg-blue text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <Link
            href="/news"
            className="text-blue-light text-sm font-semibold hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to News
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLOURS[post.category] ?? CATEGORY_COLOURS.Update}`}
            >
              {post.category}
            </span>
            <time className="text-blue-light text-sm">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Post Body */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mdx-body">
            <MDXRemote source={post.content} />
          </div>
          <div className="mt-14 pt-8 border-t border-border">
            <Link
              href="/news"
              className="text-blue font-semibold hover:text-blue-dark transition-colors"
            >
              ← Back to News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
