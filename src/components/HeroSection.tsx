import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <div className="animate-bounce-slow">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                <span className="block text-foreground">Brijesh</span>
                <span className="block gradient-text">Thakkar</span>
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
              B.Tech Engineering Science (Majors in CSE) Student at IIT Jodhpur
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              Passionate about Machine Learning, Full Stack Development & Software Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:b24es1015@iitj.ac.in"
              className="p-3 glass rounded-full transition-smooth hover:bg-primary/20 hover:shadow-glow group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://github.com/Brijesh-Thakkar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full transition-smooth hover:bg-primary/20 hover:shadow-glow group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://www.linkedin.com/in/brijesh-thakkar-22912b290/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full transition-smooth hover:bg-primary/20 hover:shadow-glow group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="tel:+919537474957"
              className="p-3 glass rounded-full transition-smooth hover:bg-primary/20 hover:shadow-glow group"
            >
              <Phone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="gradient-primary hover:shadow-glow transition-smooth text-white font-medium px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-smooth px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;