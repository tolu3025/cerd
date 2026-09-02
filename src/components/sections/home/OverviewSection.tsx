import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, Layers } from 'lucide-react';
import { HOME_CONTENT } from '../../../data/content';
import { SectionHeading } from '../../ui/SectionHeading';
import { FadeIn } from '../../shared/FadeIn';

export const OverviewSection: React.FC = () => {
  const { overview } = HOME_CONTENT;

  return (
    <section id="who-we-are" className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 60% Width Editorial Text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <SectionHeading
                badge={overview.badge}
                title={overview.heading}
                className="mb-6"
              />
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-4 font-sans text-body text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                <p>{overview.paragraph1}</p>
                <p className="text-muted text-base">{overview.paragraph2}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <Link
                to={overview.actionHref}
                className="inline-flex items-center gap-2 text-cerd-blue font-ui text-sm font-semibold uppercase tracking-wider hover:text-cerd-blue-dark hover:underline group"
              >
                <span>{overview.actionLabel}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: 40% Width Decorative Factsheet & Geometric Composition */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.3} direction="left">
              <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-black/5 shadow-card relative overflow-hidden">
                {/* Subtle Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cerd-blue/5 rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cerd-blue/10 flex items-center justify-center text-cerd-blue">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-dark text-lg">National Mandate</h3>
                    <p className="font-ui text-xs text-muted">Federal Republic of Nigeria</p>
                  </div>
                </div>

                <div className="space-y-4 font-sans text-sm text-body border-t border-black/5 pt-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-cerd-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-dark block font-semibold">IAEA Collaborating Institute</strong>
                      <span className="text-muted text-xs">Accredited international protocols for nuclear analytics and radiobiology.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers size={18} className="text-cerd-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-dark block font-semibold">4 Specialized Research Divisions</strong>
                      <span className="text-muted text-xs">Multidisciplinary synergy across atomic physics, materials, and renewables.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-canvas border border-black/5 font-ui text-xs text-muted flex items-center justify-between">
                  <span>Host Campus:</span>
                  <span className="font-semibold text-dark">OAU Ile-Ife, Osun State</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
