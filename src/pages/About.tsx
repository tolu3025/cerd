import React from 'react';
import { PageTransition } from '../components/shared/PageTransition';
import {
  AboutHero,
  MissionBlock,
  ImpactsSection,
  HistoryTimeline,
  DirectorVision,
} from '../components/sections/about';

export const About: React.FC = () => {
  return (
    <PageTransition className="w-full">
      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Mission Block Section */}
      <MissionBlock />

      {/* 3. Institutional Impacts / 3x2 Metrics Section */}
      <ImpactsSection />

      {/* 4. History Timeline (1978 – Present) Section */}
      <HistoryTimeline />

      {/* 5. Director's Vision Section */}
      <DirectorVision />
    </PageTransition>
  );
};

export default About;
