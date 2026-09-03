/**
 * Centre for Energy Research and Development (CERD)
 * Obafemi Awolowo University (OAU), Ile-Ife, Osun State, Nigeria
 * 
 * Single Source of Truth for Website Content
 */

// ==========================================
// 1. NAVIGATION LINKS
// ==========================================
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'RESEARCH', href: '/research' },
  { label: 'PUBLICATION', href: '/publications' },
  { label: 'FACILITIES', href: '/facilities' },
  { label: 'STAFF', href: '/staff' },
  { label: 'NEWS & EVENTS', href: '/news' },
  { label: 'ABOUT US', href: '/about-us' },
];

// ==========================================
// 2. FOOTER DATA
// ==========================================
export interface FooterData {
  mission: string;
  quickLinks: { label: string; href: string }[];
  domains: string[];
  contact: {
    institution: string;
    university: string;
    address: string;
    cityState: string;
    country: string;
    phone: string;
    email: string;
    copyright: string;
  };
}

export const FOOTER_DATA: FooterData = {
  mission:
    'Pioneering energy research for a sustainable future. We bridge the gap between advanced nuclear science and practical renewable energy solutions for Africa and the world.',
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Research', href: '/research' },
    { label: 'Publications', href: '/publications' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'News & Events', href: '/news' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Staff Directory', href: '/staff' },
  ],
  domains: [
    'Radiation Biophysics',
    'Nuclear Science & Engineering',
    'Renewable Energy System',
    'Material Science',
    'Environmental Monitoring',
  ],
  contact: {
    institution: 'Centre for Energy Research and Development (CERD)',
    university: 'Obafemi Awolowo University',
    address: 'CERD Complex, Road 1, OAU Campus',
    cityState: 'Ile-Ife, Osun State',
    country: 'Nigeria',
    phone: '+234 802 555 0199',
    email: 'Info@cerd.oau.edu.ng',
    copyright: '2026 CERD. All rights reserved | OAU ILE-IFE',
  },
};

// ==========================================
// 3. HOME CONTENT
// ==========================================
export interface HomeStat {
  value: string;
  label: string;
  subtext: string;
}

export interface HomeDivision {
  number: string;
  name: string;
  summary: string;
  capabilities: string[];
  href: string;
}

