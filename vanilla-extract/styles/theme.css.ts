import { createGlobalTheme } from '@vanilla-extract/css'

const colors = {
  primary: "#00A19A",
  secondary: "#00807B",
  tertiary: "#00625F",
  accent: "#E6B658",
  lightGrey: "#F3F3F3",
  mediumGrey: "#C2C2C2",
  darkGrey: "#757575",
  black: "#222929",
  white: "#FFFFFF",
  focus: "blue"
}

export const space = {
  '-m': '-1rem',
  '-s': '-0.75rem',
  '-xs': '-0.5rem',
  auto: 'auto',
  none: '0',
  xs: '0.5rem',
  s: '0.75rem',
  m: '1rem',
  l: '1.5rem',
  x2: '2rem',
  x3: '3rem',
}

export const vars = createGlobalTheme(':root', {
  color: colors,
  elementSize: {
    auto: 'auto',
    none: '0',
    third: '33.33%',
    max: '100%',
  },
  font: {
    heading: 'Montserrat, Helvetica Neue, Roboto, sans-serif',
    body: 'Helvetica Neue, Roboto, sans-serif',
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
    },
    size: {
      xs: '0.875rem',//14px
      s: '0.938',//15px
      m: '1rem',//16px
      ml: '1.125',//18px
      l: '1.25',//20px
      xl: '1.5rem',//24px
      x2: '2rem',//32px
      x3: '3rem',//48px
    },
    lineHeight: {
      xs: '1.5rem',//24px
      s: '1.5rem',//24px
      m: '1.5rem',//24px
      ml: '1.5rem',//24px
      l: '2rem',//32px
      xl: '2rem',//32px
      x2: '3rem',//48px
      x3: '4rem'//64px
    },
  },
  outline: {
    focus: `2px solid ${colors.focus}`,
    none: '0'
  },
  space: space
})
