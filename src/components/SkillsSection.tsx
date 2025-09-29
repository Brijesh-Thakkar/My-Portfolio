import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C++", "Python", "C", "JavaScript", "Go"],
      color: "bg-primary/20 text-primary"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Next.js", "React.js", "Electron.js"],
      color: "bg-accent/20 text-accent"
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["Node.js", "FastAPI", "PostgreSQL"],
      color: "bg-success/20 text-success"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["PyTorch", "TensorFlow"],
      color: "bg-destructive/20 text-destructive"
    }
  ];

  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera & Stanford Online",
      year: "2024"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="gradient-card glow-card border-border/50 p-6 h-full">
                <div className={`p-3 rounded-full ${category.color} w-fit mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="glow-tag hover:bg-primary/20 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            Certifications
          </h3>
          
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="gradient-card shadow-card border-border/50 p-6 hover:shadow-elegant transition-smooth">
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-display font-semibold text-foreground">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {cert.provider} • {cert.year}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;