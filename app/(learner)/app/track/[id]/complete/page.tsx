'use client'

import * as React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Award, ArrowRight, Code2, Users2, CheckCircle2 } from 'lucide-react'
import { StatusIcon } from '@/components/primitives/status-icon'
import { Button } from '@/components/primitives/button'
import { Card } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { CAREER_TRACKS } from '@/lib/mock-data'

export default function ModuleCompletePage() {
  const params = useParams()
  const trackId = (params?.id as string) || 'full-stack-ai'
  const track = CAREER_TRACKS.find((t) => t.id === trackId) || CAREER_TRACKS[0]

  return (
    <div className="max-w-xl mx-auto py-8 text-center space-y-8 animate-toast-in select-none">
      {/* Focal Status Icon with Glow */}
      <div className="flex justify-center pt-2">
        <StatusIcon
          icon={Award}
          variant="gold"
          withGlow
          size="lg"
        />
      </div>

      {/* Headline & Congratulations */}
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="success">MILESTONE ACHIEVED</Badge>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          Module 01 Complete!
        </h1>

        <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-md mx-auto">
          You have mastered Agent Loop Mechanics and State Machine Planning. Your cohort standing is on track for tier-1 partner placement.
        </p>
      </div>

      {/* What unlocks next */}
      <div className="space-y-4 text-left">
        <div className="text-xs font-mono text-muted uppercase tracking-wider text-center sm:text-left">
          What Unlocks Next
        </div>

        <div className="space-y-3">
          <Card className="p-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-gold shrink-0 mt-0.5">
              <Code2 className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-body font-medium text-sm text-ink">
                  Capstone Lab: Coding Assistant Agent
                </h4>
                <Badge variant="active">UNLOCKED</Badge>
              </div>
              <p className="font-body text-xs text-muted mt-0.5 leading-relaxed">
                Connect tools, implement guardrails, and submit your agent code for expert peer review.
              </p>
            </div>
          </Card>

          <Card className="p-4 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center text-gold shrink-0 mt-0.5">
              <Users2 className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-body font-medium text-sm text-ink">
                  1-on-1 Career Mentoring Session
                </h4>
                <Badge variant="info">SCHEDULE</Badge>
              </div>
              <p className="font-body text-xs text-muted mt-0.5 leading-relaxed">
                Book a 30-minute placement strategy session with a senior AI engineer.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-2">
        <Link href="/app/dashboard" className="block w-full">
          <Button variant="primary" size="default" fullWidth>
            Return to Dashboard
          </Button>
        </Link>

        <Link href={`/app/track/${track.id}`} className="block w-full">
          <Button variant="secondary" size="default" fullWidth>
            Review Module Lessons
          </Button>
        </Link>
      </div>
    </div>
  )
}
