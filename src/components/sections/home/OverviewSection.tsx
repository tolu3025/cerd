import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const OverviewSection: React.FC = () => {
  const { overview } = HOME_CONTENT;

  return (
    <section id="who-we-are" className="bg-white py-16 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <FadeIn>
              {/* Badge */}
              <div className="inline-flex items-center border border-[#0a0a0a] rounded-[8px] px-3 py-1.5 mb-6 font-sans text-xs tracking-widest uppercase w-fit">
                {overview.badge}
              </div>

              {/* Heading: "Advancing Nigeria's Energy Future" */}
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#0a0a0a] leading-[1.1] tracking-[-0.05em] mb-6">
                Advancing Nigeria's{' '}
                <span className="text-[#1a2bc3]">Energy </span>
                Future
              </h2>

              {/* Paragraph */}
              <p className="font-sans text-[#0a0a0a] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                {overview.paragraph}
              </p>

              {/* CTA */}
              <Link
                to={overview.actionHref}
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#0a0a0a] underline underline-offset-4 hover:text-[#1a2bc3] transition-colors"
              >
                {overview.actionLabel}
              </Link>
            </FadeIn>
          </div>

          {/* Right: Images + Stats */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.2} direction="left">
              <div className="relative flex gap-3 mb-6">
                {/* Large image */}
                <div className="flex-1 h-[320px] sm:h-[380px] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={overview.image1}
                    alt="CERD Research"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Tall portrait image */}
                <div className="w-[38%] h-[320px] sm:h-[380px] rounded-lg overflow-hidden bg-gray-100 relative">
                  <img
                    src={overview.image2}
                    alt="CERD Science"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
