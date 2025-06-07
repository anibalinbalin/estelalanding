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
            <div className="relative overflow-hidden border bg-[var(--surface-tertiary-p3)] border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
              <div className="w-full h-full flex items-center justify-center p-6">
                <img 
                  src="/img/ascii-art_3.svg" 
                  alt="Custom Development"
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
          <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
            <div className="relative flex items-center justify-between gap-4 border p-4 bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-lg)] max-[399px]:flex-col">
              <div>
                <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal min-[500px]:font-normal min-[900px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[500px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal max-[399px]:text-center">
                  Every business has unique challenges.
                  <br />
                  <span className="text-[var(--content-secondary-p3)]">Let&apos;s build solutions that fit yours perfectly.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <a 
                  href="/contact" 
                  className="px-3 items-center text-[var(--content-accent-p3)] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase shadow-[var(--elevation-1)] relative bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]"
                >
                  Start a Project
                </a>
                <a 
                  href="/portfolio" 
                  className="px-3 items-center text-[var(--content-secondary-p3)] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase shadow-[var(--elevation-1)] relative hover:bg-[var(--surface-hover-p3)]"
                >
                  See Our Portfolio
                </a>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-[var(--content-secondary-p3)]">
                Let&apos;s talk: <a href="mailto:hola@este.la" className="text-[var(--content-accent-p3)] hover:text-[var(--content-accent-secondary-p3)]">hola@este.la</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}