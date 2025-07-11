import React from 'react';

export const ContentSection = () => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] mt-16 min-[800px]:mt-[7.5rem] mb-12 min-[800px]:mb-[7.5rem] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
          <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
            <h2 className="text-balance textWrapStyle-[balance] m-0 text-[#7d8384] dark:text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
              Nuestra misión
            </h2>
            <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
              Estela es un equipo de expertos dedicados, estructurado intencionalmente para un trato directo y una colaboración profunda. Creemos que las verdaderas soluciones surgen cuando profesionales trabajan en conjunto, libres de las jerarquías tradicionales y enfocados puramente en el desafío en cuestión. No es solo nuestra forma de trabajar; es quiénes somos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};