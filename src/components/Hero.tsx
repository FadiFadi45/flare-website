import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-professional-studio.jpg";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset bg-background"
    >
      {/* Dark Cinematic Background with Subtle Texture */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform opacity-20"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: "translateZ(0)", // Force GPU acceleration
          y 
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-background/95 backdrop-blur-[3px] will-change-opacity"
          style={{ opacity }}
        ></motion.div>
      </motion.div>

      {/* Cinematic gradient overlays for depth */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 gradient-cinematic opacity-60"></div>

      {/* Content with Modern Typography Hierarchy */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Professional Services with Balanced Color Usage */}
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              {/* Video Production - Primary accent with softened pink */}
              <motion.div 
                className="bg-card/60 backdrop-blur-xl rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-hero hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="absolute inset-0 gradient-primary opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-secondary/40">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-secondary-glow">Video Production</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">Premium content creation for TV, film, and digital platforms with cinematic quality and professional storytelling</p>
                </div>
              </motion.div>
              
              {/* Channel Management - Accent color for secondary importance */}
              <motion.div 
                className="bg-card/60 backdrop-blur-xl rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-accent hover:border-accent/30 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="absolute inset-0 gradient-accent opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-accent/40">
                    <ArrowRight className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-accent-glow">Channel Management</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">Strategic management across all digital and social platforms for maximum engagement and growth</p>
                </div>
              </motion.div>
              
              {/* Talent Management - Primary pink accent (subtle) */}
              <motion.div 
                className="bg-card/60 backdrop-blur-xl rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="absolute inset-0 gradient-primary opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow/40">
                    <Star className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-4 text-primary-glow">Talent Management</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">Professional influencer and creator partnership programs with proven results and strategic growth</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

        </motion.div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
          transition: {
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
          }
        }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-6 h-10 border-2 border-secondary/40 rounded-full flex justify-center backdrop-blur-sm bg-card/20">
          <motion.div 
            className="w-1 h-3 bg-secondary/60 rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;