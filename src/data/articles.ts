export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const articles: Article[] = [
  {
    slug: "understanding-scope-in-python",
    title: "Understanding Scope in Python",
    description:
      "A beginner-friendly guide to how variable scope works in Python — local, enclosing, global, and built-in.",
    date: "2026-03-03",
    tags: ["Python", "Fundamentals"],
  },
];

export default articles;
