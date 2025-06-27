import React from 'react';
import { ValuesGrid } from './ValuesGrid';

export const FinalSection = () => {
  return (
    <>
      {/* Second Image Section */}
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] my-16 min-[800px]:my-[7.5rem] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-7">
            <div className="w-[100%] h-[100%] relative flex items-center justify-center">
              <img 
                src="https://oxide-computer.imgix.net/office/oxide-principles-4.jpg?w=612&amp;dpr=2&amp;fm=webp" 
                width="612" 
                height="540" 
                className="w-[100%] max-w-[100%] h-auto block align-middle object-cover rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]" 
                alt="two people looking at a computer screen, one is holding a cable" 
              />
              <noscript>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <img 
                    className="!h-full w-full rounded object-cover 600:rounded-lg h-auto" 
                    src="https://oxide-computer.imgix.net/office/oxide-principles-4.jpg?w=612&amp;dpr=2&amp;fm=webp" 
                    width="612" 
                    height="540" 
                    alt="Two people looking at a computer screen, one is holding a cable" 
                  />
                </div>
              </noscript>
            </div>
          </div>
          <div className="col-span-5">
            <div className="w-[100%] h-[100%] relative flex items-center justify-center">
              <img 
                src="https://oxide-computer.imgix.net/office/oxide-principles-5.jpg?w=432&amp;dpr=2&amp;fm=webp" 
                width="432" 
                height="540" 
                className="w-[100%] max-w-[100%] h-auto block align-middle object-cover rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]" 
                alt="one person looking into a microscope, examining a pcb" 
              />
              <noscript>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <img 
                    className="!h-full w-full rounded object-cover 600:rounded-lg h-auto" 
                    src="https://oxide-computer.imgix.net/office/oxide-principles-5.jpg?w=432&amp;dpr=2&amp;fm=webp" 
                    width="432" 
                    height="540" 
                    alt="One person looking into a microscope, examining a PCB" 
                  />
                </div>
              </noscript>
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
                Our Approach
              </h2>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                Our methodology is built on proven principles that ensure consistent, reliable results for every client engagement.
              </p>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                These are not aspirational methods, but tested practices; we expect them to be evident in every project phase and maintained throughout our engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Grid */}
      <ValuesGrid />
    </>
  );
};