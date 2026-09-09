'use client'

import * as React from 'react'
import Link from 'next/link'
import { Compass, Target, Award, ArrowUpRight, Sparkles, Clock } from 'lucide-react'

export default function OnboardingPage() {
  return (
    <div className="space-y-8 animate-toast-in w-full">
      {/* Focal headline */}
      <div className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CALIBRATION ASSESSMENT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse ml-1" />
        </div>
        <h1 className="font-body text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink tracking-tight leading-tight">
          Career Track Diagnostic Assessment
        </h1>
        <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
          A focused 10-minute assessment to evaluate your technical baseline, systems architecture instincts, and recommend your optimal train-and-place cohort.
        </p>
      </div>

      {/* Value pillars */}
      <div className="space-y-3">
        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/80 flex items-start gap-4 shadow-2xs hover:border-gold/50 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
            <Compass className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-body font-semibold text-sm sm:text-base text-ink">
              Diagnostic Baseline Mapping
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              Pinpoints your current competencies across TypeScript, systems architecture, distributed state, and vector workflows.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/80 flex items-start gap-4 shadow-2xs hover:border-gold/50 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
            <Target className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-body font-semibold text-sm sm:text-base text-ink">
              Personalized Cohort Track
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              Directly matches you to industry-backed curricula tailored to your target engineering compensation tier.
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/80 flex items-start gap-4 shadow-2xs hover:border-gold/50 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-0.5">
            <Award className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-body font-semibold text-sm sm:text-base text-ink">
              Hiring Partner Pipeline Routing
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              Graduating fellows receive 72-hour direct interview dispatches with hiring teams at Stripe, Linear, Vercel, and high-growth global teams.
            </p>
          </div>
        </div>
      </div>

      {/* Timing and CTA */}
      <div className="pt-2 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-muted border-t border-border/60 pt-4">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>ESTIMATED DURATION</span>
          </span>
          <span className="text-ink font-semibold">~10 MINUTES · 5 QUESTIONS</span>
        </div>

        <Link href="/onboarding/assessment" className="block w-full group">
          <div className="h-12 sm:h-13 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs sm:text-sm font-semibold pl-6 pr-2 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer">
            <span className="tracking-wide">Start Diagnostic Assessment</span>
            <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
