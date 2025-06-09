'use client'

import React, { useEffect, useRef, useState } from 'react'

interface DevelopmentAsciiArtProps {
  isVisible?: boolean
  className?: string
}

export const DevelopmentAsciiArt: React.FC<DevelopmentAsciiArtProps> = ({ 
  isVisible = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout>()

  // The ASCII pattern from your HTML code
  const pattern = `▂▂▂▂▂▂▂▂▂▂▂▂======================================================––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂=====================================================––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂==================================================––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂================================================–––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂=▂============================================–––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂==========================================––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂========================================–––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂=====================================––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂=▂================================––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂==============================––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂============================–––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂========================–––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂======================––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂===================–––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂=================––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂============––––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂===========–––––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂=======–––––––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂====––––––––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂==–––––––––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▄▄▄...–––––––––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▄▄▄▄▄▄▄▄▄..........––––––––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄...............–––––––––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄......................––––––––––––––––––
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄...........................–––––––––––––
▂▂▂▂▂▂▂▄▂▂▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄.................................––.––––
▂▂▂▂▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄.......................................–
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄........................................`

  const speed = 80 // characters per second

  useEffect(() => {
    if (!isVisible || !isTyping) return

    const typeCharacter = () => {
      if (currentIndex >= pattern.length) {
        setIsTyping(false)
        return
      }

      setCurrentIndex(prev => prev + 1)
    }

    const delay = 1000 / speed
    intervalRef.current = setInterval(typeCharacter, delay)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isVisible, isTyping, currentIndex, pattern.length])

  useEffect(() => {
    if (!canvasRef.current || !isVisible) return

    // Build display text with visible characters up to currentIndex
    let displayText = ''
    for (let i = 0; i < pattern.length; i++) {
      if (i < currentIndex) {
        displayText += pattern[i]
      } else {
        // Replace with space to maintain layout
        displayText += pattern[i] === '\n' ? '\n' : ' '
      }
    }

    // Add blinking cursor if still typing
    if (isTyping && currentIndex < pattern.length) {
      displayText = displayText.slice(0, currentIndex) + '█' + displayText.slice(currentIndex + 1)
    }

    canvasRef.current.textContent = displayText
  }, [currentIndex, isTyping, pattern, isVisible])

  // Reset animation when component becomes visible
  useEffect(() => {
    if (isVisible) {
      setCurrentIndex(0)
      setIsTyping(true)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`w-full h-full ${className}`}
      style={{
        backgroundColor: '#3b301c',
        color: '#f5b944',
        fontFamily: '"Courier New", monospace',
        fontSize: '8px',
        lineHeight: '1.1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        aspectRatio: '620/600'
      }}
    >
      <div
        ref={canvasRef}
        style={{
          whiteSpace: 'pre',
          letterSpacing: '-0.05em',
          padding: '8px',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto'
        }}
      />
    </div>
  )
}