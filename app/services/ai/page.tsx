"use client";

import AiAsciiArt from '@/components/ui/ai-ascii-art';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';

export const aiContent = {
  en: {
    title: "AI Engineering",
    subtitle: "AI that works after the demo ends.",
    pipelinesTitle: "AI Engineering Pipelines",
    pipelinesDesc: "Documents read, classified, and routed before anyone opens them. Drafts written, releases tested, data landing where it belongs. We design the pipeline, the AI does the heavy lifting, and a human signs off. Demos are easy; production is where AI gets found out. We build for the second part.",
    agentsTitle: "Agentic Automation",
    agentsDesc: "Systems that act: they read, decide, and execute within limits we define together. The agents do the work; the judgment stays human. AI is a tool. We are the criteria.",
    assistedTitle: "AI-Assisted Development",
    assistedDesc: "We vibe code. So does everyone, whether they admit it or not. The difference is we review what the machine writes, test it, and answer for the result. The tools changed; accountability didn't.",
    modelsTitle: "Model Selection & Evaluation",
    modelsDesc: "Vendor-neutral, by design. We benchmark models against your problem, not against the hype cycle. Build or buy, open or closed, cloud or private — and when the data can't leave the building, the models run on hardware we control.",
    modelsLink: "Private AI Infrastructure",
    cta: "The machine proposes. We decide.",
    contact: "CONTACT"
  },
  es: {
    title: "Ingeniería de IA",
    subtitle: "IA que funciona cuando se apaga el proyector.",
    pipelinesTitle: "Pipelines de Ingeniería de IA",
    pipelinesDesc: "Documentos leídos, clasificados y enrutados antes de que alguien los abra. Borradores escritos, pruebas ejecutadas, datos que llegan a donde corresponden. Diseñamos el pipeline, la IA hace el trabajo pesado y un humano firma. Las demos son fáciles; la producción es donde la IA queda en evidencia. Construimos para la segunda parte.",
    agentsTitle: "Automatización con Agentes",
    agentsDesc: "Sistemas que actúan: leen, deciden y ejecutan dentro de límites que definimos juntos. Los agentes hacen el trabajo; el juicio sigue siendo humano. La IA es una herramienta. Nosotros somos el criterio.",
    assistedTitle: "Desarrollo Asistido por IA",
    assistedDesc: "Hacemos vibe coding. Como todos, lo admitan o no. La diferencia es que revisamos lo que escribe la máquina, lo probamos y respondemos por el resultado. Cambiaron las herramientas; la responsabilidad, no.",
    modelsTitle: "Selección y Evaluación de Modelos",
    modelsDesc: "Neutrales por diseño. Evaluamos modelos contra su problema, no contra el ciclo de la novedad. Construir o comprar, abierto o cerrado, nube o privado — y cuando los datos no pueden salir del edificio, los modelos corren en hardware que controlamos.",
    modelsLink: "Infraestructura Privada de IA",
    cta: "La máquina propone. Nosotros decidimos.",
    contact: "CONTACTO"
  }
};

export default function AIPage() {
  const { language } = useLanguage();
  const t = aiContent[language];
  const contactPath = '/contact';

  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-blur-sm transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]"></div>
        <nav dir="ltr" className="w-[100%]">
            <div className="absolute left-0 right-0 top-[54px] flex shrink items-center justify-center transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.1s]"></div>
        </nav>
      </div>
      <main className="mt-0">
        <div className="flex flex-col gap-20 min-[600px]:gap-28 min-[900px]:gap-48">
          <section>
              <div className="border-b border-b-[var(--stroke-default-p3)]"></div>
          </section>
          <section className="pt-12 sm:pt-0">
            <div className="w-[100%] px-5 min-[600px]:px-10">
              <div className="m-auto max-w-[1200px]">
                <h1 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">
                  {t.title}
                  <br />
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>
                    {t.subtitle}
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              <div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                    <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-span-6 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
                      <h2 className="mb-6 min-[600px]:mb-4 text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                        {t.pipelinesTitle}
                      </h2>
                      <div>
                        <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                          {t.pipelinesDesc}
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden border border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg bg-gradient-to-b from-muted/50 to-muted p-3">
                      <div className="w-full h-full flex items-center justify-center">
                        <AiAsciiArt isVisible={true} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                    <div className="col-span-12 min-[800px]:col-span-4 rounded-[var(--border-radius-xl)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] p-6">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)] mb-3">{t.agentsTitle}</div>
                      <p className="m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">{t.agentsDesc}</p>
                    </div>
                    <div className="col-span-12 min-[800px]:col-span-4 rounded-[var(--border-radius-xl)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] p-6">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)] mb-3">{t.assistedTitle}</div>
                      <p className="m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">{t.assistedDesc}</p>
                    </div>
                    <div className="col-span-12 min-[800px]:col-span-4 rounded-[var(--border-radius-xl)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] p-6">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)] mb-3">{t.modelsTitle}</div>
                      <p className="m-0 mb-3 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">{t.modelsDesc}</p>
                      <a href="/services/infrastructure" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] text-base">
                        {t.modelsLink}
                        <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                          <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
                  <div className="w-[100%] px-5 min-[600px]:px-10">
                    <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
                      <div className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 flex justify-between">
                        {[...Array(30)].map((_, i) => (
                          <div key={i} className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        ))}
                        <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
                          <div className="absolute w-[100%] bottom-0 h-24 bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                          <div className="absolute w-[100%] top-0 h-24 [transform:translate(var(--tw-translate-x)_var(--tw-translate-y)_rotate(var(--tw-rotate)_skew(var(--tw-skew-x)_skewY(var(--tw-skew-y)_scaleX(var(--tw-scale-x)_scaleY(var(--tw-scale-y)] bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-between gap-4 border p-4 bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-lg)]">
                        <div>
                          <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal min-[500px]:font-normal min-[900px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[500px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal">
                            {t.cta}
                          </h2>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                          <a href={contactPath} className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]">
                            {t.contact}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
