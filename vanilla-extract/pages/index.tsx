import type { NextPage } from 'next'
import Box from '../components/Box/Box'

import {
  Button,
  Card,
  Column,
  Heading,
  Nav,
} from '../components'

import * as customStyles from '../styles/appStyles.css'
import { Atoms } from '../styles/sprinkles.css'

type ColumnType = {
  backgroundColor: Atoms['background']
  key: string
  title: string
}

type CardType = {
  columnIndex: number
  description: string
  key: string
  title: string
}


const COLUMNS: ColumnType[] = [
  {
    backgroundColor: "tertiary",
    key: "column1",
    title: "Column 1",
  },
  {
    backgroundColor: "secondary",
    key: "column2",
    title: "Column 2",
  },
  {
    backgroundColor: "primary",
    key: "column3",
    title: "Column 3",
  },
  {
    backgroundColor: "accent",
    key: "column4",
    title: "Column 4",
  }
]

const CARDS: CardType[] = [
  {
    columnIndex: 0,
    description: 'Card 1 Description Text goes here.',
    key: "card1",
    title: 'Card 1 Title',
  },
  {
    columnIndex: 0,
    description: 'Card 2 Description Text goes here.',
    key: "card2",
    title: 'Card 2 Title',
  },

  {
    columnIndex: 1,
    description: 'Card 3 Description Text goes here.',
    key: "card3",
    title: 'Card 3 Title',
  },
  {
    columnIndex: 1,
    description: 'Card 4 Description Text goes here.',
    key: "card4",
    title: 'Card 4 Title',
  },

  {
    columnIndex: 2,
    description: 'Card 5 Description Text goes here.',
    key: "card5",
    title: 'Card 5 Title',
  },
  {
    columnIndex: 2,
    description: 'Card 6 Description Text goes here.',
    key: "card6",
    title: 'Card 6 Title',
  },

  {
    columnIndex: 3,
    description: 'Card 7 Description Text goes here.',
    key: "card7",
    title: 'Card 7 Title',
  },
  {
    columnIndex: 3,
    description: 'Card 8 Description Text goes here.',
    key: "card8",
    title: 'Card 8 Title',
  }
]

const Home: NextPage = () => {
  const handleAddCard = (columnIndex: number) => {
    console.log(columnIndex)
  }

  const handleLeftClick = (cardIndex: number, columnIndex: number) => {
    console.log('incrementCard', cardIndex, columnIndex)
  }

  const handleRightClick = (cardIndex: number, columnIndex: number) => {
    console.log('decrementCard', cardIndex, columnIndex)
  }

  const lastColumnIndex = COLUMNS.length - 1

  return (
    <>
      <Nav>
        <Heading tagLevel="1">Kanban Board</Heading>
      </Nav>
      <Box
        className={customStyles.columnsContainer}
        paddingX={{ mobile: "s", tablet: "l" }}
        paddingY={{ mobile: "m", tablet: "x3" }}
        tag="main"
      >
        {COLUMNS.map((column, columnIndex) => {
          const columnCards = CARDS.filter((card: CardType) => card.columnIndex == columnIndex)
          return (
            <Column
              backgroundColor={column.backgroundColor}
              title={column.title}
              key={column.key}
              styles={{
                marginRight: {
                  mobile: "none",
                  tablet: columnIndex == lastColumnIndex ? "none" : "m"
                },
                marginBottom: {
                  mobile: columnIndex == lastColumnIndex ? "none" : "m",
                  tablet: "none"
                }
              }}
            >
              {columnCards.map((card, cardIndex) => (
                <Card
                  description={card.description}
                  key={card.key}
                  title={card.title}
                >
                  <Button
                    disabled={columnIndex == 0}
                    onClick={() => handleLeftClick(cardIndex, columnIndex)}
                  >
                    {'<'}
                  </Button>
                  <Button
                    disabled={columnIndex == lastColumnIndex}
                    onClick={() => handleRightClick(cardIndex, columnIndex)}
                  >
                    {'>'}
                  </Button>
                </Card>
              ))
              }
              <Button onClick={() => handleAddCard(columnIndex)} styles={{ color: "darkGrey" }}>+ Add a card</Button>
            </Column>
          )
        })}
      </Box>
    </>
  )
}

export default Home
