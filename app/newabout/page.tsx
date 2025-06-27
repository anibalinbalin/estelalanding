"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { HeroSection } from './components/HeroSection';
import { ImagesSection } from './components/ImagesSection';
import { ContentSection } from './components/ContentSection';
import { MissionList, PrinciplesList } from './components/PrinciplesList';
import { TeamSection } from './components/TeamSection';
import { FinalSection } from './components/FinalSection';

// Import the exact CSS from aboutabout to maintain styling
import '../aboutabout/aboutabout.css';

const NewAboutPage = () => {
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
      
      {/* Use the project's Footer component instead of inline footer */}
      <Footer />
      
      {/* Keep the tracking elements exactly as they were */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: "none"}} 
          alt="" 
          src="https://px.ads.linkedin.com/collect/?pid=6206948&fmt=gif" 
        />
      </noscript>
      <div className="top-[336px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[1460px] h-0 w-0"></div>
      <div className="top-[659px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[977px] h-0 w-0"></div>
      <div></div>
      <div className="top-[-2px] left-0 h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-2px] left-[-2px] h-0 w-0"></div>
      <div className="top-0 left-0 absolute"></div>
      <canvas width="70" height="70" className="left-[1610px] top-0 block align-middle"></canvas>
    </>
  );
};

export default NewAboutPage;