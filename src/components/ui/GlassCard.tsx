import React from 'react';
import { cn } from '../../lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white border border-black/5 rounded-2xl shadow-card p-6 sm:p-8',
        hover && 'hover:-translate-y-1 hover:shadow-lg transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
