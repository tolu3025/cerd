import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const ResearchFrontiersSection: React.FC = () => {
  const { researchFrontiers } = HOME_CONTENT;

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12">
          <div className="inline-flex items-center border border-[#0a0a0a] rounded-[8px] px-3 py-1.5 mb-6 font-sans text-xs tracking-widest uppercase w-fit">
            RESEARCH FRONTIERS
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#0a0a0a] leading-[1.1] tracking-[-0.05em] max-w-2xl">
            Emerging Horizons & Analytical Breakthroughs
          </h2>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchFrontiers.map((frontier, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#f7f7f7] border border-black/5 h-full group hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="h-48 w-full overflow-hidden bg-gray-200">
                  <img
                    src={frontier.image}
                    alt={frontier.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-sans text-xs text-[#0a0a0a]/50 font-medium mb-2 uppercase tracking-wider">
                    {frontier.category}
                  </span>

                  <h3 className="font-display font-semibold text-xl text-[#0a0a0a] mb-3">
                    {frontier.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0a0a0a]/70 leading-relaxed">
                    {frontier.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
