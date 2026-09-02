import React from 'react';
import { ABOUT_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const MissionBlock: React.FC = () => {
  const { mission } = ABOUT_CONTENT;

  return (
    <section className="bg-white py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mx-auto">
          <div className="font-ui text-[11px] uppercase tracking-widest text-cerd-blue font-semibold mb-4">
            INSTITUTIONAL MISSION
          </div>

          <blockquote className="border-l-4 border-cerd-blue pl-6 sm:pl-8 my-6">
            <p className="font-serif italic text-2xl sm:text-3xl text-dark leading-relaxed">
              "{mission}"
            </p>
          </blockquote>

          <p className="font-sans text-sm text-muted uppercase tracking-wider font-medium pl-6 sm:pl-8">
            Centre for Energy Research and Development • OAU Ile-Ife
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
