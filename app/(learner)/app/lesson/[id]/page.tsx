'use client'

import * as React from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
  Lock,
  Check,
  FileText,
  Download,
  Code2,
  Terminal,
  Clock,
  Sparkles,
  Share2,
  ExternalLink,
  ChevronRight,
  Calendar,
  Users,
  Award,
  ShieldCheck,
  Layers,
  Send,
  HelpCircle,
  Laptop,
} from 'lucide-react'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Card } from '@/components/primitives/card'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { Avatar } from '@/components/primitives/avatar'
import { MOCK_MODULES, Lesson, NoteItem, CAREER_TRACKS } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'
import { cn } from '@/lib/utils'

export default function LessonPlayerPage() {
  const params = useParams()
  const router = useRouter()
  const { learner, selectedTrack, selectedTrackId, completedLessonIds, markLessonComplete } = useLearner()

  const lessonId = (params?.id as string) || 'lesson-1'

  // Find the active lesson
  const allLessons = MOCK_MODULES.flatMap((m) => m.lessons)
  const currentLesson = allLessons.find((l) => l.id === lessonId) || allLessons[0]

  // Find module containing the lesson
  const currentModule = MOCK_MODULES.find((m) => m.lessons.some((l) => l.id === currentLesson.id)) || MOCK_MODULES[0]

  // Playback state
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentSeconds, setCurrentSeconds] = React.useState(165) // default ~02:45
  const [playbackSpeed, setPlaybackSpeed] = React.useState<number>(1)
  const [isMuted, setIsMuted] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<'topics' | 'notes' | 'sandbox' | 'resources'>('topics')

  // User created notes
  const [customNotes, setCustomNotes] = React.useState<NoteItem[]>([])
  const [newNoteInput, setNewNoteInput] = React.useState('')

  // Interactive Code Sandbox state
  const [sandboxCode, setSandboxCode] = React.useState(
`# Production ReAct Agent Loop Mechanics
from typing import Dict, Any, List
import json

class AutonomousAgent:
    def __init__(self, model: str = "claude-3-7-sonnet", token_budget: int = 4096):
        self.model = model
        self.token_budget = token_budget
        self.scratchpad: List[Dict[str, Any]] = []

    def execute_react_step(self, user_goal: str) -> Dict[str, Any]:
        """Runs iterative Thought -> Action -> Observation step."""
        thought = f"Analyze goal '{user_goal}' with budget {self.token_budget}"
        self.scratchpad.append({"type": "thought", "content": thought})
        
        # Deterministic structured function calling
        action = {"tool": "vector_bm25_search", "query": user_goal}
        return {"status": "SUCCESS", "action": action, "active_budget": self.token_budget - 240}

# Initialize Agent
agent = AutonomousAgent()
result = agent.execute_react_step("Index enterprise payment docs")
print("Agent Execution State:", json.dumps(result, indent=2))`
  )
  const [sandboxOutput, setSandboxOutput] = React.useState<string | null>(null)
  const [isExecutingCode, setIsExecutingCode] = React.useState(false)

  // Timer simulation when playing
  React.useEffect(() => {
    let interval: any = null
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= currentLesson.durationSeconds) {
            setIsPlaying(false)
            return currentLesson.durationSeconds
          }
          return prev + 1
        })
      }, 1000 / playbackSpeed)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isPlaying, playbackSpeed, currentLesson.durationSeconds])

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  // Combined notes
  const allNotes = React.useMemo(() => {
    return [...currentLesson.notes, ...customNotes].sort((a, b) => a.timestampSeconds - b.timestampSeconds)
  }, [currentLesson.notes, customNotes])

  // Active note is closest prior to current timestamp
  const activeNote = allNotes
    .slice()
    .reverse()
    .find((n) => currentSeconds >= n.timestampSeconds) || allNotes[0]

  const progressPercent = Math.min(100, (currentSeconds / currentLesson.durationSeconds) * 100)

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    setCurrentSeconds((val / 100) * currentLesson.durationSeconds)
  }

  const handleNoteClick = (note: NoteItem) => {
    setCurrentSeconds(note.timestampSeconds)
    setIsPlaying(true)
  }

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newNoteInput.trim()) return
    const newNote: NoteItem = {
      id: `user-note-${Date.now()}`,
      timestampSeconds: currentSeconds,
      timestampLabel: formatTime(currentSeconds),
      title: 'Personal Timestamp Bookmark',
      description: newNoteInput.trim(),
    }
    setCustomNotes((prev) => [...prev, newNote])
    setNewNoteInput('')
  }

  const handleRunSandbox = () => {
    setIsExecutingCode(true)
    setSandboxOutput(null)
    setTimeout(() => {
      setIsExecutingCode(false)
      setSandboxOutput(
`[SANDBOX RUNTIME: Python 3.12 / Ubuntu 24.04 LTS]
✓ AST Syntax parsing valid
✓ Token budget allocated: 4096 tokens
✓ ReAct cycle initiated: Thought -> Action -> Observation
Agent Execution State: {
  "status": "SUCCESS",
  "action": {
    "tool": "vector_bm25_search",
    "query": "Index enterprise payment docs"
  },
  "active_budget": 3856
}
Execution completed in 24ms. Memory footprint: 14.2MB.`
      )
    }, 600)
  }

  const handleComplete = () => {
    markLessonComplete(currentLesson.id)
    // Find next lesson
    const currentIndex = allLessons.findIndex((l) => l.id === currentLesson.id)
    if (currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1]
      router.push(`/app/lesson/${nextLesson.id}`)
    } else {
      router.push(`/app/track/${selectedTrackId}/complete`)
    }
  }

  const isCurrentLessonComplete = completedLessonIds.includes(currentLesson.id)

  return (
    <div className="space-y-8 pb-16 animate-toast-in">
      {/* 1. Sleek Core Course Header Banner (Directly matching Reference Image 3: Core Developer) */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-surface via-[#18181b] to-surface border border-border/80 shadow-md p-6 sm:p-8">
        {/* Ambient background curves */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* Breadcrumb back navigation */}
          <Link
            href={`/app/track/${selectedTrackId}`}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-muted hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>&lt; COURSES / {selectedTrack.title.toUpperCase()}</span>
          </Link>

          {/* Masterclass Title */}
          <div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight uppercase leading-tight">
              {selectedTrack.title}: ADVANCED PRODUCTION ARCHITECTURE
            </h1>
          </div>

          {/* Instructor and Key Concept Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-center gap-2.5 bg-surface/90 border border-border/70 rounded-full px-3 py-1 text-xs text-ink font-body font-medium">
              <Avatar
                size="sm"
                fallback="TO"
                verified
                className="w-5 h-5 text-[10px]"
              />
              <span>Tunde Onakoya (Lead AI Architect)</span>
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {['REASONING LOOPS', 'STATE MACHINES', 'BM25 RETRIEVAL', 'SANDBOX RUNNERS'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-surface border border-border/60 text-muted uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Course Progress Stats Row (Directly matching Image 3) */}
          <div className="pt-3 space-y-2 border-t border-border/60">
            <div className="flex items-center justify-between text-xs font-mono text-muted flex-wrap gap-3">
              <div className="flex items-center gap-6 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-gold" />
                  <strong className="text-ink">{completedLessonIds.length + 1}/26</strong> lessons
                </span>
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <strong className="text-ink">12/35</strong> practical works
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <strong className="text-ink">68%</strong> progress
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <strong className="text-ink">1/3</strong> final capstone
                </span>
              </div>
              <span className="text-gold font-semibold">COHORT TIER-1 PACING</span>
            </div>

            {/* Glowing progress line */}
            <ProgressBar value={68} max={100} size="sm" variant="gold" />
          </div>
        </div>
      </div>

      {/* 2. Main Two-Column Stage: Video & Interactive Labs (Left 68%) + Course Details & Mentorship (Right 32%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Player & Interactive Content (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Video Player Canvas */}
          <div className="relative w-full aspect-video rounded-3xl bg-surface border border-border/90 overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none shadow-2xl group">
            {/* Ambient poster gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-surface/60 to-transparent pointer-events-none" />

            {/* Top Player Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-xs text-muted tracking-wider uppercase">
                  Wedin Player · HD 1080p 60fps
                </span>
              </div>
              <Badge variant="active" shape="rect" className="text-[10px]">
                {currentModule.title.split(':')[0]}
              </Badge>
            </div>

            {/* Centered Circular Gold Play/Pause Button */}
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

            {/* Scrub Bar & Player Controls */}
            <div className="relative z-10 space-y-3 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10">
              {/* Scrub Bar */}
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progressPercent}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/20 rounded-pill appearance-none cursor-pointer accent-gold hover:h-2 transition-all"
                />
              </div>

              {/* Bottom control items */}
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-ink hover:text-gold transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentSeconds(0)}
                    className="text-muted hover:text-ink transition-colors"
                    title="Restart Lesson"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gold font-semibold">{formatTime(currentSeconds)}</span>
                    <span>/</span>
                    <span>{currentLesson.durationLabel}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Playback speed selector */}
                  <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md border border-white/10">
                    {[1, 1.25, 1.5, 2].map((speed) => (
                      <button
                        key={speed}
                        type="button"
                        onClick={() => setPlaybackSpeed(speed)}
                        className={cn(
                          'px-1.5 py-0.5 rounded text-[10px] transition-colors',
                          playbackSpeed === speed ? 'bg-gold text-black font-bold' : 'text-muted hover:text-ink'
                        )}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (document.fullscreenElement) {
                        document.exitFullscreen()
                      } else {
                        document.documentElement.requestFullscreen()
                      }
                    }}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Title & Primary Action Strip */}
          <div className="p-6 rounded-2xl bg-surface border border-border/70 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="active" shape="rect" className="text-[10px]">
                    LESSON {allLessons.findIndex((l) => l.id === currentLesson.id) + 1} OF {allLessons.length}
                  </Badge>
                  <span className="text-xs font-mono text-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {currentLesson.durationLabel}
                  </span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  {currentLesson.title}
                </h2>
              </div>

              {/* Complete & Next CTA */}
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="primary"
                  size="default"
                  onClick={handleComplete}
                  className="gap-2 text-xs font-semibold shadow-md"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{isCurrentLessonComplete ? 'Review Completed' : 'Mark as Complete & Next'}</span>
                </Button>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              {currentLesson.description}
            </p>
          </div>

          {/* 3. Interactive Tabbed Canvas (Topics Checklist from Image 3, Synced Notes, Sandbox Code Lab, Resources) */}
          <div className="space-y-4">
            {/* Tab navigation headers */}
            <div className="flex items-center gap-2 border-b border-border/70 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'topics', label: 'Curriculum Topics', icon: Layers },
                { id: 'notes', label: `Timestamp Notes (${allNotes.length})`, icon: FileText },
                { id: 'sandbox', label: 'Cloud Code Sandbox', icon: Terminal },
                { id: 'resources', label: `Lab Downloads (${currentLesson.resources.length})`, icon: Download },
              ].map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-medium transition-all relative whitespace-nowrap cursor-pointer',
                      isActive
                        ? 'text-gold bg-surface border-t border-x border-border/80 font-semibold'
                        : 'text-muted hover:text-ink hover:bg-surface/50'
                    )}
                  >
                    <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-gold' : 'text-muted')} />
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gold" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* TAB 1: CURRICULUM TOPICS (Directly matching Reference Image 3: Core Developer) */}
            {activeTab === 'topics' && (
              <div className="space-y-6 animate-toast-in">
                {MOCK_MODULES.map((module, mIdx) => (
                  <div key={module.id} className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-muted font-semibold uppercase tracking-wider">
                        TOPIC {mIdx + 1}: {module.title.replace(/^Module \d+:\s*/, '')}
                      </span>
                      <span className="text-gold">{module.duration}</span>
                    </div>

                    <div className="space-y-2">
                      {module.lessons.map((itemLesson) => {
                        const isCurrent = itemLesson.id === currentLesson.id
                        const isDone = completedLessonIds.includes(itemLesson.id)

                        return (
                          <div
                            key={itemLesson.id}
                            onClick={() => router.push(`/app/lesson/${itemLesson.id}`)}
                            className={cn(
                              'p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 group',
                              isCurrent
                                ? 'bg-surface border-gold ring-1 ring-gold/30 shadow-sm'
                                : isDone
                                ? 'bg-surface/60 border-border/60 hover:border-gold/40'
                                : 'bg-surface/30 border-border/40 hover:border-border'
                            )}
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              {/* Left status badge */}
                              <div
                                className={cn(
                                  'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105',
                                  isCurrent
                                    ? 'bg-gold text-black'
                                    : isDone
                                    ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                                    : 'bg-bg border border-border/70 text-muted'
                                )}
                              >
                                {isCurrent ? (
                                  <Play className="w-4 h-4 fill-black ml-0.5" />
                                ) : isDone ? (
                                  <CheckCircle2 className="w-4 h-4" />
                                ) : (
                                  <Lock className="w-3.5 h-3.5" />
                                )}
                              </div>

                              <div className="min-w-0">
                                <h4
                                  className={cn(
                                    'font-body text-xs sm:text-sm font-semibold truncate transition-colors',
                                    isCurrent ? 'text-gold' : 'text-ink group-hover:text-gold'
                                  )}
                                >
                                  {itemLesson.title}
                                </h4>
                                <div className="flex items-center gap-3 text-[11px] font-mono text-muted mt-0.5">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-gold" />
                                    {itemLesson.durationLabel}
                                  </span>
                                  <span>•</span>
                                  <span>2 practical tasks</span>
                                  {isDone && (
                                    <>
                                      <span>•</span>
                                      <span className="text-emerald-500 font-semibold">VERIFIED</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Right play indicator */}
                            <div className="shrink-0">
                              <button
                                type="button"
                                className={cn(
                                  'w-8 h-8 rounded-full flex items-center justify-center transition-all',
                                  isCurrent
                                    ? 'bg-gold/20 text-gold border border-gold/40'
                                    : 'bg-bg text-muted group-hover:text-gold border border-border/60'
                                )}
                              >
                                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: SYNCHRONIZED TIMESTAMP NOTES */}
            {activeTab === 'notes' && (
              <div className="space-y-4 animate-toast-in">
                {/* Note creation bar */}
                <form onSubmit={handleAddNote} className="flex gap-2 p-3 rounded-2xl bg-surface border border-border/70">
                  <input
                    type="text"
                    value={newNoteInput}
                    onChange={(e) => setNewNoteInput(e.target.value)}
                    placeholder={`Add personal note at current timestamp (${formatTime(currentSeconds)})...`}
                    className="flex-1 bg-bg border border-border/80 rounded-xl px-3 py-2 text-xs text-ink placeholder:text-muted focus:outline-none focus:border-gold"
                  />
                  <Button variant="primary" size="sm" type="submit" className="gap-1 text-xs">
                    <Send className="w-3 h-3" />
                    <span>Save Bookmark</span>
                  </Button>
                </form>

                {/* Notes List */}
                <div className="space-y-3">
                  {allNotes.map((note) => {
                    const isHighlighted = activeNote?.id === note.id

                    return (
                      <div
                        key={note.id}
                        onClick={() => handleNoteClick(note)}
                        className={cn(
                          'p-4 rounded-2xl bg-surface border transition-all cursor-pointer flex items-start gap-4 group',
                          isHighlighted
                            ? 'border-gold ring-1 ring-gold/30 shadow-sm'
                            : 'border-border/60 hover:border-muted/80'
                        )}
                      >
                        <Badge
                          variant={isHighlighted ? 'active' : 'neutral'}
                          className="shrink-0 mt-0.5 font-mono text-xs"
                        >
                          {note.timestampLabel}
                        </Badge>

                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={cn(
                                'font-body text-xs sm:text-sm font-semibold transition-colors',
                                isHighlighted ? 'text-gold' : 'text-ink group-hover:text-gold'
                              )}
                            >
                              {note.title}
                            </h4>
                            {isHighlighted && (
                              <span className="text-[10px] font-mono text-gold uppercase tracking-wider font-semibold">
                                PLAYING AT THIS POINT
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
              </div>
            )}

            {/* TAB 3: CLOUD CODE SANDBOX */}
            {activeTab === 'sandbox' && (
              <div className="space-y-4 animate-toast-in">
                <div className="p-4 rounded-2xl bg-[#0d1117] border border-border/80 text-xs font-mono space-y-3">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="text-muted ml-2">agent_react_engine.py</span>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleRunSandbox}
                      disabled={isExecutingCode}
                      className="gap-1.5 text-xs py-1 h-7"
                    >
                      <Terminal className="w-3 h-3" />
                      <span>{isExecutingCode ? 'Executing in Cloud...' : 'Run in Sandbox'}</span>
                    </Button>
                  </div>

                  <textarea
                    value={sandboxCode}
                    onChange={(e) => setSandboxCode(e.target.value)}
                    rows={12}
                    className="w-full bg-transparent text-[#e6edf3] font-mono text-xs focus:outline-none resize-none leading-relaxed selection:bg-gold/40"
                    spellCheck={false}
                  />

                  {sandboxOutput && (
                    <div className="pt-3 border-t border-border/40 text-emerald-400 whitespace-pre-wrap leading-relaxed">
                      {sandboxOutput}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 4: RESOURCES & DOWNLOADS */}
            {activeTab === 'resources' && (
              <div className="space-y-3 animate-toast-in">
                {currentLesson.resources.length > 0 ? (
                  currentLesson.resources.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 rounded-2xl bg-surface border border-border/70 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-body text-xs sm:text-sm font-semibold text-ink truncate">
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
                        className="gap-1.5 shrink-0 text-xs"
                        onClick={() => alert(`Downloading verified lab resource ${res.title}...`)}
                      >
                        <Download className="w-3.5 h-3.5 text-gold" />
                        <span>Download</span>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="p-8 rounded-2xl bg-surface border border-border/60 text-center space-y-2">
                    <FileText className="w-8 h-8 text-muted mx-auto" />
                    <p className="text-xs text-muted">No external files required for this conceptual lecture.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Course Description & Metadata Widget (4 cols on lg - Directly from Reference Image 3) */}
        <div className="lg:col-span-4 space-y-6">
          {/* COURSE DESCRIPTION (Directly matching Reference Image 3) */}
          <div className="p-6 rounded-2xl bg-surface border border-border/70 shadow-sm space-y-3">
            <h3 className="font-mono text-xs font-semibold text-muted uppercase tracking-wider">
              COURSE DESCRIPTION
            </h3>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              In this masterclass, you will take a deep dive into autonomous ReAct reasoning paradigms, token budgeting, and structuring recursive decision workflows. The techniques taught here are benchmarked against senior engineering standards at Tier-1 companies.
            </p>
          </div>

          {/* COURSE DETAILS METRICS (Directly matching Reference Image 3) */}
          <div className="p-6 rounded-2xl bg-surface border border-border/70 shadow-sm space-y-4">
            <h3 className="font-mono text-xs font-semibold text-muted uppercase tracking-wider">
              COURSE DETAILS
            </h3>

            <div className="space-y-3 text-xs font-body text-muted">
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-gold shrink-0" />
                <span><strong className="text-ink font-semibold">17.4K</strong> fellows enrolled</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Updated <strong className="text-ink font-semibold">September 2026</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Level: <strong className="text-ink font-semibold">Advanced Production</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Full lifetime access & ATS audit seal</span>
              </div>
              <div className="flex items-center gap-3">
                <Laptop className="w-4 h-4 text-gold shrink-0" />
                <span>Cloud Docker sandbox environment</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>SHA-256 certificate of completion</span>
              </div>
            </div>
          </div>

          {/* LEAD MENTOR & 1:1 SPRINT REVIEW */}
          <div className="p-6 rounded-2xl bg-surface border border-border/70 shadow-sm space-y-4">
            <h3 className="font-mono text-xs font-semibold text-muted uppercase tracking-wider">
              LEAD MENTOR
            </h3>

            <div className="flex items-start gap-3.5">
              <Avatar fallback="TO" verified size="default" className="shrink-0" />
              <div>
                <h4 className="font-body text-sm font-semibold text-ink">Tunde Onakoya</h4>
                <p className="text-[11px] font-mono text-gold">Lead AI Systems Architect · ex-Google / Stripe</p>
                <p className="text-xs font-body text-muted mt-1 leading-relaxed">
                  Directing autonomous agent pipelines, vector database clustering, and high-scale financial ML systems.
                </p>
              </div>
            </div>

            <Button variant="secondary" size="sm" className="w-full justify-center gap-1.5 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Book 1:1 Sprint Review</span>
            </Button>
          </div>

          {/* ATS VERIFIED SKILLS BADGE */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-gold/10 via-surface to-surface border border-gold/30 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider">
                ATS SKILL ACCREDITATION
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-400">+150 XP</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Completing this lesson registers verified mastery in <strong className="text-ink">Autonomous ReAct Loops</strong> and <strong className="text-ink">Token Budgeting</strong> on your candidate dossier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
