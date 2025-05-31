"use client"

import * as React from "react"
import Link from "next/link"
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

// ASCII art data for services
const serviceArt = {
  infrastructure: `    ┌────────────────────────────────────┐
    │     ┌─────┐     ┌─────┐           │
    │     │ ███ │────►│ ███ │           │
    │     └─────┘     └─────┘           │
    │         │         │                │
    │    ┌────┴────────┴────┐           │
    │    │  ███████████████  │          │
    │    └───────────────────┘          │
    └────────────────────────────────────┘`,
  security: `    ╔═══════════════════════════╗
    ║  ┌───┐  ┌───┐  ┌───┐    ║
    ║  │ 🔒│  │ 🔒│  │ 🔒│    ║
    ║  └───┘  └───┘  └───┘    ║
    ║      PROTECTED           ║
    ╚═══════════════════════════╝`,
  development: `    < / >  { }  [ ]  ( )
    ─────────────────────
    const solution = async () => {
      await transform(business);
    }`,
  consulting: `      24/7
    ┌─────┐
    │ YOU │◄──── 2hrs ────►│ US │
    └─────┘
      365`,
  specifications: `    ┌─ REQUIREMENTS ────────────┐
    │ ✓ Performance targets     │
    │ ✓ Security standards      │
    │ ✓ Integration points      │
    │ ✓ Compliance rules        │
    └───────────────────────────┘`
}

const serviceDescriptions = {
  default: {
    title: "Our Services",
    subtitle: "Technology solutions designed for your business needs."
  },
  infrastructure: {
    title: "Infrastructure & Networks",
    subtitle: "The foundation of everything digital. We build networks that never make you think about networks."
  },
  security: {
    title: "Cloud & Security", 
    subtitle: "Protection isn't paranoia. It's preparation. We secure your data, your premises, and your peace of mind."
  },
  development: {
    title: "Development & AI",
    subtitle: "Custom solutions for unique challenges. We build the tools your business needs to thrive."
  },
  consulting: {
    title: "Consulting & Support",
    subtitle: "Your technology partner, not just another vendor. From strategic planning to daily support."
  },
  specifications: {
    title: "Technical Specifications",
    subtitle: "Detailed technical documentation and requirements analysis for complex implementations."
  }
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [hoveredService, setHoveredService] = React.useState<string>('default')
  
  // Only show theme-dependent content after mounting
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png"

  return (
    <nav className="relative z-50 w-full">
      <div className="flex h-20 items-center px-5 sm:px-10">
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
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent 
                      onMouseLeave={() => setHoveredService('default')}
                    >
                      <ul className="grid gap-3 p-6 services-menu-content lg:grid-cols-[320px_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md h-[320px] w-[320px] service-content-area"
                              href="/services"
                            >
                              <div className="space-y-4 h-full flex flex-col">
                                <div className="mb-2 text-lg font-medium min-h-[2.5rem] flex items-center">
                                  {serviceDescriptions[hoveredService as keyof typeof serviceDescriptions].title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground flex-shrink-0 min-h-[3rem]">
                                  {serviceDescriptions[hoveredService as keyof typeof serviceDescriptions].subtitle}
                                </p>
                                <div className="mt-4 p-3 bg-background/50 rounded border flex-1 min-h-[140px] flex items-center justify-center">
                                  {hoveredService !== 'default' ? (
                                    <pre className="navigation-ascii-art">
                                      {serviceArt[hoveredService as keyof typeof serviceArt]}
                                    </pre>
                                  ) : (
                                    <div className="text-center text-muted-foreground/60 text-sm">
                                      Hover over a service to see preview
                                    </div>
                                  )}
                                </div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ServiceListItem 
                          href="/services/infrastructure" 
                          title="Infrastructure"
                          serviceKey="infrastructure"
                          onHover={setHoveredService}
                        >
                          Robust and scalable infrastructure solutions.
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/security" 
                          title="Security"
                          serviceKey="security"
                          onHover={setHoveredService}
                        >
                          Comprehensive security and protection services.
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/development" 
                          title="Development"
                          serviceKey="development"
                          onHover={setHoveredService}
                        >
                          Custom software development and solutions.
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/consulting" 
                          title="Consulting"
                          serviceKey="consulting"
                          onHover={setHoveredService}
                        >
                          Expert technology consulting and guidance.
                        </ServiceListItem>
                        <ServiceListItem 
                          href="/services/specifications" 
                          title="Specifications"
                          serviceKey="specifications"
                          onHover={setHoveredService}
                        >
                          Detailed technical specifications and requirements.
                        </ServiceListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="oxide-nav-trigger">
                      Method
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/method"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                The Estela Method
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Our proven approach to technology transformation.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/method/introduction" title="Introduction">
                          Learn about our methodology and approach.
                        </ListItem>
                        <ListItem href="/method/principles" title="Principles">
                          The core principles that guide our work.
                        </ListItem>
                        <ListItem href="/method/implementation" title="Implementation">
                          How we implement solutions for clients.
                        </ListItem>
                        <ListItem href="/method/practices" title="Practices">
                          Best practices and proven methodologies.
                        </ListItem>
                        <ListItem href="/method/philosophy" title="Philosophy">
                          Our philosophy on technology and business.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="oxide-nav-trigger">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/company/about" title="About">
                          Learn about our mission and values.
                        </ListItem>
                        <ListItem href="/company/work" title="Work">
                          See our portfolio and case studies.
                        </ListItem>
                        <ListItem href="/company/team" title="Team">
                          Meet the people behind Estela.
                        </ListItem>
                        <ListItem href="/company/partners" title="Partners">
                          Our trusted technology partners.
                        </ListItem>
                        <ListItem href="/company/blog" title="Blog">
                          Latest insights and thoughts.
                        </ListItem>
                        <ListItem href="/company/press" title="Press">
                          Media resources and press releases.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/contact" className="oxide-nav-link">
                        Contact
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
                Contact
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
              Services
            </Link>
            <Link
              href="/method"
              className="oxide-nav-link-mobile"
            >
              Method
            </Link>
            <Link
              href="/company"
              className="oxide-nav-link-mobile"
            >
              Company
            </Link>
            <Link
              href="/contact"
              className="oxide-nav-link-mobile"
            >
              Contact
            </Link>
            <div className="py-4">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-outline w-full text-center"
              >
                Get Started
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
  }
>(({ className, title, children, serviceKey, onHover, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          onMouseEnter={() => onHover(serviceKey)}
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