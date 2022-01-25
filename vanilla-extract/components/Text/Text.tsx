import React from 'react'
import Box, { BoxDefaultProps, BoxStylingProps } from '../Box/Box'

type TextDefaultProps = {
  variant?: "body" | "micro"
  styles?: BoxStylingProps
}

export type TextProps = TextDefaultProps & BoxDefaultProps

const Text = ({
  variant = "body",
  styles,
  ...nativeProps
}: TextProps) => {

  return (
    <Box
      color={variant == "body" ? "black" : "mediumGrey"}
      fontFamily="body"
      fontWeight="regular"
      fontSize={{ mobile: "s", tablet: "m" }}
      tag="p"
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Text.displayName = "Text"

export default Text