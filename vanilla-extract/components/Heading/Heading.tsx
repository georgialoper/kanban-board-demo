import React, { ElementType } from 'react'

import Box, { BoxDefaultProps, BoxStylingProps } from '../Box/Box'
import { Atoms } from '../../styles/sprinkles.css'

type HeadingLevel = '1' | '2' | '3' | '4' | '5'

type HeadingDefaultProps = {
  tagLevel: HeadingLevel
  styleLevel?: HeadingLevel
  styles?: BoxStylingProps
}

type HeadingProps = HeadingDefaultProps & BoxDefaultProps

type LevelStyleProps = {
  fontSize: Atoms['fontSize']
  fontWeight: Atoms['fontWeight']
  lineHeight: Atoms['lineHeight']
}

type ILevelStyles = {
  [key in HeadingLevel]: LevelStyleProps
}

const levelStyles: ILevelStyles = {
  '1': {
    fontSize: { mobile: 'x2', tablet: 'x3' },
    fontWeight: "semibold",
    lineHeight: { mobile: 'x3', tablet: 'x3' }
  },
  '2': {
    fontSize: { mobile: 'xl', tablet: 'x2' },
    fontWeight: "semibold",
    lineHeight: { mobile: 'x2', tablet: 'x2' }
  },
  '3': {
    fontSize: { mobile: 'ml', tablet: 'l' },
    fontWeight: "semibold",
    lineHeight: { mobile: 'l', tablet: 'l' }
  },
  '4': {
    fontSize: { mobile: 's', tablet: 'ml' },
    fontWeight: "regular",
    lineHeight: { mobile: 's', tablet: 'ml' }
  },
  '5': {
    fontSize: { mobile: 's', tablet: 's' },
    fontWeight: "regular",
    lineHeight: { mobile: 's', tablet: 's' }
  }
}

const Heading = ({
  tagLevel = '1',
  styleLevel = tagLevel,
  styles,
  ...nativeProps
}: HeadingProps) => {
  const TAG_LEVEL = `h${tagLevel}` as ElementType

  const headingStyles = (level: HeadingLevel): BoxStylingProps => {
    const stylesForLevel = levelStyles[level]
    return {
      fontSize: stylesForLevel.fontSize,
      fontWeight: stylesForLevel.fontWeight,
      lineHeight: stylesForLevel.lineHeight,
    } as const
  }

  return (
    <Box
      color="white"
      fontFamily='heading'
      {...headingStyles(styleLevel)}
      tag={TAG_LEVEL}
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Heading.displayName = 'Heading'

export default Heading