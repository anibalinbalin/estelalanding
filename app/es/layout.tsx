'use client'

import { useEffect } from 'react'

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Ensure Spanish pages always have the correct lang attribute
    document.documentElement.lang = 'es'
  }, [])
  
  return children
}