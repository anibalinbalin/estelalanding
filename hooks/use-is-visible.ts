'use client'

import { useState, useEffect, RefObject } from 'react'

export function useIsVisible(ref: RefObject<Element | null>) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isVisible
}
