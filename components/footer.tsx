"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "When technology meets wisdom",
      description: "Guiding businesses through technological transformations with the perfect balance of trusted expertise and innovative insight.",
      address: {
        line1: "Estela Technology Solutions",
        line2: "Montevideo, Uruguay",
        line3: "South America"
      },
      contact: {
        phone: "+598 2 XXX XXXX",
        email: "hola@este.la"
      },
      partners: {
        title: "Partners:",
        companies: ["Lenovo", "UniFi", "Synology", "SentinelOne"]
      },
      copyright: "© 2024 Estela. Making technology work for people since 2011.",
      legal: {
        terms: "Terms of service",
        privacy: "Privacy Policy"
      },
      sections: {
        services: {
          title: "Services",
          items: [
            { title: "Infrastructure", href: "/infrastructure" },
            { title: "Cloud Solutions", href: "/cloud" },
            { title: "Consulting", href: "/consulting" },
            { title: "Support", href: "/support" }
          ]
        },
        company: {
          title: "Company",
          items: [
            { title: "Home", href: "/" },
            { title: "Principles", href: "/principles" },
            { title: "Team", href: "/team" },
            { title: "Contact", href: "/contact" }
          ]
        },
        resources: {
          title: "Resources",
          items: [
            { title: "Blog", href: "/blog" },
            { title: "Case Studies", href: "/cases" },
            { title: "Documentation", href: "/docs" }
          ]
        }
      }
    },
    es: {
      tagline: "Cuando la tecnología y el conocimiento convergen",
      description: "Guiando a las empresas a través de transformaciones tecnológicas con el equilibrio perfecto entre experiencia confiable e innovación.",
      address: {
        line1: "Estela Technology Solutions",
        line2: "Montevideo, Uruguay",
        line3: "Sudamérica"
      },
      contact: {
        phone: "+598 2 XXX XXXX",
        email: "hola@este.la"
      },
      partners: {
        title: "Socios:",
        companies: ["Lenovo", "UniFi", "Synology", "SentinelOne"]
      },
      copyright: "© 2024 Estela. Haciendo que la tecnología funcione para las personas desde 2011.",
      legal: {
        terms: "Términos de servicio",
        privacy: "Política de privacidad"
      },
      sections: {
        services: {
          title: "Servicios",
          items: [
            { title: "Infraestructura", href: "/infrastructure" },
            { title: "Soluciones Cloud", href: "/cloud" },
            { title: "Consultoría", href: "/consulting" },
            { title: "Soporte", href: "/support" }
          ]
        },
        company: {
          title: "Empresa",
          items: [
            { title: "Inicio", href: "/" },
            { title: "Principios", href: "/principles" },
            { title: "Equipo", href: "/team" },
            { title: "Contacto", href: "/contact" }
          ]
        },
        resources: {
          title: "Recursos",
          items: [
            { title: "Blog", href: "/blog" },
            { title: "Casos de Estudio", href: "/cases" },
            { title: "Documentación", href: "/docs" }
          ]
        }
      }
    }
  };

  const t = content[language];

  return (
    <div className="m-auto max-w-[1200px] py-10 grid grid-cols-12 gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 px-5 min-[600px]:px-10">
        
        {/* Company Info Section */}
        <div className="col-span-12 min-[800px]:col-span-6 mb-8">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 
                className="text-3xl md:text-4xl tracking-tighter max-w-xl font-normal text-left"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-raise-p3)'
                }}
              >
                Estela
              </h2>
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
            
            <div className="flex gap-20 flex-row">
              <div 
                className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                <p>{t.address.line1}</p>
                <p>{t.address.line2}</p>
                <p>{t.address.line3}</p>
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
              <div 
                className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                <Link 
                  href="/terms"
                  className="hover:text-[var(--content-raise-p3)] transition-colors"
                  style={{ textDecoration: 'inherit' }}
                >
                  {t.legal.terms}
                </Link>
                <Link 
                  href="/privacy"
                  className="hover:text-[var(--content-raise-p3)] transition-colors"
                  style={{ textDecoration: 'inherit' }}
                >
                  {t.legal.privacy}
                </Link>
              </div>
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

          {/* Resources Column */}
          <div className="col-span-2">
            <div 
              className="mb-1 uppercase font-normal leading-4 text-[.75rem] tracking-wider"
              style={{
                fontFamily: 'GT_America_Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                color: 'var(--content-quaternary-p3)'
              }}
            >
              {t.sections.resources.title}
            </div>
            <ul className="list-none m-0 p-0">
              {t.sections.resources.items.map((item) => (
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
        <div className="col-span-12 mt-8 pt-6 border-t" style={{ borderTopColor: 'var(--stroke-secondary-p3)' }}>
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
        <div className="col-span-12 mt-6 pt-4 border-t" style={{ borderTopColor: 'var(--stroke-secondary-p3)' }}>
          <div className="text-center">
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