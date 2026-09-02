import React from 'react';
import { Lightbulb, Shield, Factory, Radio } from 'lucide-react';
import { HOME_CONTENT } from '../../../data/content';
import { SectionHeading } from '../../ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const ImpactPillarsSection: React.FC = () => {
  const { impactPillars } = HOME_CONTENT;

  const getPillarIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Lightbulb size={24} className="text-cerd-blue" />;
      case '02':
        return <Shield size={24} className="text-cerd-blue" />;
      case '03':
        return <Factory size={24} className="text-cerd-blue" />;
      case '04':
        return <Radio size={24} className="text-cerd-blue" />;
      default:
        return <Lightbulb size={24} className="text-cerd-blue" />;
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="CORE IMPACT PILLARS"
            title="Leading The Way"
            subtitle="We translate high-energy physics, spectroscopy, and materials science into tangible energy resilience for industry and society."
          />
        </FadeIn>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactPillars.map((pillar) => (
            <StaggerItem key={pillar.number}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-black/5 bg-surface hover:shadow-card transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center">
                      {getPillarIcon(pillar.number)}
                    </div>
                    <span className="font-display text-xs font-bold text-muted">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-lg text-dark mb-3">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-sm text-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
