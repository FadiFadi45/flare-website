import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-lg rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-base font-semibold">Award-Winning Digital Content Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none font-display">
            <span className="text-gradient-logo animate-glow-pulse">Flare Media</span>
            <br />
            <span className="text-gradient-logo">
              Creates Stories
            </span>
            <br />
            <span className="font-heading">That Ignite</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Premium digital content production, channel management, and influencer marketing across TV, film, and social media platforms.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-logo mb-3 font-display">500M+</div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-logo mb-3 font-display">250+</div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">Creators Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-logo mb-3 font-display">50+</div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">Original Productions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-logo mb-3 font-display">15+</div>
              <div className="text-base md:text-lg text-muted-foreground font-medium">Platform Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;