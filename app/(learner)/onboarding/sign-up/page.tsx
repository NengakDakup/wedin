'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { ShieldCheck, Lock, Mail, User } from 'lucide-react'
import { Input, OtpInput } from '@/components/primitives/input'
import { Button } from '@/components/primitives/button'
import { Badge } from '@/components/primitives/badge'
import { useLearner } from '@/lib/learner-context'

export default function SignUpPage() {
  const router = useRouter()
  const { learner, setLearner, selectedTrack } = useLearner()

  const [name, setName] = React.useState(learner.name || '')
  const [email, setEmail] = React.useState(learner.email || '')
  const [password, setPassword] = React.useState('')
  const [authMode, setAuthMode] = React.useState<'password' | 'otp'>('password')
  const [otpCode, setOtpCode] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.')
      return
    }
    if (authMode === 'password' && password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (authMode === 'otp' && otpCode.length < 4) {
      setError('Please complete the verification code.')
      return
    }

    setLearner({
      name: name.trim(),
      email: email.trim(),
      isVerified: true,
    })

    router.push('/onboarding/success')
  }

  return (
    <div className="space-y-8 animate-toast-in">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="active">FINAL STEP</Badge>
          <span className="text-xs font-mono text-muted">PROFILE ENROLLMENT</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          Create Your Learner Account
        </h1>
        <p className="font-body text-sm sm:text-base text-muted">
          Your account gives you access to the {selectedTrack.title} cohort and live mentor reviews.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Full Name"
          placeholder="e.g. Amara Okonjo"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            if (error) setError('')
          }}
          hint="Your legal name as it should appear on certification."
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="amara@domain.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          hint="We will send your placement briefing and cohort schedule here."
        />

        {/* Auth method toggle */}
        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-muted">AUTHENTICATION METHOD</span>
            <button
              type="button"
              onClick={() => {
                setAuthMode(authMode === 'password' ? 'otp' : 'password')
                setError('')
              }}
              className="text-gold hover:underline cursor-pointer"
            >
              {authMode === 'password' ? 'Use One-Time Code (OTP)' : 'Use Password'}
            </button>
          </div>

          {authMode === 'password' ? (
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError('')
              }}
              hint="Minimum 6 characters."
            />
          ) : (
            <div className="space-y-2">
              <OtpInput
                length={6}
                label="Verification Code (SMS / Email)"
                value={otpCode}
                onChange={(val) => {
                  setOtpCode(val)
                  if (error) setError('')
                }}
              />
              <p className="text-xs font-mono text-muted">
                Sent to your email. Enter any 6-digit code for testing.
              </p>
            </div>
          )}
        </div>

        {error && (
          <div className="p-3 rounded-card bg-surface border border-danger/40 text-danger text-xs font-body">
            {error}
          </div>
        )}

        <div className="pt-3">
          <Button variant="primary" size="default" fullWidth type="submit">
            Create Account & Enroll
          </Button>
        </div>

        <p className="text-center text-xs text-muted font-body">
          By continuing, you agree to Wedin&apos;s Cohort Honor Code and Terms of Service.
        </p>
      </form>
    </div>
  )
}
