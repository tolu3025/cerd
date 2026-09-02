import React from 'react';
import { User, Mail } from 'lucide-react';
import { FadeIn } from '../../shared/FadeIn';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { GlassCard } from '../../ui/GlassCard';
import { STAFF_CONTENT } from '../../../data/content';

const divisionCodeMap: Record<string, string> = {
  'Environmental & Earth Science': 'EES',
  'Energy Management & Technology': 'EMT',
  'Applied Nuclear Science & Technology': 'ANST',
  'Materials & Electronics': 'ME',
  'Maintenance & Services': 'MS',
};

const divisionIdMap: Record<string, string> = {
  'Environmental & Earth Science': 'environmental-earth-science',
  'Energy Management & Technology': 'energy-management-technology',
  'Applied Nuclear Science & Technology': 'applied-nuclear-science-technology',
  'Materials & Electronics': 'materials-electronics',
  'Maintenance & Services': 'maintenance-services',
};

export const DivisionSections: React.FC = () => {
  return (
    <section className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
        {STAFF_CONTENT.divisions.map((group, groupIdx) => {
          const code = divisionCodeMap[group.divisionName] || `D0${groupIdx + 1}`;
          const divId = divisionIdMap[group.divisionName] || `div-${groupIdx}`;

          return (
            <div key={divId} id={divId} className="scroll-mt-24">
              <FadeIn>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 pb-4 border-b border-black/10">
                  <div>
                    <span className="font-ui text-sm font-bold text-cerd-blue uppercase tracking-widest block mb-1">
                      DIVISION DIRECTORY • {code}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-dark font-medium">
                      {group.divisionName}
                    </h3>
                  </div>
                  <span className="font-ui text-sm text-muted font-semibold">
                    {group.staff.length} Staff Members
                  </span>
                </div>
              </FadeIn>

              {/* Staff Cards Grid */}
              <StaggerContainer
                stagger={0.1}
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  group.staff.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
                } gap-6 sm:gap-8`}
              >
                {group.staff.map((member, sIdx) => (
                  <StaggerItem key={sIdx}>
                    <GlassCard hover className="h-full flex flex-col justify-between p-6 sm:p-8">
                      <div>
                        {/* Avatar / Badge Header */}
                        <div className="aspect-square max-h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-5 border border-black/5 flex items-center justify-center relative group">
                          <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-muted group-hover:scale-110 transition-transform">
                            <User size={36} className="text-cerd-blue" />
                          </div>
                          <span className="absolute bottom-3 font-ui text-xs uppercase font-bold text-dark bg-white/90 px-3 py-1 rounded-full shadow-xs">
                            {code}
                          </span>
                        </div>

                        {/* Name - Increased Font Size */}
                        <h4 className="font-sans font-bold text-xl sm:text-[22px] text-dark leading-snug mb-1.5">
                          {member.name}
                        </h4>

                        {/* Title - Increased Font Size */}
                        <p className="font-ui text-sm sm:text-base text-cerd-blue font-semibold mb-3">
                          {member.role}
                        </p>

                        {/* Specialization - Increased Font Size */}
                        <p className="font-sans text-sm sm:text-[15px] text-body leading-relaxed mb-5">
                          {member.specialization}
                        </p>
                      </div>

                      {/* Email Contact Link */}
                      <div className="pt-4 border-t border-black/10">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 font-ui text-xs sm:text-sm text-muted font-medium hover:text-cerd-blue transition-colors"
                        >
                          <Mail size={15} className="text-cerd-blue" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    </GlassCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};
