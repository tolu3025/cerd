import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-10 sm:mb-12 lg:mb-16',
        isCenter ? 'text-center mx-auto' : 'text-left',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'font-ui text-[11px] uppercase tracking-widest text-cerd-blue font-semibold mb-4 inline-block',
            isCenter && 'mx-auto'
          )}
        >
          {badge}
        </div>
      )}

      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-dark leading-tight tracking-tight',
          isCenter && 'mx-auto'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'font-sans text-base sm:text-lg text-body max-w-2xl mt-4 leading-relaxed',
            isCenter && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
