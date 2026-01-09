"use client";

import { Link } from "next-view-transitions";
import { useLanguage } from "@/components/language-provider";

export const CTASection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "We don't grow—we go deeper",
      subtitle: "A team that responds, not a structure that delegates.",
      button: "Our Philosophy"
    },
    es: {
      title: "No crecemos —profundizamos",
      subtitle: "Un equipo que resuelve, no una estructura que deriva.",
      button: "Nuestra Filosofía"
    }
  };

  const t = content[language];
  return (
    <section className="w-full mt-28 sm:mt-[11.25rem] mb-4 relative z-10">
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
                {t.title}<br />
                <span className="estela-cta-subtitle">{t.subtitle}</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Link 
                href="/method/philosophy" 
                className="estela-nav-button estela-nav-button-primary"
              >
                {t.button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};