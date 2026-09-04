'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export type ProgressBarVariant = 'gold' | 'success' | 'danger' | 'warning' | 'info'

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number // 0 to 100 or current step
  max?: number // default 100
  label?: string // e.g. "3/10" or "75%"
  showValueLabel?: boolean
  size?: 'sm' | 'default' | 'lg'
  variant?: ProgressBarVariant
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValueLabel = false,
  size = 'default',
  variant = 'gold',
  className,
  ...props
}: ProgressBarProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true)
    })
    return () => cancelAnimationFrame(timer)
  }, [])

  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  const displayLabel = label ?? (showValueLabel ? `${value}/${max}` : null)

  const heightStyles = {
    sm: 'h-1.5',
    default: 'h-2',
    lg: 'h-3',
  }

  const fillStyles: Record<ProgressBarVariant, string> = {
    gold: 'bg-gold',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
  }

  return (
    <div className={cn('w-full flex flex-col gap-2', className)} {...props}>
      {displayLabel && (
        <div className="flex items-center justify-between text-xs font-mono text-muted">
          <span>Progress</span>
          <span className="text-ink">{displayLabel}</span>
        </div>
      )}
      <div
        className={cn(
          'w-full bg-border rounded-pill overflow-hidden',
          heightStyles[size]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn(
            'h-full rounded-pill transition-all duration-700 ease-out',
            fillStyles[variant]
          )}
          style={{ width: mounted ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  )
}
