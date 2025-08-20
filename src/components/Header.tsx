import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { logoAnimation } from "@/lib/animations";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <motion.div 
            className="flex items-center space-x-3 group"
            variants={logoAnimation}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="relative">
              <motion.img 
                src="/lovable-uploads/871b753f-ac14-4513-8da8-8f974ba0ea9c.png" 
                alt="Flare Media Logo" 
                className="h-10 w-auto transition-smooth"
                whileHover={{ scale: 1.05 }}
              />
              <motion.div 
                className="absolute inset-0 rounded-lg opacity-0 gradient-logo"
                whileHover={{ 
                  opacity: 0.2,
                  transition: { duration: 0.3 }
                }}
              ></motion.div>
              {/* Light sweep effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{
                  x: ['100%', '200%'],
                  opacity: [0, 1, 0],
                  transition: {
                    delay: 1.5,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: "easeInOut"
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Navigation with staggered animation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.6,
                staggerChildren: 0.1
              }
            }}
          >
            {['Home', 'About', 'Services', 'Productions', 'Channels', 'Talent', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.6 + (index * 0.1) }
                }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.8, duration: 0.3 }
            }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-primary/10 transition-smooth group"
            >
              <Menu className="w-5 h-5 group-hover:text-primary transition-smooth" />
            </Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;