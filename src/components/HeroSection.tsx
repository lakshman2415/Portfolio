import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, Sparkles, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const a = document.createElement('a');
    a.href = '/Lakshman_Resume.pdf';
    a.download = 'Lakshmana_Kumar_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-60" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-float ${6 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              '--tx': `${(Math.random() - 0.5) * 150}px`,
              '--ty': `${(Math.random() - 0.5) * 150}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Premium Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"
          animate={{ 
            x: mousePosition.x * 0.5, 
            y: mousePosition.y * 0.5,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
          animate={{ 
            x: -mousePosition.x * 0.5, 
            y: -mousePosition.y * 0.5,
            scale: [1, 1.08, 1],
          }}
          transition={{ 
            x: { duration: 0.8, ease: "easeOut" },
            y: { duration: 0.8, ease: "easeOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full animate-rotate-slow" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              {/* Badge */}
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 backdrop-blur-sm">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground glass-strong px-5 py-2.5 rounded-full">
                  <Sparkles className="inline h-4 w-4 mr-2 text-accent" />
                  Available for Opportunities
                </span>
              </motion.div>
              
              {/* Title */}
              <div>
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  Hi, I'm{" "}
                  <span className="gradient-text inline-block" style={{ backgroundSize: '200% 200%' }}>
                    K. Lakshmana Kumar
                  </span>
                </motion.h1>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xl md:text-2xl text-muted-foreground">
                    A passionate <strong className="text-foreground font-bold">B.Tech Student</strong> at{" "}
                    <span className="text-primary font-bold">NRI Institute of Technology</span>
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Aspiring <strong className="text-foreground font-bold">Software & Web Developer</strong>
                  </p>
                </motion.div>
              </div>
              
              {/* Quote */}
              <motion.blockquote 
                className="text-lg md:text-xl italic text-accent font-semibold glass-strong p-6 rounded-2xl inline-block border border-accent/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                "Learning by building. Growing by solving."
              </motion.blockquote>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="hover:scale-105 transition-all duration-300 shine group text-base px-7 py-5 rounded-xl font-semibold shadow-elegant"
                >
                  <Laptop className="h-5 w-5 mr-2 group-hover:rotate-6 transition-transform" />
                  View My Work
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={downloadResume}
                  className="glass-strong border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 text-base px-7 py-5 rounded-xl font-semibold"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={scrollToContact}
                  className="glass-strong border-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300 text-base px-7 py-5 rounded-xl font-semibold"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>

            {/* Right - Profile Photo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative group">
                {/* Decorative ring */}
                <div className="absolute -inset-6 border border-primary/10 rounded-full animate-rotate-slow pointer-events-none" />
                
                {/* Photo container */}
                <motion.div 
                  className="relative cursor-pointer"
                  animate={{
                    x: -mousePosition.x * 0.4,
                    y: -mousePosition.y * 0.4,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-3xl border-2 border-primary/20 shadow-elegant group-hover:border-primary/40 transition-all duration-500">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-60 group-hover:opacity-30 transition-opacity duration-500 z-10" />
                    
                    {/* Photo */}
                    <img 
                      src={profilePhoto} 
                      alt="K. Lakshmana Kumar - Software Developer" 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div 
          className="w-7 h-12 border-2 border-primary/30 rounded-full flex justify-center glass"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
