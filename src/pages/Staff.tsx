import React from 'react';
import { PageTransition } from '../components/shared/PageTransition';
import {
  StaffHero,
  DirectorProfile,
  DivisionSections,
} from '../components/sections/staff';

export const Staff: React.FC = () => {
  return (
    <PageTransition className="w-full">
      {/* 1. Staff Hero Section */}
      <StaffHero />

      {/* 2. Executive Director Profile Section */}
      <DirectorProfile />

      {/* 3. 5 Division Directories & Faculty Cards */}
      <DivisionSections />
    </PageTransition>
  );
};

export default Staff;
