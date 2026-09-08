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
  ChevronLeft,
  Sliders,
  Send,
  UserCheck,
  Play,
  Flame,
  Globe,
  Database,
  Search,
  ArrowUpRight,
  GitPullRequest,
  GitMerge,
  Copy,
  RotateCcw,
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
  const [copiedProof, setCopiedProof] = React.useState<boolean>(false)
  const [acceptedInterview, setAcceptedInterview] = React.useState<boolean>(false)

  const handleCopyProof = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('https://wedin.io/p/amara-okonjo')
      setCopiedProof(true)
      setTimeout(() => setCopiedProof(false), 2200)
    }
  }
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
      subtitle: '16-Week Flagship Cohort',
      desc: '16 weeks of live engineering masterclasses and four production-grade capstone labs. No toy tutorials: you architect real state machines, streaming APIs, and vector search pipelines with daily code review.',
      highlights: [
        'Live masterclasses led by Principal Engineers',
        'Daily pull request reviews on GitHub',
        'Production token budgeting & vector indexing',
      ],
      tag: 'CAPSTONE LAB',
      statsLabel: 'TEST SUITE INTEGRITY',
      statsValue: '14/14 Tests Passed · 98/100 TA Score',
    },
    {
      step: '02',
      title: 'Virtual Internship',
      subtitle: '8 Weeks of Enterprise Sprints',
      desc: 'You transition from student to practitioner. Embedded into simulated enterprise engineering squads at companies like Paystack & Moniepoint, you receive real sprint briefs, submit pull requests, resolve merge conflicts, and get rated by industry leads.',
      highlights: [
        'Simulated sprint boards on enterprise repos',
        'Sub-50ms database benchmarks & pgvector migrations',
        '1-on-1 code reviews from ex-Paystack / Flutterwave Leads',
      ],
      tag: 'ENTERPRISE SPRINT',
      statsLabel: 'SUPERVISOR EVALUATION',
      statsValue: '9.8 / 10 Lead TA Score · Merged #84',
    },
    {
      step: '03',
      title: 'Auto-Generated ATS Proof',
      subtitle: 'Cryptographic Proof-of-Work CV',
      desc: 'Unlike generic AI resume builders that hallucinate skills, Wedin compiles your ATS-optimized CV directly from your completed GitHub repositories, supervisor ratings, and test benchmarks. Every bullet point links to verified proof.',
      highlights: [
        'Passes Greenhouse, Lever & Workday algorithms',
        'Cryptographic verification URL with SHA-256 seal',
        '100% verifiable code commits — zero AI fluff',
      ],
      tag: 'ATS REPUTATION PARSER',
      statsLabel: 'ATS FILTER COMPATIBILITY',
      statsValue: '98/100 · Top 1% Global ATS Match',
    },
    {
      step: '04',
      title: 'Automated Placement Engine',
      subtitle: 'Direct Partner Pipeline Routing',
      desc: 'The engine actively analyzes hiring manager criteria at Nigeria & global tech unicorns, matches your verified skills, auto-submits tailored applications, and delivers pre-screened technical interview invitations directly to your dashboard.',
      highlights: [
        'Direct recruiter routing with zero agency markup',
        '98% algorithmic calibration match on capstones',
        '18-day average placement post-graduation',
      ],
      tag: 'PARTNER ROUTING',
      statsLabel: 'TIME TO OFFER DISPATCH',
      statsValue: '18 Days Average Post-Graduation',
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

  const enrichedTracks = [
    {
      id: 'full-stack-ai',
      title: 'Full-Stack AI Systems Engineer',
      subtitle: 'Autonomous Agents · Vector Retrieval · Next.js 15',
      description: 'Architect deterministic multi-agent workflows, fine-tune LLM routing, and deploy high-throughput pgvector pipelines with real-time Next.js streaming interfaces.',
      duration: '16 Weeks Intensive',
      cohortStatus: 'Cohort 04 Enrolling',
      spotsLeft: '8 Spots Left',
      isFeatured: true,
      salaryRange: '₦22M – ₦36M',
      avgPlacement: '18 Days to Offer',
      matchScore: '98% Placement Rate',
      icon: Sparkles,
      keySkills: ['TypeScript', 'Next.js 15', 'Python', 'LangChain', 'Vector DBs', 'Agent Swarms', 'PostgreSQL'],
    },
    {
      id: 'cloud-infrastructure',
      title: 'Distributed Cloud Architect',
      subtitle: 'High-Scale Kubernetes · Kafka · Financial Ledgers',
      description: 'Design fault-tolerant distributed infrastructure, automate multi-cloud Kubernetes clusters with ArgoCD, and engineer high-throughput financial message queues.',
      duration: '14 Weeks Intensive',
      cohortStatus: 'Cohort 04 Enrolling',
      spotsLeft: '11 Spots Left',
      isFeatured: false,
      salaryRange: '₦20M – ₦34M',
      avgPlacement: '21 Days to Offer',
      matchScore: '94% Placement Rate',
      icon: Database,
      keySkills: ['Kubernetes', 'Go', 'Terraform', 'Kafka', 'PostgreSQL', 'Prometheus', 'Docker'],
    },
    {
      id: 'product-engineering',
      title: 'Senior Product Software Engineer',
      subtitle: 'Full-Stack Design Systems · Payments · GraphQL',
      description: 'Master full-stack product engineering from micro-interactions and atomic design systems to multi-currency payment checkout integrations and sub-100ms APIs.',
      duration: '12 Weeks Intensive',
      cohortStatus: 'Cohort 04 Enrolling',
      spotsLeft: '6 Spots Left',
      isFeatured: false,
      salaryRange: '₦18M – ₦30M',
      avgPlacement: '19 Days to Offer',
      matchScore: '96% Placement Rate',
      icon: Layers,
      keySkills: ['Next.js', 'React 19', 'GraphQL', 'Tailwind CSS', 'Distributed SQL', 'Stripe / Paystack APIs'],
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
              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-stone-950 tracking-wider uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>TOP NIGERIAN TECH UNICORNS & ENTERPRISES</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold text-stone-950 tracking-tight">
                Where Wedin Fellows Build & Lead
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-stone-900 max-w-md font-medium">
              Direct pipeline routing with Lagos &amp; remote engineering squads. Zero agency recruiting markups.
            </p>
          </div>

          {/* Borderless Floating Grid of Real Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {hiringCompanies.map((c) => {
              const Logo = c.logo
              return (
                <div
                  key={c.name}
                  className="group relative rounded-2xl p-4 bg-white/95 hover:bg-white shadow-xs hover:shadow-lg border border-stone-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-[130px] overflow-hidden"
                >
                  {/* Subtle Brand Ambient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-500/5 group-hover:to-amber-500/10 pointer-events-none transition-opacity" />

                  {/* Top: Logo + Live Hires Pill */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Logo className="w-full h-full" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-600" />
                      {c.hires}
                    </span>
                  </div>

                  {/* Bottom: Name, Track & Compensation */}
                  <div className="space-y-0.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="font-body font-semibold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                        {c.name}
                      </h4>
                      <span className="font-mono text-xs font-bold text-[#9E6E00]">
                        {c.salary}
                      </span>
                    </div>
                    <p className="font-body text-[11px] text-stone-600 truncate">
                      {c.role}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Clean Borderless Proof Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-body text-stone-900 font-medium">
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" />
              <span>Production GitHub PR Proof</span>
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" />
              <span>Pre-Screened by Senior Staff TAs</span>
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-800 stroke-[3]" />
              <span>18-Day Average Time to Offer</span>
            </span>
          </div>

        </div>
      </section>

      {/* 2. THE CLOSED LOOP: Interactive 4-Stage Proof-of-Work Pipeline */}
      <section id="closed-loop" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>THE CLOSED LOOP ARCHITECTURE</span>
          </div>
          <h2 className="font-body text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
            How Wedin Closes the Loop
          </h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Every stage feeds directly into the next. Your coursework automatically compiles into verified proof-of-work, which generates your ATS resume, which triggers direct hiring pipeline routing.
          </p>
        </div>

        {/* 4 Interactive Connected Stepper Circuit Ribbon */}
        <div className="relative">
          {/* Background Connecting Circuit Bus with Active Glowing Progress (Visible on lg+) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-border/80 -translate-y-6 z-0 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold via-amber-400 to-gold transition-all duration-500 ease-out shadow-[0_0_12px_rgba(234,179,8,0.6)]"
              style={{ width: `${(activeStage / 3) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {loopStages.map((stage, idx) => {
              const isSelected = activeStage === idx
              const isPassed = activeStage > idx
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={cn(
                    'p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left select-none space-y-2.5 relative overflow-hidden backdrop-blur-md group w-full',
                    isSelected
                      ? 'bg-surface border-2 border-gold shadow-lg ring-2 ring-gold/20 text-ink scale-[1.02]'
                      : 'bg-surface/60 hover:bg-surface/90 border-border/80 hover:border-gold/50 text-muted'
                  )}
                >
                  {/* Active Card Top Accent Glow Line */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-300 to-gold" />
                  )}

                  {/* Top Node Indicator & Status */}
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border transition-colors',
                        isSelected
                          ? 'bg-gold text-[#0A0A0A] border-gold shadow-xs'
                          : isPassed
                          ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                          : 'bg-surface border-border text-muted group-hover:text-ink'
                      )}
                    >
                      STEP {stage.step}
                    </span>
                    {isSelected ? (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-gold font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                        ACTIVE
                      </span>
                    ) : isPassed ? (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>VERIFIED</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-muted/70 group-hover:text-muted">STAGE 0{idx + 1}</span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-0.5">
                    <h4
                      className={cn(
                        'font-body font-semibold text-sm sm:text-base transition-colors leading-snug',
                        isSelected ? 'text-ink' : 'text-ink/85 group-hover:text-ink'
                      )}
                    >
                      {stage.title}
                    </h4>
                    <p className="font-body text-xs text-muted truncate">
                      {stage.subtitle}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Inspector Panel (Unified Glassmorphic Workspace) */}
        <div className="rounded-3xl bg-surface/70 border border-border/90 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl relative overflow-hidden backdrop-blur-md">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Stage Explanation & Concrete Value */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Step Counter + Tag */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span>{loopStages[activeStage].tag}</span>
              </div>
              <span className="font-mono text-xs text-muted font-medium">
                Stage {activeStage + 1} of 4 · Closed Loop Cycle
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-body text-2xl sm:text-3xl font-semibold text-ink tracking-tight leading-tight">
                {loopStages[activeStage].title}
              </h3>
              <p className="font-mono text-xs text-gold font-medium">
                {loopStages[activeStage].subtitle}
              </p>
            </div>

            <p className="font-body text-sm text-muted leading-relaxed">
              {loopStages[activeStage].desc}
            </p>

            {/* Concrete Proof Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-border/70">
              {loopStages[activeStage].highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-2.5 text-xs font-body text-ink/90">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Bar: Stage Navigation & CTA */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link href="/onboarding" className="inline-block group">
                <div className="h-11 sm:h-12 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs sm:text-sm font-semibold pl-5 pr-2 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer">
                  <span className="tracking-wide">Explore This Track</span>
                  <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                  </span>
                </div>
              </Link>

              {/* Step Navigation Stepper Pill */}
              <div className="flex items-center gap-1 bg-surface border border-border rounded-full p-1 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : 3))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-elevated text-muted hover:text-ink transition-colors text-xs font-mono cursor-pointer"
                  title="Previous Stage"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="font-mono text-xs px-2 text-ink font-semibold select-none">
                  0{activeStage + 1} / 04
                </span>
                <button
                  type="button"
                  onClick={() => setActiveStage((prev) => (prev < 3 ? prev + 1 : 0))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-elevated text-muted hover:text-ink transition-colors text-xs font-mono cursor-pointer"
                  title="Next Stage"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Artifact Mockup */}
          <div className="lg:col-span-7">
            
            {/* ARTIFACT 01: Interactive Code Editor / Capstone */}
            {activeStage === 0 && (
              <div className="rounded-2xl bg-[#0C0A09] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs ring-1 ring-white/5">
                {/* Editor Top Bar with macOS Window Dots & Tabs */}
                <div className="px-4 py-2.5 bg-[#161412] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <div className="ml-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/10 border border-white/10 text-[11px] text-white font-medium">
                      <Code2 className="w-3 h-3 text-gold" />
                      <span>autonomous-agent-loop.ts</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded">
                    TS 5.5 · STRICT PASS
                  </span>
                </div>

                {/* Breadcrumbs & Git Branch Bar */}
                <div className="px-4 py-1.5 bg-[#110F0D] border-b border-white/5 flex items-center justify-between text-[10px] text-stone-400">
                  <span className="flex items-center gap-1.5 truncate">
                    <span className="text-stone-500">wedin-monorepo</span>
                    <span>/</span>
                    <span className="text-stone-500">packages</span>
                    <span>/</span>
                    <span className="text-stone-300">agent-core</span>
                    <span>/</span>
                    <span className="text-amber-400">cycle.ts</span>
                  </span>
                  <span className="text-gold font-mono flex items-center gap-1 shrink-0">
                    <span>git:(main*)</span>
                    <span className="text-emerald-400">+42</span>
                    <span className="text-rose-400">-3</span>
                  </span>
                </div>

                {/* Code Window with Line Numbers and Syntax Highlighting */}
                <div className="p-4 space-y-1 text-[11px] leading-relaxed overflow-x-auto text-stone-300">
                  <div className="text-stone-500">// Capstone Lab 03: Deterministic ReAct Decision Cycle</div>
                  <div className="flex items-center">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">1</span>
                    <div>
                      <span className="text-purple-400 font-semibold">export async function</span>{' '}
                      <span className="text-amber-300 font-semibold">executeAgentCycle</span>
                      (task: <span className="text-cyan-400">AgentTask</span>):{' '}
                      <span className="text-cyan-400">Promise&lt;CycleResult&gt;</span> {'{'}
                    </div>
                  </div>
                  <div className="flex items-center pl-4">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">2</span>
                    <div>
                      <span className="text-purple-400">const</span> plan ={' '}
                      <span className="text-purple-400">await</span> planner.
                      <span className="text-amber-300">decompose</span>(task.objective, {'{'}
                    </div>
                  </div>
                  <div className="flex items-center pl-8 text-stone-400">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">3</span>
                    <div>
                      model: <span className="text-emerald-300">&quot;claude-3-5-sonnet&quot;</span>,
                    </div>
                  </div>
                  <div className="flex items-center pl-8 text-stone-400">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">4</span>
                    <div>
                      maxTokens: <span className="text-amber-400">4096</span>, strictSchema:{' '}
                      <span className="text-purple-400">true</span>,
                    </div>
                  </div>
                  <div className="flex items-center pl-4">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">5</span>
                    <div>{'}'});</div>
                  </div>
                  <div className="flex items-center pl-4">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">6</span>
                    <div>
                      <span className="text-purple-400">const</span> execution ={' '}
                      <span className="text-purple-400">await</span> executor.
                      <span className="text-amber-300">runDeterministic</span>(plan.tools);
                    </div>
                  </div>
                  <div className="flex items-center pl-4">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">7</span>
                    <div>
                      <span className="text-purple-400">return</span> memory.
                      <span className="text-amber-300">checkpoint</span>({'{'} state: execution.state, passed:{' '}
                      <span className="text-purple-400">true</span> {'}'});
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 text-stone-600 select-none text-right pr-2">8</span>
                    <div>{'}'}</div>
                  </div>
                </div>

                {/* Integrated Terminal Test Runner Drawer */}
                <div className="px-4 py-2.5 bg-[#161412] border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-semibold">14/14 Integration Tests Passing (312ms)</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                    <span>Lead TA Rubric:</span>
                    <span className="px-2 py-0.5 rounded bg-gold/15 text-gold font-bold border border-gold/30">
                      98/100 · Exceptional
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ARTIFACT 02: Enterprise Virtual Internship Sprint PR Review */}
            {activeStage === 1 && (
              <div className="rounded-2xl bg-[#0C0A09] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs space-y-3 p-4 sm:p-5 ring-1 ring-white/5">
                {/* PR Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 truncate">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5 text-[11px] font-bold shrink-0">
                      <GitMerge className="w-3.5 h-3.5" />
                      <span>MERGED #84</span>
                    </span>
                    <span className="text-white font-semibold text-xs truncate">
                      paystack-oss / core-checkout-service
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold shrink-0">
                    ALL 42 CI CHECKS PASS
                  </span>
                </div>

                {/* PR Title & Author Info */}
                <div className="space-y-1.5 font-body">
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span>Author: <strong className="text-stone-200">Amara Okonjo (Wedin Fellow #204)</strong></span>
                    <span className="text-stone-500">Sprint 04 · Enterprise Squad</span>
                  </div>
                  <h5 className="font-semibold text-sm text-white leading-snug">
                    feat(vector-search): Sub-50ms Hybrid Vector RAG on Postgres pgvector
                  </h5>
                  
                  {/* Benchmarks Grid */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-0.5">
                      <span className="text-stone-400 block text-[10px]">P99 LATENCY BENCHMARK</span>
                      <span className="text-emerald-400 font-bold text-xs">240ms → 38ms (-84%)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-0.5">
                      <span className="text-stone-400 block text-[10px]">KEYWORD RECALL RECOVERY</span>
                      <span className="text-gold font-bold text-xs">100% Zero-Loss Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Mentor Code Review Quote Card */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 font-body text-xs">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-[10px] text-gold font-bold">
                        KM
                      </div>
                      <span className="font-semibold text-gold">Kelechi M. (Lead Architect · ex-Paystack)</span>
                    </div>
                    <span className="text-stone-400">Verified Code Review</span>
                  </div>
                  <p className="text-stone-200 leading-relaxed italic text-[11px]">
                    &quot;Amara demonstrated senior-level systems thinking. Vector indexing handles sparse keyword fallback without edge cases. Production-ready without handholding.&quot;
                  </p>
                </div>

                {/* Footer Evaluation Grade */}
                <div className="flex items-center justify-between text-[11px] pt-1 text-stone-400 font-mono">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ENTERPRISE RUBRIC SEAL</span>
                  </span>
                  <span className="text-emerald-400 font-bold">★ 9.8 / 10 Evaluation Score</span>
                </div>
              </div>
            )}

            {/* ARTIFACT 03: Cryptographic ATS Proof-of-Work CV */}
            {activeStage === 2 && (
              <div className="rounded-2xl bg-[#0C0A09] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs space-y-3 p-4 sm:p-5 ring-1 ring-white/5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gold" />
                    <span className="text-white font-semibold text-xs">
                      ATS PARSER REPUTATION ENGINE
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded font-semibold">
                    TIER-1 ATS VERIFIED
                  </span>
                </div>

                {/* Score Gauge & Filter Verification */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-4 font-body">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">
                      ALGORITHMIC COMPATIBILITY SCORE
                    </span>
                    <h5 className="font-bold text-base sm:text-lg text-white">
                      Greenhouse &amp; Lever Optimized
                    </h5>
                    <p className="text-[11px] text-stone-300">
                      Parses 100% of skills directly into hiring ATS systems without recruiter drop-off.
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex flex-col items-center justify-center shrink-0">
                    <span className="font-mono text-lg font-bold text-emerald-400">98</span>
                    <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase">SCORE</span>
                  </div>
                </div>

                {/* Verified Bullet Points */}
                <div className="space-y-2 text-[11px] font-body text-stone-200">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>Architected ReAct loop with Claude 3.5 Sonnet (commit <code className="text-gold font-mono bg-gold/10 px-1.5 py-0.5 rounded">9d4f2a</code>)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>Cut database query latency by 84% on Paystack enterprise squad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                    <span>Signed cryptographic SHA-256 seal by Lead Staff TA</span>
                  </div>
                </div>

                {/* Public Verification Link with Copy Action */}
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-stone-400 truncate">https://wedin.io/p/amara-okonjo</span>
                  <button
                    type="button"
                    onClick={handleCopyProof}
                    className="text-gold hover:text-amber-300 flex items-center gap-1.5 font-semibold cursor-pointer shrink-0 transition-colors"
                  >
                    {copiedProof ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied Link!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Proof Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* ARTIFACT 04: Real Nigerian Unicorn Partner Placement Dispatch */}
            {activeStage === 3 && (
              <div className="rounded-2xl bg-[#0C0A09] border border-white/10 overflow-hidden shadow-2xl font-mono text-xs space-y-3 p-4 sm:p-5 ring-1 ring-white/5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-gold fill-gold" />
                    <span className="text-white font-semibold text-xs">
                      DIRECT PARTNER DISPATCH ENGINE
                    </span>
                  </div>
                  <span className="text-[10px] text-gold bg-gold/15 px-2.5 py-0.5 rounded font-semibold border border-gold/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                    INTERVIEW DISPATCHED
                  </span>
                </div>

                {/* Job Invitation Card 01 (Paystack) */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-gold/40 shadow-xs space-y-2 font-body">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 p-0.5 flex items-center justify-center">
                        <PaystackLogo className="w-full h-full" />
                      </div>
                      <span className="font-semibold text-sm text-white">Paystack Core Platform Squad</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">₦28M / yr</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    Role: <strong className="text-white">Junior AI Systems Engineer (Lagos / Hybrid)</strong>
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-stone-400">
                    <span>Interview: Thursday, 2:00 PM WAT</span>
                    <span className="text-emerald-400 font-semibold">98% Calibrated Fit</span>
                  </div>
                </div>

                {/* Job Invitation Card 02 (Moniepoint) */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 shadow-xs space-y-2 font-body">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 p-0.5 flex items-center justify-center">
                        <MoniepointLogo className="w-full h-full" />
                      </div>
                      <span className="font-semibold text-sm text-white">Moniepoint Core Infrastructure</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">₦32M / yr</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    Role: <strong className="text-white">Backend Systems Fellow (Victoria Island / Hybrid)</strong>
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-stone-400">
                    <span>Interview: Monday, 11:00 AM WAT</span>
                    <span className="text-emerald-400 font-semibold">96% Calibrated Fit</span>
                  </div>
                </div>

                {/* Candidate Action Pill */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-body">
                  <span className="text-stone-200 font-medium">
                    Technical Screen Confirmed via Recruiter Fast-Track
                  </span>
                  <button
                    type="button"
                    onClick={() => setAcceptedInterview(true)}
                    className={cn(
                      'px-3 py-1 rounded-full font-bold font-mono transition-all duration-200 cursor-pointer text-xs shrink-0',
                      acceptedInterview
                        ? 'bg-emerald-500 text-black shadow-md'
                        : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black border border-emerald-500/40'
                    )}
                  >
                    {acceptedInterview ? '✓ Calendar Invite Added' : '1-Click Accept'}
                  </button>
                </div>

                {/* Footer Stat */}
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 pt-1">
                  <span>DISPATCH PIPELINE</span>
                  <span className="text-gold font-semibold">18 Days Average to Placement</span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Continuous Loop Re-Calibration Ribbon (Demonstrating the Closed Loop) */}
        <div className="rounded-2xl p-4 sm:p-6 bg-surface/60 border border-border/80 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <RotateCcw className="w-5 h-5 animate-spin-slow" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-body font-semibold text-sm sm:text-base text-ink">
                  Continuous Closed-Loop Re-Calibration
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-semibold">
                  LIVE LOOP
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-muted max-w-2xl">
                Interview debriefs, rejection analytics, and hiring rubrics from Paystack, Moniepoint &amp; Flutterwave continuously re-train our weekly curriculum.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-gold shrink-0 bg-gold/10 border border-gold/20 px-3.5 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-ink">Cohort 04 Admissions Open</span>
            <Link href="/onboarding" className="text-gold font-bold hover:underline flex items-center gap-0.5">
              <span>Apply</span>
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </section>

      {/* 3. CURRICULUM TRACKS: High-Density Curriculum Breakdown */}
      <section id="tracks" className="py-24 border-t border-border/80 bg-surface/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span>CURRICULUM ARCHITECTURE</span>
              </div>
              <h2 className="font-body text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
                Designed for Tier-1 Hiring Rubrics
              </h2>
              <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                We don&apos;t teach generic slide decks. Every curriculum is reverse-engineered
                from the actual interview benchmarks and codebase standards of Nigeria&apos;s leading tech employers.
              </p>
            </div>

            {/* Diagnostic Assessment CTA pill */}
            <Link href="/onboarding" className="inline-block group/hdr shrink-0">
              <div className="h-11 sm:h-12 rounded-full bg-surface-elevated hover:bg-surface border border-border hover:border-gold/50 text-ink font-body text-xs sm:text-sm font-semibold pl-5 pr-2 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer">
                <span className="tracking-wide">Start 5-Min Diagnostic</span>
                <span className="relative w-8 h-8 rounded-full bg-gold flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/hdr:translate-x-4 group-hover/hdr:-translate-y-4" />
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/hdr:translate-x-0 group-hover/hdr:translate-y-0" />
                </span>
              </div>
            </Link>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {enrichedTracks.map((track) => {
              const TrackIcon = track.icon
              return (
                <div
                  key={track.id}
                  className={cn(
                    'rounded-3xl p-6 sm:p-7 bg-surface border transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden backdrop-blur-md group hover:-translate-y-1 hover:shadow-xl',
                    track.isFeatured
                      ? 'border-2 border-gold shadow-lg ring-1 ring-gold/30'
                      : 'border-border/90 hover:border-gold/50 shadow-sm'
                  )}
                >
                  {/* Featured Track Glow Accent */}
                  {track.isFeatured && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-amber-300 to-gold" />
                  )}

                  {/* Ambient Backdrop Glow */}
                  <div
                    className={cn(
                      'absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl pointer-events-none',
                      track.isFeatured ? 'bg-gold/10' : 'bg-stone-500/5'
                    )}
                  />

                  {/* Card Body */}
                  <div className="space-y-5 relative z-10">
                    
                    {/* Top Status & Duration Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                          <TrackIcon className="w-4 h-4" />
                        </div>
                        <span
                          className={cn(
                            'font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border',
                            track.isFeatured
                              ? 'bg-gold text-[#0A0A0A] border-gold shadow-2xs'
                              : 'bg-surface-elevated border-border text-muted'
                          )}
                        >
                          {track.isFeatured ? 'FLAGSHIP TRACK' : 'COHORT OPEN'}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-muted flex items-center gap-1.5 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        <span>{track.duration}</span>
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-body text-xl sm:text-2xl font-semibold text-ink tracking-tight group-hover:text-gold transition-colors">
                        {track.title}
                      </h3>
                      <p className="font-mono text-xs text-gold font-medium">
                        {track.subtitle}
                      </p>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      {track.description}
                    </p>

                    {/* Target Compensation & Velocity Metrics Chips */}
                    <div className="grid grid-cols-2 gap-2 text-left font-mono">
                      <div className="p-2.5 rounded-2xl bg-surface-elevated/70 border border-border/80 space-y-0.5">
                        <span className="text-[10px] text-muted uppercase block">TARGET SALARY</span>
                        <span className="text-xs sm:text-sm font-bold text-ink block">{track.salaryRange}</span>
                        <span className="text-[10px] text-muted block truncate">Lagos / Remote Hybrid</span>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-surface-elevated/70 border border-border/80 space-y-0.5">
                        <span className="text-[10px] text-muted uppercase block">PLACEMENT VELOCITY</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 block">{track.avgPlacement}</span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block font-semibold truncate">{track.matchScore}</span>
                      </div>
                    </div>

                    {/* Verified Competencies */}
                    <div className="space-y-2 pt-2 border-t border-border/60">
                      <div className="text-[11px] font-mono text-muted uppercase">
                        VERIFIED COMPETENCIES
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {track.keySkills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-xs px-2.5 py-1 rounded-full bg-surface-elevated border border-border/80 text-ink font-medium hover:border-gold/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-border/70 space-y-3 relative z-10">
                    <Link href="/onboarding" className="block w-full group/btn">
                      <div className={cn(
                        'h-12 rounded-full font-body text-xs sm:text-sm font-semibold pl-5 pr-2 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer',
                        track.isFeatured
                          ? 'bg-gold hover:bg-gold-light text-[#0A0A0A]'
                          : 'bg-surface-elevated hover:bg-surface border border-border hover:border-gold/50 text-ink'
                      )}>
                        <span className="tracking-wide">Take Track Diagnostic</span>
                        <span className={cn(
                          'relative w-8 h-8 rounded-full flex items-center justify-center overflow-hidden shadow-xs shrink-0 transition-transform',
                          track.isFeatured ? 'bg-white text-[#0A0A0A]' : 'bg-gold text-[#0A0A0A]'
                        )}>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-4 group-hover/btn:-translate-y-4" />
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
                        </span>
                      </div>
                    </Link>

                    <div className="flex items-center justify-between font-mono text-[11px] text-muted px-1">
                      <span>Includes 2-Mo Enterprise Sprint</span>
                      <span className="text-gold font-semibold">{track.spotsLeft}</span>
                    </div>
                  </div>

                </div>
              )
            })}
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
