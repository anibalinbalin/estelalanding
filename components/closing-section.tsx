"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

export const ClosingSection = () => {
  const { language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(0);
  
  const content = {
    en: {
      text: <>The Cyclops likely had layers of management. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>Odysseus had a tight crew and a clear objective.</span> We believe in the latter. No getting lost in the crowd, no diluted responsibility. When you work with Estela, you get *us* – six minds directly invested in your success. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>It's not about outmuscling the problem; it's about outthinking it,</span> with the focused intensity only a truly cohesive team can provide.</>
    },
    es: {
      text: <>Polifemo tenía el tamaño y los recursos. Odiseo tenía ingenio y pocos hombres. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>Elegimos el segundo camino.</span> Sin estructuras que resten agilidad. Sin responsabilidades repartidas en departamentos. En Estela somos nosotros – seis personas enfocadas en resolver. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>La solución no está en ser más grandes, está en pensar mejor</span> con un equipo que trabaja en sincronía.</>
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