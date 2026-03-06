import PortfolioHeader from "@/components/PortfolioHeader";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExploringSection from "@/components/ExploringSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import AIchatbot from "@/components/AIchatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ExploringSection />
      <ContactSection />
      <Footer />
      <Chatbot />
      <AIchatbot />
    </div>
  );
};

export default Index;
