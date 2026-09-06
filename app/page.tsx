'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Sparkles,
  ArrowRight,
  Check,
  CheckCircle2,
  XCircle,
  Building2,
  Briefcase,
  Layers,
  Clock,
  ShieldCheck,
  Award,
  ChevronDown,
  Code2,
  FileText,
  Zap,
  TrendingUp,
  Terminal,
  ExternalLink,
  ChevronRight,
  Sliders,
  Send,
  UserCheck,
  Play,
  Flame,
  Globe,
  Database,
  Search,
  ArrowUpRight,
} from 'lucide-react'
import { MarketingNav } from '@/components/marketing/marketing-nav'
import { MarketingFooter } from '@/components/marketing/marketing-footer'
import { Button } from '@/components/primitives/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { ProgressBar } from '@/components/primitives/progress-bar'
import { StatusIcon } from '@/components/primitives/status-icon'
import { Avatar } from '@/components/primitives/avatar'
import { CAREER_TRACKS } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

export default function MarketingLandingPage() {
  // Interactive Loop Stage State
  const [activeStage, setActiveStage] = React.useState<number>(0)
  // Interactive ATS Comparison State
  const [atsComparisonMode, setAtsComparisonMode] = React.useState<'generic' | 'wedin'>('wedin')
  // Interactive Track Selector
  const [activeTrackIndex, setActiveTrackIndex] = React.useState<number>(0)
  // FAQ state
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx)

  const loopStages = [
    {
      step: '01',
      title: 'Train & Build Real Code',
      subtitle: 'Live Cohort & Capstones',
      desc: '16 weeks of live engineering masterclasses and four production-grade capstone labs. No toy tutorials: you architect real state machines, streaming APIs, and vector search pipelines with daily code review.',
      artifact: {
        type: 'CODE CAPSTONE',
        title: 'react-agent-loop.ts (Production Repo)',
        meta: 'Evaluated by Senior Staff TA · Grade: 98/100',
        content: `// ReAct decision cycle with token budgeting
export async function executeAgentCycle(task: AgentTask): Promise<CycleResult> {
  const plan = await planner.decompose(task.objective, {
    model: "claude-3-5-sonnet",
    maxTokens: 4096,
    strictSchema: true
  });
  const execution = await executor.runDeterministic(plan.tools);
  return memory.checkpoint({ state: execution.state, passed: true });
}`,
        stat: '1,420 lines verified TypeScript / Python',
      },
    },
    {
      step: '02',
      title: 'Virtual Internship',
      subtitle: '8 Weeks of Enterprise Sprints',
      desc: 'You transition from student to practitioner. Embedded into simulated enterprise engineering squads, you receive real sprint tickets, submit pull requests, resolve merge conflicts, and get rated by industry engineering leads.',
      artifact: {
        type: 'SUPERVISOR EVALUATION',
        title: 'Sprint 04: Vector Hybrid Search Engine',
        meta: 'Evaluated by Lead Architect (ex-Paystack)',
        content: `✓ PR #84: Implemented Cosine Distance Filter on pgvector
✓ Benchmark: Reduced p99 query latency from 240ms → 38ms
✓ Architecture: Handled edge cases on sparse keyword fallback
★ Supervisor Comment: "Amara demonstrated senior-level systems thinking. Ready for junior-to-mid tier placement without handholding."`,
        stat: 'Supervisor Score: 9.8 / 10 · Verified',
      },
    },
    {
      step: '03',
      title: 'Auto-Generated ATS Proof',
      subtitle: '1-Click Unforgeable CV',
      desc: 'Unlike generic AI tools that hallucinate bullet points, Wedin compiles your ATS-optimized CV directly from your completed GitHub repositories, supervisor ratings, and test benchmarks. Zero fluff.',
      artifact: {
        type: 'ATS PARSER SCORE',
        title: 'Verified International Resume',
        meta: 'Tested across Greenhouse, Lever & Workday algorithms',
        content: `✦ ATS Compatibility Score: 98/100 (Passes Tier-1 Filter)
✦ Experience Source: Verified Wedin Platform Database
✦ Skills Matched: Next.js 16, Python, LangChain, pgvector, Docker
✦ Proof Link: wedin.io/p/amara-okonjo (Cryptographic QR & Live Repos)`,
        stat: '100% Verifiable Proof-of-Work',
      },
    },
    {
      step: '04',
      title: 'Automated Placement Engine',
      subtitle: 'Direct Partner Routing',
      desc: 'The engine actively analyzes hiring manager criteria at partner tech companies, matches your verified skills, auto-submits tailored applications, and delivers interview invitations directly to your dashboard.',
      artifact: {
        type: 'PLACEMENT NOTIFICATION',
        title: 'Anthropic AI Systems Cohort Pipeline',
        meta: 'Direct Placement Match · Candidate Fast-Track',
        content: `⚡ Direct Interview Request Received:
Company: Anthropic Partner Network (Remote / Lagos)
Role: Junior AI Systems Engineer ($48,000 / ₦38M/yr)
Status: Recruiter Technical Screen Scheduled
Match Confidence: 98% based on Capstone Lab 03 performance`,
        stat: 'Time to Interview: 18 Days post-graduation',
      },
    },
  ]

  const hiringCompanies = [
    { name: 'Anthropic', role: 'AI Systems', salary: '$45k - $65k' },
    { name: 'Scale AI', role: 'Data Eval Lead', salary: '$40k - $55k' },
    { name: 'Ramp', role: 'Full-Stack Eng', salary: '$50k - $70k' },
    { name: 'Paystack', role: 'Product Engineer', salary: '₦18M - ₦28M' },
    { name: 'Supabase', role: 'Backend / SQL', salary: '$45k - $60k' },
    { name: 'Moniepoint', role: 'Systems Analyst', salary: '₦15M - ₦24M' },
  ]

  const faqs = [
    {
      q: 'Do you guarantee a job placement upon graduation?',
      a: 'We guarantee structured access, verified effort, and partner pipeline routing—not arbitrary job offers. In line with global ethics, we avoid misleading "100% job promises." Instead, our placement engine actively tailors your CV, matches you with pre-vetted employers, and submits applications on your behalf until you are placed.',
    },
    {
      q: 'Can I complete a cohort while working a full-time job?',
      a: 'Yes. Our tracks are tailored for working professionals and career switchers. Live masterclasses occur on evenings and weekends, and all project capstones have asynchronous mentoring windows with 24/7 technical TA review.',
    },
    {
      q: 'How does the 2-month virtual internship work?',
      a: 'The final 8 weeks of every flagship track transition you from student to practitioner. You receive simulated sprint briefs from actual enterprise engineering teams, submit pull requests, undergo real code reviews, and earn supervisor ratings on your public verified portfolio.',
    },
    {
      q: 'How is my CV generated from verified coursework?',
      a: 'Unlike generic AI resume builders that hallucinate skills, Wedin auto-generates your ATS-optimized CV directly from your completed GitHub repositories, project scores, and internship evaluations. When employers look at your CV, every bullet point links to verified proof-of-work.',
    },
    {
      q: 'What are the tuition payment options?',
      a: 'We offer localized monthly installment plans in Naira (₦) via Paystack/Flutterwave, as well as USD tuition for the diaspora. Installment plans allow you to pay as you learn rather than paying a prohibitive lump-sum fee upfront.',
    },
  ]

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col transition-colors duration-200 selection:bg-gold selection:text-black">
      <MarketingNav />

      {/* 1. HERO SECTION: Full-Width Rounded-Top Container with Side Padding */}
      <section className="relative pt-16 sm:pt-[72px] w-full px-2.5 sm:px-4 lg:px-6 overflow-hidden">
        {/* Rounded Top Hero Container with Background Fading to Bottom */}
        <div
          style={{
            background: 'linear-gradient(180deg, var(--hero-card-from) 0%, var(--hero-card-via) 65%, transparent 100%)',
          }}
          className="rounded-t-[32px] sm:rounded-t-[44px] border-t border-x border-border/80 pt-10 sm:pt-14 pb-8 px-4 sm:px-8 relative overflow-hidden min-h-[calc(100vh-6rem)] flex flex-col justify-between transition-colors duration-200"
        >
          
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between relative z-10 gap-6">
            
            {/* TOP / CENTER: Master Editorial Headline, Squiggle, Category Filter, and Pill CTAs */}
            <div className="text-center space-y-3 pt-2 max-w-4xl mx-auto">
              
              {/* Master Headline with Inline Search/Explore Pill (Exact Anatomy) */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink leading-[1.14]">
                Don&apos;t just learn.
                <br />
                Get{' '}
                <Link
                  href="/onboarding/assessment-intro"
                  className="inline-flex items-center gap-2 bg-surface/90 border border-border/90 px-3 py-1 align-middle mx-1 rounded-full shadow-xs hover:border-gold/70 transition-all group"
                >
                  <Search className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    SEARCH SKILL TRACKS
                  </span>
                  <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-[10px] font-mono text-gold font-bold">
                    AO
                  </span>
                </Link>{' '}
                hired
                <br />
                for your next role
              </h1>

              {/* Brand Glyph: Centered Closed-Loop Emblem */}
              <div className="flex justify-center pt-0.5">
                <div className="w-6 h-6 text-gold opacity-90 flex items-center justify-center">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      d="M11 11C8.24 11 6 13.24 6 16C6 18.76 8.24 21 11 21C14.5 21 17.5 11 21 11C23.76 11 26 13.24 26 16C26 18.76 23.76 21 21 21C17.5 21 14.5 11 11 11Z"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="11" cy="16" r="1.5" fill="currentColor" />
                    <circle cx="21" cy="16" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Subtitle */}
              <p className="font-body text-xs sm:text-sm text-muted max-w-lg mx-auto leading-relaxed">
                Learn From Industry Engineering Leads Offering Verified Apprenticeships
              </p>

              {/* Category Filter Line with Em-Dashes */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-body text-muted pt-0.5">
                <button
                  type="button"
                  onClick={() => setActiveTrackIndex(0)}
                  className={cn(
                    'hover:text-ink transition-colors cursor-pointer',
                    activeTrackIndex === 0 && 'text-ink font-semibold'
                  )}
                >
                  Full-Stack AI
                </button>
                <span className="text-border select-none">——</span>
                <button
                  type="button"
                  onClick={() => setActiveTrackIndex(1)}
                  className={cn(
                    'hover:text-ink transition-colors cursor-pointer',
                    activeTrackIndex === 1 && 'text-ink font-semibold'
                  )}
                >
                  Cloud Architecture
                </button>
                <span className="text-border select-none">——</span>
                <button
                  type="button"
                  onClick={() => setActiveTrackIndex(2)}
                  className={cn(
                    'hover:text-ink transition-colors cursor-pointer',
                    activeTrackIndex === 2 && 'text-ink font-semibold'
                  )}
                >
                  Frontend Systems
                </button>
                <span className="text-border select-none">——</span>
                <button
                  type="button"
                  onClick={() => setActiveTrackIndex(3)}
                  className={cn(
                    'hover:text-ink transition-colors cursor-pointer',
                    activeTrackIndex === 3 && 'text-ink font-semibold'
                  )}
                >
                  Data & ML
                </button>
              </div>

              {/* Pill CTA Bar */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                {/* Left Pill: OVER 150+ PLACEMENTS */}
                <div className="inline-flex items-center gap-1.5 bg-surface border border-border/80 rounded-full px-3.5 py-1.5 text-xs font-mono text-ink shadow-xs">
                  <div className="w-4 h-4 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <Award className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-muted">OVER</span>
                  <span className="font-bold text-ink">150+ PLACEMENTS</span>
                </div>

                {/* Middle Pill: FROM ₦35k / MO */}
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-surface hover:bg-surface-elevated border border-border text-ink rounded-full px-4 py-1.5 text-xs font-mono font-medium tracking-wide shadow-xs transition-colors"
                >
                  FROM ₦35k / MO
                </a>

                {/* Right Primary Pill: DISCOVER ↗ (in Wedin Gold) */}
                <Link
                  href="/onboarding"
                  className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-bg font-mono text-xs font-semibold uppercase tracking-wider px-5 py-1.5 rounded-full shadow-glow transition-all"
                >
                  <span>Discover</span>
                  <span className="w-4 h-4 rounded-full bg-bg/20 flex items-center justify-center text-bg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>

            {/* BOTTOM OF VIEWPORT: Horizontal 3-Step Journey Flow Cards (Learn -> Certified -> Matched to Job) */}
            <div className="w-full pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-4.5">
                
                {/* CARD 1: STEP 01 · LEARN ON PLATFORM (Circular Artwork Centerpiece) */}
                <div className="rounded-[24px] p-4 sm:p-5 bg-[#FAF7F0] dark:bg-[#141210] border border-border/80 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-3 transition-all hover:border-gold/50">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-ink">
                        AMARA OKONJO
                      </h3>
                      <p className="font-body text-[11px] text-muted flex items-center gap-1">
                        <span>Full-Stack AI Cohort</span>
                        <span className="text-border select-none">——</span>
                        <span>16W</span>
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-gold/20 border-2 border-gold/50 flex items-center justify-center font-mono font-bold text-gold text-xs shadow-xs">
                      AO
                    </div>
                  </div>

                  {/* Centerpiece: Circular Artwork Frame with Gold Calligraphy and Capstone Code Loop */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full relative p-2 border border-gold/40 bg-gradient-to-tr from-surface/90 via-surface-elevated to-surface/40 flex items-center justify-center shadow-inner overflow-hidden group">
                    <div className="absolute inset-1 rounded-full border border-gold/20 border-dashed animate-[spin_40s_linear_infinite]" />
                    <div className="relative text-center space-y-1 z-10">
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-gold/15 text-[9px] font-mono font-bold text-gold tracking-wider uppercase">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>STEP 01</span>
                      </div>
                      <div className="font-display font-bold text-xs text-ink tracking-tight italic">
                        wedin fellow
                      </div>
                      <div className="text-[10px] font-mono text-success font-semibold">
                        9.9 / 10 Score
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row Controls */}
                  <div className="flex items-center justify-between gap-1.5 pt-1">
                    <span className="bg-ink text-bg font-mono text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                      STEP 01 · 9.9 SCORE
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Link
                        href="/onboarding"
                        className="inline-flex items-center bg-surface hover:bg-surface-elevated border border-border rounded-full text-[10px] sm:text-xs font-mono uppercase px-3 py-1 text-ink font-medium transition-colors"
                      >
                        Get In Course
                      </Link>
                      <Link
                        href="/onboarding"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface border border-border flex items-center justify-center text-ink hover:text-gold hover:border-gold transition-colors shadow-xs"
                        aria-label="Start Learning"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* CARD 2: STEP 02 · GET CERTIFIED (Hexagonal Graphic Centerpiece & Virtual Internship) */}
                <div className="rounded-[24px] p-4 sm:p-5 bg-[#F4F8F4] dark:bg-[#111613] border border-border/80 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-3 transition-all hover:border-success/50">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-ink">
                        TUNDE ADEBAYO
                      </h3>
                      <p className="font-body text-[11px] text-muted flex items-center gap-1">
                        <span>Virtual Internship</span>
                        <span className="text-border select-none">——</span>
                        <span>8W</span>
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-success/20 border-2 border-success/50 flex items-center justify-center font-mono font-bold text-success text-xs shadow-xs">
                      TA
                    </div>
                  </div>

                  {/* Centerpiece: Hexagonal Artwork Frame with Code Audit Inspection Graphic */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto relative flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[20px] rotate-45 border border-success/40 bg-gradient-to-br from-surface/90 via-surface-elevated to-surface/40 flex items-center justify-center shadow-inner overflow-hidden">
                      <div className="-rotate-45 text-center space-y-1 p-1">
                        <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-success/15 text-[9px] font-mono font-bold text-success tracking-wider uppercase">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>STEP 02</span>
                        </div>
                        <div className="font-mono text-[10px] font-bold text-ink leading-tight">
                          14 PRs Merged
                        </div>
                        <div className="text-[9px] font-mono text-success">
                          Verified by TA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row Controls */}
                  <div className="flex items-center justify-between gap-1.5 pt-1">
                    <span className="bg-ink text-bg font-mono text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                      STEP 02 · 14 PRS
                    </span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="#closed-loop"
                        className="inline-flex items-center bg-surface hover:bg-surface-elevated border border-border rounded-full text-[10px] sm:text-xs font-mono uppercase px-3 py-1 text-ink font-medium transition-colors"
                      >
                        Inspect Proof
                      </a>
                      <a
                        href="#closed-loop"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface border border-border flex items-center justify-center text-ink hover:text-success hover:border-success transition-colors shadow-xs"
                        aria-label="Inspect Proof"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD 3: STEP 03 · MATCHED TO A JOB (Placement Engine Routing & Direct Offer) */}
                <div className="rounded-[24px] p-4 sm:p-5 bg-[#F7F4FA] dark:bg-[#141117] border border-border/80 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-3 transition-all hover:border-info/50">
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-ink">
                        ANTHROPIC & PAYSTACK
                      </h3>
                      <p className="font-body text-[11px] text-muted flex items-center gap-1">
                        <span>Placement Engine</span>
                        <span className="text-border select-none">——</span>
                        <span>≤ 30D</span>
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-info/20 border-2 border-info/50 flex items-center justify-center font-mono font-bold text-info text-xs shadow-xs">
                      AP
                    </div>
                  </div>

                  {/* Centerpiece: Stadium / Shield Artwork Frame with Offer Dispatch Details */}
                  <div className="w-full max-w-[220px] mx-auto p-2.5 rounded-card bg-surface/90 border border-info/40 shadow-inner space-y-1 text-center">
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-info/15 text-[9px] font-mono font-bold text-info tracking-wider uppercase">
                      <Briefcase className="w-2.5 h-2.5" />
                      <span>STEP 03 · MATCHED</span>
                    </div>
                    <div className="font-display font-bold text-xs text-ink">
                      Interview Dispatched
                    </div>
                    <div className="font-mono text-[10px] text-success font-semibold">
                      $48,000 / ₦38M Compensation
                    </div>
                  </div>

                  {/* Bottom Row Controls */}
                  <div className="flex items-center justify-between gap-1.5 pt-1">
                    <span className="bg-ink text-bg font-mono text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full">
                      STEP 03 · OFFER
                    </span>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="#employers"
                        className="inline-flex items-center bg-surface hover:bg-surface-elevated border border-border rounded-full text-[10px] sm:text-xs font-mono uppercase px-3 py-1 text-ink font-medium transition-colors"
                      >
                        Explore Network
                      </a>
                      <a
                        href="#employers"
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface border border-border flex items-center justify-center text-ink hover:text-info hover:border-info transition-colors shadow-xs"
                        aria-label="Explore Hiring Network"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Hiring Partners Logo Bar */}
        <div className="pt-8 pb-4 space-y-2 text-center relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full border-b border-border/60">
          <p className="text-[11px] font-mono text-muted uppercase tracking-widest">
            HIRING PARTNERS RECRUITING WEDIN TALENT ACROSS NIGERIA, UK & US REMOTE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1">
            {hiringCompanies.map((c) => (
              <div
                key={c.name}
                className="px-3 py-1 rounded-card bg-surface/80 border border-border flex items-center gap-1.5 text-[11px] font-mono text-ink shadow-xs"
              >
                <Building2 className="w-3 h-3 text-gold" />
                <span className="font-bold">{c.name}</span>
                <span className="text-muted">· {c.role}</span>
                <span className="text-success font-semibold">({c.salary})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE CLOSED LOOP: Interactive 4-Stage Proof-of-Work Pipeline */}
      <section id="closed-loop" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="active">THE CLOSED LOOP ARCHITECTURE</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
            How Wedin Closes the Loop
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            Every step feeds directly into the next. Your coursework automatically generates your
            proof-of-work portfolio, which generates your ATS CV, which drives your placement.
          </p>
        </div>

        {/* 4 Interactive Stepper Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {loopStages.map((stage, idx) => {
            const isSelected = activeStage === idx
            return (
              <div
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={cn(
                  'p-5 rounded-card border transition-all duration-200 cursor-pointer text-left select-none space-y-2',
                  isSelected
                    ? 'bg-surface border-gold ring-1 ring-gold/30 shadow-xs'
                    : 'bg-surface/50 border-border hover:border-muted/60'
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'font-mono text-xs font-bold',
                      isSelected ? 'text-gold' : 'text-muted'
                    )}
                  >
                    STEP {stage.step}
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-gold stroke-[3]" />}
                </div>
                <h4
                  className={cn(
                    'font-display font-medium text-sm transition-colors',
                    isSelected ? 'text-ink font-bold' : 'text-muted'
                  )}
                >
                  {stage.title}
                </h4>
                <p className="font-body text-[11px] text-muted line-clamp-1">
                  {stage.subtitle}
                </p>
              </div>
            )
          })}
        </div>

        {/* Active Stage Deep-Dive Inspector Panel */}
        <div className="rounded-card bg-surface border border-border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          {/* Left Column: Stage Explanation */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gold text-black font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {loopStages[activeStage].step}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  {loopStages[activeStage].title}
                </h3>
                <span className="font-mono text-xs text-gold">
                  {loopStages[activeStage].subtitle}
                </span>
              </div>
            </div>

            <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
              {loopStages[activeStage].desc}
            </p>

            <div className="pt-2">
              <Link href="/onboarding">
                <Button variant="primary" size="sm" className="gap-2">
                  <span>Enter This Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Artifact Mockup Card */}
          <div className="lg:col-span-6">
            <div className="rounded-card bg-bg border border-border p-5 space-y-4 font-mono">
              <div className="flex items-center justify-between border-b border-border/80 pb-3 text-xs">
                <div className="flex items-center gap-2 text-ink font-medium">
                  <FileText className="w-4 h-4 text-gold" />
                  <span>{loopStages[activeStage].artifact.title}</span>
                </div>
                <Badge variant="active">
                  {loopStages[activeStage].artifact.type}
                </Badge>
              </div>

              <div className="text-[11px] text-muted">
                {loopStages[activeStage].artifact.meta}
              </div>

              <pre className="p-3.5 rounded-card bg-surface border border-border text-[11px] text-ink font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {loopStages[activeStage].artifact.content}
              </pre>

              <div className="flex items-center justify-between text-xs pt-1 border-t border-border/60">
                <span className="text-muted">SYSTEM INTEGRITY</span>
                <span className="text-success font-medium">
                  {loopStages[activeStage].artifact.stat}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRICULUM TRACKS: High-Density Curriculum Breakdown */}
      <section id="tracks" className="py-24 border-t border-border/80 bg-surface/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <Badge variant="active">CURRICULUM TRACKS</Badge>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Designed for Tier-1 Hiring Rubrics
              </h2>
              <p className="font-body text-base text-muted leading-relaxed">
                We don&apos;t teach generic slide decks. Every curriculum is reverse-engineered
                from the interview benchmarks of our 40+ partner employers.
              </p>
            </div>

            <Link href="/onboarding">
              <Button variant="secondary" size="default" className="gap-2">
                <span>Start Diagnostic Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CAREER_TRACKS.map((track) => (
              <Card
                key={track.id}
                featured={track.isFeatured}
                className="p-7 flex flex-col justify-between space-y-7 shadow-lg"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <Badge variant={track.isFeatured ? 'active' : 'neutral'}>
                      {track.isFeatured ? 'FLAGSHIP TRACK' : 'COHORT OPEN'}
                    </Badge>
                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {track.duration}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-2xl font-bold text-ink">
                      {track.title}
                    </h3>
                    <p className="font-body text-xs text-gold font-medium">
                      {track.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                    {track.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    <div className="text-[11px] font-mono text-muted uppercase">
                      VERIFIED COMPETENCIES
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {track.keySkills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-2.5 py-1 rounded-pill bg-bg border border-border text-ink"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hiring Pipeline Partners */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono text-muted uppercase">
                      HIRING PARTNERS
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-ink">
                      {track.hiringPartners.map((p) => (
                        <span key={p} className="text-ink/90">
                          {p} ·
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 space-y-3">
                  <Link href="/onboarding" className="block w-full">
                    <Button
                      variant={track.isFeatured ? 'primary' : 'secondary'}
                      size="default"
                      fullWidth
                    >
                      Take Diagnostic for this Track
                    </Button>
                  </Link>

                  <div className="text-center font-mono text-[11px] text-muted">
                    Includes 2-Month Virtual Internship & Placement Engine
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ATS STUDIO & COMPARISON: Proof Over Fluff */}
      <section id="toolkit" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="active">THE CAREER TOOLKIT</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
            Stop Guessing. Build Proof.
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            See the difference between an unverified AI resume that gets rejected by ATS filters,
            and a Wedin Verified Profile that unlocks interviews.
          </p>
        </div>

        {/* Interactive Comparison Toggle */}
        <div className="flex justify-center">
          <div className="p-1 rounded-pill bg-surface border border-border inline-flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAtsComparisonMode('generic')}
              className={cn(
                'px-5 py-2 rounded-pill text-xs font-mono font-medium transition-all duration-150 cursor-pointer',
                atsComparisonMode === 'generic'
                  ? 'bg-danger text-ink shadow-xs'
                  : 'text-muted hover:text-ink'
              )}
            >
              Generic AI Resume (41% ATS Score)
            </button>
            <button
              type="button"
              onClick={() => setAtsComparisonMode('wedin')}
              className={cn(
                'px-5 py-2 rounded-pill text-xs font-mono font-medium transition-all duration-150 cursor-pointer',
                atsComparisonMode === 'wedin'
                  ? 'bg-gold text-black shadow-xs font-bold'
                  : 'text-muted hover:text-ink'
              )}
            >
              Wedin Verified Profile (98% ATS Score)
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Card Display */}
        <div className="max-w-4xl mx-auto">
          {atsComparisonMode === 'generic' ? (
            <Card className="p-8 space-y-6 border-danger/40 bg-surface/90 shadow-xl">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div>
                  <div className="font-display font-bold text-lg text-danger flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-danger" />
                    <span>Generic Resume · High ATS Rejection Risk</span>
                  </div>
                  <p className="font-body text-xs text-muted mt-1">
                    Generated with generic prompts. No verifiable proof links or evaluated code.
                  </p>
                </div>
                <Badge variant="danger">SCORE: 41 / 100</Badge>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-card bg-bg border border-danger/30 space-y-2">
                  <div className="text-danger font-semibold">
                    FAIL: Keyword stuffing without repository verification
                  </div>
                  <p className="text-muted leading-relaxed">
                    &quot;Experienced in building massive AI models, cloud distributed systems, and cutting-edge software with 100% accuracy.&quot;
                  </p>
                  <div className="text-[11px] text-danger">
                    ⚠ Flagged by Lever ATS: Hallucinated metrics, unlinked assertions.
                  </div>
                </div>

                <div className="p-4 rounded-card bg-bg border border-danger/30 space-y-2">
                  <div className="text-danger font-semibold">
                    FAIL: Zero proof-of-work or supervisor evaluations
                  </div>
                  <p className="text-muted leading-relaxed">
                    No public code repository, no sprint commits, no verifiable supervisor rating.
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <Card featured className="p-8 space-y-6 shadow-2xl bg-surface">
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div>
                  <div className="font-display font-bold text-lg text-ink flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span>Wedin Verified Profile · Interview Fast-Track</span>
                  </div>
                  <p className="font-body text-xs text-muted mt-1">
                    Auto-generated from evaluated coursework, supervisor reviews, and live GitHub commits.
                  </p>
                </div>
                <Badge variant="success">SCORE: 98 / 100</Badge>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-card bg-bg border border-border space-y-2">
                  <div className="text-gold font-semibold flex items-center justify-between">
                    <span>✓ CAPSTONE: ReAct Autonomous Agent Architecture</span>
                    <span className="text-success">VERIFIED 98/100</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    Architected recursive state machine handling 15 API tools with schema validation.
                    Reduced token consumption by 32% via contextual window compression.
                  </p>
                  <div className="text-[11px] text-gold underline cursor-pointer">
                    github.com/wedin-fellows/react-agent-loop (Evaluated by Staff TA)
                  </div>
                </div>

                <div className="p-4 rounded-card bg-bg border border-border space-y-2">
                  <div className="text-gold font-semibold flex items-center justify-between">
                    <span>✓ VIRTUAL INTERNSHIP: Vector Search Optimization</span>
                    <span className="text-success">EXCEEDS BAR</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    8 weeks embedded in simulated squad. Merged 14 PRs to production benchmark.
                    Rated top 5% of cohort by lead engineering supervisor.
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* 5. FOR EMPLOYERS: The Talent Pipeline */}
      <section id="employers" className="py-24 border-t border-border/80 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="p-8 sm:p-14 rounded-card bg-surface border border-gold/40 space-y-8 shadow-2xl relative">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-bg border border-border text-xs font-mono text-gold">
                <Building2 className="w-3.5 h-3.5" />
                <span>FOR HIRING PARTNERS & TECH TEAMS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Hire Pre-Vetted African Tech Talent in 72 Hours
              </h2>
              <p className="font-body text-base text-muted leading-relaxed">
                Recruiting junior-to-mid talent is noisy and time-consuming. Wedin delivers candidates
                with verified code repositories, evaluated sprint reviews, and supervisor scores.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-border/60">
              <div className="space-y-2">
                <div className="font-display text-2xl font-bold text-ink">
                  Zero Sourcing Noise
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Every fellow has passed 4 rigorous capstones and completed an 8-week virtual internship.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-display text-2xl font-bold text-gold">
                  Free Job Postings
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Post open roles for free during our hiring partner beta and review curated shortlists.
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-display text-2xl font-bold text-success">
                  Success-Fee Model
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Pay standard placement fees only when you make a confirmed hire. No subscription lock-in.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/onboarding">
                <Button variant="primary" size="default" className="gap-2">
                  <span>Join Hiring Partner Network</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="mailto:partners@wedincareers.io">
                <Button variant="secondary" size="default">
                  Request Candidate Shortlist
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING & LOCAL INSTALLMENTS */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="active">TRANSPARENT TUITION</Badge>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
            Invest in Your Career with Flexible Installments
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            No punitive lump-sum barriers. Pay month-by-month as you build your verified portfolio
            and prepare for placement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Tier */}
          <Card className="p-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">DIAGNOSTIC</span>
                <Badge variant="neutral">FREE</Badge>
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl font-bold text-ink">Free</div>
                <p className="font-body text-xs text-muted">
                  Assess your technical baseline and explore matched tracks.
                </p>
              </div>

              <ul className="space-y-3 text-xs font-body text-muted pt-2 border-t border-border/60">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>10-Minute Diagnostic Assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Curriculum Syllabus Previews</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>1 Free ATS Resume Check</span>
                </li>
              </ul>
            </div>

            <Link href="/onboarding" className="block w-full">
              <Button variant="secondary" size="default" fullWidth>
                Start Free Diagnostic
              </Button>
            </Link>
          </Card>

          {/* Flagship Installment Plan */}
          <Card featured className="p-7 space-y-6 flex flex-col justify-between relative shadow-2xl">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gold font-bold">
                  RECOMMENDED FOR LEARNERS
                </span>
                <Badge variant="active">INSTALLMENTS</Badge>
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl font-bold text-ink">
                  ₦35,000{' '}
                  <span className="text-xs font-mono font-normal text-muted">
                    / month
                  </span>
                </div>
                <p className="font-body text-xs text-muted">
                  Full flagship track with live cohort & virtual internship.
                </p>
              </div>

              <ul className="space-y-3 text-xs font-body text-muted pt-2 border-t border-border/60">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Live Weekly Masterclasses & Labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>4+ Evaluated Capstone Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>8-Week Virtual Internship Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Verified Public Portfolio + QR Credential</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Automated Placement Engine Routing</span>
                </li>
              </ul>
            </div>

            <Link href="/onboarding" className="block w-full">
              <Button variant="primary" size="default" fullWidth>
                Enroll with Monthly Installments
              </Button>
            </Link>
          </Card>

          {/* Diaspora Tuition */}
          <Card className="p-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted">DIASPORA / GLOBAL</span>
                <Badge variant="neutral">ONE-TIME</Badge>
              </div>
              <div className="space-y-1">
                <div className="font-display text-3xl font-bold text-ink">
                  $249{' '}
                  <span className="text-xs font-mono font-normal text-muted">
                    flat
                  </span>
                </div>
                <p className="font-body text-xs text-muted">
                  Direct full tuition with expedited 1-on-1 mentoring.
                </p>
              </div>

              <ul className="space-y-3 text-xs font-body text-muted pt-2 border-t border-border/60">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>All Flagship Cohort Inclusions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Dedicated 1-on-1 Placement Coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>Direct Routing to Remote US/UK Partners</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>International Card & Wire Accepted</span>
                </li>
              </ul>
            </div>

            <Link href="/onboarding" className="block w-full">
              <Button variant="secondary" size="default" fullWidth>
                Enroll via USD
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* 7. FAQ ACCORDIONS */}
      <section id="faq" className="py-24 border-t border-border/80 bg-surface/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="active">FREQUENTLY ASKED QUESTIONS</Badge>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="font-body text-base text-muted">
              Direct, transparent answers regarding curriculum, placements, and time commitment.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="p-5 rounded-card bg-surface border border-border transition-colors select-none"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                  >
                    <h4 className="font-body font-medium text-sm sm:text-base text-ink">
                      {faq.q}
                    </h4>
                    <ChevronDown
                      className={`w-4 h-4 text-gold shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="font-body text-xs sm:text-sm text-muted mt-3 leading-relaxed border-t border-border/60 pt-3">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. HIGH-IMPACT CLOSING CALL TO ACTION */}
      <section className="py-28 border-t border-border/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8 relative z-10">
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-ink tracking-tight leading-[1.08]">
              Stop Applying into the Black Hole.{' '}
              <span className="text-gold">Enter the Closed Loop.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-muted leading-relaxed">
              Your path to a world-class tech career starts with a 10-minute diagnostic.
              We calibrate your technical baseline, match your track, and prepare you to get hired.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link href="/onboarding" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="default"
                fullWidth
                className="gap-2 h-14 px-10 text-base shadow-glow"
              >
                <Sparkles className="w-4 h-4 fill-black text-black" />
                <span>Start Your Free Assessment</span>
              </Button>
            </Link>

            <Link href="/app/dashboard" className="w-full sm:w-auto">
              <Button variant="secondary" size="default" fullWidth className="h-14 px-8">
                Learner Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
