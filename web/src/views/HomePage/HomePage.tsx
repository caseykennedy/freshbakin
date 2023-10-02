// HomePage:

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import { Heading } from 'theme-ui'

// Components
import Section from '@/components/Section'
import EventList from '@/components/EventList'

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
