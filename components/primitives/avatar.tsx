import * as React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null
  alt?: string
  fallback?: string
  size?: 'sm' | 'default' | 'lg'
  verified?: boolean
}

export function Avatar({
  src,
  alt = 'Avatar',
  fallback = 'U',
  size = 'default',
  verified = false,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  const sizeStyles = {
    sm: 'w-8 h-8 text-xs',
    default: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
  }

  const badgeSizes = {
    sm: 'w-3.5 h-3.5 -bottom-0.5 -right-0.5',
    default: 'w-4 h-4 -bottom-0.5 -right-0.5',
    lg: 'w-5 h-5 bottom-0 right-0',
  }

  const checkSizes = {
    sm: 'w-2 h-2 stroke-[3]',
    default: 'w-2.5 h-2.5 stroke-[3]',
    lg: 'w-3 h-3 stroke-[3]',
  }

  return (
    <div
      className={cn('relative inline-flex shrink-0 select-none', className)}
      {...props}
    >
      <div
        className={cn(
          'rounded-full overflow-hidden bg-surface border border-border flex items-center justify-center text-ink font-body font-medium',
          sizeStyles[size]
        )}
      >
        {src && !imageError ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span>{fallback}</span>
        )}
      </div>

      {verified && (
        <div
          className={cn(
            'absolute rounded-full bg-surface border border-border text-gold flex items-center justify-center shadow-xs',
            badgeSizes[size]
          )}
          title="Verified"
        >
          <Check className={checkSizes[size]} />
        </div>
      )}
    </div>
  )
}
