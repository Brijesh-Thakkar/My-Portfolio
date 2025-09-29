import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Indian Institute of Technology Jodhpur",
      degree: "B.Tech in Engineering Science (Majors in CSE)",
      duration: "July 2024 – Present",
      grade: "CGPA: 7.61",
      icon: <GraduationCap className="h-6 w-6" />,
      status: "current"
    },
    {
      institution: "Bhagwan Mahavir International, Surat",
      degree: "Higher Secondary Education (CBSE)",
      duration: "March 2024",
      grade: "92.8%",
      icon: <Award className="h-6 w-6" />,
      status: "completed"
    },
    {
      institution: "LP Savani Vidhyavhavan, Surat",
      degree: "Secondary Education (CBSE)",
      duration: "March 2022",
      grade: "96.4%",
      icon: <Award className="h-6 w-6" />,
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="gradient-card glow-card border-border/50 p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className={`p-4 rounded-full ${edu.status === 'current' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                    {edu.icon}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {edu.degree}
                    </p>
                    
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'current' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-success/10 text-success'
                    }`}>
                      {edu.grade}
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

export default EducationSection;