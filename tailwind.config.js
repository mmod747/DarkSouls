/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'site-bg': "url('./src/imgs/bg-site.jpg')",
        'loading-bg': "url('./src/components/icons/game-console.svg')"
      }
    }
  },
  plugins: []
}
;('')
