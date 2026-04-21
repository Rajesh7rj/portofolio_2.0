const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        primary: {
          "50":  "#e6fff4",
          "100": "#b3ffdd",
          "200": "#80ffc6",
          "300": "#4dffaf",
          "400": "#1aff98",
          "500": "#00ff88",
          "600": "#00cc6d",
          "700": "#009952",
          "800": "#006636",
          "900": "#00331b",
        },
        dark: {
          "bg":      "#0a0a0a",
          "surface": "#111111",
          "card":    "#161616",
          "border":  "#2a2a2a",
          "muted":   "#888888",
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out both',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,255,136,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0,255,136,0.6)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': { color: theme('colors.primary.400') },
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
