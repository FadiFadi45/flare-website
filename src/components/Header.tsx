import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Play className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-glow">Flare Media</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">Services</a>
            <a href="#productions" className="text-foreground hover:text-primary transition-smooth">Productions</a>
            <a href="#channels" className="text-foreground hover:text-primary transition-smooth">Channels</a>
            <a href="#creators" className="text-foreground hover:text-primary transition-smooth">Talent</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="minimal">
              Get Media Kit
            </Button>
            <Button variant="default">
              Start Project
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;