import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { buttonHover } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const AnimatedButton = ({ 
  children, 
  className = "", 
  onClick,
  type = 'button',
  disabled = false
}: AnimatedButtonProps) => {
  return (
    <motion.button
      variants={buttonHover}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      />
      {children}
    </motion.button>
  );
};