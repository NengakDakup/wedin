import * as React from 'react'
import Link from 'next/link'
import { Compass, Target, Award } from 'lucide-react'
import { Button } from '@/components/primitives/button'
import { Card } from '@/components/primitives/card'

export default function AssessmentIntroPage() {
  return (
    <div className="space-y-8 animate-toast-in">
      {/* Focal headline */}
      <div className="space-y-3">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight leading-tight">
          Career Track Diagnostic Assessment
        </h1>
        <p className="font-body text-base text-muted leading-relaxed">
          A focused 10-minute assessment to evaluate your technical baseline, learning velocity,
          and recommend your optimal train-and-place cohort.
        </p>
      </div>

      {/* Value pillars */}
      <div className="space-y-3">
        <Card className="p-4 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-gold shrink-0 mt-0.5">
            <Compass className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h3 className="font-body font-medium text-sm text-ink">
              Diagnostic Skill Mapping
            </h3>
            <p className="font-body text-xs text-muted mt-0.5 leading-relaxed">
              Pinpoints your current strengths across systems design, coding, and problem-solving.
            </p>
          </div>
        </Card>

        <Card className="p-4 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-gold shrink-0 mt-0.5">
            <Target className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h3 className="font-body font-medium text-sm text-ink">
              Personalized Cohort Track
            </h3>
            <p className="font-body text-xs text-muted mt-0.5 leading-relaxed">
              Directly matches you to industry-backed curricula tailored to your target engineering tier.
            </p>
          </div>
        </Card>

        <Card className="p-4 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-gold shrink-0 mt-0.5">
            <Award className="w-5 h-5 stroke-[2]" />
          </div>
          <div>
            <h3 className="font-body font-medium text-sm text-ink">
              Guaranteed Hiring Partner Pipeline
            </h3>
            <p className="font-body text-xs text-muted mt-0.5 leading-relaxed">
              Learners who complete their milestone tracks receive direct interview placement.
            </p>
          </div>
        </Card>
      </div>

      {/* Timing and CTA */}
      <div className="pt-2 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-muted border-t border-border/60 pt-4">
          <span>ESTIMATED TIME</span>
          <span className="text-ink">~10 MINUTES</span>
        </div>

        <Link href="/onboarding/assessment" className="block w-full">
          <Button variant="primary" size="default" fullWidth>
            Start Assessment
          </Button>
        </Link>
      </div>
    </div>
  )
}
