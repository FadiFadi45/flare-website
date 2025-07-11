// Animation utilities for Flare Media
import { Variants } from 'framer-motion';

// Scroll animation variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const logoAnimation: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "brightness(0.5)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "brightness(1)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    scale: 1.05,
    filter: "brightness(1.2) drop-shadow(0 0 20px rgba(220, 61, 170, 0.3))",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const buttonHover: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px 0 rgba(220, 61, 170, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px 0 rgba(220, 61, 170, 0.2)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const glowPulse: Variants = {
  initial: {
    filter: "drop-shadow(0 0 0px rgba(220, 61, 170, 0))",
  },
  animate: {
    filter: [
      "drop-shadow(0 0 0px rgba(220, 61, 170, 0))",
      "drop-shadow(0 0 20px rgba(220, 61, 170, 0.5))",
      "drop-shadow(0 0 0px rgba(220, 61, 170, 0))",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Scroll-triggered animation settings
export const scrollAnimationProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { 
    once: true, 
    amount: 0.3,
    margin: "-50px" 
  },
};

// Performance-optimized motion settings
export const motionConfig = {
  transition: { type: "tween" },
  reducedMotion: "user",
};

// Optimized scroll animation settings for better performance
export const optimizedScrollProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { 
    once: true, 
    amount: 0.2,
    margin: "-10% 0px -10% 0px" 
  },
  transition: {
    staggerChildren: 0.1,
    delayChildren: 0.05,
  }
};

// High-performance variants for critical animations
export const performanceVariants = {
  fadeInFast: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  },
  scaleInFast: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
};