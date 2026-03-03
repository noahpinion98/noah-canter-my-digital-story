# How to Add a New Article

1. **Create the article component** in `src/articles/your-slug.tsx` — export a default React component with your content.

2. **Register the metadata** in `src/data/articles.ts` — add an entry to the array:
   ```ts
   {
     slug: "your-slug",
     title: "Your Title",
     description: "Short description for the card.",
     date: "2026-03-15",
     tags: ["Python", "Fundamentals"],
   }
   ```

3. **Wire it up** in `src/pages/ArticlePage.tsx`:
   - Import your component: `import YourArticle from "@/articles/your-slug";`
   - Add it to `articleComponents`: `"your-slug": YourArticle,`

That's it — the homepage Articles section and the `/articles/your-slug` route will work automatically.
