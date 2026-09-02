import React from 'react';
import { Badge } from '../../ui/Badge';
import { FadeIn } from '../../shared/FadeIn';

export const StaffHero: React.FC = () => {
  return (
    <section className="bg-canvas pt-32 pb-16 sm:pb-20 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Badge variant="blue" className="mb-6">
            OUR TEAM | ACADEMIC & TECHNICAL FACULTY
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Meet the Minds Powering Innovation
          </h1>

          <p className="font-sans text-body text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Our multidisciplinary faculty comprises distinguished research professors, nuclear physicists, material scientists, energy engineers, and specialized technologists committed to world-class atomic and renewable innovation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
