import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      "dark_slate_grey" : "#242742",
      'white': '#ffffff',
      "charcoal_grey": "#36384e",
      "my_grey":"#9294a0",
      "my_tomato":"#ff6257",
      "tomato_light":"#f8e8e7"
    },
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'roboto': ['Roboto',  "sans-serif"],
      'body': ['"Open Sans"'],
    }
  },
  plugins: [],
}
export default config
