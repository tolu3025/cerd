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
    <section className="relative bg-dark pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background Gradient Mesh & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,43,195,0.18)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,153,255,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12">
        {/* Headline & Action CTAs */}
        <div className="flex flex-col items-start max-w-3xl">
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.08] tracking-tight mb-6">
            <AnimatedText text={hero.heading} as="span" />{' '}
            <span className="italic text-cerd-cyan font-normal inline-block">
              {hero.headingItalic}
            </span>
          </h1>

          <FadeIn delay={0.3}>
            <p className="font-sans text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
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

        {/* Full-Width Hero Image Container */}
        <FadeIn delay={0.4} direction="up" className="w-full">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[320px] max-h-[520px] overflow-hidden border border-white/15 shadow-2xl group rounded-none">
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={heroPlantImg}
              alt="Centre for Energy Research and Development Plant"
              className="w-full h-full object-cover rounded-none transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};


