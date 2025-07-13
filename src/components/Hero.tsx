import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-production.jpg";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { AnimatedButton } from "@/components/animations/AnimatedButton";
import { staggerContainer, fadeInUp, scaleIn, glowPulse } from "@/lib/animations";

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
          className="absolute inset-0 bg-background/60 backdrop-blur-sm will-change-opacity"
          style={{ opacity }}
        ></motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
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


          {/* Subtitle */}
          <AnimatedSection delay={0.8}>
            <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
              Premium digital content production, channel management, and influencer marketing across TV, film, and social media platforms.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            variants={staggerContainer}
          >
            {[
              { number: "500M+", label: "Total Views" },
              { number: "250+", label: "Creators Managed" },
              { number: "50+", label: "Original Productions" },
              { number: "15+", label: "Platform Partners" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl font-bold text-gradient-logo mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator with Animation */}
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