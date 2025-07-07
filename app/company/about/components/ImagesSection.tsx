import React from 'react';

export const ImagesSection = () => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto mt-14 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] mb-12 min-[800px]:mb-[7.5rem] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-7">
          <div className="w-[100%] h-[100%] relative flex items-center justify-center">
            <img 
              src="/img/company_about/about_1_dither.jpeg" 
              width="612" 
              height="532" 
              className="w-[100%] max-w-[100%] h-auto block align-middle object-cover rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]" 
              alt="an individual looking at a terminal window on a laptop, sitting by a pcb and a soldering iron" 
            />
            <noscript>
              <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                <img 
                  className="!h-full w-full rounded object-cover 600:rounded-lg h-auto" 
                  src="/img/company_about/about_1_dither.jpeg" 
                  width="612" 
                  height="532" 
                  alt="Individual looking at terminal window on a laptop, sat by a PCB and a soldering iron" 
                />
              </div>
            </noscript>
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-between">
          <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)] overflow-hidden rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]">
            <div className="flex w-[100%] !absolute h-[100%] top-0 right-0 bottom-0 left-0 items-center justify-center">
              <img 
                src="/img/company_about/about_2_dither.jpeg" 
                width="432" 
                height="288" 
                className="h-auto w-[100%] max-w-[100%] block align-middle object-cover" 
                alt="an individual looking at a github pull request on a laptop" 
              />
              <noscript>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <img 
                    className="h-full w-full object-cover h-auto" 
                    src="/img/company_about/about_2_dither.jpeg" 
                    width="432" 
                    height="288" 
                    alt="Individual looking a GitHub pull request on a laptop" 
                  />
                </div>
              </noscript>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]">
            <div className="flex w-[100%] relative h-[100%] items-center justify-center">
              <img 
                src="/img/company_about/about_3_dither.jpeg" 
                width="432" 
                height="227" 
                className="h-auto w-[100%] max-w-[100%] block align-middle object-cover" 
                alt="a workstation with a pcb, multimeter, and other tools" 
              />
              <noscript>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <img 
                    className="h-full w-full object-cover h-auto" 
                    src="/img/company_about/about_3_dither.jpeg" 
                    width="432" 
                    height="227" 
                    alt="Workstation with a PCB, multimeter and other tools" 
                  />
                </div>
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};