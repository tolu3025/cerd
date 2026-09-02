import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { GradientButton } from '../../ui/GradientButton';
import { OutlineButton } from '../../ui/OutlineButton';
import { AnimatedText } from '../../shared/AnimatedText';
import { FadeIn } from '../../shared/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import heroPlantImg from '../../../assets/hero-plant.jpg';

export const HeroSection: React.FC = () => {
  const { hero } = HOME_CONTENT;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 md:py-32 overflow-hidden bg-dark">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroPlantImg}
          alt="Centre for Energy Research and Development Plant"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for High Contrast Text Legibility */}
        <div className="absolute inset-0 bg-dark/80 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/65" />
      </div>

      {/* Hero Foreground Content */}
      <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl flex flex-col items-start">
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.08] tracking-tight mb-6">
            <AnimatedText text={hero.heading} as="span" />{' '}
            <span className="italic text-cerd-cyan font-normal inline-block">
              {hero.headingItalic}
            </span>
          </h1>

          <FadeIn delay={0.3}>
            <p className="font-sans text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
              {hero.subheading}
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-wrap items-center gap-4">
              <GradientButton href={hero.primaryCta.href}>
                <span>{hero.primaryCta.label}</span>
                <ArrowUpRight size={16} />
              </GradientButton>

              <OutlineButton href={hero.secondaryCta.href} dark>
                <span>{hero.secondaryCta.label}</span>
              </OutlineButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};






