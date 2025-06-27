"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ThemeImageProps {
  darkSrc: string
  lightSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ThemeImage({ darkSrc, lightSrc, alt, width, height, className }: ThemeImageProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by handling SSR and client-side rendering differently
  // Switch image src based on resolved theme
  if (!mounted) {
    // During SSR, show only the dark image
    return (
      <img 
        src={darkSrc} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className}
      />
    )
  }

  // After mounting, show the appropriate image based on theme
  return (
    <img 
      src={resolvedTheme === "light" ? lightSrc : darkSrc} 
      alt={alt} 
      width={width} 
      height={height} 
      className={className}
    />
  )
}