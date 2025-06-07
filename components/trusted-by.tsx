"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "next-themes";
import Image from "next/image";

export const TrustedBy = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only show theme-dependent content after mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Company logos list
  const logos = [
    { name: "Aparato", file: "aparato" },
    { name: "Avisa", file: "avisa" },
    { name: "Box", file: "box" },
    { name: "CCE", file: "cce" },
    { name: "Cimarron", file: "cimarron" },
    { name: "Diagnostico", file: "diagnostico" },
    { name: "Dominio", file: "dominio" },
    { name: "Don Obdulio", file: "donobldulio" },
    { name: "DSR360", file: "dsr360" },
    { name: "Fullcat", file: "fullcat" },
    { name: "La Mayor", file: "lamayor" },
    { name: "Mueca", file: "mueca" },
    { name: "Olivera", file: "olivera" },
    { name: "Orben", file: "orben" },
    { name: "Oriental", file: "oriental" },
    { name: "Plataforma", file: "plataforma" },
    { name: "Producers", file: "producrers" },
    { name: "Sidley Jones", file: "sidleyjones" },
    { name: "Sodre", file: "sodre" },
    { name: "Tafirel", file: "tafirel" },
    { name: "U Films", file: "ufilms" },
    { name: "Verne", file: "verne" },
  ];

  const content = {
    en: {
      title: "Trusted by market leaders"
    },
    es: {
      title: "Confianza de líderes del mercado"
    }
  };

  const t = content[language];

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api, current]);

  return (
    <div className="w-full section-spacing">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-5 gap-10 items-center">
          <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
            {t.title}
          </h3>
          <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-transparent to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full pointer-events-none"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {logos.map((logo, index) => {
                  // All logos are PNG files now
                  const extension = "png";
                  
                  return (
                    <CarouselItem
                      className="basis-1/4 lg:basis-1/6"
                      key={index}
                    >
                      <div className="flex rounded-md items-center justify-center p-6">
                        <div className="relative w-30 h-30 lg:w-35 lg:h-35">
                          <Image
                            src={`/company_logos/logos/black/${logo.file}.${extension}`}
                            alt={logo.name}
                            fill
                            className={`object-contain ${mounted && resolvedTheme === 'dark' ? 'invert' : ''} opacity-60 hover:opacity-100 transition-opacity`}
                            sizes="(max-width: 640px) 120px, 140px"
                            onError={() => {
                              console.error(`Failed to load logo: ${logo.file}.${extension}`);
                            }}
                            onLoad={() => {
                              console.log(`Successfully loaded: ${logo.file}.${extension}`);
                            }}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};