'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';

const content = {
  en: {
    highlight: "Who we are.",
    rest: "The people behind the projects. No stock photos."
  },
  es: {
    highlight: "Quiénes somos.",
    rest: "Las personas detrás de los proyectos. Sin fotos de stock."
  }
};

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal col-span-12 min-[600px]:col-span-11">
          <span className="text-[var(--content-tertiary-p3)]">
            {t.highlight}
          </span> {t.rest}
        </h2>
      </div>
    </div>
  );
};