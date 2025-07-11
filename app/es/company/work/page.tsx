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
  // Project data translated to Spanish
  const projects = [
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
  ];

  // Generic project images for demonstration
  const getProjectImages = (projectId: string) => ({
    main: {
      src: "/img/company_work/work_1_dither.jpg",
      alt: `${projectId} captura de pantalla de implementación principal`,
      width: 612,
      height: 532
    },
    side1: {
      src: "/img/company_work/work_2_dither.jpeg", 
      alt: `${projectId} interfaz del panel de control`,
      width: 432,
      height: 288
    },
    side2: {
      src: "/img/company_work/work_3_dither.jpeg",
      alt: `${projectId} configuración técnica`,
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