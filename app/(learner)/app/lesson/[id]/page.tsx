'use client'

import * as React from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Play, Pause, Check, Download, FileText, Share2 } from 'lucide-react'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Card } from '@/components/primitives/card'
import { MOCK_MODULES, Lesson, NoteItem } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'
import { cn } from '@/lib/utils'

export default function LessonPlayerPage() {
  const params = useParams()
  const router = useRouter()
  const { markLessonComplete } = useLearner()

  const lessonId = (params?.id as string) || 'lesson-1'

  // Find the lesson from mock data
  const lesson =
    MOCK_MODULES.flatMap((m) => m.lessons).find((l) => l.id === lessonId) ||
    MOCK_MODULES[0].lessons[0]

  const [isPlaying, setIsPlaying] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<'notes' | 'resources'>('notes')
  const [currentSeconds, setCurrentSeconds] = React.useState(165) // 02:45 in reference

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  // Active note is the one matching or closest prior to current timestamp
  const activeNote = lesson.notes
    .slice()
    .reverse()
    .find((n) => currentSeconds >= n.timestampSeconds) || lesson.notes[0]

  const progressPercent = (currentSeconds / lesson.durationSeconds) * 100

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    setCurrentSeconds((val / 100) * lesson.durationSeconds)
  }

  const handleNoteClick = (note: NoteItem) => {
    setCurrentSeconds(note.timestampSeconds)
  }

  const handleComplete = () => {
    markLessonComplete(lesson.id)
    router.push('/app/track/full-stack-ai/complete')
  }

  return (
    <div className="pb-28 space-y-6 max-w-3xl mx-auto animate-toast-in">
      {/* Top Header: Back Button & Lesson Meta */}
      <div className="flex items-center justify-between">
        <Link
          href="/app/track/full-stack-ai"
          className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-ink hover:text-gold hover:border-gold transition-colors cursor-pointer"
          aria-label="Back to syllabus"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-2">
          <Badge variant="active">MODULE 01 · LESSON 01</Badge>
        </div>
      </div>

      {/* Video Player Canvas */}
      <div className="relative w-full aspect-video rounded-card bg-surface border border-border overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none shadow-xl">
        {/* Ambient video texture / poster */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-surface/40 to-transparent pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="font-mono text-xs text-muted tracking-wider uppercase">
            Wedin Player · HD 1080p
          </span>
          <Badge variant="neutral" shape="rect">
            PRO LAB
          </Badge>
        </div>

        {/* Centered Circular Gold Play Button with Glow */}
        <div className="relative z-10 flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold text-black shadow-glow animate-glow-pulse flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-black" />
            ) : (
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black ml-1" />
            )}
          </button>
        </div>

        {/* Scrub Bar & Timestamps */}
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-gold min-w-[42px]">
              {formatTime(currentSeconds)}
            </span>

            <div className="relative flex-1 flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={progressPercent}
                onChange={handleSeek}
                className="w-full h-1.5 bg-border rounded-pill appearance-none cursor-pointer accent-gold"
              />
            </div>

            <span className="font-mono text-xs text-muted min-w-[42px] text-right">
              {lesson.durationLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Lesson Title & Description (Two-line wrap matching reference) */}
      <div className="space-y-2 pt-2">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-snug">
          {lesson.title}
        </h1>
        <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
          {lesson.description}
        </p>
      </div>

      {/* Tabs: Notes / Resources (Active tab underlined in gold) */}
      <div className="border-b border-border/80 flex items-center gap-8">
        <button
          type="button"
          onClick={() => setActiveTab('notes')}
          className={cn(
            'pb-3 text-sm font-medium transition-colors relative cursor-pointer',
            activeTab === 'notes'
              ? 'text-ink'
              : 'text-muted hover:text-ink'
          )}
        >
          Notes ({lesson.notes.length})
          {activeTab === 'notes' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-pill" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('resources')}
          className={cn(
            'pb-3 text-sm font-medium transition-colors relative cursor-pointer',
            activeTab === 'resources'
              ? 'text-ink'
              : 'text-muted hover:text-ink'
          )}
        >
          Resources ({lesson.resources.length})
          {activeTab === 'resources' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-pill" />
          )}
        </button>
      </div>

      {/* Tab Content: Synchronized Notes List */}
      {activeTab === 'notes' && (
        <div className="space-y-3">
          {lesson.notes.map((note) => {
            const isHighlighted = activeNote?.id === note.id

            return (
              <div
                key={note.id}
                onClick={() => handleNoteClick(note)}
                className={cn(
                  'p-4 rounded-card bg-surface border transition-all duration-150 cursor-pointer flex items-start gap-4',
                  isHighlighted
                    ? 'border-gold ring-1 ring-gold/20 shadow-xs'
                    : 'border-border hover:border-muted/60'
                )}
              >
                {/* Monospace Timestamp Badge */}
                <Badge
                  variant={isHighlighted ? 'active' : 'neutral'}
                  className="shrink-0 mt-0.5"
                >
                  {note.timestampLabel}
                </Badge>

                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h4
                      className={cn(
                        'font-body text-sm font-medium transition-colors',
                        isHighlighted ? 'text-gold' : 'text-ink'
                      )}
                    >
                      {note.title}
                    </h4>
                    {isHighlighted && (
                      <span className="text-[10px] font-mono text-gold uppercase tracking-wider">
                        ACTIVE POINT
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs text-muted leading-relaxed">
                    {note.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Tab Content: Resources List */}
      {activeTab === 'resources' && (
        <div className="space-y-3">
          {lesson.resources.map((res) => (
            <div
              key={res.id}
              className="p-4 rounded-card bg-surface border border-border flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-full bg-bg border border-border flex items-center justify-center text-gold shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-body text-sm font-medium text-ink truncate">
                    {res.title}
                  </h4>
                  <span className="font-mono text-xs text-muted">
                    {res.type} · {res.fileSize}
                  </span>
                </div>
              </div>

              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 shrink-0"
                onClick={() => alert(`Downloading ${res.title}...`)}
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Sticky Bottom Bar with "Mark as Complete" Primary Pill CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-surface/85 backdrop-blur-md border-t border-border/80 p-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-xs font-mono text-muted">MODULE 01 PROGRESS</span>
            <p className="text-xs text-ink font-body font-medium">1 of 4 Lessons Finished</p>
          </div>

          <Button
            variant="primary"
            size="default"
            onClick={handleComplete}
            className="gap-2 w-full sm:w-auto min-w-[220px]"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            Mark as Complete
          </Button>
        </div>
      </div>
    </div>
  )
}
