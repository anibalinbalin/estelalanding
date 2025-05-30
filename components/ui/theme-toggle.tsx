"use client"

import { useId } from "react"
import { MoonIcon, SunIcon, Languages } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const id = useId()
  const { theme, setTheme } = useTheme()
  
  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={isDark ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setTheme("light")}
      >
        <SunIcon size={16} aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon size={16} aria-hidden="true" />
      </span>
      <button
        className="ml-3 p-1 hover:text-foreground text-muted-foreground transition-colors"
        aria-label="Change language"
      >
        <Languages size={16} />
      </button>
    </div>
  )
}