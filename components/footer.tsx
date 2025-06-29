"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import * as React from "react";

export const Footer = () => {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only show theme-dependent content after mounting
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png";

  const content = {
    en: {
      tagline: "When technology meets wisdom",
      description: "Guiding businesses through technological transformations with the perfect balance of trusted expertise and innovative insight.",
      address: {
        line1: "Estela Technology Solutions",
        line2: "21 de Setiembre, 3015. 802",
        line3: "Montevideo, Uruguay",
        line4: "South America"
      },
      contact: {
        phone: "+598 27113184",
        email: "hola@este.la"
      },
      partners: {
        title: "Partners:",
        companies: ["Lenovo", "UniFi", "Synology", "SentinelOne"]
      },
      copyright: `© ${new Date().getFullYear()} Estela. Making technology work for people since 2011.`,
      sections: {
        services: {
          title: "Services",
          items: [
            { title: "Infrastructure", href: "/services/infrastructure" },
            { title: "Security", href: "/services/security" },
            { title: "Development", href: "/services/development" },
            { title: "Consulting", href: "/services/consulting" },
            { title: "Specifications", href: "/services/specifications" }
          ]
        },
        method: {
          title: "Method",
          items: [
            { title: "Introduction", href: "/method/introduction" },
            { title: "Principles", href: "/method/principles" },
            { title: "Implementation", href: "/method/implementation" },
            { title: "Practices", href: "/method/practices" },
            { title: "Philosophy", href: "/method/philosophy" }
          ]
        },
        company: {
          title: "Company",
          items: [
            { title: "About", href: "/about" },
            { title: "Work", href: "/work" },
            { title: "Team", href: "/company/team" },
            { title: "Partners", href: "/company/partners" },
            { title: "Contact", href: "/contact" }
          ]
        }
      }
    },
    es: {
      tagline: "Cuando la tecnología y el conocimiento convergen",
      description: "Guiando a las empresas a través de transformaciones tecnológicas con el equilibrio perfecto entre experiencia confiable e innovación.",
      address: {
        line1: "Estela Technology Solutions",
        line2: "21 de Setiembre, 3015. 802",
        line3: "Montevideo, Uruguay",
        line4: "Sudamérica"
      },
      contact: {
        phone: "+598 27113184",
        email: "hola@este.la"
      },
      partners: {
        title: "Socios:",
        companies: ["Lenovo", "UniFi", "Synology", "SentinelOne"]
      },
      copyright: `© ${new Date().getFullYear()} Estela. Haciendo que la tecnología funcione para las personas desde 2011.`,
      sections: {
        services: {
          title: "Servicios",
          items: [
            { title: "Infraestructura", href: "/services/infrastructure" },
            { title: "Seguridad", href: "/services/security" },
            { title: "Desarrollo", href: "/services/development" },
            { title: "Consultoría", href: "/services/consulting" },
            { title: "Especificaciones", href: "/services/specifications" }
          ]
        },
        method: {
          title: "Método",
          items: [
            { title: "Introducción", href: "/method/introduction" },
            { title: "Principios", href: "/method/principles" },
            { title: "Implementación", href: "/method/implementation" },
            { title: "Prácticas", href: "/method/practices" },
            { title: "Filosofía", href: "/method/philosophy" }
          ]
        },
        company: {
          title: "Empresa",
          items: [
            { title: "Acerca de", href: "/about" },
            { title: "Trabajo", href: "/work" },
            { title: "Equipo", href: "/company/team" },
            { title: "Socios", href: "/company/partners" },
            { title: "Contacto", href: "/contact" }
          ]
        }
      }
    }
  };

  const t = content[language];

  return (
    <div className="m-auto max-w-[1200px] py-10 grid grid-cols-12 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 px-5 min-[600px]:px-10 mt-28 border-t" style={{ borderTopColor: 'var(--stroke-secondary-p3)' }}>
        
        {/* Company Info Section */}
        <div className="col-span-12 min-[800px]:col-span-6 mb-8">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <div className="mb-2">
                <Link href="/" className="flex items-center">
                  <Image
                    src={logoSrc}
                    alt="Estela Logo"
                    width={317}
                    height={91}
                    className="h-[6.6rem] w-auto"
                  />
                </Link>
              </div>
              <p 
                className="text-lg max-w-lg leading-relaxed tracking-tight text-left"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                {t.description}
              </p>
            </div>
            
            <div 
              className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--content-secondary-p3)'
              }}
            >
              <Link 
                href="https://www.google.com/maps/place/Estela/@-34.9196888,-56.1519267,17z/data=!3m1!4b1!4m6!3m5!1s0x959f817118671c0d:0xd422761a4eb5b822!8m2!3d-34.9196888!4d-56.1519267!16s%2Fg%2F11dylz0wgq?hl=en-UY&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--content-raise-p3)] transition-colors"
                style={{ textDecoration: 'inherit' }}
              >
                <p>{t.address.line1}</p>
                <p>{t.address.line2}</p>
                <p>{t.address.line3}</p>
                <p>{t.address.line4}</p>
              </Link>
              <br />
              <p>{t.contact.phone}</p>
              <Link 
                href={`mailto:${t.contact.email}`}
                className="hover:text-[var(--content-raise-p3)] transition-colors"
                style={{ textDecoration: 'inherit' }}
              >
                {t.contact.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="grid grid-cols-[repeat(6,minmax(0,1fr))] gap-4 col-span-12 min-[800px]:col-span-6">
          
          {/* Services Column */}
          <div className="col-span-2">
            <div 
              className="mb-1 uppercase font-normal leading-4 text-[.75rem] tracking-wider"
              style={{
                fontFamily: 'GT_America_Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                color: 'var(--content-quaternary-p3)'
              }}
            >
              {t.sections.services.title}
            </div>
            <ul className="list-none m-0 p-0">
              {t.sections.services.items.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href}
                    className="my-0 inline-block font-normal leading-[1.125rem] text-[.875rem] tracking-wider hover:text-[var(--content-raise-p3)] transition-colors"
                    style={{
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'inherit'
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Method Column */}
          <div className="col-span-2">
            <div 
              className="mb-1 uppercase font-normal leading-4 text-[.75rem] tracking-wider"
              style={{
                fontFamily: 'GT_America_Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                color: 'var(--content-quaternary-p3)'
              }}
            >
              {t.sections.method.title}
            </div>
            <ul className="list-none m-0 p-0">
              {t.sections.method.items.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href}
                    className="my-0 inline-block font-normal leading-[1.125rem] text-[.875rem] tracking-wider hover:text-[var(--content-raise-p3)] transition-colors"
                    style={{
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'inherit'
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-2">
            <div 
              className="mb-1 uppercase font-normal leading-4 text-[.75rem] tracking-wider"
              style={{
                fontFamily: 'GT_America_Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                color: 'var(--content-quaternary-p3)'
              }}
            >
              {t.sections.company.title}
            </div>
            <ul className="list-none m-0 p-0">
              {t.sections.company.items.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href}
                    className="my-0 inline-block font-normal leading-[1.125rem] text-[.875rem] tracking-wider hover:text-[var(--content-raise-p3)] transition-colors"
                    style={{
                      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                      color: 'var(--content-secondary-p3)',
                      textDecoration: 'inherit'
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div 
          className="col-span-12 border-t border-b"
          style={{ borderTopColor: 'var(--stroke-secondary-p3)', borderBottomColor: 'var(--stroke-secondary-p3)' }}
        >
          <div className="py-4 text-center">
            <p 
              className="text-sm font-normal leading-[1.125rem] tracking-wider"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--content-quaternary-p3)'
              }}
            >
              <span 
                style={{
                  fontFamily: 'GT_America_Mono, monospace',
                  fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                  textTransform: 'uppercase',
                  fontSize: '.75rem'
                }}
              >
                {t.partners.title}
              </span>{' '}
              {t.partners.companies.join(' | ')}
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div 
          className="col-span-12 border-t border-b"
          style={{ borderTopColor: 'var(--stroke-secondary-p3)', borderBottomColor: 'var(--stroke-secondary-p3)' }}
        >
          <div className="py-4 text-center">
            <p 
              className="text-sm font-normal leading-[1.125rem] tracking-wider"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--content-quaternary-p3)'
              }}
            >
              {t.copyright}
            </p>
          </div>
        </div>
    </div>
  );
};