export interface HomeImpactPillar {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface HomeResearchFrontier {
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface HomeNewsItem {
  type: 'event' | 'obituary' | 'infrastructure';
  badge: string;
  date: string;
  title: string;
  summary: string;
  href: string;
  image: string;
}

export interface HomeMasterclass {
  title: string;
  category: string;
  summary: string;
}

export interface HomeContent {
  hero: {
    badge: string;
    heading: string;
    headingBlue: string;
    headingSuffix: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    carouselImages: { src: string; alt: string }[];
    ticker: string[];
  };
  overview: {
    badge: string;
    paragraph: string;
    actionLabel: string;
    actionHref: string;
    image1: string;
    image2: string;
  };
  stats: HomeStat[];
  divisions: HomeDivision[];
  impactPillars: HomeImpactPillar[];
  researchFrontiers: HomeResearchFrontier[];
  news: HomeNewsItem[];
  masterclasses: HomeMasterclass[];
}

export const HOME_CONTENT: HomeContent = {
  hero: {
    badge: 'Curiousity',
    heading: "Advancing Nigeria's ",
    headingBlue: 'Energy ',
    headingSuffix: 'Future',
    subheading:
      'Pioneering nuclear spectroscopy and molecular analysis for a sustainable future',
    primaryCta: { label: 'Explore Lab', href: '/facilities' },
    carouselImages: [
      {
        src: 'https://framerusercontent.com/images/rjZUEodEtg6vt0pxUMUKscFZwbk.png?width=1080&height=738',
        alt: 'CERD Research Lab',
      },
      {
        src: 'https://framerusercontent.com/images/KSu7tAymvEl3lWV8ndVMAO88lQ.png?width=3072&height=2048',
        alt: 'CERD Laboratory Facility',
      },
      {
        src: 'https://framerusercontent.com/images/QkP6nGjr0BctjWMUBosPXFjB9C8.jpeg?width=2400&height=1350',
        alt: 'CERD Campus',
      },
    ],
    ticker: [
      'NUCLEAR TECHNOLOGY',
      'MASTERCLASS',
      'RENEWABLE ENERGY',
      'PROTOTYPE',
      'ENVIRONMENTAL IMPACT',
      'ASSESSMENT',
      'ADVANCED MATERIAL',
      'TESTING',
    ],
  },
  overview: {
    badge: 'WHO WE ARE',
    paragraph:
      'The Centre for Energy Research and Development (CERD) is a premier hub for cutting-edge research, training, and innovation. Since 1978, we have pioneered solutions in nuclear science, renewable energy, and materials engineering to address critical national and global challenges',
    actionLabel: 'Our History',
    actionHref: '/about-us',
    image1:
      'https://framerusercontent.com/images/Er40ItEQSaFwQk2Ncratieiro.png?width=1552&height=1013',
    image2:
      'https://framerusercontent.com/images/fyMq20t3AlKKhrpl4tFEyiTD4U.png?width=1024&height=1536',
  },
  stats: [
    {
      value: '2,000+',
      label: 'Research paper',
      subtext: 'Peer-reviewed research papers and technical scientific reports',
    },
    {
      value: '48+',
      label: 'Years of excellence',
      subtext: 'Operating continuously since establishment in 1978',
    },
  ],
  divisions: [
    {
      number: '01',
      name: 'Nuclear Science & Tech',
      summary: 'Pioneering peaceful nuclear application and reactor engineering',
      capabilities: [
        'Reactor physics',
        'Neutron activation analysis (NAA)',
        'Ion beam analysis',
        'Radioisotope radiation studies',
      ],
      href: '/research#nuclear-science',
    },
    {
      number: '02',
      name: 'Materials & Electronics',
      summary: 'Developing next-gen materials & electric  components.',
      capabilities: [
        'Nanomaterials',
        'Polymer composites',
        'Radiation resistance testing',
        'Thin film synthesis',
      ],
      href: '/research#materials-electronics',
    },
    {
      number: '03',
      name: 'Energy Management',
      summary: 'Advancing clean energy solution and atmospheric research',
      capabilities: [
        'Solar photovoltaic & thermal systems',
        'Biomass conversion',
        'Energy storage',
        'Microgrids',
      ],
      href: '/research#energy-management',
    },
    {
      number: '04',
      name: 'Environmental Science',
      summary: 'Safeguarding natural resources and monitoring climate dynamics',
      capabilities: [
        'Pollution assessment',
        'Heavy metal monitoring',
        'Seismotectonics',
        'Geochemical resource mapping',
      ],
      href: '/research#environmental-science',
    },
  ],
  impactPillars: [
    {
      number: '01',
      title: 'Innovation',
      description:
        'We strengthen national capacity through discovery science enabled by multidisciplinary teams and powerful research tools, translating advancements to address critical priorities.',
      image:
        'https://framerusercontent.com/images/BkqJTZP49I4QpeiyFZExJTkJk.png?width=1537&height=1023',
    },
    {
      number: '02',
      title: 'Energy',
      description:
        'We advance technologies to ensure secure, affordable, and reliable energy to fuel economic growth. Our teams develop solutions across the full energy landscape.',
      image:
        'https://framerusercontent.com/images/REVTm6htsELyPjJCk9XfO1wEs.png?width=1536&height=1024',
    },
    {
      number: '03',
      title: 'Competitiveness',
      description:
        'Fostering industrial growth through high-tech material science and manufacturing innovations that give our partners a distinct global advantage.',
      image:
        'https://framerusercontent.com/images/663Fpzu6rqbn2BfHXnrDFvl3JA.jpg?width=720&height=404',
    },
    {
      number: '04',
      title: 'Security',
      description:
        'Enhancing national and reliable infrastructure security through radiation monitoring, advanced sensing, and resilient system design.',
      image:
        'https://framerusercontent.com/images/j23aKLX2kuxiIezL1Yclzjeqj6U.png?width=1536&height=1024',
    },
  ],
  researchFrontiers: [
    {
      title: 'Cell Death Kinetics',
      category: 'RESEARCH FRONTIER',
      description:
        'investigating the fundamental mechanisms of cellular decay  to improve energy systems in biological context.',
      image:
        'https://framerusercontent.com/images/CeXsWCsiDQzYEPtR8nRsD3I8Hy0.png?width=1254&height=1254',
    },
    {
      title: 'Ferroptosis Analysis',
      category: 'RESEARCH FRONTIER',
      description:
        'Cutting-edge analysis of iron-dependent cell death pathways and their implications for medical energy application',
      image:
        'https://framerusercontent.com/images/og7ax1SB51Ogv977HSx8T4Gho.jpg?width=735&height=490',
    },
    {
      title: 'Bio-Energy Systems',
      category: 'RESEARCH FRONTIER',
      description:
        'Harnessing biological markers and processes for sustainable renewable energy generation',
      image:
        'https://framerusercontent.com/images/O0ZuzUJGMtqHoalaySYHW7O0igk.png?width=1536&height=1024',
    },
    {
      title: 'Material Science',
      category: 'RESEARCH FRONTIER',
      description:
        'Developing novel materials with superior thermal and radiation resistance for next-gen reactors.',
      image:
        'https://framerusercontent.com/images/qMTwnHOvzZewCQJu2dSOEagxj8s.png?width=1536&height=1024',
    },
  ],
  news: [
    {
      type: 'event',
      badge: 'Event',
      date: 'May 18, 2026',
      title: 'CERD Organizes 50th Anniversary of Nuclear Science in Nigeria',
      summary:
        'CERD host a national symposium commemorating 50 years of peaceful nuclear of science and technological research achievement in Nigeria.',
      href: '/news/50th-anniversary-nuclear-science',
      image:
        'https://framerusercontent.com/images/ILa9NdPyVozIvcteVlNAP1sPFzI.jpeg?width=1470&height=980',
    },
    {
      type: 'obituary',
      badge: 'Obituary',
      date: 'May 10, 2026',
      title: 'CERD Mourns the transition of Two Forecast Nuclear  Scientist',
      summary:
        'The management and staff of CERD mourn the passing of two pioneer nuclear scientists who laid the foundation for energy research in Nigeria',
      href: '/news/transition-pioneer-nuclear-scientists',
      image:
        'https://framerusercontent.com/images/XtZWdLIRgvd7bKFftKp1gEKPSqE.png?width=1536&height=1024',
    },
    {
      type: 'infrastructure',
      badge: 'Infrastructure',
      date: 'April 18, 2026',
      title: 'CERD Research and Service Wear New Look',
      summary:
        'The Research and Service building has been completely renovated and upgraded with modern laboratories, offices, and smart seminar halls.',
      href: '/news/research-service-building-renovation',
      image:
        'https://framerusercontent.com/images/jy9yG3PyRCsDOb2Dx45CUSZ93tg.png?width=1672&height=941',
    },
  ],
  masterclasses: [
    {
      title: 'Nuclear Technology\nMasterclass',
      category: 'NUCLEAR TECHNOLOGY',
      summary:
        'Intensive hands-on professional certification in gamma spectrometry, radiation protection dosimetry, and reactor physics.',
    },
    {
      title: 'Renewable Energy Prototype',
      category: 'RENEWABLE ENERGY',
      summary:
        'Demonstration and bench testing of CERD-engineered hybrid photovoltaic-thermal (PV/T) solar collectors and modular gasification units.',
    },
    {
      title: 'Environmental Impact Assessment',
      category: 'ENVIRONMENTAL IMPACT',
      summary:
        'Comprehensive radiological, chemical, and heavy-metal ecological audits tailored for industrial, mining, and infrastructural projects.',
    },
    {
      title: 'Advanced Material Testing',
      category: 'ADVANCED MATERIAL',
      summary:
        'High-precision characterization of polymers, alloys, semiconductors, and ceramic barriers under extreme thermal and radiation stress.',
    },
  ],
};

// ==========================================
// 4. ABOUT CONTENT
// ==========================================
export interface AboutContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  mission: string;
  impacts: {
    title: string;
    description: string;
  }[];
  historyTimeline: {
    year: string;
    title: string;
    description: string;
  }[];
  directorQuote: {
    quote: string;
    name: string;
    title: string;
    institution: string;
  };
}

export const ABOUT_CONTENT: AboutContent = {
  hero: {
    badge: 'ABOUT CERD',
    heading: 'Pioneering Energy & Nuclear Excellence Since 1978',
    subheading:
      'Established under the National Atomic Energy Programme, CERD serves as Nigeria’s flagship centre for nuclear research, clean energy development, and high-level manpower training.',
  },
  mission:
    'To conduct multidisciplinary basic and applied research in nuclear science, renewable energy technologies, and materials engineering, providing high-level technical expertise, environmental radiometry, and human capacity development for national energy security and socio-economic advancement.',
  impacts: [
    {
      title: 'Discovery Science & Innovation',
      description:
        'Equipped with a 1.7 MV Tandem accelerator and advanced spectroscopy systems, CERD leads West Africa in ion beam analysis, non-destructive assay, and elemental trace fingerprinting.',
    },
    {
      title: 'Energy Transition & Security',
      description:
        'Designing decentralized hybrid renewable microgrids, biomass gasification reactors, and high-efficiency solar thermal collectors to power underserved communities.',
    },
    {
      title: 'Radiological Safety & Environmental Protection',
      description:
        'Providing nationwide environmental baseline monitoring, radon mapping, nuclear safeguards compliance, and calibration services for medical dosimetry.',
    },
    {
      title: 'High-Level Human Capital Training',
      description:
        'Mentoring hundreds of postgraduate students, radiation safety officers, and nuclear engineers through structured masterclasses and collaborative research fellowships.',
    },
  ],
  historyTimeline: [
    {
      year: '1978',
      title: 'Federal Establishment at OAU Ile-Ife',
      description:
        'CERD was founded by the Federal Military Government of Nigeria as one of the specialized Energy Research Centres mandated to drive peaceful nuclear technology and energy research.',
    },
    {
      year: '1985',
      title: '1.7 MV Tandem Pelletron Accelerator Commissioning',
      description:
        'Installation of the NEC 5SDH-4 Tandem Particle Accelerator, establishing national capabilities in Proton-Induced X-ray Emission (PIXE) and Rutherford Backscattering Spectrometry (RBS).',
    },
    {
      year: '1998',
      title: 'Creation of Dedicated Renewable Energy & Materials Divisions',
      description:
        'Expansion of institutional mandate to incorporate solar photovoltaics, thermal systems, bio-energy gasification, and advanced functional materials.',
    },
    {
      year: '2010',
      title: 'IAEA Regional Designated Research Hub',
      description:
        'Designation by the International Atomic Energy Agency (IAEA) as a key regional technical partner for isotope hydrology and nuclear spectrometry in West Africa.',
    },
    {
      year: '2026',
      title: 'Golden Jubilee & Advanced Modernization',
      description:
        'Celebrating 50 years of peaceful atomic research, complete refurbishment of analytical laboratories, and deployment of smart instrumentation infrastructure.',
    },
  ],
  directorQuote: {
    quote:
      'At CERD, our commitment is anchored on scientific rigor and national relevance. From probing atomic structures with our particle accelerator to engineering robust renewable microgrids, we harness energy research to transform livelihoods across Africa.',
    name: 'Prof. J. A. Ajao',
    title: 'Director',
    institution: 'Centre for Energy Research and Development, OAU Ile-Ife',
  },
};

// ==========================================
// 5. RESEARCH CONTENT
// ==========================================
export interface ResearchDivisionDetail {
  id: string;
  number: string;
  name: string;
  lead: string;
  summary: string;
  keyAreas: string[];
  equipment: string[];
}

export interface ResearchContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  divisions: ResearchDivisionDetail[];
  collaborateStats: {
    value: string;
    label: string;
  }[];
  flagshipProjects: {
    title: string;
    division: string;
    status: string;
    description: string;
  }[];
}

