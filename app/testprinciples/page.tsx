"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TestPrinciplesPage() {
  const { } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define CSS variables in component
  useEffect(() => {
    if (mounted) {
      // ASCII font size variables
      document.documentElement.style.setProperty('--ascii-xs-font-size', '7.5px');
      document.documentElement.style.setProperty('--tw-aspect-h', '11');
      document.documentElement.style.setProperty('--tw-aspect-w', '11');
      
      // Color variables based on Oxide's dark theme
      document.documentElement.style.setProperty('--content-raise-p3', 'color(display-p3 .8431 .8471 .851)');
      document.documentElement.style.setProperty('--content-secondary-p3', 'color(display-p3 .6314 .6431 .6471)');
      document.documentElement.style.setProperty('--stroke-default-p3', 'color(display-p3 .1765 .2 .2078)');
      document.documentElement.style.setProperty('--border-radius-lg', '.375rem');
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <main 
      className="min-h-screen"
      style={{ 
        backgroundColor: 'rgb(8, 15, 17)',
        color: 'var(--content-default-p3)',
        padding: '2.5rem 1.25rem'
      }}
    >
      <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        {/* Header Section */}
        <div className="grid items-start col-span-12 min-[1000px]:col-span-6 mb-4 min-[1000px]:mb-0 min-[1000px]:grid-cols-[repeat(6,minmax(0,1fr))]">
          <div className="flex flex-col col-span-5 text-center min-[1000px]:text-left min-[1000px]:mt-8">
            <h2 
              className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              At Estela, our principles are not corporate decorations
            </h2>
            <div 
              className="text-balance text-[var(--content-secondary-p3)] mt-1 min-[600px]:mt-3 font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              they are the soul of why we&apos;ve chosen depth over scale, why our clients stay with us, and why we remain personally invested after 13 years.
            </div>
          </div>
        </div>

        {/* Left Feature - Instant IT transformation */}
        <div className="gap-6 mb-6 col-span-6 min-[1000px]:col-span-3">
          <div>
            <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]">
              <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0">
                  <pre 
                    className="m-0 font-normal absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
                    style={{
                      fontFamily: 'GT_America_Mono, monospace',
                      fontFeatureSettings: '"ss06" on',
                      fontSize: 'var(--ascii-xs-font-size)',
                      fontStretch: 'normal',
                      lineHeight: 'initial',
                      letterSpacing: 'initial'
                    }}
                  >
                    <span className="block">
                      <span> </span>
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>┌───┐</span>
                      <span> </span>
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>┌───┐</span>
                      <span> </span>
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>┌───┐</span>
                      <span> </span>
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>┌───┐</span>
                    </span>
                    <span className="block">
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>┌┴──┐│┌┴──┐│┌┴──┐│┌┴──┐│</span>
                    </span>
                    <span className="block">
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>│</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>│││</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>│││⎕⎕⎕│││⎕⎕⎕││</span>
                    </span>
                    <span className="block">
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>│</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>│││</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>│││⎕⎕⎕│││⎕⎕⎕││</span>
                    </span>
                    <span className="block">
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>│───│││───│││───│││───││</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>│───│││───│││───│││───││</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>│</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>│││</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>│││⎕⎕⎕│││⎕⎕⎕││</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>│</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>├┘│</span>
                      <span style={{color:'#48d597'}}>▊▊▊</span>
                      <span style={{color:'#236A4C'}}>├┘│⎕⎕⎕├┘│⎕⎕⎕├┘</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>└───┘</span>
                      <span> </span>
                      <span style={{color:'#236A4C'}}>└───┘</span>
                      <span> </span>
                      <span style={{color:'#236A4C'}}>└───┘</span>
                      <span> </span>
                      <span style={{color:'#236A4C'}}>└───┘</span>
                      <span> </span>
                    </span>
                    <span className="block">
                      <span>              </span>
                      <span style={{color:'#48D597'}}>─</span>
                      <span>         </span>
                    </span>
                  </pre>
                </div>
              </div>
            </div>
            <h3 
              className="text-xl font-semibold mb-2 text-[var(--content-raise-p3)]"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Truth Over Comfort
            </h3>
            <p 
              className="text-base text-[var(--content-secondary-p3)]"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              We tell clients when they don&apos;t need new hardware. We admit when we&apos;re not the right fit. We lead with transparency in every conversation.

              This approach creates relationships built on trust.
            </p>
          </div>
        </div>

        {/* Right Feature - No more license management */}
        <div className="col-span-6 min-[1000px]:col-span-3">
          <div>
            <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]">
              <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0">
                  <pre 
                    className="m-0 font-normal absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
                    style={{
                      fontFamily: 'GT_America_Mono, monospace',
                      fontFeatureSettings: '"ss06" on',
                      fontSize: 'var(--ascii-xs-font-size)',
                      fontStretch: 'normal',
                      lineHeight: 'initial',
                      letterSpacing: 'initial'
                    }}
                  >
                    <span className="block">
                      <span style={{color:'#236A4C'}}>550E800-</span>
                      <span style={{color:'#48d597'}}>OXIDE</span>
                      <span style={{color:'#236A4C'}}>-41D4-A7</span>
                    </span>
                    <span className="block">
                      <span style={{color: 'color(display-p3 0.14 0.42 0.30 / 1.00)'}}>16-446655440000-A0899</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>594-7F0C-468B-</span>
                      <span style={{color:'#48d597'}}>OXIDE</span>
                      <span style={{color:'#236A4C'}}>-D</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>DAED058768-7D2A877C-F</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>13B-495D-6E7-8FCD9066</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>1AFB-</span>
                      <span style={{color:'#48d597'}}>OXIDE</span>
                      <span style={{color:'#236A4C'}}>-3CA279074-</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>550E8400-E29B-41D4-A7</span>
                    </span>
                    <span className="block">
                      <span style={{color:'#236A4C'}}>16-446655440000-</span>
                      <span style={{color:'#48d597'}}>OXIDE</span>
                    </span>
                    <span className="block">
                      <span>                     </span>
                    </span>
                    <span className="block">
                      <span>  </span>
                      <span style={{color:'#236A4C'}}>[</span>
                      <span style={{color:'#48d597'}}>CANCEL</span>
                      <span style={{color:'#236A4C'}}>]</span>
                      <span>  </span>
                      <span style={{color:'#236A4C'}}>[</span>
                      <span style={{color:'#48d597'}}>RENEW</span>
                      <span style={{color:'#236A4C'}}>]</span>
                      <span>  </span>
                    </span>
                  </pre>
                </div>
              </div>
            </div>
            <h3 
              className="text-xl font-semibold mb-2 text-[var(--content-raise-p3)]"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              People Over Profit
            </h3>
            <p 
              className="text-base text-[var(--content-secondary-p3)]"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              We choose clients who share our values. We respond to emergencies as part of our commitment, not as an opportunity. Because relationships outlast transactions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}