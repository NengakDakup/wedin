'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export function MarketingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md transition-colors duration-200 px-4 lg:px-16">
      <div className="mx-auto px-4 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between relative">
        {/* LEFT: Nav links with Home pill button (Clean Sans-Serif font-body) */}
        <div className="hidden md:flex items-center gap-1 text-[13px] font-body">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-full bg-surface border border-border/90 text-ink font-medium shadow-xs hover:border-gold/50 transition-colors"
          >
            Home
          </Link>
          <a
            href="#tracks"
            className="px-3 py-1.5 rounded-full text-muted hover:text-ink font-medium transition-colors"
          >
            Tracks
          </a>
          <a
            href="#closed-loop"
            className="px-3 py-1.5 rounded-full text-muted hover:text-ink font-medium transition-colors"
          >
            The Closed Loop
          </a>
          <a
            href="#employers"
            className="px-3 py-1.5 rounded-full text-muted hover:text-ink font-medium transition-colors"
          >
            Placements
          </a>
          <a
            href="#pricing"
            className="px-3 py-1.5 rounded-full text-muted hover:text-ink font-medium transition-colors"
          >
            Pricing
          </a>
        </div>

        {/* CENTER: Mathematically dead-centered Brand Logo & Wordmark */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Precision Closed-Loop Geometric Logo Glyph */}
            <div className="w-7 h-7 relative flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Outer guide circle hint */}
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="2 3"
                  className="opacity-35"
                />
                {/* Symmetrical Closed-Loop / Infinity Circuit */}
                <path
                  d="M11 11C8.24 11 6 13.24 6 16C6 18.76 8.24 21 11 21C14.5 21 17.5 11 21 11C23.76 11 26 13.24 26 16C26 18.76 23.76 21 21 21C17.5 21 14.5 11 11 11Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Core nodal spark points */}
                <circle cx="11" cy="16" r="1.5" fill="currentColor" />
                <circle cx="21" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            {/* Bold Modern Geometric Sans Wordmark */}
            <span className="font-body font-extrabold text-[17px] tracking-[0.12em] text-ink group-hover:text-gold transition-colors select-none">
              WEDIN
            </span>
          </Link>
        </div>

        {/* RIGHT: Login + Theme Toggle + Get Started Pill Button */}
        <div className="flex items-center gap-2 sm:gap-3.5 ml-auto">
          <Link
            href="/app/dashboard"
            className="hidden sm:inline-flex items-center text-[13px] font-body font-medium text-muted hover:text-ink px-3 py-2 rounded-full hover:bg-surface/80 transition-colors"
          >
            Login
          </Link>

          <ThemeToggle showLabel={false} />

          {/* Primary Pill Button: "Get Started ↗" (Reduced by ~15%) */}
          <Link
            href="/onboarding"
            className="group relative inline-flex items-center justify-between gap-2.5 bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs font-semibold pl-3.5 sm:pl-4 pr-1 sm:pr-1.5 h-9 sm:h-[38px] rounded-full shadow-xs transition-all duration-200"
          >
            <span className="tracking-wide">Get Started</span>
            {/* White Circular Icon Container Matching Button Radius */}
            <span className="relative w-6 h-6 sm:w-[26px] sm:h-[26px] rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
              {/* Primary Icon: Slides out diagonally top-right in the direction it points */}
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
              {/* Incoming Icon: Slides in smoothly from bottom-left opposite side */}
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </Link>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-muted hover:text-ink transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border p-5 space-y-3.5 animate-sheet-up">
          <div className="flex flex-col gap-2 font-body text-sm font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ink font-semibold py-1.5"
            >
              Home
            </Link>
            <a
              href="#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-ink py-1.5 transition-colors"
            >
              Curriculum Tracks
            </a>
            <a
              href="#closed-loop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-ink py-1.5 transition-colors"
            >
              The Closed Loop
            </a>
            <a
              href="#employers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-ink py-1.5 transition-colors"
            >
              Employer Placements
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-ink py-1.5 transition-colors"
            >
              Installment Pricing
            </a>
            <Link
              href="/app/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted hover:text-ink py-1.5 transition-colors"
            >
              Login
            </Link>
          </div>

          <div className="pt-3 border-t border-border flex flex-col gap-2">
            <Link
              href="/onboarding"
              onClick={() => setMobileMenuOpen(false)}
              className="group w-full inline-flex items-center justify-between bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs font-semibold pl-4 pr-1 h-9.5 rounded-full shadow-xs"
            >
              <span>Get Started</span>
              <span className="relative w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </Link>
            <Link
              href="/app/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center text-xs font-body text-muted hover:text-ink py-1.5"
            >
              Learner Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
