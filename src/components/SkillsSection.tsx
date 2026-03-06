import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Users, 
  Target, 
  MessageCircle, 
  Clock, 
  Lightbulb 
} from "lucide-react";
import { useState } from "react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const technicalSkills = [
    { name: "HTML", icon: Code2, level: "Advanced", color: "from-orange-500 to-red-500", percentage: 90 },
    { name: "CSS", icon: Code2, level: "Advanced", color: "from-blue-500 to-cyan-500", percentage: 90 },
    { name: "JavaScript", icon: Code2, level: "Intermediate", color: "from-yellow-500 to-orange-500", percentage: 70 },
    { name: "Python", icon: Code2, level: "Intermediate", color: "from-blue-600 to-green-500", percentage: 75 },
    { name: "Java", icon: Code2, level: "Intermediate", color: "from-red-600 to-orange-600", percentage: 70 },
    { name: "SQL", icon: Database, level: "Intermediate", color: "from-purple-500 to-pink-500", percentage: 65 },
    { name: "React", icon: Globe, level: "Learning", color: "from-cyan-500 to-blue-500", percentage: 50 },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users, color: "from-green-500 to-emerald-500" },
    { name: "Leadership", icon: Target, color: "from-blue-500 to-indigo-500" },
    { name: "Problem-Solving", icon: Lightbulb, color: "from-yellow-500 to-amber-500" },
    { name: "Communication", icon: MessageCircle, color: "from-purple-500 to-violet-500" },
    { name: "Time Management", icon: Clock, color: "from-pink-500 to-rose-500" },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground glow-primary";
      case "Intermediate": return "bg-accent text-accent-foreground glow-accent";
      case "Learning": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl border border-primary/30 glow-primary inline-block animate-scale-breath">
              <Code2 className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text" style={{ backgroundSize: '200% 200%' }}>Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            A powerful combination of technical mastery and essential soft skills driving innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Technical Skills Card */}
          <Card className="p-10 glass-strong border-primary/30 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-elegant hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <h3 className="text-3xl md:text-4xl font-black mb-8 flex items-center relative z-10">
              <div className="bg-primary/15 p-3 rounded-xl mr-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-primary/30">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              Technical Skills
            </h3>
            
            <div className="space-y-5 relative z-10">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="relative p-6 rounded-xl glass border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-glow cursor-pointer group/item overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.05}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover/item:opacity-10 transition-opacity duration-500`} />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center justify-between relative z-10 mb-4">
                    <div className="flex items-center">
                      <div className="bg-primary/15 p-3 rounded-xl mr-4 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 border border-primary/20">
                        <skill.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-bold text-xl md:text-2xl">{skill.name}</span>
                    </div>
                    <Badge className={`${getLevelColor(skill.level)} transition-all duration-500 group-hover/item:scale-110 text-sm px-4 py-2 font-bold`}>
                      {skill.level}
                    </Badge>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative h-3 bg-muted/30 rounded-full overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{ 
                        width: hoveredSkill === skill.name ? `${skill.percentage}%` : "0%",
                        boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}` : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </div>
                    {hoveredSkill === skill.name && (
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white z-10">
                        {skill.percentage}%
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills Card */}
          <Card className="p-10 glass-strong border-accent/30 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-elegant hover:border-accent/50">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            
            <h3 className="text-3xl md:text-4xl font-black mb-8 flex items-center relative z-10">
              <div className="bg-accent/15 p-3 rounded-xl mr-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-accent/30">
                <Users className="h-8 w-8 text-accent" />
              </div>
              Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="relative p-6 rounded-xl glass border border-accent/20 hover:border-accent/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-glow cursor-pointer group/item shine overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.05}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/item:opacity-15 transition-opacity duration-500`} />
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 glow-accent" />
                  
                  <div className="flex items-center relative z-10">
                    <div className={`bg-gradient-to-br ${skill.color} p-4 rounded-xl mr-4 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 shadow-lg`}>
                      <skill.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="font-bold text-lg md:text-xl">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
