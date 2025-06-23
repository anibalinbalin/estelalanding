'use client'

import React, { useEffect, useRef } from 'react'

// themes: connection to source, universal harmony, inexhaustible use
// visualization: Patterns emerge endlessly from source, finding harmony in constant transformation

const patterns = {
  // Pattern finding harmony in connection to source
  balance: (x: number, y: number, t: number) => {
    const cx = 30;
    const cy = 15;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    return Math.sin(dx * 0.3 + t * 0.5) * Math.cos(dy * 0.3 + t * 0.3) * 
           Math.sin(dist * 0.1 - t * 0.4);
  },
  
  duality: (x: number, y: number, t: number) => {
    const cx = 30;
    const left = x < cx ? Math.sin(x * 0.2 + t * 0.3) : 0;
    const right = x >= cx ? Math.cos(x * 0.2 - t * 0.3) : 0;
    
    return left + right + Math.sin(y * 0.3 + t * 0.2);
  },
  
  flow: (x: number, y: number, t: number) => {
    const angle = Math.atan2(y - 15, x - 30);
    const dist = Math.sqrt((x - 30) ** 2 + (y - 15) ** 2);
    
    return Math.sin(angle * 3 + t * 0.4) * Math.cos(dist * 0.1 - t * 0.3);
  },
  
  chaos: (x: number, y: number, t: number) => {
    const noise1 = Math.sin(x * 0.5 + t) * Math.cos(y * 0.3 - t);
    const noise2 = Math.sin(y * 0.4 + t * 0.5) * Math.cos(x * 0.2 + t * 0.7);
    const noise3 = Math.sin((x + y) * 0.2 + t * 0.8);
    
    return noise1 * 0.3 + noise2 * 0.3 + noise3 * 0.4;
  }
};

const GRID_SIZE = 50

interface PrinciplesAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const PrinciplesAsciiArt: React.FC<PrinciplesAsciiArtProps> = ({ 
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
    const backgroundColor = '#3d3019'
    const foregroundColor = '#f5b944'

    let time = 0
    let animationFrameId: number | null = null
    let patternType = 0

    // Calculate grid dimensions based on canvas
    const cellSize = 8
    const charWidth = cellSize * 0.6
    const charHeight = cellSize
    const slowdownFactor = 12

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
      
      const t = (time * Math.PI) / (60 * slowdownFactor)
      const patternTypes = ['balance', 'duality', 'flow', 'chaos'] as const
      const currentPattern = patterns[patternTypes[patternType]]
      
      // Draw grid
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          const value = currentPattern(x, y, t)
          
          let char = ' '
          if (value > 0.8) {
            char = '█'
          } else if (value > 0.5) {
            char = '▓'
          } else if (value > 0.2) {
            char = '▒'
          } else if (value > -0.2) {
            char = '░'
          } else if (value > -0.5) {
            char = '·'
          }
          
          if (char !== ' ') {
            const xPos = (canvas.width / 2) + (x - GRID_SIZE/2) * charWidth
            const yPos = (canvas.height / 2) + (y - GRID_SIZE/2) * charHeight
            ctx.fillText(char, xPos, yPos)
          }
        }
      }
      
      time += 1
      // Cycle through patterns slowly
      if (time % (240 * slowdownFactor) === 0) {
        patternType = (patternType + 1) % 4
      }
      
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
      className={`principles-ascii-container ${className}`}
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