export const RESEARCH_CONTENT: ResearchContent = {
  hero: {
    badge: 'RESEARCH PROGRAMMES',
    heading: 'Scientific Frontiers in Atomic & Renewable Energy',
    subheading:
      'Structured across 4 specialized divisions, our multidisciplinary teams address complex energy, material, and environmental challenges through empirical investigation and international cooperation.',
  },
  divisions: [
    {
      id: 'nuclear-science',
      number: '01',
      name: 'Nuclear Science & Technology Division',
      lead: 'Prof. F. S. Olise (Division Coordinator)',
      summary:
        'Conducts advanced basic and applied research in nuclear physics, accelerator-based atomic spectrometry, radiation biophysics, and radioisotope applications.',
      keyAreas: [
        'Proton-Induced X-Ray Emission (PIXE) & PIGE analysis',
        'Neutron Activation Analysis (NAA) of minerals and biological specimens',
        'Radiation dosimetry, shielding calculation, and medical physics',
        'Nuclear reactor physics and non-destructive testing',
      ],
      equipment: [
        '1.7 MV Tandem Pelletron Particle Accelerator',
        'High-Purity Germanium (HPGe) Gamma-Ray Spectrometry Suite',
        'Thermo-Luminescent Dosimetry (TLD) Reader System',
        'Automated Alpha/Beta Counting Stations',
      ],
    },
    {
      id: 'materials-electronics',
      number: '02',
      name: 'Materials & Electronics Division',
      lead: 'Dr. O. E. Alao (Division Coordinator)',
      summary:
        'Focuses on the synthesis, characterization, and device fabrication of advanced functional materials, semiconductors, and radiation-tolerant coatings.',
      keyAreas: [
        'Thin-film photovoltaics and optoelectronic materials',
        'Radiation damage and ion-bombardment stress characterization',
        'Nanocomposites and ceramic protective barriers',
        'Energy storage electrodes and supercapacitors',
      ],
      equipment: [
        'RF/DC Magnetron Sputtering Deposition System',
        'Atomic Force Microscope (AFM)',
        'X-Ray Diffractometer (XRD)',
        'UV-Vis-NIR Spectrophotometer',
      ],
    },
    {
      id: 'energy-management',
      number: '03',
      name: 'Energy Management Division',
      lead: 'Engr. Dr. K. M. Ogundele (Division Coordinator)',
      summary:
        'Engineers clean energy technologies, decentralized solar microgrids, biomass thermochemical conversion systems, and industrial energy auditing protocols.',
      keyAreas: [
        'Hybrid solar photovoltaic-thermal (PV/T) collector development',
        'Biomass thermochemical gasification and pyrolysis',
        'Smart microgrid stability and battery energy management',
        'Industrial energy efficiency auditing and carbon baseline studies',
      ],
      equipment: [
        'Class-A Solar Simulator & IV-Curve Tracer',
        '50 kW Pilot Biomass Gasification Facility',
        'Electrochemical Battery Cycle & Impedance Analyzer',
        'Precision Meteorological & Solar Radiometric Station',
      ],
    },
    {
      id: 'environmental-science',
      number: '04',
      name: 'Environmental Science Division',
      lead: 'Dr. (Mrs.) B. T. Adeleke (Division Coordinator)',
      summary:
        'Monitors ambient environmental radioactivity, groundwater quality, atmospheric aerosol pollution, and seismotectonic dynamics.',
      keyAreas: [
        'Naturally Occurring Radioactive Materials (NORM) surveillance',
        'Heavy metal speciation in agricultural soils and aquifers',
        'Radon monitoring in indoor and mining environments',
        'Seismotectonics and regional geochemical mapping',
      ],
      equipment: [
        'Inductively Coupled Plasma Mass Spectrometer (ICP-MS)',
        'Continuous Radon Air Monitors & RAD7 Detectors',
        'Broadband Digital Seismological Station',
        'Portable Field X-Ray Fluorescence (pXRF) Analyzers',
      ],
    },
  ],
  collaborateStats: [
    { value: '50+', label: 'Active Research Grants' },
    { value: '15+', label: 'IAEA Technical Projects' },
    { value: '30+', label: 'Postgraduate Fellowships' },
    { value: '12', label: 'Patented Technology Prototypes' },
  ],
  flagshipProjects: [
    {
      title: 'National Airborne Particulate & Radon Mapping Project',
      division: 'Environmental Science',
      status: 'Ongoing',
      description:
        'Systematic nationwide baseline surveillance of atmospheric aerosols and ambient radon concentrations across major industrial zones in Nigeria.',
    },
    {
      title: '1.7 MV Tandem Accelerator Modernization & Beamline Expansion',
      division: 'Nuclear Science & Technology',
      status: 'Completed / Operational',
      description:
        'Digital control upgrade and automated target chamber integration for high-throughput PIXE/RBS geological mineral assays.',
    },
    {
      title: 'Agro-Industrial Biomass Gasification Microgrid Testbed',
      division: 'Energy Management',
      status: 'Active Field Prototype',
      description:
        'Deployment of a 50 kW pilot gasifier converting agricultural husks into electricity and bio-char soil amendments.',
    },
    {
      title: 'Radiation-Resistant Perovskite-Silicon Tandem Solar Cells',
      division: 'Materials & Electronics',
      status: 'Advanced Laboratory Phase',
      description:
        'Development of novel passivating thin films capable of sustaining extended operational life under harsh ultraviolet and thermal stress.',
    },
  ],
};

