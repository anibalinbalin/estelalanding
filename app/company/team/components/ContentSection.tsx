'use client';

import React from 'react';
import { useLanguage } from '@/components/language-provider';

const content = {
  en: {
    text: "Instead of the usual corporate copy: Those who do. No euphemisms."
  },
  es: {
    text: "En lugar del texto corporativo de rigor: Los que hacen. Sin eufemismos."
  }
};

export const ContentSection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] mt-16 min-[800px]:mt-[7.5rem] mb-12 min-[800px]:mb-[7.5rem] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
          <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
            <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
              {t.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};