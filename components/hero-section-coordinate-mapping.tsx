'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Define the exact pixel coordinates of the finger in each image
const fingerPixelCoordinates = {
    mobileLow: { x: 180, y: 320, imageWidth: 360, imageHeight: 640 },
    mobile: { x: 274, y: 307, imageWidth: 360, imageHeight: 640 },
    tablet: { x: 592, y: 460, imageWidth: 800, imageHeight: 1000 },
    desktopHD: { x: 628, y: 330, imageWidth: 1600, imageHeight: 1600 },
    desktopRetina: { x: 1460, y: 860, imageWidth: 2000, imageHeight: 2000 }
}

export default function HeroSectionCoordinateMapping() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [effectPosition, setEffectPosition] = useState({ x: 0, y: 0 })
    const [scale, setScale] = useState(1)
    
    useEffect(() => {
        const calculatePosition = () => {
            if (!containerRef.current) return
            
            const containerWidth = containerRef.current.offsetWidth
            const containerHeight = containerRef.current.offsetHeight
            
            // Determine which image/coordinates to use
            const width = window.innerWidth
            let coords
            if (width < 375) coords = fingerPixelCoordinates.mobileLow
            else if (width < 768) coords = fingerPixelCoordinates.mobile
            else if (width < 1280) coords = fingerPixelCoordinates.tablet
            else if (width < 1920) coords = fingerPixelCoordinates.desktopHD
            else coords = fingerPixelCoordinates.desktopRetina
            
            // Calculate the background image's actual displayed size
            const aspectRatio = coords.imageWidth / coords.imageHeight
            let displayWidth, displayHeight
            
            // Assuming background-size: cover
            if (containerWidth / containerHeight > aspectRatio) {
                displayWidth = containerWidth
                displayHeight = containerWidth / aspectRatio
            } else {
                displayHeight = containerHeight
                displayWidth = containerHeight * aspectRatio
            }
            
            // Calculate offset if image is centered
            const offsetX = (containerWidth - displayWidth) / 2
            const offsetY = (containerHeight - displayHeight) / 2
            
            // Map the finger coordinates to the displayed image
            const fingerX = offsetX + (coords.x / coords.imageWidth) * displayWidth
            const fingerY = offsetY + (coords.y / coords.imageHeight) * displayHeight
            
            // Convert to percentages
            const percentX = (fingerX / containerWidth) * 100
            const percentY = (fingerY / containerHeight) * 100
            
            setEffectPosition({ x: percentX, y: percentY })
            
            // Calculate scale based on screen size
            const baseScale = Math.min(containerWidth / 1440, containerHeight / 900)
            setScale(Math.max(0.4, Math.min(1.2, baseScale)))
        }
        
        calculatePosition()
        window.addEventListener('resize', calculatePosition)
        return () => window.removeEventListener('resize', calculatePosition)
    }, [])
    
    return (
        <>
            <main className="overflow-x-hidden">
                <section className="hero-background relative">
                    <div ref={containerRef} className="absolute inset-0">
                        {/* The effect positioned based on calculated coordinates */}
                        <div 
                            className="absolute unicorn-mask-fade"
                            data-us-project="3nh1j6pbHTPEnBpAb48a"
                            style={{
                                width: '1440px',
                                height: '900px',
                                left: `${effectPosition.x}%`,
                                top: `${effectPosition.y}%`,
                                transform: `translate(-50%, -50%) scale(${scale})`,
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