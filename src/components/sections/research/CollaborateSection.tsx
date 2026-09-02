import React from 'react';
import { OutlineButton } from '../../ui/OutlineButton';
import { FadeIn } from '../../shared/FadeIn';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FileText } from 'lucide-react';

export const CollaborateSection: React.FC = () => {
  const stats = [
    { value: '45+', label: 'Collaborative Projects' },
    { value: '500M+', label: 'Research Grants (NGN)' },
    { value: '12', label: 'Registered Patents' },
    { value: '8', label: 'Specialized Labs' },
  ];

  return (
    <section className="bg-dark text-white py-20 sm:py-24 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <FadeIn className="max-w-2xl">
            <div className="font-ui text-[11px] uppercase tracking-widest text-cerd-cyan font-semibold mb-4 inline-block">
              PARTNERSHIP & SPONSORSHIP
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-4">
              Collaborate With Us
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed">
              We partner with global universities, international atomic agencies, government ministries, and industrial manufacturers to fund discovery science, test materials, and deploy clean energy systems.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <OutlineButton href="/contact" dark>
              <FileText size={16} />
              <span>Proposal Guide</span>
            </OutlineButton>
          </FadeIn>
        </div>

        {/* 4 Stats in Row */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <div className="border-l-2 border-cerd-blue/60 pl-6">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-ui text-xs sm:text-sm uppercase tracking-wider text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
