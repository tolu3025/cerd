import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { HOME_CONTENT } from '../../../data/content';
import { SectionHeading } from '../../ui/SectionHeading';
import { GlassCard } from '../../ui/GlassCard';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const DivisionsSection: React.FC = () => {
  const { divisions } = HOME_CONTENT;

  return (
    <section id="divisions" className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="CORE COMPETENCE"
            title="Scientific Excellence Across 4 Divisions"
            subtitle="Our research is structured to address complex challenges through specialized expertise and interdisciplinary collaboration."
            align="center"
          />
        </FadeIn>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {divisions.map((division) => (
            <StaggerItem key={division.number}>
              <GlassCard hover className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-sm font-bold text-cerd-blue">
                      DIVISION {division.number}
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-xl text-dark mb-3">
                    {division.name}
                  </h3>

                  <p className="font-sans text-sm text-body leading-relaxed mb-6">
                    {division.summary}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-black/5">
                    <span className="font-ui text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                      Key Capabilities:
                    </span>
                    {division.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 font-ui text-sm text-body">
                        <Check size={14} className="text-cerd-blue flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to={division.href}
                    className="inline-flex items-center gap-2 text-cerd-blue font-ui text-sm font-semibold uppercase tracking-wider hover:text-cerd-blue-dark group transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