// ==========================================
// 6. PUBLICATIONS CONTENT
// ==========================================
export interface PublicationItem {
  title: string;
  journal: string;
  authors: string;
  year: string;
  category: string;
  abstract: string;
  doi?: string;
}

export interface PublicationsContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  publications: PublicationItem[];
}

export const PUBLICATIONS_CONTENT: PublicationsContent = {
  hero: {
    badge: 'KNOWLEDGE HUB',
    heading: 'Scientific Publication',
    subheading:
      'Access our extensive library of research papers, technical reports, and conference proceedings driving innovation in energy science.',
  },
  publications: [
    {
      title: 'Neutron Activation Analysis of Trace Elements in Nigeria Crude Oil',
      journal: 'Journal of Radioanalytical and Nuclear chemistry',
      authors: 'A.F. Oluwole, J.A. Adebayo, O.I. Asubiojo',
      year: '2024',
      category: 'Journal article',
      abstract:
        'This study utilizes the Miniature Neutron Source Reactor (MNSR) to analyze trace element concentrations in crude oil samples from the Niger Delta region.',
    },
    {
      title: 'Simulation of Electron Beam interactions with composite polymer',
      journal: 'Material Science and Engineering: B',
      authors: 'B.O. Solomon, K.M. Fasasi',
      year: '2023',
      category: 'Conference paper',
      abstract:
        'We present a Monte Carlo simulation of electron beam irradiation effects on high-density polyethylene composites, focusing on cross-linking efficiency.',
    },
    {
      title: 'Environmental Impact Assessment of Artisanal Mining in Osun State',
      journal: 'Environmental Monitoring and Assessment',
      authors: 'C.E. Mokobia, A.M. Arogunjb',
      year: '2023',
      category: 'Report',
      abstract:
        'A comprehensive assessment of heavy metal contamination in soil and water sources surrounding artisanal gold mining sites using EDXRF spectroscopy.',
    },
    {
      title: 'Optimization of Solar Photovoltaic Systems for Rural Electrification',
      journal: 'Renewable Energy',
      authors: 'D.K. Adewole, F.A. Akindele',
      year: '2022',
      category: 'Journal Article',
      abstract:
        'This paper proposes an optimized sizing algorithm for standalone PV-battery systems tailored to the load profiles of rural communities in southwest Nigeria.',
    },
    {
      title: 'Radiation Shielding Properties of Locally Sourced Concrete Aggregates',
      journal: 'Nuclear Engineering and Design',
      authors: 'G.A. Osinkolu, I.O. Oladipo',
      year: '2022',
      category: 'Journal Article',
      abstract:
        'Investigation into the linear attenuation coefficients of concrete mixes containing baryte and magnetite aggregates for use in shielding low-energy gamma rays.',
    },
  ],
};

