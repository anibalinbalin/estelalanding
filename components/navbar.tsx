"use client"

import * as React from "react"
import { Link } from "next-view-transitions"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ToolbarSwitcher } from "@/components/ui/toolbar-switcher"
import { BerlinAsciiArt } from "@/components/ui/berlin-ascii-art"
import { PrinciplesAsciiArt } from "@/components/ui/principles-ascii-art"
import { ImplementationAsciiArt } from "@/components/ui/implementation-ascii-art"
import { PracticesAsciiArt } from "@/components/ui/practices-ascii-art"
import { PhilosophyAsciiArt } from "@/components/ui/philosophy-ascii-art"
import { InfrastructureAsciiArt } from "@/components/ui/infrastructure-ascii-art"
import { SecurityAsciiArt } from "@/components/ui/security-ascii-art"
import { DevelopmentAsciiArt } from "@/components/ui/development-ascii-art"
import { ConsultingAsciiArt } from "@/components/ui/consulting-ascii-art"
import { SpecificationsAsciiArt } from "@/components/ui/specifications-ascii-art"
import { useLanguage } from "@/components/language-provider"
import './navbar-animations.css'


const content = {
  en: {
    nav: {
      services: "Services",
      method: "Method",
      company: "Company",
      contact: "Contact"
    },
    services: {
      default: {
        title: "Our Services",
        subtitle: "Infrastructure, security, development. What you need, without what you don't."
      },
      infrastructure: {
        title: "Infrastructure",
        subtitle: "The invisible that holds up the visible.",
        description: "The foundation of everything digital. We build networks that never make you think about networks."
      },
      security: {
        title: "Security",
        subtitle: "What separates calm from chaos. Literally.",
        description: "Protection isn't paranoia. It's preparation. We secure your data, your premises, and your peace of mind."
      },
      development: {
        title: "Development",
        subtitle: "Code that solves problems, not creates them.",
        description: "Custom solutions for unique challenges. We build the tools your business needs to thrive."
      },
      consulting: {
        title: "Consulting",
        subtitle: "Answers to questions you haven't asked yet.",
        description: "Your technology partner, not just another vendor. From strategic planning to daily support."
      },
      specifications: {
        title: "Specifications",
        subtitle: "Detailed technical specifications.",
        description: "Detailed technical documentation and requirements analysis for complex implementations."
      }
    },
    method: {
      default: {
        title: "The Estela Method",
        subtitle: "Systematic by choice. Insistent by tradition."
      },
      introduction: {
        title: "Introduction",
        subtitle: "What we do. Why we do it. In that order."
      },
      principles: {
        title: "Principles",
        subtitle: "The rules we chose. The exceptions we avoid."
      },
      implementation: {
        title: "Implementation",
        subtitle: "Execute well. Repeat better."
      },
      practices: {
        title: "Practices",
        subtitle: "Applied theory. Avoided mistakes."
      },
      philosophy: {
        title: "Philosophy",
        subtitle: "Ideas that guide. Fads we ignore."
      }
    },
    company: {
      about: {
        title: "About",
        subtitle: "Learn about our mission and values."
      },
      work: {
        title: "Work",
        subtitle: "See our portfolio and case studies."
      },
      team: {
        title: "Team",
        subtitle: "Meet the people behind Estela."
      },
      partners: {
        title: "Partners",
        subtitle: "Our trusted technology partners."
      }
    },
    cta: {
      contact: "Contact",
      getStarted: "Get Started"
    }
  },
  es: {
    nav: {
      services: "Servicios",
      method: "Método",
      company: "Empresa",
      contact: "Contacto"
    },
    services: {
      default: {
        title: "Nuestros Servicios",
        subtitle: "Infraestructura, seguridad, desarrollo. Lo que necesita, sin lo que no."
      },
      infrastructure: {
        title: "Infraestructura",
        subtitle: "Lo invisible que sostiene lo visible.",
        description: "La base de todo lo digital. Construimos redes que nunca te hacen pensar en redes."
      },
      security: {
        title: "Seguridad",
        subtitle: "Lo que separa la calma del caos. Literalmente.",
        description: "La protección no es paranoia. Es preparación. Aseguramos tus datos, tus instalaciones y tu tranquilidad."
      },
      development: {
        title: "Desarrollo",
        subtitle: "Código que resuelve problemas, no que los crea.",
        description: "Soluciones personalizadas para desafíos únicos. Construimos las herramientas que tu negocio necesita para prosperar."
      },
      consulting: {
        title: "Consultoría",
        subtitle: "Respuestas a preguntas que aún no formuló.",
        description: "Tu socio tecnológico, no solo otro proveedor. Desde planificación estratégica hasta soporte diario."
      },
      specifications: {
        title: "Especificaciones",
        subtitle: "Especificaciones técnicas detalladas.",
        description: "Documentación técnica detallada y análisis de requisitos para implementaciones complejas."
      }
    },
    method: {
      default: {
        title: "El Método Estela",
        subtitle: "Sistemáticos por elección. Insistentes por tradición."
      },
      introduction: {
        title: "Introducción",
        subtitle: "Lo que hacemos. Por qué lo hacemos. En ese orden."
      },
      principles: {
        title: "Principios",
        subtitle: "Las reglas que elegimos. Las excepciones que evitamos."
      },
      implementation: {
        title: "Implementación",
        subtitle: "Ejecutar bien. Repetir mejor."
      },
      practices: {
        title: "Prácticas",
        subtitle: "Teoría aplicada. Errores evitados."
      },
      philosophy: {
        title: "Filosofía",
        subtitle: "Ideas que guían. Modas que ignoramos."
      }
    },
    company: {
      about: {
        title: "Acerca de",
        subtitle: "Conoce nuestra misión y valores."
      },
      work: {
        title: "Trabajo",
        subtitle: "Ve nuestro portafolio y casos de estudio."
      },
      team: {
        title: "Equipo",
        subtitle: "Conoce a las personas detrás de Estela."
      },
      partners: {
        title: "Socios",
        subtitle: "Nuestros socios tecnológicos de confianza."
      }
    },
    cta: {
      contact: "Contacto",
      getStarted: "Comenzar"
    }
  }
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)
  const [mobileMethodOpen, setMobileMethodOpen] = React.useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = React.useState(false)
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimated, setIsAnimated] = React.useState(false)
  const [hoveredService, setHoveredService] = React.useState<string>('default')
  const [hoveredMethodItem, setHoveredMethodItem] = React.useState<string>('')
  const [showBerlinArt, setShowBerlinArt] = React.useState(false)
  const [showPrinciplesArt, setShowPrinciplesArt] = React.useState(false)
  const [showImplementationArt, setShowImplementationArt] = React.useState(false)
  const [showPracticesArt, setShowPracticesArt] = React.useState(false)
  const [showPhilosophyArt, setShowPhilosophyArt] = React.useState(false)
  const [showInfrastructureArt, setShowInfrastructureArt] = React.useState(false)
  const [showSecurityArt, setShowSecurityArt] = React.useState(false)
  const [showDevelopmentArt, setShowDevelopmentArt] = React.useState(false)
  const [showConsultingArt, setShowConsultingArt] = React.useState(false)
  const [showSpecificationsArt, setShowSpecificationsArt] = React.useState(false)
  
  // Only show theme-dependent content after mounting
  React.useEffect(() => {
    setMounted(true)
    // Trigger animations after component mounts
    setIsAnimated(true)
  }, [])
  
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png"
  const t = content[language]
  
  // Helper function to get the correct path based on language
  const getLocalizedPath = (path: string) => {
    if (language === 'es' && !path.startsWith('/es')) {
      return `/es${path}`
    } else if (language === 'en' && path.startsWith('/es')) {
      return path.replace('/es', '')
    }
    return path
  }

  return (
    <nav className={`relative z-50 w-full ${pathname?.startsWith('/services') ? '' : 'border-b'} ${isAnimated ? 'navbar-animated' : 'opacity-0'}`}>
      <div className="flex h-14 sm:h-16 lg:h-20 items-center px-5 sm:px-10">

        <div className="relative w-full">
          <div className="flex w-full items-center justify-between list-none m-auto p-0 max-w-[1200px]">
            {/* Left section: Mobile menu button + Logo */}
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                type="button"
                className="flex lg:hidden items-center cursor-pointer bg-transparent normal-case h-7 w-7 flex-col justify-center rounded border border-border"
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen)
                  // Reset submenu states when closing
                  if (mobileMenuOpen) {
                    setMobileServicesOpen(false)
                    setMobileMethodOpen(false)
                    setMobileCompanyOpen(false)
                  }
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="block align-middle text-muted-foreground">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2.66667C11 2.29848 10.7015 2 10.3333 2H1.66667C1.29848 2 1 2.29848 1 2.66667V2.66667C1 3.03486 1.29848 3.33333 1.66667 3.33333H10.3333C10.7015 3.33333 11 3.03486 11 2.66667V2.66667ZM1 5.92C1 5.54997 1.29997 5.25 1.67 5.25H10.33C10.7 5.25 11 5.54997 11 5.92V6.08C11 6.45003 10.7 6.75 10.33 6.75H1.67C1.29997 6.75 1 6.45003 1 6.08V5.92ZM1 9.33333C1 8.96514 1.29848 8.66667 1.66667 8.66667H10.3333C10.7015 8.66667 11 8.96514 11 9.33333V9.33333C11 9.70152 10.7015 10 10.3333 10H1.66667C1.29848 10 1 9.70152 1 9.33333V9.33333Z" fill="currentColor"></path>
                </svg>
              </button>

              {/* Logo - left aligned */}
              <Link 
                href={language === 'es' ? '/es' : '/'} 
                className={`flex items-center h-[58px] sm:h-[69px] lg:h-[80px] justify-start ${isAnimated ? 'navbar-logo' : 'opacity-0'}`}
              >
                <Image
                  src={logoSrc}
                  alt="Estela Logo"
                  width={317}
                  height={91}
                  className="h-full w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className={`items-center leading-none hidden lg:flex gap-1 ${isAnimated ? 'navbar-nav-items' : 'opacity-0'}`}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="estela-nav-trigger">
                      {t.nav.services}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent 
                      onMouseLeave={() => {
                        setHoveredService('default')
                        setShowInfrastructureArt(false)
                        setShowSecurityArt(false)
                        setShowDevelopmentArt(false)
                        setShowConsultingArt(false)
                        setShowSpecificationsArt(false)
                      }}
                    >
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-5">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md min-h-[300px] relative overflow-hidden p-3"
                              href={getLocalizedPath("/services")}
                              onMouseEnter={(e) => {
                                e.stopPropagation()
                                // Reset all ASCII art states when hovering over default area
                                setShowInfrastructureArt(false)
                                setShowSecurityArt(false)
                                setShowDevelopmentArt(false)
                                setShowConsultingArt(false)
                                setShowSpecificationsArt(false)
                                setHoveredService('default')
                              }}
                              onMouseLeave={(e) => e.stopPropagation()}
                            >
                              {showInfrastructureArt ? (
                                <div className="absolute inset-0">
                                  <InfrastructureAsciiArt isVisible={showInfrastructureArt} />
                                </div>
                              ) : showSecurityArt ? (
                                <div className="absolute inset-0">
                                  <SecurityAsciiArt isVisible={showSecurityArt} />
                                </div>
                              ) : showDevelopmentArt ? (
                                <div className="absolute inset-0">
                                  <DevelopmentAsciiArt isVisible={showDevelopmentArt} />
                                </div>
                              ) : showConsultingArt ? (
                                <div className="absolute inset-0">
                                  <ConsultingAsciiArt isVisible={showConsultingArt} />
                                </div>
                              ) : showSpecificationsArt ? (
                                <div className="absolute inset-0">
                                  <SpecificationsAsciiArt isVisible={showSpecificationsArt} />
                                </div>
                              ) : (
                                <div className="relative z-10 p-3">
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {t.services.default.title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {t.services.default.subtitle}
                                  </p>
                                </div>
                              )}
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ServiceListItem 
                          href={getLocalizedPath("/services/infrastructure")} 
                          title={t.services.infrastructure.title}
                          serviceKey="infrastructure"
                          onHover={setHoveredService}
                          onShowInfrastructureArt={setShowInfrastructureArt}
                        >
                          {t.services.infrastructure.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href={getLocalizedPath("/services/security")} 
                          title={t.services.security.title}
                          serviceKey="security"
                          onHover={setHoveredService}
                          onShowSecurityArt={setShowSecurityArt}
                        >
                          {t.services.security.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href={getLocalizedPath("/services/development")} 
                          title={t.services.development.title}
                          serviceKey="development"
                          onHover={setHoveredService}
                          onShowDevelopmentArt={setShowDevelopmentArt}
                        >
                          {t.services.development.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href={getLocalizedPath("/services/consulting")} 
                          title={t.services.consulting.title}
                          serviceKey="consulting"
                          onHover={setHoveredService}
                          onShowConsultingArt={setShowConsultingArt}
                        >
                          {t.services.consulting.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href={getLocalizedPath("/services/specifications")} 
                          title={t.services.specifications.title}
                          serviceKey="specifications"
                          onHover={setHoveredService}
                          onShowSpecificationsArt={setShowSpecificationsArt}
                        >
                          {t.services.specifications.subtitle}
                        </ServiceListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="estela-nav-trigger">
                      {t.nav.method}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent 
                      onMouseLeave={() => {
                        setHoveredMethodItem('')
                        setShowBerlinArt(false)
                        setShowPrinciplesArt(false)
                        setShowImplementationArt(false)
                        setShowPracticesArt(false)
                        setShowPhilosophyArt(false)
                      }}
                    >
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-6">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md min-h-[300px] relative overflow-hidden"
                              href={getLocalizedPath("/method")}
                              onMouseEnter={(e) => e.stopPropagation()}
                              onMouseLeave={(e) => e.stopPropagation()}
                            >
                              {(() => {

                                if (showBerlinArt) {
                                  return (
                                    <div className="absolute inset-0">
                                      <BerlinAsciiArt isVisible={showBerlinArt} />
                                    </div>
                                  )
                                } else if (showPrinciplesArt) {
                                  return (
                                    <div className="absolute inset-0">
                                      <PrinciplesAsciiArt isVisible={showPrinciplesArt} />
                                    </div>
                                  )
                                } else if (showImplementationArt) {
                                  return (
                                    <div className="absolute inset-0">
                                      <ImplementationAsciiArt isVisible={showImplementationArt} />
                                    </div>
                                  )
                                } else if (showPracticesArt) {
                                  return (
                                    <div className="absolute inset-0">
                                      <PracticesAsciiArt isVisible={showPracticesArt} />
                                    </div>
                                  )
                                } else if (showPhilosophyArt) {
                                  return (
                                    <div className="absolute inset-0">
                                      <PhilosophyAsciiArt isVisible={showPhilosophyArt} />
                                    </div>
                                  )
                                } else {
                                  return (
                                <div className="relative z-10">
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {t.method.default.title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                        {t.method.default.subtitle}
                                  </p>
                                </div>
                                  )
                                }
                                return null
                              })()} 
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <MethodListItem 
                          href={getLocalizedPath("/method/introduction")} 
                          title={t.method.introduction.title}
                          methodKey="introduction"
                          onHover={setHoveredMethodItem}
                          onShowArt={setShowBerlinArt}
                          onShowPrinciplesArt={setShowPrinciplesArt}
                          onShowImplementationArt={setShowImplementationArt}
                          onShowPracticesArt={setShowPracticesArt}
                          onShowPhilosophyArt={setShowPhilosophyArt}
                        >
                          {t.method.introduction.subtitle}
                        </MethodListItem>
                        <MethodListItem 
                          href={getLocalizedPath("/method/principles")} 
                          title={t.method.principles.title}
                          methodKey="principles"
                          onHover={setHoveredMethodItem}
                          onShowArt={setShowBerlinArt}
                          onShowPrinciplesArt={setShowPrinciplesArt}
                          onShowImplementationArt={setShowImplementationArt}
                          onShowPracticesArt={setShowPracticesArt}
                          onShowPhilosophyArt={setShowPhilosophyArt}
                        >
                          {t.method.principles.subtitle}
                        </MethodListItem>
                        <MethodListItem 
                          href={getLocalizedPath("/method/implementation")} 
                          title={t.method.implementation.title}
                          methodKey="implementation"
                          onHover={setHoveredMethodItem}
                          onShowArt={setShowBerlinArt}
                          onShowPrinciplesArt={setShowPrinciplesArt}
                          onShowImplementationArt={setShowImplementationArt}
                          onShowPracticesArt={setShowPracticesArt}
                          onShowPhilosophyArt={setShowPhilosophyArt}
                        >
                          {t.method.implementation.subtitle}
                        </MethodListItem>
                        <MethodListItem 
                          href={getLocalizedPath("/method/practices")} 
                          title={t.method.practices.title}
                          methodKey="practices"
                          onHover={setHoveredMethodItem}
                          onShowArt={setShowBerlinArt}
                          onShowPrinciplesArt={setShowPrinciplesArt}
                          onShowImplementationArt={setShowImplementationArt}
                          onShowPracticesArt={setShowPracticesArt}
                          onShowPhilosophyArt={setShowPhilosophyArt}
                        >
                          {t.method.practices.subtitle}
                        </MethodListItem>
                        <MethodListItem 
                          href={getLocalizedPath("/method/philosophy")} 
                          title={t.method.philosophy.title}
                          methodKey="philosophy"
                          onHover={setHoveredMethodItem}
                          onShowArt={setShowBerlinArt}
                          onShowPrinciplesArt={setShowPrinciplesArt}
                          onShowImplementationArt={setShowImplementationArt}
                          onShowPracticesArt={setShowPracticesArt}
                          onShowPhilosophyArt={setShowPhilosophyArt}
                        >
                          {t.method.philosophy.subtitle}
                        </MethodListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="estela-nav-trigger">
                      {t.nav.company}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href={getLocalizedPath("/company/about")} title={t.company.about.title}>
                          {t.company.about.subtitle}
                        </ListItem>
                        <ListItem href={getLocalizedPath("/company/work")} title={t.company.work.title}>
                          {t.company.work.subtitle}
                        </ListItem>
                        <ListItem href={getLocalizedPath("/company/team")} title={t.company.team.title}>
                          {t.company.team.subtitle}
                        </ListItem>
                        <ListItem href={getLocalizedPath("/company/partners")} title={t.company.partners.title}>
                          {t.company.partners.subtitle}
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={getLocalizedPath("/contact")} className="estela-nav-link">
                        {t.nav.contact}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side CTAs */}
            <div className={`items-center justify-end gap-3 flex ${isAnimated ? 'navbar-toolbar' : 'opacity-0'}`}>
              <ToolbarSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div>
            {/* Services menu */}
            <div className="text-left">
              <div>
                <h3 className="text-balance m-0 text-inherit font-inherit">
                  <button 
                    type="button" 
                    className="py-5 text-left items-center flex w-full cursor-pointer bg-transparent uppercase font-mono text-xs font-normal leading-4 tracking-wider text-muted-foreground m-0 p-0 justify-between border-b hover:opacity-80 px-5 sm:px-10"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span className="w-3/4">{t.nav.services}</span>
                    <span className={cn(
                      "text-muted-foreground transform transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]",
                      mobileServicesOpen && "rotate-90"
                    )}>
                      <svg width="12" height="12" className="block align-middle">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </h3>
                {mobileServicesOpen && (
                  <div className="overflow-hidden">
                    <div className="pl-5 sm:pl-10">
                      <Link
                        href={getLocalizedPath("/services/infrastructure")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.services.infrastructure.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/services/security")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.services.security.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/services/development")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.services.development.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/services/consulting")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.services.consulting.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/services/specifications")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors border-b"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.services.specifications.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Method menu */}
            <div className="text-left">
              <div>
                <h3 className="text-balance m-0 text-inherit font-inherit">
                  <button 
                    type="button" 
                    className="py-5 text-left items-center flex w-full cursor-pointer bg-transparent uppercase font-mono text-xs font-normal leading-4 tracking-wider text-muted-foreground m-0 p-0 justify-between border-b hover:opacity-80 px-5 sm:px-10"
                    onClick={() => setMobileMethodOpen(!mobileMethodOpen)}
                  >
                    <span className="w-3/4">{t.nav.method}</span>
                    <span className={cn(
                      "text-muted-foreground transform transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]",
                      mobileMethodOpen && "rotate-90"
                    )}>
                      <svg width="12" height="12" className="block align-middle">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </h3>
                {mobileMethodOpen && (
                  <div className="overflow-hidden">
                    <div className="pl-5 sm:pl-10">
                      <Link
                        href={getLocalizedPath("/method/introduction")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.method.introduction.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/method/principles")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.method.principles.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/method/implementation")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.method.implementation.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/method/practices")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.method.practices.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/method/philosophy")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors border-b"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.method.philosophy.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Company menu */}
            <div className="text-left">
              <div>
                <h3 className="text-balance m-0 text-inherit font-inherit">
                  <button 
                    type="button" 
                    className="py-5 text-left items-center flex w-full cursor-pointer bg-transparent uppercase font-mono text-xs font-normal leading-4 tracking-wider text-muted-foreground m-0 p-0 justify-between border-b hover:opacity-80 px-5 sm:px-10"
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  >
                    <span className="w-3/4">{t.nav.company}</span>
                    <span className={cn(
                      "text-muted-foreground transform transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]",
                      mobileCompanyOpen && "rotate-90"
                    )}>
                      <svg width="12" height="12" className="block align-middle">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </h3>
                {mobileCompanyOpen && (
                  <div className="overflow-hidden">
                    <div className="pl-5 sm:pl-10">
                      <Link
                        href={getLocalizedPath("/company/about")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.company.about.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/company/work")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.company.work.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/company/team")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.company.team.title}
                      </Link>
                      <Link
                        href={getLocalizedPath("/company/partners")}
                        className="block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors border-b"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t.company.partners.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact link */}
            <Link
              href={getLocalizedPath("/contact")}
              className="block py-5 px-5 sm:px-10 text-left uppercase font-mono text-xs font-normal leading-4 tracking-wider text-muted-foreground hover:opacity-80 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="estela-submenu-title">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

// Special ListItem for Services with hover functionality
const ServiceListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    serviceKey: string
    onHover: (service: string) => void
    onShowInfrastructureArt?: (show: boolean) => void
    onShowSecurityArt?: (show: boolean) => void
    onShowDevelopmentArt?: (show: boolean) => void
    onShowConsultingArt?: (show: boolean) => void
    onShowSpecificationsArt?: (show: boolean) => void
  }
>(({ className, title, children, serviceKey, onHover, onShowInfrastructureArt, onShowSecurityArt, onShowDevelopmentArt, onShowConsultingArt, onShowSpecificationsArt, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          onMouseEnter={() => {
            onHover(serviceKey)
            if (serviceKey === 'infrastructure' && onShowInfrastructureArt) {
              onShowInfrastructureArt(true)
            }
            if (serviceKey === 'security' && onShowSecurityArt) {
              onShowSecurityArt(true)
            }
            if (serviceKey === 'development' && onShowDevelopmentArt) {
              onShowDevelopmentArt(true)
            }
            if (serviceKey === 'consulting' && onShowConsultingArt) {
              onShowConsultingArt(true)
            }
            if (serviceKey === 'specifications' && onShowSpecificationsArt) {
              onShowSpecificationsArt(true)
            }
          }}
          onMouseLeave={() => {
            if (serviceKey === 'infrastructure' && onShowInfrastructureArt) {
              onShowInfrastructureArt(false)
            }
            if (serviceKey === 'security' && onShowSecurityArt) {
              onShowSecurityArt(false)
            }
            if (serviceKey === 'development' && onShowDevelopmentArt) {
              onShowDevelopmentArt(false)
            }
            if (serviceKey === 'consulting' && onShowConsultingArt) {
              onShowConsultingArt(false)
            }
            if (serviceKey === 'specifications' && onShowSpecificationsArt) {
              onShowSpecificationsArt(false)
            }
          }}
          {...props}
        >
          <div className="estela-submenu-title">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ServiceListItem.displayName = "ServiceListItem"

// Special ListItem for Method items with ASCII art functionality
const MethodListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    methodKey: string
    onHover: (method: string) => void
    onShowArt: (show: boolean) => void
    onShowPrinciplesArt?: (show: boolean) => void
    onShowImplementationArt?: (show: boolean) => void
    onShowPracticesArt?: (show: boolean) => void
    onShowPhilosophyArt?: (show: boolean) => void
  }
>(({ className, title, children, methodKey, onHover, onShowArt, onShowPrinciplesArt, onShowImplementationArt, onShowPracticesArt, onShowPhilosophyArt, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          onMouseEnter={(e) => {
            e.stopPropagation()

            onHover(methodKey)
            if (methodKey === 'introduction') {

              onShowArt(true)
            } else if (methodKey === 'principles' && onShowPrinciplesArt) {

              onShowPrinciplesArt(true)
            } else if (methodKey === 'implementation' && onShowImplementationArt) {

              onShowImplementationArt(true)
            } else if (methodKey === 'practices' && onShowPracticesArt) {

              onShowPracticesArt(true)
            } else if (methodKey === 'philosophy' && onShowPhilosophyArt) {

              onShowPhilosophyArt(true)
            }
          }}
          onMouseLeave={(e) => {
            e.stopPropagation()

            onHover('')
            if (methodKey === 'introduction') {

              onShowArt(false)
            } else if (methodKey === 'principles' && onShowPrinciplesArt) {

              onShowPrinciplesArt(false)
            } else if (methodKey === 'implementation' && onShowImplementationArt) {

              onShowImplementationArt(false)
            } else if (methodKey === 'practices' && onShowPracticesArt) {
              onShowPracticesArt(false)
            } else if (methodKey === 'philosophy' && onShowPhilosophyArt) {
              onShowPhilosophyArt(false)
            }
          }}
          {...props}
        >
          <div className="estela-submenu-title">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
MethodListItem.displayName = "MethodListItem"