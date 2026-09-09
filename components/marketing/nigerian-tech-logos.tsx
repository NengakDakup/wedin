import React from 'react'

interface LogoProps {
  className?: string
  size?: number
}

// 1. STRIPE: Iconic Global Payments & Financial Infrastructure
export function StripeLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#635BFF" fillOpacity="0.15" />
      <path
        d="M17 10.5c-2.4 0-3.8 1.2-3.8 3.1 0 3.7 5.2 3.1 5.2 4.9 0 .8-.7 1.2-1.7 1.2-1.5 0-3.1-.7-4.3-1.6v3.7c1.4.6 3 1 4.5 1 2.7 0 4.3-1.3 4.3-3.2 0-3.9-5.2-3.2-5.2-5 0-.6.6-1 1.5-1 1.2 0 2.6.5 3.7 1.2V11.2c-1.2-.5-2.6-.7-4.2-.7z"
        fill="#635BFF"
      />
    </svg>
  )
}

// 2. VERCEL: Modern Triangular Cloud Deployment Symbol
export function VercelLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 8L25 24H7L16 8Z" fill="currentColor" />
    </svg>
  )
}

// 3. LINEAR: Precision Issue Tracking & Engineering Workflow Star
export function LinearLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#5E6AD2" fillOpacity="0.15" />
      <path
        d="M9.5 22.5L22.5 9.5M10.8 10.8C13.7 8 18.3 8 21.2 10.8C24 13.7 24 18.3 21.2 21.2C18.3 24 13.7 24 10.8 21.2"
        stroke="#5E6AD2"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// 4. OPENAI: Frontier AI Research & API Platform Glyph
export function OpenAILogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#10A37F" fillOpacity="0.15" />
      <path
        d="M16 7.5a4.2 4.2 0 0 0-3.6 2.1l-.8 1.4-1.6-.2a4.2 4.2 0 0 0-4.4 3.7c0 .5.1 1 .3 1.5l.8 1.4-1 1.3a4.2 4.2 0 0 0 .8 5.6c.4.3.9.5 1.4.6l1.6.2.2 1.6a4.2 4.2 0 0 0 4.1 3.4h.6l1.4-.8 1.3 1a4.2 4.2 0 0 0 5.6-.8c.3-.4.5-.9.6-1.4l.2-1.6 1.6-.2a4.2 4.2 0 0 0 3.4-4.1v-.6l-.8-1.4 1-1.3a4.2 4.2 0 0 0-.8-5.6 4.2 4.2 0 0 0-1.4-.6l-1.6-.2-.2-1.6a4.2 4.2 0 0 0-4.1-3.4H16z"
        stroke="#10A37F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="3" fill="#10A37F" />
    </svg>
  )
}

// 5. SUPABASE: Open Source Postgres & Realtime Backend Lightning
export function SupabaseLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#3ECF8E" fillOpacity="0.15" />
      <path
        d="M17.5 7L9 17.5H16L14.5 25L23 14.5H16L17.5 7Z"
        fill="#3ECF8E"
      />
    </svg>
  )
}

// 6. CLOUDFLARE: Global Edge Security & CDN Infrastructure
export function CloudflareLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#F38020" fillOpacity="0.15" />
      <path
        d="M22.5 19.5c.3-.5.5-1 .5-1.6 0-1.9-1.6-3.5-3.5-3.5-.4 0-.8.1-1.2.2C17.7 12.6 15.8 11 13.5 11c-2.8 0-5 2.2-5 5 0 .3 0 .7.1 1C7.5 17.3 6.7 18.3 6.7 19.5c0 1.4 1.1 2.5 2.5 2.5h13.3z"
        fill="#F38020"
      />
    </svg>
  )
}

// 7. DATADOG: Cloud Monitoring & Observability Platform
export function DatadogLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#632CA6" fillOpacity="0.15" />
      <path
        d="M11 9H17C20.5 9 23 11.5 23 15C23 18.5 20.5 21 17 21H11V9Z"
        stroke="#632CA6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="15" r="2" fill="#632CA6" />
    </svg>
  )
}

// 8. SHOPIFY: Global Commerce Platform
export function ShopifyLogo({ className = 'w-6 h-6', size }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      <rect width="32" height="32" rx="8" fill="#95BF47" fillOpacity="0.15" />
      <path
        d="M21.5 12L19.8 10.5C19.8 10.5 18.6 9 16.8 9C15.8 9 14.8 9.5 14.4 10.2L12 11.5L10 23L21 24.5L22.5 12.5L21.5 12Z"
        fill="#95BF47"
      />
      <path
        d="M16 11.5C15.5 11.5 15.2 11.8 15.2 12.2C15.2 12.8 17.5 13.5 17.5 15.2C17.5 16.5 16.5 17.5 15.2 17.5C14.2 17.5 13.5 17 13.2 16.2"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Legacy / Partner Aliases for backward compatibility
export const PaystackLogo = StripeLogo
export const MoniepointLogo = LinearLogo
export const FlutterwaveLogo = VercelLogo
export const PiggyvestLogo = SupabaseLogo
export const KudaLogo = OpenAILogo
export const OpayLogo = CloudflareLogo
export const NombaLogo = DatadogLogo
export const CowrywiseLogo = ShopifyLogo
