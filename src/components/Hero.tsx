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
        {/* Professional brand gradient overlay */}
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
        <div className="absolute inset-0 gradient-fresh opacity-40"></div>
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
              className="text-6xl lg:text-8xl font-bold mb-8 text-gradient-logo leading-tight text-glow"
              whileHover={{ scale: 1.02 }}
            >
              Premium Digital Studio
            </motion.h1>
          </AnimatedSection>

          {/* Clear Value Proposition */}
          <AnimatedSection delay={0.4}>
            <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through strategic content creation, 
              <span className="text-gradient-primary font-semibold"> innovative video production</span>, and 
              <span className="text-gradient-secondary font-semibold"> comprehensive channel management</span>
            </h2>
          </AnimatedSection>

          {/* Professional Services Overview */}
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <motion.div 
                className="gradient-card backdrop-blur-md rounded-2xl p-8 shadow-card border border-primary/10 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="absolute inset-0 gradient-primary opacity-5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gradient-primary">Video Production</h3>
                  <p className="text-muted-foreground">Premium content creation for TV, film, and digital platforms with cinematic quality</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="gradient-card backdrop-blur-md rounded-2xl p-8 shadow-secondary border border-secondary/10 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="absolute inset-0 gradient-secondary opacity-5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-secondary">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gradient-secondary">Channel Management</h3>
                  <p className="text-muted-foreground">Strategic management across all digital and social platforms for maximum engagement</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="gradient-card backdrop-blur-md rounded-2xl p-8 shadow-accent border border-accent/10 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <div className="absolute inset-0 gradient-accent opacity-5"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-accent">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gradient-logo">Talent Management</h3>
                  <p className="text-muted-foreground">Professional influencer and creator partnership programs with proven results</p>
                </div>
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
        <div className="w-6 h-10 border-2 border-gradient-primary rounded-full flex justify-center shadow-glow backdrop-blur-sm bg-background/20">
          <motion.div 
            className="w-1 h-3 gradient-primary rounded-full mt-2 shadow-glow"
            animate={{ 
              y: [0, 14, 0],
              opacity: [1, 0.6, 1],
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