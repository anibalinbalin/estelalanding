import DevelopmentAsciiArt from '@/components/ui/development-ascii-art';
import Link from 'next/link';

export default function DevelopmentPage() {
  return (
    <main className="mt-10 min-[1100px]:mt-24">
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto flex max-w-[1200px] flex-col items-center">
          <div className="mb-4 min-[1000px]:mb-8 text-center">
            <span className="text-[var(--content-tertiary-p3)] text-sm tracking-wider uppercase font-[GT_America_Mono,monospace]">
              Estela / Services / Development
            </span>
          </div>
          <h1 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-4xl min-[800px]:text-4xl min-[1000px]:text-[3.25rem] font-normal min-[800px]:font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[2.625rem] min-[800px]:leading-[2.625rem] min-[1000px]:leading-[3.625rem] tracking-normal min-[800px]:tracking-normal min-[1000px]:tracking-normal">
            Development & AI
          </h1>
          <p className="text-center text-[var(--content-secondary-p3)] text-lg mt-4 max-w-2xl">
            Custom solutions for unique challenges.
          </p>
          <p className="text-center text-[var(--content-tertiary-p3)] text-base mt-2">
            We build the tools your business needs to thrive.
          </p>
        </div>
      </div>
      <div className="mb-16">
        <div className="my-6 min-[800px]:my-10">
          <div className="h-[1px] w-[100%] border-b border-[var(--stroke-default-p3)]"></div>
        </div>
      </div>
      
      {/* Web Application Development Section */}
      <div>
        <div className="w-[100%] px-5 min-[600px]:px-10">
          <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
            <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-span-6 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
              <h2 className="mb-4 text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                Custom Development
              </h2>
              <div>
                <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                  Next.js applications, Process automation, AI integration, Digital transformation. Modern solutions that transform how you work, not just digitize old problems.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden border border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg" style={{ backgroundColor: '#3b301c', padding: '12px' }}>
              <div className="w-full h-full flex items-center justify-center">
                <DevelopmentAsciiArt isVisible={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full px-5 min-[600px]:px-10 my-20">
          <div className="m-auto max-w-[1200px]">
            <div className="h-[1px] w-full border-b border-border"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="w-full px-5 min-[600px]:px-10 mb-20">
          <div className="m-auto max-w-[1200px]">
            <div className="text-center">
              <h2 className="text-3xl min-[1000px]:text-4xl font-medium mb-8 text-foreground">
                Ready to transform your business with custom development?
              </h2>
              
              <div className="flex flex-col min-[600px]:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact" 
                  className="oxide-nav-button oxide-nav-button-primary"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}