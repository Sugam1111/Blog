const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {  
        'wt-sm': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        'wt': '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
        'wt-md': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'wt-lg': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'wt-xl': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
        'wt-2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'wt-3xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
        'wt-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      dropShadow: {
        'wt-sm': '0 1px 1px rgba(255, 255, 255, 0.05)',
        'wt': '0 1px 2px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(255, 255, 255, 0.06)',
        'wt-md': '0 4px 3px rgba(255, 255, 255, 0.07), 0 2px 2px rgba(255, 255, 255, 0.06)',
        'wt-lg': '0 10px 8px rgba(255, 255, 255, 0.04), 0 4px 3px rgba(255, 255, 255, 0.1)',
        'wt-xl': '0 20px 13px rgba(255, 255, 255, 0.03), 0 8px 5px rgba(255, 255, 255, 0.08)',
        'wt-2xl': '0 25px 25px rgba(255, 255, 255, 0.15)',
        'wt-3xl': '0 35px 35px rgba(255, 255, 255, 0.25)',
        'wt-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
         'neural-code': "url('/static/images/neural-code.jpg')",
         'stars': "url('/static/images/stars.jpg')",
         'mac-os-dark': "url('/static/images/mac-os-dark.jpg')",
         'mac-os-light': "url('/static/images/mac-os-light.jpg')",
         'mac-os-lava': "url('/static/images/mac-os-lava.jpg')",
         'mac-os-sand': "url('/static/images/mac-os-sand.jpg')",
         'light-gradient': "url('/static/images/light-gradient.jpg')",
      },
      spacing: {
        '9/16': '56.25%',
      },
      zIndex: {
       '-10': '-10',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.violet,
        secondary: colors.yellow,
        gray: colors.trueGray,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.800'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.pink.400'),
              backgroundColor: theme('colors.gray.700'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.secondary.400'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.secondary.300'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
