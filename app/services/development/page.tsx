import DevelopmentAsciiArt from '@/components/ui/development-ascii-art';
import { Link } from 'next-view-transitions';
import { Footer } from '@/components/footer';

export default function DevelopmentPage() {
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
                  Development & AI
                  <br />
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>
                    Practical AI and automation that drives real business value.
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              {/* Web Application Development Section */}
              <div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                    <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-span-6 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
                      <h2 className="mb-6 min-[600px]:mb-4 text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                        Custom Development
                      </h2>
                      <div>
                        <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                          Next.js applications, Process automation, AI integration, Digital transformation. Modern solutions that transform how you work, not just digitize old problems.
                        </p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden border border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg bg-gradient-to-b from-muted/50 to-muted p-3">
                      <div className="w-full h-full flex items-center justify-center">
                        <DevelopmentAsciiArt isVisible={true} />
                      </div>
                    </div>
                  </div>
                </div>



                {/* CTA Section */}
                <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
                  <div className="w-[100%] px-5 min-[600px]:px-10">
                    <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
                      <div className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 flex justify-between">
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                        <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
                          <div className="absolute w-[100%] bottom-0 h-24 bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                          <div className="absolute w-[100%] top-0 h-24 [transform:translate(var(--tw-translate-x)_var(--tw-translate-y)_rotate(var(--tw-rotate)_skew(var(--tw-skew-x)_skewY(var(--tw-skew-y)_scaleX(var(--tw-scale-x)_scaleY(var(--tw-scale-y)] bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                        </div>
                      </div>
                      <div className="relative flex items-center justify-between gap-4 border p-4 bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-lg)]">
                        <div>
                          <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal min-[500px]:font-normal min-[900px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[500px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal">
                            Development That Scales With You
                          </h2>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                          <a href="/contact" className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]">
                            CONTACT
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
  );
}