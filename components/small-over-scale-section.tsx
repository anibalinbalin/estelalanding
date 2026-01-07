"use client";

import { useLanguage } from "@/components/language-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { MoveRight } from "lucide-react";

export const SmallOverScaleSection = () => {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      coDesignTitle: "We study Renaissance art because system design is composition",
      coDesignFeatures: [
        "We read philosophy because technology serves humanity.",
        "Because we've learned: the magic happens at this size. Your project doesn't get handed off.",
        "Your relationship doesn't get 'managed.' You get us. All of us. Always."
      ],
      tryButton: "Read The Full Estela Method",
      contactButton: "Meet Our Team"
    },
    es: {
      coDesignTitle: "Estudiamos el Renacimiento —y no por el crédito académico",
      coDesignFeatures: [
        "Leemos filosofía porque un sistema sin contexto humano es una máquina con pretensiones.",
        "Porque hemos aprendido: la magia sucede en este tamaño. Tu proyecto no se transfiere.",
        "Tu relación no se 'gestiona.' Nos tienes a nosotros. A todos nosotros. Siempre."
      ],
      tryButton: "El método",
      contactButton: "Conocé a nuestro equipo"
    }
  };

  const t = content[language];

  return (
    <section className="w-full mt-28 sm:mt-[11.25rem] mb-4 relative z-10 bg-[var(--background-primary)] sm:bg-transparent">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
          <div className="flex absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 justify-between">
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)] max-[899px]:hidden"></div>
            <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
            <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
              <div className="absolute w-[100%] bottom-0 h-24 cta-gradient-bottom"></div>
              <div className="absolute w-[100%] top-0 h-24 cta-gradient-top"></div>
            </div>
          </div>
          <div className="estela-cta-card relative flex items-center justify-between border p-4 shadow-[var(--elevation-2)] min-[600px]:px-10 py-6 min-[600px]:py-8 gap-4 min-[600px]:gap-6 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-lg)] max-[399px]:flex-col">
          <div>
            <h2 className="estela-cta-title text-balance m-0 text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal max-[399px]:text-center">
              {t.coDesignTitle}<br/>
              <span className="estela-cta-subtitle">
                {t.coDesignFeatures[0]}
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <Link 
              href="/method" 
              className="estela-nav-button estela-nav-button-primary inline-flex items-center"
            >
              {t.tryButton} <MoveRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/company/team" 
              className="estela-nav-button estela-nav-button-outline inline-flex items-center"
            >
              {t.contactButton} <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};