import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  amount?: number | 'some' | 'all';
}

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  stagger = 0.1,
  delay = 0,
  className,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className,
  variants = itemVariants,
  ...props
}) => {
  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
};
