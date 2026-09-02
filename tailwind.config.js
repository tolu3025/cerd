/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f9f9f6',
        surface: '#ffffff',
        dark: '#0a0a0a',
        'cerd-blue': '#1a2bc3',
        'cerd-blue-dark': '#142196',
        'cerd-cyan': '#0099ff',
        body: '#4a4a4a',
        muted: '#71717a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        ui: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -4px rgba(0,0,0,0.08)',
        button: '0 4px 14px rgba(26,43,195,0.25)',
        soft: '0 4px 20px -2px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '10px',
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}
