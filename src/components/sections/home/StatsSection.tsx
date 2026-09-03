import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const StatsSection: React.FC = () => {
  const { stats } = HOME_CONTENT;

  return (
    <section className="bg-white pb-8 sm:pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-12 max-w-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display font-semibold text-4xl sm:text-5xl text-[#0a0a0a] tracking-tight leading-none mb-2">
                  {stat.value}
                </span>
                <span className="font-sans text-sm sm:text-base text-[#0a0a0a]/70 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
