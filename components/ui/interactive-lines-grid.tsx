'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface InteractiveLinesGridProps {
  cols?: number
  rows?: number
  lineLength?: number
  lineWidth?: number
  color?: string
  hoverColor?: string
  backgroundColor?: string
  showDot?: boolean
  dotSize?: number
  className?: string
  style?: React.CSSProperties
  width?: string | number
  height?: number
}

const InteractiveLinesGrid: React.FC<InteractiveLinesGridProps> = ({
  cols = 25,
  rows = 8,
  lineLength = 20,
  lineWidth = 1.5,
  color,
  hoverColor,
  backgroundColor,
  showDot = true,
  dotSize = 9,
  className = '',
  style = {},
  width = '100%',
  height = 240
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMouseOver, setIsMouseOver] = useState(false)
  const animationRef = useRef<number | null>(null)
  const { resolvedTheme } = useTheme()

  // Theme-aware default colors
  const defaultColor = resolvedTheme === 'dark' ? '#666' : '#999'
  const defaultHoverColor = resolvedTheme === 'dark' ? '#fff' : '#000'
  const defaultBackgroundColor = resolvedTheme === 'dark' ? '#0a0a0a' : '#fafafa'

  const finalColor = color || defaultColor
  const finalHoverColor = hoverColor || defaultHoverColor
  const finalBackgroundColor = backgroundColor || defaultBackgroundColor

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    const getAngleToMouse = (x: number, y: number, mouseX: number, mouseY: number) => {
      const dx = mouseX - x
      const dy = mouseY - y
      return Math.atan2(dy, dx)
    }

    const getDistanceToMouse = (x: number, y: number, mouseX: number, mouseY: number) => {
      const dx = mouseX - x
      const dy = mouseY - y
      return Math.sqrt(dx * dx + dy * dy)
    }

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cellWidth = canvas.width / cols
      const cellHeight = canvas.height / rows

      // Determine dot position
      let dotX, dotY
      if (isMouseOver) {
        dotX = mousePos.x
        dotY = mousePos.y
      } else {
        // Default position: top right corner with some padding
        dotX = canvas.width - 30
        dotY = 30
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellWidth + cellWidth / 2
          const y = row * cellHeight + cellHeight / 2

          let angle = -Math.PI / 2
          let opacity = 0.3

          if (isMouseOver) {
            angle = getAngleToMouse(x, y, mousePos.x, mousePos.y)
            const distance = getDistanceToMouse(x, y, mousePos.x, mousePos.y)
            const maxDistance = Math.min(canvas.width, canvas.height) / 2
            opacity = Math.max(0.3, 1 - (distance / maxDistance))
          } else {
            // Create a radial pattern pointing to the dot position
            angle = getAngleToMouse(x, y, dotX, dotY)
          }

          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(angle)

          ctx.beginPath()
          ctx.moveTo(0, -lineLength / 2)
          ctx.lineTo(0, lineLength / 2)

          ctx.strokeStyle = isMouseOver ? finalHoverColor : finalColor
          ctx.globalAlpha = opacity
          ctx.lineWidth = lineWidth
          ctx.stroke()

          ctx.restore()
        }
      }

      // Draw the dot if showDot is true
      if (showDot) {
        ctx.save()
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(dotX, dotY, dotSize / 2, 0, Math.PI * 2)
        ctx.fillStyle = isMouseOver ? finalHoverColor : finalColor
        ctx.fill()
        ctx.restore()
      }
    }

    const animate = () => {
      drawLines()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    const handleResize = () => resizeCanvas()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [cols, rows, lineLength, lineWidth, finalColor, finalHoverColor, isMouseOver, mousePos, showDot, dotSize])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return
    
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseOver(true)
    handleMouseMove(e)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor: finalBackgroundColor,
        cursor: 'pointer',
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          margin: 0,
          padding: 0,
          border: 0
        }}
      />
      {showDot && (
        <div
          style={{
            position: 'absolute',
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: '50%',
            backgroundColor: finalHoverColor,
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s',
            opacity: isMouseOver ? 1 : 0,
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  )
}

export default InteractiveLinesGrid