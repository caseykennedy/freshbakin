// HomePage:

// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Button, Flex, Heading, Text, Grid } from 'theme-ui'

// Components
import Section from '../../components/Section'
import Newsletter from './Newsletter'

// ___________________________________________________________________

const MarqueeProps = {
  gradient: false,
  speed: 20,
}

const Speakers: React.FC = () => {
  return (
    <S.Speakers>
      <Section border={true}>
        <Heading className="text--lg">
          Section
        </Heading>
      </Section>
    </S.Speakers>
  )
}

const Hero: React.FC = () => {
  return (
    <S.Hero>
      <Marquee {...MarqueeProps}>
        <Text mr={1} className="text--xxl">
          music — art — entertainment — reno, nv — lake tahoe
        </Text>
      </Marquee>
    </S.Hero>
  )
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />

<Section border={true}>
  <Heading as="h1">FreshBakin' live music, art and entertainment in Reno / Lake Tahoe.</Heading>
  <Heading as="h2">FreshBakin' live music, art and entertainment in Reno / Lake Tahoe.</Heading>
  <Heading as="h3">FreshBakin' live music, art and entertainment in Reno / Lake Tahoe.</Heading>
  <Heading as="h4">FreshBakin' live music, art and entertainment in Reno / Lake Tahoe.</Heading>
  <Heading as="h5">FreshBakin' live music, art and entertainment in Reno / Lake Tahoe.</Heading>
  <Heading as="h6">FreshBakin' live music, art and entertainment in Reno / Lake Tahoe.</Heading>
</Section>
      <Speakers />

      {/* <Section border={true}>
        <Flex sx={{ justifyContent: 'center' }}>
          <Box sx={{ flex: 0.75, textAlign: 'center' }}>
            <Heading as="h3" mb={2}>Stay informed</Heading>
            <Newsletter />
          </Box>
        </Flex>
      </Section> */}
    </S.HomePage>
  )
}

export default HomePage
