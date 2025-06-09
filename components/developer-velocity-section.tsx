"use client";

import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { BerlinAsciiArt } from "@/components/ui/berlin-ascii-art";
import { AsciiWaveAnimation } from "@/components/ui/ascii-wave-animation";
import { DevelopmentAsciiArt } from "@/components/ui/development-ascii-art";

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
          image2Style: "bottom-0 left-0 w-[77.3%]",
          ctaText: "Explore Infrastructure",
          ctaLink: "/services/infrastructure"
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
          image2Style: "bottom-0 w-full",
          ctaText: "Learn About Security",
          ctaLink: "/services/security"
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
          image2Style: "right-0 top-0 w-[66.76%]",
          ctaText: "View Development",
          ctaLink: "/services/development"
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
          image2Style: "bottom-0 left-0 w-[77.3%]",
          ctaText: "Explorar Infraestructura",
          ctaLink: "/services/infrastructure"
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
          image2Style: "bottom-0 w-full",
          ctaText: "Conocer Seguridad",
          ctaLink: "/services/security"
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
          image2Style: "right-0 top-0 w-[66.76%]",
          ctaText: "Ver Desarrollo",
          ctaLink: "/services/development"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="w-full mt-28 sm:mt-[11.25rem] mb-4">
      <div className="container mx-auto px-5 sm:px-10">
        
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
            className="text-balance m-0 mb-6 mt-1 max-w-[900px] min-[600px]:mb-10 min-[600px]:mt-3 min-[1000px]:mb-14 text-center sm:text-left text-lg sm:text-xl lg:text-2xl font-normal text-muted-foreground"
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
                <div className="w-full relative max-w-[400px] lg:mb-20 col-span-6 lg:col-span-6 col-start-1">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#3b301c' }}>
                    {index === 0 ? (
                      <div 
                        className="w-full rounded overflow-hidden"
                        style={{ 
                          aspectRatio: '620/600',
                          height: 'auto'
                        }}
                      >
                        <BerlinAsciiArt isVisible={true} />
                      </div>
                    ) : index === 1 ? (
                      <div 
                        className="w-full rounded overflow-hidden"
                        style={{ 
                          aspectRatio: '620/600',
                          height: 'auto'
                        }}
                      >
                        <AsciiWaveAnimation isVisible={true} />
                      </div>
                    ) : (
                      <div 
                        className="w-full rounded overflow-hidden"
                        style={{ 
                          aspectRatio: '620/600',
                          height: 'auto'
                        }}
                      >
                        <DevelopmentAsciiArt isVisible={true} />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col lg:col-span-6 col-start-8 col-span-5 max-sm:w-full">
                  <h3 
                    className="text-balance m-0 text-lg font-normal leading-7 tracking-wide text-muted-foreground mb-6"
                    style={{
                      fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif'
                    }}
                  >
                    <span className="text-foreground">{feature.title}</span> {feature.subtitle}
                  </h3>
                  <Link 
                    href={feature.ctaLink}
                    className="oxide-nav-button oxide-nav-button-primary inline-flex items-center self-start mt-auto"
                  >
                    {feature.ctaText} <MoveRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};