"use client"

import { useId, useEffect, useState } from "react"
import { MoonIcon, SunIcon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

import { Switch } from "@/components/ui/switch"

export function ToolbarSwitcher() {
  const id = useId()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  const isDark = theme === "dark"

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <div className="relative isolate flex h-8 bg-transparent p-1 border border-border rounded-sm">
      {/* Language Toggle */}
      <button
        type="button"
        className="relative h-6 w-6 rounded-full mr-1 flex items-center justify-center"
        onClick={toggleLanguage}
        aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      >
        {language === 'es' && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 rounded-full bg-secondary"
            transition={{ type: 'spring', duration: 0.5 }}
          />
        )}
        <Languages
          className={cn(
            'relative z-10 h-4 w-4',
            language === 'es' ? 'text-foreground' : ''
          )}
          style={language === 'en' ? { color: '#9b9fa3' } : {}}
        />
      </button>

      {/* Divider */}
      <div className="w-px bg-border mx-1" />

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
      </div>
    </div>
  )
}