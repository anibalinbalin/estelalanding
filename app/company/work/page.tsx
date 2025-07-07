"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { HeroSection } from './components/HeroSection';
import { ProjectSection } from './components/ProjectSection';
import { ProjectImagesSection } from './components/ProjectImagesSection';
import { WorkApproachList, WorkProcessList } from './components/WorkApproachList';
import { FinalSection } from './components/FinalSection';

// Import the exact CSS from newwork/aboutabout to maintain styling
import './work.css';

const WorkPage = () => {
  // Project data from the original work page
  const projects = [
    {
      id: 'hospital-network',
      title: 'Hospital Network Infrastructure',
      client: 'Regional Hospital System',
      year: '2023',
      category: 'Infrastructure',
      duration: '6 months',
      challenge: 'Complete network overhaul for a 300-bed hospital with zero downtime requirements.',
      solution: 'Phased deployment of redundant infrastructure with automated failover systems.',
      technologies: ['Lenovo ThinkSystem', 'UniFi Enterprise', 'Synology NAS', 'Acronis Backup'],
      results: [
        '99.99% uptime achieved',
        'Zero patient data loss',
        '40% reduction in IT incidents',
        'HIPAA compliance certified'
      ]
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing Platform',
      client: 'Industrial Manufacturing Corp',
      year: '2023',
      category: 'Development',
      duration: '8 months',
      challenge: 'Legacy manufacturing systems needed real-time monitoring and predictive maintenance.',
      solution: 'Custom IoT platform with machine learning for predictive analytics.',
      technologies: ['Edge Computing', 'Time Series DB', 'Machine Learning', 'Real-time Dashboard'],
      results: [
        '30% reduction in downtime',
        '$2M saved in prevented failures',
        'Real-time visibility across 50+ machines',
        'ROI achieved in 6 months'
      ]
    },
    {
      id: 'finance-security',
      title: 'Financial Services Security',
      client: 'Regional Credit Union',
      year: '2022',
      category: 'Security',
      duration: '4 months',
      challenge: 'Cybersecurity overhaul for banking compliance and threat protection.',
      solution: 'Multi-layered security architecture with 24/7 monitoring and incident response.',
      technologies: ['Next-Gen Firewall', 'SIEM', 'Endpoint Protection', 'Security Training'],
      results: [
        'Zero security incidents since deployment',
        'SOC 2 Type II compliance achieved',
        '100% staff security training completion',
        'Automated threat detection and response'
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
        
        {/* Work Approach Section */}
        <WorkApproachList />
        
        {/* Work Process Section */}
        <WorkProcessList />
        
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