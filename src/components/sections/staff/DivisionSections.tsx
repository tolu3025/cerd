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

                    {/* Staff Name — clickable if scholarUrl exists */}
                    {member.scholarUrl ? (
                      <a
                        href={member.scholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-medium text-xl sm:text-[22px] text-[#0a0a0a] tracking-tight leading-snug mb-2 hover:text-[#1a2bc3] transition-colors duration-200 inline-flex items-center gap-1.5 group/link"
                        title="View Scholar Profile"
                      >
                        {member.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0 mt-0.5"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      <h4 className="font-display font-medium text-xl sm:text-[22px] text-[#0a0a0a] tracking-tight leading-snug mb-2">
                        {member.name}
                      </h4>
                    )}

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
