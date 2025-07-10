'use client'

import React, { useState, useEffect, useRef } from 'react'

interface ConsultingAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const ConsultingAsciiArt: React.FC<ConsultingAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const [frame, setFrame] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const width = 40
  const height = 75
  const slowdownFactor = 25

  useEffect(() => {
    if (!isVisible) return;
    
    let animationId: number
    const animate = () => {
      setFrame(f => (f + 1) % (240 * slowdownFactor))
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [slowdownFactor, isVisible])

  const latticePattern = (x: number, y: number, t: number) => {
    // Diamond lattice pattern
    const baseTemplate = [
      " ◇─◇─◇─◇─◇─◇─◇",
      "╱ ╲ ╱ ╲ ╱ ╲ ╱ ╲",
      "◇─◇─◇─◇─◇─◇─◇ ",
      "╲ ╱ ╲ ╱ ╲ ╱ ╲ ╱",
      " ◇─◇─◇─◇─◇─◇─◇"
    ]
    
    // Repeat pattern to fill canvas
    const templateY = y % (baseTemplate.length + 1)
    const templateX = x % 18
    
    if (templateY < baseTemplate.length && templateX < baseTemplate[templateY].length) {
      const char = baseTemplate[templateY][templateX]
      
      if (char !== ' ') {
        let value = 1.0
        
        // Diamond nodes pulse in waves
        if (char === '◇') {
          const nodeX = Math.floor(templateX / 2)
          const nodeY = Math.floor(templateY / 2)
          const wavePhase = (nodeX + nodeY) * 0.8 + y * 0.1
          value += Math.sin(t * 1.2 + wavePhase) * 0.5
        }
        
        // Horizontal connections flow
        if (char === '─') {
          const flowPhase = templateX * 0.6 + y * 0.05
          value += Math.sin(t * 1.8 + flowPhase) * 0.4
        }
        
        // Diagonal connections alternate
        if (char === '╱') {
          const diagPhase = (templateX + templateY) * 0.5 + y * 0.08
          value += Math.sin(t * 1.5 + diagPhase) * 0.4
        }
        
        if (char === '╲') {
          const diagPhase = (templateX - templateY) * 0.5 + y * 0.08
          value += Math.sin(t * 1.5 + diagPhase + Math.PI * 0.3) * 0.4
        }
        
        // Mouse interaction
        if (mouseDown && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const dx = x - (((mousePos.x - rect.left) / rect.width) * width)
          const dy = y - (((mousePos.y - rect.top) / rect.height) * height)
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 8) {
            value += Math.exp(-dist * 0.3) * Math.sin(t * 8) * 1.0
          }
        }
        
        return value
      }
    }
    
    return -1.0
  }

  const generateAsciiArt = () => {
    const t = (frame * Math.PI) / (60 * slowdownFactor)
    let result = ''
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const value = latticePattern(x, y, t)
        
        if (value > 1.6) {
          result += '█'
        } else if (value > 1.2) {
          result += '▓'
        } else if (value > 0.8) {
          result += '▒'
        } else if (value > 0.4) {
          result += '░'
        } else if (value > 0.0) {
          result += '·'
        } else {
          result += ' '
        }
      }
      result += '\n'
    }
    return result
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseDown = () => {
    setMouseDown(true)
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }

  if (!isVisible) return null

  // Custom color scheme using CSS variables
  const textColor = 'var(--ascii-foreground-p3)'
  const backgroundColor = 'var(--ascii-background-alt-p3)'

  return (
    <div
      className={`ascii-container ${className}`}
      style={{ 
        margin: 0,
        background: backgroundColor,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: '20px'
      }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          cursor: 'pointer'
        }}
      >
        <pre style={{
          fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", monospace',
          fontSize: '8px',
          lineHeight: '1.0',
          letterSpacing: '0.05em',
          color: textColor,
          userSelect: 'none',
          margin: 0,
          padding: 0
        }}>
          {generateAsciiArt()}
        </pre>
      </div>
    </div>
  )
};