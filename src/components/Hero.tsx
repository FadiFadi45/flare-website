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

      {/* Content with Professional Messaging */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Professional Headline */}
          <AnimatedSection delay={0.2}>
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold mb-6 text-gradient-logo leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Premium Digital Content Studio
            </motion.h1>
          </AnimatedSection>

          {/* Clear Value Proposition */}
          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Transforming brands through strategic content creation, professional video production, and comprehensive digital channel management
            </h2>
          </AnimatedSection>

          {/* Professional Services Overview */}
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <motion.div 
                className="bg-secondary/60 backdrop-blur-md rounded-xl p-6 shadow-soft border border-border/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px hsl(267 65% 55% / 0.3)",
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Video Production</h3>
                <p className="text-muted-foreground text-sm">Premium content creation for TV, film, and digital platforms</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary/60 backdrop-blur-md rounded-xl p-6 shadow-soft border border-border/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px hsl(267 65% 55% / 0.3)",
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Channel Management</h3>
                <p className="text-muted-foreground text-sm">Strategic management across all digital and social platforms</p>
              </motion.div>
              
              <motion.div 
                className="bg-secondary/60 backdrop-blur-md rounded-xl p-6 shadow-soft border border-border/20"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px hsl(267 65% 55% / 0.3)",
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Talent Management</h3>
                <p className="text-muted-foreground text-sm">Professional influencer and creator partnership programs</p>
              </motion.div>
            </div>
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