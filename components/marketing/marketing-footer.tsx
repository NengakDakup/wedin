'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronDown,
  Check,
} from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  )
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export function MarketingFooter() {
  const [langOpen, setLangOpen] = React.useState(false)
  const [selectedLang, setSelectedLang] = React.useState('English (Global / International)')

  const languages = [
    'English (Global / International)',
    'English (United States & Canada)',
    'English (United Kingdom & Europe)',
    'English (Asia-Pacific & Remote)',
    'English (Africa & Middle East)',
  ]

  return (
    <footer className="pt-2 pb-10 px-2.5 sm:px-4 lg:px-6 w-full transition-colors duration-200">
      {/* Full-Width Floating Rounded Card Container with Website Gold Styling */}
      <div className="rounded-[32px] sm:rounded-[44px] bg-surface border border-border/80 p-8 sm:p-14 lg:p-16 shadow-xs text-ink space-y-12 w-full transition-colors">
        {/* Top Row: Brand Logo & Tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Custom Brand Logo Glyph in Gold */}
            <div className="w-8 h-8 relative flex items-center justify-center text-gold group-hover:scale-105 transition-transform duration-200">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="13"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="2 3"
                  className="opacity-35"
                />
                <path
                  d="M11 11C8.24 11 6 13.24 6 16C6 18.76 8.24 21 11 21C14.5 21 17.5 11 21 11C23.76 11 26 13.24 26 16C26 18.76 23.76 21 21 21C17.5 21 14.5 11 11 11Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="11" cy="16" r="1.5" fill="currentColor" />
                <circle cx="21" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-body font-bold text-2xl tracking-tight text-ink group-hover:text-gold transition-colors">
              wedin
            </span>
          </Link>

          <p className="font-body text-xs sm:text-sm text-muted">
            The closed-loop talent infrastructure for African tech.
          </p>
        </div>

        {/* Middle Row: Navigation Columns & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Column 1: Career Tracks (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-body font-semibold text-sm text-ink tracking-tight">
              Career Tracks
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body text-muted">
              <li>
                <a href="#tracks" className="hover:text-gold transition-colors">
                  Full-Stack AI Systems
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-gold transition-colors">
                  Distributed Cloud Architecture
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-gold transition-colors">
                  Senior Product Engineering
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-gold transition-colors">
                  Data Systems & Analytics
                </a>
              </li>
              <li>
                <a href="#closed-loop" className="hover:text-gold transition-colors">
                  Virtual Enterprise Internship
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform & Placement (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-body font-semibold text-sm text-ink tracking-tight">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body text-muted">
              <li>
                <Link href="/onboarding" className="hover:text-gold transition-colors">
                  10-Minute Diagnostic Assessment
                </Link>
              </li>
              <li>
                <a href="#closed-loop" className="hover:text-gold transition-colors">
                  The Closed Loop Stepper
                </a>
              </li>
              <li>
                <a href="#toolkit" className="hover:text-gold transition-colors">
                  Cryptographic ATS Proof Engine
                </a>
              </li>
              <li>
                <a href="#employers" className="hover:text-gold transition-colors">
                  72-Hour Employer Pipeline
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-gold transition-colors">
                  Transparent Tuition & Installments
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Campus (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-body font-semibold text-sm text-ink tracking-tight">
              Contact & Campus
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-body text-muted">
              <a
                href="mailto:hello@wedincareers.io"
                className="flex items-center gap-3 group hover:text-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 text-gold flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@wedincareers.io</span>
              </a>

              <a
                href="mailto:admissions@wedincareers.io"
                className="flex items-center gap-3 group hover:text-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 text-gold flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <span>admissions@wedincareers.io</span>
              </a>

              <a
                href="tel:+2348009334633"
                className="flex items-center gap-3 group hover:text-gold transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 text-gold flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+234 (0) 800 933 4633</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 text-gold flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>San Francisco · London · Lagos · Toronto</span>
              </div>
            </div>
          </div>

          {/* Column 4: Region Selector & Social Media (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="font-body font-semibold text-sm text-ink tracking-tight">
                Region & Community
              </h4>

              {/* Language / Region Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full sm:w-auto min-w-[200px] h-10 px-3.5 rounded-xl bg-surface border border-border/90 hover:border-gold/60 text-ink text-xs font-body font-medium flex items-center justify-between gap-2.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gold" />
                    <span>{selectedLang}</span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-muted transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                </button>

                {langOpen && (
                  <div className="absolute top-12 left-0 right-0 sm:right-auto sm:w-64 bg-surface border border-border rounded-xl shadow-xl p-1.5 z-50 text-xs font-body space-y-0.5">
                    {languages.map(lang => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setSelectedLang(lang)
                          setLangOpen(false)
                        }}
                        className="w-full px-3 py-2 rounded-lg text-left text-ink hover:bg-bg flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span>{lang}</span>
                        {selectedLang === lang && <Check className="w-3.5 h-3.5 text-gold" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Media Icon Row in Website Styling */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg border border-border/80 bg-surface hover:border-gold hover:text-gold text-muted flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg border border-border/80 bg-surface hover:border-gold hover:text-gold text-muted flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg border border-border/80 bg-surface hover:border-gold hover:text-gold text-muted flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg border border-border/80 bg-surface hover:border-gold hover:text-gold text-muted flex items-center justify-center transition-all shadow-2xs cursor-pointer"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Theme Toggle */}
            <div className="pt-2">
              <ThemeToggle showLabel={true} />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & English Legal Links */}
        <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-muted">
          <div>
            © {new Date().getFullYear()} Wedin Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <Link href="/" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
            <Link href="/" className="hover:text-gold transition-colors">
              Honor Code & Verification
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
