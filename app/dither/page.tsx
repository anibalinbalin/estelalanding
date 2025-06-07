'use client'

import LetterGlitch from '@/components/ui/letter-glitch'

export default function DitherTestPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <LetterGlitch
        glitchSpeed={100}
        centerVignette={false}
        outerVignette={false}
        smooth={true}
      />
    </div>
  )
}