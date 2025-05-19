'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSectionBgPosition() {
    const [effectStyle, setEffectStyle] = useState({})
    const sectionRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        const updatePosition = () => {
            if (!sectionRef.current) return
            
            // Get computed background position
            const computedStyle = window.getComputedStyle(sectionRef.current)
            const bgPosition = computedStyle.backgroundPosition
            const bgSize = computedStyle.backgroundSize
            
            // Parse background position (e.g., "right center" or "100% 50%")
            let bgPosX = 100 // Default right
            let bgPosY = 50  // Default center
            
            if (bgPosition.includes('%')) {
                const positions = bgPosition.split(' ')
                bgPosX = parseFloat(positions[0])
                bgPosY = parseFloat(positions[1])
            }
            
            // Calculate container dimensions
            const containerWidth = sectionRef.current.offsetWidth
            const containerHeight = sectionRef.current.offsetHeight
            
            // Define relative finger positions for each breakpoint
            const width = window.innerWidth
            let fingerRelativeX, fingerRelativeY, scale
            
            if (width < 375) {
                fingerRelativeX = 0.5
                fingerRelativeY = 0.5
                scale = 0.4
            } else if (width < 768) {
                fingerRelativeX = 0.76
                fingerRelativeY = 0.48
                scale = 0.5
            } else if (width < 1280) {
                fingerRelativeX = 0.74
                fingerRelativeY = 0.46
                scale = 0.75
            } else if (width < 1920) {
                fingerRelativeX = 0.393
                fingerRelativeY = 0.206
                scale = 1
            } else {
                fingerRelativeX = 0.73
                fingerRelativeY = 0.43
                scale = 1.2
            }
            
            // Adjust position based on background alignment
            let effectX = fingerRelativeX * 100
            let effectY = fingerRelativeY * 100
            
            // If background is positioned to the right, adjust accordingly
            if (bgPosX === 100) { // right aligned
                effectX = containerWidth - (containerWidth * (1 - fingerRelativeX))
                effectX = (effectX / containerWidth) * 100
            }
            
            setEffectStyle({
                position: 'absolute',
                width: '1440px',
                height: '900px',
                left: `${effectX}%`,
                top: `${effectY}%`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                mixBlendMode: 'screen',
                pointerEvents: 'none',
                zIndex: 1
            })
        }
        
        updatePosition()
        
        // Listen for resize events
        window.addEventListener('resize', updatePosition)
        
        // Also listen for image load to ensure correct positioning
        const checkImageLoad = setInterval(() => {
            if (sectionRef.current) {
                const bgImage = window.getComputedStyle(sectionRef.current).backgroundImage
                if (bgImage !== 'none') {
                    updatePosition()
                    clearInterval(checkImageLoad)
                }
            }
        }, 100)
        
        return () => {
            window.removeEventListener('resize', updatePosition)
            clearInterval(checkImageLoad)
        }
    }, [])
    
    return (
        <>
            <main className="overflow-x-hidden">
                <section 
                    ref={sectionRef}
                    className="hero-background relative min-h-screen"
                >
                    <div 
                        className="unicorn-mask-fade"
                        data-us-project="3nh1j6pbHTPEnBpAb48a"
                        style={effectStyle}
                    />
                    
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