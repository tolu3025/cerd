import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../../ui/SectionHeading';
import { GlassCard } from '../../ui/GlassCard';
import { Badge } from '../../ui/Badge';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { FadeIn } from '../../shared/FadeIn';

export const FlagshipProjects: React.FC = () => {
  const projects = [
    {
      title: 'National LEU Reactor Core & Spectrometry Conversion',
      division: 'Nuclear Science & Technology',
      status: 'Active National Programme',
      description:
        'Strategic collaboration with international regulators ensuring full compliance with low-enriched uranium protocols, non-proliferation standards, and high-flux analytical neutron activation channels.',
    },
    {
      title: 'Hybrid Solar-Biomass Microgrid Testbed',
      division: 'Energy Management',
      status: 'Pilot Deployment',
      description:
        'Engineering and operational benchmarking of combined 50kW biomass gasifier units integrated with actively cooled photovoltaic-thermal (PV/T) arrays for reliable rural community electrification.',
    },
    {
      title: 'Advanced Material & Radiation Stress Characterization',
      division: 'Materials & Electronics',
      status: 'Ongoing Multi-Year Study',
      description:
        'Investigation of heavy ion bombardment damage on novel refractory composite thin films and semiconductor optoelectronics to extend reactor component lifespans.',
    },
  ];

  return (
    <section className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            badge="STRATEGIC INITIATIVES"
            title="Flagship Research Projects"
            subtitle="Explore our landmark multi-year engineering and scientific initiatives addressing priority national goals."
          />
        </FadeIn>

        <StaggerContainer stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <StaggerItem key={idx}>
              <GlassCard hover className="h-full flex flex-col justify-between p-8">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <Badge variant="blue">{project.division}</Badge>
                    <span className="font-ui text-[11px] text-cerd-blue font-semibold flex items-center gap-1">
                      <CheckCircle2 size={13} />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <h3 className="font-sans font-semibold text-xl text-dark leading-snug mb-3">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm text-body leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-cerd-blue font-ui text-sm font-semibold uppercase tracking-wider hover:text-cerd-blue-dark group transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
