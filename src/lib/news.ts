import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { NewsPost, NewsPostFull } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content", "news");

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, "");
}

export function getAllPosts(): NewsPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort()
    .reverse();

  return files.map((filename) => {
    const slug = slugFromFilename(filename);
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      category: data.category as NewsPost["category"],
      excerpt: data.excerpt as string,
      coverImage: data.coverImage as string | undefined,
    };
  });
}

export function getPostBySlug(slug: string): NewsPostFull | null {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as NewsPost["category"],
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string | undefined,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(slugFromFilename);
}
