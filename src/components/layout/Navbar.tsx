import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, type NavLink } from '../../data/content';
import { cn } from '../../lib/utils';

export interface NavbarProps {
  className?: string;
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ className, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href === '/about-us' || href === '/about') {
      return location.pathname === '/about-us' || location.pathname === '/about';
    }
    if (href === '/contact-us' || href === '/contact') {
      return location.pathname === '/contact-us' || location.pathname === '/contact';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'h-16 md:h-[72px]',
          'bg-white/85 backdrop-blur-[12px] border-b border-black/5',
          isScrolled ? 'shadow-sm bg-white/95' : 'bg-white/85',
          className
        )}
      >
        <div className="max-w-[1240px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            className="flex flex-col justify-center group text-left focus-visible:rounded-md"
            aria-label="CERD OAU Ile-Ife Home"
          >
            <span className="font-ui text-[18px] font-bold text-dark leading-none tracking-tight group-hover:text-cerd-blue transition-colors">
              CERD
            </span>
            <span className="font-ui text-[11px] text-muted leading-tight mt-0.5 tracking-normal">
              OAU Ile-Ife
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link: NavLink) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'font-ui text-[13px] uppercase tracking-wider font-medium transition-colors py-2 relative',
                    active
                      ? 'text-cerd-blue font-semibold'
                      : 'text-body hover:text-dark'
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cerd-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            {onContactClick ? (
              <button
                type="button"
                onClick={onContactClick}
                className="hidden sm:inline-flex items-center justify-center font-ui text-[13px] uppercase tracking-wider font-semibold bg-cerd-blue text-white rounded-xl px-6 py-2.5 hover:bg-cerd-blue-dark transition-all duration-200 shadow-button active:scale-[0.98]"
              >
                <span>CONTACT US</span>
              </button>
            ) : (
              <Link
                to="/contact-us"
                className="hidden sm:inline-flex items-center justify-center font-ui text-[13px] uppercase tracking-wider font-semibold bg-cerd-blue text-white rounded-xl px-6 py-2.5 hover:bg-cerd-blue-dark transition-all duration-200 shadow-button active:scale-[0.98]"
              >
                <span>CONTACT US</span>
              </Link>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-dark hover:bg-black/5 transition-colors focus-visible:ring-2 focus-visible:ring-cerd-blue"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Drawer with Dark Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-surface shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-black/10">
                  <div className="flex flex-col">
                    <span className="font-ui text-[18px] font-bold text-dark">CERD</span>
                    <span className="font-ui text-[11px] text-muted">OAU Ile-Ife</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-body hover:text-dark hover:bg-black/5 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1 py-6">
                  {NAV_LINKS.map((link: NavLink) => {
                    const active = isLinkActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'font-ui text-[14px] uppercase tracking-wider py-3 px-3.5 rounded-lg transition-colors font-medium flex items-center justify-between',
                          active
                            ? 'bg-cerd-blue/10 text-cerd-blue font-semibold'
                            : 'text-body hover:bg-black/5 hover:text-dark'
                        )}
                      >
                        <span>{link.label}</span>
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-cerd-blue" />}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-black/10 flex flex-col gap-3">
                {onContactClick ? (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onContactClick();
                    }}
                    className="w-full font-ui text-[13px] uppercase tracking-wider font-semibold bg-cerd-blue text-white rounded-xl py-3 flex items-center justify-center gap-2 shadow-button hover:bg-cerd-blue-dark transition-colors"
                  >
                    <span>CONTACT US</span>
                    <ArrowUpRight size={16} />
                  </button>
                ) : (
                  <Link
                    to="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full font-ui text-[13px] uppercase tracking-wider font-semibold bg-cerd-blue text-white rounded-xl py-3 flex items-center justify-center gap-2 shadow-button hover:bg-cerd-blue-dark transition-colors"
                  >
                    <span>CONTACT US</span>
                    <ArrowUpRight size={16} />
                  </Link>
                )}
                <p className="text-center font-ui text-[11px] text-muted">
                  Centre for Energy Research and Development
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
