"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
      className="section-spacing"
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
            <div className="gap-6 min-[900px]:gap-10 mt-16 min-[900px]:mt-24 hidden min-[900px]:flex">
              <div 
                className="border-l pl-4 max-[899px]:col-span-6"
                style={{ borderLeftColor: mounted && resolvedTheme === 'dark' ? 'var(--stroke-default-p3)' : '#e9ecef' }}
              >
                <div className="flex items-baseline" style={{ color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a' }}>
                  <div className="text-5xl min-[600px]:text-[5rem] font-light leading-none">2</div>
                  <div 
                    className="font-normal leading-8 min-[600px]:leading-[2.625rem] text-[1.5625rem] min-[600px]:text-4xl tracking-wide min-[600px]:tracking-normal"
                    style={{
                      color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >x</div>
                </div>
                <div 
                  className="mt-6 font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase max-[599px]:max-w-[6rem] max-[599px]:pr-4"
                  style={{
                    color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d',
                    fontFamily: 'GT_America_Mono, monospace',
                    fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                  }}
                >
                  Compute density
                </div>
              </div>
              <div 
                className="border-l pl-4 max-[899px]:col-span-6"
                style={{ borderLeftColor: mounted && resolvedTheme === 'dark' ? 'var(--stroke-default-p3)' : '#e9ecef' }}
              >
                <div className="flex items-baseline" style={{ color: mounted && resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#08090a' }}>
                  <div className="text-5xl min-[600px]:text-[5rem] font-light leading-none">12</div>
                  <div 
                    className="font-normal leading-8 min-[600px]:leading-[2.625rem] text-[1.5625rem] min-[600px]:text-4xl tracking-wide min-[600px]:tracking-normal"
                    style={{
                      color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d',
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                    }}
                  >x</div>
                </div>
                <div 
                  className="mt-6 font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase max-[599px]:max-w-[6rem] max-[599px]:pr-4"
                  style={{
                    color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d',
                    fontFamily: 'GT_America_Mono, monospace',
                    fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                  }}
                >
                  Cooling efficiency
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between col-span-12 min-[900px]:col-start-[7] min-[900px]:col-span-6 min-[399px]:gap-10 gap-2 max-[899px]:mt-16">
            <div className="flex justify-between flex-col h-[100%] border-l pl-4 border-[var(--stroke-default-p3)] min-[900px]:w-1/2">
              <div 
                className="font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase"
                style={{
                  color: 'var(--content-secondary-p3)',
                  fontFamily: 'GT_America_Mono, monospace',
                  fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                }}
              >
                Oxide
              </div>
              <div className="flex mt-10 gap-1 p-3 rounded" style={{ backgroundColor: '#3b301c' }}>
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal"
                  style={{
                    color: '#f5b944',
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
{`▊▊▊▊
▊▊▊▊
▊▊▊▊
▊▊▊▊
▊▊▊▊
▊▊▊▊`}
                </pre>
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal hidden min-[500px]:block"
                  style={{
                    color: '#f5b944',
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
{`▊▊▊▊
▊▊▊▊
▊▊▊▊
▊▊▊▊
▊▊▊▊
▊▊▊▊`}
                </pre>
              </div>
            </div>
            <div 
              className="flex justify-between flex-col h-[100%] border-l pl-4 min-[900px]:w-1/2"
              style={{ borderLeftColor: mounted && resolvedTheme === 'dark' ? 'var(--stroke-default-p3)' : '#e9ecef' }}
            >
              <div 
                className="font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase"
                style={{
                  color: mounted && resolvedTheme === 'dark' ? 'var(--content-secondary-p3)' : '#6c757d',
                  fontFamily: 'GT_America_Mono, monospace',
                  fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                }}
              >
                Alt<span className="max-[599px]:hidden">ernative</span>
              </div>
              <div className="flex mt-10 gap-1 p-3 rounded" style={{ backgroundColor: '#3b301c' }}>
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal"
                  style={{
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
                  <span style={{ color: '#f5b944' }}>
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span style={{ color: '#f5b944' }}>
{`▊▊▊▊
▊▊▊▊
▊▊▊▊`}
                  </span>
                </pre>
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal"
                  style={{
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
                  <span style={{ color: '#f5b944' }}>
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span style={{ color: '#f5b944' }}>
{`▊▊▊▊
▊▊▊▊
▊▊▊▊`}
                  </span>
                </pre>
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal hidden min-[500px]:block"
                  style={{
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
                  <span style={{ color: '#f5b944' }}>
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span style={{ color: '#f5b944' }}>
{`▊▊▊▊
▊▊▊▊
▊▊▊▊`}
                  </span>
                </pre>
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal hidden min-[500px]:block"
                  style={{
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
                  <span style={{ color: '#f5b944' }}>
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span style={{ color: '#f5b944' }}>
{`▊▊▊▊
▊▊▊▊
▊▊▊▊`}
                  </span>
                </pre>
              </div>
            </div>
            <div className="col-span-4 min-[900px]:hidden">
              <div className="flex flex-col gap-6 min-[900px]:gap-10 min-[900px]:mt-24">
                <div className="border-l pl-4 border-[var(--stroke-default-p3)] max-[899px]:col-span-6">
                  <div className="flex items-baseline" style={{ color: 'var(--content-raise-p3)' }}>
                    <div className="text-5xl min-[600px]:text-[5rem] font-light leading-none">2</div>
                    <div 
                      className="font-normal leading-8 min-[600px]:leading-[2.625rem] text-[1.5625rem] min-[600px]:text-4xl tracking-wide min-[600px]:tracking-normal"
                      style={{
                        color: 'var(--content-secondary-p3)',
                        fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                      }}
                    >x</div>
                  </div>
                  <div 
                    className="mt-6 font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase max-[599px]:max-w-[6rem] max-[599px]:pr-4"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'GT_America_Mono, monospace',
                      fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                    }}
                  >
                    Compute density
                  </div>
                </div>
                <div className="border-l pl-4 border-[var(--stroke-default-p3)] max-[899px]:col-span-6">
                  <div className="flex items-baseline" style={{ color: 'var(--content-raise-p3)' }}>
                    <div className="text-5xl min-[600px]:text-[5rem] font-light leading-none">12</div>
                    <div 
                      className="font-normal leading-8 min-[600px]:leading-[2.625rem] text-[1.5625rem] min-[600px]:text-4xl tracking-wide min-[600px]:tracking-normal"
                      style={{
                        color: 'var(--content-secondary-p3)',
                        fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                      }}
                    >x</div>
                  </div>
                  <div 
                    className="mt-6 font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase max-[599px]:max-w-[6rem] max-[599px]:pr-4"
                    style={{
                      color: 'var(--content-secondary-p3)',
                      fontFamily: 'GT_America_Mono, monospace',
                      fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                    }}
                  >
                    Cooling efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}