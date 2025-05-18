'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Script from 'next/script'

export default function HermesUnicornPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [fingerPosition, setFingerPosition] = useState({ x: 0, y: 0 })

  // Define finger positions as percentages for each breakpoint
  const fingerPositions = {
    mobile: { x: 76, y: 48 }, // Adjust these based on actual finger position
    tablet: { x: 74, y: 46 },
    desktop: { x: 72, y: 44 },
    desktopHD: { x: 73, y: 43 },
    desktopRetina: { x: 73, y: 43 }
  }

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return
      
      const width = window.innerWidth
      const height = window.innerHeight
      setDimensions({ width, height })

      // Determine which finger position to use based on breakpoint
      let position = fingerPositions.mobile
      if (width >= 1920) position = fingerPositions.desktopRetina
      else if (width >= 1280) position = fingerPositions.desktopHD
      else if (width >= 768) position = fingerPositions.tablet
      else if (width >= 375) position = fingerPositions.mobile

      setFingerPosition(position)
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-[#d7dadd] hero-background relative min-h-screen">
          <div ref={containerRef} className="relative w-full h-screen">
            {/* Overlay for debugging finger position */}
            <div 
              className="absolute w-4 h-4 bg-red-500 rounded-full opacity-50 pointer-events-none z-50"
              style={{
                left: `${fingerPosition.x}%`,
                top: `${fingerPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
            
            {/* Unicorn Studio effect container */}
            <div 
              className="absolute"
              style={{
                left: `${fingerPosition.x}%`,
                top: `${fingerPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div 
                data-us-project="aTdZ2iREcvCidTnZebRS" 
                style={{ 
                  width: '1440px', 
                  height: '900px',
                  transformOrigin: 'center center'
                }}
                className="scale-50 md:scale-75 lg:scale-100"
              />
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