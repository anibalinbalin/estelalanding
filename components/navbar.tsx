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
import dynamic from "next/dynamic"

// Lazy-load ASCII art components - only loaded when menu is hovered
const BerlinAsciiArt = dynamic(() => import("@/components/ui/berlin-ascii-art").then(m => m.BerlinAsciiArt), { ssr: false })
const PrinciplesAsciiArt = dynamic(() => import("@/components/ui/principles-ascii-art").then(m => m.PrinciplesAsciiArt), { ssr: false })
const ImplementationAsciiArt = dynamic(() => import("@/components/ui/implementation-ascii-art").then(m => m.ImplementationAsciiArt), { ssr: false })
const PracticesAsciiArt = dynamic(() => import("@/components/ui/practices-ascii-art").then(m => m.PracticesAsciiArt), { ssr: false })
const PhilosophyAsciiArt = dynamic(() => import("@/components/ui/philosophy-ascii-art").then(m => m.PhilosophyAsciiArt), { ssr: false })
const InfrastructureAsciiArt = dynamic(() => import("@/components/ui/infrastructure-ascii-art").then(m => m.InfrastructureAsciiArt), { ssr: false })
const SecurityAsciiArt = dynamic(() => import("@/components/ui/security-ascii-art").then(m => m.SecurityAsciiArt), { ssr: false })
const DevelopmentAsciiArt = dynamic(() => import("@/components/ui/development-ascii-art").then(m => m.DevelopmentAsciiArt), { ssr: false })
const ConsultingAsciiArt = dynamic(() => import("@/components/ui/consulting-ascii-art").then(m => m.ConsultingAsciiArt), { ssr: false })
const SpecificationsAsciiArt = dynamic(() => import("@/components/ui/specifications-ascii-art").then(m => m.SpecificationsAsciiArt), { ssr: false })
import { useLanguage } from "@/components/language-provider"
import './navbar-animations.css'

type ServiceKey = 'infrastructure' | 'security' | 'development' | 'consulting' | 'specifications'
type MethodKey = 'introduction' | 'principles' | 'implementation' | 'practices' | 'philosophy'

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
        subtitle: "Where details stop being details.",
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
        subtitle: "Donde los detalles dejan de ser detalles.",
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
        subtitle: "Lo que hacemos. Por qué lo hacemos. Qué evitamos hacer."
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
        subtitle: "Vea algunos casos de nuestro portafolio."
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

const SERVICE_ITEMS: { key: ServiceKey; path: string }[] = [
  { key: 'infrastructure', path: '/services/infrastructure' },
  { key: 'security', path: '/services/security' },
  { key: 'development', path: '/services/development' },
  { key: 'consulting', path: '/services/consulting' },
  { key: 'specifications', path: '/services/specifications' },
]

const METHOD_ITEMS: { key: MethodKey; path: string }[] = [
  { key: 'introduction', path: '/method/introduction' },
  { key: 'principles', path: '/method/principles' },
  { key: 'implementation', path: '/method/implementation' },
  { key: 'practices', path: '/method/practices' },
  { key: 'philosophy', path: '/method/philosophy' },
]

const COMPANY_ITEMS = [
  { key: 'about' as const, path: '/company/about' },
  { key: 'work' as const, path: '/company/work' },
  { key: 'team' as const, path: '/company/team' },
  { key: 'partners' as const, path: '/company/partners' },
]

