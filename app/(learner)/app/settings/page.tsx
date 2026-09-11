'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Settings as SettingsIcon,
  User,
  Mail,
  Phone,
  ShieldCheck,
  CreditCard,
  Key,
  CheckCircle2,
  Copy,
  ExternalLink,
  BookOpen,
  Download,
  AlertCircle,
  Sparkles,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/primitives/card'
import { Badge } from '@/components/primitives/badge'
import { Button } from '@/components/primitives/button'
import { Input } from '@/components/primitives/input'
import { CAREER_TRACKS } from '@/lib/mock-data'
import { useLearner } from '@/lib/learner-context'

export default function SettingsPage() {
  const { learner, setLearner, selectedTrack, setSelectedTrackId } = useLearner()

  const [activeTab, setActiveTab] = React.useState<'profile' | 'track' | 'billing' | 'security'>('profile')

  // Profile Form state
  const [name, setName] = React.useState(learner.name || 'Amara Okonjo')
  const [email, setEmail] = React.useState(learner.email || 'amara@wedincareers.io')
  const [phone, setPhone] = React.useState(learner.phone || '+1 (555) 234-8901')
  const [bio, setBio] = React.useState('Full-stack product engineer building distributed AI systems, autonomous agents, and high-throughput vector ingestion pipelines.')
  const [github, setGithub] = React.useState('https://github.com/amara-okonjo')
  const [linkedin, setLinkedin] = React.useState('https://linkedin.com/in/amara-okonjo')
  const [timezone, setTimezone] = React.useState('UTC-5 (Eastern Time)')

  // Track selection
  const [chosenTrackId, setChosenTrackId] = React.useState(selectedTrack.id)
  const [hoursGoal, setHoursGoal] = React.useState('20')
  const [hiringStatus, setHiringStatus] = React.useState('active')

  // Feedback states
  const [isSaved, setIsSaved] = React.useState(false)
  const [copiedKey, setCopiedKey] = React.useState(false)

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setLearner({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    })
    setSelectedTrackId(chosenTrackId)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  const handleCopyKey = () => {
    navigator.clipboard.writeText('0x8F2d3c9E5A8B17A6C4D0F8148a1d65dfc2d4b1fa3d677284addd200126d9069')
    setCopiedKey(true)
    setTimeout(() => setCopiedKey(false), 2000)
  }

  return (
    <div className="space-y-8 animate-toast-in pb-16">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="active">ACCOUNT & PROFILE</Badge>
            <span className="text-xs font-mono text-muted uppercase">
              PREFERENCES & VERIFICATION
            </span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
            Settings & Calibrations
          </h1>
          <p className="text-xs sm:text-sm font-body text-muted mt-0.5">
            Manage your verified public credential, tuition installment schedule, and career track calibration.
          </p>
        </div>

        {isSaved && (
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold animate-toast-in">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>CHANGES SAVED TO BLOCKCHAIN ATTESTATION</span>
          </div>
        )}
      </div>

      {/* Settings Navigation Tabs */}
      <div className="flex items-center gap-2 p-1 bg-surface border border-border rounded-2xl text-xs font-medium w-fit overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'profile'
              ? 'bg-bg text-ink shadow-2xs font-semibold'
              : 'text-muted hover:text-ink'
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Profile & Bio</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('track')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'track'
              ? 'bg-bg text-ink shadow-2xs font-semibold'
              : 'text-muted hover:text-ink'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Track Calibration</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('billing')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'billing'
              ? 'bg-bg text-ink shadow-2xs font-semibold'
              : 'text-muted hover:text-ink'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Tuition & Financing</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('security')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
            activeTab === 'security'
              ? 'bg-bg text-ink shadow-2xs font-semibold'
              : 'text-muted hover:text-ink'
          }`}
        >
          <Key className="w-3.5 h-3.5" />
          <span>ATS Cryptographic Key</span>
        </button>
      </div>

      {/* TAB 1: Profile & Bio */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSaveProfile} className="space-y-6">
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="pb-4 border-b border-border/70 space-y-1">
              <h2 className="font-display text-lg font-bold text-ink">
                Learner Profile Credentials
              </h2>
              <p className="text-xs font-body text-muted">
                This information is embedded directly inside your cryptographic ATS proof dispatched to employers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Legal Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="Verified Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Phone / Signal Contact"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-ink font-body">Timezone</label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full h-12 px-4 bg-surface border border-border rounded-input text-ink font-body text-sm focus:outline-none focus:border-gold"
                >
                  <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time - US/CA)</option>
                  <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time - US/CA)</option>
                  <option value="UTC+0 (London / GMT)">UTC+0 (London / GMT)</option>
                  <option value="UTC+1 (Lagos / Berlin / CET)">UTC+1 (Lagos / Berlin / CET)</option>
                  <option value="UTC+5:30 (India IST)">UTC+5:30 (India IST)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-ink font-body">Engineering Headline & Bio</label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-4 bg-surface border border-border rounded-input text-ink font-body text-xs sm:text-sm focus:outline-none focus:border-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="GitHub Profile URL"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />

              <Input
                label="LinkedIn Profile URL"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>

            <div className="pt-4 border-t border-border/70 flex justify-end">
              <Button type="submit" className="text-xs font-semibold px-6">
                Save Profile Changes
              </Button>
            </div>
          </Card>
        </form>
      )}

      {/* TAB 2: Track Calibration */}
      {activeTab === 'track' && (
        <form onSubmit={handleSaveProfile} className="space-y-6">
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="pb-4 border-b border-border/70 space-y-1">
              <h2 className="font-display text-lg font-bold text-ink">
                Career Track & Study Calibration
              </h2>
              <p className="text-xs font-body text-muted">
                Adjust your primary curriculum track, weekly velocity targets, and interview dispatch readiness.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-ink font-body">Active Primary Track</label>
              <select
                value={chosenTrackId}
                onChange={(e) => setChosenTrackId(e.target.value)}
                className="w-full h-12 px-4 bg-surface border border-border rounded-input text-ink font-body text-sm focus:outline-none focus:border-gold"
              >
                {CAREER_TRACKS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} &bull; {t.duration} ({t.hiringPartners.join(', ')})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-ink font-body">Weekly Commitment Target</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setHoursGoal('20')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      hoursGoal === '20'
                        ? 'border-gold bg-gold/10'
                        : 'border-border bg-surface'
                    }`}
                  >
                    <div className="font-bold text-xs text-ink">Full-Time Sprint</div>
                    <div className="text-[10px] text-muted">20-25 hrs / week</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setHoursGoal('10')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      hoursGoal === '10'
                        ? 'border-gold bg-gold/10'
                        : 'border-border bg-surface'
                    }`}
                  >
                    <div className="font-bold text-xs text-ink">Executive Part-Time</div>
                    <div className="text-[10px] text-muted">10-12 hrs / week</div>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-ink font-body">Placement Dispatch Status</label>
                <select
                  value={hiringStatus}
                  onChange={(e) => setHiringStatus(e.target.value)}
                  className="w-full h-12 px-4 bg-surface border border-border rounded-input text-ink font-body text-sm focus:outline-none focus:border-gold"
                >
                  <option value="active">Active &bull; Ready for 72-Hour Interview Dispatch</option>
                  <option value="capstone-only">Focused on Capstone Completion Only</option>
                  <option value="passive">Passive &bull; Only Considering &gt; $180k Offers</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-border/70 flex justify-end">
              <Button type="submit" className="text-xs font-semibold px-6">
                Update Track Preferences
              </Button>
            </div>
          </Card>
        </form>
      )}

      {/* TAB 3: Tuition & Financing */}
      {activeTab === 'billing' && (
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-border/70 space-y-1">
            <h2 className="font-display text-lg font-bold text-ink">
              Tuition & Installment Plan
            </h2>
            <p className="text-xs font-body text-muted">
              Transparent, zero-interest financing schedule with automatic placement guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <span className="text-[11px] font-mono text-muted uppercase">Plan Type</span>
              <div className="font-display text-2xl font-bold text-ink">$299 / Month</div>
              <div className="text-xs font-body text-gold">4-Month Zero-Interest Installment</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <span className="text-[11px] font-mono text-muted uppercase">Total Paid to Date</span>
              <div className="font-display text-2xl font-bold text-emerald-400">$299.00</div>
              <div className="text-xs font-body text-muted">1 of 4 Installments Settled</div>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border space-y-1">
              <span className="text-[11px] font-mono text-muted uppercase">Next Payment Due</span>
              <div className="font-display text-2xl font-bold text-ink">Oct 05, 2026</div>
              <div className="text-xs font-body text-muted">$299.00 auto-charged to card ending ••42</div>
            </div>
          </div>

          {/* Invoices List */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono text-muted uppercase font-semibold">
              BILLING RECEIPTS & TAX INVOICES
            </div>
            <div className="divide-y divide-border/60 border border-border/70 rounded-2xl overflow-hidden bg-surface">
              <div className="p-4 flex items-center justify-between text-xs font-body">
                <div>
                  <div className="font-bold text-ink">Invoice #WEDIN-2026-8812 &bull; Month 1 Tuition</div>
                  <div className="text-[11px] text-muted font-mono">Paid Sep 05, 2026 via Visa ••42</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-ink">$299.00 USD</span>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => alert('Downloading PDF Invoice #WEDIN-2026-8812...')}
                    className="text-xs h-7"
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* TAB 4: Security & Cryptographic ATS Key */}
      {activeTab === 'security' && (
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="pb-4 border-b border-border/70 space-y-1">
            <h2 className="font-display text-lg font-bold text-ink">
              Cryptographic ATS Attestation Key
            </h2>
            <p className="text-xs font-body text-muted">
              Your public ECDSA verification key used by engineering recruiters to cryptographically authenticate your pull requests and capstone code.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-gold font-bold">PUBLIC ATTESTATION HASH</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                VALIDATED ON-CHAIN
              </span>
            </div>
            <div className="font-mono text-xs text-ink bg-bg p-3 rounded-xl border border-border break-all select-all">
              0x8F2d3c9E5A8B17A6C4D0F8148a1d65dfc2d4b1fa3d677284addd200126d9069
            </div>
            <div className="flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={handleCopyKey}
                className="text-xs gap-1.5"
              >
                {copiedKey ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Attestation Key</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs font-body">
              <div className="font-bold text-ink">Cryptographic Honor Code Guarantee</div>
              <p className="text-muted leading-relaxed">
                All pull requests submitted under your Wedin profile are digitally signed and immutable. Once verified by a Staff Engineer, this seal is permanently attached to your hiring portfolio.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
