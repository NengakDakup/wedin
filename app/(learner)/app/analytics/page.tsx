'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  TrendingUp,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  Sparkles,
  ArrowUpRight,
  BarChart3,
  Flame,
  Target,
  ExternalLink,
  Code2,
  Check,
  Layers,
  ChevronRight,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { useLearner } from '@/lib/learner-context'

// Deterministic activity matrix data (52 weeks x 7 days)
function generateActivityMatrix() {
  const weeks = 52
  const matrix: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
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

const SKILL_COMPETENCIES = [
  { skill: 'Agentic AI & LLM Systems', level: 'Expert', score: 96, benchmark: 85, color: 'text-gold' },
  { skill: 'Distributed Cloud & Kubernetes', level: 'Expert', score: 92, benchmark: 80, color: 'text-emerald-400' },
  { skill: 'TypeScript & Next.js Architecture', level: 'Expert', score: 95, benchmark: 82, color: 'text-gold' },
  { skill: 'Vector Databases & Hybrid RAG', level: 'Advanced', score: 88, benchmark: 75, color: 'text-amber-400' },
  { skill: 'System Design & High-Throughput APIs', level: 'Advanced', score: 90, benchmark: 78, color: 'text-emerald-400' },
  { skill: 'CI/CD & Cryptographic Attestation', level: 'Intermediate', score: 84, benchmark: 70, color: 'text-sky-400' },
]

const HIRING_BENCHMARKS = [
  {
    company: 'Stripe',
    role: 'Staff / Senior Product Engineer',
    matchScore: 92,
    compensation: '$160,000 - $210,000 / yr',
    status: 'Ready for 72-Hour Dispatch',
    requirements: ['High-throughput API reliability', 'TypeScript & Distributed systems', 'Automated test suite coverage > 90%'],
  },
  {
    company: 'Linear',
    role: 'Full-Stack Systems Engineer',
    matchScore: 89,
    compensation: '$150,000 - $195,000 / yr',
    status: 'Ready for 72-Hour Dispatch',
    requirements: ['Real-time sync primitives', 'Local-first architecture', 'Keyboard-centric UX excellence'],
  },
  {
    company: 'OpenAI',
    role: 'AI Solutions & Agentic Engineer',
    matchScore: 86,
    compensation: '$170,000 - $230,000 / yr',
    status: 'Final Capstone Pending',
    requirements: ['Function calling & LangGraph', 'Evaluation harness benchmark', 'Latency & Token cost optimization'],
  },
]

export default function AnalyticsPage() {
  const { learner, selectedTrack } = useLearner()
  const [timeRange, setTimeRange] = React.useState<'7d' | '30d' | 'all'>('30d')
  const activityMatrix = React.useMemo(() => generateActivityMatrix(), [])

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active">PERFORMANCE TELEMETRY</Badge>
            <span className="text-xs font-mono text-muted uppercase">
              {selectedTrack.title}
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Analytics & Velocity
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Verified study velocity, commit cadence, and hiring readiness index for {learner.name}.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="p-1 bg-surface border border-border rounded-xl flex items-center text-xs font-mono">
            <button
              type="button"
              onClick={() => setTimeRange('7d')}
              className={`px-3 py-1 rounded-lg transition-all ${
                timeRange === '7d'
                  ? 'bg-bg text-ink shadow-2xs font-bold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              7D
            </button>
            <button
              type="button"
              onClick={() => setTimeRange('30d')}
              className={`px-3 py-1 rounded-lg transition-all ${
                timeRange === '30d'
                  ? 'bg-bg text-ink shadow-2xs font-bold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              30D
            </button>
            <button
              type="button"
              onClick={() => setTimeRange('all')}
              className={`px-3 py-1 rounded-lg transition-all ${
                timeRange === 'all'
                  ? 'bg-bg text-ink shadow-2xs font-bold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              ALL
            </button>
          </div>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => alert('Exporting signed ATS Attestation Report (PDF)...')}
            className="text-xs gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-gold" />
            <span>Export Proof</span>
          </Button>
        </div>
      </div>

      {/* 4 Core Velocity KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted uppercase">Learning Velocity</span>
            <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold flex items-center justify-center border border-gold/30">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-ink">4.8</span>
            <span className="text-xs font-mono text-muted">hrs / day</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-body">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18% faster than cohort avg</span>
          </div>
        </Card>

        <Card className="p-5 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted uppercase">Verified Commits</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Code2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-ink">142</span>
            <span className="text-xs font-mono text-muted">commits</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-body">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>19-day active coding streak</span>
          </div>
        </Card>

        <Card className="p-5 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted uppercase">ATS Proof Index</span>
            <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold flex items-center justify-center border border-gold/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-ink">94</span>
            <span className="text-xs font-mono text-muted">/ 100</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gold font-body">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tier-1 Global Recruiter Verified</span>
          </div>
        </Card>

        <Card className="p-5 space-y-2 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted uppercase">Interview Dispatch</span>
            <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-500/30">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl font-bold text-ink">88%</span>
            <span className="text-xs font-mono text-muted">pipeline match</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted font-body">
            <span>Stripe, Linear & OpenAI ready</span>
          </div>
        </Card>
      </div>

      {/* Row 2: 52-Week Activity Heatmap */}
      <Card className="p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/70">
          <div>
            <h3 className="font-display text-lg font-bold text-ink">
              Proof of Work Activity Matrix
            </h3>
            <p className="text-xs font-body text-muted">
              Continuous commit history, pull request approvals, and architectural reviews over the last 52 weeks.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-xs bg-surface border border-border/40" />
              <div className="w-3 h-3 rounded-xs bg-gold/25" />
              <div className="w-3 h-3 rounded-xs bg-gold/50" />
              <div className="w-3 h-3 rounded-xs bg-gold/75" />
              <div className="w-3 h-3 rounded-xs bg-gold" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-grid grid-flow-col grid-rows-7 gap-1 min-w-[720px]">
            {activityMatrix.flatMap((week, wIdx) =>
              week.map((level, dIdx) => {
                const colors = [
                  'bg-surface border border-border/40',
                  'bg-gold/25',
                  'bg-gold/50',
                  'bg-gold/75',
                  'bg-gold',
                ]
                return (
                  <div
                    key={`${wIdx}-${dIdx}`}
                    className={`w-3 h-3 rounded-xs transition-colors hover:scale-125 cursor-pointer ${colors[level]}`}
                    title={`Week ${wIdx + 1}, Day ${dIdx + 1}: Level ${level}`}
                  />
                )
              })
            )}
          </div>
        </div>
      </Card>

      {/* Row 3: Competencies & Hiring Benchmarks Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 6 cols: Competency Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          <Card className="p-6 space-y-5 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border/70">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Competency Mastery Score
                  </h3>
                  <p className="text-xs font-body text-muted">
                    Automated code review ratings verified across live capstone repositories.
                  </p>
                </div>
                <Badge variant="active">94 AVG</Badge>
              </div>

              <div className="space-y-4 pt-4">
                {SKILL_COMPETENCIES.map((comp) => (
                  <div key={comp.skill} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-body">
                      <span className="font-medium text-ink flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        {comp.skill}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-muted">Cohort: {comp.benchmark}%</span>
                        <span className="font-mono font-bold text-gold">{comp.score}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-surface border border-border/60 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gold h-full rounded-full transition-all duration-500"
                        style={{ width: `${comp.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-mono text-muted">
              <span>Evaluated by Staff Eng Mentors</span>
              <span className="text-gold font-semibold">100% Cryptographic Match</span>
            </div>
          </Card>
        </div>

        {/* Right 6 cols: Direct Hiring Partner Pipeline Benchmarks */}
        <div className="lg:col-span-6 space-y-4">
          <Card className="p-6 space-y-4 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-border/70">
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Hiring Pipeline Calibration
                  </h3>
                  <p className="text-xs font-body text-muted">
                    Direct automated matching with Wedin hiring partners in 72-hour dispatch.
                  </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-3.5 pt-4">
                {HIRING_BENCHMARKS.map((item) => (
                  <div
                    key={item.company}
                    className="p-4 rounded-2xl bg-surface border border-border hover:border-gold/50 transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-body font-bold text-sm text-ink flex items-center gap-2">
                          <span>{item.company}</span>
                          <span className="text-[11px] font-normal text-muted">&bull; {item.role}</span>
                        </div>
                        <div className="text-[11px] font-mono text-gold">{item.compensation}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-bold text-lg text-emerald-400">
                          {item.matchScore}%
                        </div>
                        <div className="text-[10px] font-mono text-muted uppercase">Fit Match</div>
                      </div>
                    </div>

                    <div className="space-y-1 text-[11px] font-body text-muted pt-1 border-t border-border/60">
                      {item.requirements.map((req) => (
                        <div key={req} className="flex items-center gap-1.5 text-ink">
                          <Check className="w-3 h-3 text-gold shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-border/70 flex items-center justify-between">
              <span className="text-xs font-body text-muted">3 Companies Currently Hiring</span>
              <Button size="sm" className="text-xs h-8">
                Request Interview Dispatch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
