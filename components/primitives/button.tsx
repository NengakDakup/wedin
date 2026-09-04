import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'default' | 'sm'
  secondaryTextColor?: 'ink' | 'gold' | 'danger'
  fullWidth?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      secondaryTextColor = 'ink',
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-body rounded-pill transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.99]'

    const sizeStyles = {
      default: 'h-12 px-6 text-sm sm:text-base font-medium gap-2',
      sm: 'h-9 px-4 text-xs sm:text-sm font-medium gap-1.5',
    }

    const secondaryTextStyles = {
      ink: 'text-ink hover:border-gold hover:text-gold hover:bg-surface/40',
      gold: 'text-gold hover:border-gold hover:bg-surface/40',
      danger: 'text-danger hover:border-danger hover:bg-danger/10',
    }

    const variantStyles = {
      primary: 'bg-gold text-black font-medium hover:brightness-95 shadow-xs',
      secondary: cn(
        'border border-border bg-transparent transition-colors',
        secondaryTextStyles[secondaryTextColor]
      ),
      ghost: 'bg-transparent text-ink hover:text-gold hover:bg-surface/30',
      danger: 'bg-danger text-ink font-medium hover:brightness-95 shadow-xs',
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
