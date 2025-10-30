import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover-glow transition-all group hover:border-primary/30 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <h3 className="text-2xl font-bold gradient-text">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-4 group/item py-2 px-3 rounded-lg hover:bg-muted/50 transition-all"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover/item:scale-150 transition-transform"></div>
                        <span className="text-foreground/90 group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
