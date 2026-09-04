// Wedin design tokens — mirrors tailwind.config.ts and app/globals.css.
// Supports both dark obsidian (default) and warm ivory light modes.

export const darkColors = {
  bg: '#0A0A0A',
  surface: '#161412',
  border: '#2B2620',
  gold: '#E8B94D',
  ink: '#F5F2EA',
  muted: '#948E7E',
  success: '#4EAA78',
  danger: '#E05A47',
  warning: '#E5953C',
  info: '#5EA5C6',
} as const

export const lightColors = {
  bg: '#F8F6F0',
  surface: '#FFFFFF',
  border: '#E2DDD4',
  gold: '#C28E1D',
  ink: '#151311',
  muted: '#7A7365',
  success: '#2E7D56',
  danger: '#C9402E',
  warning: '#BF6E16',
  info: '#357796',
} as const

// Default tokens match dark mode
export const colors = darkColors

export const radius = {
  pill: '9999px',
  card: '20px',
  input: '14px',
} as const

export const glow = '0 0 40px rgba(232, 185, 77, 0.25)'
export const glowLight = '0 0 35px rgba(194, 142, 29, 0.2)'