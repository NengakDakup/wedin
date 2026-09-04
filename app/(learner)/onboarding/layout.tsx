import * as React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink transition-colors duration-200">
      {/* Top micro-bar */}
      <header className="h-16 px-6 sm:px-12 flex items-center justify-between border-b border-border/50 max-w-5xl w-full mx-auto">
        <Link
          href="/onboarding"
          className="font-display font-bold text-lg tracking-widest text-ink hover:text-gold transition-colors"
        >
          WEDIN
        </Link>
        <ThemeToggle showLabel={false} />
      </header>

      {/* Main content container */}
      <main className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto px-4 py-8 sm:py-12">
        {children}
      </main>
    </div>
  )
}
