import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-professional.jpg";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { staggerContainer, fadeInUp, scaleIn, glowPulse } from "@/lib/animations";

// Sample reels data - replace with actual content
const reels = [
  {
    id: 1,
    title: "Brand Campaign",
    thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "0:30",
    views: "2.5M"
  },
  {
    id: 2,
    title: "Social Media Series",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "1:15",
    views: "1.8M"
  },
  {
    id: 3,
    title: "Product Launch",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "0:45",
    views: "3.2M"
  },
  {
    id: 4,
    title: "Documentary Short",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "2:30",
    views: "4.1M"
  }
];

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset"
    >
      {/* Optimized Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: "translateZ(0)", // Force GPU acceleration
          y 
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-background/70 backdrop-blur-sm will-change-opacity"
          style={{ opacity }}
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-lg rounded-full px-6 py-3 mb-8">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Award-Winning Digital Content Studio</span>
              </div>
            </AnimatedSection>

            {/* Main Headline */}
            <AnimatedSection delay={0.4}>
              <h1 className="mb-6">
                Creating <span className="text-gradient-logo">Viral Content</span><br />
                That Converts
              </h1>
            </AnimatedSection>

            {/* Subtitle */}
            <AnimatedSection delay={0.6}>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl lg:mx-0 mx-auto">
                Premium digital content production, channel management, and influencer marketing across TV, film, and social media platforms.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <Button variant="hero" size="lg" className="group">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Our Work
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <Button variant="minimal" size="lg">
                    Start Your Project
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { number: "500M+", label: "Total Views" },
                { number: "250+", label: "Creators Managed" },
                { number: "50+", label: "Original Productions" },
                { number: "15+", label: "Platform Partners" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center lg:text-left"
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-gradient-logo mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Reels Showcase */}
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <AnimatedSection delay={1.2}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gradient-logo">Featured Reels</h3>
                <p className="text-muted-foreground">Our latest viral content</p>
              </div>
            </AnimatedSection>

            {/* Reels Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {reels.map((reel, index) => (
                <motion.div
                  key={reel.id}
                  className="relative group cursor-pointer"
                  variants={scaleIn}
                  custom={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Reel Card */}
                  <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-hero hover:shadow-glow transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <img 
                        src={reel.thumbnail} 
                        alt={reel.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      
                      {/* Play Button */}
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors duration-300">
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </motion.div>

                      {/* Duration Badge */}
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                        <span className="text-white text-xs font-medium">{reel.duration}</span>
                      </div>

                      {/* Views Badge */}
                      <div className="absolute bottom-3 left-3 bg-gradient-to-r from-primary/80 to-accent/80 backdrop-blur-sm rounded-lg px-2 py-1">
                        <span className="text-white text-xs font-medium">{reel.views}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h4 className="font-semibold text-sm mb-2 text-foreground group-hover:text-primary transition-colors">
                        {reel.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Tap to play</span>
                        <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Button */}
            <AnimatedSection delay={1.6} className="text-center mt-8">
              <Button variant="outline" size="sm" className="group">
                View All Reels
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
          transition: {
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;