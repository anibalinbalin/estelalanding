'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface SimpleDitherProps {
  className?: string
  intensity?: number
  speed?: number
}

export function SimpleDither({ 
  className = '', 
  intensity = 0.3,
  speed = 0.5
}: SimpleDitherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.01 + t) * 
             Math.cos(y * 0.01 + t * 0.7) * 
             Math.sin((x + y) * 0.005 + t * 0.3)
    }

    const drawDither = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const isDark = resolvedTheme === 'dark'
      const baseColor = isDark ? 'rgba(255, 255, 255,' : 'rgba(0, 0, 0,'
      
      // Create dithered wave pattern
      const dotSize = 2
      const spacing = 4
      
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          // Calculate wave pattern
          const wave = noise(x, y, time * speed)
          
          // Add mouse interaction
          const mouseDistance = Math.sqrt(
            (x - mousePos.x) ** 2 + (y - mousePos.y) ** 2
          )
          const mouseEffect = Math.max(0, 1 - mouseDistance / 100) * 0.5
          
          // Combine wave and mouse effects
          const finalNoise = (wave + 1) * 0.5 * intensity + mouseEffect
          
          // Dither threshold
          const threshold = 0.5
          if (finalNoise > threshold) {
            const alpha = Math.min(0.8, finalNoise)
            ctx.fillStyle = `${baseColor}${alpha})`
            ctx.beginPath()
            ctx.arc(x, y, dotSize, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }

    const animate = () => {
      time += 0.016 // ~60fps
      drawDither()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [resolvedTheme, mounted, intensity, speed, mousePos])

  const handleMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: -100, y: -100 })
  }

  if (!mounted) {
    return <div className={className} style={{ width: '100%', height: '100%' }} />
  }

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  )
}