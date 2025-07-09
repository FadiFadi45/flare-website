import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, scrollAnimationProps } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      {...scrollAnimationProps}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};