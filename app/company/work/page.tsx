"use client";

import React from 'react';
import { Footer } from '@/components/footer';
import { PageHeroSection } from '@/components/page-hero-section';

const heroContent = {
  en: { highlight: 'Our work speaks for us.', rest: 'Though sometimes we speak too. Here are some examples.' },
  es: { highlight: 'Nuestro trabajo habla por nosotros.', rest: 'Aunque a veces también hablamos nosotros. Aquí, algunos ejemplos.' }
};
import { ProjectSection } from './components/ProjectSection';
import { ProjectImagesSection } from './components/ProjectImagesSection';
import { useLanguage } from '@/components/language-provider';

// Import the exact CSS from newwork/aboutabout to maintain styling
import './work.css';

const projectsData = {
  en: [
    {
      id: 'teatro-solis',
      title: 'Theater A/V Control System',
      client: 'Teatro Solís',
      year: '2023',
      category: 'Infrastructure',
      duration: '3 months',
      challenge: 'The theater\'s controls couldn\'t keep up with modern lighting and sound systems. Think: trying to run a Tesla on a Model T dashboard.',
      solution: 'We built networked lighting controls with touch interfaces and remote capabilities. Now the tech actually works with the art, not against it.',
      technologies: ['Networked Lighting', 'Touch Screen', 'Remote Control Systems', 'A/V Integration'],
      results: [
        'Faster show changeovers—now they can host international productions',
        'Remote control capabilities for flexible operation',
        'Support for modern lighting/sound effects',
        'Simplified controls (fewer buttons, less confusion)'
      ]
    },
    {
      id: 'u-films',
      title: 'Post-Production Infrastructure Build',
      client: 'U Films',
      year: '2023-2024',
      category: 'Infrastructure',
      duration: '12 months (ongoing)',
      challenge: 'Building a production studio from scratch while wrestling with building network restrictions and firewall constraints. Oh, and major clients demanding security certifications.',
      solution: 'We engineered a precise VPN solution and negotiated parallel access paths. Sometimes the hardest problems are half-technical, half-diplomatic.',
      technologies: ['VPN', 'Storage/Backup Systems', 'High-Speed Networking', 'Security Compliance'],
      results: [
        'Now working with clients who actually require security certifications',
        'Significant improvements in editing and rendering workflows',
        'Secure client data handling',
        'Parallel infrastructure in testing phase'
      ]
    },
    {
      id: 'diagnostico',
      title: 'Laboratory Data Security & Integration',
      client: 'Diagnóstico',
      year: '2021-2024',
      category: 'Infrastructure & Compliance',
      duration: '3 years (ongoing)',
      challenge: 'Medical lab with patient data requirements, system integration needs, backup demands, and ISO 9001 compliance. The fun stuff.',
      solution: 'We implemented NAS-based integration policies with Active Directory, automated immutable backups, and phased network redundancy. Because lab data isn\'t something you want to "oops."',
      technologies: ['Synology NAS', 'ISO 9001 Framework', 'Automated Backup', 'Integration Policies'],
      results: [
        'ISO 9001 compliance achieved',
        'Reduced internal system downtime to outsiders',
        'Faster result turnaround times'
      ]
    }
  ],
  es: [
    {
      id: 'teatro-solis',
      title: 'Sistema de Control A/V del Teatro',
      client: 'Teatro Solís',
      year: '2023',
      category: 'Infraestructura',
      duration: '3 meses',
      challenge: 'Los controles del teatro no podían manejar los sistemas nuevos de iluminacion y sonido.',
      solution: 'Se implementaron controles de iluminacion por red con un equipo touch y remote control.',
      technologies: ['Iluminación en Red', 'Touch Screen', 'Sistemas de Control Remoto', 'Integración A/V'],
      results: [
        'Sistema más rápido en cambios de espectáculos. Permitiendo obras de nivel internacional.',
        'Capacidades de control remoto.',
        'Soporte para efectos modernos de iluminación/sonido',
        'Control simplificado reduciendo necesidades de personal técnico'
      ]
    },
    {
      id: 'u-films',
      title: 'Construcción de Infraestructura de Post-Producción',
      client: 'U Films',
      year: '2023-2024',
      category: 'Infraestructura',
      duration: '12 meses (en curso)',
      challenge: 'Dejar operativo la productora con las restricciones de red en el edificio existente -limitaciones de firewall para cumplir con los requerimientos de seguridad de clientes externos.',
      solution: 'Implementamos una solucion VPN precisa y se negociaron accesos particulares paralelos.',
      technologies: ['VPN', 'Sistemas de Almacenamiento/Respaldo', 'Redes de Alta Velocidad', 'Cumplimiento de Seguridad'],
      results: [
        'Habilitó trabajo con clientes importantes que requieren certificaciones de seguridad.',
        'Mejoras significativas en los workflows de edición y renders.',
        'Manejo seguro de datos del cliente.',
        'Infraestructura paralela en fase de pruebas.'
      ]
    },
    {
      id: 'diagnostico',
      title: 'Seguridad e Integración de Datos de Laboratorio',
      client: 'Diagnóstico',
      year: '2021-2024',
      category: 'Infraestructura y Cumplimiento',
      duration: '3 años (en curso)',
      challenge: 'Requerimientos del laboratorio para manejo de datos, integración de sistemas, respaldos y cumplimiento con ISO 9001.',
      solution: 'Implementamos políticas de integración en el NAS con el AD, sistemas de respaldo automatizados, inmutables, y diseño de redundancia de red por etapas.',
      technologies: ['Synology NAS', 'Marco ISO 9001', 'Respaldo Automatizado', 'Políticas de Integración'],
      results: [
        'Cumplimiento ISO 9001.',
        'Reducción del tiempo de inactividad del sistema interno a personas externas al laboratorio.',
        'Mayor agilidad en tiempos de entrega de resultados'
      ]
    }
  ]
};

const WorkPage = () => {
  const { language } = useLanguage();
  const projects = projectsData[language];

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
        <PageHeroSection content={heroContent} />
        
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
        
      </main>
      
      <Footer />
    </>
  );
};

export default WorkPage;