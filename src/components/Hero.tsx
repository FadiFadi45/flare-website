import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Youtube, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-cinematic-brand.jpg";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#", color: "from-pink-500 to-orange-400" },
  { icon: Youtube, label: "YouTube", url: "#", color: "from-red-500 to-red-600" },
  { icon: Facebook, label: "Facebook", url: "#", color: "from-blue-500 to-blue-600" },
  { icon: Twitter, label: "Twitter", url: "#", color: "from-blue-400 to-blue-500" }
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

        {/* Modern Connect & Create Section */}
        <AnimatedSection delay={1.0}>
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main Container */}
              <div className="mx-auto max-w-md">
                {/* Header Section */}
                <div className="text-center mb-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gradient-logo mb-3 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    Connect & Create
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground/90 font-medium tracking-wide"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    Join our creative community
                  </motion.p>
                </div>

                {/* Social Icons Grid */}
                <motion.div 
                  className="flex items-center justify-center gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.8 }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 20 },
                        visible: { 
                          opacity: 1, 
                          scale: 1, 
                          y: 0,
                          transition: { 
                            delay: index * 0.1,
                            duration: 0.5,
                            ease: "easeOut"
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        y: -8,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="relative h-14 w-14 p-0 rounded-2xl bg-background/10 backdrop-blur-xl border border-white/10 hover:border-primary/30 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                        asChild
                      >
                        <a href={social.url} aria-label={social.label}>
                          {/* Gradient Background */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-accent/20" />
                          
                          {/* Icon */}
                          <social.icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors duration-300 relative z-10" />
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-xl" />
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Tagline */}
                <motion.div 
                  className="text-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                >
                  <p className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">
                    Stay Connected
                  </p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-2 h-2 bg-primary/30 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-2 h-2 bg-accent/30 rounded-full blur-sm"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
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