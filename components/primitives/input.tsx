'use client'

import * as React from 'react'
import { AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, hint, id, disabled, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className="w-full flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-ink font-body select-none"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(
            'w-full h-12 px-4 bg-surface border border-border rounded-input text-ink font-body text-base placeholder:text-muted transition-colors duration-150',
            'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30',
            'disabled:opacity-40 disabled:cursor-not-allowed',
            error && 'border-danger/80 focus:border-danger focus:ring-danger/30',
            className
          )}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-1.5 text-xs text-danger font-body">
            <AlertCircle className="w-3.5 h-3.5 text-danger shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {!error && hint && (
          <p className="text-xs text-muted font-body">{hint}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export interface OtpInputProps {
  length?: number
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
  label?: string
}

export function OtpInput({
  length = 6,
  value = '',
  onChange,
  disabled = false,
  error,
  label,
}: OtpInputProps) {
  const [digits, setDigits] = React.useState<string[]>(() => {
    const arr = value.split('').slice(0, length)
    while (arr.length < length) arr.push('')
    return arr
  })

  React.useEffect(() => {
    const arr = value.split('').slice(0, length)
    while (arr.length < length) arr.push('')
    setDigits(arr)
  }, [value, length])

  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, val: string) => {
    const char = val.slice(-1)
    const newDigits = [...digits]
    newDigits[index] = char
    setDigits(newDigits)
    onChange?.(newDigits.join(''))

    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    if (!pasted) return
    const newDigits = pasted.split('')
    while (newDigits.length < length) newDigits.push('')
    setDigits(newDigits)
    onChange?.(newDigits.join(''))
    const nextIdx = Math.min(pasted.length, length - 1)
    inputRefs.current[nextIdx]?.focus()
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-ink font-body select-none">
          {label}
        </label>
      )}
      <div className="flex items-center gap-2 sm:gap-3">
        {digits.map((digit, idx) => (
          <input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            disabled={disabled}
            onChange={(e) => handleChange(idx, e.target.value)}
            onKeyDown={(e) => handleKeyDown(idx, e)}
            onPaste={handlePaste}
            className={cn(
              'w-11 h-13 sm:w-12 sm:h-14 bg-surface border border-border rounded-input text-center font-mono text-xl text-ink font-medium transition-colors duration-150',
              'focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30',
              'disabled:opacity-40 disabled:cursor-not-allowed',
              error && 'border-danger/80 focus:border-danger focus:ring-danger/30'
            )}
          />
        ))}
      </div>
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-danger font-body">
          <AlertCircle className="w-3.5 h-3.5 text-danger shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
