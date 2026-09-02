import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  amount?: number | 'some' | 'all';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className,
  amount = 0.2,
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 30, x: 0 };
      case 'down':
        return { opacity: 0, y: -30, x: 0 };
      case 'left':
        return { opacity: 0, x: 30, y: 0 };
      case 'right':
        return { opacity: 0, x: -30, y: 0 };
      default:
        return { opacity: 0, y: 30, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
