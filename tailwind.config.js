/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0a0a',
        'dark-blue': '#0f172a',
        'terminal-green': '#4ade80',
        'neon-blue': '#38bdf8',
        'neon-purple': '#a855f7',
        'neon-pink': '#ec4899',
        'slate-code': '#1e293b',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'monospace'],
        sans: ['var(--font-geist-sans)', 'sans-serif'],
      },
      animation: {
        'text-gradient': 'text-gradient 3s ease infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'space-grid': 'linear-gradient(rgba(16, 24, 39, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 39, 0.8) 1px, transparent 1px)',
      },
      backgroundSize: {
        'space-grid': '40px 40px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 