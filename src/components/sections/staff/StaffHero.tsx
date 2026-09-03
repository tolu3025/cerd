import React from 'react';
import { FadeIn } from '../../shared/FadeIn';
import { STAFF_CONTENT } from '../../../data/content';

export const StaffHero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0f1054] pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <FadeIn>
          {/* Badge */}
          <div className="inline-flex items-center justify-center border border-white rounded-[12px] px-4 py-1.5 mb-6 text-white text-xs sm:text-sm font-sans tracking-wider uppercase">
            {STAFF_CONTENT.hero.badge}
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.1] tracking-[-0.03em] max-w-4xl mx-auto">
            Meet the <span className="text-[#a6d8fd]">{STAFF_CONTENT.hero.headingHighlight}</span> powering Innovation
          </h1>

          {/* Subheading */}
          <p className="mt-5 font-sans text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            {STAFF_CONTENT.hero.subheading}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
