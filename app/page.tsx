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
  Lock,
  HelpCircle,
  MessageSquare,
  DollarSign,
  Calendar,
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
  StripeLogo,
  VercelLogo,
  LinearLogo,
  OpenAILogo,
  SupabaseLogo,
  CloudflareLogo,
  DatadogLogo,
  ShopifyLogo,
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
  // Interactive ATS Comparison & Scanner State
  const [atsComparisonMode, setAtsComparisonMode] = React.useState<'generic' | 'wedin'>('wedin')
  const [isScanning, setIsScanning] = React.useState<boolean>(false)
  const [verifiedSeal, setVerifiedSeal] = React.useState<boolean>(false)

  const handleRunAtsScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
    }, 1100)
  }

  const handleVerifySeal = () => {
    setVerifiedSeal(true)
    setTimeout(() => {
      setVerifiedSeal(false)
    }, 2400)
  }
  // Interactive Track Selector
  const [activeTrackIndex, setActiveTrackIndex] = React.useState<number>(0)
  // Hero Interactive Accordion Student State
  const [expandedStudent, setExpandedStudent] = React.useState<number>(0)
  // Employer interactive preview state
  const [employerPreviewTab, setEmployerPreviewTab] = React.useState<'dossier' | 'benchmarks' | 'sla'>('dossier')
  const [employerInterviewRequested, setEmployerInterviewRequested] = React.useState<boolean>(false)
  // Pricing billing cycle state
  const [pricingPeriod, setPricingPeriod] = React.useState<'installments' | 'full'>('installments')
  // FAQ state & category filter
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)
  const [faqCategory, setFaqCategory] = React.useState<'all' | 'curriculum' | 'placements' | 'pricing'>('all')
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
      desc: 'You transition from student to practitioner. Embedded into simulated enterprise engineering squads at companies like Stripe & Vercel, you receive real sprint briefs, submit pull requests, resolve merge conflicts, and get rated by industry leads.',
      highlights: [
        'Simulated sprint boards on enterprise repos',
        'Sub-50ms database benchmarks & pgvector migrations',
        '1-on-1 code reviews from ex-Stripe / Vercel Leads',
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
      desc: 'The engine actively analyzes hiring manager criteria at global tech unicorns & engineering teams, matches your verified skills, auto-submits tailored applications, and delivers pre-screened technical interview invitations directly to your dashboard.',
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
      name: 'Stripe',
      category: 'Global Payments Infra',
      role: 'Core Systems / TypeScript',
      salary: '$130k - $190k',
      hires: '28 Hired',
      logo: StripeLogo,
      accent: 'text-[#635BFF]',
    },
    {
      name: 'Vercel',
      category: 'Frontend Cloud & AI',
      role: 'Cloud Architecture & Next.js',
      salary: '$135k - $195k',
      hires: '22 Hired',
      logo: VercelLogo,
      accent: 'text-ink',
    },
    {
      name: 'Linear',
      category: 'Modern Engineering Tools',
      role: 'Full-Stack Product & Sync',
      salary: '$125k - $185k',
      hires: '16 Hired',
      logo: LinearLogo,
      accent: 'text-[#5E6AD2]',
    },
    {
      name: 'OpenAI',
      category: 'Frontier AI & API Platform',
      role: 'Agentic Workflows & Python',
      salary: '$140k - $210k',
      hires: '14 Hired',
      logo: OpenAILogo,
      accent: 'text-[#10A37F]',
    },
    {
      name: 'Supabase',
      category: 'Open Source Postgres',
      role: 'Distributed Database Systems',
      salary: '$120k - $175k',
      hires: '19 Hired',
      logo: SupabaseLogo,
      accent: 'text-[#3ECF8E]',
    },
    {
      name: 'Cloudflare',
      category: 'Edge & Global Network',
      role: 'High-Throughput Edge Compute',
      salary: '$130k - $185k',
      hires: '21 Hired',
      logo: CloudflareLogo,
      accent: 'text-[#F38020]',
    },
    {
      name: 'Datadog',
      category: 'Observability & Cloud Ops',
      role: 'SRE & Distributed Systems',
      salary: '$125k - $180k',
      hires: '17 Hired',
      logo: DatadogLogo,
      accent: 'text-[#632CA6]',
    },
    {
      name: 'Shopify',
      category: 'Global Commerce Platform',
      role: 'Platform Engineering & Ruby/Go',
      salary: '$120k - $175k',
      hires: '18 Hired',
      logo: ShopifyLogo,
      accent: 'text-[#95BF47]',
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
      salaryRange: '$120,000 – $180,000 / yr',
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
      salaryRange: '$110,000 – $170,000 / yr',
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
      salaryRange: '$95,000 – $155,000 / yr',
      avgPlacement: '19 Days to Offer',
      matchScore: '96% Placement Rate',
      icon: Layers,
      keySkills: ['Next.js', 'React 19', 'GraphQL', 'Tailwind CSS', 'Distributed SQL', 'Stripe APIs'],
    },
  ]

  const faqs = [
    {
      q: 'Do you guarantee a job placement upon graduation?',
      a: 'We guarantee structured access, verified effort, and partner pipeline routing—not arbitrary job offers. In line with global engineering hiring ethics, we avoid misleading "100% job guarantees." Instead, our placement engine actively tailors your CV, matches you with pre-vetted employers across the US, Europe, and global remote markets, and submits applications on your behalf until you are placed.',
      category: 'placements',
    },
    {
      q: 'Can I complete a cohort while working a full-time job?',
      a: 'Yes. All our tracks are specifically engineered for working professionals and career switchers. Live masterclasses occur on weekday evenings and weekends across multiple timezone options (US/EST, UK/GMT, and WAT), with 24/7 asynchronous access to video archives, code sandbox labs, and TA office hours on Discord.',
      category: 'curriculum',
    },
    {
      q: 'How does the 8-week virtual enterprise internship work?',
      a: 'The final 8 weeks of every flagship track transition you from student to practitioner. You are embedded into simulated engineering squads at companies like Stripe, Linear, and Vercel. You receive real Jira-style sprint briefs, open pull requests, resolve merge conflicts, and earn lead engineer supervisor ratings.',
      category: 'curriculum',
    },
    {
      q: 'How is my CV generated from verified coursework?',
      a: 'Unlike generic AI resume builders that hallucinate skills, Wedin auto-generates your ATS-optimized CV directly from your completed GitHub repositories, project benchmarks, and supervisor evaluations. When recruiters scan your CV, every bullet point contains a cryptographic proof-of-work link verifying your code.',
      category: 'placements',
    },
    {
      q: 'What are the tuition payment options and installment plans?',
      a: 'We believe finances should never lock out talent. We offer zero-interest 4-month installment plans ($89 / month) as well as one-time discounted options ($299) via Stripe, Apple Pay, and all major international credit/debit cards.',
      category: 'pricing',
    },
    {
      q: 'What happens if I fall behind or miss a capstone deadline?',
      a: 'Every student is paired with a dedicated technical mentor. If life happens, you can take advantage of our 1-time cohort pause policy to resume in the next cycle without paying any reactivation or restart fees.',
      category: 'curriculum',
    },
    {
      q: 'How do employers discover and interview Wedin fellows?',
      a: 'Our partner network includes top remote scaleups and global enterprises across North America, Europe, and emerging tech hubs. As you complete capstones, the Placement Engine flags your code benchmarks to relevant hiring managers, enabling 72-hour direct interview dispatches with zero agency markup.',
      category: 'placements',
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
                  href="/onboarding"
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

                {/* Middle Pill: FROM $89 / MO */}
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-surface hover:bg-surface-elevated border border-border text-ink rounded-full px-4 py-1.5 text-xs font-mono font-medium tracking-wide shadow-xs transition-colors"
                >
                  FROM $89 / MO
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
                      {/* Match 1: Amara -> Stripe */}
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
                        <span className="block text-[8px] font-mono font-semibold text-[#534be8] bg-[#635BFF]/12 border border-[#635BFF]/30 rounded px-1 py-0.5 truncate">
                          Stripe
                        </span>
                      </div>

                      {/* Match 2: Tunde -> Linear */}
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
                        <span className="block text-[8px] font-mono font-semibold text-[#4853b8] bg-[#5E6AD2]/12 border border-[#5E6AD2]/30 rounded px-1 py-0.5 truncate">
                          Linear
                        </span>
                      </div>

                      {/* Match 3: Chioma -> Vercel */}
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
                        <span className="block text-[8px] font-mono font-semibold text-stone-900 bg-stone-200 border border-stone-300 rounded px-1 py-0.5 truncate">
                          Vercel
                        </span>
                      </div>

                      {/* Match 4: Kenji -> OpenAI */}
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
                        <span className="block text-[8px] font-mono font-semibold text-[#0d7d61] bg-[#10A37F]/12 border border-[#10A37F]/30 rounded px-1 py-0.5 truncate">
                          OpenAI
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
                        <span className="font-mono text-[11px] text-[#A37410] font-bold">$95,000 – $165,000 / yr</span>
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
                <span>TOP GLOBAL TECH UNICORNS & ENTERPRISES</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold text-stone-950 tracking-tight">
                Where Wedin Fellows Build & Lead
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm text-stone-900 max-w-md font-medium">
              Direct pipeline routing with remote, US, European, and global engineering squads. Zero agency recruiting markups.
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
                      stripe-oss / core-checkout-service
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
                      <span className="font-semibold text-gold">Kelechi M. (Staff Infrastructure Architect · ex-Stripe)</span>
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
                    <span>Cut database query latency by 84% on enterprise payments squad</span>
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

            {/* ARTIFACT 04: Real Global Tech Partner Placement Dispatch */}
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

                {/* Job Invitation Card 01 (Stripe) */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-gold/40 shadow-xs space-y-2 font-body">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 p-0.5 flex items-center justify-center">
                        <StripeLogo className="w-full h-full" />
                      </div>
                      <span className="font-semibold text-sm text-white">Stripe Core Platform Squad</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">$145,000 / yr</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    Role: <strong className="text-white">Junior AI Systems Engineer (Remote / Global)</strong>
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-stone-400">
                    <span>Interview: Thursday, 2:00 PM EST</span>
                    <span className="text-emerald-400 font-semibold">98% Calibrated Fit</span>
                  </div>
                </div>

                {/* Job Invitation Card 02 (Linear) */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/15 shadow-xs space-y-2 font-body">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 p-0.5 flex items-center justify-center">
                        <LinearLogo className="w-full h-full" />
                      </div>
                      <span className="font-semibold text-sm text-white">Linear Core Infrastructure</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">$160,000 / yr</span>
                  </div>
                  <p className="text-xs text-stone-300">
                    Role: <strong className="text-white">Backend Systems Fellow (Remote / Hybrid)</strong>
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-stone-400">
                    <span>Interview: Monday, 11:00 AM EST</span>
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
                Interview debriefs, rejection analytics, and hiring rubrics from Stripe, Linear &amp; Vercel continuously re-train our weekly curriculum.
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

      {/* 4. THE CAREER TOOLKIT: Interactive Proof Engine & Live ATS Simulator */}
      <section id="toolkit" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative">
        
        {/* Section Header */}
        <div className="text-center space-y-3.5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>THE CAREER TOOLKIT</span>
          </div>
          <h2 className="font-body text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
            Stop Guessing. Build Proof.
          </h2>
          <p className="font-body text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Over 90% of self-taught applicants get silently auto-filtered by algorithmic ATS bots. Wedin equips you with the three instruments that turn enterprise hiring heuristics into your unfair advantage.
          </p>
        </div>

        {/* Row 1: The 3 Core Toolkit Instruments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instrument 1 */}
          <div className="p-6 rounded-3xl bg-surface border border-border/80 hover:border-gold/50 transition-all duration-300 shadow-sm space-y-4 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                INSTRUMENT 01
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-body font-semibold text-lg text-ink">
                Algorithmic ATS Compiler
              </h3>
              <p className="font-mono text-xs text-gold font-medium">
                98/100 Lever &amp; Greenhouse Pass
              </p>
            </div>
            <p className="font-body text-xs text-muted leading-relaxed">
              Reverse-engineered for corporate parsing bots. Automatically converts your evaluated code commits, pull requests, and benchmarks into ATS-compliant records without recruiter drop-off.
            </p>
            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold border-t border-border/60">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Semantic Parser Compatible</span>
            </div>
          </div>

          {/* Instrument 2 */}
          <div className="p-6 rounded-3xl bg-surface border-2 border-gold shadow-md ring-1 ring-gold/20 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-300 to-gold" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gold text-[#0A0A0A] shadow-xs">
                INSTRUMENT 02
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-body font-semibold text-lg text-ink">
                Cryptographic Proof URL
              </h3>
              <p className="font-mono text-xs text-gold font-medium">
                SHA-256 Ledger Verification
              </p>
            </div>
            <p className="font-body text-xs text-muted leading-relaxed">
              An immutable, public proof dossier at <code className="text-gold font-mono">wedin.io/p/[name]</code> displaying verified GitHub repositories, supervisor evaluation rubrics, and benchmark proofs.
            </p>
            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-gold font-semibold border-t border-border/60">
              <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Zero-Hallucination Guarantee</span>
            </div>
          </div>

          {/* Instrument 3 */}
          <div className="p-6 rounded-3xl bg-surface border border-border/80 hover:border-gold/50 transition-all duration-300 shadow-sm space-y-4 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
                <Zap className="w-5 h-5 fill-gold" />
              </div>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                INSTRUMENT 03
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-body font-semibold text-lg text-ink">
                Direct Unicorn Dispatcher
              </h3>
              <p className="font-mono text-xs text-gold font-medium">
                18-Day Average Time to Offer
              </p>
            </div>
            <p className="font-body text-xs text-muted leading-relaxed">
              Bypasses public job boards and automated rejection black holes. Routes your verified technical dossier straight into engineering manager inboxes at Stripe, Linear, Vercel, and high-growth global teams.
            </p>
            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold border-t border-border/60">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Direct Fast-Track Pipeline</span>
            </div>
          </div>
        </div>

        {/* Row 2: The Interactive ATS Audit Simulator Console */}
        <div className="rounded-3xl bg-surface/70 border border-border/90 p-6 sm:p-9 shadow-xl relative overflow-hidden backdrop-blur-md space-y-6">
          
          {/* Console Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/70">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  LIVE ATS AUDIT SIMULATOR · LEVER &amp; GREENHOUSE HEURISTIC ENGINE
                </span>
              </div>
              <p className="font-body text-xs text-muted">
                Simulate how enterprise applicant tracking algorithms evaluate generic resumes versus Wedin verified proof dossiers.
              </p>
            </div>

            {/* Run Scan Action Button */}
            <button
              type="button"
              onClick={handleRunAtsScan}
              disabled={isScanning}
              className="h-10 px-4 rounded-full font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 bg-gold hover:bg-gold-light text-[#0A0A0A] shadow-xs active:scale-95 disabled:opacity-75"
            >
              <RotateCcw className={cn('w-3.5 h-3.5', isScanning && 'animate-spin')} />
              <span>{isScanning ? 'Parsing Code Repos...' : 'Run Simulated ATS Audit'}</span>
            </button>
          </div>

          {/* Scanning Progress Pulse Indicator */}
          {isScanning && (
            <div className="p-3 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-between text-xs font-mono text-gold animate-pulse">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold animate-spin" />
                <span>Executing Lever Heuristic Scan: Verifying commit signatures &amp; query benchmarks...</span>
              </div>
              <span className="font-bold">78%</span>
            </div>
          )}

          {/* Side-by-Side Dual Audit Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left Card: Unverified Generic Resume */}
            <div className="rounded-2xl p-5 sm:p-6 bg-red-500/[0.03] border-2 border-red-500/25 space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 border-b border-red-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="font-body font-semibold text-sm text-red-600 dark:text-red-400">
                    Generic Prompted AI Resume
                  </span>
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30">
                  SCORE: 38 / 100
                </span>
              </div>

              <div className="space-y-3.5 font-body text-xs">
                {/* Item 1 */}
                <div className="p-3 rounded-xl bg-surface border border-red-500/20 space-y-1.5">
                  <p className="text-muted italic leading-relaxed">
                    &quot;Experienced Full-Stack AI Engineer with expertise in architecting massive cloud systems and building production-grade LLM applications with 100% accuracy.&quot;
                  </p>
                  <div className="flex items-start gap-1.5 font-mono text-[11px] text-red-600 dark:text-red-400 pt-1 border-t border-border/60">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>FLAG: Zero repository proof or verifiable commits. Flagged as hallucination by Lever Heuristic Gate.</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3 rounded-xl bg-surface border border-red-500/20 space-y-1.5">
                  <p className="text-muted italic leading-relaxed">
                    &quot;Key Skills: Python, TypeScript, Docker, Kubernetes, Next.js, LangChain, PyTorch, Blockchain, GraphQL, Redis, Rust, pgvector.&quot;
                  </p>
                  <div className="flex items-start gap-1.5 font-mono text-[11px] text-red-600 dark:text-red-400 pt-1 border-t border-border/60">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>FLAG: Unstructured keyword stuffing detected. Lacks contextual repository evidence.</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3 rounded-xl bg-surface border border-red-500/20 space-y-1.5">
                  <p className="text-muted italic leading-relaxed">
                    &quot;Delivered 500% performance optimization and cut latency across microservices ecosystem.&quot;
                  </p>
                  <div className="flex items-start gap-1.5 font-mono text-[11px] text-red-600 dark:text-red-400 pt-1 border-t border-border/60">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>FLAG: Unsubstantiated metrics. No supervisor rubric score or production telemetry attached.</span>
                  </div>
                </div>
              </div>

              {/* Bot Rejection Verdict */}
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-between text-[11px] font-mono text-red-600 dark:text-red-400">
                <span>PARSER DECISION:</span>
                <span className="font-bold">Auto-Archived (Filtered Pre-Screen)</span>
              </div>
            </div>

            {/* Right Card: Wedin Verified Proof Dossier */}
            <div className="rounded-2xl p-5 sm:p-6 bg-surface border-2 border-gold shadow-lg ring-1 ring-gold/30 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-amber-300 to-gold" />
              
              <div className="flex items-center justify-between gap-2 border-b border-border/80 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-body font-semibold text-sm text-ink">
                    Wedin Verified Proof Dossier
                  </span>
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  SCORE: 98 / 100
                </span>
              </div>

              <div className="space-y-3.5 font-body text-xs">
                {/* Item 1 */}
                <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border/80 space-y-1.5">
                  <p className="text-ink leading-relaxed">
                    &quot;Architected deterministic ReAct loop with Claude 3.5 Sonnet handling 15 API tools with schema validation. Reduced token consumption by 32% via context window compression.&quot;
                  </p>
                  <div className="flex items-start gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 pt-1 border-t border-border/60">
                    <Check className="w-3.5 h-3.5 stroke-[3] shrink-0 mt-0.5" />
                    <span>VERIFIED: Commit <code className="text-gold font-bold">9d4f2a1</code> on GitHub · Evaluated by Staff TA (98/100).</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border/80 space-y-1.5">
                  <p className="text-ink leading-relaxed">
                    &quot;Stripe Core Platform Squad Virtual Internship: Implemented sub-50ms hybrid vector search on Postgres pgvector; cut P99 query latency from 240ms to 38ms (-84%).&quot;
                  </p>
                  <div className="flex items-start gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 pt-1 border-t border-border/60">
                    <Check className="w-3.5 h-3.5 stroke-[3] shrink-0 mt-0.5" />
                    <span>VERIFIED: Evaluated by Lead Systems Architect (ex-Stripe) · Merged PR #84.</span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3 rounded-xl bg-surface-elevated/70 border border-border/80 space-y-1.5">
                  <p className="text-ink leading-relaxed">
                    &quot;Immutable Cryptographic Ledger: Signed SHA-256 seal issued upon graduation with publicly verifiable proof link.&quot;
                  </p>
                  <div className="flex items-start gap-1.5 font-mono text-[11px] text-gold pt-1 border-t border-border/60">
                    <Lock className="w-3.5 h-3.5 stroke-[2.5] shrink-0 mt-0.5" />
                    <span>VERIFIED: SHA-256: <code className="font-bold">8f92e3...c914</code> · 100% Zero-Hallucination Integrity.</span>
                  </div>
                </div>
              </div>

              {/* Bot Fast-Track Verdict */}
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <span>PARSER DECISION:</span>
                <span className="font-bold">Tier-1 Interview Fast-Track Dispatched</span>
              </div>
            </div>

          </div>

          {/* Public Proof URL Interactive Verification Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-10 h-10 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-ink font-bold">wedin.io/p/amara-okonjo</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full font-bold">
                    LIVE DOSSIER
                  </span>
                </div>
                <p className="font-body text-xs text-muted">
                  Every Wedin fellow receives a public cryptographic verification link that hiring managers can audit with zero login required.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleVerifySeal}
              className="h-10 px-4 rounded-full font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0 bg-surface-elevated hover:bg-surface border border-border hover:border-gold/50 text-ink shadow-xs"
            >
              {verifiedSeal ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">SHA-256 Ledger Verified!</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-gold" />
                  <span>Audit SHA-256 Signature</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Action CTA */}
          <div className="pt-2 text-center">
            <Link href="/onboarding" className="inline-block group">
              <div className="h-12 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs sm:text-sm font-semibold pl-6 pr-2 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer">
                <span className="tracking-wide">Generate Your Verified ATS Profile</span>
                <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                </span>
              </div>
            </Link>
          </div>

        </div>

      </section>

      {/* 5. FOR EMPLOYERS: The Talent Pipeline */}
      <section id="employers" className="py-24 border-t border-border/80 bg-surface/30 relative overflow-hidden">
        {/* Subtle background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14 relative z-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>FOR HIRING PARTNERS & TECH TEAMS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse ml-1" />
              </div>
              <h2 className="font-body text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
                Hire Pre-Vetted African Tech Talent in 72 Hours
              </h2>
              <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                Eliminate 95% of resume noise. Wedin connects your engineering leaders directly to candidates with pre-evaluated code repositories, enterprise sprint PRs, and verified lead supervisor ratings.
              </p>
            </div>

            {/* Quick stats badge pill */}
            <div className="flex items-center gap-3 self-start md:self-auto bg-surface border border-border/90 px-4 py-2.5 rounded-2xl shadow-xs">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <div className="text-xs font-body">
                <span className="font-semibold text-ink">72-Hour Direct SLA</span>
                <span className="text-muted block text-[11px]">From role brief to screened candidate shortlist</span>
              </div>
            </div>
          </div>

          {/* Key SLA Metric Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-surface border border-border/80 space-y-1 shadow-xs">
              <div className="font-body text-2xl sm:text-3xl font-semibold text-ink">72 Hours</div>
              <div className="text-xs font-mono uppercase tracking-wider text-gold font-medium">Time to First Screen</div>
              <p className="text-xs text-muted pt-1">Pre-screened shortlists matched to your exact tech stack.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border/80 space-y-1 shadow-xs">
              <div className="font-body text-2xl sm:text-3xl font-semibold text-gold">$0 Upfront</div>
              <div className="text-xs font-mono uppercase tracking-wider text-gold font-medium">Free Beta Postings</div>
              <p className="text-xs text-muted pt-1">Post open requisitions and preview vetted portfolios with zero fees.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border/80 space-y-1 shadow-xs">
              <div className="font-body text-2xl sm:text-3xl font-semibold text-ink">94.2%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-gold font-medium">12-Month Retention</div>
              <p className="text-xs text-muted pt-1">Fellows pre-adapted to enterprise codebases & agile sprint pacing.</p>
            </div>
            <div className="p-5 rounded-2xl bg-surface border border-border/80 space-y-1 shadow-xs">
              <div className="font-body text-2xl sm:text-3xl font-semibold text-emerald-500">100%</div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-medium">Verified Code Proof</div>
              <p className="text-xs text-muted pt-1">Every skill backed by verifiable GitHub commits and supervisor sign-offs.</p>
            </div>
          </div>

          {/* Interactive Candidate Shortlist Inspector Terminal */}
          <div className="rounded-3xl bg-surface border border-border/90 shadow-xl overflow-hidden">
            {/* Terminal Top Bar with Tabs */}
            <div className="px-6 py-4 border-b border-border/80 bg-surface/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-xs font-mono text-muted pl-2 border-l border-border/80 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-gold" />
                  <span>WEDIN_TALENT_PIPELINE_ROUTER // VETTING_SLA</span>
                </span>
              </div>

              {/* Tab Switcher */}
              <div className="flex items-center gap-1 bg-bg p-1 rounded-full border border-border/80 text-xs font-body">
                <button
                  type="button"
                  onClick={() => setEmployerPreviewTab('dossier')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium',
                    employerPreviewTab === 'dossier'
                      ? 'bg-surface text-ink shadow-xs border border-border/80'
                      : 'text-muted hover:text-ink'
                  )}
                >
                  Candidate Dossier
                </button>
                <button
                  type="button"
                  onClick={() => setEmployerPreviewTab('benchmarks')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium',
                    employerPreviewTab === 'benchmarks'
                      ? 'bg-surface text-ink shadow-xs border border-border/80'
                      : 'text-muted hover:text-ink'
                  )}
                >
                  Code Benchmarks
                </button>
                <button
                  type="button"
                  onClick={() => setEmployerPreviewTab('sla')}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full transition-all cursor-pointer font-medium',
                    employerPreviewTab === 'sla'
                      ? 'bg-surface text-ink shadow-xs border border-border/80'
                      : 'text-muted hover:text-ink'
                  )}
                >
                  72h SLA Flow
                </button>
              </div>
            </div>

            {/* Tab 1: Candidate Dossier */}
            {employerPreviewTab === 'dossier' && (
              <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gold/15 border-2 border-gold/40 flex items-center justify-center text-gold font-mono font-bold text-xl shadow-inner shrink-0">
                      AO
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-body text-xl font-semibold text-ink">Amara Okonjo</h4>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 text-[10px] font-mono font-semibold">
                          AVAILABLE IN 72H
                        </span>
                      </div>
                      <p className="text-xs text-muted font-body">Full-Stack AI Systems Fellow · Open to Global Remote / Hybrid (US, EMEA, LatAm)</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-[11px] font-mono text-muted">
                        <span className="text-gold font-medium">Target Compensation: $115,000 – $165,000 / yr</span>
                        <span>·</span>
                        <span>Graduated Cohort 03</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-border/60">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted font-medium">Verified Enterprise Experience</div>
                    <div className="p-3.5 rounded-xl bg-bg/80 border border-border/80 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-body font-medium text-ink flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-gold" />
                          <span>Simulated Enterprise Sprint: Stripe Infrastructure Squad</span>
                        </span>
                        <span className="text-[11px] font-mono text-emerald-500 font-medium">PR #84 Merged</span>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        Architected streaming LLM semantic cache reducing p99 latency by 41% across 10,000 requests. Supervisor rating: 9.8/10 by Lead Infrastructure Architect.
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted font-medium">Verified Code Capabilities</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Next.js 15', 'TypeScript', 'pgvector', 'FastAPI', 'Multi-Agent Routing', 'Docker', 'Jest (14/14 Passed)'].map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-md bg-surface border border-border/90 text-xs font-mono text-ink">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action Panel */}
                <div className="lg:col-span-5 bg-bg/70 border border-border/80 rounded-2xl p-6 space-y-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold font-semibold">Pre-Screened Audit Score</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-body text-4xl font-semibold text-ink">98.4</span>
                      <span className="text-xs font-mono text-muted">/ 100 TA Index</span>
                    </div>
                    <p className="text-xs text-muted">Top 1% technical baseline benchmarked against Tier-1 global engineering standards.</p>
                  </div>

                  <div className="space-y-2.5 text-xs font-body text-muted pt-2 border-t border-border/60">
                    <div className="flex items-center justify-between">
                      <span>Code Review Integrity</span>
                      <span className="font-mono text-emerald-500 font-semibold">100% Original Commits</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Live Coding Interview Readiness</span>
                      <span className="font-mono text-ink font-semibold">Pre-Vetted by Senior TAs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Direct Sourcing Fee</span>
                      <span className="font-mono text-gold font-semibold">$0 Upfront (Contingent)</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEmployerInterviewRequested(true)
                        setTimeout(() => setEmployerInterviewRequested(false), 3000)
                      }}
                      className="w-full h-11 rounded-xl bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs font-semibold px-4 flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                    >
                      {employerInterviewRequested ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-black" />
                          <span>Interview Request Dispatched to Amara</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-black" />
                          <span>1-Click Request Candidate Interview</span>
                        </>
                      )}
                    </button>
                    <Link
                      href="/onboarding"
                      className="w-full h-10 rounded-xl bg-surface hover:bg-bg border border-border/90 text-ink font-body text-xs font-medium px-4 flex items-center justify-center gap-2 transition-colors block text-center"
                    >
                      <span>View Full Cryptographic Dossier & Repo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Code Benchmarks */}
            {employerPreviewTab === 'benchmarks' && (
              <div className="p-6 sm:p-8 space-y-6 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-bg/80 border border-border/80 space-y-1">
                    <span className="text-[11px] text-muted">TEST SUITE COVERAGE</span>
                    <div className="text-xl font-body font-semibold text-emerald-500">14 / 14 Passed</div>
                    <p className="text-[11px] text-muted">Jest unit tests + PyTest API assertions verified via CI/CD.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-bg/80 border border-border/80 space-y-1">
                    <span className="text-[11px] text-muted">P99 LATENCY BENCHMARK</span>
                    <div className="text-xl font-body font-semibold text-ink">38ms</div>
                    <p className="text-[11px] text-muted">Redis cache hits & pgvector index query execution times.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-bg/80 border border-border/80 space-y-1">
                    <span className="text-[11px] text-muted">GIT LOG ACTIVITY</span>
                    <div className="text-xl font-body font-semibold text-gold">42 Verified PRs</div>
                    <p className="text-[11px] text-muted">Continuous feature branches, clean commit history & rebase discipline.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-bg/80 border border-border/80 space-y-1">
                    <span className="text-[11px] text-muted">LEAD TA REVIEW SCORE</span>
                    <div className="text-xl font-body font-semibold text-ink">9.8 / 10</div>
                    <p className="text-[11px] text-muted">Evaluated on system modularity, error handling & documentation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg border border-border/80 text-[11px] text-muted font-mono space-y-1.5">
                  <div className="text-gold font-semibold">$ wedin-verify --sha256 --strict --candidate amara-okonjo</div>
                  <div className="text-emerald-400">✓ Repository integrity signed by Wedin Core Key (ED25519)</div>
                  <div className="text-emerald-400">✓ Zero plagiarism detected across 1,840 evaluated capstone repositories</div>
                  <div className="text-ink">✓ Ready for technical screen: Available for next-day calendar invite</div>
                </div>
              </div>
            )}

            {/* Tab 3: 72h SLA Flow */}
            {employerPreviewTab === 'sla' && (
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-bg/80 border border-border/80 space-y-2 relative">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 text-gold flex items-center justify-center font-mono font-bold text-xs">
                      01
                    </div>
                    <h5 className="font-body font-semibold text-base text-ink">Hour 0 – 24: Role Calibration</h5>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      You specify your stack, seniority tier, and sprint requirements. Our algorithm instantly matches pre-evaluated fellows with matching capstone benchmarks.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-bg/80 border border-border/80 space-y-2 relative">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 text-gold flex items-center justify-center font-mono font-bold text-xs">
                      02
                    </div>
                    <h5 className="font-body font-semibold text-base text-ink">Hour 24 – 48: Verified Shortlist</h5>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      Receive a curated shortlist of 3–5 candidates with full Git commit histories, TA review recordings, and supervisor sprint evaluations. No cold resumes.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-bg/80 border border-border/80 space-y-2 relative">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 text-gold flex items-center justify-center font-mono font-bold text-xs">
                      03
                    </div>
                    <h5 className="font-body font-semibold text-base text-ink">Hour 48 – 72: Direct Technical Screen</h5>
                    <p className="font-body text-xs text-muted leading-relaxed">
                      1-click schedule live interviews directly into your calendar. Make an offer with 100% confidence backed by our 12-month fellow retention support.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions Row */}
            <div className="p-6 border-t border-border/80 bg-surface/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-muted font-body">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero subscription lock-in. Pay standard placement fees only when you make a confirmed hire.</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link href="/onboarding" className="w-full sm:w-auto group">
                  <div className="h-11 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs font-semibold pl-5 pr-1.5 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer">
                    <span className="tracking-wide">Join Hiring Partner Network</span>
                    <span className="relative w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                  </div>
                </Link>

                <a
                  href="mailto:partners@wedincareers.io"
                  className="px-5 py-2.5 rounded-full bg-surface border border-border/90 hover:border-gold/60 text-ink text-xs font-body font-medium transition-colors w-full sm:w-auto text-center"
                >
                  Request Candidate Shortlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRICING & LOCAL INSTALLMENTS */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5" />
            <span>TRANSPARENT TUITION · NO HIDDEN BARRIERS</span>
          </div>
          <h2 className="font-body text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
            Invest in Your Career with Flexible Installments
          </h2>
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
            No punitive lump-sum barriers. Pay month-by-month as you build your verified portfolio and prepare for placement, or save with discounted upfront tuition.
          </p>

          {/* Interactive Billing Selector Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-surface border border-border/90 shadow-xs">
              <button
                type="button"
                onClick={() => setPricingPeriod('installments')}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-body font-semibold transition-all cursor-pointer flex items-center gap-1.5',
                  pricingPeriod === 'installments'
                    ? 'bg-gold text-[#0A0A0A] shadow-xs'
                    : 'text-muted hover:text-ink'
                )}
              >
                <span>Monthly Installments</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-black/15 text-black">
                  Zero Interest
                </span>
              </button>
              <button
                type="button"
                onClick={() => setPricingPeriod('full')}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-body font-semibold transition-all cursor-pointer flex items-center gap-1.5',
                  pricingPeriod === 'full'
                    ? 'bg-gold text-[#0A0A0A] shadow-xs'
                    : 'text-muted hover:text-ink'
                )}
              >
                <span>Pay Upfront</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Free Tier */}
          <div className="p-8 rounded-3xl bg-surface border border-border/80 flex flex-col justify-between shadow-xs hover:border-border transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">BASELINE ASSESSMENT</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface border border-border text-xs font-mono text-muted">
                  FREE
                </span>
              </div>

              <div className="space-y-1">
                <div className="font-body text-4xl font-semibold text-ink">$0</div>
                <div className="text-xs font-mono text-muted">Free forever · No credit card required</div>
                <p className="font-body text-xs text-muted pt-2 leading-relaxed">
                  Calibrate your technical baseline and explore matched career tracks before committing.
                </p>
              </div>

              <ul className="space-y-3.5 text-xs font-body text-muted pt-4 border-t border-border/60">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>10-Minute Technical Baseline Diagnostic</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Personalized Track & Pathway Match Score</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Curriculum Syllabus & Capstone Previews</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>1 Free Automated ATS Resume Audit Check</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Access to Starter Developer Community</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/onboarding"
                className="w-full h-11 rounded-full bg-surface hover:bg-bg border border-border/90 hover:border-gold/60 text-ink font-body text-xs font-semibold px-4 flex items-center justify-center transition-all block text-center"
              >
                Start Free Diagnostic
              </Link>
            </div>
          </div>

          {/* Flagship Installment Plan (FEATURED CARD) */}
          <div className="p-8 rounded-3xl bg-surface border-2 border-gold ring-1 ring-gold/30 flex flex-col justify-between relative shadow-2xl scale-[1.02] z-10">
            {/* Top Pill Highlight */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-[#0A0A0A] font-body text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3 fill-black text-black" />
              <span>MOST POPULAR · FLAGSHIP TRACK</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-gold font-bold">
                  GLOBAL FINANCING
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold">
                  {pricingPeriod === 'installments' ? '4 MONTHS' : '15% DISCOUNT'}
                </span>
              </div>

              <div className="space-y-1">
                {pricingPeriod === 'installments' ? (
                  <>
                    <div className="font-body text-4xl font-semibold text-ink flex items-baseline gap-1">
                      $89
                      <span className="text-xs font-mono font-normal text-muted">/ month</span>
                    </div>
                    <div className="text-xs font-mono text-gold font-medium">
                      4 monthly payments of $89 · 0% Interest
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-body text-4xl font-semibold text-ink flex items-baseline gap-1">
                      $299
                      <span className="text-xs font-mono font-normal text-muted">one-time</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-500 font-medium">
                      Saved $57 upfront · Full cohort access
                    </div>
                  </>
                )}
                <p className="font-body text-xs text-muted pt-2 leading-relaxed">
                  Full 16-week flagship engineering track, 4 evaluated capstones, and 8-week virtual enterprise internship.
                </p>
              </div>

              <ul className="space-y-3.5 text-xs font-body text-muted pt-4 border-t border-border/60">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-ink font-medium">16 Weeks Live Masterclasses & System Design Labs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-ink font-medium">4 Evaluated Production Capstones with Daily Code Review</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-ink font-medium">8-Week Virtual Enterprise Internship Squad Placement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-ink font-medium">Cryptographic ATS Proof-of-Work CV & Public Portfolio</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-ink font-medium">Direct Placement Engine Routing to Partner Hiring Teams</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>1-on-1 TA Office Hours & Mock Technical Interview Prep</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link href="/onboarding" className="block w-full group">
                <div className="h-12 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs sm:text-sm font-semibold pl-6 pr-2 flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                  <span className="tracking-wide">
                    {pricingPeriod === 'installments' ? 'Enroll with Monthly Installments' : 'Enroll with Upfront Discount'}
                  </span>
                  <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Diaspora / Global Tuition */}
          <div className="p-8 rounded-3xl bg-surface border border-border/80 flex flex-col justify-between shadow-xs hover:border-border transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">GLOBAL ENTERPRISE MENTORSHIP</span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface border border-border text-xs font-mono text-muted">
                  REMOTE US/EMEA
                </span>
              </div>

              <div className="space-y-1">
                {pricingPeriod === 'installments' ? (
                  <>
                    <div className="font-body text-4xl font-semibold text-ink flex items-baseline gap-1">
                      $149
                      <span className="text-xs font-mono font-normal text-muted">/ month</span>
                    </div>
                    <div className="text-xs font-mono text-muted">4 installments of $149 · International cards accepted</div>
                  </>
                ) : (
                  <>
                    <div className="font-body text-4xl font-semibold text-ink flex items-baseline gap-1">
                      $499
                      <span className="text-xs font-mono font-normal text-muted">one-time</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-500 font-medium">Save $97 · Regular $596 flat</div>
                  </>
                )}
                <p className="font-body text-xs text-muted pt-2 leading-relaxed">
                  Full flagship curriculum with expedited 1-on-1 mentoring and routing to remote international teams.
                </p>
              </div>

              <ul className="space-y-3.5 text-xs font-body text-muted pt-4 border-t border-border/60">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>All Flagship Cohort Inclusions & Labs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Dedicated 1-on-1 Global Placement Coach</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Direct Routing to US, UK & European Remote Sprints</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Timezone-Aligned Mentoring (WAT / GMT / EST)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Global Tax & Contractor Invoicing Advisory</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/onboarding"
                className="w-full h-11 rounded-full bg-surface hover:bg-bg border border-border/90 hover:border-gold/60 text-ink font-body text-xs font-semibold px-4 flex items-center justify-center transition-all block text-center"
              >
                Enroll via USD / International
              </Link>
            </div>
          </div>
        </div>

        {/* Financial Trust & Transparency Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/80">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
            <div className="text-xs font-body">
              <span className="font-semibold text-ink block">14-Day Guarantee</span>
              <span className="text-muted text-[11px]">100% refund if not satisfied before Sprint 2</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-gold shrink-0" />
            <div className="text-xs font-body">
              <span className="font-semibold text-ink block">0% Interest Financing</span>
              <span className="text-muted text-[11px]">Pay monthly as you complete project milestones</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-gold shrink-0" />
            <div className="text-xs font-body">
              <span className="font-semibold text-ink block">Secure Stripe Rails</span>
              <span className="text-muted text-[11px]">Global credit cards, Apple Pay, and direct wire</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-gold shrink-0" />
            <div className="text-xs font-body">
              <span className="font-semibold text-ink block">No ISA Lock-In</span>
              <span className="text-muted text-[11px]">Keep 100% of your earnings when placed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDIONS */}
      <section id="faq" className="py-24 border-t border-border/80 bg-surface/20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>TRANSPARENT ADMISSIONS & ANSWERS</span>
            </div>
            <h2 className="font-body text-3xl sm:text-5xl font-semibold text-ink tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
              Direct, transparent answers regarding curriculum rigor, time commitments, payment installments, and partner placement routing.
            </p>

            {/* Category Filter Tabs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5">
              {[
                { key: 'all', label: 'All Questions' },
                { key: 'curriculum', label: 'Curriculum & Sprints' },
                { key: 'placements', label: 'Placements & ATS' },
                { key: 'pricing', label: 'Tuition & Installments' },
              ].map(cat => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setFaqCategory(cat.key as any)}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs font-body transition-all cursor-pointer font-medium',
                    faqCategory === cat.key
                      ? 'bg-gold text-[#0A0A0A] font-semibold shadow-xs'
                      : 'bg-surface border border-border/80 text-muted hover:text-ink'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Questions List */}
          <div className="space-y-3">
            {faqs
              .filter(faq => faqCategory === 'all' || faq.category === faqCategory)
              .map((faq, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className={cn(
                      'p-5 sm:p-6 rounded-2xl border transition-all select-none',
                      isOpen
                        ? 'bg-surface border-gold/60 shadow-sm'
                        : 'bg-surface/80 border-border/80 hover:border-border'
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          'w-2 h-2 rounded-full transition-colors shrink-0',
                          isOpen ? 'bg-gold animate-pulse' : 'bg-border'
                        )} />
                        <h4 className="font-body font-semibold text-sm sm:text-base text-ink leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={cn(
                        'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200',
                        isOpen ? 'bg-gold/20 text-gold rotate-180' : 'bg-surface border border-border/80 text-muted'
                      )}>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="pt-3.5 mt-3.5 border-t border-border/60 pl-5">
                        <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
          </div>

          {/* Admissions Counselor Help Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-body font-semibold text-base text-ink">Still have questions about your fit?</h5>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Our admissions engineering advisors can evaluate your background or walk you through the syllabus.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="mailto:admissions@wedincareers.io"
                className="px-5 py-2.5 rounded-full bg-surface border border-border/90 hover:border-gold/60 text-ink text-xs font-body font-medium transition-colors w-full sm:w-auto text-center"
              >
                Contact Admissions
              </a>
              <Link href="/onboarding" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] text-xs font-body font-semibold transition-all w-full sm:w-auto cursor-pointer shadow-xs"
                >
                  Take 10-Min Diagnostic
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HIGH-IMPACT CLOSING CALL TO ACTION (Full-Width Floating Rounded Card with Website Gold Colors) */}
      <section className="pt-16 pb-6 px-2.5 sm:px-4 lg:px-6 w-full">
        <div className="rounded-[32px] sm:rounded-[44px] bg-[#0A0B0E] border border-gold/40 text-white py-20 sm:py-28 px-6 sm:px-16 text-center relative overflow-hidden shadow-2xl w-full">
          {/* Ambient Top Specular Gold Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-52 bg-[radial-gradient(ellipse_at_top,_rgba(221,168,50,0.35),_transparent_70%)] blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-mono font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CLOSED LOOP TALENT PLATFORM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse ml-1" />
            </div>

            <h2 className="font-body text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.12]">
              Stop Applying into the Black Hole.{' '}
              <span className="text-gold">Enter the Closed Loop.</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto">
              Schedule a free 10-minute diagnostic assessment. We calibrate your technical baseline, match your track, build cryptographic proof-of-work, and route you to top tech employers.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/onboarding" className="w-full sm:w-auto group">
                <div className="h-13 sm:h-14 rounded-full bg-gold hover:bg-gold-light text-[#0A0A0A] font-body text-xs sm:text-sm font-semibold pl-8 pr-2.5 flex items-center justify-between gap-4 shadow-glow hover:shadow-xl transition-all duration-200 cursor-pointer">
                  <span className="tracking-wide">Start Your Free Assessment</span>
                  <span className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] overflow-hidden shadow-xs shrink-0">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:-translate-y-4" />
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] absolute -translate-x-4 translate-y-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                  </span>
                </div>
              </Link>

              <a href="#employers" className="w-full sm:w-auto">
                <div className="h-13 sm:h-14 px-7 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-body text-xs sm:text-sm font-semibold flex items-center justify-center transition-colors cursor-pointer shadow-xs">
                  Hire Pre-Vetted Engineers
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
