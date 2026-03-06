import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle, Send, Instagram } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  const contactMethods = [
    {
      name: "Email",
      value: "lakshmankoriwada@gmail.com",
      href: "mailto:lakshmankoriwada@gmail.com",
      icon: Mail,
      description: "Get in touch via email",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/lakshman-koriwada-985a032b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
      description: "Professional networking",
      color: "from-blue-600 to-blue-400",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      name: "Instagram",
      value: "Follow me",
      href: "https://www.instagram.com/lakshman_alone_boy?igsh=MW13ZmpoOGpjb2hpeQ==",
      icon: Instagram,
      description: "Personal updates",
      color: "from-pink-500 to-purple-500",
      iconColor: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      name: "GitHub",
      value: "View my code",
      href: "https://github.com/account",
      icon: Github,
      description: "Check out my repositories",
      color: "from-gray-600 to-gray-400",
      iconColor: "text-foreground",
      bgColor: "bg-gray-600/10"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Elite Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/15 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              '--tx': `${(Math.random() - 0.5) * 150}px`,
              '--ty': `${(Math.random() - 0.5) * 150}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="bg-primary/10 p-4 rounded-2xl border border-primary/30 glow-primary inline-block animate-scale-breath">
              <MessageCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text" style={{ backgroundSize: '200% 200%' }}>Let's Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl md:text-2xl font-medium">
            Ready for opportunities, collaborations, and exciting conversations!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-12 glass-strong border-primary/30 hover-3d preserve-3d group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="text-center mb-12 relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4">Get In Touch</h3>
              <p className="text-muted-foreground text-lg font-medium max-w-2xl mx-auto">
                Always excited to discuss new opportunities and learn from fellow developers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10 perspective-2000">
              {contactMethods.map((method, index) => (
                <div 
                  key={method.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredMethod(method.name)}
                  onMouseLeave={() => setHoveredMethod(null)}
                >
                  <a 
                    href={method.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="h-full p-8 rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-500 hover-3d-extreme cursor-pointer group/item shine overflow-hidden relative">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover/item:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Icon */}
                      <div className={`${method.bgColor} p-5 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 border-2 border-white/10 relative z-10`}>
                        <method.icon className={`h-10 w-10 ${method.iconColor}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="text-center relative z-10">
                        <h4 className="font-black text-xl text-foreground mb-2">{method.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2 font-medium">{method.description}</p>
                        <p className="text-sm font-bold text-primary">{method.value}</p>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/item:translate-x-[200%] transition-transform duration-1500" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="relative z-10 p-10 glass-strong rounded-2xl border-2 border-primary/30 text-center hover-tilt glow-intense">
              <h4 className="font-black text-2xl mb-3 gradient-text" style={{ backgroundSize: '200% 200%' }}>
                Ready to Collaborate?
              </h4>
              <p className="text-muted-foreground mb-6 text-lg font-medium max-w-2xl mx-auto">
                Whether it's for internships, freelance projects, or mentorship opportunities, 
                I'm eager to contribute and learn.
              </p>
              <Button 
                asChild 
                className="glow-intense hover:scale-110 transition-all duration-500 shine text-lg px-10 py-7 rounded-xl font-black"
              >
                <a href="mailto:lakshmankoriwada@gmail.com">
                  <Send className="h-6 w-6 mr-3" />
                  Send Message
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
