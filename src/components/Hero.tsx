import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Youtube, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-cinematic-brand.jpg";
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
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-tight sm:leading-relaxed tracking-wide drop-shadow-lg shadow-black/50">
                  Own the Legacy. Stream the Culture. Relive the Moments — with FLARE
                </p>
                
                {/* Feature Pills - Simplified for mobile */}
                <motion.div 
                  className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  {[
                    { text: "Premium Production", show: "flex" },
                    { text: "Channel Management", show: "flex" }, 
                    { text: "Strategic Marketing", show: "hidden sm:flex" },
                    { text: "Multi-Platform Distribution", show: "hidden sm:flex" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      className={`${feature.show} flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-background/30 backdrop-blur-sm border border-primary/30 rounded-full text-xs sm:text-sm font-medium text-foreground drop-shadow-md hover:text-primary hover:border-primary/60 transition-all duration-300`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary/60 rounded-full mr-1.5 sm:mr-2" />
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Secondary Description - Hidden on mobile with 3D Scroll Animation */}
                <div className="hidden sm:block">
                  <ScrollText3D className="text-sm sm:text-base lg:text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md shadow-black/40 px-4 sm:px-0">
                    At FLARE, we bring iconic series back to life — digitally. As proud owners of timeless IPs, we transform nostalgia into streaming experiences that resonate with today's audiences. From classic drama to cultural gems, our content bridges generations and platforms, making heritage accessible, engaging, and monetizable across social media.
                  </ScrollText3D>
                </div>
              </motion.div>
              
              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden sm:block absolute -top-2 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
              <div className="hidden sm:block absolute -bottom-2 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </AnimatedSection>


        </motion.div>

        {/* Modern Connect & Create Section */}
        <AnimatedSection delay={1.0}>
          <motion.div 
            className="mt-12 sm:mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative px-4 sm:px-0">
              {/* Main Container */}
              <div className="mx-auto max-w-sm sm:max-w-md">
                {/* Header Section - Simplified for mobile */}
                <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                  <motion.h3 
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient-logo mb-1 sm:mb-2 tracking-tight drop-shadow-lg shadow-black/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    Connect & Create
                  </motion.h3>
                  <motion.p 
                    className="hidden sm:block text-xs sm:text-sm text-foreground/95 font-medium tracking-wide drop-shadow-md shadow-black/40"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    Join our creative community
                  </motion.p>
                </div>

                {/* Social Icons Grid */}
                <motion.div 
                  className="flex items-center justify-center gap-3 sm:gap-4"
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
                        scale: 1.1,
                        y: -4,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="relative h-12 w-12 sm:h-14 sm:w-14 p-0 rounded-xl sm:rounded-2xl bg-background/10 backdrop-blur-xl border border-white/10 hover:border-primary/30 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                        asChild
                      >
                        <a href={social.url} aria-label={social.label}>
                          {/* Gradient Background */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-accent/20" />
                          
                          {/* Icon */}
                          <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/80 group-hover:text-primary transition-colors duration-300 relative z-10" />
                          
                          {/* Glow Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-xl sm:rounded-2xl blur-xl" />
                          </div>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Tagline - Hidden on mobile */}
                <motion.div 
                  className="hidden sm:block text-center mt-4 sm:mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                >
                  <p className="text-xs text-muted-foreground/60 font-medium tracking-wider uppercase">
                    Stay Connected
                  </p>
                </motion.div>
              </div>

              {/* Decorative Elements - Hidden on mobile */}
              <motion.div 
                className="hidden sm:block absolute -top-4 -left-4 w-2 h-2 bg-primary/30 rounded-full blur-sm"
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
                className="hidden sm:block absolute -bottom-4 -right-4 w-2 h-2 bg-accent/30 rounded-full blur-sm"
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