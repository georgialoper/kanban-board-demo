import React from 'react'

import Box, {
  BoxDefaultProps,
  BoxStylingMarginProps,
  BoxStylingProps
} from '../Box/Box'

import { Heading } from '../../components'
import { Atoms } from '../../styles/sprinkles.css'
import * as customStyles from './Column.css'

type ColumnDefaultProps = {
  backgroundColor: Atoms['background']
  title: string
  styles?: BoxStylingProps & BoxStylingMarginProps
}

type ColumnProps = ColumnDefaultProps & BoxDefaultProps

const Column = ({
  backgroundColor,
  title,
  styles,
  ...nativeProps
}: ColumnProps) => {
  return (
    <Box
      background="lightGrey"
      width="max"
      {...styles}
    >
      <Box
        className={customStyles.HeaderContainer}
        background={backgroundColor}
        textAlign="center"
      >
        <Heading tagLevel='2' styleLevel='4'>
          {title}
        </Heading>
      </Box>
      <Box padding="m">
        {nativeProps.children}
      </Box>
    </Box>
  )
}

Column.displayName = 'Column'

export default Column