import React from 'react'

import Box, { BoxDefaultProps, BoxStylingProps } from '../Box/Box'

import * as customStyles from './Button.css'

type ButtonDefaultProps = {
  disabled?: boolean
  styles?: BoxStylingProps
}

export type ButtonProps = ButtonDefaultProps & BoxDefaultProps

const Button = ({
  disabled = false,
  styles,
  ...nativeProps
}: ButtonProps) => {

  return (
    <Box
      className={customStyles.Button}
      color={disabled ? "mediumGrey" : "black"}
      cursor={disabled ? "not-allowed" : "pointer"}
      disabled={disabled}
      fontFamily="body"
      fontWeight="medium"
      fontSize={{ mobile: "s", tablet: "m" }}
      tag="button"
      {...styles}
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Button.displayName = "Button"

export default Button