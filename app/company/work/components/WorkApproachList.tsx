'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/components/language-provider';

const content = {
  en: {
    approachTitle: "Our Approach",
    processTitle: "How We Work",
    approach: [
      {
        title: "Diagnosis before prognosis",
        description: "Before acting, we understand. Takes longer. Saves more."
      },
      {
        title: "Zero technical debt",
        description: "We don't leave loose ends for the future. Not for you, not for us."
      },
      {
        title: "We validate everything",
        description: "Production isn't a testing environment. We validate every component in controlled environments before deployment."
      },
      {
        title: "Success is measured in numbers",
        description: "As Pythagoras said—or someone who knew him: what you don't measure, you can't improve. What you don't improve, you regret."
      }
    ],
    process: [
      {
        title: "Discovery & Analysis",
        description: "2-3 weeks of deep discovery. We map your current state, understand your goals, and identify the real challenges behind the symptoms."
      },
      {
        title: "Architecture & Planning",
        description: "Detailed technical specs, phased implementation plan, risk mitigation strategies. No surprises, no scope creep."
      },
      {
        title: "Staged Implementation",
        description: "Phased rollout with continuous validation. Each phase is tested and validated before moving to the next."
      },
      {
        title: "Validation & Handover",
        description: "Comprehensive testing, team training, and documentation. We don't leave until you feel confident and capable."
      }
    ]
  },
  es: {
    approachTitle: "Nuestro Enfoque",
    processTitle: "Cómo Trabajamos",
    approach: [
      {
        title: "Diagnóstico antes que pronóstico",
        description: "Antes de actuar, comprendemos. Lleva más tiempo. Ahorra más."
      },
      {
        title: "Deuda técnica cero",
        description: "No dejamos pendientes para el futuro. Ni para usted ni para nosotros."
      },
      {
        title: "Validamos Todo",
        description: "El entorno de producción no es un entorno de pruebas. Validamos cada componente en entornos controlados antes de la implementación."
      },
      {
        title: "El éxito se declina en cifras",
        description: "Como decía Pitágoras —o alguien que lo conocía—: lo que no se mide, no se mejora. Lo que no se mejora, se lamenta."
      }
    ],
    process: [
      {
        title: "Descubrimiento y Análisis",
        description: "2-3 semanas de descubrimiento profundo. Mapeamos su estado actual, entendemos sus objetivos e identificamos los desafíos reales detrás de los síntomas."
      },
      {
        title: "Arquitectura y Planificación",
        description: "Especificaciones técnicas detalladas, plan de implementación por fases y estrategias de mitigación de riesgos. Sin sorpresas, sin desviaciones del alcance."
      },
      {
        title: "Implementación por Etapas",
        description: "Despliegue por fases con validación continua. Cada fase se prueba y valida antes de pasar a la siguiente."
      },
      {
        title: "Validación y Entrega",
        description: "Pruebas exhaustivas, capacitación del equipo y documentación. No nos vamos hasta que usted se sienta seguro y capacitado."
      }
    ]
  }
};

const approachIcons = [
  <svg key="0" width="24" height="24" className="h-6 w-6 block align-middle text-[#f5b944]">
    <use href="/assets/sprite-Dt029LRi.svg#networking-24"></use>
  </svg>,
  <svg key="1" width="24" height="24" className="h-6 w-6 block align-middle text-[#f5b944]">
    <use href="/assets/sprite-Dt029LRi.svg#servers-24"></use>
  </svg>,
  <svg key="2" width="24" height="24" className="h-6 w-6 block align-middle text-[#f5b944]">
    <use href="/assets/sprite-Dt029LRi.svg#security-24"></use>
  </svg>,
  <svg key="3" width="24" height="24" className="h-6 w-6 block align-middle text-[#f5b944]">
    <use href="/assets/sprite-Dt029LRi.svg#metrics-24"></use>
  </svg>
];

const getProcessIcon = (index: number, currentTheme: string) => (
  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono ${
    currentTheme === 'light'
      ? 'bg-[#e5e5e5] text-[#ecbb5a]'
      : 'bg-[#3d3019] text-[#f5b944]'
  }`}>
    {index + 1}
  </div>
);

const ApproachItem = ({ icon, title, description, isLast = false, currentTheme, showSquare = false }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  currentTheme: string;
  showSquare?: boolean;
}) => {
  return (
    <div className="gap-4 min-[600px]:gap-6 min-[600px]:grid-cols-[repeat(8,minmax(0,1fr))] relative mt-5 flex min-[800px]:grid">
      <div className="flex flex-col mr-4 min-[800px]:mr-0 min-[800px]:col-start-[1]">
        <div className="flex w-[100%]">
          {showSquare ? (
            <div className={`flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] ${
              currentTheme === 'light' 
                ? 'bg-[#e5e5e5] text-[#ecbb5a]' 
                : 'bg-[#3d3019] text-[#f5b944]'
            }`}>
              {icon}
            </div>
          ) : (
            icon
          )}
        </div>
        {!isLast && (
          <div className="mt-5 h-[100%] w-10 flex-[1_1_0%] items-center justify-center text-center">
            <div className="h-[100%] relative inline-block w-0.5 rounded-[var(--border-radius-full)] bg-[#ecbb5a]">
              <div className="rounded-[var(--border-radius-full)] w-[100%] absolute h-0 transition-all ease-[cubic-bezier(.4,0,.2,1)] duration-[.5s] bg-[#ecbb5a]"></div>
            </div>
          </div>
        )}
      </div>
      <div className={`${isLast ? '!mb-0' : 'mb-10'} min-[600px]:col-span-9 min-[800px]:col-span-7 min-[1200px]:col-span-7`}>
        <div className={`mt-2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-[1.625rem] text-lg tracking-wide ${
          currentTheme === 'light' 
            ? 'text-[#7d8384]' 
            : 'text-[var(--content-raise-p3)]'
        }`}>
          {title}
        </div>
        <p className="m-0 mt-2 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export const WorkApproachList = () => {
  const { theme, resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';
  const t = content[language];

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 max-[800px]:mb-8 min-[800px]:mb-16">
        <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[3] min-[600px]:col-span-10 min-[1000px]:col-span-8">
          <div className="mb-8">
            <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              {t.approachTitle}
            </h2>
          </div>
          <div>
            {t.approach.map((item, index) => (
              <ApproachItem
                key={index}
                icon={approachIcons[index]}
                title={item.title}
                description={item.description}
                isLast={index === t.approach.length - 1}
                currentTheme={currentTheme}
                showSquare={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkProcessList = () => {
  const { theme, resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';
  const t = content[language];

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto mb-16 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[3] min-[600px]:col-span-10 min-[1000px]:col-span-8">
          <div className="mb-8">
            <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              {t.processTitle}
            </h2>
          </div>
          <div>
            {t.process.map((item, index) => (
              <ApproachItem
                key={index}
                icon={getProcessIcon(index, currentTheme)}
                title={item.title}
                description={item.description}
                isLast={index === t.process.length - 1}
                currentTheme={currentTheme}
                showSquare={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};