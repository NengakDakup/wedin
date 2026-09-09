'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Search,
  Code2,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Filter,
  SlidersHorizontal,
  Clock,
  Award,
  Users,
  Building2,
  Layers,
  ChevronRight,
  RotateCcw,
  Zap,
  ShieldCheck,
  Laptop,
  Compass,
  ArrowUpRight,
} from 'lucide-react'
import { MarketingNav } from '@/components/marketing/marketing-nav'
import { MarketingFooter } from '@/components/marketing/marketing-footer'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { ALL_COURSES, Course } from '@/lib/courses-data'
import { cn } from '@/lib/utils'

export default function CoursesCatalogPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'coding' | 'non-coding'>('all')
  const [selectedLevel, setSelectedLevel] = React.useState<string>('all')
  const [selectedFormat, setSelectedFormat] = React.useState<string>('all')
  const [sortBy, setSortBy] = React.useState<'featured' | 'placement' | 'duration'>('featured')

  // Filter logic
  const filteredCourses = React.useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // Category filter
      if (selectedCategory !== 'all' && course.category !== selectedCategory) {
        return false
      }

      // Level filter
      if (selectedLevel !== 'all' && course.level !== selectedLevel) {
        return false
      }

      // Format filter
      if (selectedFormat !== 'all' && course.format !== selectedFormat) {
        return false
      }

      // Search query (title, subtitle, description, key skills, tools, partners)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const inTitle = course.title.toLowerCase().includes(query)
        const inSubtitle = course.subtitle.toLowerCase().includes(query)
        const inDesc = course.description.toLowerCase().includes(query)
        const inSkills = course.keySkills.some((s) => s.toLowerCase().includes(query))
        const inTools = course.tools.some((t) => t.toLowerCase().includes(query))
        const inPartners = course.hiringPartners.some((p) => p.toLowerCase().includes(query))
        if (!inTitle && !inSubtitle && !inDesc && !inSkills && !inTools && !inPartners) {
          return false
        }
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'placement') {
        return b.placementRate - a.placementRate
      }
      if (sortBy === 'duration') {
        return parseInt(b.duration) - parseInt(a.duration)
      }
      // 'featured'
      if (a.isFeatured && !b.isFeatured) return -1
      if (!a.isFeatured && b.isFeatured) return 1
      return b.placementRate - a.placementRate
    })
  }, [searchQuery, selectedCategory, selectedLevel, selectedFormat, sortBy])

  const codingCount = ALL_COURSES.filter((c) => c.category === 'coding').length
  const nonCodingCount = ALL_COURSES.filter((c) => c.category === 'non-coding').length

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedLevel('all')
    setSelectedFormat('all')
    setSortBy('featured')
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink transition-colors duration-200">
      {/* Top Navigation */}
      <MarketingNav />

      <main className="flex-1 pt-24 sm:pt-28 pb-20 space-y-16">
        {/* 1. Page Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>COURSE DIRECTORY & CAREER PATHWAYS</span>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-tight">
              Master Tomorrow’s Tech. <br className="hidden sm:inline" />
              <span className="text-gold italic font-serif">Get Placed with Proof.</span>
            </h1>
            <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-2xl mx-auto">
              Explore 12+ industry-calibrated programs spanning software engineering, autonomous AI systems, technical product management, and non-coding technology leadership.
            </p>
          </div>

          {/* Quick trust metrics */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-muted flex-wrap pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Cryptographic Code Proof</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold" />
              <span>72-Hour Direct Interview Dispatches</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Zero-Interest Monthly Financing</span>
            </span>
          </div>
        </section>

        {/* 2. Interactive Control Bar & Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          {/* Search Bar + Primary Category Pills */}
          <div className="p-4 sm:p-5 rounded-3xl bg-surface border border-border/80 shadow-sm space-y-4">
            {/* Top row: Search input + Results summary */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full flex-1">
                <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by role, framework, skills (e.g. Next.js, LLMs, PRDs, Kafka)..."
                  className="w-full bg-bg border border-border/80 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-ink font-mono"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Sort Selector */}
              <div className="flex items-center gap-2 self-end md:self-auto shrink-0 text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-muted" />
                <span className="font-mono text-muted uppercase">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-bg border border-border/80 rounded-xl px-3 py-2 text-ink font-body text-xs focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="featured">Featured & Recommended</option>
                  <option value="placement">Highest Placement Rate</option>
                  <option value="duration">Program Duration</option>
                </select>
              </div>
            </div>

            {/* Bottom row: Category filter tabs + secondary filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-border/60">
              {/* Main Category Filter Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer',
                    selectedCategory === 'all'
                      ? 'bg-gold text-black font-semibold shadow-sm'
                      : 'bg-bg border border-border/80 text-muted hover:text-ink'
                  )}
                >
                  All Programs ({ALL_COURSES.length})
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCategory('coding')}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer',
                    selectedCategory === 'coding'
                      ? 'bg-gold text-black font-semibold shadow-sm'
                      : 'bg-bg border border-border/80 text-muted hover:text-ink'
                  )}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Coding & Software ({codingCount})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCategory('non-coding')}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer',
                    selectedCategory === 'non-coding'
                      ? 'bg-gold text-black font-semibold shadow-sm'
                      : 'bg-bg border border-border/80 text-muted hover:text-ink'
                  )}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Non-Coding & Strategy ({nonCodingCount})</span>
                </button>
              </div>

              {/* Secondary Level & Format dropdown filters */}
              <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
                {/* Level filter */}
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-bg border border-border/80 rounded-xl px-2.5 py-1.5 text-ink font-body text-xs focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="all">All Experience Levels</option>
                  <option value="Beginner-Friendly">Beginner-Friendly</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced Production">Advanced Production</option>
                </select>

                {/* Format filter */}
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="bg-bg border border-border/80 rounded-xl px-2.5 py-1.5 text-ink font-body text-xs focus:outline-none focus:border-gold cursor-pointer"
                >
                  <option value="all">All Learning Formats</option>
                  <option value="Flagship Cohort">Flagship Cohort (12-16w)</option>
                  <option value="Executive Sprint">Executive Sprint (10w)</option>
                  <option value="Masterclass">Masterclass (8-12w)</option>
                </select>

                {(selectedCategory !== 'all' || selectedLevel !== 'all' || selectedFormat !== 'all' || searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs font-mono text-gold hover:underline px-2 py-1 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results count banner */}
          <div className="flex items-center justify-between text-xs font-mono text-muted px-1">
            <span>
              SHOWING <strong className="text-ink font-bold">{filteredCourses.length}</strong> OF {ALL_COURSES.length} PROGRAMS
            </span>
            <span>NEXT COHORT STARTS OCTOBER 2026</span>
          </div>

          {/* 3. Course Cards Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => {
                const isCoding = course.category === 'coding'

                return (
                  <div
                    key={course.id}
                    className={cn(
                      'p-6 sm:p-7 rounded-3xl bg-surface border flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 shadow-sm',
                      course.isFeatured
                        ? 'border-gold/60 hover:border-gold hover:shadow-glow/20'
                        : 'border-border/80 hover:border-gold/40'
                    )}
                  >
                    <div className="space-y-4">
                      {/* Top Badges Row */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={cn(
                              'text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border',
                              isCoding
                                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                                : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                            )}
                          >
                            {isCoding ? 'CODING TRACK' : 'NON-CODING TRACK'}
                          </span>

                          {course.isBestseller && (
                            <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                              BESTSELLER
                            </span>
                          )}
                        </div>

                        <span className="text-[11px] font-mono font-semibold text-emerald-500 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {course.placementRate}% PLACED
                        </span>
                      </div>

                      {/* Course Title & Subtitle */}
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-ink group-hover:text-gold transition-colors leading-snug">
                          {course.title}
                        </h3>
                        <p className="font-body text-xs text-gold font-medium mt-1">
                          {course.subtitle}
                        </p>
                      </div>

                      {/* Course Description */}
                      <p className="font-body text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                        {course.description}
                      </p>

                      {/* Duration, Level & Format Pill Strip */}
                      <div className="flex items-center gap-2 flex-wrap text-[11px] font-mono text-muted pt-1">
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-bg border border-border/60">
                          <Clock className="w-3 h-3 text-gold" />
                          {course.duration}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-bg border border-border/60">
                          {course.level}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-bg border border-border/60">
                          {course.modulesCount} Modules · {course.lessonsCount} Lessons
                        </span>
                      </div>

                      {/* Key Skills Tags */}
                      <div className="space-y-1.5 pt-2 border-t border-border/60">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-medium">
                          Core Verified Deliverables
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.keySkills.slice(0, 4).map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg/80 border border-border/70 text-ink"
                            >
                              {skill}
                            </span>
                          ))}
                          {course.keySkills.length > 4 && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-bg text-muted">
                              +{course.keySkills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Hiring Partners */}
                      <div className="space-y-1 pt-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-medium">
                          Hiring Partner Pipelines
                        </span>
                        <div className="flex items-center gap-2 text-xs font-body font-medium text-ink flex-wrap">
                          {course.hiringPartners.map((partner, pIdx) => (
                            <span key={pIdx} className="text-muted group-hover:text-ink transition-colors">
                              {partner}{pIdx < course.hiringPartners.length - 1 && ' ·'}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: Salary Benchmark + CTA Button */}
                    <div className="pt-6 mt-6 border-t border-border/60 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-muted">Target Compensation</span>
                        <span className="font-bold text-ink">{course.salaryBenchmark}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link href="/onboarding" className="w-full">
                          <Button variant="secondary" size="sm" className="w-full justify-center text-xs">
                            Take Diagnostic
                          </Button>
                        </Link>
                        <Link href={`/app/track/${course.id === 'cloud-infrastructure' || course.id === 'product-engineering' ? course.id : 'full-stack-ai'}`} className="w-full">
                          <Button variant="primary" size="sm" className="w-full justify-center text-xs gap-1">
                            <span>View Syllabus</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 sm:p-16 rounded-3xl bg-surface border border-border/80 text-center space-y-4 max-w-lg mx-auto">
              <Search className="w-10 h-10 text-muted mx-auto stroke-[1.5]" />
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-ink">No matching programs found</h3>
                <p className="font-body text-xs text-muted">
                  We couldn&apos;t find any courses matching &quot;{searchQuery}&quot; with your selected filters.
                </p>
              </div>
              <Button variant="secondary" size="sm" onClick={handleResetFilters} className="gap-1.5 text-xs">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </Button>
            </div>
          )}
        </section>

        {/* 4. Coding vs. Non-Coding Comparison Guidance Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
          <div className="p-8 sm:p-12 rounded-[32px] bg-surface/80 border border-border/80 shadow-md space-y-8">
            <div className="max-w-2xl space-y-2 text-left">
              <span className="text-xs font-mono font-semibold text-gold uppercase tracking-wider">
                CAREER ORIENTATION GUIDE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink">
                Coding vs. Non-Coding: Which Track Fits Your Goals?
              </h2>
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                Both pathways offer high-compensation placement routes at top global tech companies. Here is how to decide based on your aptitude and daily workflow preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Coding */}
              <div className="p-6 rounded-2xl bg-bg border border-border/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-base text-ink">Software & AI Engineering</h3>
                    <p className="font-mono text-xs text-muted">For Builders, Coders & Problem Solvers</p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-body text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Daily Workflow:</strong> Writing TypeScript, Python, and Go code, optimizing database latency, and reviewing pull requests.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Deliverable Proof:</strong> Public GitHub repositories with passing CI/CD pipelines, Docker containers, and live web apps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Best For:</strong> People who enjoy analytical logic, building software end-to-end, and debugging complex technical architectures.</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Avg Starting Compensation</span>
                  <span className="text-ink font-bold">$95,000 – $180,000 / yr</span>
                </div>
              </div>

              {/* Card 2: Non-Coding */}
              <div className="p-6 rounded-2xl bg-bg border border-border/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-base text-ink">Product & Technical Leadership</h3>
                    <p className="font-mono text-xs text-muted">For Strategists, Designers & Communicators</p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-body text-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Daily Workflow:</strong> Writing AI product requirement specs (PRDs), designing Figma token systems, evaluating retention analytics, and coordinating cross-functional teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Deliverable Proof:</strong> Verified product strategy dossiers, interactive design systems, dbt SQL queries, and GRC compliance matrices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Best For:</strong> Professionals who want to lead tech initiatives, design seamless experiences, and direct strategy without daily programming.</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Avg Starting Compensation</span>
                  <span className="text-ink font-bold">$85,000 – $170,000 / yr</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Direct Diagnostic Assessment CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-surface via-[#18181b] to-surface border border-gold/40 p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left max-w-xl">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-wider">
                PERSONALIZED COURSE CALIBRATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Unsure which track fits your technical baseline?
              </h3>
              <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                Take our free 10-minute diagnostic assessment. The engine calculates your exact aptitude match score across coding and non-coding curricula with custom milestone recommendations.
              </p>
            </div>

            <Link href="/onboarding" className="shrink-0">
              <Button variant="primary" size="default" className="h-12 px-6 gap-2 text-sm font-semibold shadow-md">
                <span>Start Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <MarketingFooter />
    </div>
  )
}