function ChevronIcon(): React.ReactElement {
  return (
    <svg width="12" height="12" className="block align-middle">
      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function HamburgerIcon(): React.ReactElement {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="block align-middle text-muted-foreground">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 2.66667C11 2.29848 10.7015 2H10.3333H1.66667C1.29848 2 1 2.29848 1 2.66667V2.66667C1 3.03486 1.29848 3.33333 1.66667 3.33333H10.3333C10.7015 3.33333 11 3.03486 11 2.66667V2.66667ZM1 5.92C1 5.54997 1.29997 5.25 1.67 5.25H10.33C10.7 5.25 11 5.54997 11 5.92V6.08C11 6.45003 10.7 6.75 10.33 6.75H1.67C1.29997 6.75 1 6.45003 1 6.08V5.92ZM1 9.33333C1 8.96514 1.29848 8.66667 1.66667 8.66667H10.3333C10.7015 8.66667 11 8.96514 11 9.33333V9.33333C11 9.70152 10.7015 10 10.3333 10H1.66667C1.29848 10 1 9.70152 1 9.33333V9.33333Z" fill="currentColor"></path>
    </svg>
  )
}

function renderServiceAsciiArt(activeService: ServiceKey | null): React.ReactNode {
  if (!activeService) return null

  switch (activeService) {
    case 'infrastructure':
      return <InfrastructureAsciiArt isVisible />
    case 'security':
      return <SecurityAsciiArt isVisible />
    case 'development':
      return <DevelopmentAsciiArt isVisible />
    case 'consulting':
      return <ConsultingAsciiArt isVisible />
    case 'specifications':
      return <SpecificationsAsciiArt isVisible />
  }
}

function renderMethodAsciiArt(activeMethod: MethodKey | null): React.ReactNode {
  if (!activeMethod) return null

  switch (activeMethod) {
    case 'introduction':
      return <BerlinAsciiArt isVisible />
    case 'principles':
      return <PrinciplesAsciiArt isVisible />
    case 'implementation':
      return <ImplementationAsciiArt isVisible />
    case 'practices':
      return <PracticesAsciiArt isVisible />
    case 'philosophy':
      return <PhilosophyAsciiArt isVisible />
  }
}

interface MobileAccordionProps {
  label: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function MobileAccordion({ label, isOpen, onToggle, children }: MobileAccordionProps): React.ReactElement {
  return (
    <div className="text-left">
      <h3 className="text-balance m-0 text-inherit font-inherit">
        <button
          type="button"
          className="py-5 text-left items-center flex w-full cursor-pointer bg-transparent uppercase font-mono text-xs font-normal leading-4 tracking-wider text-muted-foreground m-0 p-0 justify-between border-b hover:opacity-80 px-5 sm:px-10"
          onClick={onToggle}
        >
          <span className="w-3/4">{label}</span>
          <span className={cn(
            "text-muted-foreground transform transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)]",
            isOpen && "rotate-90"
          )}>
            <ChevronIcon />
          </span>
        </button>
      </h3>
      {isOpen && (
        <div className="overflow-hidden">
          <div className="pl-5 sm:pl-10">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

interface MobileLinkProps {
  href: string
  onClick: () => void
  children: React.ReactNode
  isLast?: boolean
}

function MobileLink({ href, onClick, children, isLast }: MobileLinkProps): React.ReactElement {
  return (
    <Link
      href={href}
      className={cn(
        "block py-3 pr-5 sm:pr-10 text-sm text-muted-foreground hover:text-foreground transition-colors",
        isLast && "border-b"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export function Navbar(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)
  const [mobileMethodOpen, setMobileMethodOpen] = React.useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = React.useState(false)
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimated, setIsAnimated] = React.useState(false)
  const [activeService, setActiveService] = React.useState<ServiceKey | null>(null)
  const [activeMethod, setActiveMethod] = React.useState<MethodKey | null>(null)

  React.useEffect(() => {
    setMounted(true)
    setIsAnimated(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png"
  const t = content[language]

  function closeMobileMenu(): void {
    setMobileMenuOpen(false)
  }

  function toggleMobileMenu(): void {
    if (mobileMenuOpen) {
      setMobileServicesOpen(false)
      setMobileMethodOpen(false)
      setMobileCompanyOpen(false)
    }
    setMobileMenuOpen(!mobileMenuOpen)
  }

  function resetServicesHover(): void {
    setActiveService(null)
  }

  function resetMethodHover(): void {
    setActiveMethod(null)
  }

  return (
    <nav className={cn(
      "relative z-50 w-full",
      !pathname?.startsWith('/services') && "border-b",
      isAnimated ? "navbar-animated" : "opacity-0"
    )}>
      <div className="flex h-14 sm:h-16 lg:h-20 items-center px-5 sm:px-10">
        <div className="relative w-full">
          <div className="flex w-full items-center justify-between list-none m-auto p-0 max-w-[1200px]">
            {/* Left section: Mobile menu button + Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex lg:hidden items-center cursor-pointer bg-transparent normal-case h-7 w-7 flex-col justify-center rounded border border-border"
                onClick={toggleMobileMenu}
              >
                <HamburgerIcon />
              </button>

              <Link
                href="/"
                className={cn(
                  "flex items-center h-[58px] sm:h-[69px] lg:h-[80px] justify-start",
                  isAnimated ? "navbar-logo" : "opacity-0"
                )}
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
            <div className={cn(
              "items-center leading-none hidden lg:flex gap-1",
              isAnimated ? "navbar-nav-items" : "opacity-0"
            )}>
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Services Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="estela-nav-trigger">
                      {t.nav.services}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent onMouseLeave={resetServicesHover}>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-5">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md min-h-[300px] relative overflow-hidden p-3"
                              href="/services"
                              onMouseEnter={resetServicesHover}
                            >
                              {activeService ? (
                                <div className="absolute inset-0">
                                  {renderServiceAsciiArt(activeService)}
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
                        {SERVICE_ITEMS.map(({ key, path }) => (
                          <ListItem
                            key={key}
                            href={path}
                            title={t.services[key].title}
                            onMouseEnter={() => setActiveService(key)}
                            onMouseLeave={resetServicesHover}
                          >
                            {t.services[key].subtitle}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Method Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="estela-nav-trigger">
                      {t.nav.method}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent onMouseLeave={resetMethodHover}>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-6">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md min-h-[300px] relative overflow-hidden"
                              href="/method"
                            >
                              {activeMethod ? (
                                <div className="absolute inset-0">
                                  {renderMethodAsciiArt(activeMethod)}
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
                        {METHOD_ITEMS.map(({ key, path }) => (
                          <ListItem
                            key={key}
                            href={path}
                            title={t.method[key].title}
                            onMouseEnter={() => setActiveMethod(key)}
                            onMouseLeave={resetMethodHover}
                          >
                            {t.method[key].subtitle}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Company Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="estela-nav-trigger">
                      {t.nav.company}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {COMPANY_ITEMS.map(({ key, path }) => (
                          <ListItem key={key} href={path} title={t.company[key].title}>
                            {t.company[key].subtitle}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Contact Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" className="estela-nav-link flex-row">
                        {t.nav.contact}
                        <kbd className="text-xs font-mono bg-secondary/50 px-1 py-0.5 rounded">C</kbd>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side CTAs */}
            <div className={cn(
              "items-center justify-end gap-3 flex",
              isAnimated ? "navbar-toolbar" : "opacity-0"
            )}>
              <ToolbarSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div>
            {/* Services */}
            <MobileAccordion
              label={t.nav.services}
              isOpen={mobileServicesOpen}
              onToggle={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              {SERVICE_ITEMS.map(({ key, path }, index) => (
                <MobileLink
                  key={key}
                  href={path}
                  onClick={closeMobileMenu}
                  isLast={index === SERVICE_ITEMS.length - 1}
                >
                  {t.services[key].title}
                </MobileLink>
              ))}
            </MobileAccordion>

            {/* Method */}
            <MobileAccordion
              label={t.nav.method}
              isOpen={mobileMethodOpen}
              onToggle={() => setMobileMethodOpen(!mobileMethodOpen)}
            >
              {METHOD_ITEMS.map(({ key, path }, index) => (
                <MobileLink
                  key={key}
                  href={path}
                  onClick={closeMobileMenu}
                  isLast={index === METHOD_ITEMS.length - 1}
                >
                  {t.method[key].title}
                </MobileLink>
              ))}
            </MobileAccordion>

            {/* Company */}
            <MobileAccordion
              label={t.nav.company}
              isOpen={mobileCompanyOpen}
              onToggle={() => setMobileCompanyOpen(!mobileCompanyOpen)}
            >
              {COMPANY_ITEMS.map(({ key, path }, index) => (
                <MobileLink
                  key={key}
                  href={path}
                  onClick={closeMobileMenu}
                  isLast={index === COMPANY_ITEMS.length - 1}
                >
                  {t.company[key].title}
                </MobileLink>
              ))}
            </MobileAccordion>

            {/* Contact link */}
            <Link
              href="/contact"
              className="flex items-center justify-between py-5 px-5 sm:px-10 text-left uppercase font-mono text-xs font-normal leading-4 tracking-wider text-muted-foreground hover:opacity-80 border-b"
              onClick={closeMobileMenu}
            >
              <span>{t.nav.contact}</span>
              <kbd className="text-xs font-mono bg-secondary/50 px-1 py-0.5 rounded">C</kbd>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string
  children: React.ReactNode
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  function ListItem({ className, title, children, ...props }, ref) {
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
  }
)
