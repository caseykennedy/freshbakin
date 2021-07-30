// HomePage:

// ___________________________________________________________________

import React, { Fragment } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Newsletter from './Newsletter'

import useEvent from '../../hooks/useEvent'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 20,
}

const Speakers = () => {
  return (
    <S.Speakers>
      <Section border={true}>
        <Heading className="text--lg">Section</Heading>
      </Section>
    </S.Speakers>
  )
}

const Hero = () => {
  return (
    <S.Hero>
      <Marquee {...MarqueeProps}>
        <Text mr={1} className="text--lg  text--uppercase">
          music — art — entertainment — reno, nv — lake tahoe
        </Text>
      </Marquee>
    </S.Hero>
  )
}

const HomePage: React.FC = () => {
  const events = useEvent()
  console.log(events)
  return (
    <S.HomePage>
      <Section bg="black" color="white">
        <Grid columns={3} gap={theme.space[4]}>
          {events.map(({ node: event }, key) => (
            <div key={key}>
              <GatsbyImage
                image={event.figure.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={event.figure.alt}
              />
            </div>
          ))}
        </Grid>
      </Section>
    </S.HomePage>
  )
}

export default HomePage
