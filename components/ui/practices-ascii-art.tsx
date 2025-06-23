'use client'

import React, { useEffect, useRef } from 'react'

// Berlin Underground theme: subway tunnels, underground rivers, depths and echoes

const GRID_SIZE = 50

interface PracticesAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const PracticesAsciiArt: React.FC<PracticesAsciiArtProps> = ({ 
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

    const cellSize = 8
    const charWidth = cellSize * 0.7
    const charHeight = cellSize
    const slowdownFactor = 10

    const undergroundPattern = (x: number, y: number, t: number) => {
      const tunnel1 = Math.sin((x + y) * 0.2 + t * 0.5);
      const tunnel2 = Math.cos((x - y) * 0.15 + t * 0.3);
      const depths = Math.sin(y * 0.1 + t * 0.2) * Math.cos(x * 0.08 - t * 0.4);
      const echoes = Math.sin(x * 0.05 + t * 0.7) * Math.sin(y * 0.07 + t * 0.6);
      return tunnel1 * 0.3 + tunnel2 * 0.3 + depths * 0.2 + echoes * 0.2;
    };

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
      
      const t = (time * Math.PI) / (60 * slowdownFactor);
      
      // Draw grid
      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          const value = undergroundPattern(x, y, t);
          
          let char = ' '
          // Berlin-specific characters: concrete, steel, graffiti
          if (value > 1.0) {
            char = '▮'; // solid block
          } else if (value > 0.7) {
            char = '▬'; // horizontal bar
          } else if (value > 0.4) {
            char = '▪'; // small square
          } else if (value > 0.1) {
            char = '▫'; // outline square
          } else if (value > -0.1) {
            char = '·'; // dot
          } else if (value > -0.4) {
            char = '‧'; // smaller dot
          }
          
          if (char !== ' ') {
            const xPos = (canvas.width / 2) + (x - GRID_SIZE/2) * charWidth
            const yPos = (canvas.height / 2) + (y - GRID_SIZE/2) * charHeight
            ctx.fillText(char, xPos, yPos)
          }
        }
      }
      
      time += 1
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
      className={`practices-ascii-container ${className}`}
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