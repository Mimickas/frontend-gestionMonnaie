/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        sidebar: 'var(--sidebar)',
        card: 'var(--card)',
        'card-2': 'var(--card-2)',
        border: 'var(--border)',
        text: 'var(--text)',
        'text-2': 'var(--text-2)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        danger: 'var(--danger)',
        success: 'var(--success)',
        muted: 'var(--muted)',
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
      boxShadow: {
        theme: 'var(--shadow)',
      },
    },
  },
  plugins: [],
};
