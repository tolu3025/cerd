import React from 'react';
import { BookOpen, Award, Mail, Sparkles, Building2 } from 'lucide-react';
import { FadeIn } from '../../shared/FadeIn';

export const DirectorProfile: React.FC = () => {
  const qualifications = [
    'B.Sc. (Hons) in Physics — Obafemi Awolowo University',
    'M.Sc. in Technology Planning & Management — OAU Ile-Ife',
    'Ph.D. in Energy Economics & Nuclear Technology Policy',
    'Fellow, Nigerian Institute of Physics (FNIP)',
  ];

  const researchAreas = [
    'Energy Policy & Planning',
    'Nuclear Economics',
    'Energy Systems Modeling',
    'Decarbonization Pathways',
    'Technology Management',
    'Energy Transition Frameworks',
  ];

  return (
    <section className="bg-white py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-canvas border border-black/5 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Director Portrait Placeholder Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="aspect-[3/4] w-full max-w-md bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-card border border-black/10">
                  {/* Subtle Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-ui text-[11px] font-semibold text-white px-3 py-1 rounded-full bg-dark/40 backdrop-blur-sm border border-white/20 uppercase tracking-wider">
                      Directorate
                    </span>
                    <Building2 size={18} className="text-white/80" />
                  </div>

                  {/* Center Visual Emblem */}
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto mb-3 text-white">
                      <Award size={36} />
                    </div>
                  </div>

                  {/* Bottom Portrait Overlay */}
                  <div className="relative z-10 bg-dark/70 backdrop-blur-md rounded-xl p-4 border border-white/10 text-white">
                    <span className="font-ui text-[10px] uppercase tracking-widest text-cerd-cyan font-semibold block mb-0.5">
                      Director of the Centre
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium">
                      Prof. Abiodun Suleiman Momodu
                    </h3>
                    <p className="font-ui text-xs text-white/70">
                      Centre for Energy Research & Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Executive Profile */}
              <div className="lg:col-span-7">
                <div className="font-ui text-[11px] uppercase tracking-widest text-cerd-blue font-semibold mb-2">
                  DIRECTOR'S PROFILE
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-dark font-medium leading-tight mb-1">
                  Prof. Abiodun Suleiman Momodu
                </h2>

                <p className="font-sans text-cerd-blue font-semibold text-base sm:text-lg mb-1">
                  Research Professor & Director
                </p>

                <p className="font-ui text-xs sm:text-sm text-muted font-medium mb-6">
                  Assumed Directorship August 1, 2025 • Obafemi Awolowo University (OAU), Ile-Ife
                </p>

                {/* Biography */}
                <p className="font-sans text-body text-sm sm:text-base leading-relaxed mb-6">
                  Prof. Abiodun Suleiman Momodu is a renowned research professor of energy economics, technology policy, and nuclear energy systems planning. With over two decades of dedicated scholarship at Obafemi Awolowo University, he has spearheaded national energy demand projections, decarbonization roadmaps, and international collaborations with the IAEA and the Energy Commission of Nigeria.
                </p>

                {/* Academic Qualifications with BookOpen Icon */}
                <div className="mb-6 pt-5 border-t border-black/5">
                  <div className="flex items-center gap-2 font-ui text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                    <BookOpen size={15} className="text-cerd-blue" />
                    <span>Academic Qualifications & Fellowships:</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs sm:text-sm text-body">
                    {qualifications.map((qual, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-2">
                        <Sparkles size={13} className="text-cerd-blue mt-1 flex-shrink-0" />
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Research Areas Tag Pills */}
                <div className="pt-4 border-t border-black/5">
                  <span className="font-ui text-xs font-semibold uppercase tracking-wider text-muted block mb-3">
                    Specialized Research Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {researchAreas.map((area, rIdx) => (
                      <span
                        key={rIdx}
                        className="bg-white border border-black/10 text-dark font-ui text-xs font-medium px-3 py-1 rounded-lg"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Button */}
                <div className="mt-8 pt-5 border-t border-black/5 flex items-center gap-3">
                  <a
                    href="mailto:amomodu@cerd.oau.edu.ng"
                    className="inline-flex items-center gap-2 bg-cerd-blue text-white font-ui text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-cerd-blue-dark transition-colors shadow-button"
                  >
                    <Mail size={14} />
                    <span>Contact Directorate</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
