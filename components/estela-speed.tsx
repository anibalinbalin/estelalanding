"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import FibonacciASCIISpiral from "@/components/ui/fibonacci-ascii-spiral";

export function EstelaSpeed() {
  const { resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "Craft Over Speed",
      description: "We could work faster. We choose to work better. Every cable is labeled. Every setting documented. Every solution built to outlast us.\n\nSome call it obsessive. Our clients call it essential."
    },
    es: {
      title: "Profundidad, No Velocidad",
      description: "La velocidad es fácil. La excelencia requiere tiempo. Cada instalación cuenta su propia historia. Cada sistema se explica solo. Nuestro trabajo habla por nosotros, incluso en nuestra ausencia."
    }
  };

  const t = content[language];

  if (!mounted) return null;

  return (
    <section 
      className="mt-16 sm:mt-28 lg:mt-[11.25rem] mb-4"
      style={{ 
        backgroundColor: 'var(--background)',
        color: 'var(--content-raise-p3)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[900px]:col-span-5">
            <h2 
              className="text-balance m-0 text-[1.5625rem] min-[600px]:text-4xl min-[900px]:text-[3.125rem] font-normal text-center min-[600px]:text-left leading-8 min-[600px]:leading-[2.625rem] min-[900px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[900px]:tracking-normal"
              style={{
                color: resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              {t.title}
            </h2>
            <div 
              className="text-balance mb-6 mt-1 max-w-[900px] min-[600px]:mb-10 min-[600px]:mt-3 min-[1000px]:mb-14 text-center min-[600px]:text-left font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
              style={{
                color: resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6e757c',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              {t.description}
            </div>
          </div>
          <div className="flex justify-between col-span-12 min-[900px]:col-start-[7] min-[900px]:col-span-6 min-[399px]:gap-10 gap-2 max-[899px]:mt-8 sm:max-[899px]:mt-12">
            <FibonacciASCIISpiral />
          </div>
        </div>
      </div>
    </section>
  );
}