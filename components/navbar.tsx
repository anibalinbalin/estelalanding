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

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  
  // Only show theme-dependent content after mounting
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logos/logo_blanco.png" : "/logos/logo_original.png"

  return (
    <nav className="relative z-10 w-full">
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
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Our Platform
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Build modern applications with cutting-edge technology.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/features" title="Features">
                          Explore our comprehensive feature set.
                        </ListItem>
                        <ListItem href="/solutions" title="Solutions">
                          Industry-specific solutions for your needs.
                        </ListItem>
                        <ListItem href="/pricing" title="Pricing">
                          Simple, transparent pricing plans.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="oxide-nav-trigger">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <ListItem href="/docs" title="Documentation">
                          Comprehensive guides and API references.
                        </ListItem>
                        <ListItem href="/tutorials" title="Tutorials">
                          Step-by-step tutorials to get started.
                        </ListItem>
                        <ListItem href="/community" title="Community">
                          Join our vibrant developer community.
                        </ListItem>
                        <ListItem href="/support" title="Support">
                          Get help when you need it.
                        </ListItem>
                        <ListItem href="/changelog" title="Changelog">
                          See what's new and improved.
                        </ListItem>
                        <ListItem href="/roadmap" title="Roadmap">
                          Discover what's coming next.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="oxide-nav-trigger">
                      Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <ListItem href="/about" title="About">
                          Learn about our mission and values.
                        </ListItem>
                        <ListItem href="/blog" title="Blog">
                          Latest news and insights.
                        </ListItem>
                        <ListItem href="/press" title="Press">
                          Media resources and press releases.
                        </ListItem>
                        <ListItem href="/partners" title="Partners">
                          Our ecosystem of partners.
                        </ListItem>
                        <ListItem href="/contact" title="Contact">
                          Get in touch with our team.
                        </ListItem>
                        <ListItem href="/legal" title="Legal">
                          Terms, privacy, and policies.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="oxide-nav-trigger">
                      Podcasts
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <ListItem href="/podcasts/oxide-friends" title="Oxide and Friends">
                          Weekly discussions about technology and computing.
                        </ListItem>
                        <ListItem href="/podcasts/on-the-metal" title="On the Metal">
                          Tales from the hardware and software frontier.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/blog" className="oxide-nav-link">
                        Blog
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
              href="/product"
              className="oxide-nav-link-mobile"
            >
              Product
            </Link>
            <Link
              href="/resources"
              className="oxide-nav-link-mobile"
            >
              Resources
            </Link>
            <Link
              href="/company"
              className="oxide-nav-link-mobile"
            >
              Company
            </Link>
            <Link
              href="/podcasts"
              className="oxide-nav-link-mobile"
            >
              Podcasts
            </Link>
            <Link
              href="/blog"
              className="oxide-nav-link-mobile"
            >
              Blog
            </Link>
            <div className="py-4">
              <Link 
                href="/contact" 
                className="oxide-nav-button oxide-nav-button-outline w-full text-center"
              >
                Contact us
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