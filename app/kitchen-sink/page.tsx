'use client'

import * as React from 'react'
import {
  Check,
  TriangleAlert,
  Clock,
  Sparkles,
  BookOpen,
  ArrowLeft,
  Bell,
  SlidersHorizontal,
  Info,
  ShieldCheck,
  AlertOctagon,
  HelpCircle,
  TrendingUp,
} from 'lucide-react'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  ProgressBar,
  Input,
  OtpInput,
  StatusIcon,
  Sheet,
  Toast,
  Avatar,
  EmptyState,
} from '@/components/primitives'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTheme } from '@/components/theme-provider'

export default function KitchenSinkPage() {
  const { theme } = useTheme()
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)
  const [otpValue, setOtpValue] = React.useState('482')
  const [progressVal, setProgressVal] = React.useState(65)

  const isLight = theme === 'light'

  return (
    <div className="min-h-screen bg-bg text-ink px-4 py-8 sm:px-8 sm:py-12 max-w-5xl mx-auto space-y-16 transition-colors duration-200">
      {/* Header */}
      <header className="border-b border-border pb-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="text-xs font-mono tracking-widest text-muted uppercase">
            LEARN. GROW. GET HIRED.
          </div>
          {/* Light Mode Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted hidden sm:inline">THEME:</span>
            <ThemeToggle showLabel={true} />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink mt-3 tracking-tight">
          Wedin Primitives Kitchen Sink
        </h1>
        <p className="text-sm sm:text-base text-muted font-body mt-2 max-w-2xl">
          Phase 0 review: Visual validation of all atomic tokens, components, edge cases,
          theme-compatible semantic status colors, and dark/light mode parity.
        </p>

        {/* Token summary pill bar */}
        <div className="space-y-4 mt-6 pt-6 border-t border-border/60">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-muted uppercase tracking-wider">
              Active Mode Tokens ({isLight ? 'Warm Ivory Light' : 'Deep Obsidian Dark'})
            </div>
            <Badge variant="active">{isLight ? 'LIGHT MODE ACTIVE' : 'DARK MODE ACTIVE'}</Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-bg border border-border shrink-0" />
              <span className="text-muted">bg:</span>
              <span className="font-mono text-ink">{isLight ? '#F8F6F0' : '#0A0A0A'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-surface border border-border shrink-0" />
              <span className="text-muted">surface:</span>
              <span className="font-mono text-ink">{isLight ? '#FFFFFF' : '#161412'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-border shrink-0" />
              <span className="text-muted">border:</span>
              <span className="font-mono text-ink">{isLight ? '#E2DDD4' : '#2B2620'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-gold shrink-0" />
              <span className="text-muted">gold:</span>
              <span className="font-mono text-ink">{isLight ? '#DDA832' : '#F5CF6E'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-ink shrink-0" />
              <span className="text-muted">ink:</span>
              <span className="font-mono text-ink">{isLight ? '#151311' : '#F5F2EA'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-muted shrink-0" />
              <span className="text-muted">muted:</span>
              <span className="font-mono text-ink">{isLight ? '#7A7365' : '#948E7E'}</span>
            </div>
          </div>

          <div className="text-xs font-mono text-muted uppercase tracking-wider pt-2">
            Semantic Status Accents
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-success shrink-0" />
              <span className="text-muted">success:</span>
              <span className="font-mono text-success">{isLight ? '#2E7D56' : '#4EAA78'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-danger shrink-0" />
              <span className="text-muted">danger:</span>
              <span className="font-mono text-danger">{isLight ? '#C9402E' : '#E05A47'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-warning shrink-0" />
              <span className="text-muted">warning:</span>
              <span className="font-mono text-warning">{isLight ? '#BF6E16' : '#E5953C'}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-card bg-surface border border-border text-xs">
              <span className="w-3 h-3 rounded-full bg-info shrink-0" />
              <span className="text-muted">info:</span>
              <span className="font-mono text-info">{isLight ? '#357796' : '#5EA5C6'}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Semantic Status Colors Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-display font-medium text-ink">
              Theme Semantic Accents & Feedback States
            </h2>
            <Badge variant="active">SEMANTIC TONES</Badge>
          </div>
          <p className="text-sm text-muted">
            Carefully calibrated status colors that adapt cleanly between Dark Obsidian and Warm
            Ivory Light modes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Success card */}
          <Card className="p-6 flex flex-col items-center text-center space-y-4 border-success/30">
            <div className="text-xs font-mono text-success">SUCCESS</div>
            <StatusIcon icon={ShieldCheck} variant="success" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">
                Milestone Approved
              </div>
              <div className="text-xs text-muted mt-1">
                {isLight ? '#2E7D56' : '#4EAA78'} Sage Emerald
              </div>
            </div>
            <Badge variant="success">Completed</Badge>
          </Card>

          {/* Danger card */}
          <Card className="p-6 flex flex-col items-center text-center space-y-4 border-danger/30">
            <div className="text-xs font-mono text-danger">DANGER</div>
            <StatusIcon icon={AlertOctagon} variant="danger" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">
                Session Expired
              </div>
              <div className="text-xs text-muted mt-1">
                {isLight ? '#C9402E' : '#E05A47'} Terracotta Coral
              </div>
            </div>
            <Badge variant="danger">Critical Action</Badge>
          </Card>

          {/* Warning card */}
          <Card className="p-6 flex flex-col items-center text-center space-y-4 border-warning/30">
            <div className="text-xs font-mono text-warning">WARNING</div>
            <StatusIcon icon={TriangleAlert} variant="warning" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">
                Deadline in 24h
              </div>
              <div className="text-xs text-muted mt-1">
                {isLight ? '#BF6E16' : '#E5953C'} Deep Amber
              </div>
            </div>
            <Badge variant="warning">Needs Review</Badge>
          </Card>

          {/* Info card */}
          <Card className="p-6 flex flex-col items-center text-center space-y-4 border-info/30">
            <div className="text-xs font-mono text-info">INFO</div>
            <StatusIcon icon={Info} variant="info" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">
                Curriculum Updated
              </div>
              <div className="text-xs text-muted mt-1">
                {isLight ? '#357796' : '#5EA5C6'} Steel Cyan
              </div>
            </div>
            <Badge variant="info">New Material</Badge>
          </Card>
        </div>

        {/* Semantic Progress Bars */}
        <Card className="p-6 space-y-4">
          <div className="text-xs font-mono text-muted">
            SEMANTIC PROGRESS BARS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                <span>Assessment Pass Threshold</span>
                <span className="text-success">92%</span>
              </div>
              <ProgressBar value={92} max={100} variant="success" size="default" />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                <span>Storage / Attempt Limit</span>
                <span className="text-danger">88%</span>
              </div>
              <ProgressBar value={88} max={100} variant="danger" size="default" />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                <span>Cohort Completion Velocity</span>
                <span className="text-warning">64%</span>
              </div>
              <ProgressBar value={64} max={100} variant="warning" size="default" />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-muted mb-1.5">
                <span>Resource Download Cache</span>
                <span className="text-info">45%</span>
              </div>
              <ProgressBar value={45} max={100} variant="info" size="default" />
            </div>
          </div>
        </Card>
      </section>

      {/* 1. Buttons */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">1. Button</h2>
          <p className="text-sm text-muted">
            Full pill radius. Primary (gold fill/black text), Secondary (outline), Ghost,
            and Danger (destructive actions). Disabled states exhibit reduced opacity without
            color shifting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 space-y-4">
            <div className="text-xs font-mono text-muted">PRIMARY (GOLD)</div>
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="default">
                Continue with Track
              </Button>
              <Button variant="primary" size="sm">
                Start Module
              </Button>
              <Button variant="primary" disabled size="default">
                Complete (Disabled)
              </Button>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="text-xs font-mono text-muted">SECONDARY OUTLINE</div>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" size="default" secondaryTextColor="ink">
                Review Questions
              </Button>
              <Button variant="secondary" size="sm" secondaryTextColor="gold">
                View Syllabus
              </Button>
              <Button variant="secondary" disabled size="default">
                Download (Disabled)
              </Button>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="text-xs font-mono text-muted">DANGER / DESTRUCTIVE</div>
            <div className="flex flex-col gap-3">
              <Button variant="danger" size="default">
                Leave Cohort
              </Button>
              <Button variant="secondary" size="sm" secondaryTextColor="danger">
                Reset Progress
              </Button>
              <Button variant="danger" disabled size="default">
                Revoke Key (Disabled)
              </Button>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="text-xs font-mono text-muted">GHOST & SPECIAL</div>
            <div className="flex flex-col gap-3">
              <Button variant="ghost" size="default">
                Skip for now
              </Button>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
              <Button variant="ghost" disabled size="default">
                Skip (Disabled)
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* 2. Card */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">2. Card</h2>
          <p className="text-sm text-muted">
            Surface background, 1px border, 20px card radius. Interactive variant brightens
            border on hover (no shadow).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="neutral">MODULE 01</Badge>
                <span className="text-xs font-mono text-muted">45 MIN</span>
              </div>
              <CardTitle className="mt-2">Standard Surface Card</CardTitle>
              <CardDescription>
                Default container for lesson summaries, track overviews, and structured data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressBar value={40} max={100} size="sm" />
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm" fullWidth>
                Resume
              </Button>
            </CardFooter>
          </Card>

          <Card interactive>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="active">INTERACTIVE</Badge>
                <span className="text-xs font-mono text-muted">HOVER ME</span>
              </div>
              <CardTitle className="mt-2">Interactive Variant</CardTitle>
              <CardDescription>
                Border brightens subtly on hover. Strict brand rule: No box shadows on card hover.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted font-body">
                Clean and tactile response optimized for touch and pointer targets.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">
                Select Option
              </Button>
            </CardFooter>
          </Card>

          <Card featured>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="active">RECOMMENDED</Badge>
                <span className="text-xs font-mono text-gold">MATCH 98%</span>
              </div>
              <CardTitle className="mt-2">Featured Hero Card</CardTitle>
              <CardDescription>
                Accented with a gold border treatment for highlighted recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressBar value={85} max={100} size="sm" />
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm" fullWidth>
                Start Track
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 3. Badge */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">3. Badge</h2>
          <p className="text-sm text-muted">
            Monospace font reserved for data values and status labels. Status variants map to text
            color only — never a colored background chip.
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="text-xs font-mono text-muted">DATA / TIMESTAMPS (MONO)</div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="active">01:15</Badge>
                <Badge variant="neutral">02:45 / 15:30</Badge>
                <Badge variant="ink">45 MIN</Badge>
                <Badge variant="neutral" shape="rect">
                  STEP 03/10
                </Badge>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono text-muted">
                STATUS LABELS (ALL SEMANTIC TONES)
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="active">In Progress</Badge>
                <Badge variant="success">Completed</Badge>
                <Badge variant="warning">In Review</Badge>
                <Badge variant="danger">Declined</Badge>
                <Badge variant="info">Synced</Badge>
                <Badge variant="neutral">Locked</Badge>
                <Badge variant="ink">Archived</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 4. ProgressBar */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">4. ProgressBar</h2>
          <p className="text-sm text-muted">
            Track in border color, fill in gold or semantic accents, rounded ends. Fill animates
            from 0 to value on initial load.
          </p>
        </div>

        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-muted mb-2">
                LABELED WITH MONO COUNTER (ASSESSMENT HEADER / MODULE PROGRESS)
              </div>
              <ProgressBar value={3} max={10} label="3/10" size="default" />
            </div>

            <div>
              <div className="text-xs font-mono text-muted mb-2">THICK VARIANT (PERCENTAGE)</div>
              <ProgressBar value={progressVal} max={100} label={`${progressVal}%`} size="lg" />
            </div>

            <div>
              <div className="text-xs font-mono text-muted mb-2">SUBTLE SLIM INLINE TRACK</div>
              <ProgressBar value={28} max={100} size="sm" />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setProgressVal((p) => (p >= 100 ? 15 : p + 20))}
              >
                Simulate Data Update
              </Button>
              <span className="text-xs font-mono text-muted">
                Current: {progressVal}/100
              </span>
            </div>
          </div>
        </Card>
      </section>

      {/* 5. Input & OTP Input */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">5. Input & OTP Input</h2>
          <p className="text-sm text-muted">
            Surface fill, border, 14px radius, gold border on focus. Error states use
            danger accent with clear icon and helper copy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-5">
            <div className="text-xs font-mono text-muted">TEXT INPUT VARIANTS</div>
            <Input
              label="Full Name"
              placeholder="e.g. Alex Chen"
              defaultValue="Amara Okonjo"
              hint="Enter your legal name as it should appear on certification."
            />
            <Input
              label="Work Email"
              type="email"
              placeholder="alex@company.com"
              defaultValue="invalid-email-format"
              error="Please enter a valid work email address."
            />
            <Input
              label="Account ID"
              disabled
              defaultValue="WDN-8942-X"
              hint="System-assigned learner identity (read-only)."
            />
          </Card>

          <Card className="p-6 space-y-5">
            <div className="text-xs font-mono text-muted">SEGMENTED OTP / CODE INPUT</div>
            <div>
              <OtpInput
                length={6}
                label="Verification Code"
                value={otpValue}
                onChange={setOtpValue}
              />
              <p className="text-xs text-muted font-body mt-2">
                Monospace cells, handles auto-advance, backspace, and clipboard paste.
              </p>
            </div>

            <div className="pt-2 border-t border-border/70">
              <OtpInput
                length={4}
                label="Edge Case: Expired Code"
                value="9999"
                error="Code has expired. Request a new verification code."
              />
            </div>
          </Card>
        </div>
      </section>

      {/* 6. StatusIcon */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">6. StatusIcon</h2>
          <p className="text-sm text-muted">
            Circular, surface background with gold or semantic colored glyphs and matched glow
            pulse effects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="text-xs font-mono text-gold">BRAND GOLD (WITH GLOW)</div>
            <StatusIcon icon={Sparkles} variant="gold" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">Special Milestone</div>
              <div className="text-xs text-muted mt-1">Single glow pulse entry</div>
            </div>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="text-xs font-mono text-success">SUCCESS STATE</div>
            <StatusIcon icon={Check} variant="success" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">Registration Complete</div>
              <div className="text-xs text-muted mt-1">Sage emerald glow</div>
            </div>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="text-xs font-mono text-danger">DANGER / DECLINED</div>
            <StatusIcon icon={TriangleAlert} variant="danger" withGlow size="lg" />
            <div>
              <div className="font-display font-medium text-ink text-sm">Payment Declined</div>
              <div className="text-xs text-muted mt-1">Terracotta crimson glow</div>
            </div>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="text-xs font-mono text-info">INFO / SYNC</div>
            <StatusIcon icon={Clock} variant="info" size="default" />
            <div>
              <div className="font-display font-medium text-ink text-sm">Session Pending</div>
              <div className="text-xs text-muted mt-1">64px circular surface</div>
            </div>
          </Card>
        </div>
      </section>

      {/* 7. Sheet & 8. Toast */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">7. Sheet & 8. Toast</h2>
          <p className="text-sm text-muted">
            Bottom sheet modal and multi-state semantic toast notifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="text-xs font-mono text-muted">BOTTOM SHEET / MODAL</div>
            <p className="text-sm text-muted font-body">
              Modal container with surface background and 20px radius on top corners only.
            </p>
            <Button
              variant="secondary"
              size="default"
              onClick={() => setIsSheetOpen(true)}
              className="gap-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-gold" />
              Open Sample Bottom Sheet
            </Button>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="text-xs font-mono text-muted">SEMANTIC TOAST NOTIFICATIONS</div>
            <div className="space-y-3">
              <Toast
                title="Lesson progress saved"
                description="Your notes have been synced to your profile."
                icon={Check}
                variant="success"
                action={{
                  label: "VIEW SYLLABUS",
                  onClick: () => alert("Navigating to syllabus..."),
                }}
              />

              <Toast
                title="Payment verification failed"
                description="Your banking provider declined authentication."
                icon={TriangleAlert}
                variant="danger"
                action={{
                  label: "RETRY CARD",
                  onClick: () => alert("Retrying payment..."),
                }}
              />
            </div>

            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowToast(!showToast)}
                className="gap-2"
              >
                <Bell className="w-3.5 h-3.5 text-gold" />
                {showToast ? 'Hide Live Toast' : 'Trigger Live Floating Toast'}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* 9. Avatar */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">9. Avatar</h2>
          <p className="text-sm text-muted">
            Circular surface with clean fallback typography and optional gold verified badge
            overlay with checkmark in corner.
          </p>
        </div>

        <Card className="p-6">
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Avatar size="lg" fallback="JD" verified />
              <span className="text-xs font-mono text-muted">LG (56px) VERIFIED</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar size="default" fallback="AK" verified />
              <span className="text-xs font-mono text-muted">DEFAULT (40px)</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar size="sm" fallback="MR" verified />
              <span className="text-xs font-mono text-muted">SM (32px)</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Avatar size="default" fallback="WO" verified={false} />
              <span className="text-xs font-mono text-muted">UNVERIFIED</span>
            </div>
          </div>
        </Card>
      </section>

      {/* 10. EmptyState */}
      <section className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-display font-medium text-ink">10. EmptyState</h2>
          <p className="text-sm text-muted">
            Icon + short direct headline + one action. Voice principle: Tell the learner what to
            do next, never apologize or moralize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EmptyState
            icon={BookOpen}
            title="Select a track to start learning"
            description="You have not enrolled in a career path yet. Browse available tracks to begin your diagnostic assessment."
            action={{
              label: "Explore Career Tracks",
              onClick: () => alert("Navigating to tracks..."),
            }}
          />

          <EmptyState
            icon={Clock}
            title="No scheduled mentoring sessions"
            description="Live code reviews and 1-on-1 career coaching unlock once you submit your first milestone project."
            action={{
              label: "View Next Milestone",
              onClick: () => alert("Navigating to milestone..."),
            }}
          />
        </div>
      </section>

      {/* Sheet component instance */}
      <Sheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        title="Lesson Filter & Settings"
        description="Configure playback preferences and resource visibility."
      >
        <div className="space-y-4 py-2">
          <div className="p-4 rounded-card bg-bg border border-border flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-ink">Auto-advance lessons</div>
              <div className="text-xs text-muted mt-0.5">Proceed when video finishes</div>
            </div>
            <Badge variant="success">ENABLED</Badge>
          </div>

          <div className="p-4 rounded-card bg-bg border border-border flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-ink">Show instructor notes</div>
              <div className="text-xs text-muted mt-0.5">Highlighted at relevant timestamps</div>
            </div>
            <Badge variant="info">SHOWN</Badge>
          </div>

          <div className="pt-4 flex gap-3">
            <Button
              variant="primary"
              size="default"
              fullWidth
              onClick={() => setIsSheetOpen(false)}
            >
              Apply Settings
            </Button>
            <Button
              variant="secondary"
              size="default"
              onClick={() => setIsSheetOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Sheet>

      {/* Floating Live Toast when triggered */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50">
          <Toast
            title="Assessment autosaved"
            description="3 of 10 responses securely recorded."
            icon={Check}
            variant="success"
            onDismiss={() => setShowToast(false)}
            action={{
              label: "CONTINUE",
              onClick: () => setShowToast(false),
            }}
          />
        </div>
      )}
    </div>
  )
}
