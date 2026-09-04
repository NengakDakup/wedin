'use client'

import * as React from 'react'
import Link from 'next/link'
import { BookOpen, ArrowRight, Play, CheckCircle2, Clock } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/primitives/card'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { CAREER_TRACKS, MOCK_MODULES } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'

export default function DashboardPage() {
  const { learner, selectedTrackId, completedLessonIds } = useLearner()
  const firstName = learner.name.trim().split(' ')[0] || 'Learner'

  // Calculate mock progress
  const totalLessons = MOCK_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedCount = completedLessonIds.length
  const progressPercent = Math.round((completedCount / totalLessons) * 100)

  return (
    <div className="space-y-10 animate-toast-in">
      {/* Welcome header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="active">COHORT 2026-B</Badge>
          <span className="text-xs font-mono text-muted">ACTIVE LEARNER</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          Welcome back, {firstName}
        </h1>
        <p className="font-body text-sm sm:text-base text-muted">
          Your diagnostic benchmark is active. Continue your next lesson to maintain placement velocity.
        </p>
      </div>

      {/* Hero "Next Up" Lesson Banner */}
      <Card featured className="p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge variant="active" shape="rect">
            NEXT LESSON UP
          </Badge>
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>EST. 15 MIN</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="font-display text-2xl font-bold text-ink">
            Agent Loop Mechanics & State Machine Planning
          </h2>
          <p className="font-body text-sm text-muted max-w-2xl leading-relaxed">
            Module 01 · Lesson 1: ReAct reasoning cycles, token budgeting, and structuring recursive decision workflows.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap pt-2">
          <Link href="/app/lesson/lesson-1">
            <Button variant="primary" size="default" className="gap-2 min-w-[180px]">
              <Play className="w-4 h-4 fill-black text-black" />
              Resume Lesson
            </Button>
          </Link>

          <Link href={`/app/track/${selectedTrackId}`}>
            <Button variant="secondary" size="default">
              View Syllabus
            </Button>
          </Link>
        </div>
      </Card>

      {/* Enrolled Tracks Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-xl font-medium text-ink">
              Enrolled Career Tracks
            </h2>
            <p className="text-xs font-body text-muted">
              Structured train-and-place curricula with hiring partner pipelines.
            </p>
          </div>
          <Badge variant="neutral">{CAREER_TRACKS.length} TRACKS ENROLLED</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAREER_TRACKS.map((track) => {
            const isCurrent = track.id === selectedTrackId
            const trackProgress = isCurrent ? progressPercent : 0
            const statusLabel = isCurrent ? 'In Progress' : 'Pending Start'

            return (
              <Card
                key={track.id}
                interactive
                className={isCurrent ? 'border-gold/60' : 'border-border'}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant={isCurrent ? 'active' : 'neutral'}>
                      {statusLabel}
                    </Badge>
                    <span className="text-xs font-mono text-muted">
                      {track.duration}
                    </span>
                  </div>
                  <CardTitle className="mt-2 text-lg">
                    {track.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {track.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex justify-between text-xs font-mono text-muted">
                    <span>Curriculum Progress</span>
                    <span className="text-ink">{trackProgress}%</span>
                  </div>
                  <ProgressBar
                    value={trackProgress}
                    max={100}
                    size="sm"
                    variant={isCurrent ? 'gold' : 'gold'}
                  />
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-0">
                  <span className="text-xs font-mono text-muted">
                    {track.modulesCount} Modules
                  </span>

                  <Link href={`/app/track/${track.id}`}>
                    <Button variant="secondary" size="sm" secondaryTextColor="ink">
                      Open Track
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
