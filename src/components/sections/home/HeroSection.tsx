import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { GradientButton } from '../../ui/GradientButton';
import { OutlineButton } from '../../ui/OutlineButton';
import { AnimatedText } from '../../shared/AnimatedText';
import { FadeIn } from '../../shared/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { HeroSliderBackground } from '../../shared/HeroSliderBackground';

export const HeroSection: React.FC = () => {
  const { hero } = HOME_CONTENT;

  return (
    <HeroSliderBackground>
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center pt-32 pb-24 md:py-36">
        {/* Hero Foreground Content */}
        <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col items-start">
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.08] tracking-tight mb-6">
              <AnimatedText text={hero.heading} as="span" />{' '}
              <span className="italic text-cerd-cyan font-normal inline-block">
                {hero.headingItalic}
              </span>
            </h1>

            <FadeIn delay={0.3}>
              <p className="font-sans text-white/90 text-lg sm:text-xl lg:text-[22px] leading-relaxed max-w-2xl mb-10 font-medium">
                {hero.subheading}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="flex flex-wrap items-center gap-4">
                <GradientButton href={hero.primaryCta.href}>
                  <span>{hero.primaryCta.label}</span>
                  <ArrowUpRight size={18} />
                </GradientButton>

                <OutlineButton href={hero.secondaryCta.href} dark>
                  <span>{hero.secondaryCta.label}</span>
                </OutlineButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </HeroSliderBackground>
  );
};






