import React from 'react';
import { ABOUT_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const DirectorVision: React.FC = () => {
  const { directorQuote } = ABOUT_CONTENT;

  return (
    <section className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Quote & Vision */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="font-ui text-[11px] uppercase tracking-widest text-cerd-blue font-semibold mb-4">
                DIRECTORATE VISION
              </div>

              <blockquote className="mb-8">
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-dark leading-snug">
                  "{directorQuote.quote}"
                </p>
              </blockquote>

              <div className="border-t border-black/10 pt-6">
                <h4 className="font-sans font-bold text-dark text-lg sm:text-xl">
                  {directorQuote.name}
                </h4>
                <p className="font-ui text-sm text-cerd-blue font-medium mt-0.5">
                  Research Professor & Director
                </p>
                <p className="font-sans text-xs sm:text-sm text-muted mt-1">
                  {directorQuote.institution}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Director Portrait Placeholder Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.2} direction="left" className="w-full max-w-sm">
              <div className="aspect-[3/4] bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-end relative overflow-hidden shadow-card border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-10" />
                <div className="relative z-20 text-white">
                  <span className="font-ui text-[10px] uppercase tracking-widest text-cerd-cyan font-semibold block mb-1">
                    Director of the Centre
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium">
                    {directorQuote.name}
                  </h3>
                  <p className="font-ui text-xs text-white/75 mt-0.5">
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
