'use client'

import React, { useState, useRef, useEffect } from 'react'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function PositionTestPage() {
  const [showControls, setShowControls] = useState(true)
  const [fingerPosition, setFingerPosition] = useState({ x: 73, y: 43 })
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setFingerPosition({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((touch.clientX - rect.left) / rect.width) * 100
    const y = ((touch.clientY - rect.top) / rect.height) * 100
    
    setFingerPosition({ 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    })
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    
    window.addEventListener('mouseup', handleGlobalMouseUp)
    window.addEventListener('touchend', handleGlobalMouseUp)
    
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp)
      window.removeEventListener('touchend', handleGlobalMouseUp)
    }
  }, [])

  return (
    <>
      <main className="overflow-hidden">
        <section 
          ref={containerRef}
          className="bg-[#d7dadd] hero-background relative min-h-screen"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <div className="relative w-full h-screen">
            {/* Draggable red dot */}
            <div 
              className="absolute w-8 h-8 bg-red-500 rounded-full cursor-move z-50"
              style={{
                left: `${fingerPosition.x}%`,
                top: `${fingerPosition.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            />
            
            {/* Unicorn Studio effect fullscreen */}
            <div 
              data-us-project="aTdZ2iREcvCidTnZebRS" 
              style={{ 
                width: '100vw', 
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
          </div>
        </section>
      </main>

      {showControls && (
        <div className="fixed top-4 right-4 bg-white border rounded-lg p-4 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Position</h2>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowControls(false)}
            >
              Hide
            </Button>
          </div>
          
          <div className="space-y-2">
            <div>
              <Label className="text-sm">X: {fingerPosition.x.toFixed(1)}%</Label>
            </div>
            <div>
              <Label className="text-sm">Y: {fingerPosition.y.toFixed(1)}%</Label>
            </div>
          </div>
          
          <Button
            className="w-full mt-4"
            onClick={() => {
              navigator.clipboard.writeText(`{ x: ${fingerPosition.x.toFixed(1)}, y: ${fingerPosition.y.toFixed(1)} }`)
              alert('Position copied to clipboard!')
            }}
          >
            Copy Position
          </Button>
        </div>
      )}
      
      {!showControls && (
        <Button
          className="fixed top-4 right-4 z-50"
          onClick={() => setShowControls(true)}
        >
          Show Controls
        </Button>
      )}

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