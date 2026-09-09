'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Bell,
  FolderGit2,
  Radio,
  FileCode,
  Briefcase,
  Settings,
  HelpCircle,
  PanelLeftClose,
  PanelLeft,
  Search,
  Menu,
  X,
  Sparkles,
  ChevronDown,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Avatar } from '@/components/primitives/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLearner } from '@/lib/learner-context'
import { cn } from '@/lib/utils'

export default function LearnerAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { learner, selectedTrack } = useLearner()

  // Sidebar collapse state (persisted in session)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false)
  const [searchFocused, setSearchFocused] = React.useState(false)

  const isLessonPlayer = pathname.includes('/lesson/')

  const initials = learner.name
    ? learner.name
        .split(' ')
        .map((p) => p[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'WO'

  interface NavItem {
    label: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    active: boolean
    badge?: string
    badgeColor?: string
  }

  interface NavSection {
    title: string
    items: NavItem[]
  }

  // Navigation items grouped matching professional dashboards
  const navSections: NavSection[] = [
    {
      title: 'GENERAL',
      items: [
        {
          label: 'Dashboard',
          href: '/app/dashboard',
          icon: LayoutDashboard,
          active: pathname === '/app/dashboard',
        },
        {
          label: 'Curriculum Tracks',
          href: `/app/track/${selectedTrack.id}`,
          icon: BookOpen,
          active: pathname.startsWith('/app/track'),
        },
        {
          label: 'Analytics & Velocity',
          href: '/app/dashboard',
          icon: TrendingUp,
          active: false,
        },
        {
          label: 'Community & Squads',
          href: '/app/dashboard',
          icon: Users,
          active: false,
          badge: 'Live',
        },
        {
          label: 'Assignments & Labs',
          href: '/app/dashboard',
          icon: Award,
          active: false,
          badge: '4 Due',
        },
        {
          label: 'Calendar & Sprints',
          href: '/app/dashboard',
          icon: Calendar,
          active: false,
        },
        {
          label: 'Announcements',
          href: '/app/dashboard',
          icon: Bell,
          active: false,
        },
      ],
    },
    {
      title: 'LEARNING TOOLS',
      items: [
        {
          label: 'Resources Library',
          href: '/app/dashboard',
          icon: FolderGit2,
          active: false,
        },
        {
          label: 'Live Masterclasses',
          href: '/app/dashboard',
          icon: Radio,
          active: false,
          badge: '2 Live',
          badgeColor: 'text-gold bg-gold/15 border-gold/30',
        },
        {
          label: 'ATS Proof Engine',
          href: '/#toolkit',
          icon: FileCode,
          active: false,
        },
        {
          label: 'Virtual Internship',
          href: '/#closed-loop',
          icon: Briefcase,
          active: false,
        },
      ],
    },
    {
      title: 'SETTINGS & SUPPORT',
      items: [
        {
          label: 'Settings',
          href: '/app/dashboard',
          icon: Settings,
          active: false,
        },
        {
          label: 'Help & Mentorship',
          href: '/#faq',
          icon: HelpCircle,
          active: false,
        },
      ],
    },
  ]

  // If this is a focused lesson player, allow full width or distraction-free mode
  if (isLessonPlayer) {
    return (
      <div className="min-h-screen flex flex-col bg-bg text-ink transition-colors duration-200">
        <header className="h-14 px-4 sm:px-8 border-b border-border/60 bg-surface/60 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/app/dashboard"
              className="inline-flex items-center gap-2 text-xs font-body font-medium text-muted hover:text-ink px-3 py-1.5 rounded-full bg-surface border border-border/80 transition-colors"
            >
              <span>← Exit to Dashboard</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted pl-3 border-l border-border/80">
              <span>TRACK:</span>
              <span className="text-gold font-semibold">{selectedTrack.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle showLabel={false} />
            <Avatar size="sm" fallback={initials} verified={learner.isVerified ?? true} />
          </div>
        </header>

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {children}
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-bg text-ink transition-colors duration-200 selection:bg-gold selection:text-black">
      {/* Mobile Backdrop Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-2xs"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Collapsible Left Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 z-50 h-screen bg-surface border-r border-border/80 flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] select-none shadow-sm',
          // Desktop collapsed vs expanded
          isSidebarCollapsed ? 'w-20' : 'w-64 sm:w-70',
          // Mobile open vs closed
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Sidebar Top: Brand Logo & Toggle Button */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border/60">
          <Link href="/app/dashboard" className="flex items-center gap-3 overflow-hidden">
            {/* Custom Closed Loop Gold Logo Glyph */}
            <div className="w-8 h-8 relative flex items-center justify-center text-gold shrink-0">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" className="opacity-35" />
                <path d="M11 11C8.24 11 6 13.24 6 16C6 18.76 8.24 21 11 21C14.5 21 17.5 11 21 11C23.76 11 26 13.24 26 16C26 18.76 23.76 21 21 21C17.5 21 14.5 11 11 11Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="16" r="1.5" fill="currentColor" />
                <circle cx="21" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            {!isSidebarCollapsed && (
              <div className="flex flex-col">
                <span className="font-body font-bold text-lg tracking-tight text-ink leading-tight">
                  wedin
                </span>
                <span className="text-[10px] font-mono text-gold font-medium uppercase tracking-wider">
                  LEARNER OS
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Collapse Toggle Icon Button */}
          <button
            type="button"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center text-muted hover:text-ink hover:bg-bg border border-transparent hover:border-border/80 transition-colors cursor-pointer"
            title={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isSidebarCollapsed ? (
              <PanelLeft className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-ink cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Nav Items List (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-thin">
          {navSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-1">
              {!isSidebarCollapsed && (
                <div className="px-3 text-[11px] font-mono font-medium text-muted uppercase tracking-wider mb-2">
                  {section.title}
                </div>
              )}
              <div className="space-y-0.5">
                {section.items.map((item, iIdx) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={iIdx}
                      href={item.href}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-body font-medium transition-all group relative',
                        item.active
                          ? 'bg-gold/15 text-gold font-semibold shadow-2xs border border-gold/30'
                          : 'text-muted hover:text-ink hover:bg-bg/80'
                      )}
                      title={isSidebarCollapsed ? item.label : undefined}
                    >
                      <Icon className={cn('w-4 h-4 shrink-0 transition-transform group-hover:scale-110', item.active ? 'text-gold' : 'text-muted group-hover:text-ink')} />
                      {!isSidebarCollapsed && (
                        <div className="flex items-center justify-between w-full">
                          <span className="truncate">{item.label}</span>
                          {item.badge && (
                            <span
                              className={cn(
                                'text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border',
                                item.badgeColor || 'bg-bg text-muted border-border/80'
                              )}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Bottom: Cohort Switcher & User Profile Pill */}
        <div className="p-3 border-t border-border/60 space-y-2 bg-surface/50">
          {!isSidebarCollapsed ? (
            <div className="p-2.5 rounded-xl bg-bg border border-border/80 flex items-center justify-between gap-2 shadow-2xs">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-7 h-7 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-body font-semibold text-ink truncate">
                    Cohort 2026-B
                  </div>
                  <div className="text-[10px] font-mono text-muted truncate">
                    {selectedTrack.title}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-muted shrink-0" />
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold" title="Cohort 2026-B">
                <Zap className="w-4 h-4" />
              </div>
            </div>
          )}

          {/* User Account Bar */}
          <div
            className={cn(
              'flex items-center gap-3 p-1.5 rounded-xl hover:bg-bg transition-colors',
              isSidebarCollapsed ? 'justify-center' : 'justify-between'
            )}
          >
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Avatar
                size="sm"
                fallback={initials}
                verified={learner.isVerified ?? true}
              />
              {!isSidebarCollapsed && (
                <div className="overflow-hidden">
                  <div className="text-xs font-body font-semibold text-ink truncate">
                    {learner.name}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-500 font-medium">
                    Verified Fellow
                  </div>
                </div>
              )}
            </div>
            {!isSidebarCollapsed && (
              <ThemeToggle showLabel={false} />
            )}
          </div>
        </div>
      </aside>

      {/* Right Column: Top Header Bar + Scrollable Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 px-4 sm:px-8 border-b border-border/80 bg-surface/70 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between gap-4 transition-colors">
          {/* Left: Mobile menu trigger + Breadcrumb / Greeting */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-muted hover:text-ink hover:bg-bg border border-border/80 cursor-pointer"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* If desktop collapsed, allow quick expand button from header too */}
            {isSidebarCollapsed && (
              <button
                type="button"
                onClick={() => setIsSidebarCollapsed(false)}
                className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center text-muted hover:text-ink hover:bg-bg border border-border/80 transition-colors cursor-pointer"
                title="Expand sidebar"
              >
                <PanelLeft className="w-4 h-4" />
              </button>
            )}

            <div className="space-y-0.5">
              <h1 className="font-body text-base sm:text-lg font-semibold text-ink tracking-tight flex items-center gap-2">
                <span>Dashboard</span>
                <span className="hidden sm:inline text-xs font-mono font-normal text-muted">
                  / Cohort 2026-B
                </span>
              </h1>
            </div>
          </div>

          {/* Center: Command Search Bar (Inspired by Image 2) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div
              className={cn(
                'w-full h-10 px-3.5 rounded-xl bg-bg border flex items-center gap-2.5 transition-all shadow-2xs',
                searchFocused ? 'border-gold/60 ring-2 ring-gold/10' : 'border-border/80 hover:border-border'
              )}
            >
              <Search className="w-4 h-4 text-muted shrink-0" />
              <input
                type="text"
                placeholder="Search lessons, capstone repos, skills..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full bg-transparent text-xs font-body text-ink placeholder:text-muted focus:outline-hidden"
              />
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-surface border border-border/80 text-muted shrink-0">
                ⌘K
              </span>
            </div>
          </div>

          {/* Right: Quick actions, notifications, and profile */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Direct Export ATS Proof Button (from Image 1) */}
            <Link
              href="/#toolkit"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-surface hover:bg-bg border border-border/90 hover:border-gold/60 text-ink text-xs font-body font-medium transition-colors shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Export Proof</span>
            </Link>

            {/* Chat / TA Notifications */}
            <button
              type="button"
              className="w-9 h-9 rounded-xl bg-surface border border-border/80 hover:border-border text-muted hover:text-ink flex items-center justify-center transition-colors relative cursor-pointer shadow-2xs"
              aria-label="Messages"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-gold absolute top-2 right-2 ring-2 ring-surface" />
            </button>

            {/* Notifications Bell with Dot */}
            <button
              type="button"
              className="w-9 h-9 rounded-xl bg-surface border border-border/80 hover:border-border text-muted hover:text-ink flex items-center justify-center transition-colors relative cursor-pointer shadow-2xs"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute top-2 right-2 ring-2 ring-surface" />
            </button>

            {/* Mobile ThemeToggle */}
            <div className="lg:hidden">
              <ThemeToggle showLabel={false} />
            </div>

            {/* Quick Profile Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-border/80">
              <Avatar
                size="sm"
                fallback={initials}
                verified={learner.isVerified ?? true}
              />
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8 w-full max-w-[1600px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
