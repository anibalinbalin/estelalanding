"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TestSpeedPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define CSS variables in component
  useEffect(() => {
    if (mounted) {
      // Color variables based on Oxide's design system
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
    <main 
      className="min-h-screen"
      style={{ 
        backgroundColor: 'rgb(8, 15, 17)',
        color: 'var(--content-default-p3)'
      }}
    >
      <div className="w-[100%] px-5 min-[600px]:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[900px]:col-span-5">
            <h2 
              className="text-balance m-0 text-[1.5625rem] min-[600px]:text-4xl min-[900px]:text-[3.125rem] font-normal text-center min-[600px]:text-left leading-8 min-[600px]:leading-[2.625rem] min-[900px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[900px]:tracking-normal"
              style={{
                color: 'var(--content-raise-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Hyperscale power efficiency
            </h2>
            <div 
              className="text-balance mt-1 min-[600px]:mt-3 text-center min-[600px]:text-left font-normal leading-6 min-[600px]:leading-8 text-base min-[600px]:text-[1.5625rem] tracking-wide min-[600px]:tracking-wide"
              style={{
                color: 'var(--content-secondary-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              On-prem for the first time, made possible with hardware and software co-design.
            </div>
            <div className="gap-6 min-[900px]:gap-10 mt-16 min-[900px]:mt-24 hidden min-[900px]:flex">
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
          <div className="flex justify-between col-span-12 min-[900px]:col-start-[7] min-[900px]:col-span-6 min-[399px]:gap-10 gap-2 max-[899px]:mt-8">
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
              <div className="flex mt-10 gap-1">
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal"
                  style={{
                    color: 'var(--content-accent-p3)',
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
                    color: 'var(--content-accent-p3)',
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
            <div className="flex justify-between flex-col h-[100%] border-l pl-4 border-[var(--stroke-default-p3)] min-[900px]:w-1/2">
              <div 
                className="font-normal leading-4 min-[600px]:leading-5 text-[.75rem] min-[600px]:text-[.875rem] tracking-wider uppercase"
                style={{
                  color: 'var(--content-secondary-p3)',
                  fontFamily: 'GT_America_Mono, monospace',
                  fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
                }}
              >
                Alt<span className="max-[599px]:hidden">ernative</span>
              </div>
              <div className="flex mt-10 gap-1">
                <pre 
                  className="m-0 font-normal text-[.825em] leading-4 tracking-normal"
                  style={{
                    fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
                    fontFeatureSettings: '"calt" 0',
                    textTransform: 'none'
                  }}
                >
                  <span className="text-[var(--content-error-disabled-p3)]">
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span className="text-[var(--content-error-p3)]">
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
                  <span className="text-[var(--content-error-disabled-p3)]">
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span className="text-[var(--content-error-p3)]">
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
                  <span className="text-[var(--content-error-disabled-p3)]">
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span className="text-[var(--content-error-p3)]">
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
                  <span className="text-[var(--content-error-disabled-p3)]">
{`⎕⎕⎕⎕
⎕⎕⎕⎕
⎕⎕⎕⎕
`}
                  </span>
                  <span className="text-[var(--content-error-p3)]">
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
    </main>
  );
}