import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Briefcase, Calendar } from "lucide-react";

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      position: "Junior Core Team",
      organization: "DevlUps Labs",
      period: "Sept 2025 – Present",
      type: "Leadership",
      icon: <Star className="h-6 w-6" />,
      description: "Leading development initiatives and mentoring junior developers in the official development society of IIT Jodhpur.",
      achievements: [
        "Managing cross-functional development teams",
        "Overseeing project architecture and code quality",
        "Mentoring new members in modern development practices"
      ],
      status: "current"
    },
    {
      position: "Project Member",
      organization: "DevlUp Labs (SOC 2025)",
      period: "2025",
      type: "Development",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Contributing to open-source projects and collaborative development initiatives during Summer of Code program.",
      achievements: [
        "Active contributor to DC++ project enhancement",
        "Implementing modern security features with JWT authentication",
        "Collaborating with senior developers on system architecture"
      ],
      status: "ongoing"
    },
    {
      position: "Project Member",
      organization: "Realme of AI and Data (WARP 2025)",
      period: "2025",
      type: "Research",
      icon: <Users className="h-6 w-6" />,
      description: "Working on cutting-edge AI and data science projects, focusing on machine learning applications and data analysis.",
      achievements: [
        "Developing AI-powered solutions for real-world problems",
        "Research and implementation of advanced ML algorithms",
        "Data preprocessing and model optimization techniques"
      ],
      status: "ongoing"
    },
    {
      position: "Support Team Member",
      organization: "Society of Alumni Affairs",
      period: "2024–2025",
      type: "Community",
      icon: <Users className="h-6 w-6" />,
      description: "Supporting alumni engagement initiatives and helping maintain connections between current students and alumni network.",
      achievements: [
        "Organizing alumni networking events",
        "Managing communication between alumni and current students",
        "Supporting career guidance and mentorship programs"
      ],
      status: "ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-primary/10 text-primary border-primary/30';
      case 'ongoing':
        return 'bg-accent/10 text-accent border-accent/30';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current':
        return 'Current Position';
      case 'ongoing':
        return 'Active';
      default:
        return 'Completed';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'bg-primary/20 text-primary';
      case 'Development':
        return 'bg-accent/20 text-accent';
      case 'Research':
        return 'bg-success/20 text-success';
      case 'Community':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section id="responsibilities" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My contributions to various organizations and leadership roles
          </p>
        </div>

        <div className="space-y-8">
          {responsibilities.map((responsibility, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="gradient-card glow-card border-border/50 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon & Type */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-full ${getTypeColor(responsibility.type)}`}>
                      {responsibility.icon}
                    </div>
                    <div className="lg:hidden">
                      <Badge className={getTypeColor(responsibility.type)}>
                        {responsibility.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {responsibility.position}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {responsibility.organization}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {responsibility.period}
                        </div>
                        <div className="flex gap-2">
                          <Badge className={`hidden lg:inline-flex ${getTypeColor(responsibility.type)}`}>
                            {responsibility.type}
                          </Badge>
                          <Badge variant="outline" className={getStatusColor(responsibility.status)}>
                            {getStatusText(responsibility.status)}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">
                      {responsibility.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Contributions:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {responsibility.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="text-primary mr-2 mt-0.5">•</span>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilitiesSection;