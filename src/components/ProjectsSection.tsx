import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Lightbulb } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Course Recommender System",
      period: "Jan 2025 – May 2025",
      description: "Developed a smart course recommender system using advanced machine learning techniques including BERT and Large Language Models (LLMs) to provide personalized course recommendations.",
      technologies: ["React.js", "PostgreSQL", "FastAPI", "LLMs", "BERT"],
      highlights: [
        "Experience with CNNs for data preprocessing",
        "Advanced model deployment techniques",
        "Integration of natural language processing"
      ],
      status: "ongoing"
    },
    {
      title: "The ATM Machine",
      period: "Oct 2024 – Nov 2024",
      description: "Built a comprehensive ATM simulator in C with full banking functionality including secure authentication, transaction processing, and account management.",
      technologies: ["C"],
      highlights: [
        "Secure user authentication system",
        "Complete transaction processing (deposits, withdrawals)",
        "Balance checking and PIN management",
        "Robust error handling and security measures"
      ],
      status: "completed"
    },
    {
      title: "DC++ Enhancement",
      period: "June 2025 – Present",
      description: "Contributing to IIT Jodhpur's DC++ project under DevlUp Labs. Building a modern LAN-based peer-to-peer file sharing system with enhanced security and user experience.",
      technologies: ["Electron.js", "Go"],
      highlights: [
        "JWT-based authentication system",
        "Peer-to-peer file sharing protocol",
        "Modern UI with Electron.js",
        "Backend optimization with Go"
      ],
      status: "ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'ongoing' ? 'bg-primary/10 text-primary' : 'bg-success/10 text-success';
  };

  const getStatusText = (status: string) => {
    return status === 'ongoing' ? 'In Progress' : 'Completed';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work and technical contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="gradient-card glow-card border-border/50 p-6 h-full flex flex-col group">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 text-primary rounded-lg">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.period}
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-muted/30 border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-smooth"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-smooth"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  {project.title === "DC++" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 text-muted-foreground hover:border-primary hover:text-primary transition-smooth"
                      asChild
                    >
                      <a href="https://github.com/Brijesh-Thakkar" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;