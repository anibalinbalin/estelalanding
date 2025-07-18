"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";

export const TestNumbersSection = () => {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "The Measure of Our Method: Lasting Success, Enduring Partnerships",
      metric1: {
        title: "100% Client Retention",
        description: "Every client who partners with us, stays with us. This reflects the lasting value and unwavering trust we build together, making your success our long-term commitment."
      },
      metric2: {
        title: "7+ Years Average Relationship",
        description: "We cultivate deep, long-term partnerships, allowing us to intimately understand and evolve with your business needs for over seven years on average."
      },
      metric3: {
        title: "13+ Years Core Team Cohesion",
        description: "Our founding-led core team brings over a decade of unified vision and consistent senior expertise directly to your projects, ensuring quality and accountability."
      },
      metric4: {
        title: "Dedicated to Ideal Partnerships",
        description: "We deliberately focus our deep expertise where we can create maximum impact, ensuring every partnership is set up for profound and transformative success."
      }
    },
    es: {
      title: "La escala de nuestro método: valor constante, alianzas que evolucionan",
      metric1: {
        title: "100% Retención de Clientes",
        description: "Quien trabaja con nosotros, permanece con nosotros. Esto refleja el valor sostenido y la confianza inquebrantable que construimos juntos. Su estabilidad tecnológica es nuestro compromiso."
      },
      metric2: {
        title: "7+ Años de Relación Promedio",
        description: "Cultivamos alianzas profundas y duraderas. Esto nos permite entender íntimamente su empresa y evolucionar juntos."
      },
      metric3: {
        title: "13+ Años de Cohesión del Equipo",
        description: "El mismo equipo desde el comienzo. Más de una década trabajando juntos significa que conocemos los métodos de cada uno y los aplicamos sin fricciones en cada proyecto."
      },
      metric4: {
        title: "Dedicados a Alianzas Ideales",
        description: "Enfocamos nuestra experiencia donde tiene sentido. Cada alianza se construye para perdurar y evolucionar."
      }
    }
  };
  
  const t = content[language];

  if (!mounted) return null;

  return (
    <section className="w-full">
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[1200px]">
          <h2 className="text-balance textWrapStyle-[balance] m-0 text-[#1b1b1b] dark:text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-6 min-[600px]:mb-10 min-[1000px]:mb-14 mt-40 min-[600px]:mt-40 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal">
            {t.title}
          </h2>
        </div>
      </div>
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="relative z-10 m-auto mt-14 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 min-[1000px]:!gap-y-[0px]">
          <div className="col-span-6 min-[1000px]:col-span-3">
            <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border" style={{ 
                backgroundColor: mounted && resolvedTheme === 'dark' ? 'var(--ascii-background-p3)' : '#f6f6f6', 
                padding: '12px' 
              }}>
              <div className="relative aspect-square">
                <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                  <img 
                    src="/img/numbers_1.png" 
                    alt="Number 1" 
                    className="w-full h-auto max-w-full max-h-full"
                    style={{ 
                      margin: '4px',
                      filter: 'brightness(0) saturate(100%) invert(68%) sepia(58%) saturate(385%) hue-rotate(7deg) brightness(93%) contrast(88%)'
                    }}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-tertiary-light-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">{t.metric1.title}</h3>
            <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">{t.metric1.description}</p>
          </div>
          <div className="col-span-6 min-[1000px]:col-span-3">
            <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border" style={{ 
                backgroundColor: mounted && resolvedTheme === 'dark' ? 'var(--ascii-background-p3)' : '#f6f6f6', 
                padding: '12px' 
              }}>
              <div className="relative aspect-square">
                <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                  <img 
                    src="/img/numbers_2.png" 
                    alt="Number 2" 
                    className="w-full h-auto max-w-full max-h-full"
                    style={{ 
                      margin: '4px',
                      filter: 'brightness(0) saturate(100%) invert(68%) sepia(58%) saturate(385%) hue-rotate(7deg) brightness(93%) contrast(88%)'
                    }}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-tertiary-light-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">{t.metric2.title}</h3>
            <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">{t.metric2.description}</p>
          </div>
          <div className="col-span-6 min-[1000px]:col-span-3">
            <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border" style={{ 
                backgroundColor: mounted && resolvedTheme === 'dark' ? 'var(--ascii-background-p3)' : '#f6f6f6', 
                padding: '12px' 
              }}>
              <div className="relative aspect-square">
                <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                  <img 
                    src="/img/numbers_3.png" 
                    alt="Number 3" 
                    className="w-full h-auto max-w-full max-h-full"
                    style={{ 
                      margin: '4px',
                      filter: 'brightness(0) saturate(100%) invert(68%) sepia(58%) saturate(385%) hue-rotate(7deg) brightness(93%) contrast(88%)'
                    }}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-tertiary-light-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">{t.metric3.title}</h3>
            <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">{t.metric3.description}</p>
          </div>
          <div className="col-span-6 min-[1000px]:col-span-3">
            <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border" style={{ 
                backgroundColor: mounted && resolvedTheme === 'dark' ? 'var(--ascii-background-p3)' : '#f6f6f6', 
                padding: '12px' 
              }}>
              <div className="relative aspect-square">
                <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                  <img 
                    src="/img/numbers_4.png" 
                    alt="Number 4" 
                    className="w-full h-auto max-w-full max-h-full"
                    style={{ 
                      margin: '4px',
                      filter: 'brightness(0) saturate(100%) invert(68%) sepia(58%) saturate(385%) hue-rotate(7deg) brightness(93%) contrast(88%)'
                    }}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-tertiary-light-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">{t.metric4.title}</h3>
            <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">{t.metric4.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};