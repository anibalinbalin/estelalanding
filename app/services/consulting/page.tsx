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
                  Consulting & Support
                  <br />
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>
                    Your technology partner, not just another vendor.
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              <div className="w-[100%] px-5 min-[600px]:px-10">
                <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                  <div className="col-span-12 min-[700px]:col-span-7 self-center">
                    <h2 className="col-span-12 text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-6 min-[800px]:mb-6">Translating Complexity into Strategic Advantage</h2>
                    <div className="mb-4 min-[700px]:mb-0 pr-6 min-[900px]:pr-0">
                      <p className="m-0 mt-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">Beyond providing technical fixes, Estela's consulting practice focuses on becoming your trusted strategic advisor. We delve deep to understand the core business challenges that technology can solve, moving beyond symptoms to address root causes. Our approach combines seasoned technical expertise with a profound understanding of how technology should serve human and business objectives.</p>
                      <p className="m-0 mt-[calc(1rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(1rem_*_var(--tw-space-y-reverse))] text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">Whether you're navigating complex infrastructure decisions, planning for future growth, seeking to optimize existing systems, or requiring an objective assessment of your technology landscape, we provide clear, actionable insights. We don't just offer recommendations; we partner with you to develop and implement strategies that are robust, sustainable, and precisely aligned with your vision. Our consulting is built on the same principles that guide all our work: transparency, deep expertise, and a commitment to solutions that deliver lasting value.</p>
                    </div>
                  </div>
                  <div className="col-span-12 min-[700px]:col-start-[8] min-[900px]:col-start-[9] min-[700px]:col-span-5 min-[900px]:col-span-4 self-center rounded-[var(--border-radius-xl)] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)]">
                    <div className="border-b p-6 border-b-[var(--stroke-secondary-p3)]">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">Consulting Enquiries</div>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] mb-3">For a confidential discussion about your strategic technology needs:</div>
                      <a href="mailto:hola@este.la" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c]">
                        hola@este.la
                        <svg width="16" height="16" className="block align-middle text-[#f5b944]">
                          <use href="/assets/sprite-Dt029LRi.svg#email-16"></use>
                        </svg>
                      </a>
                    </div>
                    <div className="border-b p-6 border-b-[var(--stroke-secondary-p3)]">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">Explore Further</div>
                      <div className="space-y-2">
                        <a href="/method" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block">
                          Our Method
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                        <a href="/services/infrastructure" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block">
                          Infrastructure Services
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                        <a href="/company/work" className="text-[#ecbb5a] dark:text-[#ecbb5a] [text-decoration:inherit] flex items-center gap-1 hover:text-[#08178c] block">
                          View Our Work
                          <svg width="12" height="12" className="block align-middle text-[#f5b944]">
                            <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-medium leading-6 text-base tracking-wide text-[var(--content-raise-p3)]">The Estela Advantage</div>
                      <div className="mt-3 space-y-3">
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Objective, Expert Advice
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Solutions Aligned with Your Goals
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Direct Access to Senior Expertise
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Focus on Long-Term Value
                        </div>
                        <div className="text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide">
                          • Principled and Transparent Approach
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