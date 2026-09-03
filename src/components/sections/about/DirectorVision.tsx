import React from 'react';
import { ABOUT_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const DirectorVision: React.FC = () => {
  const { directorQuote } = ABOUT_CONTENT;

  return (
    <section className="bg-white py-20 sm:py-28 border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Quote & Vision */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="inline-flex items-center border border-[#0a0a0a] rounded-[8px] px-3 py-1.5 mb-6 font-sans text-xs tracking-widest uppercase w-fit">
                DIRECTORATE VISION
              </div>

              <blockquote className="mb-8">
                <p className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#0a0a0a] leading-snug tracking-[-0.03em]">
                  "{directorQuote.quote}"
                </p>
              </blockquote>

              <div className="border-t border-black/10 pt-6">
                <h4 className="font-display font-semibold text-[#0a0a0a] text-lg sm:text-xl">
                  {directorQuote.name}
                </h4>
                <p className="font-sans text-sm text-[#1a2bc3] font-medium mt-0.5">
                  {directorQuote.title}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#0a0a0a]/60 mt-1">
                  {directorQuote.institution}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Director Portrait Image from Framer */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.2} direction="left" className="w-full max-w-md">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-black/10 relative group">
                <img
                  src={directorQuote.image}
                  alt={directorQuote.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#6f8bff] font-semibold block mb-1">
                    Director of the Centre
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">
                    {directorQuote.name}
                  </h3>
                  <p className="font-sans text-xs text-white/75 mt-0.5">
                    Centre for Energy Research and Development
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