// ==========================================
// 7. FACILITIES CONTENT
// ==========================================
export interface FacilityItem {
  name: string;
  tag: string;
  description: string;
  capabilities: string[];
}

export interface FacilitiesContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  facilities: FacilityItem[];
}

export const FACILITIES_CONTENT: FacilitiesContent = {
  hero: {
    badge: 'LABORATORY INFRASTRUCTURE',
    heading: 'World-Class Analytical Laboratories & Accelerators',
    subheading:
      'Housing Nigeria’s premier ion-beam particle accelerator and certified analytical spectroscopy suites available for academic research and industrial testing.',
  },
  facilities: [
    {
      name: '1.7 MV Tandem Pelletron Particle Accelerator Complex',
      tag: 'Core Nuclear Facility',
      description:
        'The National Electrostatics Corporation (NEC 5SDH-4) 1.7 MV Tandem accelerator delivers proton and alpha ion beams for non-destructive, sub-ppm multi-elemental analysis and material depth profiling.',
      capabilities: [
        'Proton-Induced X-Ray Emission (PIXE)',
        'Proton-Induced Gamma-Ray Emission (PIGE)',
        'Rutherford Backscattering Spectrometry (RBS)',
        'Nuclear Reaction Analysis (NRA)',
        'Ion Implantation and Radiation Damage Simulation',
      ],
    },
    {
      name: 'High-Purity Germanium (HPGe) Gamma Spectrometry Laboratory',
      tag: 'Radiological Assay',
      description:
        'Equipped with low-background lead-shielded coaxial HPGe detector systems and digital multichannel analyzers for high-precision radiometric assays.',
      capabilities: [
        'Natural Radioactivity (Ra-226, Th-232, K-40) Measurement',
        'Instrumental Neutron Activation Analysis (INAA)',
        'Environmental Soil, Water, and Food Radioactivity Testing',
        'Naturally Occurring Radioactive Material (NORM) Clearance',
      ],
    },
    {
      name: 'Advanced Materials Synthesis & Thin Films Laboratory',
      tag: 'Nanomaterials',
      description:
        'A dedicated cleanroom environment for the fabrication and characterization of nanostructured films, semiconductor oxides, and functional solar coatings.',
      capabilities: [
        'RF & DC Magnetron Sputtering Deposition',
        'Atomic Force Microscopy (AFM) Surface Topography',
        'X-Ray Diffraction (XRD) Phase Identification',
        'UV-Vis-NIR Spectrophotometry and Optical Bandgap Analysis',
      ],
    },
    {
      name: 'Solar & Renewable Energy Testing Ground',
      tag: 'Clean Tech',
      description:
        'A pilot demonstration yard for testing solar photovoltaic modules, hybrid PV/T collectors, biomass gasification reactors, and microgrid converters under real sub-Saharan weather conditions.',
      capabilities: [
        'Class-A Solar Simulator & IV Performance Curve Tracing',
        '50 kW Pilot Biomass Gasifier and Syngas Analyzer',
        'Automated Solar Irradiance and Meteorological Logging',
        'Battery Storage Cycle Life and Inverter Load Testing',
      ],
    },
    {
      name: 'Environmental Spectrometry & ICP-MS Laboratory',
      tag: 'Environmental Monitoring',
      description:
        'Accredited chemical and trace-metal testing suite providing high-throughput elemental analysis for mining, industrial effluent, and groundwater safety.',
      capabilities: [
        'Inductively Coupled Plasma Mass Spectrometry (ICP-MS)',
        'Continuous Indoor & Soil Radon Monitoring (RAD7)',
        'Atomic Absorption Spectrometry (AAS)',
        'Water Quality Parameter and Heavy Metal Speciation',
      ],
    },
    {
      name: 'Thermoluminescent Dosimetry (TLD) & Radiation Protection Unit',
      tag: 'Occupational Safety',
      description:
        'Provides statutory personal radiation dosimetry monitoring, calibration, and safety compliance audits for radiation workers in medicine and industry.',
      capabilities: [
        'Harshaw TLD Reader Badge Processing',
        'Radiation Survey Meter Calibration',
        'Facility Shielding Assessment and Dose Modeling',
        'Statutory Radiation Safety Officer (RSO) Certification',
      ],
    },
  ],
};

