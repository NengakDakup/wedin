'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SheetProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function Sheet({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: SheetProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative z-10 w-full max-w-lg bg-surface border-t border-x border-border rounded-t-card p-6 shadow-2xl animate-sheet-up max-h-[85vh] flex flex-col',
          className
        )}
      >
        {/* Grab bar */}
        <div className="mx-auto w-12 h-1 bg-border rounded-pill mb-4 shrink-0" />

        <div className="flex items-start justify-between gap-4 pb-4">
          <div>
            {title && (
              <h3 className="font-display text-lg font-medium text-ink tracking-tight">
                {title}
              </h3>
            )}
            {description && (
              <p className="font-body text-sm text-muted mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-muted hover:text-ink hover:bg-border/40 transition-colors cursor-pointer"
            aria-label="Close sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  )
}
