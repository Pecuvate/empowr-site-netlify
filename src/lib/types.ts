export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  category: "Announcement" | "Event" | "Story" | "Update";
  excerpt: string;
  coverImage?: string;
}

export interface NewsPostFull extends NewsPost {
  content: string;
}
