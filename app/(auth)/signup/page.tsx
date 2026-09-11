'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Code2,
  Briefcase,
  ShieldCheck,
} from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { Input } from '@/components/primitives/input'
import { Button } from '@/components/primitives/button'
import { useLearner } from '@/lib/learner-context'

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" {...props}>
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.8 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.6 7.2C.6 9.2 0 10.5 0 12.4s.6 3.2 1.6 5.2l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.3-6.7-5.3L1.6 16c1.9 3.8 5.8 7 10.4 7z"
      />
    </svg>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

export default function SignUpPage() {
  const router = useRouter()
  const { setLearner, setSelectedTrackId } = useLearner()

  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [trackCategory, setTrackCategory] = React.useState<'coding' | 'non-coding'>('coding')
  const [agreeTerms, setAgreeTerms] = React.useState(true)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [socialLoading, setSocialLoading] = React.useState<string | null>(null)

  // Password strength calculations
  const passwordStrength = React.useMemo(() => {
    if (!password) return { score: 0, label: '', color: '' }
    let score = 0
    if (password.length >= 8) score += 1
    if (/[A-Z]/.test(password)) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1

    if (score === 1) return { score: 1, label: 'Weak', color: 'bg-danger' }
    if (score === 2) return { score: 2, label: 'Fair', color: 'bg-amber-400' }
    if (score === 3) return { score: 3, label: 'Good', color: 'bg-gold' }
    return { score: 4, label: 'Strong', color: 'bg-emerald-400' }
  }, [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!fullName.trim()) {
      setError('Please enter your full name.')
      return
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid work or personal email address.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    if (!agreeTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy.')
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setLearner({
        name: fullName.trim(),
        email: email.trim(),
        isVerified: true,
      })
      if (trackCategory === 'coding') {
        setSelectedTrackId('full-stack-ai')
      } else {
        setSelectedTrackId('data-analytics')
      }
      router.push('/onboarding')
    }, 800)
  }

  const handleSocialAuth = (provider: string) => {
    setSocialLoading(provider)
    setTimeout(() => {
      setSocialLoading(null)
      setLearner({
        name: provider === 'Google' ? 'Alex Rivera' : 'GitHub Engineer',
        email: `${provider.toLowerCase()}@wedincareers.io`,
        isVerified: true,
      })
      router.push('/onboarding')
    }, 800)
  }

  return (
    <AuthShell
      activeTab="signup"
      heading="Start Your High-Growth Career"
      subheading="Create your profile to access full curriculum roadmaps, verified enterprise capstones, and 72-hour direct placement."
    >
      <div className="space-y-5 animate-toast-in">
        {/* Pathway Preference Pills */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono text-muted uppercase">
            PRIMARY FOCUS TRACK
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setTrackCategory('coding')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                trackCategory === 'coding'
                  ? 'border-gold bg-gold/10 shadow-xs'
                  : 'border-border bg-surface hover:border-border/80'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Code2
                  className={`w-3.5 h-3.5 ${
                    trackCategory === 'coding' ? 'text-gold' : 'text-muted'
                  }`}
                />
                <span className="text-xs font-semibold font-body text-ink">
                  Coding & AI
                </span>
              </div>
              <p className="text-[10px] text-muted font-body mt-1">
                Full-Stack, Cloud & Systems
              </p>
            </button>

            <button
              type="button"
              onClick={() => setTrackCategory('non-coding')}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                trackCategory === 'non-coding'
                  ? 'border-gold bg-gold/10 shadow-xs'
                  : 'border-border bg-surface hover:border-border/80'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Briefcase
                  className={`w-3.5 h-3.5 ${
                    trackCategory === 'non-coding' ? 'text-gold' : 'text-muted'
                  }`}
                />
                <span className="text-xs font-semibold font-body text-ink">
                  Non-Coding
                </span>
              </div>
              <p className="text-[10px] text-muted font-body mt-1">
                Product Mgmt, Design & GRC
              </p>
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3 rounded-xl bg-danger/10 border border-danger/30 flex items-center gap-2 text-xs text-danger font-body">
            <AlertCircle className="w-4 h-4 shrink-0 text-danger" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <Input
            label="Full Legal Name"
            placeholder="e.g. Amara Okonjo"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value)
              if (error) setError('')
            }}
            hint="As it should appear on your verified cryptographic credentials."
            required
          />

          <Input
            label="Work or Personal Email"
            type="email"
            placeholder="amara@domain.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError('')
            }}
            required
          />

          {/* Password Input with Strength Meter */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-ink font-body select-none">
                Create Password
              </label>
              {password && (
                <span
                  className={`text-[11px] font-mono font-medium ${
                    passwordStrength.score >= 3 ? 'text-emerald-400' : 'text-muted'
                  }`}
                >
                  {passwordStrength.label}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  if (error) setError('')
                }}
                className="w-full h-12 px-4 pr-11 bg-surface border border-border rounded-input text-ink font-body text-base placeholder:text-muted transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors p-1 cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Password Strength Visual Bar */}
            {password && (
              <div className="space-y-1.5 pt-1">
                <div className="grid grid-cols-4 gap-1.5 h-1">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`h-full rounded-full transition-all ${
                        step <= passwordStrength.score
                          ? passwordStrength.color
                          : 'bg-surface border border-border/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-muted">
                  <span
                    className={
                      password.length >= 8 ? 'text-emerald-400 font-semibold' : ''
                    }
                  >
                    &bull; 8+ chars
                  </span>
                  <span
                    className={
                      /[0-9]/.test(password) ? 'text-emerald-400 font-semibold' : ''
                    }
                  >
                    &bull; Number
                  </span>
                  <span
                    className={
                      /[^A-Za-z0-9]/.test(password)
                        ? 'text-emerald-400 font-semibold'
                        : ''
                    }
                  >
                    &bull; Symbol
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Terms & Privacy Agreement */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded border-border text-gold focus:ring-gold/40 accent-gold mt-0.5"
              />
              <span className="text-xs text-muted font-body leading-snug">
                I agree to Wedin&apos;s{' '}
                <a href="#" className="text-gold hover:underline">
                  Terms of Service
                </a>
                ,{' '}
                <a href="#" className="text-gold hover:underline">
                  Privacy Policy
                </a>
                , and cryptographic code verification honor code.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            className="h-12 text-sm font-semibold mt-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Creating Profile...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>Create Account & Start Trial</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/80" />
          </div>
          <span className="relative px-3 bg-bg text-[11px] font-mono text-muted uppercase">
            Or sign up with
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleSocialAuth('GitHub')}
            disabled={socialLoading !== null}
            className="h-11 px-4 rounded-xl bg-surface border border-border hover:border-gold/40 text-ink text-xs font-medium font-body flex items-center justify-center gap-2 hover:bg-surface/80 transition-all cursor-pointer disabled:opacity-50"
          >
            {socialLoading === 'GitHub' ? (
              <span className="w-3.5 h-3.5 border-2 border-ink border-t-transparent rounded-full animate-spin" />
            ) : (
              <GithubIcon />
            )}
            <span>GitHub</span>
          </button>

          <button
            type="button"
            onClick={() => handleSocialAuth('Google')}
            disabled={socialLoading !== null}
            className="h-11 px-4 rounded-xl bg-surface border border-border hover:border-gold/40 text-ink text-xs font-medium font-body flex items-center justify-center gap-2 hover:bg-surface/80 transition-all cursor-pointer disabled:opacity-50"
          >
            {socialLoading === 'Google' ? (
              <span className="w-3.5 h-3.5 border-2 border-ink border-t-transparent rounded-full animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            <span>Google</span>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center pt-1">
          <p className="text-xs font-body text-muted">
            Already have a Wedin account?{' '}
            <Link
              href="/login"
              className="text-gold font-semibold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthShell>
  )
}
