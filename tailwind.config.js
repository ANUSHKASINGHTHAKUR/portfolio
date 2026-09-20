/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070a0f',
          card: '#0d131e',
          cardBorder: '#1e293b',
          emerald: '#00ff9d',
          emeraldDark: '#059669',
          cyan: '#06b6d4',
          cyanGlow: 'rgba(6, 182, 212, 0.2)',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          text: '#e2e8f0',
          muted: '#94a3b8',
          darkMuted: '#1e293b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'cyber-emerald': '0 0 25px -5px rgba(0, 255, 157, 0.3)',
        'cyber-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'cyber-glow': '0 0 15px rgba(0, 255, 157, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'cyber-gradient': 'radial-gradient(ellipse at top, rgba(16, 185, 129, 0.15), rgba(7, 10, 15, 0.95))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
