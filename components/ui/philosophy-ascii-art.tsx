'use client'

import React, { useEffect, useRef } from 'react'

// Berlin Brutalism theme: raw concrete geometry, blocky architecture, modernist philosophy

const GRID_SIZE = 50

interface PhilosophyAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const PhilosophyAsciiArt: React.FC<PhilosophyAsciiArtProps> = ({ 
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

    const brutalismPattern = (x: number, y: number, t: number) => {
      const blockSize = 8;
      const bx = Math.floor(x / blockSize);
      const by = Math.floor(y / blockSize);
      const hash = (bx * 73 + by * 37) % 100;
      const wave = Math.sin(t * 0.2 + hash * 0.1);
      const concrete = Math.sin(x * 0.1 + t * 0.3) * Math.cos(y * 0.15 - t * 0.2);
      return wave * 0.6 + concrete * 0.4;
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
          let value = brutalismPattern(x, y, t);
          
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
      className={`philosophy-ascii-container ${className}`}
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