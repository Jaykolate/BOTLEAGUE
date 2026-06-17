/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3B30', // Neon Red
          hover: '#E02E24',
          glow: 'rgba(255, 59, 48, 0.5)',
        },
        cyber: {
          bg: '#0A0A0E', // Deeper black/dark background
          card: '#14141C', // Dark grey panels
          border: '#22222E', // Subtle card borders
          text: '#F2F2F7', // Crisp off-white text
          muted: '#8E8E93', // Muted gray text
          yellow: '#FFCC00', // Cyber Yellow
          orange: '#FF9F0A', // Electric Orange
          blue: '#0A84FF', // Electric Blue
        }
      },
      fontFamily: {
        title: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-red': '0 0 12px rgba(255, 59, 48, 0.45), 0 0 24px rgba(255, 59, 48, 0.15)',
        'neon-yellow': '0 0 12px rgba(255, 204, 0, 0.45), 0 0 24px rgba(255, 204, 0, 0.15)',
        'neon-blue': '0 0 12px rgba(10, 132, 255, 0.45), 0 0 24px rgba(10, 132, 255, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

