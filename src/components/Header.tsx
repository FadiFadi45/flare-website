import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/871b753f-ac14-4513-8da8-8f974ba0ea9c.png" 
              alt="Flare Media Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-smooth scroll-smooth">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth scroll-smooth">Services</a>
            <a href="#productions" className="text-foreground hover:text-primary transition-smooth scroll-smooth">Productions</a>
            <a href="#channels" className="text-foreground hover:text-primary transition-smooth scroll-smooth">Channels</a>
            <a href="#creators" className="text-foreground hover:text-primary transition-smooth scroll-smooth">Talent</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth scroll-smooth">Contact</a>
          </nav>

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