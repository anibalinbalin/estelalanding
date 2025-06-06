'use client'

import React, { useState, useEffect, useRef } from 'react'

interface DevelopmentAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const DevelopmentAsciiArt: React.FC<DevelopmentAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const [frame, setFrame] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const width = 40
  const height = 75
  const slowdownFactor = 30

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

  const codePattern = (x: number, y: number, t: number) => {
    // Repeat the code pattern to fill the canvas
    const baseTemplate = [
      "01001 { } 10110 [ ] 01:",
      "11010 code 01001 AI 100",
      "00101 → → → → → → → 110",
      "10110 solution() 010010"
    ]
    
    // Repeat pattern vertically and horizontally
    const templateY = y % (baseTemplate.length + 2) // Add spacing between repetitions
    const templateX = x % 40
    
    if (templateY < baseTemplate.length && templateX < baseTemplate[templateY].length) {
      const char = baseTemplate[templateY][templateX]
      if (char !== ' ') {
        let value = 1.0
        
        // Binary digits flow with vertical offset
        if (['0', '1'].includes(char)) {
          const digitPhase = x * 0.4 + y * 0.1
          value += Math.sin(t * 1.0 + digitPhase) * 0.3
        }
        
        // Code keywords pulse with position variance
        if (['c', 'o', 'd', 'e'].includes(char)) {
          value += Math.sin(t * 0.8 + y * 0.2) * 0.4
        }
        
        // AI letters with cascade
        if (['A', 'I'].includes(char)) {
          value += Math.sin(t * 0.6 + y * 0.15) * 0.4
        }
        
        // Brackets and symbols
        if (['{', '}', '[', ']', '(', ')', ':'].includes(char)) {
          value += Math.sin(t * 1.2 + y * 0.3) * 0.3
        }
        
        // Arrow flow animation with vertical waves
        if (char === '→') {
          const arrowPos = x + y * 0.5
          const flowPhase = arrowPos * 0.5
          value += Math.sin(t * 2.5 + flowPhase) * 0.8
        }
        
        // Function name with cascade
        if (['s', 'l', 'u', 't', 'i', 'n'].includes(char)) {
          value += Math.sin(t * 0.7 + y * 0.25) * 0.4
        }
        
        // Mouse interaction
        if (mouseDown && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const dx = x - (((mousePos.x - rect.left) / rect.width) * width)
          const dy = y - (((mousePos.y - rect.top) / rect.height) * height)
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 6) {
            value += Math.exp(-dist * 0.4) * Math.sin(t * 6) * 1.0
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
        let value = codePattern(x, y, t)
        
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

  // Custom color scheme
  const textColor = '#f5b944'
  const backgroundColor = '#3d3019'

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
          fontSize: '14px',
          lineHeight: '1.3',
          letterSpacing: '0.1em',
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