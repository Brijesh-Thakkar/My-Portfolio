import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResponsibilitiesSection from "@/components/ResponsibilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AsteroidShower from "@/components/AsteroidShower";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AsteroidShower />
      <Navigation />
      
      <main>
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ResponsibilitiesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;