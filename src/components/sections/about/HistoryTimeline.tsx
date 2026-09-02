import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../../../data/content';
import { SectionHeading } from '../../ui/SectionHeading';
import { GradientButton } from '../../ui/GradientButton';
import { FadeIn } from '../../shared/FadeIn';

export const HistoryTimeline: React.FC = () => {
  const { historyTimeline } = ABOUT_CONTENT;

  return (
    <section id="history" className="bg-white py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="CHRONICLE OF EXCELLENCE"
            title="Our History (1978 – Present)"
            subtitle="Tracing the strategic evolution of nuclear physics, particle accelerators, and renewable energy research in Nigeria."
          />
        </FadeIn>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-black/10 space-y-12 my-12 ml-2 sm:ml-4">
          {historyTimeline.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-cerd-blue border-4 border-white shadow-sm ring-1 ring-black/10" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                <span className="font-display font-bold text-lg text-cerd-blue">
                  {item.year}
                </span>
                <span className="font-ui text-xs uppercase tracking-wider text-muted font-semibold">
                  {item.title}
                </span>
              </div>

              <p className="font-sans text-body text-base leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.4} className="pt-4">
          <GradientButton href="/research">
            <span>EXPLORE RESEARCH</span>
            <ArrowRight size={16} />
          </GradientButton>
        </FadeIn>
      </div>
    </section>
  );
};
