import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, GamepadIcon, BookOpen, Sparkles } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      title: "PyMind Quiz Game",
      description: "A multiplayer Python quiz platform designed to test and strengthen coding skills from basics to advanced.",
      icon: GamepadIcon,
      link: "https://py-mind-arena-quest-lakshman.lovable.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      features: ["Gamified UI", "Multiplayer Support", "Skill Testing", "Progress Tracking"],
      color: "from-primary to-blue-500",
      gradient: "bg-gradient-to-br from-primary/20 to-blue-500/20"
    },
    {
      title: "Bitcoin Guidebook",
      description: "A visual and beginner-friendly guide explaining what Bitcoin is, how it works, and why it matters.",
      icon: BookOpen,
      link: "https://bitcoin-guidebook.lovable.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Education-first design", "Visual Learning", "Beginner Friendly", "Interactive Content"],
      color: "from-accent to-purple-500",
      gradient: "bg-gradient-to-br from-accent/20 to-purple-500/20"
    },
    {
      title: "Demo College Website",
      description: "A full-stack college portal built with the MERN stack, featuring student resources, campus info, and a modern responsive design.",
      icon: BookOpen,
      link: "https://nri-poratl-mern-stack.vercel.app/",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      features: ["Full-Stack MERN", "Responsive Design", "Student Portal", "Dynamic Content"],
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-20" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'grid-move 30s linear infinite'
        }} />
      </div>

      {/* Elite Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-rotate-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl border border-primary/30 glow-primary inline-block animate-scale-breath">
              <Code className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text" style={{ backgroundSize: '200% 200%' }}>Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            Real-world applications showcasing innovation, creativity, and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group relative p-10 glass-strong border-primary/30 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-elegant hover:border-primary/50"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`,
                padding: '2px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }} />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500" />
              </div>

              {/* Floating particles on hover */}
              {hoveredProject === project.title && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/50 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `particle-float ${2 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                        '--tx': `${(Math.random() - 0.5) * 100}px`,
                        '--ty': `${(Math.random() - 0.5) * 100}px`,
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              )}

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`bg-gradient-to-br ${project.color} p-5 rounded-2xl shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 border-2 border-white/20`}>
                    <project.icon className="h-10 w-10 text-white" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="glass-strong opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-125 glow-intense hover:rotate-12"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:gradient-text transition-all duration-500">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg font-medium">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold mb-3 text-foreground flex items-center uppercase tracking-wider">
                      <Code className="h-5 w-5 mr-2 text-primary" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={tech} 
                          className="text-sm px-4 py-2 hover:scale-125 transition-all duration-300 shine font-bold bg-primary/20 text-primary border-primary/30 hover:bg-primary/30"
                          style={{ 
                            animationDelay: `${i * 0.1}s`,
                            transform: hoveredProject === project.title ? 'scale(1.05)' : 'scale(1)'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-bold mb-3 text-foreground flex items-center uppercase tracking-wider">
                      <Sparkles className="h-5 w-5 mr-2 text-accent" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.features.map((feature, i) => (
                        <Badge 
                          key={feature} 
                          className="text-sm px-4 py-2 hover:scale-125 transition-all duration-300 shine font-bold bg-accent/20 text-accent border-accent/30 hover:bg-accent/30"
                          style={{ 
                            animationDelay: `${i * 0.1}s`,
                            transform: hoveredProject === project.title ? 'scale(1.05)' : 'scale(1)'
                          }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8 border-t-2 border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                  <Button 
                    asChild 
                    className={`w-full bg-gradient-to-r ${project.color} text-white glow-intense hover:glow-intense group-hover:scale-110 transition-all duration-500 shine text-lg py-7 rounded-xl font-black shadow-2xl`}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <Code className="h-6 w-6 mr-3" />
                      View Live Project
                      <ExternalLink className="h-6 w-6 ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
