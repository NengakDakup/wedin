import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: '#0A0A0A',
                surface: '#161412',
                border: '#2B2620',
                gold: '#E8B94D',
                ink: '#F5F2EA',
                muted: '#948E7E',
                // Semantic colors (tailored for dark obsidian theme)
                success: '#4EAA78',
                danger: '#E05A47',
                warning: '#E5953C',
                info: '#5EA5C6',
            },
            fontFamily: {
                display: ['var(--font-display)'],
                body: ['var(--font-body)'],
                mono: ['var(--font-mono)'],
            },
            borderRadius: {
                pill: '9999px',
                card: '20px',
                input: '14px',
            },
            boxShadow: {
                glow: '0 0 40px rgba(232, 185, 77, 0.25)',
                'glow-success': '0 0 40px rgba(78, 170, 120, 0.25)',
                'glow-danger': '0 0 40px rgba(224, 90, 71, 0.25)',
                'glow-warning': '0 0 40px rgba(229, 149, 60, 0.25)',
                'glow-info': '0 0 40px rgba(94, 165, 198, 0.25)',
            },
        },
    },
    plugins: [],
}

export default config