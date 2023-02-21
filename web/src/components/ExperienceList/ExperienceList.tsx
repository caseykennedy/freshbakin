// ExperienceList List:
// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import { Box, Flex, Heading, Text, Grid } from 'theme-ui'

import useExperience from '../../hooks/useExperience'

// ___________________________________________________________________

type Props = {
  inverted?: boolean
}

const ExperienceList: React.FC<Props> = ({ inverted }) => {
  const experiential = useExperience()
  // const filteredDates = events.filter((event) => {
  //   const startDate = new Date(event.node.startDate)
  //   const currentDate = new Date()
  //   return startDate > currentDate
  // })
  return (
    <S.ExperienceList inverted={inverted}>
      <div className="experience__list">
        {experiential.slice(0, 8).map(({ node: event }, key) => (
          <Link
            to={`/experiential/${event.slug.current}`}
            className="list-event"
            key={key}
          >
            <Box sx={{ flex: 1 }}>
              <Heading as="h4">{event.title}</Heading>
            </Box>
            <Heading
              sx={{ color: 'grey', display: ['none', 'initial'] }}
              className="text--sm"
            >
              {event.subTitle}
            </Heading>
          </Link>
        ))}
      </div>
    </S.ExperienceList>
  )
}

export default ExperienceList
