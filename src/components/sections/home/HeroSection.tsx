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
    <section className="relative bg-dark min-h-[85vh] flex items-center pt-24 pb-16 md:py-24 overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Desktop): Hero Plant Image (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-6 lg:order-1 w-full">
            <FadeIn delay={0.2} direction="right" className="w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-white/15 shadow-2xl group rounded-none">
                <img
                  src={heroPlantImg}
                  alt="Centre for Energy Research and Development Plant"
                  className="w-full h-full object-cover rounded-none transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Desktop): Headline & Action CTAs */}
          <div className="lg:col-span-6 lg:order-2 flex flex-col items-start">
            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-medium leading-[1.08] tracking-tight mb-6">
              <AnimatedText text={hero.heading} as="span" />{' '}
              <span className="italic text-cerd-cyan font-normal inline-block">
                {hero.headingItalic}
              </span>
            </h1>

            <FadeIn delay={0.3}>
              <p className="font-sans text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
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
      </div>
    </section>
  );
};




