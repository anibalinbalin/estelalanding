"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { PageHeroSection } from '@/components/page-hero-section';

const heroContent = {
  en: { highlight: 'Who we are.', rest: 'The people behind the projects. No stock photos.' },
  es: { highlight: 'Quiénes somos.', rest: 'Las personas detrás de los proyectos. Sin fotos de stock.' }
};
import { ContentSection } from './components/ContentSection';
import { TeamGrid } from './components/TeamGrid';

// Styles now handled by globals.css with CSS variables

const NewTeamPage = () => {
  return (
    <>
      <main className="mt-10 min-[1100px]:mt-24">
        {/* Hero */}
        <PageHeroSection content={heroContent} />

        {/* One-liner */}
        <ContentSection />

        {/* Team photos */}
        <TeamGrid />
      </main>

      <Footer />
    </>
  );
};

export default NewTeamPage;
