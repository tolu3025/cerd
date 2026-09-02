import React from 'react';
import { User, Mail } from 'lucide-react';
import { FadeIn } from '../../shared/FadeIn';
import { StaggerContainer, StaggerItem } from '../../shared/StaggerContainer';
import { GlassCard } from '../../ui/GlassCard';

interface StaffCardData {
  name: string;
  title: string;
  specialization: string;
  email: string;
}

interface DivisionGroup {
  id: string;
  name: string;
  code: string;
  staff: StaffCardData[];
}

export const DivisionSections: React.FC = () => {
  const divisions: DivisionGroup[] = [
    {
      id: 'environmental-earth-science',
      name: 'Environmental and Earth Science',
      code: 'EES',
      staff: [
        {
          name: 'Prof. (Mrs.) B. T. Adeleke',
          title: 'Research Professor & Division Coordinator',
          specialization:
            'Naturally Occurring Radioactive Materials (NORM), Environmental Radiochemistry, Heavy Metal Speciation, Water Quality Surveillance.',
          email: 'badeleke@cerd.oau.edu.ng',
        },
        {
          name: 'Prof. O. O. Fasunwon',
          title: 'Research Professor',
          specialization:
            'Applied Geophysics, Seismotectonics, Crustal Dynamics, Soil Radon Emanation, Mineral Exploration Modeling.',
          email: 'oofasunwon@cerd.oau.edu.ng',
        },
        {
          name: 'Dr. J. O. Olowookere',
          title: 'Senior Research Fellow',
          specialization:
            'Radiation Biophysics, Cytogenetic Assays, Biological Dosimetry, ICP-MS Environmental Trace Assays.',
          email: 'jolowookere@cerd.oau.edu.ng',
        },
      ],
    },
    {
      id: 'energy-management-technology',
      name: 'Energy Management and Technology',
      code: 'EMT',
      staff: [
        {
          name: 'Engr. Dr. K. M. Ogundele',
          title: 'Senior Research Fellow & Division Coordinator',
          specialization:
            'Hybrid Photovoltaic-Thermal (PV/T) Collectors, Decentralized Microgrids, Industrial Energy Auditing.',
          email: 'kogundele@cerd.oau.edu.ng',
        },
        {
          name: 'Dr. A. O. Ojo',
          title: 'Research Fellow',
          specialization:
            'Biomass Gasification, Pyrolysis Kinetics, Bio-Char Soil Amendments, Solar Resource Modeling.',
          email: 'aojo@cerd.oau.edu.ng',
        },
      ],
    },
    {
      id: 'applied-nuclear-science-technology',
      name: 'Applied Nuclear Science and Technology',
      code: 'ANST',
      staff: [
        {
          name: 'Prof. F. S. Olise',
          title: 'Research Professor & Division Coordinator',
          specialization:
            'Ion Beam Analysis (PIXE/PIGE), Atmospheric Aerosol Particulate Fingerprinting, Nuclear Spectroscopy.',
          email: 'folise@cerd.oau.edu.ng',
        },
        {
          name: 'Prof. A. S. Fasunwon',
          title: 'Senior Research Fellow',
          specialization:
            'Health Physics, Radiation Dosimetry, Thermoluminescent Dosimetry (TLD) Badge Processing, Radioprotection.',
          email: 'afasunwon@cerd.oau.edu.ng',
        },
        {
          name: 'Dr. H. A. Balogun',
          title: 'Senior Research Fellow & Accelerator Engineer',
          specialization:
            'Pelletron Accelerator Beamline Operations, Neutron Activation Analysis (NAA), Radioisotope Production.',
          email: 'hbalogun@cerd.oau.edu.ng',
        },
      ],
    },
    {
      id: 'materials-electronics',
      name: 'Materials and Electronics',
      code: 'ME',
      staff: [
        {
          name: 'Dr. O. E. Alao',
          title: 'Senior Research Fellow & Division Coordinator',
          specialization:
            'Thin Film Synthesis, RF/DC Magnetron Sputtering, Nanostructured Functional Oxides, Radiation-Resistant Coatings.',
          email: 'oalao@cerd.oau.edu.ng',
        },
        {
          name: 'Prof. G. A. Osinkolu',
          title: 'Research Professor',
          specialization:
            'Radiation Damage in Nuclear Alloys, Transmission Electron Microscopy (TEM), Phase Transformation in Metals.',
          email: 'gosinkolu@cerd.oau.edu.ng',
        },
        {
          name: 'Dr. M. A. Eleruja',
          title: 'Senior Research Fellow',
          specialization:
            'Solid State Electronics, Optoelectronic Devices, Chemical Vapor Deposition (CVD), Semiconductor Physics.',
          email: 'meleruja@cerd.oau.edu.ng',
        },
      ],
    },
    {
      id: 'maintenance-services',
      name: 'Maintenance and Services',
      code: 'MS',
      staff: [
        {
          name: 'Engr. T. A. Adediran',
          title: 'Chief Technical Engineer & Unit Head',
          specialization:
            'High-Voltage Electrical Infrastructure, Grid Synchronization, Laboratory Emergency Power Management.',
          email: 'tadediran@cerd.oau.edu.ng',
        },
        {
          name: 'Engr. I. K. Salami',
          title: 'Principal Mechanical Engineer',
          specialization:
            'Ultra-High Vacuum (UHV) Systems, Pelletron SF6 Gas Handling, Precision Pneumatic Target Chambers.',
          email: 'isalami@cerd.oau.edu.ng',
        },
        {
          name: 'Mr. O. A. Babalola',
          title: 'Senior Systems & Instrumentation Technologist',
          specialization:
            'Nuclear Detector Electronics, Radiation Survey Meter Calibration, Multichannel Analyzer Maintenance.',
          email: 'obabalola@cerd.oau.edu.ng',
        },
      ],
    },
  ];

  return (
    <section className="bg-canvas py-20 sm:py-24 border-b border-black/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-24">
        {divisions.map((division) => (
          <div key={division.id} id={division.id} className="scroll-mt-24">
            <FadeIn>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 pb-4 border-b border-black/10">
                <div>
                  <span className="font-ui text-xs font-semibold text-cerd-blue uppercase tracking-widest block mb-1">
                    DIVISION DIRECTORY • {division.code}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-dark font-medium">
                    {division.name}
                  </h3>
                </div>
                <span className="font-ui text-xs text-muted font-medium">
                  {division.staff.length} Faculty & Technical Staff
                </span>
              </div>
            </FadeIn>

            {/* Staff Cards Grid */}
            <StaggerContainer
              stagger={0.1}
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                division.staff.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
              } gap-6 sm:gap-8`}
            >
              {division.staff.map((member, sIdx) => (
                <StaggerItem key={sIdx}>
                  <GlassCard hover className="h-full flex flex-col justify-between p-6 sm:p-7">
                    <div>
                      {/* Portrait Placeholder Aspect Square */}
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-5 border border-black/5 flex items-center justify-center relative group">
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-muted group-hover:scale-105 transition-transform">
                          <User size={30} className="text-cerd-blue" />
                        </div>
                        <span className="absolute bottom-3 font-ui text-[10px] uppercase font-semibold text-muted bg-white/80 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                          {division.code}
                        </span>
                      </div>

                      {/* Name */}
                      <h4 className="font-sans font-semibold text-lg text-dark leading-snug mb-1">
                        {member.name}
                      </h4>

                      {/* Title */}
                      <p className="font-ui text-xs sm:text-sm text-cerd-blue font-medium mb-3">
                        {member.title}
                      </p>

                      {/* Specialization */}
                      <p className="font-sans text-xs sm:text-sm text-body leading-relaxed mb-4">
                        {member.specialization}
                      </p>
                    </div>

                    {/* Email Contact Link */}
                    <div className="pt-3 border-t border-black/5">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 font-ui text-xs text-muted hover:text-cerd-blue transition-colors"
                      >
                        <Mail size={13} />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </div>
    </section>
  );
};
