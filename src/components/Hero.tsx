import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-professional.jpg";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset"
    >
      {/* Lighter, More Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: "translateZ(0)", // Force GPU acceleration
          y 
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-background/50 backdrop-blur-[2px] will-change-opacity"
          style={{ opacity }}
        ></motion.div>
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 gradient-fresh opacity-60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Badge with dynamic effects */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="inline-flex items-center space-x-2 bg-secondary/60 backdrop-blur-md rounded-full px-6 py-3 mb-8 shadow-soft border border-border/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px -8px hsl(267 65% 55% / 0.3)",
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-medium">Award-Winning Digital Content Studio</span>
            </motion.div>
          </AnimatedSection>


          {/* Enhanced Subtitle with better spacing */}
          <AnimatedSection delay={0.6}>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium digital content production, channel management, and influencer marketing across TV, film, and social media platforms.
            </p>
          </AnimatedSection>


        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 12, 0],
          transition: {
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
          }
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center shadow-soft backdrop-blur-sm bg-background/10">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 14, 0],
              opacity: [1, 0.4, 1],
              scale: [1, 0.8, 1]
            }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;