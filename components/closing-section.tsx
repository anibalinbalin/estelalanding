"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export const ClosingSection = () => {
  const { language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(0);
  
  const content = {
    en: {
      text: <>Polyphemus had size, strength, and one eye—which turned out to be insufficient. Odysseus had wit, few men, and a plan. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>We chose the second path.</span> No layers to dilute. No departments to delegate. Six people who solve. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>Because the solution was never about being bigger—it was about thinking better.</span></>
    },
    es: {
      text: <>Polifemo tenía tamaño, fuerza y un ojo —que resultó ser insuficiente. Odiseo tenía ingenio, pocos hombres y un plan. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>Elegimos el segundo camino.</span> Sin capas que diluyan. Sin departamentos que deleguen. Seis personas que resuelven. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>Porque la solución nunca estuvo en ser más grandes —estuvo en pensar mejor.</span></>
    }
  };
  
  const t = content[language];
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      className="w-full sm:mt-0 pt-6 sm:pt-0 mb-32 sm:mb-4 relative z-[2]"
      style={{ 
        marginTop: windowWidth < 640 ? 'calc(var(--spacing) * -60)' : undefined 
      }}
    >
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-col col-span-12 items-center text-center">
          <p 
            className="w-[100%] m-0 pb-8 sm:pb-0 text-balance max-w-[900px] font-normal text-[20px] leading-[30px] sm:text-[25px] sm:leading-[32px]"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              fontStyle: 'normal',
              fontWeight: '400',
              color: 'color(display-p3 0.4941 0.5137 0.5216)'
            }}
          >
            {t.text}
          </p>
        </div>
      </div>
    </section>
  );
};