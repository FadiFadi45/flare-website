import { Button } from "@/components/ui/button";
import { Play, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logoAnimation } from "@/lib/animations";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navItems = ['Home', 'About', 'Services', 'Productions', 'Channels', 'Contact'];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        menuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated hamburger lines
  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  };

  // Mobile menu animation variants
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: '0%',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1] as const
      }
    })
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#00000026]">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Enhanced Animation */}
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
                  className="h-8 sm:h-10 w-auto transition-spring"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-lg opacity-0 gradient-fresh"
                  whileHover={{ 
                    opacity: 0.3,
                    transition: { duration: 0.3 }
                  }}
                ></motion.div>
                {/* Enhanced light sweep effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 rounded-lg"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{
                    x: ['100%', '200%'],
                    opacity: [0, 0.6, 0],
                    transition: {
                      delay: 1.5,
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 6,
                      ease: "easeInOut"
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
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
              {navItems.map((item, index) => (
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
                  whileHover={{ 
                    y: -3,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>

            {/* Animated Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.8, duration: 0.3 }
              }}
            >
              <Button 
                ref={menuButtonRef}
                variant="ghost" 
                size="icon" 
                className="md:hidden relative w-10 h-10 hover:bg-primary/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <motion.span
                    className="block w-5 h-0.5 bg-foreground origin-center transition-all duration-300"
                    variants={line1Variants}
                    animate={isMobileMenuOpen ? 'open' : 'closed'}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-foreground my-1 transition-all duration-300"
                    variants={line2Variants}
                    animate={isMobileMenuOpen ? 'open' : 'closed'}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-foreground origin-center transition-all duration-300"
                    variants={line3Variants}
                    animate={isMobileMenuOpen ? 'open' : 'closed'}
                  />
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-background via-background/95 to-background/90 backdrop-blur-xl border-l border-primary/20 shadow-2xl z-50 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full relative overflow-hidden">
                {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-2xl" /> */}
                
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
                  <motion.h2 
                    className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Main Menu
                  </motion.h2>
                   <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl border border-primary/20 hover:border-primary/40"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-8">
                  <ul className="space-y-3 px-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item}
                        variants={menuItemVariants}
                        custom={index}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <a
                          href={`#${item.toLowerCase()}`}
                          className="group block w-full text-left px-6 py-4 text-base font-semibold text-foreground hover:text-primary bg-gradient-to-r from-transparent to-transparent hover:from-primary/5 hover:to-primary/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:from-primary/10 focus:to-primary/15 border border-transparent hover:border-primary/20 relative overflow-hidden"
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleNavClick(item);
                            }
                          }}
                          tabIndex={0}
                        >
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                          
                          <span className="flex items-center relative z-10">
                            <span className="w-2 h-2 bg-primary/60 rounded-full mr-4 group-hover:bg-primary transition-colors duration-300" />
                            {item}
                            <motion.span
                              className="ml-auto opacity-0 text-primary text-lg"
                              whileHover={{ opacity: 1, x: 8 }}
                              transition={{ duration: 0.3 }}
                            >
                              →
                            </motion.span>
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Menu Footer */}
                <motion.div 
                  className="p-6 border-t border-primary/10 bg-gradient-to-r from-transparent to-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Flare Media LLC
                    </p>
                    <div className="w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;