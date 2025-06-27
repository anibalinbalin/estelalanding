"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AnimatedServerArt from "@/components/ui/animated-server-art";
import AnimatedUUIDEstelaArt from "@/components/ui/animated-uuid-estela-art";

export function EstelaPrinciples() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.style.setProperty('--ascii-xs-font-size', '8.5px');
      document.documentElement.style.setProperty('--tw-aspect-h', '11');
      document.documentElement.style.setProperty('--tw-aspect-w', '13');
      
      document.documentElement.style.setProperty('--content-raise-p3', 'color(display-p3 .8431 .8471 .851)');
      document.documentElement.style.setProperty('--content-secondary-p3', 'color(display-p3 .6314 .6431 .6471)');
      document.documentElement.style.setProperty('--stroke-default-p3', 'color(display-p3 .1765 .2 .2078)');
      document.documentElement.style.setProperty('--border-radius-lg', '.375rem');
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
        <div className="grid items-start col-span-12 min-[1000px]:col-span-6 mb-4 min-[1000px]:mb-0 min-[1000px]:grid-cols-[repeat(6,minmax(0,1fr))]">
          <div className="flex flex-col col-span-5 text-center min-[1000px]:text-left min-[1000px]:mt-8">
            <h2 
              className="text-balance m-0 text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a'
              }}
            >
              At Estela, our principles are not corporate decorations
            </h2>
            <div 
              className="text-balance mb-6 mt-1 max-w-[900px] min-[600px]:mb-10 min-[600px]:mt-3 min-[1000px]:mb-14 font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
              }}
            >
              they are the soul of why we&apos;ve chosen depth over scale, why our clients stay with us, and why we remain personally invested after 13 years.
            </div>
          </div>
        </div>

        <div className="gap-6 mb-6 col-span-6 min-[1000px]:col-span-3">
          <div>
            <div 
              className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border p-3"
              style={{ 
                backgroundColor: '#3b301c'
              }}
            >
              <AnimatedServerArt />
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a'
              }}
            >
              Truth Over Comfort
            </h3>
            <p 
              className="text-base"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
              }}
            >
              We tell clients when they don&apos;t need new hardware. We admit when we&apos;re not the right fit. We lead with transparency in every conversation.

              This approach creates relationships built on trust.
            </p>
          </div>
        </div>

        <div className="col-span-6 min-[1000px]:col-span-3">
          <div>
            <div 
              className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border p-3"
              style={{ 
                backgroundColor: '#3b301c'
              }}
            >
              <AnimatedUUIDEstelaArt />
            </div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a'
              }}
            >
              Clients First, Always
            </h3>
            <p 
              className="text-base"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d'
              }}
            >
              We choose clients who share our values. We respond to emergencies as part of our commitment, not as an opportunity. Because relationships outlast transactions.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}