import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Code className="h-4 w-4" />
            <span>Portfolio of a learning-driven student developer</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <strong className="text-foreground">K. Lakshmana Kumar</strong> © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;