// ==========================================
// 8. NEWS CONTENT
// ==========================================
export interface NewsArticleItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  location?: string;
}

export interface NewsContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  articles: NewsArticleItem[];
}

export const NEWS_CONTENT: NewsContent = {
  hero: {
    badge: 'NEWS & DISPATCHES',
    heading: 'Institutional News, Events & Announcements',
    subheading:
      'Stay informed on scientific symposia, research breakthroughs, infrastructure upgrades, and academic milestones from CERD.',
  },
  articles: [
    {
      id: '50th-anniversary-nuclear-science',
      title: 'CERD Organizes 50th Anniversary of Nuclear Science in Nigeria',
      date: 'May 18, 2026',
      category: 'Symposium',
      summary:
        'CERD hosts a national symposium commemorating 50 years of peaceful nuclear science and technological research achievements in Nigeria.',
      content:
        'The Centre for Energy Research and Development (CERD) at Obafemi Awolowo University is proud to announce the International Golden Jubilee Symposium celebrating 50 Years of Nuclear Science and Energy Research in Nigeria.\n\nThe three-day landmark event brings together distinguished delegates from the International Atomic Energy Agency (IAEA), the Nigerian Nuclear Regulatory Authority (NNRA), leading university research centres, and energy policy makers. Keynote addresses will reflect on Nigeria’s peaceful atomic energy milestones and unveil the 2030–2050 Nuclear Technology Strategic Roadmap.',
      location: 'CERD International Conference Hall, OAU Ile-Ife',
    },
    {
      id: 'transition-pioneer-nuclear-scientists',
      title: 'CERD Mourns the Transition of Two Nuclear Scientists',
      date: 'May 10, 2026',
      category: 'In Memoriam',
      summary:
        'The management and staff of CERD mourn the passing of two pioneer nuclear scientists who laid the foundation for energy research in Nigeria.',
      content:
        'It is with deep sorrow and profound gratitude that the Centre for Energy Research and Development announces the transition of two of its founding research fellows and visionary nuclear physicists.\n\nTheir seminal contributions in the late 1970s and 1980s led to the installation of Nigeria’s first ion-beam accelerator facility and trained two generations of nuclear engineers. A special memorial colloquium and honor book will be opened at the CERD Administrative Foyer.',
      location: 'CERD Administrative Foyer, OAU Ile-Ife',
    },
    {
      id: 'research-service-building-renovation',
      title: 'CERD Research and Service Wear New Look',
      date: 'April 18, 2026',
      category: 'Facility Upgrade',
      summary:
        'The Research and Service building has been completely renovated and upgraded with modern laboratories, offices, and smart seminar halls.',
      content:
        'In line with CERD’s ongoing modernization agenda, the premier Research and Service Complex has undergone a comprehensive state-of-the-art renovation.\n\nThe upgraded facility features climate-controlled ultra-clean spectrometry rooms, enhanced electromagnetic shielding for analytical instruments, solar-hybrid emergency power systems, and fully digital collaborative seminar spaces for visiting international scholars.',
      location: 'CERD Research & Service Complex, OAU Ile-Ife',
    },
  ],
};

// ==========================================
// 9. STAFF CONTENT
// ==========================================
export interface StaffMember {
  name: string;
  role: string;
  image: string;
  description?: string;
  qualifications?: string;
  specialization?: string;
  email?: string;
}

