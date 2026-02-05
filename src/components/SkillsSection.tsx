import { Code2, FileCode, Palette, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    name: "HTML",
    icon: Code2,
    description: "Semantic markup & structure",
    color: "text-orange-400",
  },
  {
    name: "CSS",
    icon: Palette,
    description: "Styling & responsive design",
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: FileCode,
    description: "Interactive web experiences",
    color: "text-yellow-400",
  },
  {
    name: "Python",
    icon: Terminal,
    description: "Scripting & automation",
    color: "text-green-400",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Skills & Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-primary/50 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="card-glow bg-card/50 backdrop-blur border-border/50 group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 rounded-xl bg-secondary/50 ${skill.color} transition-all duration-300 group-hover:scale-110`}>
                    <skill.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
