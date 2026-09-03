import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const DivisionsSection: React.FC = () => {
  const { divisions } = HOME_CONTENT;

  return (
    <section id="divisions" className="bg-[#0a0a0a] text-white py-20 sm:py-28">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <div className="inline-flex items-center border border-white/30 rounded-[8px] px-3 py-1.5 mb-6 font-sans text-xs tracking-widest uppercase w-fit text-white/80">
            OUR DIVISIONS
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-[-0.05em] max-w-2xl">
            Divisions Shaping Energy Research & Innovation
          </h2>
        </FadeIn>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((div, idx) => (
            <FadeIn key={div.number} delay={idx * 0.1}>
              <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between h-full hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-semibold text-[#6f8bff] text-sm tracking-wider">
                      DIVISION {div.number}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-white mb-4">
                    {div.name}
                  </h3>

                  <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                    {div.summary}
                  </p>

                  <div className="space-y-2.5 mb-10 pt-6 border-t border-white/10">
                    <span className="font-sans text-xs font-semibold text-white/40 uppercase tracking-widest block mb-3">
                      Capabilities:
                    </span>
                    {div.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-3 font-sans text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6f8bff]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    to={div.href}
                    className="inline-flex items-center gap-2 text-white font-sans text-sm font-medium hover:text-[#6f8bff] transition-colors"
                  >
                    <span>Learn More</span>
                    <span className="text-base">→</span>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
