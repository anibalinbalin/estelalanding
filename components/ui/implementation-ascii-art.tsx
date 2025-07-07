'use client'

import React, { useEffect, useRef } from 'react'

// themes: creation from unity, harmony of opposites, cyclical emergence, flowering consciousness
// visualization: ASCII patterns with blooming centers that pulse and expand with life

const CHARS = '/\\|'
const BLOOM_CHARS = '●◉○◎※✻✿❀'
const GRID_SIZE = 50

interface ImplementationAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const ImplementationAsciiArt: React.FC<ImplementationAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isVisible) return;
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Helper function to get computed CSS variable values for canvas
    const getCSSVariable = (variable: string): string => {
      try {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
      } catch {
        return ''
      }
    }

    // Custom color scheme using CSS variables
    const backgroundColor = getCSSVariable('--ascii-background-alt-p3') || '#3d3019'
    const foregroundColor = getCSSVariable('--ascii-foreground-p3') || '#f5b944'

    let time = 0
    let animationFrameId: number | null = null

    const cellSize = 8
    const charWidth = cellSize * 0.7
    const charHeight = cellSize

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Fill background
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text style
      ctx.font = `${cellSize}px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          const wave1 = Math.sin((x + y) / 4 + time)
          const wave2 = Math.cos((x - y) / 4 - time * 0.7)

          const boundaryX = Math.abs(x - GRID_SIZE/2) / (GRID_SIZE/2)
          const boundaryY = Math.abs(y - GRID_SIZE/2) / (GRID_SIZE/2)
          const boundary = Math.max(boundaryX, boundaryY)

          // Calculate distance from center for blooming effect
          const centerX = GRID_SIZE / 2
          const centerY = GRID_SIZE / 2
          const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
          const maxDist = GRID_SIZE * 0.4

          // Create blooming pulse from center
          const bloomPulse = Math.sin(time * 2 - distFromCenter * 0.2) * 0.5 + 0.5
          const bloomIntensity = Math.max(0, 1 - (distFromCenter / maxDist)) * bloomPulse

          if (boundary < 0.85) {
            const combined = wave1 * 0.6 + wave2 * 0.4
            const fade = 1 - (boundary / 0.85)
            const value = combined * fade

            let char = ' '

            // Determine if we're in a blooming area
            if (bloomIntensity > 0.3 && distFromCenter < maxDist * 0.8) {
              // Use bloom characters near center
              const bloomIndex = Math.floor((bloomIntensity + Math.sin(time * 3) * 0.2) * BLOOM_CHARS.length) % BLOOM_CHARS.length
              char = BLOOM_CHARS[bloomIndex]
            } else {
              // Original pattern logic for outer areas
              if (value > 0.3) char = CHARS[0]
              else if (value < -0.3) char = CHARS[1]
              else if (Math.abs(value) < 0.1) char = CHARS[2]
            }

            if (char !== ' ') {
              ctx.fillStyle = foregroundColor
              const xPos = (canvas.width / 2) + (x - GRID_SIZE/2) * charWidth
              const yPos = (canvas.height / 2) + (y - GRID_SIZE/2) * charHeight
              ctx.fillText(char, xPos, yPos)
            }
          }
        }
      }

      time += 0.01
      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      // Clear canvas context
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [isVisible])

  if (!isVisible) return null;

  return (
    <div
      className={`implementation-ascii-container ${className}`}
      style={{ 
        margin: 0,
        background: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 0
      }}
    >
      <canvas 
        ref={canvasRef}
        width={400}
        height={300}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  )
};