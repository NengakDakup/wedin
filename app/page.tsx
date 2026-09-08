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
import {
  PaystackLogo,
  MoniepointLogo,
  FlutterwaveLogo,
  PiggyvestLogo,
  KudaLogo,
  OpayLogo,
  NombaLogo,
  CowrywiseLogo,
} from '@/components/marketing/nigerian-tech-logos'

export default function MarketingLandingPage() {
  // Interactive Loop Stage State
  const [activeStage, setActiveStage] = React.useState<number>(0)
  // Interactive ATS Comparison State
  const [atsComparisonMode, setAtsComparisonMode] = React.useState<'generic' | 'wedin'>('wedin')
  // Interactive Track Selector
  const [activeTrackIndex, setActiveTrackIndex] = React.useState<number>(0)
  // Hero Interactive Accordion Student State
  const [expandedStudent, setExpandedStudent] = React.useState<number>(0)
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
    {
      name: 'Paystack',
      category: 'Developer Payments',
      role: 'Core Systems / TypeScript',
      salary: '₦22M - ₦36M',
      hires: '14 Hired',
      logo: PaystackLogo,
      accent: 'text-[#00C3F7]',
    },
    {
      name: 'Moniepoint',
      category: 'Banking Infrastructure',
      role: 'Cloud Architecture & SRE',
      salary: '₦24M - ₦38M',
      hires: '18 Hired',
      logo: MoniepointLogo,
      accent: 'text-[#0357EE]',
    },
    {
      name: 'Flutterwave',
      category: 'African Payments',
      role: 'Distributed Backend & Go',
      salary: '₦20M - ₦34M',
      hires: '12 Hired',
      logo: FlutterwaveLogo,
      accent: 'text-[#FB9129]',
    },
    {
      name: 'Piggyvest',
      category: 'Automated Wealth',
      role: 'Data & Feature Store Ops',
      salary: '₦18M - ₦28M',
      hires: '10 Hired',
      logo: PiggyvestLogo,
      accent: 'text-[#0D60D8]',
    },
    {
      name: 'Kuda Bank',
      category: 'Neo-Banking App',
      role: 'Microservices & Platform',
      salary: '₦18M - ₦30M',
      hires: '9 Hired',
      logo: KudaLogo,
      accent: 'text-[#9333EA]',
    },
    {
      name: 'OPay',
      category: 'Consumer Fintech',
      role: 'High-Throughput Engineering',
      salary: '₦22M - ₦36M',
      hires: '15 Hired',
      logo: OpayLogo,
      accent: 'text-[#14B566]',
    },
    {
      name: 'Nomba',
      category: 'Merchant Solutions',
      role: 'Full-Stack & POS Systems',
      salary: '₦16M - ₦26M',
      hires: '8 Hired',
      logo: NombaLogo,
      accent: 'text-[#EAB308]',
    },
    {
      name: 'Cowrywise',
      category: 'Algorithmic Savings',
      role: 'Security & Backend Python',
      salary: '₦18M - ₦28M',
      hires: '8 Hired',
      logo: CowrywiseLogo,
      accent: 'text-[#0066F5]',
    },
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
        {/* Rounded Top Hero Container with Background Pattern */}
        <div
          style={{
            backgroundColor: '#DDA832',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23dfad36' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e3b342' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23e6b94e' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23e9bf5a' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ecc567' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23efcb73' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23f2d180' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f5d78c' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f7dc99' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23fae2a6' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
          }}
          className="rounded-t-[32px] sm:rounded-t-[44px] border-t border-x border-border/80 pt-6 sm:pt-10 pb-6 px-4 sm:px-8 relative overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-between transition-colors duration-200"
        >
          
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between relative z-10 gap-4 sm:gap-5">
            
            {/* TOP / CENTER: Master Editorial Headline, Squiggle, Category Filter, and Pill CTAs */}
            <div className="text-center space-y-2.5 pt-1 max-w-4xl mx-auto">
              
              {/* Master Headline with Inline Search/Explore Pill (Exact Anatomy) */}
              <h1 className="font-body text-2xl sm:text-4xl lg:text-[44px] font-semibold tracking-[-0.03em] text-ink leading-[1.18]">
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
                  <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-[10px] font-mono text-gold font-semibold">
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

            {/* BOTTOM OF VIEWPORT: 3-Column Interactive Flow (Inputs -> Calibration Engine -> Matching & Outcomes) */}
            <div className="w-full pt-3 pb-2 relative">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
                
                {/* 1. LEFT COLUMN: Students in Different Tracks (Interactive Expandable Accordion) */}
                <div className="w-full lg:w-[29%] flex flex-col gap-2.5 h-[360px] sm:h-[370px] justify-between overflow-hidden">
                  {[
                    {
                      id: 0,
                      name: 'Amara Okonjo',
                      track: 'Full-Stack AI & LLM Systems',
                      photo: '/fellows/amara.jpg',
                      dot: 'bg-gold',
                      activeBorder: 'border-gold/80',
                      badge: '16W Cohort',
                      badgeStyle: 'text-[#8C6200] bg-gold/15 border-gold/30',
                      capstone: 'Autonomous ReAct Agent Loop',
                      grade: '98/100 · Verified Repo',
                      pr: 'PR #84: Cosine Distance on pgvector',
                      skills: ['Claude 3.5', 'pgvector', 'Next.js 16', 'TypeScript'],
                    },
                    {
                      id: 1,
                      name: 'Tunde Adebayo',
                      track: 'Cloud Architecture & DevOps',
                      photo: '/fellows/tunde.jpg',
                      dot: 'bg-info',
                      activeBorder: 'border-info/80',
                      badge: '8W Internship',
                      badgeStyle: 'text-info bg-info/15 border-info/30',
                      capstone: 'Multi-Region Kubernetes Cluster',
                      grade: '14 PRs Merged · 100% Pass',
                      pr: 'PR #42: Terraform Zero-Downtime Rollout',
                      skills: ['AWS EKS', 'Terraform', 'Docker', 'Prometheus'],
                    },
                    {
                      id: 2,
                      name: 'Chioma Eze',
                      track: 'Data Engineering & ML Ops',
                      photo: '/fellows/chioma.jpg',
                      dot: 'bg-success',
                      activeBorder: 'border-success/80',
                      badge: 'Enterprise Lab',
                      badgeStyle: 'text-success bg-success/15 border-success/30',
                      capstone: 'Real-Time Feature Store Pipeline',
                      grade: '9.9 / 10 · Lead TA Score',
                      pr: 'PR #19: Low-Latency Feature Ingestion',
                      skills: ['Python', 'Kafka', 'pgvector', 'SQL'],
                    },
                  ].map((student) => {
                    const isExpanded = expandedStudent === student.id
                    return (
                      <div
                        key={student.id}
                        onClick={() => setExpandedStudent(student.id)}
                        className={cn(
                          'rounded-[22px] transition-all duration-300 ease-in-out cursor-pointer select-none overflow-hidden relative shadow-sm',
                          isExpanded
                            ? `flex-1 p-3 sm:p-3.5 bg-white border-2 ${student.activeBorder} shadow-md flex flex-col justify-between`
                            : 'h-[64px] shrink-0 p-2.5 sm:p-3 bg-white/95 border border-stone-200/90 hover:border-gold/60 flex items-center justify-between'
                        )}
                      >
                        {/* Always visible header summary */}
                        <div className="flex items-center gap-2.5 w-full">
                          <div
                            className={cn(
                              'rounded-xl overflow-hidden shrink-0 transition-all duration-300',
                              isExpanded
                                ? 'w-10 h-10 border-2 border-gold/40 shadow-xs'
                                : 'w-9 h-9 border border-stone-200'
                            )}
                          >
                            <img
                              src={student.photo}
                              alt={student.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="space-y-0.5 flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-body font-semibold text-xs sm:text-sm text-stone-900 leading-tight truncate">
                                {student.name}
                              </h4>
                              <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', student.dot)} />
                            </div>
                            <p className="font-body text-[11px] text-stone-600 leading-tight truncate">
                              {student.track}
                            </p>
                          </div>
                          {!isExpanded && (
                            <div className="flex items-center gap-1 shrink-0 pl-1">
                              <span className="text-[10px] font-mono font-medium text-stone-500 hidden sm:inline">
                                View
                              </span>
                              <ChevronDown className="w-3.5 h-3.5 text-stone-500 -rotate-90" />
                            </div>
                          )}
                          {isExpanded && (
                            <span
                              className={cn(
                                'text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border shrink-0 uppercase tracking-wider',
                                student.badgeStyle
                              )}
                            >
                              {student.badge}
                            </span>
                          )}
                        </div>

                        {/* Expanded details (only visible when expanded) */}
                        {isExpanded && (
                          <div className="space-y-2 pt-2 border-t border-stone-200/70 animate-in fade-in-50 duration-200">
                            <div className="rounded-xl bg-stone-50 border border-stone-200/80 p-2 space-y-1">
                              <div className="flex items-center justify-between text-[10px] font-mono">
                                <span className="text-stone-500 uppercase tracking-wider">Capstone Lab</span>
                                <span className="text-success font-semibold">{student.grade}</span>
                              </div>
                              <p className="font-body text-xs font-medium text-stone-900 truncate">
                                {student.capstone}
                              </p>
                              <p className="text-[10px] font-mono text-stone-500 truncate">
                                {student.pr}
                              </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-1">
                              {student.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-white border border-stone-200 text-stone-700 font-medium shadow-2xs"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* LEFT CONNECTOR CURVES (Visible on lg+): Obvious Black Hardware Trace Lines */}
                <div className="hidden lg:flex flex-col items-center justify-center w-8 shrink-0 py-1 h-[360px] sm:h-[370px] select-none pointer-events-none">
                  <svg viewBox="0 0 32 370" fill="none" className="w-full h-full text-[#0F0D0B]">
                    <path d="M 0 60 C 18 60, 18 185, 32 185" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M 0 185 L 32 185" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M 0 310 C 18 310, 18 185, 32 185" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <circle cx="3" cy="60" r="3" fill="currentColor" />
                    <circle cx="3" cy="185" r="3" fill="currentColor" />
                    <circle cx="3" cy="310" r="3" fill="currentColor" />
                    <circle cx="29" cy="185" r="3.5" fill="currentColor" />
                  </svg>
                </div>

                {/* 2. CENTER COLUMN: The Wedin Platform (Pure White Background + Navbar Button Style) */}
                <div className="w-full lg:w-[38%] h-[360px] sm:h-[370px]">
                  <div className="w-full h-full rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 bg-white border border-stone-200/90 shadow-xl relative overflow-hidden flex flex-col items-center text-center justify-between">
                    
                    {/* Ambient Subtle Warmth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />

                    {/* Top Glowing Brand Emblem Badge */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shadow-sm relative z-10 mt-0.5">
                      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
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

                    {/* Central Headline & Copy (Modern Sans with Reduced Weight) */}
                    <div className="space-y-2 relative z-10 my-auto py-1">
                      <h3 className="font-body text-xl sm:text-2xl font-semibold text-stone-900 leading-snug tracking-tight">
                        The Wedin <br />
                        <span className="text-[#C89420]">Placement Platform</span>
                      </h3>
                      <p className="font-body text-xs sm:text-[13px] text-stone-600 max-w-[290px] mx-auto leading-relaxed">
                        We transition students to practitioners through live cohorts, evaluate production capstones, and compile unforgeable proof-of-work.
                      </p>
                    </div>

                    {/* Primary Button (Matching Navbar Button Anatomy) & Meta */}
                    <div className="w-full space-y-2 relative z-10 pt-1">
                      <Link href="/onboarding" className="block w-full group">
                        <div className="w-full h-11 sm:h-12 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs sm:text-sm font-semibold pl-5 pr-1.5 sm:pr-2 flex items-center justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer">
                          <span className="tracking-wide">Calibrate & Match Talent</span>
                          {/* White Circular Icon Container Matching Button Radius */}
                          <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                            {/* Primary Icon: Slides out diagonally top-right */}
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
                            {/* Incoming Icon: Slides in smoothly from bottom-left */}
                            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                          </span>
                        </div>
                      </Link>
                      <p className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
                        100% VERIFIED GITHUB REPOSITORIES · ZERO AI FLUFF
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONNECTOR CURVES (Visible on lg+): Obvious Black Hardware Trace Lines */}
                <div className="hidden lg:flex flex-col items-center justify-center w-8 shrink-0 py-1 h-[360px] sm:h-[370px] select-none pointer-events-none">
                  <svg viewBox="0 0 32 370" fill="none" className="w-full h-full text-[#0F0D0B]">
                    <path d="M 0 185 C 14 185, 14 70, 32 70" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M 0 185 C 14 185, 14 275, 32 275" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <circle cx="3" cy="185" r="3.5" fill="currentColor" />
                    <circle cx="29" cy="70" r="3" fill="currentColor" />
                    <circle cx="29" cy="275" r="3" fill="currentColor" />
                  </svg>
                </div>

                {/* 3. RIGHT COLUMN: Unified White Card with Top Black Header Card & White Background for Images/Names */}
                <div className="w-full lg:w-[29%] h-[360px] sm:h-[370px]">
                  <div className="w-full h-full rounded-[28px] sm:rounded-[32px] p-3 sm:p-3.5 bg-white border border-stone-200/90 shadow-xl flex flex-col justify-between overflow-hidden relative">
                    
                    {/* Top Inside Black Card with Text */}
                    <div className="rounded-2xl p-2.5 sm:p-3 bg-[#0F0D0B] border border-black/40 text-white shadow-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-body font-semibold text-xs tracking-wider text-white">
                          <Building2 className="w-3.5 h-3.5 text-gold" />
                          <span>MATCHED TO JOBS</span>
                        </div>
                        {/* 3 Dots */}
                        <div className="flex items-center gap-1 opacity-60">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        </div>
                      </div>
                      <p className="font-mono text-[9px] font-bold text-emerald-400 tracking-widest uppercase">
                        DIRECT PARTNER HIRES
                      </p>
                    </div>

                    {/* 4 Fellows: Images, Names & Badges directly on White Background */}
                    <div className="grid grid-cols-4 gap-2 pt-1 pb-0.5">
                      {/* Match 1: Amara -> Paystack */}
                      <div className="space-y-1 text-center">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 relative shadow-2xs group">
                          <img
                            src="/fellows/amara.jpg"
                            alt="Amara O."
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <p className="font-body text-[10px] font-medium text-stone-900 truncate">
                          Amara O.
                        </p>
                        <span className="block text-[8px] font-mono font-semibold text-[#008BB8] bg-[#00C3F7]/12 border border-[#00C3F7]/30 rounded px-1 py-0.5 truncate">
                          Paystack
                        </span>
                      </div>

                      {/* Match 2: Tunde -> Moniepoint */}
                      <div className="space-y-1 text-center">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 relative shadow-2xs group">
                          <img
                            src="/fellows/tunde.jpg"
                            alt="Tunde A."
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <p className="font-body text-[10px] font-medium text-stone-900 truncate">
                          Tunde A.
                        </p>
                        <span className="block text-[8px] font-mono font-semibold text-[#0247C5] bg-[#0357EE]/12 border border-[#0357EE]/30 rounded px-1 py-0.5 truncate">
                          Moniepoint
                        </span>
                      </div>

                      {/* Match 3: Chioma -> Piggyvest */}
                      <div className="space-y-1 text-center">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 relative shadow-2xs group">
                          <img
                            src="/fellows/chioma.jpg"
                            alt="Chioma E."
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <p className="font-body text-[10px] font-medium text-stone-900 truncate">
                          Chioma E.
                        </p>
                        <span className="block text-[8px] font-mono font-semibold text-[#0B4DB0] bg-[#0D60D8]/12 border border-[#0D60D8]/30 rounded px-1 py-0.5 truncate">
                          Piggyvest
                        </span>
                      </div>

                      {/* Match 4: Kenji -> Flutterwave */}
                      <div className="space-y-1 text-center">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 relative shadow-2xs group">
                          <img
                            src="/fellows/kenji.jpg"
                            alt="Kenji M."
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <p className="font-body text-[10px] font-medium text-stone-900 truncate">
                          Kenji M.
                        </p>
                        <span className="block text-[8px] font-mono font-semibold text-[#C4680A] bg-[#FB9129]/12 border border-[#FB9129]/30 rounded px-1 py-0.5 truncate">
                          Flutterwave
                        </span>
                      </div>
                    </div>

                    {/* Bottom Section inside White Card: Key Live Metrics */}
                    <div className="rounded-2xl p-2 sm:p-2.5 bg-stone-50 border border-stone-200/80 space-y-1">
                      {/* Row 1: Direct Interviews */}
                      <div className="flex items-center justify-between text-[11px] py-0.5 border-b border-stone-200/60">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-md bg-gold/15 flex items-center justify-center text-gold text-[9px]">
                            💼
                          </span>
                          <span className="font-body font-medium text-stone-800">Partner Interviews</span>
                        </div>
                        <span className="font-mono text-[11px] text-stone-500 font-medium">38 Dispatched</span>
                      </div>

                      {/* Row 2: Verified Offers */}
                      <div className="flex items-center justify-between text-[11px] py-0.5 border-b border-stone-200/60">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 ml-1 mr-0.5" />
                          <span className="font-body font-medium text-stone-800">PR-Verified Hires</span>
                        </div>
                        <span className="font-mono text-[11px] text-emerald-600 font-bold">150+ Direct Offers</span>
                      </div>

                      {/* Row 3: Starting Package */}
                      <div className="flex items-center justify-between text-[11px] py-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-md bg-gold/15 flex items-center justify-center text-gold text-[9px]">
                            💎
                          </span>
                          <span className="font-body font-medium text-stone-800">Starting Package</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#A37410] font-bold">₦18M - ₦38M / $48k</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Creative Borderless Hiring Partners Showcase with Real Logos */}
        <div className="pt-10 pb-8 relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-ink tracking-wider uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>TOP NIGERIAN TECH UNICORNS & ENTERPRISES</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold text-ink tracking-tight">
                Where Wedin Fellows Build & Lead
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-muted max-w-md">
              Direct pipeline routing with Lagos & remote engineering squads. Zero agency recruiting markups.
            </p>
          </div>

          {/* Borderless Floating Grid of Real Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {hiringCompanies.map((c) => {
              const Logo = c.logo
              return (
                <div
                  key={c.name}
                  className="group relative rounded-2xl p-4 bg-surface/40 hover:bg-surface/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col justify-between h-[125px] overflow-hidden"
                >
                  {/* Subtle Brand Ambient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/[0.02] group-hover:to-gold/5 pointer-events-none transition-opacity" />

                  {/* Top: Logo + Live Hires Pill */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Logo className="w-full h-full" />
                    </div>
                    <span className="text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      {c.hires}
                    </span>
                  </div>

                  {/* Bottom: Name, Track & Compensation */}
                  <div className="space-y-0.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="font-body font-semibold text-sm text-ink group-hover:text-gold transition-colors">
                        {c.name}
                      </h4>
                      <span className="font-mono text-xs font-semibold text-gold">
                        {c.salary}
                      </span>
                    </div>
                    <p className="font-body text-[11px] text-muted truncate">
                      {c.role}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Clean Borderless Proof Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-body text-muted">
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-success stroke-[2.5]" />
              <span>Production GitHub PR Proof</span>
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-success stroke-[2.5]" />
              <span>Pre-Screened by Senior Staff TAs</span>
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-success stroke-[2.5]" />
              <span>18-Day Average Time to Offer</span>
            </span>
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
