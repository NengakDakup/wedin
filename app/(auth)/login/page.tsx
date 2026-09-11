'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  KeyRound,
} from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { Input, OtpInput } from '@/components/primitives/input'
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

export default function LoginPage() {
  const router = useRouter()
  const { setLearner } = useLearner()

  const [authMode, setAuthMode] = React.useState<'password' | 'otp'>('password')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [otpCode, setOtpCode] = React.useState('')
  const [rememberMe, setRememberMe] = React.useState(true)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [socialLoading, setSocialLoading] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid work or personal email address.')
      return
    }

    if (authMode === 'password' && !password) {
      setError('Please enter your account password.')
      return
    }

    if (authMode === 'otp' && otpCode.length < 6) {
      setError('Please enter the complete 6-digit verification code.')
      return
    }

    setIsLoading(true)

    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false)
      // Save learner profile state
      setLearner({
        email: email.trim(),
        name: email.split('@')[0].replace('.', ' ').replace(/^./, (str) => str.toUpperCase()),
        isVerified: true,
      })
      router.push('/app/dashboard')
    }, 800)
  }

  const handleDemoLogin = (demoName: string, demoEmail: string) => {
    setIsLoading(true)
    setEmail(demoEmail)
    setPassword('••••••••••••')
    setTimeout(() => {
      setLearner({
        name: demoName,
        email: demoEmail,
        isVerified: true,
      })
      router.push('/app/dashboard')
    }, 500)
  }

  const handleSocialAuth = (provider: string) => {
    setSocialLoading(provider)
    setTimeout(() => {
      setSocialLoading(null)
      setLearner({
        name: provider === 'Google' ? 'Alex Rivera' : 'Dev Lead',
        email: `${provider.toLowerCase()}@wedincareers.io`,
        isVerified: true,
      })
      router.push('/app/dashboard')
    }, 800)
  }

  return (
    <AuthShell
      activeTab="login"
      heading="Welcome Back to Wedin"
      subheading="Sign in to continue your curriculum track, complete capstones, and access placement briefs."
    >
      <div className="space-y-5 animate-toast-in">
        {/* Auth Method Switch: Password vs Magic Link/OTP */}
        <div className="flex items-center justify-between p-1 bg-surface border border-border rounded-xl text-xs font-medium">
          <button
            type="button"
            onClick={() => {
              setAuthMode('password')
              setError('')
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'password'
                ? 'bg-bg text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Password
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthMode('otp')
              setError('')
            }}
            className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
              authMode === 'otp'
                ? 'bg-bg text-ink shadow-2xs font-semibold'
                : 'text-muted hover:text-ink'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            Magic Link / OTP
          </button>
        </div>

        {/* Quick 1-Click Demo Accounts */}
        <div className="p-3.5 rounded-2xl bg-gold/10 border border-gold/25 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-mono text-gold font-bold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-gold" />
              FAST DEMO TESTING
            </span>
            <span className="text-muted text-[10px]">1-Click Login</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleDemoLogin('Amara Okonjo', 'amara@wedincareers.io')}
              className="px-2.5 py-1.5 rounded-xl bg-surface/90 hover:bg-surface border border-border/80 text-left text-xs font-body text-ink hover:border-gold/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <div className="font-semibold text-[11px] group-hover:text-gold transition-colors">
                  Amara Okonjo
                </div>
                <div className="text-[10px] text-muted">AI Systems Fellow</div>
              </div>
              <ArrowRight className="w-3 h-3 text-muted group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('Kenji Sato', 'kenji@wedincareers.io')}
              className="px-2.5 py-1.5 rounded-xl bg-surface/90 hover:bg-surface border border-border/80 text-left text-xs font-body text-ink hover:border-gold/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div>
                <div className="font-semibold text-[11px] group-hover:text-gold transition-colors">
                  Kenji Sato
                </div>
                <div className="text-[10px] text-muted">Cloud Architect Fellow</div>
              </div>
              <ArrowRight className="w-3 h-3 text-muted group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Work or Personal Email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error) setError('')
            }}
            required
          />

          {authMode === 'password' ? (
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-ink font-body select-none">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-body text-gold hover:underline font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
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
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-ink font-body">
                  6-Digit Verification Code
                </label>
                <button
                  type="button"
                  onClick={() => alert(`Verification code sent to ${email || 'your email'}`)}
                  className="text-xs font-body text-gold hover:underline font-medium"
                >
                  Send OTP Code
                </button>
              </div>
              <OtpInput
                length={6}
                value={otpCode}
                onChange={(code) => {
                  setOtpCode(code)
                  if (error) setError('')
                }}
              />
              <p className="text-[11px] text-muted font-body">
                We will email a one-time cryptographic authorization passkey to your address.
              </p>
            </div>
          )}

          {/* Remember me checkbox */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-border text-gold focus:ring-gold/40 accent-gold"
              />
              <span className="text-xs text-muted font-body">
                Keep me signed in on this device
              </span>
            </label>
          </div>

          {/* Primary Submit Button */}
          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            className="h-12 text-sm font-semibold mt-2"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>Sign In to Wedin</span>
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
            Or continue with
          </span>
        </div>

        {/* Social Logins */}
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

        {/* Bottom sign up nudge */}
        <div className="text-center pt-2">
          <p className="text-xs font-body text-muted">
            Don&apos;t have a Wedin account?{' '}
            <Link
              href="/signup"
              className="text-gold font-semibold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </AuthShell>
  )
}
