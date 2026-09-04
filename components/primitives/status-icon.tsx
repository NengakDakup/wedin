import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type StatusIconVariant = 'gold' | 'success' | 'danger' | 'warning' | 'info'

export interface StatusIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?: StatusIconVariant
  withGlow?: boolean
  size?: 'sm' | 'default' | 'lg'
}

export function StatusIcon({
  icon: Icon,
  variant = 'gold',
  withGlow = false,
  size = 'default',
  className,
  ...props
}: StatusIconProps) {
  const sizeStyles = {
    sm: 'w-11 h-11',
    default: 'w-16 h-16',
    lg: 'w-20 h-20',
  }

  const iconSizes = {
    sm: 'w-5 h-5 stroke-[2]',
    default: 'w-7 h-7 stroke-[2]',
    lg: 'w-9 h-9 stroke-[2]',
  }

  const variantStyles: Record<StatusIconVariant, { text: string; glow: string }> = {
    gold: {
      text: 'text-gold',
      glow: 'shadow-glow',
    },
    success: {
      text: 'text-success',
      glow: 'shadow-glow-success',
    },
    danger: {
      text: 'text-danger',
      glow: 'shadow-glow-danger',
    },
    warning: {
      text: 'text-warning',
      glow: 'shadow-glow-warning',
    },
    info: {
      text: 'text-info',
      glow: 'shadow-glow-info',
    },
  }

  return (
    <div
      className={cn(
        'rounded-full bg-surface border border-border flex items-center justify-center select-none transition-colors',
        sizeStyles[size],
        variantStyles[variant].text,
        withGlow && cn(variantStyles[variant].glow, 'animate-glow-pulse'),
        className
      )}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </div>
  )
}
