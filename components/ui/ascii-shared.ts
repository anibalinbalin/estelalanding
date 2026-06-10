'use client'

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

/**
 * Shared utilities for ASCII art components.
 * See docs/repositioning/2026-06-09-ascii-redesign-study.md (Part 3).
 */

/** True when the user has requested reduced motion. Animated ASCII
 *  components should render their final static frame instead. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

/** True once the element has entered the viewport. Used to start
 *  ASCII animations only when the art is actually visible. */
export function useInViewVisible<T extends Element>(
  ref: RefObject<T | null>,
  rootMargin = '0px'
): boolean {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, rootMargin])

  return inView
}

export interface AsciiTypewriterOptions {
  /** Reveal rate in characters per second. Ignored when `byLine`. Default 45. */
  cps?: number
  /** Reveal rate in lines per second when `byLine` is true. Default 8 (~120ms/line). */
  linesPerSecond?: number
  /** Reveal whole lines per step instead of individual characters. */
  byLine?: boolean
  /** Hard cap on total reveal duration; large patterns speed up to finish
   *  within this window instead of crawling for minutes. Default 6000. */
  maxDurationMs?: number
  /** Trailing cursor glyph shown while revealing (e.g. '█'). Default none. */
  cursor?: string
  /** Gate the animation — wire to `isVisible` and/or `useInViewVisible`.
   *  While false the element is left untouched. Default true. */
  enabled?: boolean
  /** Called once when the reveal completes (or instantly under reduced motion). */
  onComplete?: () => void
}

export interface AsciiTypewriter<T extends HTMLElement> {
  /** Attach to the `<pre>` (or other element) receiving the reveal. */
  ref: RefObject<T | null>
  /** True once the full text is shown. */
  done: boolean
  /** Jump to the final frame immediately. */
  skip: () => void
  /** Replay the reveal from the start. */
  restart: () => void
}

/**
 * Typewriter reveal for ASCII art, extracted from the Vibe Coder 001 /
 * development-ascii-art pattern (study Part 3).
 *
 * Writes `textContent` through a ref inside a single rAF loop — no
 * per-character React re-renders, no O(n²) string rebuilds. The reveal
 * index is derived from elapsed time, so dropped frames batch multiple
 * characters into one DOM write and the total duration is clamped by
 * `maxDurationMs` even for multi-thousand-character patterns.
 *
 * Under `prefers-reduced-motion` the final frame renders immediately.
 *
 * Intended usage (development-ascii-art refresh, ai-ascii-art phases):
 *
 * ```tsx
 * const { ref, done } = useAsciiTypewriter<HTMLPreElement>(PATTERN, {
 *   byLine: true,
 *   cursor: '█',
 *   enabled: isVisible && inView,
 * })
 * return <pre ref={ref} aria-hidden="true" />
 * ```
 */
export function useAsciiTypewriter<T extends HTMLElement = HTMLPreElement>(
  text: string,
  options: AsciiTypewriterOptions = {}
): AsciiTypewriter<T> {
  const {
    cps = 45,
    linesPerSecond = 8,
    byLine = false,
    maxDurationMs = 6000,
    cursor = '',
    enabled = true,
    onComplete,
  } = options

  const reducedMotion = usePrefersReducedMotion()
  const ref = useRef<T | null>(null)
  const rafRef = useRef(0)
  const doneRef = useRef(false)
  const textRef = useRef(text)
  const onCompleteRef = useRef(onComplete)
  const [done, setDone] = useState(false)
  const [generation, setGeneration] = useState(0)

  textRef.current = text
  onCompleteRef.current = onComplete

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    setDone(true)
    onCompleteRef.current?.()
  }, [])

  const skip = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    if (ref.current) ref.current.textContent = textRef.current
    finish()
  }, [finish])

  const restart = useCallback(() => {
    doneRef.current = false
    setDone(false)
    setGeneration((g) => g + 1)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return

    doneRef.current = false
    setDone(false)

    if (reducedMotion) {
      el.textContent = text
      finish()
      return
    }

    // Precompute line-end offsets so byLine reveals snap to whole lines.
    let boundaries: number[] | null = null
    if (byLine) {
      boundaries = []
      for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) === 10) boundaries.push(i + 1)
      }
      boundaries.push(text.length)
    }

    const steps = byLine ? (boundaries as number[]).length : text.length
    const rate = byLine ? linesPerSecond : cps
    const duration = Math.min((steps / Math.max(rate, 1)) * 1000, maxDurationMs)

    let start: number | null = null
    let lastIndex = -1
    el.textContent = cursor

    const frame = (now: number) => {
      if (start === null) start = now
      const progress = duration <= 0 ? 1 : Math.min((now - start) / duration, 1)
      const step = Math.floor(progress * steps)
      const index = byLine
        ? step === 0
          ? 0
          : (boundaries as number[])[step - 1]
        : step
      if (index !== lastIndex) {
        lastIndex = index
        el.textContent = progress < 1 ? text.slice(0, index) + cursor : text
      }
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame)
      } else {
        finish()
      }
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [
    text,
    enabled,
    reducedMotion,
    byLine,
    cps,
    linesPerSecond,
    maxDurationMs,
    cursor,
    generation,
    finish,
  ])

  return { ref, done, skip, restart }
}

export interface AsciiTickOptions {
  /** Tick frequency in Hz. Intended range 0.5–2 — a few discrete state
   *  updates per second, never a 60fps loop. Default 1. */
  hz?: number
  /** Gate ticking — wire to `isVisible` and/or `useInViewVisible`. Default true. */
  enabled?: boolean
}

/**
 * Low-frequency animation clock for discrete ASCII state steps (GPU bar
 * eases, LINK dot shifts, LED pulses). Replaces the rAF + setState-per-frame
 * pattern flagged in study Part 3 with a ~0.5–2Hz `setInterval`.
 *
 * Returns a monotonically increasing tick count; derive each frame's
 * characters from it. Stops (and holds the static frame) when disabled,
 * off-screen, or under `prefers-reduced-motion`.
 *
 * Intended usage (infrastructure-ascii-art GPU rack):
 *
 * ```tsx
 * const tick = useAsciiTick({ hz: 0.5, enabled: isVisible && inView })
 * const bars = useMemo(() => stepBarsToward(targets, tick), [tick])
 * ```
 */
export function useAsciiTick(options: AsciiTickOptions = {}): number {
  const { hz = 1, enabled = true } = options
  const reducedMotion = usePrefersReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (!enabled || reducedMotion || hz <= 0) return
    const id = window.setInterval(() => setTick((t) => t + 1), 1000 / hz)
    return () => window.clearInterval(id)
  }, [enabled, reducedMotion, hz])

  return tick
}
