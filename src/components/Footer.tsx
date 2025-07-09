import { Button } from "@/components/ui/button";
import { Play, Youtube, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-glow">Flare Media</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium digital content production, channel management, and influencer marketing 
              across TV, film, and social media platforms.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Content Production</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Channel Management</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Influencer Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Social Media Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Copyright Protection</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Monetization</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#productions" className="hover:text-primary transition-smooth">Productions</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Partners</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest industry insights and behind-the-scenes content.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 h-9 px-3 py-1 text-sm bg-background border border-input rounded-md"
                />
                <Button variant="default" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Flare Media LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;