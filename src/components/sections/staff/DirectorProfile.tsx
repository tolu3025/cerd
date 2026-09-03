import React from 'react';
import { FadeIn } from '../../shared/FadeIn';
import { STAFF_CONTENT } from '../../../data/content';

export const DirectorProfile: React.FC = () => {
  const { director } = STAFF_CONTENT;

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Portrait Photo */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-[452px] h-[480px] sm:h-[580px] lg:h-[684px] overflow-hidden rounded-xl bg-gray-100 shadow-sm relative">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Bio and Details */}
            <div className="lg:col-span-7 flex flex-col justify-start pt-2">
              {/* Featured Badge */}
              <div>
                <span className="inline-flex items-center justify-center border border-[#0a0a0a] rounded-[12px] px-3.5 py-1 text-xs sm:text-sm font-sans tracking-wide text-[#0a0a0a] mb-5">
                  {director.featuredBadge}
                </span>
              </div>

              {/* Director Name */}
              <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-[32px] text-[#0a0a0a] tracking-tight mb-1">
                {director.name}
              </h2>

              {/* Role */}
              <p className="font-sans text-sm sm:text-base text-[#0a0a0a] font-normal mb-6">
                {director.role}
              </p>

              {/* Bio Paragraphs */}
              <div className="space-y-4 mb-8">
                {director.bioParagraphs.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="font-sans text-sm sm:text-[15px] text-[#0a0a0a] leading-[1.65]"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Specialties / Key Focus Bullet Points */}
              <div className="space-y-3 pt-2">
                {director.specialties.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#360a0a] flex-shrink-0" />
                    <span className="font-display font-medium text-sm sm:text-[15px] text-[#0a0a0a]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
