import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { GradientButton } from '../../ui/GradientButton';
import { FadeIn } from '../../shared/FadeIn';

export const ResearchHero: React.FC = () => {
  return (
    <section className="bg-canvas pt-32 pb-16 sm:pb-20 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Badge variant="blue" className="mb-6">
            RESEARCH & DEVELOPMENT | OUR EXPERTISE
          </Badge>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-dark font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl">
            Advancing Human Knowledge
          </h1>

          <p className="font-sans text-body text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mb-8">
            Through experimental particle accelerators, nuclear spectroscopy, materials engineering, and clean renewable testbeds, CERD’s specialized research divisions translate fundamental physics into real-world energy resilience for Africa.
          </p>

          <GradientButton href="/publications">
            <span>VIEW PUBLICATION</span>
            <ArrowUpRight size={16} />
          </GradientButton>
        </FadeIn>
      </div>
    </section>
  );
};
