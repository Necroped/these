import { defineConfig, defineKeyframes } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    /*
     */
  ],

  // Where to look for your css declarations
  include: ['./inertia/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  patterns: {
    extend: {
      container: {
        properties: {
          variant: { type: 'enum', value: ['primary', 'secondary'] },
        },
        transform(props) {
          const { variant, ...rest } = props
          return {
            padding: 3,
            backgroundColor: variant,
            ...rest,
          }
        },
      },
    },
  },
  conditions: {
    light: '[data-theme=light] &',
    dark: '[data-theme=dark] &',
  },

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: defineKeyframes({
        checkbox_after: {
          '0%': {
            height: 0,
          },
          '100%': {
            height: 'calc(25px / 2)',
          },
        },
        checkbox_before: {
          '0%': {
            height: 0,
          },
          '50%': {
            height: 0,
          },
          '100%': {
            height: 'calc(25px / 1=.2)',
          },
        },
      }),
      tokens: {
        colors: {
          lightpink: {
            value: '#f5c6f7',
          },
          purple: {
            value: '#88527F',
          },
          darkest: {
            value: '#111',
          },
        },
        fonts: {
          body: { value: '"Darker Grotesque", sans-serif' },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: {
            _light: {
              value: '{colors.lightpink}',
            },
            _dark: {
              value: '{colors.purple}',
            },
          },
        },
        secondary: {
          value: {
            _light: {
              value: '{colors.purple}',
            },
            _dark: {
              value: '{colors.lightpink}',
            },
          },
        },
        dark: {
          value: '{colors.darkest}',
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'inertia/styled-system',

  jsxFramework: 'react',
})
