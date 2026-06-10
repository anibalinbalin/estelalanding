'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  useAsciiTypewriter,
  useInViewVisible,
  usePrefersReducedMotion,
} from './ascii-shared'

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD — AI Pipeline (Concept A, human gate)
 *
 * From the ASCII redesign study: a four-stage pipeline
 * (INPUT → MODEL → REVIEW → SHIP) where packets stream
 * freely until REVIEW, queue at the blinking human gate,
 * then pass to SHIP. "The machine proposes. We decide."
 *
 *    0ms  REVEAL: frame typewrites line by line (~120ms/line)
 * ~1100ms STREAM: a ▸ packet steps along the connectors every
 *         120ms; MODEL interior shimmers; token ribbon scrolls
 * ~2200ms GATE: packet halts at REVIEW; cursor blinks; 2.2s
 *         hold (mirrors Vibe Coder questionPause)
 * ~4400ms SIGN: "(o)" brightens, "> signed" typewrites at
 *         50ms/char; SHIP fill ticks ░→▓; counter increments
 *  loop;  at 5/5 the counter flashes bright for 2s, resets
 *
 * Vibe Coder 001 conventions: event-driven state machine,
 * short intervals only during active phases, CSS transitions
 * for color. No rAF, no per-frame setState. Mobile (<600px)
 * and prefers-reduced-motion render the final static frame.
 * ───────────────────────────────────────────────────────── */

interface AiAsciiArtProps {
  isVisible?: boolean
  className?: string
}

// --- Timing constants (ms) ---
const TIMING = {
  streamStep:     120,  // ms per packet step / shimmer rotation
  gateHold:       2200, // ms waiting at the human gate
  signTypewriter: 50,   // ms per character of "> signed"
  advanceDelay:   1000, // ms after sign-off before next packet
  flashDisplay:   2000, // ms the 5/5 counter stays bright
}

// Stream steps: 0–2 connector 1, 3–5 MODEL dwell, 6–8 connector 2
const STREAM_STEPS = 9

const SIGNED = 'signed'
const SIGN_FIELD = SIGNED.length + 3 // "> " + word + cursor slot
const SHIP_CELLS = 7
const SHIP_TARGET = 5
const MODEL_DENSITY = '▒▒▓▓██▓▓▒▒'
const TOKEN_RIBBON = '░▒▓█▓▒░'

// --- Static frame strings (68-col budget, from the study mockup) ---
const PROMPT = '$ estela pipeline --watch'
const TOP    = ' ┌─────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────┐'
const BOTTOM = ' └─────────┘     └─────────────┘     └─────────────┘     └─────────┘'
const LABELS = '    docs            inference           sign-off          verified'

const rotate = (s: string, n: number) => {
  const k = n % s.length
  return s.slice(k) + s.slice(0, k)
}

// SHIP box fill: 7 chars proportional to shipped count
const shipFill = (shipped: number) => {
  const filled = Math.round((shipped / SHIP_TARGET) * SHIP_CELLS)
  return '▓'.repeat(filled) + '░'.repeat(SHIP_CELLS - filled)
}

const counterText = (shipped: number) => `[ ${shipped}/${SHIP_TARGET} shipped ]`

// Plain-text frame for the line-by-line reveal. Matches the first
// animated frame so the typewriter → state machine swap is seamless.
const INITIAL_FRAME = [
  PROMPT,
  '',
  TOP,
  ' │  INPUT  │ ──▸ │    MODEL    │ ──▸ │   REVIEW    │ ──▸ │  SHIP   │',
  ` │ ░░░░░░░ │     │ ${MODEL_DENSITY}  │     │  human (o)  │     │ ${shipFill(0)} │`,
  BOTTOM,
  LABELS,
  '',
  ` > tokens ${TOKEN_RIBBON}          ${'> '.padEnd(SIGN_FIELD)}          ${counterText(0)}`,
].join('\n')

type Phase = 'reveal' | 'stream' | 'gate' | 'sign' | 'advance' | 'flash'

// A connector segment " ──▸ "; the ▸ packet steps through positions 0–2.
function Connector({ pos, color }: { pos: number | null; color: string }) {
  if (pos === null || pos < 0 || pos > 2) return <>{' ──▸ '}</>
  const cells = ['─', '─', '─']
  cells[pos] = '▸'
  return (
    <>
      {' '}
      {cells.map((c, i) =>
        c === '▸' ? (
          <span key={i} style={{ color }}>
            ▸
          </span>
        ) : (
          c
        )
      )}
      {' '}
    </>
  )
}

