'use client'

import * as React from 'react'
import { X, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type ToastVariant = 'default' | 'gold' | 'success' | 'danger' | 'warning' | 'info'

export interface ToastProps {
  id?: string
  title: string
  description?: string
  icon?: LucideIcon
  variant?: ToastVariant
  action?: {
    label: string
    onClick: () => void
  }
  onDismiss?: () => void
  position?: 'top' | 'bottom'
  className?: string
}

export function Toast({
  title,
  description,
  icon: Icon,
  variant = 'default',
  action,
  onDismiss,
  position = 'bottom',
  className,
}: ToastProps) {
  const iconColorStyles: Record<ToastVariant, string> = {
    default: 'text-gold',
    gold: 'text-gold',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
  }

  const borderStyles: Record<ToastVariant, string> = {
    default: 'border-border',
    gold: 'border-gold/50',
    success: 'border-success/40',
    danger: 'border-danger/40',
    warning: 'border-warning/40',
    info: 'border-info/40',
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'w-full max-w-sm bg-surface border rounded-card p-4 shadow-xl flex items-start gap-3 animate-toast-in select-none',
        borderStyles[variant],
        position === 'top' ? 'top-6' : 'bottom-6',
        className
      )}
    >
      {Icon && (
        <div
          className={cn(
            'shrink-0 w-8 h-8 rounded-full bg-border/40 flex items-center justify-center mt-0.5',
            iconColorStyles[variant]
          )}
        >
          <Icon className="w-4 h-4 stroke-[2]" />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <h4 className="font-body text-sm font-medium text-ink leading-tight">
          {title}
        </h4>
        {description && (
          <p className="font-body text-xs text-muted mt-1 leading-relaxed">
            {description}
          </p>
        )}
        {action && (
          <button
            type="button"
            onClick={action.onClick}
            className={cn(
              'mt-2 text-xs font-mono hover:underline cursor-pointer',
              iconColorStyles[variant]
            )}
          >
            {action.label}
          </button>
        )}
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 text-muted hover:text-ink transition-colors p-1 rounded-full cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
