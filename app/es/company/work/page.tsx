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
  // Project data translated to Spanish
  const projects = [
    {
      id: 'hospital-network',
      title: 'Infraestructura de Red Hospitalaria',
      client: 'Sistema Hospitalario Regional',
      year: '2023',
      category: 'Infraestructura',
      duration: '6 meses',
      challenge: 'Renovación completa de la red para un hospital de 300 camas con requerimientos de cero tiempo de inactividad.',
      solution: 'Implementación por fases de infraestructura redundante con sistemas de failover automatizados.',
      technologies: ['Lenovo ThinkSystem', 'UniFi Enterprise', 'Synology NAS', 'Acronis Backup'],
      results: [
        '99.99% de uptime logrado',
        'Cero pérdida de datos de pacientes',
        'Reducción del 40% en incidentes de TI',
        'Certificación de cumplimiento HIPAA'
      ]
    },
    {
      id: 'manufacturing-iot',
      title: 'Plataforma de Manufactura Inteligente',
      client: 'Empresa de Manufactura Industrial',
      year: '2023',
      category: 'Desarrollo',
      duration: '8 meses',
      challenge: 'Los sistemas de producción heredados necesitaban monitoreo en tiempo real y mantenimiento predictivo.',
      solution: 'Plataforma de IoT a medida con machine learning para análisis predictivo.',
      technologies: ['Edge Computing', 'Time Series DB', 'Machine Learning', 'Dashboard en tiempo real'],
      results: [
        'Reducción del 30% en el tiempo de inactividad',
        '$2M ahorrados en fallas prevenidas',
        'Visibilidad en tiempo real sobre más de 50 máquinas',
        'ROI logrado en 6 meses'
      ]
    },
    {
      id: 'finance-security',
      title: 'Seguridad para Servicios Financieros',
      client: 'Cooperativa de Crédito Regional',
      year: '2022',
      category: 'Seguridad',
      duration: '4 meses',
      challenge: 'Renovación de la ciberseguridad para cumplir con normativas bancarias y protección contra amenazas.',
      solution: 'Arquitectura de seguridad multicapa con monitoreo 24/7 y respuesta a incidentes.',
      technologies: ['Next-Gen Firewall', 'SIEM', 'Endpoint Protection', 'Capacitación en Seguridad'],
      results: [
        'Cero incidentes de seguridad desde la implementación',
        'Cumplimiento SOC 2 Tipo II logrado',
        '100% del personal completó la capacitación en seguridad',
        'Detección y respuesta automatizada a amenazas'
      ]
    },
    {
      id: 'logistics-cloud',
      title: 'Migración y Modernización a la Nube',
      client: 'Empresa de Logística y Distribución',
      year: '2022',
      category: 'Consultoría',
      duration: '5 meses',
      challenge: 'Migrar sistemas ERP y de almacén heredados a la nube sin interrupciones en la operativa del negocio.',
      solution: 'Estrategia de nube híbrida con migración gradual y operación de sistemas en paralelo.',
      technologies: ['AWS', 'Kubernetes', 'Microservicios', 'API Gateway'],
      results: [
        'Reducción del 60% en costos de infraestructura',
        'Ciclos de implementación 10 veces más rápidos',
        'Disponibilidad del sistema del 99.9%',
        'Acceso global para equipos remotos'
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