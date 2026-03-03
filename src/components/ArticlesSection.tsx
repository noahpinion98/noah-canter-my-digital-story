import { FileText, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import articles from "@/data/articles";

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Articles</span>
        </h2>
        <div className="w-20 h-1 bg-primary/50 mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Thoughts and tutorials on things I'm learning.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} to={`/articles/${article.slug}`} className="group">
              <Card className="card-glow bg-card border-border/50 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-sm text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
