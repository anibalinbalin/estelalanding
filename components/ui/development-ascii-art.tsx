'use client'

import React, { useRef } from 'react'
import { useAsciiTypewriter, useInViewVisible } from './ascii-shared'

interface DevelopmentAsciiArtProps {
  isVisible?: boolean
  className?: string
}

// Modified ASCII pattern - more tech/development oriented
const PATTERN = `▓▓▓▓▓▓▓▓▓▓▓▓======================================================––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓=====================================================––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓==================================================––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓================================================–––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓=▓============================================–––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓==========================================––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓========================================–––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓=====================================––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓=▓================================––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓==============================––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓============================–––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓========================–––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓======================––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓===================–––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓=================––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓============––––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓===========–––––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓=======–––––––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓====––––––––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓==–––––––––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓■■■...–––––––––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓■■■■■■■■■..........––––––––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓■■■■■■■■■■■■■■■...............–––––––––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓■■■■■■■■■■■■■■■■■■■......................––––––––––––––––––
▓▓▓▓▓▓▓▓▓▓▓▓▓▓■■■■■■■■■■■■■■■■■■■■■■■■■■...........................–––––––––––––
▓▓▓▓▓▓▓■▓▓■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.................................––.––––
▓▓▓▓■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■.......................................–
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■........................................`

// Shared by the invisible sizer and the reveal layer so they align exactly.
const textLayerStyle: React.CSSProperties = {
  whiteSpace: 'pre',
  letterSpacing: '-0.05em',
  padding: '8px'
}

const DevelopmentAsciiArt: React.FC<DevelopmentAsciiArtProps> = ({
  isVisible = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInViewVisible(containerRef)

  // Latch so the reveal plays once when the art first enters the viewport
  // and does not restart on every re-entry.
  const startedRef = useRef(false)
  if (inView) startedRef.current = true

  // Shared typewriter (study Part 3): single rAF loop writing textContent
  // through a ref — no per-character React re-renders, no O(n²) string
  // churn. At 660 cps the reveal batches ~10 chars per frame and the
  // ~3,300-char pattern completes in ~5s (was ~73s). Reduced motion
  // renders the final frame immediately (handled inside the hook).
  const { ref: revealRef } = useAsciiTypewriter<HTMLDivElement>(PATTERN, {
    cps: 660,
    cursor: '█',
    enabled: isVisible && (inView || startedRef.current)
  })

  if (!isVisible) return null

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`w-full h-full ${className}`}
      style={{
        backgroundColor: 'transparent',
        color: 'var(--ascii-foreground-p3)',
        fontFamily: 'GT_America_Mono, monospace',
        fontFeatureSettings: '"ss06"',
        fontSize: '8px',
        lineHeight: '1.1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        aspectRatio: '620/600'
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Invisible full pattern keeps the centered layout fixed while the reveal runs */}
        <div style={{ ...textLayerStyle, visibility: 'hidden' }}>{PATTERN}</div>
        <div ref={revealRef} style={{ ...textLayerStyle, position: 'absolute', inset: 0 }} />
      </div>
    </div>
  )
}

export default DevelopmentAsciiArt
export { DevelopmentAsciiArt }
