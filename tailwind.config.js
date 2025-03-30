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
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 15s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'shine': 'shine 2s forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
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
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0) translateX(0)',
            opacity: 0.3,
          },
          '25%': {
            transform: 'translateY(-10px) translateX(5px)',
            opacity: 0.8,
          },
          '50%': {
            transform: 'translateY(0) translateX(10px)',
            opacity: 0.5,
          },
          '75%': {
            transform: 'translateY(10px) translateX(5px)',
            opacity: 0.8,
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: 0.8,
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.6), 0 0 30px rgba(56, 189, 248, 0.4), 0 0 45px rgba(56, 189, 248, 0.2)',
          },
          '50%': {
            opacity: 1,
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(56, 189, 248, 0.6), 0 0 60px rgba(56, 189, 248, 0.4)',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: 0.3,
          },
          '50%': {
            opacity: 0.7,
          },
        },
        'shine': {
          'from': {
            left: '-100%',
          },
          'to': {
            left: '100%',
          }
        },
        'blink': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
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