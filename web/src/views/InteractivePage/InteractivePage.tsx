// NewsPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

// Components
import Icon from '../../components/Icons'
import BlockContent from '../../components/BlockContent'
import Section from '../../components/Section'
import Experiential from '../../components/Experiential'
import MarqueeMessage from '../../components/MarqueeMessage'

// Hooks
import useExperience from '../../hooks/useExperience'

// ___________________________________________________________________

const marqueeProps = {
  message:
    ' creating memorable experiences through direct human connection ● memories that last a lifetime ● creating memorable experiences through direct human connection ● memories that last a lifetime ● ',
}
const features = [
  {
    feature: 'immersion',
  },
  {
    feature: 'excitement',
  },
  {
    feature: 'experience',
  },
]

const InteractivePage: React.FC = () => {
  const experiences = useExperience()

  console.log(experiences)

  return (
    <S.InteractivePage>
      <Section>
        <div className="hero">
          <div className="hero__tags">
            <div>Fresh</div>
            <div>Bakin'</div>
          </div>
          {/* <h1>Immersive Entertainment</h1> */}
          <div className="hero__statement">
            <Experiential fill="white" />
          </div>

          <div className="hero__marquee">
            <MarqueeMessage {...marqueeProps} />
          </div>

          <div className="hero__figure">
            <StaticImage
              src="../../images/great-bingo-revival.jpg"
              alt="Fresh Bakin' Experiential Great Bingo Revival Event"
              placeholder="dominantColor"
              aspectRatio={16 / 7}
              transformOptions={{
                cropFocus: 'center',
              }}
            />
          </div>
        </div>
      </Section>

      <Section pt={7} pb={7}>
        <div className="intro">
          <Heading as="h1" className="text--xl">
            Bring excitement and energy to your event with interactive and
            immersive entertainment experiences
          </Heading>
          <Text as="p" sx={{ fontSize: 4, textAlign: 'center' }}>
            From live music and DJs to interactive games and activities, we have
            everything you need to create an unforgettable event. Let us bring
            the magic of immersive entertainment to your next gathering.
          </Text>
        </div>
      </Section>

      <Section pb={7}>
        <div className="features">
          {features.map(({ feature }, idx) => (
            <div className="features__item" key={idx}>
              {feature}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="experiences">
          {experiences.map(({ node: item }, idx) => (
            <div className="experiences__item" key={idx}>
              <div className="experiences__item__details">
                <Text sx={{ fontSize: 5, mb: 4 }}>0{idx + 1}</Text>
                <div>
                  <Heading
                    as="h2"
                    sx={{
                      maxWidth: '11ch',
                      mb: 2,
                      fontSize: 5,
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.title}
                  </Heading>
                  <Box sx={{ fontSize: 1 }}>
                    {item._rawExcerpt && (
                      <BlockContent blocks={item._rawExcerpt || []} />
                    )}
                  </Box>
                  <Link to={`/experiential/${item.slug.current}`}>
                    details
                    <span>→</span>
                  </Link>
                </div>
              </div>
              <div className="experiences__item__figure">
                <Link to={`/experiential/${item.slug.current}`}>
                  <GatsbyImage
                    image={item.figure.asset.gatsbyImageData}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={item.figure.alt}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* <h1>Fresh Bakin' Experiential</h1>
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
        </p> */}
    </S.InteractivePage>
  )
}

export default InteractivePage
