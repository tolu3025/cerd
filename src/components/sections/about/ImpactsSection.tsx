import React from 'react';
import { GlassCard } from '../../ui/GlassCard';
import { SectionHeading } from '../../ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const ImpactsSection: React.FC = () => {
  const impactStats = [
    {
      value: '48+',
      label: 'Years of Excellence',
      subtext: 'Pioneering peaceful atomic research and training continuously since 1978.',
    },
    {
      value: '200+',
      label: 'Researchers & Faculty',
      subtext: 'Multidisciplinary cohort of professors, engineers, and research fellows.',
    },
    {
      value: '5,000+',
      label: 'Specialists Trained',
      subtext: 'Postgraduate scholars, radiation safety officers, and technical operators.',
    },
    {
      value: '2,000+',
      label: 'Scientific Publications',
      subtext: 'Peer-reviewed articles in high-impact international nuclear and energy journals.',
    },
    {
      value: '70+',
      label: 'Global Partners',
      subtext: 'Active technical cooperation with IAEA, universities, and international labs.',
    },
    {
      value: '#1',
      label: 'West Africa Hub',
      subtext: 'Premier nuclear spectroscopy and particle accelerator centre in the ECOWAS sub-region.',
    },
  ];

  return (
    <section className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="INSTITUTIONAL METRICS"
            title="A Legacy of Measurable Impact"
            subtitle="Four decades of scientific rigor, national infrastructure development, and high-level human capacity building."
            align="center"
          />
        </FadeIn>

        <StaggerContainer stagger={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {impactStats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <GlassCard hover className="h-full text-center flex flex-col justify-between p-8">
                <div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-cerd-blue leading-none mb-3">
                    {stat.value}
                  </div>
                  <h3 className="font-ui text-sm font-semibold uppercase tracking-wider text-dark mb-2">
                    {stat.label}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-body leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
