'use client'

import { useMode } from '@/components/mode-provider'
import { Navbar } from '@/components/navbar'
import { MachineView } from '@/components/machine-view'

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { mode } = useMode()

  if (mode === 'machine') {
    return <MachineView />
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
