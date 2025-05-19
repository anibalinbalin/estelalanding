'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Define the finger position as a percentage from the top-left of each image
const fingerPositions = {
    mobileLow: { x: 50, y: 50 },
    mobile: { x: 76, y: 48 },
    tablet: { x: 74, y: 46 },
    desktopHD: { x: 39.3, y: 20.6 },
    desktopRetina: { x: 73, y: 43 }
}

// Define the aspect ratios of each background image
const imageAspectRatios = {
    mobileLow: 9/16,    // Portrait
    mobile: 9/16,       // Portrait
    tablet: 4/3,        // Landscape
    desktopHD: 16/9,    // Widescreen
    desktopRetina: 16/9 // Widescreen
}

export default function HeroSectionAspectRatio() {
    const [breakpoint, setBreakpoint] = useState('desktopHD')
    
    useEffect(() => {
        const detectBreakpoint = () => {
            const width = window.innerWidth
            if (width < 375) return 'mobileLow'
            if (width < 768) return 'mobile'
            if (width < 1280) return 'tablet'
            if (width < 1920) return 'desktopHD'
            return 'desktopRetina'
        }
        
        const handleResize = () => {
            setBreakpoint(detectBreakpoint())
        }
        
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    const position = fingerPositions[breakpoint]
    const aspectRatio = imageAspectRatios[breakpoint]
    
    return (
        <>
            <main className="overflow-x-hidden">
                <section 
                    className="hero-background relative"
                    style={{ minHeight: '100vh' }}
                >
                    {/* Container with aspect ratio */}
                    <div 
                        className="absolute inset-0"
                        style={{
                            aspectRatio: aspectRatio,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    >
                        {/* Effect positioned using transform-origin */}
                        <div 
                            className="absolute unicorn-mask-fade"
                            data-us-project="3nh1j6pbHTPEnBpAb48a"
                            style={{
                                width: '1440px',
                                height: '900px',
                                left: `${position.x}%`,
                                top: `${position.y}%`,
                                transform: 'translate(-50%, -50%)',
                                transformOrigin: `${position.x}% ${position.y}%`,
                                mixBlendMode: 'screen',
                                pointerEvents: 'none',
                                zIndex: 1
                            }}
                        />
                    </div>
                    
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 relative z-10">
                        {/* Your content here */}
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