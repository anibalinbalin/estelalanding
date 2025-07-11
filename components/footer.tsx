"use client";

import { Link } from "next-view-transitions";
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

  // Helper function to get the correct path based on language
  const getLocalizedPath = (path: string) => {
    if (language === 'es' && !path.startsWith('/es')) {
      return `/es${path}`
    } else if (language === 'en' && path.startsWith('/es')) {
      return path.replace('/es', '')
    }
    return path
  }

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png";
  const borderColor = mounted && resolvedTheme === "dark" ? "#1c2225" : "#e5e5e5";

  const content = {
    en: {
      tagline: "When technology meets wisdom",
      description: "Guiding businesses through technological transformations with the perfect balance of trusted expertise and innovative insight.",
      address: {
        line1: "Estela",
        line2: "21 de Setiembre, 3015. 802",
        line3: "Montevideo, Punta del Este, Uruguay",
        line4: "South America"
      },
      contact: {
        phone: "+598 27113184",
        email: "hola@este.la"
      },
      partners: {
        title: "Partners:",
        companies: ["Lenovo", "UniFi", "Synology", "SentinelOne", "Wasabi"]
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
            { title: "Index", href: "/method" },
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
            { title: "About", href: "/company/about" },
            { title: "Work", href: "/company/work" },
            { title: "Team", href: "/company/team" },
            { title: "Partners", href: "/company/partners" },
            { title: "Contact", href: "/contact" }
          ]
        }
      }
    },
    es: {
      tagline: "Cuando la tecnología y el conocimiento convergen",
      description: "Guiando a las empresas a través de transformaciones tecnológicas combinando la confianza de lo probado con el potencial de lo nuevo.",
      address: {
        line1: "Estela",
        line2: "21 de Setiembre, 3015. 802",
        line3: "Montevideo, Punta del Este, Uruguay",
        line4: "Sudamérica"
      },
      contact: {
        phone: "+598 27113184",
        email: "hola@este.la"
      },
      partners: {
        title: "Socios:",
        companies: ["Lenovo", "UniFi", "Synology", "SentinelOne", "Wasabi"]
      },
      copyright: `© ${new Date().getFullYear()} Estela. Haciendo que la tecnología funcione para las personas desde 2011.`,
      sections: {
        services: {
          title: "Servicios",
          items: [
            { title: "Infraestructura", href: "/es/services/infrastructure" },
            { title: "Seguridad", href: "/es/services/security" },
            { title: "Desarrollo", href: "/es/services/development" },
            { title: "Consultoría", href: "/es/services/consulting" },
            { title: "Especificaciones", href: "/es/services/specifications" }
          ]
        },
        method: {
          title: "Método",
          items: [
            { title: "Índice", href: "/es/method" },
            { title: "Introducción", href: "/es/method/introduction" },
            { title: "Principios", href: "/es/method/principles" },
            { title: "Implementación", href: "/es/method/implementation" },
            { title: "Prácticas", href: "/es/method/practices" },
            { title: "Filosofía", href: "/es/method/philosophy" }
          ]
        },
        company: {
          title: "Empresa",
          items: [
            { title: "Acerca de", href: "/es/company/about" },
            { title: "Trabajo", href: "/es/company/work" },
            { title: "Equipo", href: "/es/company/team" },
            { title: "Socios", href: "/es/company/partners" },
            { title: "Contacto", href: "/es/contact" }
          ]
        }
      }
    }
  };

  const t = content[language];

  return (
    <div 
      className="m-auto max-w-[1200px] py-10 grid grid-cols-12 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 px-5 min-[600px]:px-10 mt-28 border-t" 
      style={{ 
        '--footer-border-color': borderColor,
        borderTopColor: 'var(--footer-border-color)'
      } as React.CSSProperties}
    >
        
        {/* Company Info Section */}
        <div className="col-span-12 min-[800px]:col-span-6 mb-8">
          {/* Logo Section */}
          <div className="mb-8">
            <Link href={getLocalizedPath("/")} className="flex items-center">
              <Image
                src={logoSrc}
                alt="Estela Logo"
                width={317}
                height={91}
                className="h-[5.61rem] sm:h-[6.6rem] w-auto"
              />
            </Link>
          </div>
          
          {/* Content aligned with navigation headers */}
          <div className="flex flex-col gap-8">
            {/* Description - aligned with nav headers */}
            <p 
              className="text-lg max-w-lg leading-relaxed tracking-tight text-left"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--content-secondary-p3)',
                marginTop: '-0.125rem' // Fine-tune alignment with nav headers
              }}
            >
              {t.description}
            </p>
            
            {/* Address and Contact */}            <div
              style={{
                color: 'var(--content-secondary-p3)',
                fontFamily: 'GT_America_Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                fontSize: '14px',
                lineHeight: '18px'
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
                    href={getLocalizedPath(item.href)}
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
                    href={getLocalizedPath(item.href)}
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
                    href={getLocalizedPath(item.href)}
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
          className="col-span-12"
          style={{ borderTopColor: 'var(--footer-border-color)', borderBottomColor: 'var(--footer-border-color)' }}
        >
          <div className="text-center">
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
          className="col-span-12 border-t"
          style={{ borderTopColor: 'var(--footer-border-color)', borderBottomColor: 'var(--footer-border-color)' }}
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