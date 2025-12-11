import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // EnthusiastRetro colors
        "primary-orange": "var(--primary-orange)",
        "primary-red": "var(--primary-red)",
        "primary-blue": "var(--primary-blue)",
        "primary-green": "var(--primary-green)",
        "background-main": "var(--background-main)",
        "background-dark": "var(--background-dark)",
        "accent-yellow": "var(--accent-yellow)",
        "accent-green-light": "var(--accent-green-light)",
        "accent-orange-deep": "var(--accent-orange-deep)",
        "accent-red-strong": "var(--accent-red-strong)",
        "background-sand": "var(--background-sand)",
      },
      fontFamily: {
        'heading': ['var(--font-heading)'],
        'body': ['var(--font-body)'],
        'numeric': ['var(--font-numeric)'],
      },
      fontSize: {
        'display': ['48px', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.04em' }],
        'h1': ['36px', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.03em' }],
        'h2': ['28px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' }],
        'h3': ['22px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.01em' }],
        'badge': ['12px', { lineHeight: '1', fontWeight: '700', letterSpacing: '0.08em' }],
      }
    },
  },
  plugins: [],
};
export default config;
