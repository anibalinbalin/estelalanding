'use client'

import { Link } from 'next-view-transitions'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/components/language-provider'

export const contactContent = {
  en: {
    title: "Contact us",
    subtitle: "Get in touch",
    intro: "We solve tech questions. We also confirm suspicions. Rarely both at once. Here are",
    projectsLink: "our recent projects",
    introEnd: "and case studies.",
    bullet1: "Learn about our services. Bibliography optional.",
    bullet2: "Get a tech assessment. Personalized, not personal.",
    bullet3: "Specify what you need. With precision, not optimism.",
    contactDirect: "Contact us directly at",
    labelName: "Your name",
    placeholderName: "Jane Smith",
    labelEmail: "Your work email",
    placeholderEmail: "jane@company.com",
    labelCompany: "Company name",
    placeholderCompany: "Your Company",
    labelSource: "How did you hear about us?",
    placeholderSource: "Google, referral, etc.",
    labelDetails: "Project details",
    placeholderDetails: "Tell us about your project, timeline, and any specific requirements...",
    submit: "SUBMIT",
    workPath: "/company/work"
  },
  es: {
    title: "Contáctenos",
    subtitle: "",
    intro: "Resolvemos dudas tecnológicas. También confirmamos sospechas. Rara vez ambas cosas a la vez. Aquí están",
    projectsLink: "nuestros trabajos",
    introEnd: "más recientes y casos de estudio.",
    bullet1: "Informarse sobre nuestros servicios. Bibliografía opcional.",
    bullet2: "Obtener una evaluación tecnológica. Personalizada, no personal.",
    bullet3: "Especificar lo que necesita. Con precisión, no con optimismo.",
    contactDirect: "Contáctenos directamente en",
    labelName: "Su nombre",
    placeholderName: "Rogelio Roldán",
    labelEmail: "Su correo electrónico de trabajo",
    placeholderEmail: "rogelio@rodlan.com",
    labelCompany: "Nombre de la empresa",
    placeholderCompany: "Su Empresa",
    labelSource: "¿Cómo se enteró de nosotros?",
    placeholderSource: "Google, referencia, etc.",
    labelDetails: "Detalles del proyecto",
    placeholderDetails: "Cuéntenos sobre su proyecto, cronograma y cualquier requisito específico...",
    submit: "ENVIAR",
    workPath: "/company/work"
  }
}

export default function ContactPage() {
  const { language } = useLanguage()
  const t = contactContent[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[800px]:col-span-10 min-[1100px]:col-span-6 flex flex-col justify-between border-b pb-4 text-left border-b-border">
            <div>
              <div className="text-4xl min-[1000px]:text-5xl font-normal leading-tight min-[1000px]:leading-[110%] tracking-normal">
                <div className="text-foreground min-[1100px]:mt-6">{t.title}</div>
                {t.subtitle && <div className="text-muted-foreground">{t.subtitle}</div>}
              </div>
              <div className="mx-auto min-[600px]:mx-0 mb-8 mt-4 max-w-96 text-lg leading-relaxed tracking-wide text-muted-foreground">
                <p className="m-0">
                  {t.intro}{' '}
                  <Link href={t.workPath} className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] hover:text-[#08178c]">
                    {t.projectsLink}
                  </Link>{' '}
                  {t.introEnd}
                </p>
                <div className="flex flex-col gap-1 pt-3 mt-2 mb-2">
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#f5b944]">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-muted-foreground text-sm min-[800px]:text-base leading-tight min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">
                      {t.bullet1}
                    </div>
                  </li>
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#f5b944]">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-muted-foreground text-sm min-[800px]:text-base leading-tight min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">
                      {t.bullet2}
                    </div>
                  </li>
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#f5b944]">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-muted-foreground text-sm min-[800px]:text-base leading-tight min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">
                      {t.bullet3}
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div className="hidden min-[1100px]:block text-muted-foreground min-[600px]:text-base min-[600px]:leading-6 min-[600px]:tracking-wide">
              {t.contactDirect}{' '}
              <Link href="mailto:hola@este.la" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] hover:text-[#08178c]">
                hola@este.la
              </Link>
            </div>
          </div>
          <div className="col-span-12 min-[800px]:col-span-10 min-[1100px]:col-span-6">
            <div className="rounded-lg border bg-muted/5 border-border">
              <div className="w-full">
                <form>
                  <div className="flex flex-col">
                    <div className="flex min-[800px]:grid min-[800px]:grid-cols-12 flex-col border-border gap-x-4 gap-y-6 border-b p-6">
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            {t.labelName}
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="name"
                            placeholder={t.placeholderName}
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            {t.labelEmail}
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="email"
                            type="email"
                            placeholder={t.placeholderEmail}
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            {t.labelCompany}
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="companyName"
                            type="text"
                            placeholder={t.placeholderCompany}
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            {t.labelSource}
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="discoverySource"
                            type="text"
                            placeholder={t.placeholderSource}
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="border-b w-full col-span-12 border-b-border"></div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            {t.labelDetails}
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <textarea
                            name="notes"
                            placeholder={t.placeholderDetails}
                            rows={4}
                            className="px-3 py-3 rounded w-full bg-background resize-y text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 flex items-center justify-end min-[800px]:col-span-12">
                      <div className="flex flex-col gap-2 text-center">
                        <button
                          type="submit"
                          className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]"
                        >
                          {t.submit}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-12 text-muted-foreground text-base leading-6 tracking-wide min-[1100px]:hidden">
            {t.contactDirect}{' '}
            <Link href="mailto:hola@este.la" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] hover:text-[#08178c]">
              hola@este.la
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
