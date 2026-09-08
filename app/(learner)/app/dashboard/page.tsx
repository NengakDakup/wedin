'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Clock,
  Flame,
  Award,
  TrendingUp,
  Calendar,
  Filter,
  Share2,
  Download,
  ShieldCheck,
  Check,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
  Zap,
  BarChart3,
  Target,
  Code2,
  ExternalLink,
  Laptop,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/primitives/card'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Avatar } from '@/components/primitives/avatar'
import { CAREER_TRACKS, MOCK_MODULES } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'
import { cn } from '@/lib/utils'

// Deterministic activity matrix data (52 weeks x 7 days)
function generateActivityMatrix() {
  const weeks = 52
  const matrix: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      // Deterministic pattern with high density in Q2-Q3
      const seed = (w * 7 + d * 13) % 100
      let level = 0
      if (w < 4) {
        level = seed > 60 ? 1 : 0
      } else if (w < 20) {
        level = seed > 80 ? 3 : seed > 50 ? 2 : seed > 30 ? 1 : 0
      } else if (w < 42) {
        level = seed > 75 ? 4 : seed > 45 ? 3 : seed > 25 ? 2 : 1
      } else {
        level = seed > 70 ? 3 : seed > 40 ? 2 : seed > 20 ? 1 : 0
      }
      week.push(level)
    }
    matrix.push(week)
  }
  return matrix
}

// 6-axis Radar Chart data for Wedin Verified Skills
const SKILL_METRICS = [
  { axis: 'Productivity & Git', value: 92, max: 100 },
  { axis: 'Systems Design', value: 95, max: 100 },
  { axis: 'Agentic AI & LLMs', value: 96, max: 100 },
  { axis: 'Distributed Systems', value: 88, max: 100 },
  { axis: 'TypeScript & Architecture', value: 94, max: 100 },
  { axis: 'Vector DB & RAG', value: 90, max: 100 },
]

