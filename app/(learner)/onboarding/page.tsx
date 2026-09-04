'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

export default function SplashPage() {
  const router = useRouter()
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    // Single loading ring animation on mount
    const startTime = Date.now()
    const duration = 2200 // 2.2 seconds loading ring

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(nextProgress)

      if (elapsed >= duration) {
        clearInterval(interval)
        setTimeout(() => {
          router.push('/onboarding/assessment-intro')
        }, 200)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [router])

  // SVG circle calculation
  const size = 52
  const strokeWidth = 3
  const center = size / 2
  const radius = center - strokeWidth
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex-1 flex flex-col items-center justify-between py-12 select-none">
      <div className="w-full" />

      {/* Brand Focal Wordmark & Tagline */}
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-[0.18em] text-ink">
          WEDIN
        </h1>
        <p className="font-mono text-xs sm:text-sm tracking-[0.28em] text-muted uppercase">
          LEARN. GROW. GET HIRED.
        </p>
      </div>

      {/* Loading ring at bottom */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
            {/* Background track */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              className="stroke-border"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Animated gold ring */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              className="stroke-gold transition-all duration-75 ease-out"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <span className="absolute font-mono text-[10px] text-muted">
            {progress}%
          </span>
        </div>

        <button
          type="button"
          onClick={() => router.push('/onboarding/assessment-intro')}
          className="text-xs font-mono text-muted hover:text-gold transition-colors underline cursor-pointer"
        >
          Skip Intro
        </button>
      </div>
    </div>
  )
}
