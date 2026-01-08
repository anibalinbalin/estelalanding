"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { HeroSection } from './components/HeroSection';
import { ImagesSection } from './components/ImagesSection';
import { ContentSection } from './components/ContentSection';
import { MissionList, PrinciplesList } from './components/PrinciplesList';
import { TeamSection } from './components/TeamSection';
import { FinalSection } from './components/FinalSection';

// Styles now handled by globals.css with CSS variables

const AboutAboutPage = () => {
  return (
    <>
      <main className="mt-10 min-[1100px]:mt-24">
        {/* Hero Section with main headline */}
        <HeroSection />
        
        {/* Images Section with the office photos */}
        <ImagesSection />
        
        {/* Main Content Sections */}
        <ContentSection />
        
        {/* Mission List */}
        <MissionList />
        
        {/* Team Section */}
        <TeamSection />
        
        {/* Principles List */}
        <PrinciplesList />
        
        {/* Final Section */}
        <FinalSection />
      </main>
      
      <Footer />
    </>
  );
};

export default AboutAboutPage;