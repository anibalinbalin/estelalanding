import React from 'react';
import { Link } from 'next-view-transitions';

export const WorkFinalSection = () => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-6">
          <div className="text-center">
            <p className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-4">
              Ready to start your transformation?
            </p>
            <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide mb-8">
              Every great project starts with a conversation.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-[var(--theme-accent-300)] text-[var(--content-accent-p3)] rounded-md font-medium text-sm hover:bg-[var(--theme-accent-400)] transition-colors"
              >
                Start Your Project
              </Link>
              <Link 
                href="/services"
                className="px-6 py-3 bg-transparent text-[var(--content-secondary-p3)] border border-[var(--content-secondary-p3)] rounded-md font-medium text-sm hover:bg-[var(--content-secondary-p3)] hover:text-[var(--surface-default-p3)] transition-colors"
              >
                View Our Services
              </Link>
            </div>
            
            <div className="mt-8">
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide italic">
                Every project is a partnership.<br />
                Every outcome is measured.<br />
                Every solution is built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};