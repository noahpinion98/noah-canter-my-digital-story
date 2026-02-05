import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationItems = [
  {
    icon: BookOpen,
    title: "Codecademy",
    subtitle: "Self-Paced Learning",
    description: "Currently studying web development and Python programming through interactive courses and hands-on projects.",
    status: "In Progress",
  },
  {
    icon: GraduationCap,
    title: "Web Development Path",
    subtitle: "HTML, CSS, JavaScript",
    description: "Building a strong foundation in front-end technologies and learning to create responsive, accessible websites.",
    status: "Active",
  },
  {
    icon: Award,
    title: "Python Programming",
    subtitle: "Scripting & Automation",
    description: "Learning Python for data manipulation, automation scripts, and backend development fundamentals.",
    status: "Active",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 gradient-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Education & Learning</span>
        </h2>
        <div className="w-20 h-1 bg-primary/50 mx-auto mb-12 rounded-full" />

        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <Card 
              key={index} 
              className="card-glow bg-card/50 backdrop-blur border-border/50"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary w-fit mt-1 md:mt-0">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-primary/80 text-sm mb-2">{item.subtitle}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
