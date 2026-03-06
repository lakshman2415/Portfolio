import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Rocket, Target, Code, Briefcase, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const ExploringSection = () => {
  const explorationAreas = [
    {
      title: "Self-driven coding projects",
      description: "Building real applications to solve problems and learn new technologies",
      icon: Code,
      color: "text-primary"
    },
    {
      title: "Certification learning", 
      description: "Continuously expanding knowledge through structured online courses",
      icon: BookOpen,
      color: "text-accent"
    },
    {
      title: "Freelance preparation",
      description: "Developing skills and portfolio for freelance web and app development",
      icon: Briefcase,
      color: "text-primary"
    },
    {
      title: "Internship readiness",
      description: "Building practical experience and industry-relevant skills",
      icon: Target,
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔍 <span className="bg-hero-gradient bg-clip-text text-transparent">Currently Exploring</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Although I haven't worked in internships yet, I'm actively building real-world skills through focused learning and hands-on practice.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-8 shadow-card bg-card-gradient">
              <div className="flex items-center mb-8">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Building Real-World Skills</h3>
                  <p className="text-muted-foreground">Preparing for the next phase of my career journey</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {explorationAreas.map((area, index) => (
                  <motion.div 
                    key={area.title}
                    className="p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 border border-border/50 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <area.icon className={`h-5 w-5 ${area.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{area.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-accent/5 p-6 rounded-lg border border-accent/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-accent mr-2" />
                  <Badge variant="outline" className="bg-accent/10 border-accent/30 text-accent">
                    Actively Seeking Opportunities
                  </Badge>
                </div>
                <p className="text-center text-muted-foreground">
                  Ready to contribute to meaningful projects and gain professional experience in 
                  <strong className="text-foreground"> web development</strong> and 
                  <strong className="text-foreground"> software engineering</strong>.
                </p>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploringSection;
