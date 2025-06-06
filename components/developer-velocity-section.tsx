"use client";

import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DeveloperVelocitySection = () => {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "Complete Technology Solutions",
      subtitle: "We design, implement, and maintain the infrastructure that powers modern organizations. One partner. Total accountability.",
      features: [
        {
          title: "Networks & Servers",
          subtitle: "VMware virtualization, UniFi networking, Synology storage, Structured cabling. From 10Gb backbone to redundant power, we build foundations that don't fail.",
          image1: "/img/ascii-art.svg",
          image2: "/img/ascii-art.svg",
          image1Width: 620,
          image1Height: 600,
          image2Width: 620,
          image2Height: 600,
          image2Style: "bottom-0 left-0 w-[77.3%]"
        },
        {
          title: "Complete Protection",
          subtitle: "SentinelOne XDR, UniFi Protect cameras, Backup & recovery, Compliance ready. Multi-layered defense that protects what matters most to your business.",
          image1: "/img/ascii-art_2.svg",
          image2: "/img/ascii-art_2.svg",
          image1Width: 620,
          image1Height: 600,
          image2Width: 620,
          image2Height: 600,
          image2Style: "bottom-0 w-full"
        },
        {
          title: "Custom Development",
          subtitle: "Next.js applications, Process automation, AI integration, Digital transformation. Modern solutions that transform how you work, not just digitize old problems.",
          image1: "/img/ascii-art_3.svg",
          image2: "/img/ascii-art_3.svg",
          image1Width: 620,
          image1Height: 600,
          image2Width: 620,
          image2Height: 600,
          image2Style: "right-0 top-0 w-[66.76%]"
        }
      ]
    },
    es: {
      title: "Soluciones Tecnológicas Completas",
      subtitle: "Diseñamos, implementamos y mantenemos la infraestructura que impulsa las organizaciones modernas. Un socio. Responsabilidad total.",
      features: [
        {
          title: "Redes y Servidores",
          subtitle: "Virtualización VMware, redes UniFi, almacenamiento Synology, cableado estructurado. Desde backbone de 10Gb hasta energía redundante, construimos fundamentos que no fallan.",
          image1: "/img/ascii-art.svg",
          image2: "/img/ascii-art.svg",
          image1Width: 620,
          image1Height: 600,
          image2Width: 620,
          image2Height: 600,
          image2Style: "bottom-0 left-0 w-[77.3%]"
        },
        {
          title: "Protección Completa",
          subtitle: "SentinelOne XDR, cámaras UniFi Protect, respaldo y recuperación, listo para cumplimiento. Defensa multicapa que protege lo que más importa a tu negocio.",
          image1: "/img/ascii-art_2.svg",
          image2: "/img/ascii-art_2.svg",
          image1Width: 620,
          image1Height: 600,
          image2Width: 620,
          image2Height: 600,
          image2Style: "bottom-0 w-full"
        },
        {
          title: "Desarrollo Personalizado",
          subtitle: "Aplicaciones Next.js, automatización de procesos, integración de IA, transformación digital. Soluciones modernas que transforman cómo trabajas, no solo digitalizan problemas antiguos.",
          image1: "/img/ascii-art_3.svg",
          image2: "/img/ascii-art_3.svg",
          image1Width: 620,
          image1Height: 600,
          image2Width: 620,
          image2Height: 600,
          image2Style: "right-0 top-0 w-[66.76%]"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-5 sm:px-10">
        {/* Unicorn Studio Effect */}
        <div className="mb-12 lg:mb-20 flex justify-center">
          <div 
            data-us-project="bJ8ClYm9Acq6hsxeaXbl"
            data-us-scale="1"
            data-us-dpi="1.5"
            data-us-fps="30"
            className="w-full max-w-6xl"
            style={{ 
              width: '1440px',
              height: '900px',
              maxWidth: '100%',
              aspectRatio: '1440/900'
            }}
          />
        </div>
        
          <h2 
            className="text-balance m-0 mb-4 sm:mb-6 text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl font-normal"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              lineHeight: '1.2',
              letterSpacing: 'normal',
              color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
            }}
          >
            {t.title}
          </h2>
          <p 
            className="text-balance m-0 mb-6 sm:mb-10 lg:mb-14 text-center sm:text-left text-lg sm:text-xl lg:text-2xl font-normal text-muted-foreground max-w-4xl"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              lineHeight: '1.4'
            }}
          >
            {t.subtitle}
          </p>
        
        <div className="border-t border-b border-border">
          <div className="flex lg:grid lg:grid-cols-3 flex-col mx-auto">
            {t.features.map((feature, index) => (
              <div 
                key={index}
                className={`
                  flex flex-col items-center py-10 
                  ${index === 0 ? 'lg:px-4' : index === 1 ? 'lg:px-4 lg:border-l lg:border-r' : 'lg:px-4'} 
                  ${index < t.features.length - 1 ? 'border-b lg:border-b-0' : ''} 
                  border-border lg:justify-between
                  max-lg:gap-10 max-lg:p-12 max-lg:border-l max-lg:border-r max-lg:grid max-lg:grid-cols-12
                `}
              >
                <div className="w-full relative max-w-[400px] lg:mb-16 col-span-6 lg:col-span-6 col-start-1">
                  <Image
                    src={feature.image1}
                    width={feature.image1Width}
                    height={feature.image1Height}
                    alt=""
                    className="w-full max-w-full h-auto block"
                  />
                </div>
                
                <h3 
                  className="text-balance m-0 text-lg font-normal leading-7 tracking-wide text-muted-foreground lg:col-span-6 col-start-8 col-span-5 max-sm:w-full"
                  style={{
                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif'
                  }}
                >
                  <span className="text-foreground">{feature.title}</span> {feature.subtitle}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};