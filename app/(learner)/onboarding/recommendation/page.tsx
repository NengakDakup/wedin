'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Sparkles, Check, Building2, Clock, Layers } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/primitives/card'
import { Button } from '@/components/primitives/button'
import { Badge } from '@/components/primitives/badge'
import { CAREER_TRACKS, CareerTrack } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'
import { cn } from '@/lib/utils'

export default function RecommendationPage() {
  const router = useRouter()
  const { selectedTrackId, setSelectedTrackId } = useLearner()

  const recommendedTrack =
    CAREER_TRACKS.find((t) => t.id === selectedTrackId) || CAREER_TRACKS[0]
  const alternateTracks = CAREER_TRACKS.filter((t) => t.id !== recommendedTrack.id)

  const handleContinue = () => {
    router.push('/onboarding/sign-up')
  }

  return (
    <div className="space-y-8 animate-toast-in">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="active">DIAGNOSTIC RESULTS</Badge>
          <span className="text-xs font-mono text-muted">ANALYSIS COMPLETE</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          Your Recommended Career Track
        </h1>
        <p className="font-body text-sm sm:text-base text-muted">
          Based on your assessment responses and target velocity, here is your optimal
          cohort placement.
        </p>
      </div>

      {/* Featured Hero Card with Gold Border Treatment */}
      <Card featured className="p-6 space-y-6 relative overflow-hidden">
        {/* Top badge cluster */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="active" shape="rect">
              TOP RECOMMENDATION
            </Badge>
            <span className="text-xs font-mono text-gold font-medium">
              MATCH {recommendedTrack.matchScore}%
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold" />
              {recommendedTrack.duration}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-gold" />
              {recommendedTrack.modulesCount} Modules
            </span>
          </div>
        </div>

        {/* Title and description */}
        <div className="space-y-2">
          <h2 className="font-display text-2xl font-bold text-ink">
            {recommendedTrack.title}
          </h2>
          <p className="font-body text-sm text-muted leading-relaxed">
            {recommendedTrack.description}
          </p>
        </div>

        {/* Hiring Partners */}
        <div className="space-y-2 pt-2 border-t border-border/60">
          <div className="text-xs font-mono text-muted flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-gold" />
            <span>PLACEMENT HIRING PARTNERS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {recommendedTrack.hiringPartners.map((partner) => (
              <span
                key={partner}
                className="font-mono text-xs px-2.5 py-1 rounded-pill bg-bg border border-border text-ink"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

        {/* Key skills pills */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-muted">CURRICULUM FOCUS</div>
          <div className="flex flex-wrap gap-2">
            {recommendedTrack.keySkills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-2.5 py-0.5 rounded-pill border border-border text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Card>

      {/* Alternate Tracks Section */}
      <div className="space-y-4">
        <div className="text-xs font-mono text-muted uppercase tracking-wider">
          Alternative Career Paths
        </div>

        <div className="space-y-3">
          {alternateTracks.map((track) => (
            <div
              key={track.id}
              onClick={() => setSelectedTrackId(track.id)}
              className="p-4 rounded-card bg-surface border border-border hover:border-muted/60 transition-colors cursor-pointer flex items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-body font-medium text-sm text-ink">
                    {track.title}
                  </h4>
                  <Badge variant="neutral">MATCH {track.matchScore}%</Badge>
                </div>
                <p className="font-body text-xs text-muted line-clamp-1">
                  {track.description}
                </p>
              </div>

              <button
                type="button"
                className="text-xs font-mono text-gold hover:underline shrink-0"
              >
                Switch to this
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Primary CTA */}
      <div className="pt-2">
        <Button
          variant="primary"
          size="default"
          fullWidth
          onClick={handleContinue}
        >
          Continue with {recommendedTrack.title.split(' ')[0]} Track
        </Button>
      </div>
    </div>
  )
}
