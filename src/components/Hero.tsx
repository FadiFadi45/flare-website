import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Youtube, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-cinematic-new.jpg";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { ScrollText3D } from "@/components/animations/ScrollText3D";
import { HeroEffects } from "@/components/animations/HeroEffects";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/flare.media0/", color: "from-pink-500 to-orange-400" },
  { icon: Youtube, label: "YouTube", url: "https://www.youtube.com/@FlareArtsMedia", color: "from-red-500 to-red-600" },
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/Flare.media0/", color: "from-blue-500 to-blue-600" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/flare-media-llc/", color: "from-blue-600 to-blue-700" }
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
          className="absolute inset-0 bg-background/15 will-change-opacity"
          style={{ opacity }}
        ></motion.div>
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 gradient-fresh opacity-20"></div>
      </motion.div>

      {/* Animated Effects Layer */}
      <HeroEffects />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Title - Hidden on mobile */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 sm:mb-8 hidden sm:block"
            >
              <motion.div
                className="h-1 w-16 sm:w-24 bg-gradient-primary rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.div>
          </AnimatedSection>

          {/* Professional Subtitle with Enhanced Design */}
          <AnimatedSection delay={0.6}>
            <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              {/* Main Subtitle */}
              <motion.div
                className="relative px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-8 sm:mb-12 lg:mb-16 leading-tight sm:leading-relaxed tracking-wide drop-shadow-lg shadow-black/50">
                  Own the Legacy. Stream the Culture. Relive the Moments — with FLARE
                </p>
                
                {/* Secondary Description - Hidden on mobile */}
                <motion.p
                  className="hidden sm:block text-sm sm:text-base lg:text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md shadow-black/40 px-4 sm:px-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                >
                  At FLARE, we bring iconic series back to life — digitally. As proud owners of timeless IPs, we transform nostalgia into streaming experiences that resonate with today's audiences. From classic drama to cultural gems, our content bridges generations and platforms, making heritage accessible, engaging, and monetizable across social media.
                </motion.p>
              </motion.div>
              
              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-2 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
              <div className="hidden sm:block absolute -bottom-2 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </AnimatedSection>


        </motion.div>

      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 8, 0],
          transition: {
            opacity: { delay: 2, duration: 0.5 },
            y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
          }
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/60 rounded-full flex justify-center shadow-soft backdrop-blur-sm bg-background/10">
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2"
            animate={{ 
              y: [0, 10, 0],
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