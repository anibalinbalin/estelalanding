import React from 'react';

export const TeamSection = () => {
  return (
    <>
      {/* Contact Section */}
      <div className="my-16 min-[800px]:my-[7.5rem] px-5 min-[600px]:px-10">
        <div className="m-auto max-w-[964px] min-[1000px]:grid">
          <div className="min-[600px]:px-10 py-6 min-[600px]:py-8 gap-4 min-[600px]:gap-6 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)] p-4 bg-[var(--surface-tertiary-p3)] min-[800px]:grid min-[800px]:grid-cols-[repeat(12,minmax(0,1fr))] min-[800px]:items-center">
            <div className="mb-4 text-center min-[800px]:text-left min-[800px]:col-span-8">
              <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-secondary-p3)] text-lg min-[800px]:text-[1.5625rem] font-normal min-[800px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[800px]:leading-8 tracking-wide min-[800px]:tracking-wide">
                Ready to get started?<br />
                <span className="text-[var(--content-tertiary-p3)]">Let's discuss your project</span>
              </h2>
            </div>
            <div className="mt-6 min-[800px]:mt-0 text-center min-[800px]:text-right min-[800px]:col-span-4">
              <a href="/contact" className="px-4 text-[var(--content-accent-p3)] [text-decoration:inherit] inline-flex h-10 items-center justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative bg-[var(--surface-accent-secondary-p3)] border-[var(--stroke-accent-secondary-p3)] border after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-5 after:hidden hover:bg-[var(--surface-accent-secondary-hover-p3)]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Introduction */}
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] max-[800px]:mb-2 max-[800px]:mt-8 min-[800px]:my-8 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
            <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
              <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                Our Core Values
              </h2>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                These values guide every project decision and client interaction we make.
              </p>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                They are not aspirations, they are commitments; we expect them to be evident in every aspect of our work and upheld under all circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};