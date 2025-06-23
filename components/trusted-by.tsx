"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { LogoCarousel } from "@/components/ui/logo-carousel";

export const TrustedBy = () => {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  // Only show theme-dependent content after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "Trusted by market leaders"
    },
    es: {
      title: "Confianza de líderes del mercado"
    }
  };

  const t = content[language];

  if (!mounted) return null;

  return (
    <div className="w-full mt-28 sm:mt-[11.25rem] mb-4">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h3 
              className="text-[#08090a] dark:text-foreground"
              style={{ 
                fontFamily: 'SuisseIntl, sans-serif',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '34px'
              }}
            >
              {t.title}
            </h3>
          </div>
          <div className="flex justify-center">
            <LogoCarousel columnCount={4} />
          </div>
        </div>
      </div>
    </div>
  );
};