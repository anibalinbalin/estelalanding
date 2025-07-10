import { Footer } from '@/components/footer';

export default function ConsultingPage() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointerEvents-[none] absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-[var(--tw-backdrop-sepia)] backdrop-[var(--tw-backdrop-saturate)] backdrop-[var(--tw-backdrop-opacity)] backdrop-[var(--tw-backdrop-invert)] backdrop-[var(--tw-backdrop-hue-rotate)] backdrop-[var(--tw-backdrop-grayscale)] backdrop-[var(--tw-backdrop-contrast)] backdrop-[var(--tw-backdrop-brightness)] backdrop-[var(--tw-backdrop-blur)] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]"></div>
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
                <h1 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">
                  Consultoría y soporte
                  <br />
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>
                    Su socio tecnológico, no un proveedor más.
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              <div className="w-[100%] px-5 min-[600px]:px-10">
                <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                  <div className="col-span-12 min-[700px]:col-span-7 self-center">
                    <h2 className="col-span-12 text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-6 min-[800px]:mb-6">Transformamos la complejidad en una ventaja estratégica</h2>
                    <div className="mb-4 min-[700px]:mb-0 pr-6 min-[900px]:pr-0">
                      <p className="m-0 mt-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">Más allá de ofrecer soluciones técnicas, la consultoría de Estela se enfoca en convertirnos en su asesor estratégico de confianza. Profundizamos para entender los desafíos empresariales de fondo que la tecnología puede resolver, superando los síntomas para abordar las causas de raíz. Nuestro enfoque combina una sólida experiencia técnica con un profundo entendimiento de cómo la tecnología debe estar al servicio de los objetivos humanos y empresariales.</p>
                      <p className="m-0 mt-[calc(1rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(1rem_*_var(--tw-space-y-reverse))] text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">Ya sea que deba tomar decisiones complejas de infraestructura, planificar el crecimiento futuro, buscar optimizar los sistemas existentes o requerir una evaluación objetiva de su panorama tecnológico, brindamos una perspectiva clara y accionable. No nos limitamos a ofrecer recomendaciones; nos asociamos con usted para desarrollar e implementar estrategias que sean robustas, sostenibles y alineadas con precisión a su visión. Nuestra consultoría se basa en los mismos principios que guían todo nuestro trabajo: transparencia, profundo conocimiento y un compromiso con soluciones que entreguen valor duradero.</p>
                    </div>
                  </div>
                  <div className="col-span-12 min-[700px]:col-start-[8] min-[900px]:col-start-[9] min-[700px]:col-span-5 min-[900px]:col-span-4 self-center rounded-[var(--border-radius-xl)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)]">
                    <div className="border-b p-6 border-b-[var(--stroke-secondary-p3)]">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">Consultas de Consultoría</div>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] mb-3">Para una conversación confidencial sobre sus necesidades tecnológicas estratégicas:</div>
                      <a href="mailto:hola@este.la" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c]">
                        hola@este.la
                        <svg width="16" height="16" className="block align-middle text-[#f5b944]">
                          <use href="/assets/sprite-Dt029LRi.svg#email-16"></use>
                        </svg>
                      </a>
                    </div>
                    <div className="border-b p-6 border-b-[var(--stroke-secondary-p3)]">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">Para saber más</div>
                      <div className="space-y-2">
                        <a href="/es/method" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block">
                          Nuestro Método
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                        <a href="/es/services/infrastructure" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block">
                          Servicios de Infraestructura
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                        <a href="/es/company/work" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block">
                          Vea Nuestros Trabajos
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">La Ventaja de trabajar con nosotros</div>
                      <div className="mt-3 space-y-3">
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Asesoramiento constante.
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Soluciones alineadas con los objetivos.
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Acceso directo a nuestro equipo.
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Enfoque en el valor a largo plazo.
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
    </>
  )
}