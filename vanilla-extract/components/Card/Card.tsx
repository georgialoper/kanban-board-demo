import React from 'react'

import Box, { BoxDefaultProps } from '../Box/Box'
import { Heading, Text } from '../../components'
import * as customStyles from './Card.css'

type ColumnDefaultProps = {
  description: string
  title: string
}

type ColumnProps = ColumnDefaultProps & BoxDefaultProps

const Column = ({
  description,
  title,
  ...nativeProps
}: ColumnProps) => {
  return (
    <Box
      background="white"
      padding="s"
      marginBottom="m"
    >
      <Box className={customStyles.headingContainer}>
        <Heading tagLevel='3' styleLevel='5' styles={{ color: "black" }}>
          {title}
        </Heading>
        <Box>
          {nativeProps.children}
        </Box>
      </Box>
      <Text styles={{ color: "darkGrey" }}>
        {description}
      </Text>
    </Box>
  )
}

Column.displayName = 'Column'

export default Column