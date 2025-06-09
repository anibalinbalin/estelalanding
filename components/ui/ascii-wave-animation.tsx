'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface AsciiWaveAnimationProps {
  isVisible?: boolean
  className?: string
}

export function AsciiWaveAnimation({ isVisible = true, className = '' }: AsciiWaveAnimationProps) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [frame, setFrame] = useState(0)

  const pattern = ' .–=▂▄▆█'
  const speed = 0.1
  const amplitude = 10

  const getGridDimensions = () => {
    return { width: 80, height: 40 }
  }

  const main = (coord: { x: number; y: number }, context: { frame: number }) => {
    const t = context.frame * 0.01 * speed
    const x = coord.x
    const y = coord.y
    const o = Math.sin(y * Math.sin(t) * 0.2 + x * 0.04 + t) * amplitude
    const i = Math.round(Math.abs(x + y + o)) % pattern.length
    return pattern[i]
  }

  const render = useCallback(() => {
    if (!canvasRef.current || !isVisible) return

    const { width, height } = getGridDimensions()
    const context = { frame }
    let output = ''

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const coord = { x, y }
        output += main(coord, context)
      }
      if (y < height - 1) output += '\n'
    }

    canvasRef.current.textContent = output
    setFrame(prev => prev + 1)
  }, [frame, isVisible])

  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      render()
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => render()
    window.addEventListener('resize', handleResize)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible, frame, render])

  return (
    <div 
      className={`w-full h-full ${className}`}
      style={{
        backgroundColor: '#3b301c',
        color: '#f5b944',
        fontFamily: '"Courier New", monospace',
        fontSize: '10px',
        lineHeight: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        aspectRatio: '1'
      }}
    >
      <div
        ref={canvasRef}
        style={{
          whiteSpace: 'pre',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          height: 'fit-content'
        }}
      />
    </div>
  )
}