'use client'

import * as React from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Play, Lock, CheckCircle2, Clock } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { CAREER_TRACKS, MOCK_MODULES, Lesson } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'

export default function TrackSyllabusPage() {
  const params = useParams()
  const router = useRouter()
  const trackId = (params?.id as string) || 'full-stack-ai'
  const { completedLessonIds } = useLearner()

  const track =
    CAREER_TRACKS.find((t) => t.id === trackId) || CAREER_TRACKS[0]
  const modules = MOCK_MODULES.filter((m) => m.trackId === track.id || track.id === 'full-stack-ai')

  const getLessonStatus = (lesson: Lesson): 'Complete' | 'In Progress' | 'Locked' => {
    if (completedLessonIds.includes(lesson.id)) return 'Complete'
    if (lesson.id === 'lesson-1') return 'In Progress'
    return 'Locked'
  }

  return (
    <div className="space-y-8 animate-toast-in">
      {/* Back button */}
      <div>
        <Link
          href="/app/dashboard"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO DASHBOARD</span>
        </Link>
      </div>

      {/* Track Header */}
      <div className="space-y-4 border-b border-border/60 pb-8">
        <div className="flex items-center gap-2">
          <Badge variant="active">TRACK CURRICULUM</Badge>
          <span className="text-xs font-mono text-muted">{track.duration}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          {track.title}
        </h1>

        <p className="font-body text-base text-muted max-w-3xl leading-relaxed">
          {track.description}
        </p>

        <div className="pt-2 flex items-center gap-6 text-xs font-mono text-muted">
          <span>{modules.length} MODULES</span>
          <span>·</span>
          <span>PLACEMENT ELIGIBLE</span>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-8">
        {modules.map((mod, modIdx) => (
          <div key={mod.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-medium text-ink">
                  {mod.title}
                </h3>
                <p className="text-xs font-body text-muted mt-0.5">
                  {mod.description}
                </p>
              </div>
              <span className="text-xs font-mono text-muted hidden sm:inline">
                {mod.duration}
              </span>
            </div>

            {/* Lesson rows */}
            <Card className="divide-y divide-border/60 overflow-hidden">
              {mod.lessons.map((lesson, lessonIdx) => {
                const status = getLessonStatus(lesson)
                const isLocked = status === 'Locked'
                const isCurrent = status === 'In Progress'

                const badgeVariant =
                  status === 'Complete'
                    ? 'success'
                    : status === 'In Progress'
                    ? 'active'
                    : 'neutral'

                return (
                  <div
                    key={lesson.id}
                    onClick={() => {
                      if (!isLocked) {
                        router.push(`/app/lesson/${lesson.id}`)
                      }
                    }}
                    className={`p-4 sm:p-5 flex items-center justify-between gap-4 transition-colors ${
                      isLocked
                        ? 'opacity-60 cursor-not-allowed bg-surface/30'
                        : 'hover:bg-surface/80 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-bg border border-border flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono text-muted">
                        {String(lessonIdx + 1).padStart(2, '0')}
                      </div>

                      <div className="space-y-1 min-w-0">
                        <h4
                          className={`font-body text-sm font-medium leading-snug truncate ${
                            isCurrent ? 'text-gold' : 'text-ink'
                          }`}
                        >
                          {lesson.title}
                        </h4>
                        <p className="font-body text-xs text-muted line-clamp-1">
                          {lesson.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-mono text-muted hidden sm:inline">
                        {lesson.durationLabel}
                      </span>

                      {/* Status Badge: text-color differentiated only */}
                      <Badge variant={badgeVariant}>
                        {status}
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
