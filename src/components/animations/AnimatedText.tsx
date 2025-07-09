import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { textReveal, staggerContainer, scrollAnimationProps } from '@/lib/animations';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export const AnimatedText = ({ 
  children, 
  className = "", 
  stagger = false,
  delay = 0 
}: AnimatedTextProps) => {
  if (stagger && typeof children === 'string') {
    const words = children.split(' ');
    
    return (
      <motion.div
        variants={staggerContainer}
        {...scrollAnimationProps}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={textReveal}
            custom={delay + (index * 0.1)}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={textReveal}
      {...scrollAnimationProps}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};