// HomePage:

// ___________________________________________________________________

import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Newsletter from '../../components/Footer/SubscribeForm'

import useEvent from '../../hooks/useEvent'

// ___________________________________________________________________

const Events: React.FC<{ grid?: boolean }> = ({ grid }) => {
  const events = useEvent()
  return (
    <S.Events>
      {grid ? (
        <Grid
          columns={[2, 3]}
          gap={theme.gutter.space}
          className="events__grid"
        >
          {events.slice(0, 6).map(({ node: event }, key) => (
            <Link
              to={`/events/${event.slug.current}`}
              className="grid-event"
              key={key}
            >
              <GatsbyImage
                image={event.figure.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={event.figure.alt}
              />
            </Link>
          ))}
        </Grid>
      ) : (
        <Box className="events__list">
          {events.slice(6, 20).map(({ node: event }, key) => (
            <Link
              to={`/events/${event.slug.current}`}
              className="list-event"
              key={key}
            >
              <Box sx={{ flex: 1 }}>
                <Heading as="h4">{event.title}</Heading>
              </Box>
              <Heading className="text--md">
                {format(new Date(event.startDate), 'MMM. io')}
              </Heading>
            </Link>
          ))}
        </Box>
      )}
    </S.Events>
  )
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Section bg="black" color="white">
        <Events grid={true} />
      </Section>
      <Section bg="black" color="white">
        <Heading as="h4" color="gray">
          Upcoming
        </Heading>
        <Events />
      </Section>
    </S.HomePage>
  )
}

export default HomePage
