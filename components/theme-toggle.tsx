'use client'

import * as React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils'

export interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className, showLabel = true }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'h-9 px-3 rounded-pill bg-surface border border-border inline-flex items-center gap-2 opacity-60 text-xs font-mono select-none',
          className
        )}
      >
        <span className="w-3.5 h-3.5 rounded-full bg-border" />
        {showLabel && <span>Theme</span>}
      </div>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'h-9 px-3.5 rounded-pill bg-surface border border-border inline-flex items-center gap-2 text-ink hover:border-gold hover:text-gold transition-all duration-150 cursor-pointer select-none text-xs font-mono shadow-xs',
        className
      )}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-gold stroke-[2]" />
      ) : (
        <Moon className="w-4 h-4 text-gold stroke-[2]" />
      )}
      {showLabel && (
        <span className="capitalize text-muted group-hover:text-ink">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  )
}
