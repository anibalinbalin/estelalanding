"use client";

import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';

const content = {
  en: {
    title: "Consulting & Support",
    subtitle: "From the Latin consultare, 'to deliberate together.' Not from soportare, 'to tolerate the client.'",
    sectionTitle: "We turn complexity into strategic advantage. Simplicity, we leave simple.",
    para1: "We don't sell solutions; we cultivate them. We start by understanding the real problem—the one usually hiding behind the apparent problem. Then we apply technical expertise and common sense, in that order. Because technology without purpose is just electricity with pretensions.",
    para2: "Infrastructure, growth, optimization, audits: we talk about all of that, but mostly we talk with you. Our consulting doesn't produce reports nobody reads. It produces decisions someone makes. And that someone usually sleeps better afterward.",
    cardTitle: "Let's Talk",
    cardDesc: "For a direct conversation about your technology challenges:",
    exploreTitle: "Learn More",
    methodLink: "Our Method",
    infraLink: "Infrastructure Services",
    workLink: "See Our Work",
    advantageTitle: "The advantage of working with us",
    adv1: "Ongoing advisory, not one-off.",
    adv2: "Solutions aligned with your goals.",
    adv3: "Direct access to the people doing the work.",
    adv4: "Focus on lasting value."
  },
  es: {
    title: "Consultoría y soporte",
    subtitle: "Del latín consultare, 'deliberar juntos'. No del latín soportare, 'tolerar al cliente'.",
    sectionTitle: "Transformamos la complejidad en ventaja estratégica. La simplicidad, en cambio, la dejamos simple.",
    para1: "No vendemos soluciones; las cultivamos. Empezamos por entender el problema real —ese que suele esconderse detrás del problema aparente—. Luego aplicamos experiencia técnica y sentido común, en ese orden. Porque la tecnología sin propósito es solo electricidad con pretensiones.",
    para2: "Infraestructura, crecimiento, optimización, auditorías: hablamos de todo eso, pero sobre todo hablamos con usted. Nuestra consultoría no produce informes que nadie lee. Produce decisiones que alguien toma.",
    cardTitle: "Conversemos",
    cardDesc: "Para una conversación directa sobre sus desafíos tecnológicos:",
    exploreTitle: "Para saber más",
    methodLink: "Nuestro Método",
    infraLink: "Servicios de Infraestructura",
    workLink: "Vea Nuestros Trabajos",
    advantageTitle: "La ventaja de trabajar con nosotros",
    adv1: "Asesoría continua, no puntual.",
    adv2: "Soluciones alineadas a sus objetivos.",
    adv3: "Acceso directo a quienes hacen el trabajo.",
    adv4: "Foco en decisiones a largo plazo."
  }
};

export default function ConsultingPage() {
  const { language } = useLanguage();
  const t = content[language];

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
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'italic'}}>
                    {t.subtitle}
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              <div className="w-[100%] px-5 min-[600px]:px-10">
                <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                  <div className="col-span-12 min-[700px]:col-span-7 self-center">
                    <h2 className="col-span-12 text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-6 min-[800px]:mb-6">{t.sectionTitle}</h2>
                    <div className="mb-4 min-[700px]:mb-0 pr-6 min-[900px]:pr-0">
                      <p className="m-0 mt-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">{t.para1}</p>
                      <p className="m-0 mt-[calc(1rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(1rem_*_var(--tw-space-y-reverse))] text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">{t.para2}</p>
                    </div>
                  </div>
                  <div className="col-span-12 min-[700px]:col-start-[8] min-[900px]:col-start-[9] min-[700px]:col-span-5 min-[900px]:col-span-4 self-center rounded-[var(--border-radius-xl)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)]">
                    <div className="border-b p-6 border-b-[var(--stroke-secondary-p3)]">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">{t.cardTitle}</div>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] mb-3">{t.cardDesc}</div>
                      <a href="mailto:hola@este.la" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] text-base">
                        hola@este.la
                        <svg width="16" height="16" className="block align-middle text-[#f5b944]">
                          <use href="/assets/sprite-Dt029LRi.svg#email-16"></use>
                        </svg>
                      </a>
                    </div>
                    <div className="border-b p-6 border-b-[var(--stroke-secondary-p3)]">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">{t.exploreTitle}</div>
                      <div className="space-y-2">
                        <a href="/method" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block text-base">
                          {t.methodLink}
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                        <a href="/services/infrastructure" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block text-base">
                          {t.infraLink}
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                        <a href="/company/work" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block text-base">
                          {t.workLink}
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">{t.advantageTitle}</div>
                      <div className="mt-3 space-y-3">
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • {t.adv1}
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • {t.adv2}
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • {t.adv3}
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • {t.adv4}
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
  )
}
