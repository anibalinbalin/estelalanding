'use client'

import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[800px]:col-span-10 min-[1100px]:col-span-6 flex flex-col justify-between border-b pb-4 text-left border-b-border">
            <div>
              <div className="text-4xl min-[1000px]:text-5xl font-normal leading-tight min-[1000px]:leading-[110%] tracking-normal">
                <div className="text-foreground min-[1100px]:mt-6">Contáctenos</div>
                <div className="text-muted-foreground">Póngase en contacto</div>
              </div>
              <div className="mx-auto min-[600px]:mx-0 mb-8 mt-4 max-w-96 text-lg leading-relaxed tracking-wide text-muted-foreground">
                <p className="m-0">
                  ¿Listo para transformar su infraestructura tecnológica? Comuníquese aquí para obtener más información o visite{' '}
                  <Link href="/es/company/work" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] hover:text-[#08178c]">
                    nuestros trabajos
                  </Link>{' '}
                  y casos de estudio.
                </p>
                <div className="flex flex-col gap-1 pt-3 mt-2 mb-2">
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#f5b944]">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-muted-foreground text-sm min-[800px]:text-base leading-tight min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">
                      Conozca más sobre nuestros servicios
                    </div>
                  </li>
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#f5b944]">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-muted-foreground text-sm min-[800px]:text-base leading-tight min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">
                      Obtenga una evaluación tecnológica personalizada
                    </div>
                  </li>
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#f5b944]">
                      <circle cx="6" cy="6" r="2" fill="currentColor" />
                    </svg>
                    <div className="text-muted-foreground text-sm min-[800px]:text-base leading-tight min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">
                      Discuta los requisitos de su proyecto
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div className="hidden min-[1100px]:block text-muted-foreground min-[600px]:text-base min-[600px]:leading-6 min-[600px]:tracking-wide">
              Contáctenos directamente en{' '}
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
                            Su nombre
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="name"
                            placeholder="Juan Pérez"
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            Su correo electrónico de trabajo
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="email"
                            type="email"
                            placeholder="juan@empresa.com"
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            Nombre de la empresa
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="companyName"
                            type="text"
                            placeholder="Su Empresa"
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            ¿Cómo se enteró de nosotros?
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <input
                            name="discoverySource"
                            type="text"
                            placeholder="Google, referencia, etc."
                            className="px-3 py-3 rounded w-full bg-background text-sm leading-tight tracking-wider text-foreground border-none outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="border-b w-full col-span-12 border-b-border"></div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label className="flex items-center text-sm leading-tight tracking-wider text-muted-foreground">
                            Detalles del proyecto
                          </label>
                        </div>
                        <div className="flex border items-center rounded border-border hover:border-muted-foreground transition-colors">
                          <textarea
                            name="notes"
                            placeholder="Cuéntenos sobre su proyecto, cronograma y cualquier requisito específico..."
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
                          ENVIAR
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-12 text-muted-foreground text-base leading-6 tracking-wide min-[1100px]:hidden">
            Contáctenos directamente en{' '}
            <Link href="mailto:hola@este.la" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] hover:text-[#08178c]">
              hola@este.la
            </Link>
          </div>
        </div>
      </div>
      
      {/* Use the project's Footer component instead of inline footer */}
      <Footer />
      
      {/* Keep the tracking elements exactly as they were */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: "none"}} 
          alt="" 
          src="https://px.ads.linkedin.com/collect/?pid=6206948&fmt=gif" 
        />
      </noscript>
      <div className="top-[336px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[1460px] h-0 w-0"></div>
      <div className="top-[659px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[977px] h-0 w-0"></div>
      <div></div>
      <div className="top-[-2px] left-0 h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-2px] left-[-2px] h-0 w-0"></div>
      <div className="top-0 left-0 absolute"></div>
      <canvas width="70" height="70" className="left-[1610px] top-0 block align-middle"></canvas>
    </div>
  )
}