const AiAsciiArt: React.FC<AiAsciiArtProps> = ({
  isVisible = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInViewVisible(containerRef, '50px')
  const reducedMotion = usePrefersReducedMotion()

  const [isMobile, setIsMobile] = useState(false)
  const [phase, setPhase] = useState<Phase>('reveal')
  const [streamStep, setStreamStep] = useState(0)
  const [signedChars, setSignedChars] = useState(0)
  const [shipped, setShipped] = useState(0)
  const shippedRef = useRef(shipped)
  shippedRef.current = shipped

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Mobile and reduced motion render the final static frame instead.
  const staticFrame = reducedMotion || isMobile
  const animate = isVisible && inView && !staticFrame

  // Phase 0: REVEAL — line-by-line frame typewriter (shared hook)
  const { ref: revealRef } = useAsciiTypewriter<HTMLPreElement>(INITIAL_FRAME, {
    byLine: true,
    linesPerSecond: 8,
    enabled: animate && phase === 'reveal',
    onComplete: () => setPhase('stream'),
  })

  // Phase 1: STREAM — packet steps along the connectors
  useEffect(() => {
    if (!animate || phase !== 'stream') return
    const interval = setInterval(() => {
      setStreamStep((s) => s + 1)
    }, TIMING.streamStep)
    return () => clearInterval(interval)
  }, [animate, phase])

  // Packet reaches the human gate
  useEffect(() => {
    if (phase !== 'stream' || streamStep < STREAM_STEPS) return
    setSignedChars(0)
    setPhase('gate')
  }, [phase, streamStep])

  // Phase 2: GATE — hold at REVIEW, cursor blinks
  useEffect(() => {
    if (!animate || phase !== 'gate') return
    const timer = setTimeout(() => setPhase('sign'), TIMING.gateHold)
    return () => clearTimeout(timer)
  }, [animate, phase])

  // Phase 3: SIGN — "> signed" typewrites, gate brightens, SHIP fills
  useEffect(() => {
    if (!animate || phase !== 'sign') return
    let i = 0
    const interval = setInterval(() => {
      i++
      setSignedChars(i)
      if (i >= SIGNED.length) {
        clearInterval(interval)
        setShipped((s) => Math.min(s + 1, SHIP_TARGET))
        setPhase('advance')
      }
    }, TIMING.signTypewriter)
    return () => clearInterval(interval)
  }, [animate, phase])

  // Phase 4: ADVANCE — packet passes to SHIP, then next cycle or flash
  useEffect(() => {
    if (!animate || phase !== 'advance') return
    const timer = setTimeout(() => {
      if (shippedRef.current >= SHIP_TARGET) {
        setPhase('flash')
      } else {
        setStreamStep(0)
        setPhase('stream')
      }
    }, TIMING.advanceDelay)
    return () => clearTimeout(timer)
  }, [animate, phase])

  // Phase 5: FLASH — counter flashes bright at 5/5, then resets
  useEffect(() => {
    if (!animate || phase !== 'flash') return
    const timer = setTimeout(() => {
      setShipped(0)
      setSignedChars(0)
      setStreamStep(0)
      setPhase('stream')
    }, TIMING.flashDisplay)
    return () => clearTimeout(timer)
  }, [animate, phase])

  if (!isVisible) return null

  // --- Colors (amber palette only, theme-aware via CSS tokens) ---
  // Dark: Vibe Coder amber triad on the house dark amber panel.
  // Light: method-page treatment — deep amber ink directly on the
  // card's light background. Tokens flip in globals.css (.dark block),
  // so no useTheme/hydration timing is involved.
  const amber = 'var(--ascii-art-ink)'
  const bright = 'var(--ascii-art-ink-strong)'
  const dim = 'var(--ascii-art-ink-soft)'
  const panel = 'var(--ascii-art-panel)'

  // --- Derived display values ---
  const isStream = !staticFrame && phase === 'stream'

  // Packet position per connector. Packets travel in base amber; only
  // the connector out of REVIEW — the gate's ACCEPT moment — is bright.
  const conn1 = isStream && streamStep <= 2 ? streamStep : null
  const conn2 = staticFrame
    ? null
    : phase === 'gate'
      ? 2
      : isStream && streamStep >= 6 && streamStep <= 8
        ? streamStep - 6
        : null
  const conn3 =
    !staticFrame && (phase === 'sign' || phase === 'advance') ? 2 : null

  const model = isStream ? rotate(MODEL_DENSITY, streamStep) : MODEL_DENSITY
  const ribbon = isStream ? rotate(TOKEN_RIBBON, streamStep) : TOKEN_RIBBON

  const gateLit =
    staticFrame || phase === 'sign' || phase === 'advance' || phase === 'flash'

  const signed = staticFrame ? SIGNED : SIGNED.slice(0, signedChars)
  const cursor: 'pulse' | 'solid' | null = staticFrame
    ? null
    : phase === 'gate'
      ? 'pulse'
      : phase === 'sign'
        ? 'solid'
        : null
  const signedPad = ' '.repeat(
    Math.max(0, SIGN_FIELD - 2 - signed.length - (cursor ? 1 : 0))
  )

  const ship = shipFill(staticFrame ? SHIP_TARGET : shipped)
  const counter = counterText(staticFrame ? SHIP_TARGET : shipped)
  const counterColor = !staticFrame && phase === 'flash' ? bright : amber

  const preStyle: React.CSSProperties = {
    // 68-col diagram: scale with the container, never overflow it
    fontSize: 'clamp(4px, 2.4cqw, 10px)',
    lineHeight: 1.5,
    letterSpacing: 'initial',
    whiteSpace: 'pre',
  }

  // Frame chars in dim, stage labels and payloads in base amber,
  // bright reserved for the gate's ACCEPT moment.
  const frame = (
    <>
      <span style={{ color: amber }}>{PROMPT}</span>
      {'\n\n'}
      <span style={{ color: dim }}>{TOP}</span>
      {'\n'}
      <span style={{ color: dim }}>
        {' │'}
        <span style={{ color: amber }}>{'  INPUT  '}</span>
        {'│'}
        <Connector pos={conn1} color={amber} />
        {'│'}
        <span style={{ color: amber }}>{'    MODEL    '}</span>
        {'│'}
        <Connector pos={conn2} color={amber} />
        {'│'}
        <span style={{ color: amber }}>{'   REVIEW    '}</span>
        {'│'}
        <Connector pos={conn3} color={bright} />
        {'│'}
        <span style={{ color: amber }}>{'  SHIP   '}</span>
        {'│'}
      </span>
      {'\n'}
      <span style={{ color: dim }}>
        {' │ '}
        <span style={{ color: amber }}>{'░░░░░░░'}</span>
        {' │     │ '}
        <span style={{ color: amber }}>{model}</span>
        {'  │     │  '}
        <span style={{ color: amber }}>{'human '}</span>
        <span
          style={{
            color: gateLit ? bright : amber,
            transition: 'color 200ms ease',
          }}
        >
          {'(o)'}
        </span>
        {'  │     │ '}
        <span style={{ color: amber }}>{ship}</span>
        {' │'}
      </span>
      {'\n'}
      <span style={{ color: dim }}>{BOTTOM}</span>
      {'\n'}
      <span style={{ color: dim }}>{LABELS}</span>
      {'\n\n'}
      <span style={{ color: amber }}>
        {' > tokens '}
        <span style={{ color: dim }}>{ribbon}</span>
        {'          '}
        {'> '}
        <span style={{ color: bright }}>{signed}</span>
        {cursor === 'pulse' ? (
          <span className="animate-pulse">_</span>
        ) : cursor === 'solid' ? (
          '_'
        ) : null}
        {signedPad}
        {'          '}
        <span style={{ color: counterColor, transition: 'color 200ms ease' }}>
          {counter}
        </span>
      </span>
    </>
  )

  const showReveal = !staticFrame && phase === 'reveal'

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`w-full h-full ${className}`}
      style={{
        // Dark theme: house dark amber panel behind the amber glyphs.
        // Light theme: transparent — deep amber ink on the card itself.
        backgroundColor: panel,
        borderRadius: 'var(--border-radius)',
        color: amber,
        fontFamily: 'GT_America_Mono, monospace',
        fontFeatureSettings: '"ss06"',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        aspectRatio: '2/1',
        containerType: 'inline-size',
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Sizing copy reserves the full frame box during the reveal */}
        <pre
          className="m-0 font-normal"
          style={{
            ...preStyle,
            visibility: showReveal ? 'hidden' : 'visible',
          }}
        >
          {frame}
        </pre>
        {showReveal && (
          <pre
            ref={revealRef}
            className="m-0 font-normal"
            style={{ ...preStyle, position: 'absolute', inset: 0 }}
          />
        )}
      </div>
    </div>
  )
}

export default AiAsciiArt
export { AiAsciiArt }
