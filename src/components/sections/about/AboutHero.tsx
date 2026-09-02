import React from 'react';
import { Badge } from '../../ui/Badge';
import { FadeIn } from '../../shared/FadeIn';

export const AboutHero: React.FC = () => {
  return (
    <section className="bg-canvas pt-32 pb-16 sm:pb-20 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Badge variant="blue" className="mb-6">
            SINCE 1978 | Pioneering Energy Research
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl">
            From Nuclear Ambitions to Global Excellence
          </h1>

          <p className="font-sans text-body text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl">
            Established under Nigeria’s National Atomic Energy Programme at Obafemi Awolowo University, the Centre for Energy Research and Development has pioneered peaceful nuclear applications, advanced materials engineering, and clean renewable technologies for nearly five decades.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
