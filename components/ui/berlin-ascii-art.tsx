'use client'

import React, { useEffect, useRef } from 'react'

// The One manifests through these three forms
const CHARS = '/\\|'

// The space in which the many emerge
const GRID_SIZE = 50

interface BerlinAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const BerlinAsciiArt: React.FC<BerlinAsciiArtProps> = ({ 
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

    // Custom color scheme
    const backgroundColor = '#3b301c'
    const foregroundColor = '#f5b944'
    

    let time = 0
    let animationFrameId: number | null = null

    // Calculate grid dimensions based on canvas
    const cellSize = 12
    const charWidth = cellSize * 0.8
    const charHeight = cellSize

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Fill background
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Set text style
      ctx.font = `${cellSize}px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = foregroundColor
      
      // Draw grid
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          // Two forces in harmony create movement
          const wave1 = Math.sin((x + y) / 4 + time)
          const wave2 = Math.cos((x - y) / 4 - time * 0.7)
          
          // The boundary between being and non-being
          const boundaryX = Math.abs(x - GRID_SIZE/2) / (GRID_SIZE/2)
          const boundaryY = Math.abs(y - GRID_SIZE/2) / (GRID_SIZE/2)
          const boundary = Math.max(boundaryX, boundaryY)  // Where form meets formlessness
          
          if (boundary < 0.85) {
            // Combine waves with different weights
            const combined = wave1 * 0.6 + wave2 * 0.4
            
            // Add boundary fade
            const fade = 1 - (boundary / 0.85)
            const value = combined * fade
            
            // From Three, the ten thousand things arise
            let char = ' '
            if (value > 0.3) char = CHARS[0]      // Yang rises
            else if (value < -0.3) char = CHARS[1]     // Yin descends
            else if (Math.abs(value) < 0.1) char = CHARS[2] // Balance point
            
            if (char !== ' ') {
              const xPos = (canvas.width / 2) + (x - GRID_SIZE/2) * charWidth
              const yPos = (canvas.height / 2) + (y - GRID_SIZE/2) * charHeight
              ctx.fillText(char, xPos, yPos)
            }
          }
        }
      }
      
      time += 0.0075
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
      className={`ascii-container ${className}`}
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