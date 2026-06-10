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
      id: 'estela-internal',
      title: 'Private AI Infrastructure & AI-Assisted Engineering',
      client: 'Estela (internal)',
      year: '2025-2026',
      category: 'AI Engineering',
      duration: 'Ongoing',
      challenge: 'Recommending private AI infrastructure is easy. Running your own business on it is the actual test. We needed local models for engineering work and a place to prototype client pipelines without sending anyone\'s data to a third party.',
      solution: 'We built a self-hosted GPU server—NVIDIA hardware, Proxmox virtualization—running local models for AI-assisted engineering and pipeline prototyping. This website was built the same way. We are our own first client.',
      technologies: ['NVIDIA GPU Server', 'Proxmox Virtualization', 'Self-Hosted Models', 'AI-Assisted Development'],
      results: [
        'Client data never leaves hardware we control',
        'Every pipeline prototyped on our own metal before it touches a client\'s',
        'AI-assisted engineering as daily practice, not a slide in a deck',
        'This site: designed, written, and shipped AI-assisted'
      ]
    },
    {
      id: 'legal-time-capture',
      title: 'AI Time Capture for Legal Billing',
      client: 'A law firm',
      year: '2025-2026',
      category: 'AI Engineering',
      duration: 'Ongoing',
      challenge: 'Lawyers reconstruct their billable day at 7pm, from memory. Hours leak. Narratives read like they were written at 7pm, from memory—because they were.',
      solution: 'A desktop agent captures the workday automatically; an LLM drafts billing narratives in the firm\'s voice. Lawyers review, edit, and sign. The machine proposes the entry. The lawyer decides what gets billed.',
      technologies: ['Desktop Capture Agent', 'LLM Narrative Generation', 'Human Review Workflow', 'Private Deployment'],
      results: [
        'Billable days reconstructed from activity, not memory',
        'Narratives drafted automatically, approved by humans',
        'Nothing is billed without a lawyer\'s signature',
        'Deployed privately for the firm'
      ]
    },
    {
      id: 'price-list-pipeline',
      title: 'Supplier Price-List Extraction Pipeline',
      client: 'A grocery retailer',
      year: '2026',
      category: 'AI Engineering',
      duration: 'Ongoing',
      challenge: 'Every supplier sends price lists as PDFs, each in its own creative format. Someone retypes them. Prices lag, and typos cost money.',
      solution: 'An extraction pipeline parses each supplier\'s format into structured products and prices—validated before anything touches the catalog. It runs on our private GPU server, so supplier data stays off third-party clouds.',
      technologies: ['Document Extraction', 'Per-Supplier Parsers', 'FastAPI', 'Private Hosting'],
      results: [
        'Price lists arrive as data, not retyping sessions',
        'Each supplier\'s format quirks handled by its own parser',
        'Validation before import—no silent catalog corruption',
        'Processed on hardware we control'
      ]
    },
    {
      id: 'whatsapp-front-desk',
      title: 'WhatsApp Front Desk Automation',
      client: 'A film production company',
      year: '2026',
      category: 'AI Engineering',
      duration: 'Ongoing',
      challenge: 'Inbound WhatsApp messages around the clock: clients, suppliers, casting calls. The team answered everything by hand—or didn\'t.',
      solution: 'Workflow-driven automation on WhatsApp Business: business-hours awareness, department routing with interactive menus, and a clean handoff to a human when one is needed.',
      technologies: ['WhatsApp Business API', 'Workflow Automation', 'Webhooks'],
      results: [
        'Every message answered immediately, at any hour',
        'Conversations routed to the right department, not the whole office',
        'Humans handle only what needs a human'
      ]
    },
    {
      id: 'teatro-solis',
      title: 'Theater A/V Control System',
      client: 'Teatro Solís',
      year: '2023',
      category: 'Systems Integration',
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
      category: 'Secure Infrastructure',
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
      category: 'Data & Compliance',
      duration: '3 years (ongoing)',
      challenge: 'A medical lab where patient data has to move between systems, stay backed up, stay immutable, and pass ISO 9001 audits. The fun stuff.',
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
      id: 'estela-internal',
      title: 'Infraestructura Privada de IA e Ingeniería Asistida por IA',
      client: 'Estela (interno)',
      year: '2025-2026',
      category: 'Ingeniería de IA',
      duration: 'En curso',
      challenge: 'Recomendar infraestructura privada de IA es fácil. Operar el propio negocio sobre ella es la verdadera prueba. Necesitábamos modelos locales para el trabajo de ingeniería y un lugar donde prototipar pipelines de clientes sin enviar los datos de nadie a un tercero.',
      solution: 'Construimos un servidor GPU propio—hardware NVIDIA, virtualización Proxmox—que corre modelos locales para ingeniería asistida por IA y prototipado de pipelines. Este sitio web se construyó de la misma manera. Somos nuestro propio primer cliente.',
      technologies: ['Servidor GPU NVIDIA', 'Virtualización Proxmox', 'Modelos Autoalojados', 'Desarrollo Asistido por IA'],
      results: [
        'Los datos de clientes nunca salen de hardware que controlamos.',
        'Cada pipeline se prototipa en nuestros propios equipos antes de llegar a los de un cliente.',
        'Ingeniería asistida por IA como práctica diaria, no como diapositiva.',
        'Este sitio: diseñado, escrito y publicado con asistencia de IA.'
      ]
    },
    {
      id: 'legal-time-capture',
      title: 'Captura de Tiempo con IA para Facturación Legal',
      client: 'Un estudio jurídico',
      year: '2025-2026',
      category: 'Ingeniería de IA',
      duration: 'En curso',
      challenge: 'Los abogados reconstruyen su día facturable a las 19, de memoria. Las horas se pierden. Las narrativas se leen como escritas a las 19, de memoria —porque lo fueron.',
      solution: 'Un agente de escritorio captura la jornada automáticamente; un LLM redacta las narrativas de facturación con la voz del estudio. Los abogados revisan, editan y firman. La máquina propone la entrada. El abogado decide qué se factura.',
      technologies: ['Agente de Captura de Escritorio', 'Narrativas Generadas por LLM', 'Revisión Humana', 'Despliegue Privado'],
      results: [
        'Días facturables reconstruidos desde la actividad, no desde la memoria',
        'Narrativas redactadas automáticamente, aprobadas por humanos',
        'Nada se factura sin la firma de un abogado',
        'Desplegado en privado para el estudio'
      ]
    },
    {
      id: 'price-list-pipeline',
      title: 'Pipeline de Extracción de Listas de Precios',
      client: 'Un supermercado',
      year: '2026',
      category: 'Ingeniería de IA',
      duration: 'En curso',
      challenge: 'Cada proveedor envía sus listas de precios en PDF, cada uno con su propio formato creativo. Alguien las retipea. Los precios llegan tarde y los errores cuestan dinero.',
      solution: 'Un pipeline de extracción convierte el formato de cada proveedor en productos y precios estructurados —validados antes de tocar el catálogo. Corre en nuestro servidor GPU privado: los datos de proveedores no pasan por nubes de terceros.',
      technologies: ['Extracción de Documentos', 'Parsers por Proveedor', 'FastAPI', 'Alojamiento Privado'],
      results: [
        'Las listas de precios llegan como datos, no como sesiones de tipeo',
        'Las particularidades de cada proveedor, resueltas por su propio parser',
        'Validación antes de importar: el catálogo no se corrompe en silencio',
        'Procesado en hardware que controlamos'
      ]
    },
    {
      id: 'whatsapp-front-desk',
      title: 'Automatización de Recepción por WhatsApp',
      client: 'Una productora audiovisual',
      year: '2026',
      category: 'Ingeniería de IA',
      duration: 'En curso',
      challenge: 'Mensajes de WhatsApp a toda hora: clientes, proveedores, castings. El equipo respondía todo a mano —o no respondía.',
      solution: 'Automatización por flujos sobre WhatsApp Business: detección de horario, derivación por departamento con menús interactivos, y pase limpio a un humano cuando hace falta uno.',
      technologies: ['API de WhatsApp Business', 'Automatización de Flujos', 'Webhooks'],
      results: [
        'Cada mensaje respondido al instante, a cualquier hora',
        'Conversaciones derivadas al departamento correcto, no a toda la oficina',
        'Los humanos atienden solo lo que necesita un humano'
      ]
    },
    {
      id: 'teatro-solis',
      title: 'Sistema de Control A/V del Teatro',
      client: 'Teatro Solís',
      year: '2023',
      category: 'Integración de Sistemas',
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
      category: 'Infraestructura Segura',
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
      category: 'Datos y Cumplimiento',
      duration: '3 años (en curso)',
      challenge: 'Un laboratorio médico donde los datos de pacientes deben moverse entre sistemas, mantenerse respaldados e inmutables, y superar auditorías ISO 9001.',
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