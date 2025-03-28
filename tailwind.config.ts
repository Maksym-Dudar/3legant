import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        descriptiongrey: 'var(--descriptiongrey)',
        descriptionwhite: 'var(--descriptionwhite)',
        subtitel: 'var(--subtitel)',
        notactive: 'var(--notactive)',
        action: 'var(--action)',
        fotergray: 'var(--fotergray)',
        footerline: '#6C7275',
      },
      spacing:{
        '40%': '38%'
      },
    },
    backgroundColor: {
      black: '#141718',
      white: '#fff',
      green: '#38CB89',
    },
    borderWidth: {
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
    },
    fontSize:{
      'xl':['1rem',{
        lineHeight: '1.5rem',
        fontWeight: '400',
      }],
      '2xl':['1.5rem',{
        lineHeight: '1.5rem',
        fontWeight: '500',
      }],
      '4xl':['2.35rem',{
        lineHeight: '1.5rem',
        fontWeight: '500',
      }],
      '7xl':['4.5rem',{
        lineHeight: '4.7rem',
        fontWeight: '500',
      }],
      'bag':['0.75rem',{ //header
        lineHeight: '0.62rem',
        fontWeight: '700',
      }],
      'footersublogo':['0.85rem',{
        lineHeight: '1.4rem',
        fontWeight: '400',
      }],
      'footer':['0.75rem',{
        lineHeight: '1.25rem',
        fontWeight: '400',
      }]
    },
    fontFamily:{
      'inter': ['Inter']
    },
  },
  plugins: [],
} satisfies Config;
