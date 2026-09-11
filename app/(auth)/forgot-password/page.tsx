'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { Input, OtpInput } from '@/components/primitives/input'
import { Button } from '@/components/primitives/button'

export default function ForgotPasswordPage() {
  const router = useRouter()

  const [email, setEmail] = React.useState('')
  const [isSent, setIsSent] = React.useState(false)
  const [otpCode, setOtpCode] = React.useState('')
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [countdown, setCountdown] = React.useState(45)
  const [canResend, setCanResend] = React.useState(false)

  // Countdown timer for code resend
  React.useEffect(() => {
    let timer: NodeJS.Timeout
    if (isSent && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
    } else if (countdown === 0) {
      setCanResend(true)
    }
    return () => clearTimeout(timer)
  }, [isSent, countdown])

  const handleSendReset = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSent(true)
      setCountdown(45)
      setCanResend(false)
    }, 600)
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (otpCode.length < 6) {
      setError('Please enter the full 6-digit code.')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/reset-password?email=${encodeURIComponent(email)}`)
    }, 600)
  }

  const handleResend = () => {
    if (!canResend) return
    setCountdown(45)
    setCanResend(false)
    setError('')
    // simulated trigger
  }

  return (
    <AuthShell
      activeTab="forgot"
      heading={isSent ? 'Check Your Inbox' : 'Reset Your Password'}
      subheading={
        isSent
          ? `We've sent a 6-digit one-time authorization code to ${email}.`
          : 'Enter your registered email address and we will dispatch a 6-digit recovery code to verify your account.'
      }
    >
      <div className="space-y-6 animate-toast-in">
        {/* Error Alert */}
        {error && (
          <div className="p-3 rounded-xl bg-danger/10 border border-danger/30 flex items-center gap-2 text-xs text-danger font-body">
            <AlertCircle className="w-4 h-4 shrink-0 text-danger" />
            <span>{error}</span>
          </div>
        )}

        {!isSent ? (
          /* Step 1: Request code by email */
          <form onSubmit={handleSendReset} className="space-y-5">
            <Input
              label="Account Email Address"
              type="email"
              placeholder="amara@domain.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError('')
              }}
              hint="The primary email associated with your Wedin account."
              required
            />

            <Button
              type="submit"
              fullWidth
              disabled={isLoading}
              className="h-12 text-sm font-semibold"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Sending Recovery Code...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>Send Recovery Code</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        ) : (
          /* Step 2: Enter 6-digit OTP code */
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div className="p-4 rounded-2xl bg-surface border border-border space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted">6-DIGIT RECOVERY PASSKEY</span>
                <span className="text-gold font-semibold">EMAIL DISPATCHED</span>
              </div>
              <OtpInput
                length={6}
                value={otpCode}
                onChange={(val) => {
                  setOtpCode(val)
                  if (error) setError('')
                }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-body">
              <span className="text-muted">
                Didn&apos;t receive the email?
              </span>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-gold font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Resend Code
                </button>
              ) : (
                <span className="font-mono text-muted">
                  Resend in 0:{countdown < 10 ? `0${countdown}` : countdown}
                </span>
              )}
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={isLoading}
              className="h-12 text-sm font-semibold"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Validating Passkey...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span>Verify Code & Reset Password</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>

            <button
              type="button"
              onClick={() => {
                setIsSent(false)
                setOtpCode('')
                setError('')
              }}
              className="w-full text-center text-xs text-muted hover:text-ink font-body transition-colors"
            >
              Change email address
            </button>
          </form>
        )}

        {/* Back to sign in link */}
        <div className="pt-2 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Sign In</span>
          </Link>
        </div>
      </div>
    </AuthShell>
  )
}
