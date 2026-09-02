import React from 'react';
import { Badge } from '../../ui/Badge';
import { FadeIn } from '../../shared/FadeIn';
import { HeroSliderBackground } from '../../shared/HeroSliderBackground';

export const StaffHero: React.FC = () => {
  return (
    <HeroSliderBackground overlayOpacity="bg-dark/80 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70">
      <section className="pt-36 pb-20 sm:pb-24">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="CERD Logo" className="h-8 w-auto bg-white/20 p-1 rounded backdrop-blur-xs" />
              <Badge variant="cyan" className="font-bold text-xs uppercase tracking-widest px-3 py-1">
                OUR TEAM | ACADEMIC & TECHNICAL FACULTY
              </Badge>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-semibold leading-[1.1] tracking-tight mb-6 max-w-4xl">
              Meet the Minds Powering Research & Innovation
            </h1>

            <p className="font-sans text-white/90 text-lg sm:text-xl lg:text-[22px] leading-relaxed max-w-3xl font-medium">
              Our multidisciplinary faculty comprises distinguished research professors, nuclear physicists, material scientists, energy engineers, and specialized technical services personnel committed to world-class atomic and renewable energy innovation.
            </p>
          </FadeIn>
        </div>
      </section>
    </HeroSliderBackground>
  );
};
