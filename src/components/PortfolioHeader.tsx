import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PortfolioHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
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
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-primary/20 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-lg font-bold gradient-text cursor-pointer hover:scale-105 transition-transform whitespace-nowrap mr-4"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            LK
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['skills', 'projects', 'certifications', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={downloadResume}
              className="glass hover:glow-primary transition-all hover:scale-105 shine"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass hover:glow-primary transition-all hover:scale-110" 
              asChild
            >
              <a href="mailto:lakshmankoriwada@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass hover:glow-primary transition-all hover:scale-110" 
              asChild
            >
              <a href="https://github.com/account" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="glass hover:glow-primary transition-all hover:scale-110" 
              asChild
            >
              <a href="https://www.linkedin.com/in/lakshman-koriwada-985a032b9" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass rounded-lg p-4 animate-fade-in border border-primary/20">
            <nav className="flex flex-col space-y-4">
              {['skills', 'projects', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-2 hover:translate-x-2 transition-transform"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                onClick={downloadResume}
                className="w-full glass border-primary/20"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              <div className="flex space-x-2 pt-2">
                <Button variant="ghost" size="icon" className="flex-1 glass" asChild>
                  <a href="mailto:lakshmankoriwada@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="flex-1 glass" asChild>
                  <a href="https://github.com/account" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="flex-1 glass" asChild>
                  <a href="https://www.linkedin.com/in/lakshman-koriwada-985a032b9" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default PortfolioHeader;
