import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover, fadeInUp, scrollAnimationProps } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  className = "", 
  delay = 0 
}: AnimatedCardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      {...scrollAnimationProps}
      whileHover="hover"
      initial="initial"
      transition={{ delay }}
      className={cn("cursor-pointer", className)}
    >
      <motion.div
        variants={cardHover}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};