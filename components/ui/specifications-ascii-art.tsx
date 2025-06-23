'use client'

import React, { useState, useEffect, useRef } from 'react'

interface SpecificationsAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const SpecificationsAsciiArt: React.FC<SpecificationsAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const [frame, setFrame] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const width = 40
  const height = 75
  const slowdownFactor = 35

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

  const gridPattern = (x: number, y: number, t: number) => {
    // Grid with blocks pattern
    const baseTemplate = [
      "┌───┬───┬───┬───┬───┬───┬───┐",
      "│██ │   │██ │   │██ │   │██ │",
      "├───┼───┼───┼───┼───┼───┼───┤",
      "│   │██ │   │██ │   │██ │   │",
      "├───┼───┼───┼───┼───┼───┼───┤",
      "│██ │   │██ │   │██ │   │██ │",
      "└───┴───┴───┴───┴───┴───┴───┘"
    ]
    
    // Zoom loop effect - oscillating zoom scale
    const zoomCycle = Math.sin(t * 0.3) * 0.4 + 1.0 // Scale between 0.6 and 1.4
    const centerX = width / 2
    const centerY = height / 2
    
    // Apply zoom transformation
    const zoomedX = ((x - centerX) / zoomCycle + centerX)
    const zoomedY = ((y - centerY) / zoomCycle + centerY)
    
    // Repeat pattern to fill canvas with zoomed coordinates
    const templateY = Math.floor(zoomedY) % (baseTemplate.length + 1)
    const templateX = Math.floor(zoomedX) % 29
    
    if (templateY < baseTemplate.length && templateX < baseTemplate[templateY].length) {
      const char = baseTemplate[templateY][templateX]
      
      if (char !== ' ') {
        let value = 1.0
        
        // Block cells pulse in checkerboard pattern with zoom-aware positioning
        if (char === '█') {
          const blockX = Math.floor(zoomedX / 4)
          const blockY = Math.floor(zoomedY / 2)
          const checkerPhase = (blockX + blockY) % 2
          const wavePhase = (blockX + blockY) * 0.6 + zoomedY * 0.05
          const zoomPulse = Math.sin(t * 0.3) * 0.3 // Additional zoom-synced pulse
          value += Math.sin(t * 1.0 + wavePhase + checkerPhase * Math.PI) * 0.6 + zoomPulse
        }
        
        // Grid lines pulse with zoom awareness
        if (['┌', '┬', '┐', '├', '┼', '┤', '└', '┴', '┘', '─', '│'].includes(char)) {
          const gridPhase = (zoomedX + zoomedY) * 0.2 + zoomCycle * 0.5
          value += Math.sin(t * 0.8 + gridPhase) * 0.3
        }
        
        // Horizontal grid lines flow with zoom effect
        if (['─', '┬', '┴', '┼'].includes(char)) {
          const flowPhase = zoomedX * 0.4 + t * 0.5 + zoomCycle * 2
          value += Math.sin(t * 1.5 + flowPhase) * 0.25
        }
        
        // Vertical grid lines pulse with zoom sync
        if (['│', '├', '┤', '┼'].includes(char)) {
          const vertPhase = zoomedY * 0.5 + zoomCycle * 1.5
          value += Math.sin(t * 1.2 + vertPhase) * 0.25
        }
        
        // Mouse interaction
        if (mouseDown && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const dx = x - (((mousePos.x - rect.left) / rect.width) * width)
          const dy = y - (((mousePos.y - rect.top) / rect.height) * height)
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 6) {
            value += Math.exp(-dist * 0.4) * Math.sin(t * 10) * 1.2
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
        const value = gridPattern(x, y, t)
        
        if (value > 1.8) {
          result += '█'
        } else if (value > 1.4) {
          result += '▓'
        } else if (value > 1.0) {
          result += '▒'
        } else if (value > 0.6) {
          result += '░'
        } else if (value > 0.2) {
          result += '·'
        } else if (value > 0.0) {
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
          fontSize: '8px',
          lineHeight: '1.0',
          letterSpacing: '0.02em',
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