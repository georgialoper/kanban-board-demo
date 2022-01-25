import React, {
  AllHTMLAttributes,
  ElementType,
  forwardRef,
  ReactNode,
} from 'react'

import clsx from 'clsx'

// The order of these imports is important to ensure the classes
// are applied in the correct order
// https://github.com/seek-oss/vanilla-extract/discussions/301
import * as resetStyles from '../../styles/reset.css'
import { atoms, Atoms } from './../../styles/sprinkles.css'

export type BoxStylingProps = {
  background?: Atoms['background']
  color?: Atoms['color']
  cursor?: Atoms['cursor']
  fontFamily?: Atoms['fontFamily']
  fontSize?: Atoms['fontSize']
  fontWeight?: Atoms['fontWeight']
  height?: Atoms['height']
  lineHeight?: Atoms['lineHeight']
  textAlign?: Atoms['textAlign']
  width?: Atoms['width']
}

export type BoxStylingMarginProps = {
  margin?: Atoms['margin']
  marginX?: Atoms['marginX']
  marginY?: Atoms['marginY']
  marginTop?: Atoms['marginTop']
  marginBottom?: Atoms['marginBottom']
  marginLeft?: Atoms['marginLeft']
  marginRight?: Atoms['marginRight']
}

export type BoxStylingPaddingProps = {
  padding?: Atoms['padding']
  paddingX?: Atoms['paddingX']
  paddingY?: Atoms['paddingY']
  paddingTop?: Atoms['paddingTop']
  paddingBottom?: Atoms['paddingBottom']
  paddingLeft?: Atoms['paddingLeft']
  paddingRight?: Atoms['paddingRight']
}

export type BoxAttributeProps = Omit<
  AllHTMLAttributes<HTMLElement>,
  | 'color'
  | 'height'
  | 'width'
  | 'className'
>

export type BoxDefaultProps = {
  className?: string
  children?: ReactNode
  tag?: ElementType
} & BoxAttributeProps

export type BoxProps = BoxStylingProps &
  BoxStylingMarginProps &
  BoxStylingPaddingProps &
  BoxDefaultProps &
  BoxAttributeProps

const Box = forwardRef(
  ({ className, tag = 'div', ...props }: BoxProps, ref) => {
    const atomProps: Record<string, unknown> = {}
    const nativeProps: Record<string, unknown> = {}

    for (const key in props) {
      if (atoms.properties.has(key as keyof Atoms)) {
        atomProps[key] = props[key as keyof typeof props]
      } else {
        nativeProps[key] = props[key as keyof typeof props]
      }
    }

    const atomClasses = atoms({
      ...atomProps,
    })

    const classes = className
      ? `${className}${atomClasses ? ` ${atomClasses}` : ''}`
      : atomClasses

    const classesWithReset = clsx(
      classes,
      resetStyles.elementStyles[tag as keyof typeof resetStyles.elementStyles]
    )
    const Tag = tag

    return (
      <Tag
        className={classesWithReset}
        ref={ref}
        {...nativeProps}
      >
        {nativeProps.children}
      </Tag>
    )
  }
)

Box.displayName = 'Box'

export default Box
