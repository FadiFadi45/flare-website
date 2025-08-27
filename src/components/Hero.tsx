import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-cinematic-new.jpg";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const socialLinks = [
  { icon: Youtube, label: "YouTube", url: "#" },
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
  { icon: Linkedin, label: "LinkedIn", url: "#" }
];

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


          {/* Enhanced Subtitle with better spacing */}
          <AnimatedSection delay={0.6}>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Premium digital content production, channel management, and influencer marketing across TV, film, and social media platforms.
            </p>
          </AnimatedSection>


        </motion.div>

        {/* Enhanced Follow Us Section */}
        <AnimatedSection delay={1.0}>
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 bg-background/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-primary/20">
              <div className="text-center">
                <motion.p 
                  className="text-sm font-semibold text-gradient-logo mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  Follow Our Journey
                </motion.p>
                <motion.div 
                  className="flex items-center space-x-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.6 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      custom={index}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-12 w-12 p-0 rounded-2xl gradient-card border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 group"
                        asChild
                      >
                        <a href={social.url} aria-label={social.label}>
                          <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  className="mt-4 text-xs text-muted-foreground/80"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.6 }}
                >
                  Stay connected with latest updates
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
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