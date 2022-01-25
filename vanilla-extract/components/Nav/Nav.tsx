import React from 'react'
import Box, { BoxDefaultProps } from '../Box/Box'

const Nav = ({
  ...nativeProps
}: BoxDefaultProps) => {

  return (
    <Box
      background="primary"
      padding={{ mobile: "s", tablet: "l" }}
      tag="nav"
      textAlign="center"
      {...nativeProps}
    >
      {nativeProps.children}
    </Box>
  )
}

Nav.displayName = "Nav"

export default Nav