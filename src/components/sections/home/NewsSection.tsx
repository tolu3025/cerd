import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const NewsSection: React.FC = () => {
  const { news } = HOME_CONTENT;

  return (
    <section id="news" className="bg-white py-16 sm:py-24 border-t border-black/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-12">
          <div className="inline-flex items-center border border-[#0a0a0a] rounded-[8px] px-3 py-1.5 mb-6 font-sans text-xs tracking-widest uppercase w-fit">
            HAPPENING NOW
          </div>

          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#0a0a0a] leading-[1.1] tracking-[-0.05em] max-w-xl">
            Featured News & Events
          </h2>
        </FadeIn>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <Link to={item.href} className="group block flex flex-col h-full">
                {/* Image */}
                <div className="h-56 w-full rounded-2xl overflow-hidden bg-gray-100 mb-5 border border-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Badge & Date */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-xs font-medium text-[#1a2bc3] bg-[#1a2bc3]/10 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="font-sans text-xs text-[#0a0a0a]/50">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl text-[#0a0a0a] group-hover:text-[#1a2bc3] transition-colors leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="font-sans text-xs sm:text-sm text-[#0a0a0a]/70 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
