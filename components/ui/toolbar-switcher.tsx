"use client"

import { useId, useEffect, useState, useCallback } from "react"
import { MoonIcon, SunIcon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

import { Switch } from "@/components/ui/switch"

function ShortcutKey({ char }: { char: string }) {
  return (
    <kbd className="ml-1.5 text-xs font-mono bg-secondary/50 text-muted-foreground px-1 py-0.5 rounded">
      {char}
    </kbd>
  )
}

export function ToolbarSwitcher() {
  const id = useId()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const isDark = theme === "dark"

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark")
  }, [isDark, setTheme])

  const toggleLanguage = useCallback(() => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
  }, [language, setLanguage])

  const goToContact = useCallback(() => {
    router.push('/contact')
  }, [router])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if typing in inputs or contenteditable
      const target = e.target as HTMLElement
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable
      ) return

      switch (e.key.toLowerCase()) {
        case 'c':
          goToContact()
          break
        case 't':
          toggleLanguage()
          break
        case 'm':
          toggleTheme()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToContact, toggleLanguage, toggleTheme])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative isolate flex h-8 items-center bg-transparent p-1 border border-border rounded-sm">
      {/* Language Toggle */}
      <button
        type="button"
        className="relative h-6 px-1.5 rounded flex items-center justify-center"
        onClick={toggleLanguage}
        aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      >
        {language === 'es' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 rounded bg-secondary"
            transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', duration: 0.5 }}
          />
        )}
        <Languages
          className={cn(
            'relative z-10 h-4 w-4',
            language === 'es' ? 'text-foreground' : ''
          )}
          style={language === 'en' ? { color: '#9b9fa3' } : {}}
        />
        <span className="relative z-10"><ShortcutKey char="T" /></span>
      </button>

        {/* Divider */}
        <div className="w-px bg-border mx-1 h-4" />

        {/* Theme Toggle */}
        <div
          className="group inline-flex items-center gap-1"
          data-state={isDark ? "checked" : "unchecked"}
        >
          <span
            id={`${id}-off`}
            className="group-data-[state=checked]:text-muted-foreground/70 cursor-pointer"
            aria-controls={id}
            onClick={() => setTheme("light")}
          >
            <MoonIcon
              className="h-4 w-4"
              aria-hidden="true"
              style={{ color: '#9b9fa3' }}
            />
          </span>
          <Switch
            id={id}
            checked={isDark}
            onCheckedChange={toggleTheme}
            aria-labelledby={`${id}-off ${id}-on`}
            aria-label="Toggle between dark and light mode"
            className="h-5 w-8 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input [&>span]:size-4 [&>span]:data-[state=checked]:translate-x-3"
          />
          <span
            id={`${id}-on`}
            className="group-data-[state=unchecked]:text-muted-foreground/70 cursor-pointer"
            aria-controls={id}
            onClick={() => setTheme("dark")}
          >
            <SunIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <ShortcutKey char="M" />
        </div>
    </div>
  )
}
