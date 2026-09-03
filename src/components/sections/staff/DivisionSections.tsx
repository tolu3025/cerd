import React from 'react';
import { FadeIn } from '../../shared/FadeIn';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { STAFF_CONTENT } from '../../../data/content';

export const DivisionSections: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {STAFF_CONTENT.divisions.map((group, groupIdx) => (
          <div key={groupIdx} className="scroll-mt-24">
            <FadeIn>
              {/* Division Title & Subtitle */}
              <div className="mb-10">
                <h3 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#0a0a0a] tracking-tight leading-[1.2]">
                  {group.headingPrefix}
                  <span className="text-[#1a2bc3]">{group.firstHighlight}</span>
                  {group.headingMiddle}
                  <span className="text-[#1a2bc3]">{group.secondHighlight}</span>
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#0a0a0a]/90 mt-2.5">
                  {group.subtitle}
                </p>
              </div>
            </FadeIn>

            {/* Staff Cards Grid */}
            <StaggerContainer
              stagger={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {group.staff.map((member, sIdx) => (
                <StaggerItem key={sIdx}>
                  <div className="flex flex-col h-full group">
                    {/* Staff Image */}
                    <div className="w-full h-[306px] overflow-hidden rounded-lg bg-gray-100 relative mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Staff Name */}
                    <h4 className="font-display font-medium text-xl sm:text-[22px] text-[#0a0a0a] tracking-tight leading-snug mb-2">
                      {member.name}
                    </h4>

                    {/* Staff Role / Description */}
                    <p className="font-sans text-sm text-[#0a0a0a]/80 leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
