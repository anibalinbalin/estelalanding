'use client'

import React, { useState, useEffect, useRef } from 'react'

interface SecurityAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const SecurityAsciiArt: React.FC<SecurityAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const [frame, setFrame] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const width = 50
  const height = 20
  const slowdownFactor = 18

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

  const meshPattern = (x: number, y: number, t: number) => {
    // Grid node positions - 3 rows, 6 columns
    const nodePositions = []
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 6; col++) {
        nodePositions.push({
          x: 6 + col * 7,
          y: 4 + row * 6,
          id: row * 6 + col
        })
      }
    }
    
    let value = 0
    
    // Calculate distance to nearest node and add pulse effect
    let minNodeDist = Infinity
    nodePositions.forEach(node => {
      const dist = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2)
      if (dist < minNodeDist) {
        minNodeDist = dist
        // Node pulse effect
        if (dist < 1.5) {
          const pulse = Math.sin(t * 0.7 + node.id * 0.3)
          value += pulse * 2.2
        }
      }
    })
    
    // Horizontal connections
    for (let row = 0; row < 3; row++) {
      const lineY = 4 + row * 6
      if (Math.abs(y - lineY) < 0.8) {
        for (let col = 0; col < 5; col++) {
          const startX = 6 + col * 7
          const endX = 6 + (col + 1) * 7
          if (x >= startX && x <= endX) {
            const flow = Math.sin(x * 0.3 + t * 1.0 + row * 0.5)
            value += flow * 1.3
          }
        }
      }
    }
    
    // Vertical connections
    for (let col = 0; col < 6; col++) {
      const lineX = 6 + col * 7
      if (Math.abs(x - lineX) < 0.8) {
        for (let row = 0; row < 2; row++) {
          const startY = 4 + row * 6
          const endY = 4 + (row + 1) * 6
          if (y >= startY && y <= endY) {
            const flow = Math.sin(y * 0.4 + t * 0.8 + col * 0.4)
            value += flow * 1.3
          }
        }
      }
    }
    
    // Diagonal connections (like in the mesh)
    nodePositions.forEach(node => {
      // Right-down diagonal
      if (node.x < 41 && node.y < 10) {
        const targetX = node.x + 7
        const targetY = node.y + 6
        const diagDist = Math.abs((y - node.y) / (x - node.x) - (targetY - node.y) / (targetX - node.x))
        if (x >= node.x && x <= targetX && y >= node.y && y <= targetY && diagDist < 0.3) {
          const flow = Math.sin((x + y) * 0.2 + t * 1.1 + node.id * 0.2)
          value += flow * 1.0
        }
      }
      
      // Left-down diagonal
      if (node.x > 6 && node.y < 10) {
        const targetX = node.x - 7
        const targetY = node.y + 6
        const diagDist = Math.abs((y - node.y) / (x - node.x) - (targetY - node.y) / (targetX - node.x))
        if (x <= node.x && x >= targetX && y >= node.y && y <= targetY && diagDist < 0.3) {
          const flow = Math.sin((x - y) * 0.2 + t * 0.9 + node.id * 0.2)
          value += flow * 1.0
        }
      }
    })
    
    // Data wave propagation
    const wave1 = Math.sin(x * 0.15 + y * 0.1 + t * 1.2) * Math.exp(-Math.abs(x - (25 + 10 * Math.sin(t * 0.4))) * 0.1)
    const wave2 = Math.cos(y * 0.2 - x * 0.1 + t * 0.8) * Math.exp(-Math.abs(y - (10 + 3 * Math.cos(t * 0.6))) * 0.15)
    
    value += wave1 * 0.5 + wave2 * 0.4
    
    // Mouse interaction
    if (mouseDown && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const dx = x - (((mousePos.x - rect.left) / rect.width) * width)
      const dy = y - (((mousePos.y - rect.top) / rect.height) * height)
      const dist = Math.sqrt(dx * dx + dy * dy)
      const mouseInfluence = Math.exp(-dist * 0.2) * Math.sin(t * 5)
      value += mouseInfluence * 2.0
    }
    
    // Background mesh activity
    const noise = Math.sin(x * 0.1 + t * 0.2) * Math.cos(y * 0.12 + t * 0.3)
    value += noise * 0.15
    
    return value
  }

  const generateAsciiArt = () => {
    const t = (frame * Math.PI) / (60 * slowdownFactor)
    let result = ''
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const value = meshPattern(x, y, t)
        
        // Mesh-appropriate characters
        if (value > 2.0) {
          result += '●'
        } else if (value > 1.5) {
          result += '█'
        } else if (value > 1.0) {
          result += '▓'
        } else if (value > 0.5) {
          result += '▒'
        } else if (value > 0.2) {
          result += '░'
        } else if (value > 0.0) {
          result += '·'
        } else if (value > -0.2) {
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