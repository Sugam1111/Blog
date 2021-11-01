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
        wt: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
        'wt-md':
          '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'wt-lg':
          '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'wt-xl':
          '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
        'wt-2xl': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        'wt-3xl': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
        'wt-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      dropShadow: {
        'wt-sm': '0 1px 1px rgba(255, 255, 255, 0.05)',
        wt: '0 1px 2px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(255, 255, 255, 0.06)',
        'wt-md': '0 4px 3px rgba(255, 255, 255, 0.07), 0 2px 2px rgba(255, 255, 255, 0.06)',
        'wt-lg': '0 10px 8px rgba(255, 255, 255, 0.04), 0 4px 3px rgba(255, 255, 255, 0.1)',
        'wt-xl': '0 20px 13px rgba(255, 255, 255, 0.03), 0 8px 5px rgba(255, 255, 255, 0.08)',
        'wt-2xl': '0 25px 25px rgba(255, 255, 255, 0.15)',
        'wt-3xl': '0 35px 35px rgba(255, 255, 255, 0.25)',
        'wt-inner': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'neural-code': "url('/static/images/neural-code.jpg')",
        stars: "url('/static/images/stars.jpg')",
        'texture-light': "url('https://www.transparenttextures.com/patterns/foggy-bird.png')",
        'texture-dark': "url('https://www.transparenttextures.com/patterns/clean-textile.png')",
        'light-gradient': "url('/static/images/light-gradient.jpg')",
      },
      backgroundColor: {
        primary: '#e14eca',
        'primary-dark': '#c221a9',
        secondary: '#f4f5f7',
        'secondary-light': '#e3e3e3',
        'light-bg': '#f5f6fa',
        'dark-bg': '#1e1e2f',
        'dark-card': '#27293d',
        'dark-card-light': '#525f7f',
        'light-card': '#ffffff',
        'light-title': '#1d253b',
        'muted-dark': '#6c757d',
        'light-hover': '#dee1e6',
        'blue-ct': '#5e72e4',
        'indigo-ct': '#5603ad',
        'purple-ct': '#8965e0',
        'pink-ct': 'efa3e3',
        'baby-pink-ct': '#f3a4b5',
        'pink-light-ct': '#f7cdf0',
        'red-ct': '#f5365c',
        'orange-ct': '#fb6340',
        'yellow-ct': '#ffd600',
        'green-ct': '#2dce89',
        'teal-ct': '#11cdef',
        'cyan-ct': '#2bffc6',
      },
      spacing: {
        '9/16': '56.25%',
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
        primary: '#e14eca',
        'primary-dark': '#c221a9',
        secondary: '#f4f5f7',
        'dark-border': '#e3e3e3',
        'light-bg': '#f5f6fa',
        'dark-bg': '#1e1e2f',
        'dark-card': '#27293d',
        'dark-card-light': '#525f7f',
        'light-card': '#ffffff',
        'light-title': '#1d253b',
        'dark-title': '#ffffff',
        'dark-subtitle': '#9a9a9a',
        'muted-dark': '#6c757d',
        'light-hover': '#dee1e6',
        'blue-ct': '#5e72e4',
        'indigo-ct': '#5603ad',
        'purple-ct': '#8965e0',
        'pink-ct': '#efa3e3',
        'baby-pink-ct': '#f3a4b5',
        'pink-light-ct': '#f7cdf0',
        'red-ct': '#f5365c',
        'orange-ct': '#fb6340',
        'yellow-ct': '#ffd600',
        'green-ct': '#2dce89',
        'teal-ct': '#11cdef',
        'cyan-ct': '#2bffc6',
        gray: colors.trueGray,
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
              color: theme('colors.primary'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary-dark'),
              },
              code: { color: theme('colors.primary') },
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
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
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
              color: theme('colors.primary'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.pink-ct'),
              },
              code: { color: theme('colors.primary') },
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
    fontWeight: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
