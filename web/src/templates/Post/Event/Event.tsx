// Event template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from 'theme-ui'

// Components
import Pill from '../../../components/ui/Pill'
import SEO from '../../../components/SEO'
import Section from '../../../components/Section'
import BlockContent from '../../../components/BlockContent'
import PrevNext from '../PrevNext'

// Data
import useSiteSettings from '../../../hooks/useSiteSettings'

// ___________________________________________________________________

const Event: React.FC<EventContextShape> = ({ pageContext }) => {
  const post = pageContext.event
  const siteSettings = useSiteSettings()
  return (
    <>
      <SEO
        article={true}
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/events/${post.slug.current}`}
      />
      <S.Event>
        <Section bg="black" color="white">
          <Flex sx={{ width: '100%' }}>
            <Box sx={{ flex: 1, pr: [0, 6] }}>
              <Text as="p" className="text--small  text--uppercase">
                {format(new Date(post.startDate), 'MMMM io • yyyy')}
              </Text>

              <Heading as="h1" mb={4} className="text--xxl">
                {post.title}
              </Heading>

              <Box>
                <Text>
                  {post._rawInfo && (
                    <BlockContent blocks={post._rawInfo || []} />
                  )}
                </Text>

                <Box mt={6}>
                  {post.tags && (
                    <Flex>
                      {post.tags.map((item, idx) => (
                        <Pill mb={2} key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              {post.figure && (
                <>
                  <GatsbyImage
                    image={post.figure.asset.gatsbyImageData}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={post.figure.alt}
                  />

                  {post.figure.caption && (
                    <Text as="figcaption" py={4} px={[4, 0]}>
                      {post.figure.caption}
                    </Text>
                  )}
                </>
              )}
            </Box>
          </Flex>
        </Section>

        {/* <PrevNext pageContext={pageContext} /> */}
      </S.Event>
    </>
  )
}

export default Event

// ___________________________________________________________________
