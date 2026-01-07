import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';


const principleItems = [
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#security-24"></use>
      </svg>
    ),
    title: "Boutique, no por pretensión",
    description: "Somos pocos porque cada proyecto merece atención completa."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#chat-24"></use>
      </svg>
    ),
    title: "Traducción",
    description: "Nuestra especialidad es volver claro lo complejo, tendiendo puentes entre la tecnología intrincada y las necesidades empresariales tangibles."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#person-24"></use>
      </svg>
    ),
    title: "Responsabilidad con remitente",
    description: "Cada decisión tiene autor. Cada autor, disponibilidad."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#servers-24"></use>
      </svg>
    ),
    title: "Seniority donde importa",
    description: "Las decisiones difíciles las toma quien ya las tomó antes."
  },
  {
    icon: (
      <svg width="24" height="24" className="h-6 w-6 block align-middle">
        <use href="/assets/sprite-Dt029LRi.svg#heart-24"></use>
      </svg>
    ),
    title: "Principios con consecuencias",
    description: "Lo que creemos afecta lo que hacemos. Y lo que no hacemos.",
    isLast: true
  }
];

const PrincipleItem = ({ icon, title, description, isLast = false, currentTheme }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  currentTheme: string;
}) => {
  return (
    <div className="gap-4 min-[600px]:gap-6 min-[600px]:grid-cols-[repeat(8,minmax(0,1fr))] relative mt-5 flex min-[800px]:grid">
      <div className="flex flex-col mr-4 min-[800px]:mr-0 min-[800px]:col-start-[1]">
        <div className="flex w-[100%]">
          <div className={`flex h-10 w-10 items-center justify-center rounded-[var(--border-radius-lg)] transition-[color,background-color,border-color,text-decoration-color,fill,stroke] ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] ${
            currentTheme === 'light' 
              ? 'bg-[#e5e5e5] text-[#ecbb5a]' 
              : 'bg-[#3d3019] text-[#f5b944]'
          }`}>
            {icon}
          </div>
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


export const PrinciplesList = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme if available, otherwise fall back to theme, then default to 'dark'
  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto mb-16 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[3] min-[600px]:col-span-10 min-[1000px]:col-span-8">
          <div>
            <h3 className="text-balance textWrapStyle-[balance] m-0 text-[#7d8384] dark:text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-8">
              Filosofía operativa
            </h3>
            <p className="mb-8 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
              Nuestro equipo central —Peter, Aníbal, Alfonso, Nahuel, Pablo y D. Esteban— opera bajo los siguientes principios compartidos:
            </p>
            {principleItems.map((item, index) => (
              <PrincipleItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                isLast={item.isLast}
                currentTheme={currentTheme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};