export interface StaffDivisionGroup {
  divisionName: string;
  headingPrefix?: string;
  firstHighlight?: string;
  headingMiddle?: string;
  secondHighlight?: string;
  headingSuffix?: string;
  subtitle: string;
  staff: StaffMember[];
}

export interface StaffContent {
  hero: {
    badge: string;
    headingHighlight: string;
    subheading: string;
  };
  director: StaffMember & {
    featuredBadge: string;
    bioParagraphs: string[];
    specialties: string[];
  };
  divisions: StaffDivisionGroup[];
}

export const STAFF_CONTENT: StaffContent = {
  hero: {
    badge: 'OUR TEAM',
    headingHighlight: 'Minds',
    subheading:
      "A dedicated team of researchers, engineers, and visionaries driving Africa's energy future.",
  },
  director: {
    name: 'Prof. Abiodun Suleiman Momodu',
    role: 'Research Professor & Director',
    featuredBadge: 'Featured Director',
    image:
      'https://framerusercontent.com/images/AkFPG5KN7utP3pPMVa7tB5YE.jpeg?width=3381&height=4226',
    bioParagraphs: [
      'Prof. Abiodun Suleiman Momodu is a Research Professor and became the Director of the Centre for Energy Research and Development (CERD), Obafemi Awolowo University, Ile-Ife on 1 August 2025. He has over 20 years of experience working at the intersection of energy, climate change, and sustainable development in Nigeria and across West Africa. He is widely recognised for pioneering the use of system dynamics modelling to understand and improve electricity systems, low-carbon strategies, and renewable energy adoption.',
      'He hold a B.Sc (Honors) (1988) in Agricultural Engineering from the university of maiduguri and an M.Sc (2006) and Ph.D (2012) in Technology Management from Obafemi Awolowo University…..',
    ],
    specialties: [
      'System dynamic modelling',
      'Energy Systems & Climate change modelling',
      'Energy Planning & Environmental Management',
      'Greenhouse gas (GHG) inventory & emission assessment',
      'Renewable energy adoption & waste to energy',
    ],
    qualifications: 'B.Sc. (Maiduguri), M.Sc., Ph.D. (OAU)',
    specialization: 'Energy Economics & System Dynamics Modeling',
    email: 'amomodu@cerd.oau.edu.ng',
  },
  divisions: [
    {
      divisionName: 'Division of Environmental and Earth Science',
      headingPrefix: 'Division of ',
      firstHighlight: 'Environmental',
      headingMiddle: ' and ',
      secondHighlight: 'Earth Science',
      subtitle:
        'Experts dedicated to environmental and earth sciences research and innovation.',
      staff: [
        {
          name: 'Dr. Katherine Temitope (K.T) Ogundele',
          role: 'Researcher specializing in environmental chemistry, radioactivity, and thin film technology',
          image:
            'https://framerusercontent.com/images/ERfQdEsdeZmxyamKHt2gOIMTcJU.jpg?width=992&height=744',
        },
        {
          name: 'Prof. Oladotun Wasiu (W.O.) Makinde',
          role: 'Research professor specializing in environmental monitoring, heavy metal analysis and material science',
          image:
            'https://framerusercontent.com/images/Swg45GaKLtEHgjHoIfMZ3LhRrg.jpg?width=960&height=1280',
        },
        {
          name: 'Dr. Ayodeji Adekunle Eluyemi (A.A Eluyemi)',
          role: 'Research fellow and Geophysicist specializing in seismotectonics, seismic hazard assessment, GIS-based site…',
          image:
            'https://framerusercontent.com/images/zII6i6TrRp9KiCHbMgG46zCGZI.jpg?width=960&height=1280',
        },
      ],
    },
    {
      divisionName: 'Division of Energy Management and Technology',
      headingPrefix: 'Division of ',
      firstHighlight: 'Energy Management',
      headingMiddle: ' and ',
      secondHighlight: 'Technology',
      subtitle:
        'Experts dedicated to energy management and Technology research and Innovation',
      staff: [
        {
          name: 'Prof.  William Siyanbola',
          role: 'Research Professor specializing in Science, Technology , Innovation policy and Energy studies',
          image:
            'https://framerusercontent.com/images/Y3vWYcl1KNP9jakMrrOzwReJg.jpg?width=817&height=1174',
        },
        {
          name: 'Prof. John-Felix kayode (J.F.K.) Akinbami',
          role: 'Research Professor and former Director of CERD (2020-2025) specializing in Energy system Modelling, Energy Policy',
          image:
            'https://framerusercontent.com/images/ARgaDhZpA3y3PkbMCxRFbFvIMY.jpg?width=1068&height=712',
        },
      ],
    },
    {
      divisionName: 'Division of Applied Nuclear Science and Technology',
      headingPrefix: 'Division of Applied ',
      firstHighlight: 'Nuclear Science',
      headingMiddle: ' and ',
      secondHighlight: 'Technology',
      subtitle:
        'Expert dedicated to applied nuclear science and technology research and innovation.',
      staff: [
        {
          name: 'Dr. Mouftahou B. Latif (M.B. Latif)',
          role: 'Principal research fellow and Head of Applied Nuclear Science and Technology Divison, specializing in Nuclear Physics',
          image:
            'https://framerusercontent.com/images/AV8yYmyy6Cj35tbitwBi47EfI.jpg?width=960&height=1280',
        },
        {
          name: 'Dr. Adebimpe Amos Amosun',
          role: 'Physicist and researcher specializing in applied nuclear science, reactor physics, radiation studies, and computational….',
          image:
            'https://framerusercontent.com/images/xIAmJWWTu7YZYt0tcei1ELr60.jpg?width=4266&height=5184',
        },
        {
          name: 'Dr. Olamitomide Gbenga Fadodun',
          role: 'Academic and researcher specializing in computational Nuclear science, reactor physics and computational fluid…',
          image:
            'https://framerusercontent.com/images/Gi43NtdWEcAoTL7zJhmNl87SQ.jpg?width=992&height=744',
        },
      ],
    },
    {
      divisionName: 'Division of Materials and Electronics',
      headingPrefix: 'Division of ',
      firstHighlight: 'Materials',
      headingMiddle: ' and ',
      secondHighlight: 'Electronics',
      subtitle:
        'Experts dedicated to materials and electronics research and innovation.',
      staff: [
        {
          name: 'Prof. A.Y Fasasi',
          role: 'Research professor with expertise in Material science, Nanotechnology and Thin films',
          image:
            'https://framerusercontent.com/images/MHAxAJ6Dz0T0kVMhGnivaLGEGEo.jpg?width=744&height=992',
        },
        {
          name: 'Prof. Emmanuel Ajenifuja',
          role: 'Research professor specializing in Material Science and Ion Beam Analysis',
          image:
            'https://framerusercontent.com/images/Wg5I4917XJYASUoFk9lZUo07lEY.jpg?width=960&height=1280',
        },
        {
          name: 'Mr. Emmanuel Omeiza Ajoge  (Ajoge E.O)',
          role: 'Research Engineer specializing in Materials characterization, microstructural analysis of steel and…',
          image:
            'https://framerusercontent.com/images/4rPNvjLfKhE1ptXprHyH9S0mX0Q.jpg?width=960&height=1280',
        },
      ],
    },
    {
      divisionName: 'Division of Maintenance and services',
      headingPrefix: 'Division of ',
      firstHighlight: 'Maintenance',
      headingMiddle: ' and ',
      secondHighlight: 'services',
      subtitle:
        'Experts dedicated to administration & support services research and Innovation.',
      staff: [
        {
          name: 'Mr. Titilola',
          role: 'Staff member providing operational support at the centre',
          image:
            'https://framerusercontent.com/images/Tl7MUiFJwz673GB61Kh4W1xT4Y.jpg?width=744&height=992',
        },
        {
          name: 'Mrs Adeyeye Margret Mopelola',
          role: 'Deputy Bursar and Finance officer to CERD',
          image:
            'https://framerusercontent.com/images/KetJL8B66DabqecH5OeIAnj4M.jpg?width=636&height=1080',
        },
        {
          name: 'Mrs Orisayomi',
          role: 'Administrative staff member at the centre for Energy Research and Development..',
          image:
            'https://framerusercontent.com/images/s8tHmzmgoLnsKwp6ce4QPV79BtA.jpg?width=992&height=744',
        },
      ],
    },
  ],
};

