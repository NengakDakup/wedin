'use client'

import * as React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { StatusIcon } from '@/components/primitives/status-icon'
import { Button } from '@/components/primitives/button'
import { useLearner } from '@/lib/learner-context'

export default function RegistrationSuccessPage() {
  const { learner } = useLearner()
  const firstName = learner.name.trim().split(' ')[0] || 'Learner'

  return (
    <div className="flex flex-col items-center text-center space-y-8 py-6 select-none animate-toast-in">
      {/* Focal Status Icon with Glow Pulse */}
      <div className="pt-4">
        <StatusIcon
          icon={Check}
          variant="gold"
          withGlow
          size="lg"
        />
      </div>

      {/* Copy matching reference specification */}
      <div className="space-y-3 max-w-md">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink tracking-tight">
          Registration Successful
        </h1>
        <p className="font-body text-base text-muted leading-relaxed">
          Welcome to Wedin, {firstName}. Your journey to a world-class career starts now.
        </p>
      </div>

      {/* Actions */}
      <div className="w-full max-w-sm space-y-3 pt-4">
        <Link href="/app/dashboard" className="block w-full">
          <Button variant="primary" size="default" fullWidth>
            Go to Dashboard
          </Button>
        </Link>

        <Button
          variant="secondary"
          size="default"
          fullWidth
          onClick={() => alert('Profile builder is in active cohort phase.')}
        >
          Complete My Profile
        </Button>
      </div>
    </div>
  )
}
