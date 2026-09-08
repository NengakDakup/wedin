'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink transition-colors duration-200 relative selection:bg-gold selection:text-black">
      {/* Floating minimal top utility bar (No dividing header line) */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between pointer-events-auto z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-muted hover:text-ink px-3 py-1.5 rounded-full bg-surface/80 hover:bg-surface border border-border/80 backdrop-blur-xs transition-all shadow-2xs group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </Link>
        <div className="bg-surface/80 border border-border/80 rounded-full p-1 backdrop-blur-xs shadow-2xs">
          <ThemeToggle showLabel={false} />
        </div>
      </div>

      {/* Main content container with anchored centered Logo */}
      <main className="flex-1 flex flex-col justify-center max-w-xl w-full mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16">
        {/* Prominent Centered Brand Logo */}
        <div className="flex flex-col items-center justify-center mb-8 select-none">
          <Link href="/" className="inline-flex items-center gap-2.5 group transition-transform hover:scale-105">
            {/* Custom Wedin Closed-Loop Symmetrical Glyph in Gold */}
            <div className="w-9 h-9 relative flex items-center justify-center text-gold">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="2 3"
                  className="opacity-35"
                />
                <path
                  d="M11 11C8.24 11 6 13.24 6 16C6 18.76 8.24 21 11 21C14.5 21 17.5 11 21 11C23.76 11 26 13.24 26 16C26 18.76 23.76 21 21 21C17.5 21 14.5 11 11 11Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="11" cy="16" r="1.5" fill="currentColor" />
                <circle cx="21" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-body font-bold text-2xl tracking-tight text-ink group-hover:text-gold transition-colors">
              wedin
            </span>
          </Link>
        </div>

        {children}
      </main>
    </div>
  )
}
