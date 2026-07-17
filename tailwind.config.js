/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        biker: {
          black: '#0a0a0a',
          dark: '#121212',
          gray: '#1e1e1e',
          light: '#2a2a2a',
          accent: '#ff6b35',
          orange: '#ff8c42',
          yellow: '#ffd700',
          red: '#dc2626',
          gold: '#d4af37',
          silver: '#c0c0c0',
          bronze: '#cd7f32',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'biker-gradient': 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffd700 100%)',
        'biker-dark': 'linear-gradient(180deg, #121212 0%, #0a0a0a 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-strong': '0 0 40px rgba(255, 107, 53, 0.5)',
      },
    },
  },
  plugins: [],
}
