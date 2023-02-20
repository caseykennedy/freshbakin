// Experience template
// ___________________________________________________________________

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'
import { Box, Flex, Text, Heading } from 'theme-ui'

import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'

import Pill from '../../components/Pill'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'
import PrevNext from '../../components/PrevNext'
import EventList from '../../components/EventList'

import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

const Experience: React.FC<ExperienceContextShape> = ({ pageContext }) => {
  const post = pageContext.experience
  const siteSettings = useSiteSettings()

  const BuyButton = () => (
    <a
      href="mailto:steve@freshbakin.com?subject=Experiential Event Booking Inquiry"
      className="button"
      target="_blank"
      rel="noreferer nofollow"
    >
      <Box py={[5]}>Book Now</Box>
    </a>
  )

  const linkList = []
  if (post.website) {
    linkList.push({
      label: 'website',
      url: `//www.${post.website}`,
    })
  }
  if (post.instagram) {
    linkList.push({
      label: 'instagram',
      url: `//www.${post.instagram}`,
    })
  }
  if (post.facebook) {
    linkList.push({
      label: 'facebook',
      url: `//www.${post.facebook}`,
    })
  }

  return (
    <>
      <SEO
        event={true}
        eventName={post.title}
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/experiential/${post.slug.current}`}
      />
      <S.Experience>
        <Section bg="black" color="white">
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Heading className="text--md">{post.subTitle}</Heading>

            <Heading sx={{textAlign: 'right'}} className="text--md">● {post.ageGroup}</Heading>
          </Flex>

          <Heading as="h1" mt={1} mb={[4, 2]} className="text--xxxl">
            {post.title}
          </Heading>

          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <Flex sx={{ flex: 1, alignItems: 'flex-end' }}>
              <Box>
                <Flex sx={{ flexFlow: 'column nowrap', mb: 2 }}>
                  {linkList.map((item, idx) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferer nofollow"
                      key={idx}
                      className="link"
                    >
                      {item.label}
                    </a>
                  ))}
                </Flex>

                <Box sx={{ width: '100%' }}>
                  <Flex
                    sx={{
                      flexWrap: 'wrap',
                    }}
                  >
                    {post.tags && (
                      <>
                        {post.tags.map((item, idx) => (
                          <Pill key={idx}>
                            <span>#{item.tag}</span>
                          </Pill>
                        ))}
                      </>
                    )}
                    {post.category && (
                      <>
                        {post.category.map((item, key) => (
                          <Pill key={key}>
                            <span>#{item.title}</span>
                          </Pill>
                        ))}
                      </>
                    )}
                  </Flex>
                </Box>
              </Box>
            </Flex>

            <Flex sx={{ flex: 1, alignItems: 'flex-end', mt: 1 }}>
              <BuyButton />
            </Flex>
          </Flex>
        </Section>

        <Section>
          <Flex
            sx={{
              flexDirection: ['column-reverse', 'row-reverse'],
              width: '100%',
            }}
          >
            <Box
              sx={{
                flex: 1,
                pt: [2, 0],
              }}
            >
              <Box sx={{ flex: 1, position: 'sticky', top: 0 }}>
                <Box sx={{ flex: 1, pl: [0, 2] }}>
                  {post._rawInfo && (
                    <BlockContent blocks={post._rawInfo || []} />
                  )}
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              {post.poster && (
                <>
                  <GatsbyImage
                    image={post.poster.asset.gatsbyImageData}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={post.figure.alt}
                  />

                  {post.poster.caption && (
                    <Text as="figcaption" py={4} px={[4, 0]}>
                      {post.poster.caption}
                    </Text>
                  )}
                </>
              )}
            </Box>
          </Flex>
        </Section>

        <Section bg="black" color="white">
          <BuyButton />
        </Section>

        {/* <Section bg="black" color="white">
          <Heading as="h4" color="gray" pt={1}>
            Upcoming
          </Heading>
          <EventList grid={false} listSliceStart={0} listSliceEnd={6} />
        </Section> */}
      </S.Experience>
    </>
  )
}

export default Experience
