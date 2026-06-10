'use client'

import React, { useRef } from 'react'
import { useAsciiTick, useInViewVisible } from './ascii-shared'

/* ─────────────────────────────────────────────────────────
 * Private AI Infrastructure — GPU rack
 *
 * "Your models, on metal we control."
 *
 * Replaces the old network-nodes motif (and its 60fps
 * rAF + setState render loop) with the shared ~0.5Hz
 * useAsciiTick clock: every tick each GPU utilization bar
 * eases one or two block characters toward a deterministic
 * pseudo-random target, LEDs flash bright via CSS color
 * transitions, and the interconnect dot walks. Every frame
 * derives purely from the tick count — no per-frame state
 * machine — and reduced motion / off-screen holds the
 * static tick-0 frame. Amber palette only.
 * ───────────────────────────────────────────────────────── */

const TICK_HZ = 0.5
const BAR_WIDTH = 14
const TICKS_PER_TARGET = 5

// Static tick-0 frame matches the study mockup (71% / 43% / 88%).
const INITIAL_VALUES = [10, 6, 12]

// Deterministic hash → [0, 1). The same tick always renders the same frame.
const prng = (gpu: number, epoch: number) => {
  const x = Math.sin(gpu * 374761 + epoch * 668265 + 1) * 43758.5453
  return x - Math.floor(x)
}

const targetFor = (gpu: number, epoch: number) =>
  epoch <= 0 ? INITIAL_VALUES[gpu] : 3 + Math.floor(prng(gpu, epoch) * (BAR_WIDTH - 3))

// Utilization at a given tick: within each epoch the bar eases from the
// previous target toward the current one in one-or-two-block steps.
const valueAt = (gpu: number, tick: number): number => {
  if (tick <= 0) return INITIAL_VALUES[gpu]
  const epoch = Math.floor(tick / TICKS_PER_TARGET)
  const step = tick - epoch * TICKS_PER_TARGET
  const from = targetFor(gpu, epoch - 1)
  const to = targetFor(gpu, epoch)
  const delta = to - from
  const perStep = Math.ceil(Math.abs(delta) / TICKS_PER_TARGET)
  return from + Math.sign(delta) * Math.min(Math.abs(delta), perStep * step)
}

interface InfrastructureAsciiArtProps {
  isVisible?: boolean;
  className?: string;
}

export const InfrastructureAsciiArt: React.FC<InfrastructureAsciiArtProps> = ({
  isVisible = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInViewVisible(containerRef)

  // Low-frequency clock; holds the static tick-0 frame when off-screen,
  // hidden, or under prefers-reduced-motion (the hook stops ticking).
  const tick = useAsciiTick({ hz: TICK_HZ, enabled: isVisible && inView })

  if (!isVisible) return null

  // --- Colors (amber palette only) ---
  const amber = 'var(--ascii-foreground-p3)'
  const bright = 'rgb(255, 215, 100)'
  const dim = 'rgb(180, 135, 50)'
  const backgroundColor = 'var(--ascii-background-alt-p3)'

  const hr = (l: string, r: string) => `${l}${'═'.repeat(34)}${r}`

  const gpuLine = (i: number) => {
    const value = valueAt(i, tick)
    const moved = tick > 0 && value !== valueAt(i, tick - 1)
    const bar = '▓'.repeat(value) + '░'.repeat(BAR_WIDTH - value)
    const pct = `${Math.round((value / BAR_WIDTH) * 100)}%`.padStart(4)
    return (
      <React.Fragment key={`gpu${i}`}>
        {`║ [GPU${i}]  `}{bar}{`  ${pct}  `}
        <span style={{ color: moved ? bright : amber, transition: 'color 200ms ease' }}>o</span>
        {`  ║\n`}
      </React.Fragment>
    )
  }

  // Interconnect: one walking dot between ‹ › brackets
  const dotPos = tick % 10
  const linkDots = (
    <>
      {'‹'}
      <span style={{ color: dim }}>{'·'.repeat(dotPos)}</span>
      <span style={{ color: bright }}>{'•'}</span>
      <span style={{ color: dim }}>{'·'.repeat(9 - dotPos)}</span>
      {'›'}
    </>
  )

  const temp = 60 + Math.round(3 * Math.sin(tick * 0.7))

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
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
        padding: '10px',
        containerType: 'inline-size'
      }}
    >
      <pre style={{
        fontFamily: 'GT_America_Mono, monospace',
        fontFeatureSettings: '"ss06"',
        // 36-col rack: scale with the container, never overflow it
        fontSize: 'clamp(7px, 4.2cqw, 14px)',
        lineHeight: '1.35',
        letterSpacing: 'initial',
        color: amber,
        userSelect: 'none',
        margin: 0,
        padding: 0,
        whiteSpace: 'pre'
      }}>
        {hr('╔', '╗')}{'\n'}
        {`║  ESTELA · PRIVATE RACK 01        ║\n`}
        {hr('╠', '╣')}{'\n'}
        {gpuLine(0)}
        {gpuLine(1)}
        {gpuLine(2)}
        {hr('╠', '╣')}{'\n'}
        {`║ [NVME]  `}<span style={{ color: dim }}>{'▒'.repeat(BAR_WIDTH)}</span>{`  weights  ║\n`}
        {`║ [LINK]  `}{linkDots}{`    10GbE    ║\n`}
        {hr('╠', '╣')}{'\n'}
        {`║  pwr o    temp ${temp}C    uptime 24/7║\n`}
        {hr('╚', '╝')}{'\n'}
        {'\n'}
        <span style={{ color: dim }}>{'      your data never leaves'}</span>
      </pre>
    </div>
  )
};
