'use client'

import React from 'react';
import { useLanguage } from '@/components/language-provider';

export const PartnershipPhilosophySection = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: 'Our Partnership Philosophy',
      yourAdvantage: 'Your Advantage',
      philosophyItems: [
        {
          title: "We Don't Chase Certifications",
          description: "We earn partnerships through real-world excellence. Every partner relationship is tested in production before we formalize it."
        },
        {
          title: "Direct Relationships Matter",
          description: "When you have a problem, we don't open tickets. We call our contacts. Real people who know us and prioritize your needs."
        },
        {
          title: "Quality Over Quantity", 
          description: "Four strategic partners. That's it. Each one best-in-class. Each one proven. No compromises."
        }
      ],
      advantages: [
        'Enterprise pricing on day one',
        'Priority support always',
        'Beta access to innovations',
        'Direct vendor escalation',
        'Extended warranties',
        'Local spare parts'
      ]
    },
    es: {
      title: 'Nuestra Filosofía de Alianzas',
      yourAdvantage: 'Su Ventaja',
      philosophyItems: [
        {
          title: "No Perseguimos Certificaciones",
          description: "Ganamos nuestras alianzas a través de la excelencia en el mundo real. Cada relación con un socio es probada en producción antes de que la formalicemos."
        },
        {
          title: "Las Relaciones Directas son Fundamentales",
          description: "Cuando usted tiene un problema, no abrimos tickets. Llamamos a nuestros contactos. Personas reales que nos conocen y priorizan sus necesidades."
        },
        {
          title: "Calidad sobre Cantidad", 
          description: "Cuatro socios estratégicos. Eso es todo. Cada uno, el mejor en su clase. Cada uno, probado. Sin concesiones."
        }
      ],
      advantages: [
        'Precios corporativos desde el primer día',
        'Soporte prioritario, siempre',
        'Acceso a innovaciones en fase beta',
        'Escalamiento directo con el proveedor',
        'Garantías extendidas',
        'Repuestos locales'
      ]
    }
  };
  
  const t = content[language] || content.en;

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] max-[800px]:mb-2 max-[800px]:mt-8 min-[800px]:my-8 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
          <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
            
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-2">
                {t.title}
              </h2>
            </div>

            {/* Philosophy Items */}
            {t.philosophyItems.map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Your Advantage */}
            <div className="mb-8">
              <h3 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.25rem] font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 tracking-wide mb-3">
                {t.yourAdvantage}
              </h3>
              <ul className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                {t.advantages.map((advantage, i) => (
                  <li key={i} className="mb-2">
                    ✓ {advantage}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};