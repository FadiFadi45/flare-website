import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/871b753f-ac14-4513-8da8-8f974ba0ea9c.png" 
                alt="Flare Media Logo" 
                className="h-10 w-auto transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 gradient-logo transition-smooth"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#productions" className="nav-link">Productions</a>
            <a href="#channels" className="nav-link">Channels</a>
            <a href="#creators" className="nav-link">Talent</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary/10 transition-smooth group">
            <Menu className="w-5 h-5 group-hover:text-primary transition-smooth" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;