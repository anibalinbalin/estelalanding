import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const TeamSection = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme if available, otherwise fall back to theme, then default to 'dark'
  const currentTheme = mounted ? (resolvedTheme || theme || 'dark') : 'dark';

  return (
    <>

      {/* Our Principles Introduction */}
      <div className="w-[100%] px-5 min-[600px]:px-10 mt-16 min-[800px]:mt-[7.5rem]">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] max-[800px]:mb-2 max-[800px]:mt-8 min-[800px]:my-8 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="grid col-span-12 min-[600px]:col-start-[2] min-[1000px]:col-start-[4] min-[600px]:col-span-10 min-[1000px]:col-span-7">
            <div className="min-[1000px]:col-start-[2] min-[1000px]:col-span-5">
              <h2 className={`text-balance textWrapStyle-[balance] m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal ${
                currentTheme === 'light' 
                  ? 'text-[#7d8384]' 
                  : 'text-[var(--content-raise-p3)]'
              }`}>
                Our Approach to Teamwork & Expertise
              </h2>
              <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                Our core team—Peter, Aníbal, Alfonso, Nahuel, Pablo, and Diego—operates on the following shared principles:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};