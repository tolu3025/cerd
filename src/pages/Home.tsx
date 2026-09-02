import React from 'react';
import { PageTransition } from '../components/shared/PageTransition';
import {
  HeroSection,
  OverviewSection,
  StatsSection,
  DivisionsSection,
  ImpactPillarsSection,
  ResearchFrontiersSection,
  NewsSection,
  MasterclassesStrip,
} from '../components/sections/home';

export const Home: React.FC = () => {
  return (
    <PageTransition className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Overview / Who We Are Section */}
      <OverviewSection />

      {/* 3. Key Performance Metrics / Stats Section */}
      <StatsSection />

      {/* 4. Scientific Excellence Across 4 Divisions Section */}
      <DivisionsSection />

      {/* 5. Leading The Way / Impact Pillars Section */}
      <ImpactPillarsSection />

      {/* 6. Research Frontiers Dark Section */}
      <ResearchFrontiersSection />

      {/* 7. Happening Now / News & Events Section */}
      <NewsSection />

      {/* 8. Masterclasses & Prototypes Strip */}
      <MasterclassesStrip />
    </PageTransition>
  );
};

export default Home;
