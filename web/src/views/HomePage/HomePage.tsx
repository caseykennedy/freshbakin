// HomePage:

import React from 'react'
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
import EventList from '../../components/EventList'

import useEvent from '../../hooks/useEvent'

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Section bg="black" color="white">
        <EventList grid={true} />
      </Section>
      <Section bg="black" color="white">
        <Heading as="h4" color="gray">
          Upcoming
        </Heading>
        <EventList />
      </Section>
    </S.HomePage>
  )
}

export default HomePage
