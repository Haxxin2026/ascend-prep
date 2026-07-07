import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#120f0b',
        ink2: '#1b1610',
        card: '#201a12',
        line: '#3a2b1e',
        copper: '#c45c34',
        copper2: '#e07a4a',
        cream: '#fff8eb',
        muted: '#aa977f',
        moss: '#a6c484'
      },
      boxShadow: {
        glow: '0 0 60px rgba(196, 92, 52, 0.24)',
        card: '0 24px 80px rgba(0,0,0,.35)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      backgroundImage: {
        'radial-copper': 'radial-gradient(circle at 30% 20%, rgba(196,92,52,.24), transparent 32%), radial-gradient(circle at 80% 0%, rgba(224,122,74,.16), transparent 28%)'
      }
    }
  },
  plugins: []
};
export default config;
