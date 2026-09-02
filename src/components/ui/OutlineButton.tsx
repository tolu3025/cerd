import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface OutlineButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  dark?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  href,
  onClick,
  dark = false,
  className,
  type = 'button',
  disabled = false,
  target,
  rel,
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2',
    'rounded-none px-6 py-3 font-ui font-medium text-sm uppercase tracking-wider',
    'transition-all duration-200 border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
    dark
      ? 'border-white/30 text-white hover:bg-white/10'
      : 'border-dark text-dark hover:bg-black/5',
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