export default function DashboardPage() {
  const { learner, selectedTrack, selectedTrackId, completedLessonIds } = useLearner()
  const firstName = learner.name.trim().split(' ')[0] || 'Learner'
  const initials = learner.name
    ? learner.name
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'WO'

  // Activity matrix memo
  const activityMatrix = React.useMemo(() => generateActivityMatrix(), [])

  // Progress metrics
  const totalLessons = MOCK_MODULES.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedCount = completedLessonIds.length
  const progressPercent = Math.round((completedCount / totalLessons) * 100) || 68

  // Radar chart SVG points calculation
  const radarPoints = React.useMemo(() => {
    const totalAxes = SKILL_METRICS.length
    const radius = 90
    const centerX = 120
    const centerY = 110

    // Polygon coordinates
    const points = SKILL_METRICS.map((m, i) => {
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2
      const r = (m.value / m.max) * radius
      const x = centerX + r * Math.cos(angle)
      const y = centerY + r * Math.sin(angle)
      return `${x},${y}`
    }).join(' ')

    // Outer grid rings
    const rings = [0.25, 0.5, 0.75, 1.0].map((scale) => {
      return SKILL_METRICS.map((_, i) => {
        const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2
        const r = scale * radius
        const x = centerX + r * Math.cos(angle)
        const y = centerY + r * Math.sin(angle)
        return `${x},${y}`
      }).join(' ')
    })

    // Axis lines
    const axes = SKILL_METRICS.map((m, i) => {
      const angle = (Math.PI * 2 / totalAxes) * i - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 14) * Math.sin(angle)
      return { x1: centerX, y1: centerY, x2: x, y2: y, labelX, labelY, label: m.axis, value: m.value }
    })

    return { points, rings, axes, centerX, centerY }
  }, [])

  // Weekly streak days (Mon - Sun)
  const weekDays = [
    { day: 'Mon', date: '07', active: true, completed: true },
    { day: 'Tue', date: '08', active: true, completed: true },
    { day: 'Wed', date: '09', active: true, completed: true },
    { day: 'Thu', date: '10', active: true, isToday: true, completed: true },
    { day: 'Fri', date: '11', active: false, completed: false },
    { day: 'Sat', date: '12', active: false, completed: false },
    { day: 'Sun', date: '13', active: false, completed: false },
  ]

  return (
    <div className="space-y-8 pb-12 animate-toast-in">
      {/* 1. Header Toolbar & Quick Stats */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-2 border-b border-border/50">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-gold/15 text-gold border border-gold/30">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              COHORT 2026-B
            </span>
            <span className="text-xs font-mono text-muted hidden sm:inline">
              PROD PIPELINE · TA INDEX 98.4
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Welcome back, {firstName} 👋
          </h1>
          <p className="font-body text-xs sm:text-sm text-muted mt-0.5">
            Thursday, Sep 10, 2026 · Next sprint review in <span className="text-ink font-semibold">3 days</span>
          </p>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <Link href="/#toolkit">
            <Button variant="secondary" size="sm" className="gap-1.5 text-xs font-medium">
              <Share2 className="w-3.5 h-3.5 text-gold" />
              <span>Share Talent Dossier</span>
            </Button>
          </Link>
          <Button variant="primary" size="sm" className="gap-1.5 text-xs font-medium">
            <Download className="w-3.5 h-3.5" />
            <span>Export Verified Proof</span>
          </Button>
        </div>
      </div>

      {/* 2. Top Metric Cards (3-Column Layout from Reference Image 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Metric 1: Learning Streak */}
        <div className="p-5 rounded-2xl bg-surface border border-border/70 hover:border-gold/40 transition-all shadow-sm flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                <span className="text-xs font-mono font-medium text-muted uppercase tracking-wider">
                  Learning streak
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                +2 days vs last week
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ink">
                18
              </span>
              <span className="text-xs font-mono text-muted">DAYS</span>
            </div>

            {/* Mini Sparkline Bar Chart */}
            <div className="mt-4 flex items-end gap-1.5 h-10 px-1 py-1 bg-bg/50 rounded-lg border border-border/40">
              {[40, 60, 45, 80, 70, 90, 85, 100, 65, 95, 80, 100, 90, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={cn(
                    'flex-1 rounded-sm transition-all duration-300',
                    i >= 11 ? 'bg-indigo-500 shadow-sm' : 'bg-indigo-500/30'
                  )}
                  title={`Day ${i + 1}: ${h}% activity`}
                />
              ))}
            </div>

            {/* Sub-metrics */}
            <div className="mt-4 pt-3 border-t border-border/60 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase">Longest</span>
                <span className="font-semibold text-ink">21 days</span>
              </div>
              <div className="border-x border-border/60">
                <span className="block text-[10px] font-mono text-muted uppercase">Missed</span>
                <span className="font-semibold text-emerald-500">0 days</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase">Attendance</span>
                <span className="font-semibold text-ink">98.4%</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted hover:text-gold transition-colors">
            <span className="font-medium">View attendance log</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Metric 2: Course Progress */}
        <div className="p-5 rounded-2xl bg-surface border border-border/70 hover:border-gold/40 transition-all shadow-sm flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
                <span className="text-xs font-mono font-medium text-muted uppercase tracking-wider">
                  Course progress
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                +4.1% this week
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ink">
                {progressPercent}%
              </span>
              <span className="text-xs font-mono text-muted">COMPLETED</span>
            </div>

            {/* Mini Progress Sparkline */}
            <div className="mt-4 flex items-end gap-1.5 h-10 px-1 py-1 bg-bg/50 rounded-lg border border-border/40">
              {[25, 30, 35, 42, 48, 52, 55, 60, 62, 65, 66, 68, 68, 68].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={cn(
                    'flex-1 rounded-sm transition-all duration-300',
                    i >= 11 ? 'bg-gold shadow-sm' : 'bg-gold/30'
                  )}
                  title={`Sprint ${i + 1}: ${h}%`}
                />
              ))}
            </div>

            {/* Sub-metrics */}
            <div className="mt-4 pt-3 border-t border-border/60 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase">This week</span>
                <span className="font-semibold text-ink">8 lessons</span>
              </div>
              <div className="border-x border-border/60">
                <span className="block text-[10px] font-mono text-muted uppercase">Last week</span>
                <span className="font-semibold text-ink">5 lessons</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-muted uppercase">Capstones</span>
                <span className="font-semibold text-gold">2/3 Passed</span>
              </div>
            </div>
          </div>

          <Link
            href={`/app/track/${selectedTrackId}`}
            className="mt-4 pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted hover:text-gold transition-colors"
          >
            <span className="font-medium">View curriculum syllabus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Metric 3: Study Time & Velocity */}
        <div className="p-5 rounded-2xl bg-surface border border-border/70 hover:border-gold/40 transition-all shadow-sm flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                <span className="text-xs font-mono font-medium text-muted uppercase tracking-wider">
                  Sprint study time
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                +18% vs cohort
              </span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-ink">
                14h 35m
              </span>
              <span className="text-xs font-mono text-muted">THIS WEEK</span>
            </div>

            {/* Segmented Stacked Progress Bar */}
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded-full overflow-hidden flex bg-border/40 p-0.5 gap-0.5">
                <div style={{ width: '54%' }} className="h-full rounded-l-full bg-gold" title="AI Engineering: 54%" />
                <div style={{ width: '34%' }} className="h-full bg-cyan-500" title="Distributed Systems: 34%" />
                <div style={{ width: '12%' }} className="h-full rounded-r-full bg-indigo-500" title="ATS Proof: 12%" />
              </div>

              {/* Legend with percentages */}
              <div className="pt-2 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-muted">AI Systems & Agents</span>
                  </div>
                  <span className="font-mono font-semibold text-ink">54% (7h 50m)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span className="text-muted">Cloud & Microservices</span>
                  </div>
                  <span className="font-mono font-semibold text-ink">34% (4h 55m)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-muted">ATS Proof Labs</span>
                  </div>
                  <span className="font-mono font-semibold text-ink">12% (1h 50m)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-2 border-t border-border/40 flex items-center justify-between text-xs text-muted hover:text-gold transition-colors">
            <span className="font-medium">Compare with peers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* 3. Continue Learning Hero Section (Inspired by Reference Images 2 & 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Active Lesson Card (2 Cols) */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface via-surface to-surface/90 border border-gold/40 p-6 sm:p-7 shadow-sm hover:border-gold transition-all group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-gold text-black shadow-sm">
                  <Play className="w-3 h-3 fill-black text-black" />
                  CURRENT ACTIVE LESSON
                </span>
                <Badge variant="neutral" className="text-[11px]">
                  MODULE 01 · LESSON 1
                </Badge>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-muted bg-surface/80 px-2.5 py-1 rounded-full border border-border/60">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>15 MINS REMAINING</span>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                Agent Loop Mechanics & State Machine Planning
              </h2>
              <p className="font-body text-xs sm:text-sm text-muted mt-1.5 max-w-2xl leading-relaxed">
                Core paradigms of autonomous ReAct reasoning cycles, token budgeting, and structuring recursive decision workflows with deterministic JSON function protocols.
              </p>
            </div>

            {/* Progress indicators */}
            <div className="space-y-2 pt-1 max-w-xl">
              <div className="flex justify-between text-xs font-mono text-muted">
                <span>Module Progress (18 of 26 Lessons Completed)</span>
                <span className="text-gold font-semibold">{progressPercent}%</span>
              </div>
              <ProgressBar value={progressPercent} max={100} size="sm" variant="gold" />
            </div>

            <div className="flex items-center gap-3 flex-wrap pt-2">
              <Link href="/app/lesson/lesson-1">
                <Button variant="primary" size="default" className="gap-2 text-sm shadow-md font-medium">
                  <Play className="w-4 h-4 fill-black text-black" />
                  Resume Lesson Now
                </Button>
              </Link>
              <Link href={`/app/track/${selectedTrackId}`}>
                <Button variant="secondary" size="default" className="text-sm">
                  View Syllabus & Notes
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Capstone Lab In-Flight Widget (1 Col) */}
        <div className="rounded-2xl bg-surface border border-border/70 p-6 flex flex-col justify-between shadow-sm hover:border-gold/40 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                IN-FLIGHT CAPSTONE
              </span>
              <span className="text-xs font-mono text-muted">DUE IN 3 DAYS</span>
            </div>

            <div>
              <h3 className="font-display text-base font-bold text-ink">
                Vector Retrieval & Hybrid BM25 Service
              </h3>
              <p className="font-body text-xs text-muted mt-1 leading-relaxed">
                Deploying Qdrant with BM25 reranking in Docker container with sub-45ms latency SLAs.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-bg/70 border border-border/50 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">CI/CD Pipeline Tests</span>
                <span className="text-emerald-500 font-semibold">4 / 5 Passing</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Code Review Status</span>
                <span className="text-gold font-semibold">75% Ready</span>
              </div>
            </div>
          </div>

          <Link href="/app/track/full-stack-ai" className="mt-4 pt-3 border-t border-border/50">
            <Button variant="secondary" size="sm" className="w-full justify-center gap-1.5 text-xs">
              <Code2 className="w-3.5 h-3.5 text-gold" />
              <span>Open Cloud Terminal & Repo</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 4. "Your Progress Timeline" (12-Month GitHub-Style Contribution Heatmap Matrix from Reference Image 1) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-border/70 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-bold text-ink flex items-center gap-2">
              <span>Your progress timeline</span>
              <Badge variant="neutral" className="text-[10px]">2026 AUDIT</Badge>
            </h2>
            <p className="text-xs font-body text-muted mt-0.5">
              Continuous commit validation, lesson mastery check-ins, and production labs verified by ATS.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-bg border border-border/60 text-xs font-medium text-muted">
              <Filter className="w-3.5 h-3.5 text-gold" />
              <span>Monthly</span>
            </div>
            <Button variant="secondary" size="sm" className="text-xs gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Compare Cohort</span>
            </Button>
          </div>
        </div>

        {/* 12-Month Matrix Container */}
        <div className="overflow-x-auto pb-2 scrollbar-thin">
          <div className="min-w-[760px] space-y-2">
            {/* Month labels header */}
            <div className="grid grid-cols-12 text-[11px] font-mono text-muted pl-6">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            {/* Matrix grid (7 rows x 52 columns) */}
            <div className="flex gap-1.5">
              {/* Day labels column */}
              <div className="flex flex-col justify-between text-[9px] font-mono text-muted py-0.5 pr-1">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>

              {/* Grid squares */}
              <div className="flex-1 grid grid-flow-col grid-rows-7 gap-1">
                {activityMatrix.map((week, wIdx) =>
                  week.map((level, dIdx) => {
                    // Color mapping based on activity level
                    let bgClass = 'bg-border/30 hover:ring-1 hover:ring-gold'
                    if (level === 1) bgClass = 'bg-gold/25'
                    if (level === 2) bgClass = 'bg-gold/50'
                    if (level === 3) bgClass = 'bg-gold/80'
                    if (level === 4) bgClass = 'bg-gold shadow-[0_0_6px_rgba(217,119,6,0.5)]'

                    return (
                      <div
                        key={`${wIdx}-${dIdx}`}
                        className={cn(
                          'w-3 h-3 rounded-[2.5px] transition-all duration-150 cursor-pointer',
                          bgClass
                        )}
                        title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level > 0 ? `${level * 2} verified activities` : 'No activity'}`}
                      />
                    )
                  })
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Footer Summary Row */}
        <div className="pt-3 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-medium text-ink">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>84 Active Days in 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Best Month: August (92% consistency)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Intensity legend */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-[2px] bg-border/40" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-gold/25" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-gold/50" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-gold/80" />
              <span className="w-2.5 h-2.5 rounded-[2px] bg-gold" />
              <span>More</span>
            </div>

            <button className="inline-flex items-center gap-1 text-gold hover:underline font-medium">
              <span>View all details</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Bottom 3-Card Multi-Column Row (Directly from Reference Image 1) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card A: Weekly Streak Calendar */}
        <div className="p-6 rounded-2xl bg-surface border border-border/70 shadow-sm flex flex-col justify-between hover:border-gold/40 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                  <Flame className="w-4 h-4 fill-gold text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-ink">Weekly streak</h3>
                  <p className="text-[11px] font-mono text-muted">CURRENT SPRINT</p>
                </div>
              </div>
              <span className="font-display text-2xl font-bold text-ink">5 days</span>
            </div>

            {/* Days row Mon - Sun */}
            <div className="grid grid-cols-7 gap-1 pt-2">
              {weekDays.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono text-muted uppercase">{item.day}</span>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-semibold transition-all',
                      item.completed
                        ? 'bg-gold text-black shadow-sm'
                        : item.isToday
                        ? 'border-2 border-gold text-gold animate-pulse bg-gold/10'
                        : 'border border-border/80 text-muted/60 bg-bg/40'
                    )}
                  >
                    {item.completed ? (
                      <Check className="w-4 h-4 stroke-[3]" />
                    ) : (
                      item.date
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-bg/60 border border-border/50 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-gold" />
                  Active Streak
                </span>
                <span className="font-semibold text-ink">5 days running</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                  Personal Record
                </span>
                <span className="font-semibold text-ink">21 days in July</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted">
            <span>Next milestone: 7-day badge</span>
            <span className="text-gold font-semibold">+150 XP</span>
          </div>
        </div>

        {/* Card B: Enrolled Tracks & Learning Progress */}
        <div className="p-6 rounded-2xl bg-surface border border-border/70 shadow-sm flex flex-col justify-between hover:border-gold/40 transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-ink">Learning progress</h3>
                  <p className="text-[11px] font-mono text-muted">ACTIVE CURRICULA</p>
                </div>
              </div>
              <Badge variant="neutral" className="text-[10px]">3 TRACKS</Badge>
            </div>

            {/* List of enrolled curricula with circular progress meters */}
            <div className="space-y-3 pt-1">
              {/* Item 1 */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-bg/50 border border-border/40 hover:border-gold/30 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-gold/20 text-gold flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    AI
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-xs text-ink truncate">AI Systems & Agents</h4>
                    <p className="text-[10px] font-mono text-muted truncate">Intermediate · 12 Modules</p>
                  </div>
                </div>
                <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 transform -rotate-90">
                    <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-border/40" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 14}
                      strokeDashoffset={2 * Math.PI * 14 * (1 - 0.68)}
                      className="text-gold stroke-round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-mono font-bold text-ink">68%</span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-bg/50 border border-border/40 hover:border-gold/30 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    CL
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-xs text-ink truncate">Cloud Microservices</h4>
                    <p className="text-[10px] font-mono text-muted truncate">Advanced · 5 Modules</p>
                  </div>
                </div>
                <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 transform -rotate-90">
                    <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-border/40" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 14}
                      strokeDashoffset={2 * Math.PI * 14 * (1 - 0.42)}
                      className="text-cyan-500 stroke-round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-mono font-bold text-ink">42%</span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-bg/50 border border-border/40 hover:border-gold/30 transition-all">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    PE
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-xs text-ink truncate">Senior Product Engineer</h4>
                    <p className="text-[10px] font-mono text-muted truncate">Full-Stack · 4 Modules</p>
                  </div>
                </div>
                <div className="w-9 h-9 relative flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 transform -rotate-90">
                    <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-border/40" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 14}
                      strokeDashoffset={2 * Math.PI * 14 * (1 - 0.85)}
                      className="text-indigo-500 stroke-round"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-mono font-bold text-ink">85%</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={`/app/track/${selectedTrackId}`}
            className="pt-4 border-t border-border/50 flex items-center justify-between text-xs text-gold hover:underline font-medium"
          >
            <span>Explore all curricula</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Card C: Skill Breakdown Radar Chart (Directly from Reference Image 1) */}
        <div className="p-6 rounded-2xl bg-surface border border-border/70 shadow-sm flex flex-col justify-between hover:border-gold/40 transition-all">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-ink">Skill breakdown</h3>
                  <p className="text-[11px] font-mono text-muted">COMPETENCY RADAR</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                ATS VALIDATED
              </span>
            </div>

            {/* Radar Spider SVG Canvas */}
            <div className="flex items-center justify-center py-1">
              <svg width="240" height="220" className="overflow-visible">
                {/* Background Web Rings */}
                {radarPoints.rings.map((ring, idx) => (
                  <polygon
                    key={idx}
                    points={ring}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border/40"
                  />
                ))}

                {/* Spoke Axes */}
                {radarPoints.axes.map((axis, idx) => (
                  <line
                    key={idx}
                    x1={axis.x1}
                    y1={axis.y1}
                    x2={axis.x2}
                    y2={axis.y2}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border/50"
                  />
                ))}

                {/* Skill polygon fill with gold glow */}
                <polygon
                  points={radarPoints.points}
                  fill="rgba(217, 119, 6, 0.2)"
                  stroke="rgba(217, 119, 6, 0.9)"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* Data point dots */}
                {radarPoints.axes.map((axis, idx) => {
                  const angle = (Math.PI * 2 / SKILL_METRICS.length) * idx - Math.PI / 2
                  const r = (SKILL_METRICS[idx].value / SKILL_METRICS[idx].max) * 90
                  const cx = 120 + r * Math.cos(angle)
                  const cy = 110 + r * Math.sin(angle)
                  return (
                    <circle
                      key={idx}
                      cx={cx}
                      cy={cy}
                      r="3.5"
                      fill="#D97706"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                  )
                })}
              </svg>
            </div>

            {/* Skill tags */}
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] font-mono text-muted">
              <div className="flex items-center justify-between px-2 py-1 rounded bg-bg/50 border border-border/40">
                <span>AI Agents</span>
                <span className="text-gold font-semibold">96%</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-bg/50 border border-border/40">
                <span>TypeScript</span>
                <span className="text-gold font-semibold">94%</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-bg/50 border border-border/40">
                <span>Sys Design</span>
                <span className="text-gold font-semibold">95%</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-bg/50 border border-border/40">
                <span>Vector RAG</span>
                <span className="text-gold font-semibold">90%</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted">
            <span>Overall Competency</span>
            <span className="font-semibold text-emerald-500 font-mono">92.8 / 100 (Tier-1)</span>
          </div>
        </div>
      </div>

      {/* 6. Talent Dossier Placement Engine Banner (Inspired by Reference Image 2 - Brooklyn Simmons card) */}
      <div className="rounded-2xl bg-gradient-to-r from-surface via-surface to-gold/10 border border-gold/40 p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <Avatar
              fallback={initials}
              alt={learner.name || 'Learner'}
              verified
              size="lg"
              className="ring-2 ring-gold/60 ring-offset-2 ring-offset-bg shrink-0"
            />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                  {learner.name}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  PRE-SCREENED CANDIDATE
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-muted mt-0.5">
                Full-Stack Autonomous Systems Fellow · Cohort 2026-B
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-muted mt-2 flex-wrap">
                <span>TA SCORE: <strong className="text-gold font-semibold">98.4 / 100</strong></span>
                <span>•</span>
                <span>TARGET: <strong className="text-ink font-semibold">₦24M – ₦36M / $45k - $70k</strong></span>
                <span>•</span>
                <span>VERIFIED BY: <strong className="text-muted">Wedin ATS Engine</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap lg:self-center">
            <Link href="/#toolkit">
              <Button variant="secondary" size="default" className="text-xs font-medium gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
                <span>Open Candidate Dossier</span>
              </Button>
            </Link>
            <Button variant="primary" size="default" className="text-xs font-medium gap-2">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Simulate Partner Interview</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
