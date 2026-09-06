import * as React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export function MarketingFooter() {
  return (
    <footer className="bg-surface/50 border-t border-border/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="font-display font-bold text-2xl tracking-[0.16em] text-ink"
            >
              WEDIN
            </Link>
            <p className="font-mono text-xs tracking-widest text-gold uppercase">
              LEARN. GROW. GET HIRED.
            </p>
            <p className="font-body text-xs sm:text-sm text-muted max-w-sm leading-relaxed">
              The closed-loop train-and-place platform for African tech talent. Live project-based
              cohorts, verified public portfolios, and automated placement into tier-1 tech employers.
            </p>

            <div className="pt-2">
              <ThemeToggle showLabel={true} />
            </div>
          </div>

          {/* Curriculum Tracks Col */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-ink uppercase tracking-wider">
              Curriculum Tracks
            </div>
            <ul className="space-y-2 text-xs font-body text-muted">
              <li>
                <Link href="/onboarding" className="hover:text-gold transition-colors">
                  Full-Stack AI Systems
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-gold transition-colors">
                  Data Systems & Analytics
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-gold transition-colors">
                  Product Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-gold transition-colors">
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="hover:text-gold transition-colors">
                  Virtual Internship Workspace
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Toolkit & Placement Col */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-ink uppercase tracking-wider">
              Placement Engine
            </div>
            <ul className="space-y-2 text-xs font-body text-muted">
              <li>
                <a href="#toolkit" className="hover:text-gold transition-colors">
                  ATS CV Generator
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-gold transition-colors">
                  Per-Job CV Tailoring
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-gold transition-colors">
                  Verified Proof-of-Work
                </a>
              </li>
              <li>
                <a href="#employers" className="hover:text-gold transition-colors">
                  Employer Hiring Pipeline
                </a>
              </li>
              <li>
                <Link href="/kitchen-sink" className="hover:text-gold transition-colors">
                  Primitives Kitchen Sink
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Governance Col */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-ink uppercase tracking-wider">
              Governance
            </div>
            <ul className="space-y-2 text-xs font-body text-muted">
              <li>
                <span className="text-muted">Nigeria NDPR Compliant</span>
              </li>
              <li>
                <span className="text-muted">GDPR Data Protection</span>
              </li>
              <li>
                <span className="text-muted">Verified Cohort Honor Code</span>
              </li>
              <li>
                <span className="text-muted">Zero Fabricated Experience Policy</span>
              </li>
              <li>
                <span className="text-muted">Transparent Placement Terms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom micro-bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            © {new Date().getFullYear()} WEDIN CAREER PLATFORM. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>WAT / UTC+1</span>
            <span>LAGOS · LONDON · TORONTO</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
