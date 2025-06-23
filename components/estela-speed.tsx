"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import FibonacciASCIISpiral from "@/components/ui/fibonacci-ascii-spiral";

export function EstelaSpeed() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty('--content-raise-p3', 'color(display-p3 .8431 .8471 .851)');
      document.documentElement.style.setProperty('--content-secondary-p3', 'color(display-p3 .6314 .6431 .6471)');
      document.documentElement.style.setProperty('--stroke-default-p3', 'color(display-p3 .1765 .2 .2078)');
      document.documentElement.style.setProperty('--content-accent-p3', 'color(display-p3 .2824 .8353 .5922)');
      document.documentElement.style.setProperty('--content-error-p3', 'color(display-p3 .9843 .4314 .5333)');
      document.documentElement.style.setProperty('--content-error-disabled-p3', 'color(display-p3 .5843 .2706 .3255)');
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section 
      className="mt-28 sm:mt-[11.25rem] mb-4"
      style={{ 
        backgroundColor: mounted && resolvedTheme === 'dark' ? 'rgb(8, 15, 17)' : '#ffffff',
        color: mounted && resolvedTheme === 'dark' ? 'var(--content-default-p3)' : '#08090a'
      }}
    >
      <div className="container mx-auto px-5 sm:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[900px]:col-span-5">
            <h2 
              className="text-balance m-0 text-[1.5625rem] min-[600px]:text-4xl min-[900px]:text-[3.125rem] font-normal text-center min-[600px]:text-left leading-8 min-[600px]:leading-[2.625rem] min-[900px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[900px]:tracking-normal"
              style={{
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Craft Over Speed
            </h2>
            <div 
              className="text-balance mb-6 mt-1 max-w-[900px] min-[600px]:mb-10 min-[600px]:mt-3 min-[1000px]:mb-14 text-center min-[600px]:text-left font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
              style={{
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              We could work faster. We choose to work better. Every cable is labeled. Every setting documented. Every solution built to outlast us.

              Some call it obsessive. Our clients call it essential.
            </div>
          </div>
          <div className="flex justify-between col-span-12 min-[900px]:col-start-[7] min-[900px]:col-span-6 min-[399px]:gap-10 gap-2 max-[899px]:mt-16">
            <FibonacciASCIISpiral />
          </div>
        </div>
      </div>
    </section>
  );
}