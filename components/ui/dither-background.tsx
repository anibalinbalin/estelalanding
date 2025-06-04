'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface DitherBackgroundProps {
  className?: string
  density?: number
  opacity?: number
}

export function DitherBackground({ 
  className = '', 
  density = 0.3,
  opacity = 0.1
}: DitherBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      drawDither()
    }

    const drawDither = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const isDark = resolvedTheme === 'dark'
      const dotColor = isDark ? 'rgba(255, 255, 255, ' + opacity + ')' : 'rgba(0, 0, 0, ' + opacity + ')'
      
      // Create dither pattern using Floyd-Steinberg-inspired distribution
      const dotSize = 1
      const spacing = 3

      for (let y = 0; y < rect.height; y += spacing) {
        for (let x = 0; x < rect.width; x += spacing) {
          // Create organic randomness with some structure
          const noise = Math.random()
          const structuredNoise = (Math.sin(x * 0.01) + Math.cos(y * 0.01)) * 0.1 + 0.5
          const finalNoise = (noise + structuredNoise) / 2

          if (finalNoise < density) {
            ctx.fillStyle = dotColor
            ctx.beginPath()
            ctx.arc(x, y, dotSize, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [resolvedTheme, mounted, density, opacity])

  if (!mounted) {
    return <div className={className} />
  }

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  )
}