'use client'

import { createContext, useContext, useState, useEffect, useRef } from 'react'

type Mode = 'human' | 'machine'

type ModeProviderProps = {
  children: React.ReactNode
  defaultMode?: Mode
}

type ModeProviderState = {
  mode: Mode
  setMode: (mode: Mode) => void
}

const initialState: ModeProviderState = {
  mode: 'human',
  setMode: () => null,
}

const ModeProviderContext = createContext<ModeProviderState>(initialState)

export function ModeProvider({
  children,
  defaultMode = 'human',
}: ModeProviderProps) {
  const [mode, setMode] = useState<Mode>(defaultMode)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.setAttribute('data-mode', mode)
    }
  }, [mode])

  const value = {
    mode,
    setMode: (newMode: Mode) => {
      setMode(newMode)
    },
  }

  return (
    <ModeProviderContext.Provider value={value}>
      <div ref={wrapperRef} data-mode={mode} className="contents">
        {children}
      </div>
    </ModeProviderContext.Provider>
  )
}

export const useMode = () => {
  const context = useContext(ModeProviderContext)

  if (context === undefined)
    throw new Error('useMode must be used within a ModeProvider')

  return context
}
