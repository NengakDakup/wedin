'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Building2,
  Terminal,
  Zap,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

interface AuthShellProps {
  children: React.ReactNode
  activeTab?: 'login' | 'signup' | 'forgot' | 'reset'
  heading: string
  subheading: string
}

export function AuthShell({
  children,
  activeTab,
  heading,
  subheading,
}: AuthShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink transition-colors duration-200">
      {/* Top Floating Navbar for Auth */}
      <header className="w-full border-b border-border/70 bg-bg/85 backdrop-blur-md px-6 sm:px-12 py-3.5 flex items-center justify-between z-30">
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Closed-Loop / Infinity Circuit Glyph */}
          <div className="w-7 h-7 relative flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-200">
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
          <span className="font-body font-extrabold text-[17px] tracking-[0.12em] text-ink group-hover:text-gold transition-colors select-none">
            WEDIN
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle showLabel={false} />
          <Link
            href="/"
            className="text-xs font-body font-medium text-muted hover:text-ink px-3 py-1.5 rounded-full hover:bg-surface border border-transparent hover:border-border transition-all"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Grid Content */}
      <div className="flex-1 flex w-full">
        {/* LEFT COLUMN: Form Container */}
        <div className="w-full lg:w-[52%] xl:w-[48%] flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:px-14 xl:px-20 py-10 lg:py-14">
          <div className="max-w-md w-full mx-auto space-y-6">
            {/* Tab switch between Login & Signup if relevant */}
            {activeTab && (activeTab === 'login' || activeTab === 'signup') && (
              <div className="p-1 rounded-full bg-surface border border-border flex items-center w-full max-w-[280px]">
                <Link
                  href="/login"
                  className={`flex-1 text-center py-1.5 text-xs font-medium rounded-full transition-all ${
                    activeTab === 'login'
                      ? 'bg-gold text-black font-semibold shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className={`flex-1 text-center py-1.5 text-xs font-medium rounded-full transition-all ${
                    activeTab === 'signup'
                      ? 'bg-gold text-black font-semibold shadow-xs'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  Create Account
                </Link>
              </div>
            )}

            {/* Header copy */}
            <div className="space-y-2">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                {heading}
              </h1>
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                {subheading}
              </p>
            </div>

            {/* Form Slot */}
            <div className="pt-2">{children}</div>
          </div>

          {/* Form Footer info */}
          <div className="max-w-md w-full mx-auto pt-8 border-t border-border/60 mt-10 text-[11px] font-body text-muted flex flex-wrap items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} Wedin Careers Inc.</span>
            <div className="flex items-center gap-3 text-muted">
              <Link href="/#faq" className="hover:text-gold transition-colors">
                Help Center
              </Link>
              <span>&bull;</span>
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <span>&bull;</span>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Rich Wedin Glassmorphism Showcase (Desktop >= 1024px) */}
        <div className="hidden lg:flex flex-1 relative bg-surface/50 border-l border-border/80 flex-col justify-between p-12 xl:p-16 overflow-hidden">
          {/* Subtle background gradient and circuit patterns */}
          <div className="absolute inset-0 bg-radial from-gold/10 via-transparent to-transparent pointer-events-none opacity-60" />
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

          {/* Top Trust Banner */}
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-[11px] font-mono text-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>CRYPTOGRAPHIC TALENT VERIFICATION</span>
            </div>

            <div className="space-y-3 max-w-lg">
              <h2 className="font-display text-3xl xl:text-4xl font-bold text-ink tracking-tight leading-snug">
                One platform to verify technical capability and secure global placement.
              </h2>
              <p className="font-body text-sm text-muted leading-relaxed">
                Skip traditional recruiter resume screens. Every line of code, pull request, and system architectural diagram is verified with cryptographic proof and dispatched directly to engineering leads.
              </p>
            </div>
          </div>

          {/* Mid Showcase: Live Verified ATS Proof Engine Card */}
          <div className="relative z-10 my-8 p-6 rounded-2xl bg-surface/90 border border-border/90 backdrop-blur-xl shadow-lg space-y-4 max-w-lg">
            <div className="flex items-center justify-between pb-3 border-b border-border/70">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold flex items-center justify-center border border-gold/30">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink font-body">
                    Closed-Loop Proof Engine
                  </div>
                  <div className="text-[10px] font-mono text-muted">
                    SHA-256 VERIFIED ATTESTATION
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Pipeline
              </span>
            </div>

            {/* Proof checklist */}
            <div className="space-y-2 text-xs font-body text-muted">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  Distributed consensus & live streaming test suite
                </span>
                <span className="font-mono text-[10px] text-muted">100% Passed</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  Production PR code review by Senior Staff Eng
                </span>
                <span className="font-mono text-[10px] text-muted">Approved</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  72-Hour Direct Hiring Partner Dispatch
                </span>
                <span className="font-mono text-[10px] text-gold font-medium">Ready</span>
              </div>
            </div>

            {/* Global Company Logos Ticker hint */}
            <div className="pt-3 border-t border-border/70 flex items-center justify-between text-[11px] text-muted font-body">
              <span>Hired at engineering teams at:</span>
              <div className="flex items-center gap-2.5 font-display font-semibold text-ink text-xs">
                <span>Stripe</span>
                <span>&bull;</span>
                <span>OpenAI</span>
                <span>&bull;</span>
                <span>Linear</span>
                <span>&bull;</span>
                <span>Vercel</span>
              </div>
            </div>
          </div>

          {/* Bottom Testimonial & Placement Stat */}
          <div className="relative z-10 max-w-lg space-y-4 pt-4 border-t border-border/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center font-display font-bold text-gold text-sm">
                AO
              </div>
              <div>
                <div className="text-xs font-bold text-ink font-body">
                  Amara Okonjo
                </div>
                <div className="text-[11px] text-muted font-body">
                  Staff AI Engineer &bull; Placed via Wedin Closed-Loop Pipeline ($165k/yr)
                </div>
              </div>
            </div>
            <p className="text-xs text-muted font-body italic leading-relaxed">
              &ldquo;Wedin replaced 4 months of ghosted cold applications with verified code deliverables. Within 72 hours of completing the capstone, I had 3 direct interviews with engineering managers.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
