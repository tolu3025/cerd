import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FOOTER_DATA } from '../../data/content';
import { cn } from '../../lib/utils';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const { mission, quickLinks, domains, contact } = FOOTER_DATA;

  return (
    <footer className={cn('bg-dark text-white pt-16 md:pt-20 pb-10 border-t border-white/10', className)}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-16">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex flex-col group">
              <span className="font-ui text-[20px] font-bold text-white tracking-tight group-hover:text-cerd-cyan transition-colors">
                CERD
              </span>
              <span className="font-ui text-[12px] text-muted tracking-normal">
                OAU Ile-Ife
              </span>
            </Link>

            <p className="font-sans text-[14px] text-muted leading-relaxed max-w-sm">
              {mission}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-ui text-[12px] font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-[14px] text-muted hover:text-white transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Research Domains */}
          <div className="space-y-4">
            <h4 className="font-ui text-[12px] font-semibold text-white tracking-wider uppercase">
              Research Domains
            </h4>
            <ul className="space-y-2.5">
              {domains.map((domain, idx) => (
                <li key={idx} className="font-sans text-[14px] text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cerd-cyan flex-shrink-0" />
                  <span>{domain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-ui text-[12px] font-semibold text-white tracking-wider uppercase">
              Contact & Location
            </h4>
            <div className="space-y-3 font-sans text-[14px] text-muted">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-cerd-cyan mt-0.5 flex-shrink-0" />
                <address className="not-italic leading-relaxed">
                  {contact.institution}<br />
                  {contact.university}<br />
                  {contact.cityState}, {contact.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone size={16} className="text-cerd-cyan flex-shrink-0" />
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-ui text-[13px]"
                >
                  {contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-cerd-cyan flex-shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors font-ui text-[13px]"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-ui text-[12px] text-muted">
          <p>© {contact.copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="/about-us" className="hover:text-white transition-colors">
              About Institute
            </Link>
            <Link to="/research" className="hover:text-white transition-colors">
              Research Divisions
            </Link>
            <Link to="/contact-us" className="hover:text-white transition-colors">
              Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