// ==========================================
// 10. CONTACT CONTENT
// ==========================================
export interface ContactFormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  placeholder: string;
  required: boolean;
  options?: string[];
}

export interface ContactContent {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  contactInfo: {
    addressLines: string[];
    phone: string;
    email: string;
    workingHours: string;
    locationNote: string;
  };
  formFields: ContactFormField[];
}

export const CONTACT_CONTENT: ContactContent = {
  hero: {
    badge: 'GET IN TOUCH',
    heading: 'Contact CERD Directorate & Laboratories',
    subheading:
      'Connect with research coordinators, schedule laboratory testing services, or inquire about masterclass certifications and academic collaborations.',
  },
  contactInfo: {
    addressLines: [
      'Centre for Energy Research and Development (CERD)',
      'Obafemi Awolowo University (OAU)',
      'Road 1, OAU Main Campus',
      'Ile-Ife, Osun State, Nigeria',
    ],
    phone: '+234 802 555 0199',
    email: 'Info@cerd.oau.edu.ng',
    workingHours: 'Monday – Friday: 8:00 AM – 5:00 PM (WAT)',
    locationNote:
      'Located within the academic research sector of Obafemi Awolowo University, accessible via the main university gate on Ife-Ibadan Expressway.',
  },
  formFields: [
    {
      id: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'e.g. Dr. Jane Doe',
      required: true,
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'name@institution.edu.ng',
      required: true,
    },
    {
      id: 'organization',
      label: 'Organization / Institution',
      type: 'text',
      placeholder: 'e.g. University of Lagos / Energy Commission',
      required: false,
    },
    {
      id: 'department',
      label: 'Target Division / Inquiry Type',
      type: 'select',
      placeholder: 'Select department',
      required: true,
      options: [
        'General Directorate Inquiries',
        'Nuclear Science & Technology Division',
        'Materials & Electronics Division',
        'Energy Management Division',
        'Environmental Science Division',
        'Tandem Accelerator Analytical Testing (PIXE/RBS)',
        'Gamma Spectrometry & NAA Testing',
        'TLD Radiation Dosimetry Badges',
        'Masterclass Registration & Academic Training',
      ],
    },
    {
      id: 'message',
      label: 'Inquiry Details / Scope of Research',
      type: 'textarea',
      placeholder:
        'Please provide details regarding your research proposal, analytical service specifications, or question...',
      required: true,
    },
  ],
};
