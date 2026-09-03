import React from 'react';
import { Atom, Sun, Cpu, TreePine } from 'lucide-react';
import { RESEARCH_CONTENT } from '../../../data/content';
import { Badge } from '../../ui/Badge';
import { SectionHeading } from '../../ui/SectionHeading';
import { FadeIn } from '../../shared/FadeIn';

export const ResearchDivisions: React.FC = () => {
  const { divisions } = RESEARCH_CONTENT;

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'nuclear-science':
        return <Atom size={28} className="text-cerd-blue" />;
      case 'materials-electronics':
        return <Cpu size={28} className="text-cerd-blue" />;
      case 'energy-management':
        return <Sun size={28} className="text-cerd-blue" />;
      case 'environmental-science':
        return <TreePine size={28} className="text-cerd-blue" />;
      default:
        return <Atom size={28} className="text-cerd-blue" />;
    }
  };

  return (
    <section id="divisions" className="bg-white py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="DIVISIONS DIRECTORY"
            title="Core Research Divisions"
            subtitle="Explore our specialized analytical wings conducting research in peaceful atomic energy, advanced functional devices, microgrids, and environmental monitoring."
          />
        </FadeIn>

        {/* 4 Alternating Rows */}
        <div className="space-y-20 lg:space-y-28 mt-12 sm:mt-16">
          {divisions.map((division, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={division.id}
                id={division.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-10 lg:gap-16 items-center`}
              >
                {/* Media Image / Illustration Placeholder */}
                <div className="w-full lg:w-1/2">
                  <FadeIn delay={0.15} direction={isEven ? 'right' : 'left'}>
                    <div className="aspect-[16/10] bg-gradient-to-br from-canvas via-gray-100 to-gray-200 border border-black/5 rounded-2xl overflow-hidden relative shadow-card flex flex-col justify-between p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <Badge variant="blue">DIVISION {division.number}</Badge>
                        <span className="font-ui text-xs font-semibold text-muted tracking-wider uppercase">
                          CERD • OAU
                        </span>
                      </div>

                      <div className="text-center my-auto py-6">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3 border border-black/5">
                          {getDivisionIcon(division.id)}
                        </div>
                        <h4 className="font-serif text-xl sm:text-2xl text-dark font-medium">
                          {division.name}
                        </h4>
                      </div>

                    </div>
                  </FadeIn>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <FadeIn delay={0.25} direction={isEven ? 'left' : 'right'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center">
                        {getDivisionIcon(division.id)}
                      </div>
                      <div>
                        <span className="font-display text-xs font-bold text-cerd-blue uppercase tracking-wider block">
                          DIVISION {division.number}
                        </span>
                        <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-dark">
                          {division.name}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-body text-base leading-relaxed mb-6">
                      {division.summary}
                    </p>

                    {/* Sub-specialties as Tag Pills */}
                    <div className="space-y-3 mb-6">
                      <span className="font-ui text-xs font-semibold text-muted uppercase tracking-wider block">
                        Focus Areas & Methodologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {division.keyAreas.map((area, aIdx) => (
                          <span
                            key={aIdx}
                            className="bg-canvas border border-black/5 text-dark font-ui text-xs px-3 py-1.5 rounded-lg leading-snug"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Equipment */}
                    <div className="pt-4 border-t border-black/5">
                      <span className="font-ui text-xs font-semibold text-muted uppercase tracking-wider block mb-2">
                        Key Equipment:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-ui text-xs text-body">
                        {division.equipment.map((eq, eIdx) => (
                          <li key={eIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cerd-blue flex-shrink-0" />
                            <span className="truncate">{eq}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
