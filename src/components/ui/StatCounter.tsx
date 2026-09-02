import React from 'react';
import { cn } from '../../lib/utils';

export interface StatCounterProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-surface border border-black/5 rounded-2xl shadow-card p-6 sm:p-8 flex flex-col justify-between',
        className
      )}
    >
      <div>
        <div className="font-display text-4xl sm:text-5xl font-bold text-dark tracking-tight leading-none mb-3">
          {value}
        </div>
        <div className="font-ui text-sm uppercase tracking-wider text-muted font-medium mb-2">
          {label}
        </div>
      </div>

      {description && (
        <p className="font-sans text-sm text-body leading-relaxed pt-3 border-t border-black/5 mt-3">
          {description}
        </p>
      )}
    </div>
  );
};
