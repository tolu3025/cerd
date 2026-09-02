import React from 'react';
import {
  Zap,
  ScanLine,
  Radio,
  Cpu,
  Layers,
  ShieldCheck,
  TestTube2,
  Activity,
  Leaf,
  Atom,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { PageTransition } from '../components/shared/PageTransition';
import { FadeIn } from '../components/shared/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/shared/StaggerContainer';
import { GradientButton } from '../components/ui/GradientButton';

export const Facilities: React.FC = () => {
  const facilitiesData = [
    {
      id: 'tandem-accelerator',
      name: '1.7 MV Tandem Accelerator Laboratory',
      tag: 'Core Nuclear Infrastructure',
      badge: 'Particle Physics & NAA',
      description:
        'The National Electrostatics Corporation (NEC 5SDH-4) 1.7 MV Tandem Pelletron Particle Accelerator complex provides high-purity proton and alpha ion beams for non-destructive elemental assays, trace mineral characterization, and accelerated radiation damage simulations.',
      bg: 'bg-white',
      gradient: 'from-blue-100 via-indigo-50 to-gray-200',
      capabilities: [
        {
          title: 'Ion Beam Analysis (PIXE & PIGE)',
          desc: 'Simultaneous sub-ppm multi-elemental fingerprinting for geology, environmental aerosols, and metallurgy.',
          icon: <Zap size={24} className="text-cerd-blue" />,
        },
        {
          title: 'RBS & Depth Profiling',
          desc: 'Rutherford Backscattering Spectrometry for non-destructive atomic depth profiling and thin film stoichiometry.',
          icon: <ScanLine size={24} className="text-cerd-cyan" />,
        },
        {
          title: 'Nuclear Reaction Analysis (NRA)',
          desc: 'Isotopic cross-section evaluation, low-background gamma spectroscopy, and light-element nuclear diagnostics.',
          icon: <Radio size={24} className="text-cerd-blue" />,
        },
      ],
    },
    {
      id: 'materials-nanotech',
      name: 'Material Science & Nanotechnology Laboratory',
      tag: 'Functional Thin Films & Oxides',
      badge: 'Nanomaterials & Sputtering',
      description:
        'A state-of-the-art materials synthesis and characterization facility dedicated to the engineering of radiation-tolerant nanocomposites, photovoltaic thin films, semiconductor barriers, and supercapacitor electrode interfaces.',
      bg: 'bg-canvas',
      gradient: 'from-sky-100 via-blue-50 to-gray-200',
      capabilities: [
        {
          title: 'X-Ray Diffraction (XRD)',
          desc: 'Rigaku X-ray diffractometer for crystal structure determination, phase purity, and grain boundary stress analysis.',
          icon: <Cpu size={24} className="text-cerd-blue" />,
        },
        {
          title: 'AFM Surface Topography',
          desc: 'Atomic Force Microscopy for nanometer-scale surface roughness, 3D morphology, and magnetic domain mapping.',
          icon: <Layers size={24} className="text-cerd-cyan" />,
        },
        {
          title: 'Thin Film Magnetron Sputtering',
          desc: 'Dual RF/DC high-vacuum sputtering deposition system for precision semiconductor and refractory oxide coatings.',
          icon: <ShieldCheck size={24} className="text-cerd-blue" />,
        },
      ],
    },
    {
      id: 'environmental-analytical',
      name: 'Environmental & Analytical Chemistry Laboratory',
      tag: 'Chemical & Radiometric Assay',
      badge: 'Accredited Analytical Suite',
      description:
        'An internationally recognized environmental monitoring suite equipped for high-throughput chemical, heavy metal, and radiochemical analysis of groundwater, mining tailings, industrial effluents, and biological matrices.',
      bg: 'bg-white',
      gradient: 'from-teal-100 via-cyan-50 to-gray-200',
      capabilities: [
        {
          title: 'AAS & ICP-MS Spectrometry',
          desc: 'Inductively coupled plasma mass spectrometry for ultra-trace quantification of toxic heavy metals and rare earths.',
          icon: <TestTube2 size={24} className="text-cerd-blue" />,
        },
        {
          title: 'UV-Visible-NIR Spectrophotometry',
          desc: 'Double-beam spectrophotometry for optical bandgap evaluation, solar absorption metrics, and chemical speciation.',
          icon: <Activity size={24} className="text-cerd-cyan" />,
        },
        {
          title: 'Radon & Environmental Assay',
          desc: 'Continuous RAD7 electronic monitors and Alpha/Beta counting systems for baseline ecological compliance.',
          icon: <Leaf size={24} className="text-cerd-blue" />,
        },
      ],
    },
  ];

  return (
    <PageTransition className="w-full bg-canvas">
      {/* Top Header Hero */}
      <section className="bg-canvas pt-32 pb-16 sm:pb-20 border-b border-black/5">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              badge="INFRASTRUCTURE"
              title="Our Research Facilities"
              subtitle="Housing Nigeria’s premier particle accelerator and certified analytical spectroscopy suites available for academic collaboration and industrial testing."
              className="max-w-3xl mb-0"
            />
          </FadeIn>
        </div>
      </section>

      {/* 3 Facility Profile Sections */}
      {facilitiesData.map((facility, index) => (
        <section
          key={facility.id}
          id={facility.id}
          className={`${facility.bg} py-20 sm:py-24 border-b border-black/5`}
        >
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              {/* Large Aspect Ratio Image / Visual Illustration Placeholder */}
              <div
                className={`aspect-[21/9] sm:aspect-[21/8] bg-gradient-to-br ${facility.gradient} border border-black/5 rounded-2xl overflow-hidden mb-10 sm:mb-12 shadow-card relative flex flex-col justify-between p-6 sm:p-10`}
              >
                <div className="flex items-center justify-between">
                  <Badge variant="blue">{facility.tag}</Badge>
                  <span className="font-ui text-xs font-semibold text-muted tracking-wider uppercase">
                    Facility #{index + 1}
                  </span>
                </div>

                <div className="my-auto text-center py-4">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3 border border-black/5 text-cerd-blue">
                    {index === 0 ? <Atom size={32} /> : index === 1 ? <Building2 size={32} /> : <TestTube2 size={32} />}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-dark font-medium">
                    {facility.name}
                  </h3>
                  <p className="font-ui text-xs sm:text-sm text-muted uppercase tracking-wider mt-1">
                    Centre for Energy Research & Development • OAU Ile-Ife
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-black/5 font-ui text-xs text-muted">
                  <span className="flex items-center gap-1.5 text-cerd-blue font-semibold">
                    <CheckCircle2 size={14} /> Operational & Certified
                  </span>
                  <span>National Research Asset</span>
                </div>
              </div>
            </FadeIn>

            {/* Facility Description */}
            <div className="max-w-4xl mb-12 sm:mb-14">
              <FadeIn delay={0.15}>
                <div className="font-ui text-xs font-semibold text-cerd-blue uppercase tracking-widest mb-2">
                  {facility.badge}
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-dark font-medium leading-tight mb-4">
                  {facility.name}
                </h2>
                <p className="font-sans text-body text-base sm:text-lg leading-relaxed">
                  {facility.description}
                </p>
              </FadeIn>
            </div>

            {/* Capabilities: 3 Items in Row as GlassCards */}
            <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {facility.capabilities.map((cap, cIdx) => (
                <StaggerItem key={cIdx}>
                  <GlassCard hover className="h-full flex flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-cerd-blue/10 flex items-center justify-center mb-5">
                        {cap.icon}
                      </div>

                      <h4 className="font-sans font-semibold text-lg text-dark mb-2">
                        {cap.title}
                      </h4>

                      <p className="font-sans text-sm text-body leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Bottom Engagement CTA Strip */}
      <section className="bg-canvas py-16 text-center border-b border-black/5">
        <div className="max-w-2xl mx-auto px-4">
          <FadeIn>
            <h3 className="font-serif text-2xl sm:text-3xl text-dark font-medium mb-3">
              Book Laboratory Testing or Accelerator Beam Time
            </h3>
            <p className="font-sans text-sm sm:text-base text-body mb-6">
              Our facilities are open to university researchers, postgraduate fellows, mining operators, and industrial quality-assurance teams.
            </p>
            <GradientButton href="/contact">
              <span>SCHEDULE FACILITY ACCESS</span>
            </GradientButton>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};

export default Facilities;
