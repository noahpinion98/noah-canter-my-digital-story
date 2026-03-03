import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import articles from "@/data/articles";
import NotFound from "./NotFound";

// Article content components keyed by slug
import UnderstandingScopeInPython from "@/articles/understanding-scope-in-python";

const articleComponents: Record<string, React.ComponentType> = {
  "understanding-scope-in-python": UnderstandingScopeInPython,
};

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const Content = slug ? articleComponents[slug] : undefined;

  if (!article || !Content) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8 text-muted-foreground hover:text-primary">
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <article className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-gradient glow-text text-4xl font-bold mb-2">{article.title}</h1>
          <p className="text-muted-foreground text-sm mb-8">{article.date}</p>
          <Content />
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
