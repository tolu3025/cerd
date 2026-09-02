import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { StatCounter } from '../../ui/StatCounter';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const StatsSection: React.FC = () => {
  const { stats } = HOME_CONTENT;

  return (
    <section className="bg-white py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <div className="font-ui text-[11px] uppercase tracking-widest text-cerd-blue font-semibold mb-3">
            MEASURABLE IMPACT
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-dark font-medium tracking-tight">
            Key Performance Metrics
          </h2>
        </FadeIn>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <StaggerItem key={idx}>
              <StatCounter
                value={stat.value}
                label={stat.label}
                description={stat.subtext}
                className="h-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
