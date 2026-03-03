import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ArticlesSection />
      <ProjectsSection />
      <EducationSection />
      <Footer />
    </div>
  );
};

export default Index;
