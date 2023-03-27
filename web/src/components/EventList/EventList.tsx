// Event List:

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

import useEvent from '../../hooks/useEvent'

// ___________________________________________________________________

type Props = {
  grid?: boolean
  inverted?: boolean
  gridSlice?: number
  listSliceStart?: number
  listSliceEnd?: number
}

const EventList: React.FC<Props> = ({
  grid,
  inverted,
  gridSlice = 8,
  listSliceStart = 8,
  listSliceEnd = 30,
}) => {
  const events = useEvent()
  const filteredDates = events.filter((event) => {
    const startDate = new Date(event.node.startDate)
    const currentDate = new Date()
    return startDate > currentDate
  })
  // console.log('filteredDates', filteredDates)
  return (
    <S.EventList inverted={inverted}>
      {grid ? (
        <Grid
          columns={[2, 2, 4]}
          gap={theme.gutter.space}
          className="events__grid"
        >
          {filteredDates.slice(0, gridSlice).map(({ node: event }, key) => (
            <S.GridMotion
              initial={false}
              whileHover="hover"
              animate="rest"
              key={key}
            >
              <Link to={`/events/${event.slug.current}`} className="grid-event">
                <GatsbyImage
                  image={event.figure.asset.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={event.figure.alt}
                />
              </Link>
              <S.HoverMotion
                transition={hoverTransitions}
                variants={hoverMotion}
              >
                <Link
                  to={`/events/${event.slug.current}`}
                  className="grid-event"
                >
                  <Flex
                    sx={{
                      flexFlow: 'column nowrap',
                      justifyContent: 'space-between',
                      height: '100%',
                    }}
                  >
                    <div>
                      <Flex sx={{ justifyContent: 'space-between' }}>
                        <Heading className="text--md" sx={{ maxWidth: '12ch' }}>
                          {event.title}{' '}
                        </Heading>
                        <Heading className="text--sm">
                          {format(new Date(event.startDate), 'MMM. do')}
                        </Heading>
                      </Flex>
                      <Text sx={{ color: 'gray' }}>at {event.venue}</Text>
                    </div>
                    <Flex sx={{ justifyContent: 'space-between' }}>
                      Details
                      <span>→</span>
                    </Flex>
                  </Flex>
                </Link>
              </S.HoverMotion>
            </S.GridMotion>
          ))}
        </Grid>
      ) : (
        <div className="events__list">
          {filteredDates
            .slice(listSliceStart, listSliceEnd)
            .map(({ node: event }, key) => (
              <Link
                to={`/events/${event.slug.current}`}
                className="list-event"
                key={key}
              >
                <Box sx={{ flex: 1 }}>
                  <Heading as="h4">{event.title}</Heading>
                </Box>
                <Heading className="text--md">
                  {format(new Date(event.startDate), 'MMM. do')}
                </Heading>
              </Link>
            ))}
        </div>
      )}
    </S.EventList>
  )
}

export default EventList

// ___________________________________________________________________

const hoverMotion = {
  rest: {
    opacity: 0,
    height: '0%',
  },
  hover: {
    opacity: 1,
    height: '24%',
  },
}

const hoverTransitions = {
  type: 'spring',
  stiffness: 150,
  damping: 18,
}
