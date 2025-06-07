'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useTheme } from 'next-themes'

interface TranslationBridgeProps {
  width?: number
  height?: number
  className?: string
}

export function TranslationBridge({ 
  width = 600, 
  height = 200, 
  className = '' 
}: TranslationBridgeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const [mousePos, setMousePos] = useState({ x: -1, y: -1 })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Initialize elements with useMemo to fix dependency warnings
  const techElements = useMemo(() => {
    const elements: Array<{x: number, y: number, type: 'square' | 'line', angle: number}> = []
    for (let i = 0; i < 25; i++) {
      elements.push({
        x: Math.random() * (width * 0.4),
        y: Math.random() * height,
        type: Math.random() > 0.5 ? 'square' : 'line',
        angle: Math.random() * Math.PI * 2
      })
    }
    return elements
  }, [width, height])

  const humanElements = useMemo(() => {
    const elements: Array<{x: number, y: number, type: 'circle' | 'curve', size: number}> = []
    for (let i = 0; i < 25; i++) {
      elements.push({
        x: width * 0.6 + Math.random() * (width * 0.4),
        y: Math.random() * height,
        type: Math.random() > 0.5 ? 'circle' : 'curve',
        size: 3 + Math.random() * 4
      })
    }
    return elements
  }, [width, height])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isDark = resolvedTheme === 'dark'
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)
      
      // Set colors based on theme
      const techColor = isDark ? 'rgba(100, 255, 218, 0.6)' : 'rgba(16, 185, 129, 0.6)'
      const humanColor = isDark ? 'rgba(248, 113, 113, 0.6)' : 'rgba(239, 68, 68, 0.6)'
      const bridgeColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'
      const translatedColor = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'

      // Draw technology realm (left side)
      ctx.strokeStyle = techColor
      ctx.fillStyle = techColor
      ctx.lineWidth = 1.5

      techElements.forEach(element => {
        const distanceToMouse = mousePos.x >= 0 ? 
          Math.sqrt((element.x - mousePos.x) ** 2 + (element.y - mousePos.y) ** 2) : 999
        
        const isTranslating = distanceToMouse < 80
        const alpha = isTranslating ? 0.9 : 0.6
        
        ctx.globalAlpha = alpha
        
        if (element.type === 'square') {
          if (isTranslating) {
            // Transform square into circle during translation
            const progress = Math.max(0, 1 - distanceToMouse / 80)
            const size = 4 + progress * 2
            ctx.fillStyle = translatedColor
            ctx.beginPath()
            ctx.arc(element.x, element.y, size, 0, Math.PI * 2)
            ctx.fill()
          } else {
            ctx.fillStyle = techColor
            ctx.fillRect(element.x - 2, element.y - 2, 4, 4)
          }
        } else {
          // Line element
          ctx.beginPath()
          ctx.moveTo(element.x - 6, element.y)
          ctx.lineTo(element.x + 6, element.y)
          ctx.stroke()
        }
      })

      // Draw human realm (right side)
      ctx.strokeStyle = humanColor
      ctx.fillStyle = humanColor

      humanElements.forEach(element => {
        const distanceToMouse = mousePos.x >= 0 ? 
          Math.sqrt((element.x - mousePos.x) ** 2 + (element.y - mousePos.y) ** 2) : 999
        
        const isTranslating = distanceToMouse < 80
        const alpha = isTranslating ? 0.9 : 0.6
        
        ctx.globalAlpha = alpha
        
        if (element.type === 'circle') {
          if (isTranslating) {
            // Transform circle into square during translation
            ctx.fillStyle = translatedColor
            ctx.fillRect(element.x - 3, element.y - 3, 6, 6)
          } else {
            ctx.fillStyle = humanColor
            ctx.beginPath()
            ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2)
            ctx.fill()
          }
        } else {
          // Curve element
          ctx.beginPath()
          ctx.arc(element.x, element.y, 8, 0, Math.PI)
          ctx.stroke()
        }
      })

      // Draw translation bridges when mouse is present
      if (mousePos.x >= 0 && mousePos.y >= 0) {
        ctx.strokeStyle = bridgeColor
        ctx.lineWidth = 1
        ctx.globalAlpha = 0.4

        // Draw bridges from nearby tech elements to nearby human elements
        techElements.forEach(techEl => {
          const techDistance = Math.sqrt((techEl.x - mousePos.x) ** 2 + (techEl.y - mousePos.y) ** 2)
          
          if (techDistance < 100) {
            humanElements.forEach(humanEl => {
              const humanDistance = Math.sqrt((humanEl.x - mousePos.x) ** 2 + (humanEl.y - mousePos.y) ** 2)
              
              if (humanDistance < 100) {
                const totalDistance = techDistance + humanDistance
                if (totalDistance < 150) {
                  ctx.globalAlpha = Math.max(0.1, 1 - totalDistance / 150)
                  ctx.beginPath()
                  ctx.moveTo(techEl.x, techEl.y)
                  ctx.quadraticCurveTo(mousePos.x, mousePos.y, humanEl.x, humanEl.y)
                  ctx.stroke()
                }
              }
            })
          }
        })

        // Draw mouse indicator (translation point)
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(mousePos.x, mousePos.y, 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      draw()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos, width, height, resolvedTheme, mounted, techElements, humanElements])

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
    setMousePos({ x: -1, y: -1 })
  }

  if (!mounted) {
    return <div className={className} style={{ width, height }} />
  }

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'block',
        cursor: 'none'
      }}
    />
  )
}