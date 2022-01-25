import { vars, space } from './theme.css'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1200px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    background: vars.color,
    color: vars.color,
    fontSize: vars.font.size,
    fontWeight: vars.font.weight,
    height: vars.elementSize,
    lineHeight: vars.font.lineHeight,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    outline: vars.outline,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    textAlign: [
      'start',
      'end',
      'left',
      'right',
      'center',
      'justify',
      'match-parent'
    ],//https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
    width: vars.elementSize,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const unresponsiveStyles = defineProperties({
  properties: {
    cursor: ['default', 'pointer', 'not-allowed'],
    fontFamily: {
      body: vars.font.body,
      heading: vars.font.heading
    },
  },
})

export const atoms = createSprinkles(responsiveStyles, unresponsiveStyles)

export type Atoms = Parameters<typeof atoms>[0]
