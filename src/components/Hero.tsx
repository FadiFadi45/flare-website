import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Youtube, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
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
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-offset"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-background/15"></div>
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 gradient-fresh opacity-20"></div>
      </div>

      {/* Animated Effects Layer */}
      <HeroEffects />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-12 min-h-[60vh]">
          {/* Left Side - Title and Description */}
          <motion.div 
            className="flex-1 text-left max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Title Line */}
            <AnimatedSection>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6 sm:mb-8 hidden sm:block"
              >
                <motion.div
                  className="h-1 w-16 sm:w-24 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </motion.div>
            </AnimatedSection>

            {/* Professional Subtitle with Enhanced Design */}
            <AnimatedSection delay={0.6}>
              <div className="relative mb-8 sm:mb-12 lg:mb-16">
                {/* Main Subtitle */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-8 sm:mb-12 leading-tight sm:leading-relaxed tracking-wide drop-shadow-lg shadow-black/50">
                    Own the Legacy. Stream the Culture. Relive the Moments — with FLARE
                  </p>
                  
                  {/* Secondary Description - Hidden on mobile */}
                  <motion.p
                    className="hidden sm:block text-sm sm:text-base lg:text-lg text-foreground/90 max-w-2xl leading-relaxed drop-shadow-md shadow-black/40"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                  >
                    At FLARE, we bring iconic series back to life — digitally. As proud owners of timeless IPs, we transform nostalgia into streaming experiences that resonate with today's audiences. From classic drama to cultural gems, our content bridges generations and platforms, making heritage accessible, engaging, and monetizable across social media.
                  </motion.p>
                </motion.div>
                
                {/* Decorative Elements - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-2 left-0 w-1 h-1 bg-primary/40 rounded-full animate-pulse" />
                <div className="hidden sm:block absolute -bottom-2 left-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </AnimatedSection>
          </motion.div>

          {/* Right Side - Social Media Icons Vertical */}
          <AnimatedSection delay={1.0}>
            <motion.div 
              className="flex lg:flex-col items-center gap-4 lg:gap-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >

              {/* Social Icons */}
              <motion.div 
                className="flex lg:flex-col items-center gap-3 sm:gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1.8 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, x: 20 },
                      visible: { 
                        opacity: 1, 
                        scale: 1, 
                        x: 0,
                        transition: { 
                          delay: index * 0.1,
                          duration: 0.5,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      x: -4,
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
                      <a href={social.url} aria-label={social.label} target="_blank" rel="noopener noreferrer">
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

              {/* Decorative line */}
              <motion.div 
                className="hidden lg:block w-px h-12 bg-gradient-to-b from-primary/40 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
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