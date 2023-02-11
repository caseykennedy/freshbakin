// NewsPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

// Components
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

// Hooks
import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const InteractivePage: React.FC = () => {
  const posts = usePost()

  return (
    <S.InteractivePage>
      <Section bg="black" color="white">
        <h1>Fresh Bakin' Experiential</h1>
        <h2>Immersive Entertainment</h2>
        <h2>Elevate Your Next Event</h2>
        <h3>
          We create memorable experiences through direct human connection.
        </h3>
        <p>
          At Fresh Bakin' Experiential, we understand that a great event
          requires more than just good food and drinks. That's why we offer a
          wide range of interactive and immersive entertainment options to bring
          excitement and energy to your guests.
        </p>
        <p>
          From live music and DJs to interactive games and activities, we have
          everything you need to create an unforgettable event. Let us bring the
          magic of immersive entertainment to your next gathering.
        </p>
      </Section>
    </S.InteractivePage>
  )
}

export default InteractivePage
