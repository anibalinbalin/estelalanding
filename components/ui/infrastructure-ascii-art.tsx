'use client'

import React, { useState, useEffect, useRef } from 'react'

interface InfrastructureAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const InfrastructureAsciiArt: React.FC<InfrastructureAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const [frame, setFrame] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const width = 45
  const height = 25
  const slowdownFactor = 15

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

  const networkPattern = (x: number, y: number, t: number) => {
    // Node positions matching the design
    const nodePositions = [
      {x: 8, y: 6, label: 'A'}, {x: 14, y: 6, label: 'B'}, {x: 20, y: 6, label: 'C'}, {x: 26, y: 6, label: 'D'}, {x: 32, y: 6, label: 'E'},
      {x: 8, y: 16, label: 'F'}, {x: 14, y: 16, label: 'G'}, {x: 20, y: 16, label: 'H'}, {x: 26, y: 16, label: 'I'}, {x: 32, y: 16, label: 'J'}
    ]
    
    let value = 0
    
    // Calculate distance to nearest node and add pulse effect
    let minNodeDist = Infinity
    nodePositions.forEach(node => {
      const dist = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2)
      if (dist < minNodeDist) {
        minNodeDist = dist
        // Node pulse effect
        if (dist < 2.5) {
          const pulse = Math.sin(t * 0.8 + node.x * 0.1 + node.y * 0.1)
          value += pulse * 1.8
        }
      }
    })
    
    // Horizontal connections (top row)
    if (y >= 5 && y <= 7) {
      if ((x >= 8 && x <= 14) || (x >= 14 && x <= 20) || (x >= 20 && x <= 26) || (x >= 26 && x <= 32)) {
        const flow = Math.sin(x * 0.4 + t * 1.2)
        value += flow * 1.2
      }
    }
    
    // Horizontal connections (bottom row)
    if (y >= 15 && y <= 17) {
      if ((x >= 8 && x <= 14) || (x >= 14 && x <= 20) || (x >= 20 && x <= 26) || (x >= 26 && x <= 32)) {
        const flow = Math.sin(x * 0.4 + t * 1.2 + Math.PI)
        value += flow * 1.2
      }
    }
    
    // Vertical connections
    nodePositions.slice(0, 5).forEach((topNode, i) => {
      const bottomNode = nodePositions[i + 5]
      if (x >= topNode.x - 0.5 && x <= topNode.x + 0.5 && y >= topNode.y && y <= bottomNode.y) {
        const flow = Math.sin(y * 0.3 + t * 0.9 + i * 0.5)
        value += flow * 1.0
      }
    })
    
    // Data packet simulation
    const packet1 = Math.sin((x - y) * 0.2 + t * 2) * Math.exp(-Math.abs(x - (20 + 8 * Math.sin(t * 0.5))) * 0.15)
    const packet2 = Math.cos((x + y) * 0.25 + t * 1.5) * Math.exp(-Math.abs(y - (11 + 3 * Math.cos(t * 0.7))) * 0.2)
    
    value += packet1 * 0.6 + packet2 * 0.4
    
    // Mouse interaction
    if (mouseDown && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const dx = x - (((mousePos.x - rect.left) / rect.width) * width)
      const dy = y - (((mousePos.y - rect.top) / rect.height) * height)
      const dist = Math.sqrt(dx * dx + dy * dy)
      const mouseInfluence = Math.exp(-dist * 0.15) * Math.sin(t * 4)
      value += mouseInfluence * 1.5
    }
    
    // Background network noise
    const noise = Math.sin(x * 0.08 + t * 0.3) * Math.cos(y * 0.1 + t * 0.4)
    value += noise * 0.2
    
    return value
  }

  const generateAsciiArt = () => {
    const t = (frame * Math.PI) / (60 * slowdownFactor)
    let result = ''
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const value = networkPattern(x, y, t)
        
        // Clean monochrome characters
        if (value > 1.8) {
          result += '█'
        } else if (value > 1.2) {
          result += '▓'
        } else if (value > 0.6) {
          result += '▒'
        } else if (value > 0.2) {
          result += '░'
        } else if (value > -0.1) {
          result += '·'
        } else if (value > -0.3) {
          result += '‧'
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
          fontSize: '14px',
          lineHeight: '1.2',
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