"use client"

import * as React from "react"
import { Link } from "next-view-transitions"
import Image from "next/image"
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
        subtitle: "Technology solutions designed for your business needs."
      },
      infrastructure: {
        title: "Infrastructure",
        subtitle: "Robust and scalable infrastructure solutions.",
        description: "The foundation of everything digital. We build networks that never make you think about networks."
      },
      security: {
        title: "Security",
        subtitle: "Comprehensive security and protection services.",
        description: "Protection isn't paranoia. It's preparation. We secure your data, your premises, and your peace of mind."
      },
      development: {
        title: "Development",
        subtitle: "Custom software development and solutions.",
        description: "Custom solutions for unique challenges. We build the tools your business needs to thrive."
      },
      consulting: {
        title: "Consulting",
        subtitle: "Expert technology consulting and guidance.",
        description: "Your technology partner, not just another vendor. From strategic planning to daily support."
      },
      specifications: {
        title: "Specifications",
        subtitle: "Detailed technical specifications and requirements.",
        description: "Detailed technical documentation and requirements analysis for complex implementations."
      }
    },
    method: {
      default: {
        title: "The Estela Method",
        subtitle: "Our proven approach to technology transformation."
      },
      introduction: {
        title: "Introduction",
        subtitle: "Learn about our methodology and approach."
      },
      principles: {
        title: "Principles",
        subtitle: "The core principles that guide our work."
      },
      implementation: {
        title: "Implementation",
        subtitle: "How we implement solutions for clients."
      },
      practices: {
        title: "Practices",
        subtitle: "Best practices and proven methodologies."
      },
      philosophy: {
        title: "Philosophy",
        subtitle: "Our philosophy on technology and business."
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
        subtitle: "Soluciones tecnológicas diseñadas para las necesidades de tu negocio."
      },
      infrastructure: {
        title: "Infraestructura",
        subtitle: "Soluciones de infraestructura robustas y escalables.",
        description: "La base de todo lo digital. Construimos redes que nunca te hacen pensar en redes."
      },
      security: {
        title: "Seguridad",
        subtitle: "Servicios integrales de seguridad y protección.",
        description: "La protección no es paranoia. Es preparación. Aseguramos tus datos, tus instalaciones y tu tranquilidad."
      },
      development: {
        title: "Desarrollo",
        subtitle: "Desarrollo de software personalizado y soluciones.",
        description: "Soluciones personalizadas para desafíos únicos. Construimos las herramientas que tu negocio necesita para prosperar."
      },
      consulting: {
        title: "Consultoría",
        subtitle: "Consultoría tecnológica experta y orientación.",
        description: "Tu socio tecnológico, no solo otro proveedor. Desde planificación estratégica hasta soporte diario."
      },
      specifications: {
        title: "Especificaciones",
        subtitle: "Especificaciones técnicas detalladas y requisitos.",
        description: "Documentación técnica detallada y análisis de requisitos para implementaciones complejas."
      }
    },
    method: {
      default: {
        title: "El Método Estela",
        subtitle: "Nuestro enfoque probado para la transformación tecnológica."
      },
      introduction: {
        title: "Introducción",
        subtitle: "Conoce nuestra metodología y enfoque."
      },
      principles: {
        title: "Principios",
        subtitle: "Los principios fundamentales que guían nuestro trabajo."
      },
      implementation: {
        title: "Implementación",
        subtitle: "Cómo implementamos soluciones para clientes."
      },
      practices: {
        title: "Prácticas",
        subtitle: "Mejores prácticas y metodologías probadas."
      },
      philosophy: {
        title: "Filosofía",
        subtitle: "Nuestra filosofía sobre tecnología y negocios."
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
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = React.useState(false)
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
  }, [])
  
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png"
  const t = content[language]

  return (
    <nav className="relative z-50 w-full">
      <div className="flex h-20 items-center px-5 sm:px-10">
        <div className="h-[1px] w-full border-b border-border absolute bottom-0"></div>
        <div className="relative w-full">
          <div className="flex w-full items-center justify-between list-none m-auto p-0 max-w-[1200px]">
            {/* Left section: Mobile menu button + Logo */}
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                type="button"
                className="flex lg:hidden items-center cursor-pointer bg-transparent normal-case h-7 w-7 flex-col justify-center rounded border border-border"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="block align-middle text-muted-foreground">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2.66667C11 2.29848 10.7015 2 10.3333 2H1.66667C1.29848 2 1 2.29848 1 2.66667V2.66667C1 3.03486 1.29848 3.33333 1.66667 3.33333H10.3333C10.7015 3.33333 11 3.03486 11 2.66667V2.66667ZM1 5.92C1 5.54997 1.29997 5.25 1.67 5.25H10.33C10.7 5.25 11 5.54997 11 5.92V6.08C11 6.45003 10.7 6.75 10.33 6.75H1.67C1.29997 6.75 1 6.45003 1 6.08V5.92ZM1 9.33333C1 8.96514 1.29848 8.66667 1.66667 8.66667H10.3333C10.7015 8.66667 11 8.96514 11 9.33333V9.33333C11 9.70152 10.7015 10 10.3333 10H1.66667C1.29848 10 1 9.70152 1 9.33333V9.33333Z" fill="currentColor"></path>
                </svg>
              </button>

              {/* Logo - left aligned */}
              <Link 
                href="/" 
                className="flex items-center h-[70px] justify-start"
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
            <div className="items-center leading-none hidden lg:flex gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="oxide-nav-trigger">
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
                              href="/services"
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
                                <div className="absolute inset-0 bg-[#3b301c] p-3">
                                  <InfrastructureAsciiArt isVisible={showInfrastructureArt} />
                                </div>
                              ) : showSecurityArt ? (
                                <div className="absolute inset-0 bg-[#3b301c] p-3">
                                  <SecurityAsciiArt isVisible={showSecurityArt} />
                                </div>
                              ) : showDevelopmentArt ? (
                                <div className="absolute inset-0 bg-[#3b301c] p-3">
                                  <DevelopmentAsciiArt isVisible={showDevelopmentArt} />
                                </div>
                              ) : showConsultingArt ? (
                                <div className="absolute inset-0 bg-[#3b301c] p-3">
                                  <ConsultingAsciiArt isVisible={showConsultingArt} />
                                </div>
                              ) : showSpecificationsArt ? (
                                <div className="absolute inset-0 bg-[#3b301c] p-3">
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
                          href="/services/infrastructure" 
                          title={t.services.infrastructure.title}
                          serviceKey="infrastructure"
                          onHover={setHoveredService}
                          onShowInfrastructureArt={setShowInfrastructureArt}
                        >
                          {t.services.infrastructure.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/security" 
                          title={t.services.security.title}
                          serviceKey="security"
                          onHover={setHoveredService}
                          onShowSecurityArt={setShowSecurityArt}
                        >
                          {t.services.security.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/development" 
                          title={t.services.development.title}
                          serviceKey="development"
                          onHover={setHoveredService}
                          onShowDevelopmentArt={setShowDevelopmentArt}
                        >
                          {t.services.development.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/consulting" 
                          title={t.services.consulting.title}
                          serviceKey="consulting"
                          onHover={setHoveredService}
                          onShowConsultingArt={setShowConsultingArt}
                        >
                          {t.services.consulting.subtitle}
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/specifications" 
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
                    <NavigationMenuTrigger className="oxide-nav-trigger">
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
                              href="/method"
                              onMouseEnter={(e) => e.stopPropagation()}
                              onMouseLeave={(e) => e.stopPropagation()}
                            >
                              {showBerlinArt ? (
                                <div className="absolute inset-0">
                                  <BerlinAsciiArt isVisible={showBerlinArt} />
                                </div>
                              ) : showPrinciplesArt ? (
                                <div className="absolute inset-0">
                                  <PrinciplesAsciiArt isVisible={showPrinciplesArt} />
                                </div>
                              ) : showImplementationArt ? (
                                <div className="absolute inset-0">
                                  <ImplementationAsciiArt isVisible={showImplementationArt} />
                                </div>
                              ) : showPracticesArt ? (
                                <div className="absolute inset-0">
                                  <PracticesAsciiArt isVisible={showPracticesArt} />
                                </div>
                              ) : showPhilosophyArt ? (
                                <div className="absolute inset-0">
                                  <PhilosophyAsciiArt isVisible={showPhilosophyArt} />
                                </div>
                              ) : (
                                <div className="relative z-10">
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {t.method.default.title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {t.method.default.subtitle}
                                  </p>
                                </div>
                              )}
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <MethodListItem 
                          href="/method/introduction" 
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
                          href="/method/principles" 
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
                          href="/method/implementation" 
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
                          href="/method/practices" 
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
                          href="/method/philosophy" 
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
                    <NavigationMenuTrigger className="oxide-nav-trigger">
                      {t.nav.company}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/about" title={t.company.about.title}>
                          {t.company.about.subtitle}
                        </ListItem>
                        <ListItem href="/work" title={t.company.work.title}>
                          {t.company.work.subtitle}
                        </ListItem>
                        <ListItem href="/company/team" title={t.company.team.title}>
                          {t.company.team.subtitle}
                        </ListItem>
                        <ListItem href="/company/partners" title={t.company.partners.title}>
                          {t.company.partners.subtitle}
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" className="oxide-nav-link">
                        {t.nav.contact}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side CTAs */}
            <div className="items-center justify-end gap-3 hidden lg:flex">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-outline"
              >
                {t.cta.contact}
              </Link>
              <ToolbarSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="px-5 sm:px-10">
            <Link
              href="/services"
              className="oxide-nav-link-mobile"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/method"
              className="oxide-nav-link-mobile"
            >
              {t.nav.method}
            </Link>
            <Link
              href="/company"
              className="oxide-nav-link-mobile"
            >
              {t.nav.company}
            </Link>
            <Link
              href="/contact"
              className="oxide-nav-link-mobile"
            >
              {t.nav.contact}
            </Link>
            <div className="py-4">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-outline w-full text-center"
              >
                {t.cta.getStarted}
              </Link>
            </div>
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
          <div className="oxide-submenu-title">{title}</div>
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
          <div className="oxide-submenu-title">{title}</div>
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
          <div className="oxide-submenu-title">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
MethodListItem.displayName = "MethodListItem"