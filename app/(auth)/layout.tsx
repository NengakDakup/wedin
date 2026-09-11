import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication — Wedin',
  description: 'Sign in or create your learner profile on Wedin.',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
