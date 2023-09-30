// Experiential Page:

import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage, GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'
import HoverEffect from 'hover-effect'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

// Components
import Icon from '../../components/Icons'
import BlockContent from '../../components/BlockContent'
import Section from '../../components/Section'
import Experiential from '../../components/Interactive'
import MarqueeMessage from '../../components/MarqueeMessage'

// Hooks
import useExperience from '../../hooks/useExperience'

import distortion from '../../images/4.png'

const marqueeProps = {
  message:
    ' creating memorable experiences through direct human connection ● memories that last a lifetime ● creating memorable experiences through direct human connection ● memories that last a lifetime ● ',
  speed: 95,
}
const features = [
  {
    feature: 'immersion',
  },
  {
    feature: 'corporate events',
  },
  {
    feature: 'excitement',
  },
  {
    feature: 'cosplay',
  },
  {
    feature: 'interactive parties',
  },
  {
    feature: 'IRL',
  },
  {
    feature: 'office parties',
  },
]

type ExperienceProps = {
  item: {
    title: string
    _rawExcerpt: string
    slug: {
      current: string
    }
    figure: {
      alt: string
      asset: {
        gatsbyImageData: IGatsbyImageData
        url: string
      }
    }
  }
  id: number
}

const Experience = ({ item, id }: ExperienceProps) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const distort = new HoverEffect({
      parent: document.querySelector('.figure'),
      intensity: 0.3,
      image1: item.figure.asset.url,
      image2: item.figure.asset.url,
      displacementImage: distortion,
      imagesRatio: 777 / 1000,
    })
  }, [item.figure.asset.url, item.figure.asset.url])
  return (
    <div className="experiences__item">
      <div className="experiences__item__details">
        <Text sx={{ fontSize: 5, mb: 4 }}>0{id + 1}</Text>
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
          <Box sx={{ fontSize: 1 }}>{item._rawExcerpt && <BlockContent blocks={item._rawExcerpt || []} />}</Box>
          <Link to={`/experiential/${item.slug.current}`}>
            details
            <span>→</span>
          </Link>
        </div>
      </div>
      <div className="experiences__item__figure">
        <Link to={`/experiential/${item.slug.current}`}>
          {/* <div className="figure" /> */}
          <GatsbyImage
            image={item.figure.asset.gatsbyImageData}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={item.figure.alt}
          />
        </Link>
      </div>
    </div>
  )
}

type FeatureShape = {
  children: React.ReactNode
}

const FeatureMarquee = ({ children }: FeatureShape) => {
  return (
    <Marquee gradient={false} speed={150} direction="left">
      {children}
    </Marquee>
  )
}

const ExperientialPage: React.FC = () => {
  const experiences = useExperience()

  return (
    <S.InteractivePage>
      <Section>
        <div className="hero">
          <div className="hero__tags">
            <div className="text--md">Fresh</div>
            <div className="text--md">Bakin'</div>
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
            Bring excitement and energy to your event with interactive and immersive entertainment experiences
          </Heading>
          <Text as="p" sx={{ fontSize: 4, textAlign: 'center' }}>
            From live music and DJs to interactive games and activities, we have everything you need to create an
            unforgettable event. Let us bring the magic of immersive entertainment to your next gathering.
          </Text>
        </div>
      </Section>

      <Section pb={7}>
        <div className="features">
          <FeatureMarquee>
            {features.map(({ feature }, idx) => (
              <div className="features__item" key={idx}>
                {feature}
              </div>
            ))}
          </FeatureMarquee>
        </div>
      </Section>

      <Section>
        <div className="experiences">
          {experiences.map(({ node: item }, idx) => (
            <Experience key={idx} id={idx} item={item} />
          ))}
        </div>
      </Section>
    </S.InteractivePage>
  )
}

export default ExperientialPage
