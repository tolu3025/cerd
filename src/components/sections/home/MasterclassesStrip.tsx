import React from 'react';
import { GraduationCap, Wrench, FileSearch, ShieldCheck } from 'lucide-react';
import { HOME_CONTENT } from '../../../data/content';
import { FadeIn } from '../../shared/FadeIn';

export const MasterclassesStrip: React.FC = () => {
  const { masterclasses } = HOME_CONTENT;

  const getItemIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap size={24} className="text-cerd-blue" />;
      case 1:
        return <Wrench size={24} className="text-cerd-cyan" />;
      case 2:
        return <FileSearch size={24} className="text-cerd-blue" />;
      case 3:
        return <ShieldCheck size={24} className="text-cerd-cyan" />;
      default:
        return <GraduationCap size={24} className="text-cerd-blue" />;
    }
  };

  return (
    <section className="bg-white border-y border-black/5 py-14 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-black/5">
            {masterclasses.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 lg:px-6 first:pl-0 last:pr-0"
              >
                <div className="w-12 h-12 rounded-xl bg-canvas flex items-center justify-center flex-shrink-0 border border-black/5">
                  {getItemIcon(idx)}
                </div>
                <div className="flex-1">
                  <span className="font-ui text-[11px] uppercase tracking-wider font-semibold text-cerd-blue block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-sans font-semibold text-dark text-base leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-muted leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
