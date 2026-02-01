'use client'

import { useState, useEffect } from 'react'
import { useMode } from '@/components/mode-provider'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: { human: 'Human', machine: 'Machine' },
  es: { human: 'Humano', machine: 'Máquina' }
}

export function ModeToggle() {
  const { mode, setMode } = useMode()
  const { language } = useLanguage()
  const t = content[language]
  const [visible, setVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showAnchor, setShowAnchor] = useState(0) // where toggle became visible
  const [hideAnchor, setHideAnchor] = useState(0) // where toggle became hidden

  // Initial delay to sync with hero animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      setShowAnchor(window.scrollY)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const isScrollingUp = currentY < lastScrollY

      if (currentY < 50) {
        // near top - always show
        setVisible(true)
        setShowAnchor(currentY)
      } else if (visible) {
        // currently visible - hide after scrolling down 150px from show point
        if (!isScrollingUp && currentY > showAnchor + 450) {
          setVisible(false)
          setHideAnchor(currentY)
        }
      } else {
        // currently hidden - show after scrolling up 450px from hide point
        if (isScrollingUp && currentY < hideAnchor - 450) {
          setVisible(true)
          setShowAnchor(currentY)
        }
      }

      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, showAnchor, hideAnchor, visible])

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
      <div className="flex items-center gap-1 rounded-[0.1875rem] bg-transparent p-1 border border-black/10 dark:border-white/10">
        <button
          onClick={() => setMode('human')}
          className={`
            h-8 px-3 rounded-[0.1875rem]
            font-[GT_America_Mono,monospace] text-[0.75rem] uppercase tracking-[0.08em]
            transition-colors duration-150 ease motion-reduce:transition-none
            ${
              mode === 'human'
                ? 'text-black dark:text-white bg-black/10 dark:bg-white/10'
                : 'text-black/50 dark:text-white/60 bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
            }
          `}
        >
          {t.human}
        </button>
        <button
          onClick={() => setMode('machine')}
          className={`
            h-8 px-3 rounded-[0.1875rem]
            font-[GT_America_Mono,monospace] text-[0.75rem] uppercase tracking-[0.08em]
            transition-colors duration-150 ease motion-reduce:transition-none
            ${
              mode === 'machine'
                ? 'text-black dark:text-white bg-black/10 dark:bg-white/10'
                : 'text-black/50 dark:text-white/60 bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
            }
          `}
        >
          {t.machine}
        </button>
      </div>
    </div>
  )
}
