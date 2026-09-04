import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'neutral' | 'ink' | 'success' | 'danger' | 'warning' | 'info'
  shape?: 'pill' | 'rect'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'neutral', shape = 'pill', children, ...props }, ref) => {
    const variantStyles = {
      active: 'text-gold',
      neutral: 'text-muted',
      ink: 'text-ink',
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
      info: 'text-info',
    }

    const shapeStyles = {
      pill: 'rounded-pill',
      rect: 'rounded-[6px]',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-mono text-xs px-2.5 py-1 border border-border bg-surface/40 leading-none select-none',
          shapeStyles[shape],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
