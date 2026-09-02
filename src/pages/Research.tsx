import React from 'react';
import { PageTransition } from '../components/shared/PageTransition';
import {
  ResearchHero,
  ResearchDivisions,
  CollaborateSection,
  FlagshipProjects,
} from '../components/sections/research';

export const Research: React.FC = () => {
  return (
    <PageTransition className="w-full">
      {/* 1. Research Hero Section */}
      <ResearchHero />

      {/* 2. 4 Alternating Research Divisions Rows */}
      <ResearchDivisions />

      {/* 3. Dark Collaborate With Us Section with 4 Stats */}
      <CollaborateSection />

      {/* 4. Flagship Projects Section */}
      <FlagshipProjects />
    </PageTransition>
  );
};

export default Research;
