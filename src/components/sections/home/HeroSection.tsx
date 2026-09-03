import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const HeroSection: React.FC = () => {
  const { hero } = HOME_CONTENT;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % hero.carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hero.carouselImages.length]);

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[95vh] overflow-hidden bg-[#0a0a0a] flex flex-col">
      {/* Full-bleed background carousel */}
      <div className="absolute inset-0 z-0">
        {hero.carouselImages.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === current ? 1 : 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-36 pb-16">
        <FadeIn>
          {/* Badge */}
          <div className="inline-flex items-center border border-white/50 rounded-[8px] px-3 py-1.5 mb-6 text-white font-sans text-xs tracking-widest uppercase w-fit bg-white/10 backdrop-blur-sm">
            {hero.badge}
          </div>

          {/* Heading */}
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[68px] text-white leading-[1.08] tracking-[-0.03em] mb-6 max-w-4xl">
            {hero.heading}
            <span className="text-[#6f8bff]">{hero.headingBlue}</span>
            {hero.headingSuffix}
          </h1>

          {/* Subheading */}
          <p className="font-sans text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
            {hero.subheading}
          </p>

          {/* CTA */}
          <Link
            to={hero.primaryCta.href}
            className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] font-sans font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-all duration-200 w-fit"
          >
            {hero.primaryCta.label}
          </Link>
        </FadeIn>
      </div>

      {/* Ticker Strip at bottom */}
      <div className="relative z-10 border-t border-white/10 bg-[#c9c9c96b] backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...hero.ticker, ...hero.ticker].map((item, idx) => (
            <span key={idx} className="font-sans text-white text-xs sm:text-sm font-medium tracking-wider flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CENTRE FOR ENERGY badge overlaid on hero */}
      <div className="absolute bottom-16 right-8 z-10 bg-[#c9c9c96b] backdrop-blur-sm border border-white/20 rounded-[12px] px-4 py-2 hidden lg:block">
        <span className="font-sans text-white text-[11px] tracking-wider uppercase">
          CENTRE FOR ENERGY RESEARCH DEVELOPMENT
        </span>
      </div>
    </section>
  );
};
