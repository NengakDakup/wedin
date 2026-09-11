'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Eye,
  EyeOff,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'
import { Button } from '@/components/primitives/button'

function ResetPasswordForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const emailParam = searchParams.get('email') || 'your account'

  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirm, setShowConfirm] = React.useState(false)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify.')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 800)
  }

  if (isSuccess) {
    return (
      <div className="p-6 rounded-2xl bg-surface border border-border text-center space-y-4 animate-toast-in">
        <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h2 className="font-display text-xl font-bold text-ink">
            Password Successfully Updated
          </h2>
          <p className="text-xs font-body text-muted max-w-xs mx-auto">
            Your credentials have been securely updated. You can now sign in to your dashboard.
          </p>
        </div>
        <div className="pt-2">
          <Button
            onClick={() => router.push('/login')}
            fullWidth
            className="h-11 text-sm font-semibold"
          >
            Sign In with New Password
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-toast-in">
      <div className="p-3 rounded-xl bg-gold/10 border border-gold/25 text-xs text-ink font-body flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
        <span>
          Resetting password for <strong className="text-gold font-mono">{emailParam}</strong>
        </span>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-danger/10 border border-danger/30 flex items-center gap-2 text-xs text-danger font-body">
          <AlertCircle className="w-4 h-4 shrink-0 text-danger" />
          <span>{error}</span>
        </div>
      )}

      {/* New Password */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-ink font-body select-none">
          New Password
        </label>
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
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-ink font-body select-none">
          Confirm New Password
        </label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              if (error) setError('')
            }}
            className="w-full h-12 px-4 pr-11 bg-surface border border-border rounded-input text-ink font-body text-base placeholder:text-muted transition-colors focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors p-1 cursor-pointer"
            aria-label={showConfirm ? 'Hide password' : 'Show password'}
          >
            {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        fullWidth
        disabled={isLoading}
        className="h-12 text-sm font-semibold mt-3"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            Updating Credentials...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <span>Save New Password</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </Button>

      <div className="text-center pt-2">
        <Link
          href="/login"
          className="text-xs font-body text-muted hover:text-ink transition-colors"
        >
          Cancel and return to sign in
        </Link>
      </div>
    </form>
  )
}

export default function ResetPasswordPage() {
  return (
    <AuthShell
      activeTab="reset"
      heading="Set New Password"
      subheading="Choose a strong password with letters, numbers, and symbols to protect your account and capstone code."
    >
      <React.Suspense
        fallback={
          <div className="p-8 text-center text-xs text-muted font-mono">
            Loading reset parameters...
          </div>
        }
      >
        <ResetPasswordForm />
      </React.Suspense>
    </AuthShell>
  )
}
