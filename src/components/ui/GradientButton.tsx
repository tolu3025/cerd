import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  onClick,
  className,
  type = 'button',
  disabled = false,
  target,
  rel,
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'bg-cerd-blue text-white rounded-none px-6 py-3',
    'font-ui font-medium text-sm uppercase tracking-wider',
    'hover:bg-cerd-blue-dark hover:shadow-button active:scale-[0.98]',
    'transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    className
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      return (
        <a
          href={href}
          onClick={onClick}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={baseClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link to={href} onClick={onClick} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
};
