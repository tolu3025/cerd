import React from 'react';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const MasterclassesStrip: React.FC = () => {
  const { masterclasses } = HOME_CONTENT;

  return (
    <section className="bg-[#f7f7f7] border-y border-black/5 py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-black/10">
            {masterclasses.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col pt-6 sm:pt-0 lg:px-6 first:pl-0 first:pt-0 last:pr-0"
              >
                <span className="font-sans text-[11px] font-semibold text-[#1a2bc3] uppercase tracking-wider mb-2">
                  {item.category}
                </span>

                <h4 className="font-display font-semibold text-[#0a0a0a] text-lg leading-snug mb-2 whitespace-pre-line">
                  {item.title}
                </h4>

                <p className="font-sans text-xs text-[#0a0a0a]/70 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
