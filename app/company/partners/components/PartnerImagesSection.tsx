import React from 'react';

interface PartnerImagesSectionProps {
  partnerId: string;
  images: {
    main: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    side1: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    side2: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export const PartnerImagesSection = ({ partnerId, images }: PartnerImagesSectionProps) => {
  return (
    <div className="w-[100%] px-5 min-[600px]:px-10">
      <div className="m-auto mt-14 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] mb-12 min-[800px]:mb-[7.5rem] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
        <div className="col-span-7">
          <div className="w-[100%] h-[100%] relative flex items-center justify-center">
            <img 
              src={images.main.src}
              width={images.main.width}
              height={images.main.height}
              className="w-[100%] max-w-[100%] h-auto block align-middle object-cover rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]" 
              alt={images.main.alt}
            />
            <noscript>
              <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                <img 
                  className="!h-full w-full rounded object-cover 600:rounded-lg h-auto" 
                  src={images.main.src}
                  width={images.main.width}
                  height={images.main.height}
                  alt={images.main.alt}
                />
              </div>
            </noscript>
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-between">
          <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)] overflow-hidden rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]">
            <div className="flex w-[100%] !absolute h-[100%] top-0 right-0 bottom-0 left-0 items-center justify-center">
              <img 
                src={images.side1.src}
                width={images.side1.width}
                height={images.side1.height}
                className="h-auto w-[100%] max-w-[100%] block align-middle object-cover" 
                alt={images.side1.alt}
              />
              <noscript>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <img 
                    className="h-full w-full object-cover h-auto" 
                    src={images.side1.src}
                    width={images.side1.width}
                    height={images.side1.height}
                    alt={images.side1.alt}
                  />
                </div>
              </noscript>
            </div>
          </div>
          <div className="mt-4 overflow-hidden rounded-[var(--border-radius)] min-[600px]:rounded-[var(--border-radius-lg)]">
            <div className="flex w-[100%] relative h-[100%] items-center justify-center">
              <img 
                src={images.side2.src}
                width={images.side2.width}
                height={images.side2.height}
                className="h-auto w-[100%] max-w-[100%] block align-middle object-cover" 
                alt={images.side2.alt}
              />
              <noscript>
                <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                  <img 
                    className="h-full w-full object-cover h-auto" 
                    src={images.side2.src}
                    width={images.side2.width}
                    height={images.side2.height}
                    alt={images.side2.alt}
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