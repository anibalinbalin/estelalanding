"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { HeroSection } from './components/HeroSection';
import { ProjectSection } from './components/ProjectSection';
import { ProjectImagesSection } from './components/ProjectImagesSection';
import { FinalSection } from './components/FinalSection';

// Import the exact CSS from newwork/aboutabout to maintain styling
import './work.css';

const WorkPage = () => {
  // Project data from the original work page
  const projects = [
    {
      id: 'teatro-solis',
      title: 'Theater A/V Control System',
      client: 'Teatro Solis',
      year: '2023',
      category: 'Infrastructure',
      duration: '3 months',
      challenge: 'Legacy control systems couldn\'t handle modern lighting and sound requirements for contemporary productions.',
      solution: 'Implemented networked lighting controls with touch panel interfaces and remote control capabilities.',
      technologies: ['Networked Lighting', 'Touch Panels', 'Remote Control Systems', 'A/V Integration'],
      results: [
        '50% faster show setup and changeovers',
        'Remote control capabilities for flexible operation',
        'Support for modern lighting/sound effects',
        'Simplified control reducing technical staff needs'
      ]
    },
    {
      id: 'u-films',
      title: 'Post-Production Infrastructure Build',
      client: 'U Films',
      year: '2023-2024',
      category: 'Infrastructure',
      duration: '12 months (ongoing)',
      challenge: 'Starting from scratch while working within existing building network restrictions and firewall constraints to meet major client security requirements.',
      solution: 'Implemented VPN solutions and negotiated building access while designing parallel infrastructure for full creative workflow support.',
      technologies: ['VPN', 'Storage/Backup Systems', 'High-Speed Networking', 'Security Compliance'],
      results: [
        'Enabled work with major clients requiring security certifications',
        '40% faster editing and rendering workflows',
        'Secure client data handling and compliance',
        'Parallel infrastructure in testing phase'
      ]
    },
    {
      id: 'diagnostico',
      title: 'Laboratory Data Security & Integration',
      client: 'Diagnotico',
      year: '2021-2024',
      category: 'Infrastructure & Compliance',
      duration: '3 years (ongoing)',
      challenge: 'Medical laboratory needed secure patient data handling, system integration, reliable backups, and ISO 9001 compliance.',
      solution: 'Implemented Synology-based integration policies, automated backup systems, and phased network redundancy design.',
      technologies: ['Synology NAS', 'ISO 9001 Framework', 'Automated Backup', 'Integration Policies'],
      results: [
        'ISO 9001 compliance achieved',
        '80% reduction in system downtime',
        'Automated lab workflows reducing manual processes',
        '30% faster result turnaround times'
      ]
    },
    {
      id: 'logistics-cloud',
      title: 'Cloud Migration & Modernization',
      client: 'Logistics & Distribution',
      year: '2022',
      category: 'Consulting',
      duration: '5 months',
      challenge: 'Migrate legacy ERP and warehouse systems to cloud with zero business disruption.',
      solution: 'Hybrid cloud strategy with gradual migration and parallel system operation.',
      technologies: ['AWS', 'Kubernetes', 'Microservices', 'API Gateway'],
      results: [
        '60% reduction in infrastructure costs',
        '10x faster deployment cycles',
        '99.9% system availability',
        'Global access for remote teams'
      ]
    }
  ];

  // Generic project images for demonstration
  const getProjectImages = (projectId: string) => ({
    main: {
      src: "/img/company_work/work_1_dither.jpg",
      alt: `${projectId} main implementation screenshot`,
      width: 612,
      height: 532
    },
    side1: {
      src: "/img/company_work/work_2_dither.jpeg", 
      alt: `${projectId} dashboard interface`,
      width: 432,
      height: 288
    },
    side2: {
      src: "/img/company_work/work_3_dither.jpeg",
      alt: `${projectId} technical setup`,
      width: 432,
      height: 227
    }
  });

  return (
    <>
      <main className="mt-10 min-[1100px]:mt-24">
        {/* Hero Section with work messaging */}
        <HeroSection />
        
        {/* Project Showcase Sections */}
        {/* Show only the first project's images */}
        <ProjectImagesSection 
          projectId={projects[0].id} 
          images={getProjectImages(projects[0].id)}
        />
        
        {/* Project Details Sections */}
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} />
        ))}
        
        {/* Final Section with Values Grid */}
        <FinalSection />
        
      </main>
      
      {/* Use the project's Footer component */}
      <Footer />
      
      {/* Keep the tracking elements */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: "none"}} 
          alt="" 
          src="https://px.ads.linkedin.com/collect/?pid=6206948&fmt=gif" 
        />
      </noscript>
    </>
  );
};

export default WorkPage;