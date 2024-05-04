import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6CbC5C',
        secondary: '#3F4A3C',
        tertiary1: '#A3AF9E',
        tertiary2: '#00C0F7',
      },
    },
  },
  plugins: [],
}
export default config
