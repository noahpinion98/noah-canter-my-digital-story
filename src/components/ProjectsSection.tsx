import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Coming Soon",
    description: "An exciting project I'm currently working on. Stay tuned for updates!",
    tags: ["In Progress"],
    github: "https://github.com/noahpinion98",
    placeholder: true,
  },
  {
    title: "Future Project",
    description: "Another project in the pipeline. Check back soon for more details!",
    tags: ["Planned"],
    github: "https://github.com/noahpinion98",
    placeholder: true,
  },
  {
    title: "Your Idea Here",
    description: "Have an interesting idea? I'm always looking for new challenges to tackle.",
    tags: ["Concept"],
    github: "https://github.com/noahpinion98",
    placeholder: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary/50 mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Check out my GitHub for my latest work. Here's what I'm building:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-glow bg-card border-border/50 flex flex-col ${project.placeholder ? 'border-dashed' : ''}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FolderGit2 className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1 border-border/50 hover:border-primary/50"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary/30 hover:border-primary/60">
            <a 
              href="https://github.com/noahpinion98?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
