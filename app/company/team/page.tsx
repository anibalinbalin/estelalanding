"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { HeroSection } from './components/HeroSection';
import { ContentSection } from './components/ContentSection';
import { FinalSection } from './components/FinalSection';

// Styles now handled by globals.css with CSS variables

const NewTeamPage = () => {
  return (
    <>
      <main className="mt-10 min-[1100px]:mt-24">
        {/* Hero */}
        <HeroSection />

        {/* One-liner */}
        <ContentSection />

        {/* Team photos */}
        <FinalSection />
      </main>

      <Footer />
    </>
  );
};

export default NewTeamPage;
