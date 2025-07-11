"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { HeroSection } from './components/HeroSection';

import { PartnershipPhilosophySection } from './components/PartnershipPhilosophySection';
import { useLanguage } from '@/components/language-provider';

// Styles now handled by globals.css with CSS variables

const PartnersPage = () => {
  const { language } = useLanguage();
  
  // Simplified partner data with translations
  const partners = {
    en: [
    {
      id: 'lenovo',
      name: 'Lenovo',
      partnership: 'Business Partner Since 2015'
    },
    {
      id: 'unifi', 
      name: 'UniFi',
      partnership: 'Enterprise Installer Since 2018'
    },
    {
      id: 'synology',
      name: 'Synology', 
      partnership: 'Gold Partner Since 2016'
    },
    {
      id: 'acronis',
      name: 'Acronis',
      partnership: 'Cloud Partner Since 2017'
    },
    {
      id: 'sentinelone',
      name: 'SentinelOne',
      partnership: 'Partner Since 2022'
    }
    ],
    es: [
      {
        id: 'lenovo',
        name: 'Lenovo',
        partnership: 'Business Partner desde 2015'
      },
      {
        id: 'unifi', 
        name: 'UniFi',
        partnership: 'Enterprise Installer desde 2018'
      },
      {
        id: 'synology',
        name: 'Synology', 
        partnership: 'Gold Partner desde 2016'
      },
      {
        id: 'acronis',
        name: 'Acronis',
        partnership: 'Cloud Partner desde 2017'
      },
      {
        id: 'sentinelone',
        name: 'SentinelOne',
        partnership: 'Partner desde 2022'
      }
    ]
  };
  
  const content = {
    en: {
      ourPartners: 'Our Partners'
    },
    es: {
      ourPartners: 'Nuestros Socios'
    }
  };
  
  const t = content[language] || content.en;
  const partnersList = partners[language] || partners.en;



  return (
    <>
      <main className="mt-10 min-[1100px]:mt-24">
        {/* Hero Section with partners messaging */}
        <HeroSection />
        
        {/* Simplified Partners List */}
        <div className="w-[100%] px-5 min-[600px]:px-10">
          <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] mt-16 min-[800px]:mt-[7.5rem] mb-12 min-[800px]:mb-[7.5rem] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
            <div className="col-span-12 min-[600px]:col-start-[2] min-[600px]:col-span-10 min-[1000px]:col-start-[4] min-[1000px]:col-span-7">
              <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-8">
                {t.ourPartners}
              </h2>
              <div className="grid gap-6">
                {partnersList.map((partner) => (
                  <div key={partner.id} className="border-b border-[var(--stroke-default-p3)] pb-4">
                    <h3 className="text-[1.25rem] font-normal text-[var(--content-raise-p3)] mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-[var(--content-secondary-p3)] text-sm">
                      {partner.partnership}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Partnership Philosophy Section */}
        <PartnershipPhilosophySection />
        
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

export default PartnersPage;