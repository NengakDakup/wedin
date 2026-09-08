import React from 'react'

interface LogoProps {
  className?: string
  size?: number
}

// 1. PAYSTACK: Iconic Cyan Dual-Bar Developer Payments Symbol
export function PaystackLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#00C3F7" fillOpacity="0.15" />
      <path
        d="M8 9H24M8 16H18M8 23H24"
        stroke="#00C3F7"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 2. MONIEPOINT: Signature Electric Blue M Monogram with Yellow Dot
export function MoniepointLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#0357EE" />
      <path
        d="M8 22V10L13.5 17.5L19 10V22"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="2.2" fill="#FFC727" />
    </svg>
  )
}

// 3. FLUTTERWAVE: Iconic Wave Loop Ribbon in Orange & Coral
export function FlutterwaveLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#FB9129" fillOpacity="0.15" />
      <path
        d="M7 11C10 7 17 7 21 12C24 16 23 22 18 24C13 26 8 21 10 16C12 11 20 9 25 13"
        stroke="#FB9129"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 20C12 17 18 15 22 19"
        stroke="#FF5A5F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 4. PIGGYVEST: Signature Indigo Squircle with Chevron Arrow-P
export function PiggyvestLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#0D60D8" />
      <path
        d="M10 23V9H16.5C19 9 21 10.8 21 13.2C21 15.6 19 17.4 16.5 17.4H10"
        stroke="#FFFFFF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13.5L19 16.5"
        stroke="#22D3EE"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 5. KUDA BANK: Iconic Regal Purple with Geometric K & Emerald Dot
export function KudaLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#40196D" />
      <path
        d="M10 8V24M10 16L19 8M13 13.5L20 24"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="24" r="1.8" fill="#00D394" />
    </svg>
  )
}

// 6. OPAY: Emerald Green Ring with Center Node
export function OpayLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#14B566" fillOpacity="0.15" />
      <circle cx="16" cy="16" r="11" stroke="#14B566" strokeWidth="3.4" />
      <circle cx="16" cy="16" r="4.5" fill="#14B566" />
    </svg>
  )
}

// 7. NOMBA: Golden Yellow Squircle with Sleek Geometric Mark
export function NombaLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#FFC800" />
      <path
        d="M9 22V10L23 22V10"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// 8. COWRYWISE: Deep Azure Blue with Precision Cowrie Shell Curves
export function CowrywiseLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#0066F5" />
      <path
        d="M16 8C11.5 8 8 11.5 8 16C8 20.5 11.5 24 16 24C20.5 24 24 20.5 24 16C24 11.5 20.5 8 16 8Z"
        stroke="#FFFFFF"
        strokeWidth="2.4"
      />
      <path
        d="M16 11V21M12 16H20"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
