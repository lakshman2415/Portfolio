import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Code, Coffee, Brain, Globe } from "lucide-react";
import { useState } from "react";

const CertificationsSection = () => {
  const [hoveredCert, setHoveredCert] = useState<string | null>(null);

  const certifications = [
    {
      name: "Python Programming Course",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "Java Programming Course", 
      icon: Coffee,
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "AI Basics Course",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      name: "HTML & Web Development Course",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section id="certifications" className="py-32 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-20" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-accent/10 p-4 rounded-2xl border border-accent/30 glow-accent inline-block animate-scale-breath">
              <Award className="h-12 w-12 text-accent" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text" style={{ backgroundSize: '200% 200%' }}>Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            Continuous learning through structured courses validating expertise and dedication.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-12 glass-strong border-primary/30 hover-3d preserve-3d group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center mb-12 relative z-10">
              <div className="bg-accent/15 p-4 rounded-2xl mr-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-accent/30">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black">Completed Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12 relative z-10">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.name}
                  className="relative group/item cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCert(cert.name)}
                  onMouseLeave={() => setHoveredCert(null)}
                >
                  <div className="flex items-center p-6 rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-500 hover-3d shine overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover/item:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className={`${cert.bgColor} p-4 rounded-2xl mr-4 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 relative z-10 border-2 border-white/10`}>
                      <cert.icon className={`h-8 w-8 ${cert.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-lg text-foreground pr-2">
                          {cert.name}
                        </h4>
                        <CheckCircle className={`h-7 w-7 text-green-500 ml-2 transition-all duration-500 ${hoveredCert === cert.name ? 'scale-125 rotate-12' : ''}`} />
                      </div>
                    </div>

                    {/* Animated shine */}
                    <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 p-8 glass-strong rounded-2xl border-2 border-accent/30 text-center hover-tilt glow-accent">
              <div className="flex items-center justify-center mb-4">
                <Badge className="bg-accent/20 text-accent border-accent/40 text-lg px-6 py-3 font-black hover:scale-110 transition-transform">
                  ✅ All Certifications Completed
                </Badge>
              </div>
              <p className="text-muted-foreground text-lg font-medium">
                Ready to apply these skills in real-world projects and continue the learning journey.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
