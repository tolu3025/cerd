import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const ResearchFrontiersSection: React.FC = () => {
  const { researchFrontiers } = HOME_CONTENT;

  return (
    <section className="bg-dark text-white py-20 sm:py-24 border-b border-white/10 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with White Styling */}
        <FadeIn className="mb-12 sm:mb-16 max-w-2xl">
          <div className="font-ui text-[11px] uppercase tracking-widest text-cerd-cyan font-semibold mb-4 inline-block">
            RESEARCH FRONTIERS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight mb-4">
            Emerging Horizons & Analytical Breakthroughs
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed">
            Pushing the boundaries of molecular biophysics, iron-catalyzed cell kinetics, bio-energy systems, and radiation-shielding nanomaterials.
          </p>
        </FadeIn>

        {/* 4 Cards Grid */}
        <StaggerContainer stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchFrontiers.map((frontier, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-7 sm:p-8 hover:border-cerd-blue hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="font-ui text-[11px] font-semibold text-cerd-cyan uppercase tracking-wider block mb-4">
                    {frontier.category}
                  </span>

                  <h3 className="font-serif text-white text-xl sm:text-2xl font-medium mb-3">
                    {frontier.title}
                  </h3>

                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {frontier.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
