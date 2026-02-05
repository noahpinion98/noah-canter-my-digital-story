import { Github, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6 animate-fade-in">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm tracking-wide uppercase">Dallas-Fort Worth, TX</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in">
          <span className="text-gradient glow-text">Noah Canter</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Aspiring Developer crafting digital experiences with code
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="glow group">
            <a 
              href="https://github.com/noahpinion98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
              View My GitHub
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
          >
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;
