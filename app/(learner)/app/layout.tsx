'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Avatar } from '@/components/primitives/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLearner } from '@/lib/learner-context'

export default function LearnerAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { learner, selectedTrack } = useLearner()

  const initials = learner.name
    ? learner.name
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'WO'

  // Is this the focused lesson player screen?
  const isLessonPlayer = pathname.includes('/lesson/')

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink transition-colors duration-200">
      {/* Top Navbar — hidden or simplified on lesson player screen */}
      {!isLessonPlayer && (
        <header className="h-16 px-4 sm:px-8 border-b border-border/60 bg-surface/40 backdrop-blur-xs sticky top-0 z-30 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/app/dashboard"
              className="font-display font-bold text-lg tracking-widest text-ink hover:text-gold transition-colors"
            >
              WEDIN
            </Link>

            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-muted pl-4 border-l border-border">
              <span>TRACK:</span>
              <span className="text-gold font-medium">{selectedTrack.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle showLabel={false} />

            <Link href="/app/dashboard" className="flex items-center gap-2.5">
              <Avatar
                size="sm"
                fallback={initials}
                verified={learner.isVerified ?? true}
              />
              <span className="hidden sm:inline text-xs font-body font-medium text-ink">
                {learner.name}
              </span>
            </Link>
          </div>
        </header>
      )}

      {/* Main content body */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 sm:py-8">
        {children}
      </main>
    </div>
  )
}
