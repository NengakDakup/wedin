import * as React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description?: string
  action?: {
    label: string
    onClick?: () => void
  }
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'w-full bg-surface border border-border rounded-card p-8 sm:p-12 flex flex-col items-center text-center',
        className
      )}
      {...props}
    >
      <div className="w-14 h-14 rounded-full bg-bg border border-border flex items-center justify-center text-gold mb-4">
        <Icon className="w-6 h-6 stroke-[2]" />
      </div>

      <h3 className="font-display text-lg sm:text-xl font-medium text-ink tracking-tight">
        {title}
      </h3>

      {description && (
        <p className="font-body text-sm text-muted max-w-sm mt-2 leading-relaxed">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-6">
          <Button variant="primary" size="default" onClick={action.onClick}>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  )
}
