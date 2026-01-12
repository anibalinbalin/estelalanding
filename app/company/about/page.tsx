"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { PageHeroSection } from '@/components/page-hero-section';

const heroContent = {
  en: { highlight: 'Technology at the service of your business.', rest: 'Not the other way around.' },
  es: { highlight: 'Tecnología al servicio de su empresa.', rest: 'No al revés.' }
};
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
        <PageHeroSection content={heroContent} />
        
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