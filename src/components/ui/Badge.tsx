import React from 'react';
import { cn } from '../../lib/utils';

export type BadgeVariant = 'blue' | 'gray' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  className,
  ...props
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    blue: 'bg-cerd-blue/10 text-cerd-blue',
    gray: 'bg-black/5 text-muted',
    outline: 'border border-black/10 text-body bg-transparent',
  };

  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-[11px] font-ui font-semibold uppercase tracking-wider inline-flex items-center gap-1.5',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
