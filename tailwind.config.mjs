/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        classic: {
          navy: '#1e3a5f',
          'navy-light': '#2d5aa0',
          'navy-dark': '#0f1419',
          cream: '#faf7f0',
          'cream-dark': '#f5f1e8',
          charcoal: '#2c3e50',
          'charcoal-light': '#34495e',
          gold: '#d4af37',
          'gold-light': '#f1c40f',
        }
      },
      typography: {
        classic: {
          css: {
            '--tw-prose-body': '#2c3e50',
            '--tw-prose-headings': '#1e3a5f',
            '--tw-prose-lead': '#34495e',
            '--tw-prose-links': '#2d5aa0',
            '--tw-prose-bold': '#1e3a5f',
            '--tw-prose-counters': '#34495e',
            '--tw-prose-bullets': '#34495e',
            '--tw-prose-hr': '#d4af37',
            '--tw-prose-quotes': '#34495e',
            '--tw-prose-quote-borders': '#d4af37',
            '--tw-prose-captions': '#34495e',
            '--tw-prose-code': '#1e3a5f',
            '--tw-prose-pre-code': '#faf7f0',
            '--tw-prose-pre-bg': '#1e3a5f',
            '--tw-prose-th-borders': '#d4af37',
            '--tw-prose-td-borders': '#f5f1e8',
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
