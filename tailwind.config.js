import { breakpoints } from './utils/breakpoints'
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./**/*.vue', './composables/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      gray: colors.trueGray,
      primary: {
        DEFAULT: '#1D2F2F',
        hover: '#4D7D7D',
        inverse: '#fff'
      },
      secondary: {
        DEFAULT: '#6A9E9C',
        hover: '#29706D',
        inverse: '#fff'
      },
      tertiary: {
        DEFAULT: '#E0D6B7',
        hover: '#C6BB9A',
        inverse: '#000'
      },
      black: '#000',
      white: '#fff',
      focus: '#6c9cde',
      error: '#d00f26',
      success: '#89D27D',
      transparent: 'transparent'
    },
    fontFamily: {
      primary: 'Favorit Std',
      secondary: 'Favorit'
    },
    fontSize: {
      base: '1rem',
      h1: [
        'clamp(36px, 5vw, 90px)',
        {
          lineHeight: '110%'
        }
      ],
      h2: ['clamp(32px, 3.34vw, 48px)'],
      h3: ['clamp(28px, 2.5vw, 36px)'],
      h4: ['clamp(24px, 2.1vw, 30px)'],
      h5: ['clamp(20px, 1.7vw, 24px)'],
      h6: ['clamp(18px, 1.4vw, 20px)'],
      body1: [
        '1.25rem',
        {
          lineHeight: '125%'
        }
      ],
      'body1-mobile': [
        '1rem',
        {
          lineHeight: '125%'
        }
      ],
      body2: [
        '1rem',
        {
          lineHeight: '140%'
        }
      ],
      'body2-mobile': [
        '0.9375rem',
        {
          lineHeight: '140%'
        }
      ],
      body3: ['0.875rem'],
      body4: ['0.75rem'],

      overline1: [
        '1.25rem',
        {
          letterSpacing: '1.2px'
        }
      ],
      'overline1-mobile': [
        '1.125rem',
        {
          letterSpacing: '2.4px'
        }
      ],
      overline2: [
        '1rem',
        {
          letterSpacing: '0.96px'
        }
      ],
      overline3: [
        '0.875rem',
        {
          letterSpacing: '1px'
        }
      ],

      button: [
        '0.875rem',
        {
          letterSpacing: '1.4px'
        }
      ],

      nav: [
        '1rem',
        {
          lineHeight: '150%'
        }
      ]
    },
    boxShadow: {
      medium: '0px 4px 24px 0px rgba(0,0,0,0.12)',
      light: '0px 4px 8px 0px rgba(0,0,0,0.05)'
    },
    screens: {
      ...breakpoints
    },
    extend: {
      minHeight: {
        safari: 'calc(0vw)'
      },
      transitionTimingFunction: {
        intro: 'cubic-bezier(0, 0.01, 0, 1)',
        hover: 'cubic-bezier(0.88, 0.00, 0.35, 0.99)'
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
