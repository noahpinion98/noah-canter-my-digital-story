import { Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Button asChild size="lg" className="glow">
            <a 
              href="https://github.com/noahpinion98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Connect on GitHub
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Noah Canter. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-primary inline" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
