// Theme / Design system:

// Types
type ThemeShape = {
  breakpoints: string[]
  mq: {
    [key: string]: string
  }
  initialColorModeName?: string
  useColorSchemeMediaQuery?: boolean
  useBodyStyles?: boolean
  useRootStyles?: boolean
  useLocalStorage?: boolean
  colors: {
    [key: string]: string
  }
  space: string[]
  gutter: {
    [key: string]: string | number | number[]
  }
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  fontWeights: {
    [key: string]: number
  }
  buttons: {
    [key: string]: {
      [key: string]: any
    }
  }
  strokeWidth: string
  maxWidth: string
  siteWidth: string
  logoHeight: string
  headerHeight: string
  tickerHeight: string
  iconWidth: string
  grid: {
    [key: string]: string
  }
  transition: {
    [key: string]: string
  }
  transform: {
    matrix: {
      [key: string]: string
    }
  }
  border: string
  borderRadius: string
  shadow: string
  root: {
    mouseX: string
    mouseY: string
    font: {
      [key: string]: string
    }
    space: {
      [key: string]: string
    }
  }
}

// Begin theme
const breakpoints: string[] = ['800px', '1280px']
// Aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  // ___________________________________________________________________

  breakpoints,
  mq: {
    tablet: `(min-width: ${breakpoints[0]})`,
    desktop: `(min-width: ${breakpoints[1]})`,
  },

  // Color palette
  // ___________________________________________________________________

  colors: {
    text: '#000000',
    background: '#EEEEEE',

    primary: 'hsla(198, 39%, 59%, 1)',
    secondary: '#e52a63',
    tertiary: '#34FFDD',
    muted: '#DBDBDB',

    black: '#000000',
    white: '#ffffff',
    gray: '#AEAEAE',
  },

  // Space
  // ___________________________________________________________________

  space: [
    '0', // 0
    'var(--space-xxs)', // 1
    'var(--space-xs)', // 2
    'var(--space-sm)', // 3
    'var(--space-md)', // 4
    'var(--space-lg)', // 5
    'var(--space-xl)', // 6
    'var(--space-xxl)', // 7
    '7rem', // 8
    '10rem', // 9
    '12rem', // 10
    '14rem', // 11
    '16rem', // 12
    '18rem', // 13
  ],

  // Left/Right gutter
  gutter: {
    mobile: 2,
    tablet: 2,
    desktop: 2,
    space: 2,
    vertical: [2],
    axis: [2],
  },

  // Typography
  // ___________________________________________________________________

  fonts: {
    body: `"Aeonik", Arial, Liberation Mono, Menlo, Courier, monospace`,
    heading: `"Aeonik", Arial, Liberation Mono, Menlo, Courier, monospace`,
    sans: `"Aeonik", Arial, Liberation Mono, Menlo, Courier, monospace`,
    mono: `"DMMono", Consolas, Liberation Mono, Menlo, Courier, monospace`,
  },

  fontSizes: [
    'var(--text-xs)', // 0
    'var(--text-sm)', // 1
    'var(--text-base-size)', // 2
    'var(--text-md)', // 3
    'var(--text-lg)', // 4
    'var(--text-xl)', // 5
    'var(--text-xxl)', // 6
    'var(--text-xxxl)', // 7
  ],

  fontWeights: {
    light: 300,
    regular: 400,
    book: 500,
    medium: 600,
    bold: 700,
  },

  strokeWidth: '2px',

  // Button
  // ___________________________________________________________________

  buttons: {
    primary: {
      bg: 'primary',
      color: 'black',
      borderRadius: 0,
      cursor: 'pointer',
      fontSize: 3,
      fontWeight: 700,
      py: 3,
      px: 4,
      transition: 'all 0.11s ease-in-out 0s',
      '&:hover': {
        bg: 'black',
        color: 'white',
      },
    },
    secondary: {
      bg: 'transparent',
      color: 'text',
      border: '1px solid',
      borderColor: 'text',
      borderRadius: 0,
      cursor: 'pointer',
      fontSize: 3,
      fontWeight: 700,
      py: 3,
      px: 4,
      '&:hover': {
        bg: 'black',
        color: 'white',
      },
    },
  },

  // Constants
  // ___________________________________________________________________

  maxWidth: '100%',
  siteWidth: '100%',
  logoHeight: '47px',
  headerHeight: '240px',
  tickerHeight: '56px',
  iconWidth: '18px',

  // Base
  // ___________________________________________________________________

  grid: {
    gap: '0.5rem',
  },

  transition: {
    all: 'all 0.25s ease-in-out 0s',
    global: '0.25s ease-in-out 0s',
  },

  transform: {
    matrix: {
      from: 'matrix(1, 0, 0, 1, 24, 0)',
      to: 'matrix(1, 0, 0, 1, 0, 0)',
    },
  },

  border: '2px solid #000000',
  borderRadius: '999px',
  shadow: '2rem 1.5rem 1rem #9D9FA2',

  root: {
    mouseX: 'var(--mouse-x)',
    mouseY: 'var(--mouse-y)',
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',

      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',

      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)',

      // Letter spacing
      headingLetterSpacing: 'var(--heading-letter-spacing)',
      baseLetterSpacing: 'var(--body-letter-spacing)',
    },
    space: {
      xxs: 'var(--space-xxs)',
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
      md: 'var(--space-md)',
      lg: 'var(--space-lg)',
      xl: 'var(--space-xl)',
      xxl: 'var(--space-xxl)',
    },
  },
}

export default theme
