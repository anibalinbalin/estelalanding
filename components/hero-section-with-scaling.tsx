'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { useTheme } from 'next-themes'
import { useIsMobile } from '@/hooks/use-mobile'

// Your calibrated positions
const savedPositions = {
    mobileLow: { x: 65, y: 50 }, // Moved right by 15%
    mobile: { x: 61.6, y: 30.5 }, // Moved right by 15%,
    tablet: { x: 67.3, y: 35.9 },
    desktopHD: { x: 72, y: 19.7 },
    desktopRetina: { x: 72, y: 19.1 }
}

// Scale factors for the effect at different breakpoints
const scaleFactors = {
    mobileLow: 0.3,
    mobile: 0.4,
    tablet: 0.6,
    desktopHD: 0.85,
    desktopRetina: 1
}

// Complete list of all logos
const logoList = [
    { filename: 'aparato.svg', alt: 'Aparato Logo' },
    { filename: 'cce.png', alt: 'CCE Logo' },
    { filename: 'diagnostico.png', alt: 'Diagnóstico Logo' },
    { filename: 'dominio.png', alt: 'Dominio Logo' },
    { filename: 'lamayor.png', alt: 'La Mayor Logo' },
    { filename: 'oriental.svg', alt: 'Oriental Logo' },
    { filename: 'sodre.svg', alt: 'SODRE Logo' },
    { filename: 'verne.png', alt: 'Verne Logo' },
    { filename: 'avisa.png', alt: 'Avisa Logo' },
    { filename: 'box.png', alt: 'Box Logo' },
    { filename: 'cimarron.png', alt: 'Cimarron Logo' },
    { filename: 'donobldulio.png', alt: 'Don Obldulio Logo' },
    { filename: 'dsr360.png', alt: 'DSR360 Logo' },
    { filename: 'fullcat.png', alt: 'FullCat Logo' },
    { filename: 'mueca.svg', alt: 'Mueca Logo' },
    { filename: 'olivera.png', alt: 'Olivera Logo' },
    { filename: 'orben.png', alt: 'Orben Logo' },
    { filename: 'plataforma.png', alt: 'Plataforma Logo' },
    { filename: 'producrers.png', alt: 'Producers Logo' },
    { filename: 'sidleyjones.png', alt: 'Sidley Jones Logo' },
    { filename: 'tafirel.svg', alt: 'Tafirel Logo' },
    { filename: 'ufilms.png', alt: 'U Films Logo' }
]

const breakpoints = {
    mobileLow: { name: 'Mobile Low', minWidth: 0, maxWidth: 374 },
    mobile: { name: 'Mobile', minWidth: 375, maxWidth: 767 },
    tablet: { name: 'Tablet', minWidth: 768, maxWidth: 1279 },
    desktopHD: { name: 'Desktop HD', minWidth: 1280, maxWidth: 1919 },
    desktopRetina: { name: 'Desktop Retina', minWidth: 1920, maxWidth: Infinity }
} as const

type BreakpointKey = keyof typeof breakpoints

export default function HeroSectionWithScaling() {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey>('desktopHD')
    const [effectPosition, setEffectPosition] = useState(savedPositions.desktopHD)
    const [effectScale, setEffectScale] = useState(scaleFactors.desktopHD)
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const isMobile = useIsMobile()
    
    // Function to get the correct logo path based on theme
    const getLogoPath = (logoName: string) => {
        const currentTheme = theme === 'system' ? systemTheme : theme
        const themeFolder = currentTheme === 'dark' ? 'dark' : 'light'
        return `/logos/${themeFolder}/${logoName}`
    }
    
    // Ensure component is mounted before showing theme-dependent content
    useEffect(() => {
        setMounted(true)
    }, [])

    // Detect current breakpoint
    const detectBreakpoint = (): BreakpointKey => {
        const width = window.innerWidth
        for (const [key, value] of Object.entries(breakpoints)) {
            if (width >= value.minWidth && width <= value.maxWidth) {
                return key as BreakpointKey
            }
        }
        return 'desktopHD'
    }

    // Update position based on breakpoint
    useEffect(() => {
        const handleResize = () => {
            const bp = detectBreakpoint()
            setCurrentBreakpoint(bp)
            setEffectPosition(savedPositions[bp])
            setEffectScale(scaleFactors[bp])
        }
        
        handleResize() // Initial detection
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <main className="overflow-x-hidden">
                <section className="hero-background relative">
                    {/* Unicorn Studio effect positioned based on breakpoint */}
                    <div 
                        data-us-project="3nh1j6pbHTPEnBpAb48a" 
                        style={{ 
                            width: '1440px', 
                            height: '900px',
                            position: 'absolute',
                            left: `${effectPosition.x}%`,
                            top: `${effectPosition.y}%`,
                            transform: `translate(-50%, -50%) scale(${effectScale})`,
                            mixBlendMode: 'screen',
                            pointerEvents: 'none',
                            zIndex: 1,
                            transition: 'all 0.3s ease-out'
                        }}
                        className="unicorn-mask-fade"
                    />
                    
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 relative z-10">
                        <div className="relative mx-auto max-w-6xl px-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                <div className="mx-auto max-w-lg text-left lg:mx-0 lg:w-full">
                                    {/* Estela Logo at the top */}
                                    <div className="mb-8 flex justify-start">
                                        <Image
                                            src="/pick!zul_alpha.png"
                                            alt="Estela Logo"
                                            width={200}
                                            height={80}
                                            className={`h-auto ${isMobile ? 'w-24' : 'w-48'}`}
                                        />
                                    </div>
                                    
                                    <div className="w-[60%] sm:w-[60%] md:w-[70%] lg:w-full">
                                        <h1 className="mt-8 text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">When technology meets wisdom</h1>
                                        <p className="mt-8 text-pretty text-lg">Highly customizable components for building modern websites and applications that look and feel the way you mean it.</p>
                                    </div>

                                    <div className="mt-12 flex justify-start">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="default"
                                            className="px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Contact Us</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Providing knowledge to the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)] overflow-hidden">
                                <InfiniteSlider
                                    speedOnHover={isMobile ? 50 : 30}
                                    speed={isMobile ? 80 : 50}
                                    gap={48}
                                    className="transform-gpu">
                                    {logoList.map((logo, index) => (
                                        <div key={index} className="flex items-center h-8 sm:h-10 md:h-12">
                                            <img
                                                className="h-full w-auto object-contain transform-gpu"
                                                src={mounted ? getLogoPath(logo.filename) : `/logos/light/${logo.filename}`}
                                                alt={logo.alt}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </InfiniteSlider>

                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-20"
                                    direction="left"
                                    blurIntensity={0.8}
                                    blurLayers={6}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-20"
                                    direction="right"
                                    blurIntensity={0.8}
                                    blurLayers={6}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Script
                id="unicorn-studio"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.20/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                    `,
                }}
            />
        </>
    )
}