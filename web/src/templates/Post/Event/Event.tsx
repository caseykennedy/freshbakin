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
  const eventStartDate = format(new Date(post.startDate), 'MMM. do ● yyyy')
  const eventStartTime = format(new Date(post.startDate), 'haaa')

  const BuyButton = () => (
    <a href={post.ticketUrl} target="_blank" className="button">
      <Box py={[5]}>Buy Tickets {!post.ticketUrl && 'Soon'}</Box>
    </a>
  )
  return (
    <>
      <SEO
        event={true}
        eventName={post.title}
        eventCity={post.city}
        eventState={post.state}
        eventAddress={post.address}
        eventTicketUrl={post.ticketUrl}
        eventStartDate={post.startDate}
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/events/${post.slug.current}`}
      />
      <S.Event>
        <Section bg="black" color="white">
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Heading className="text--md">{eventStartDate}</Heading>

            <Heading className="text--md">
              {eventStartTime} ● {post.ageGroup}
            </Heading>
          </Flex>

          <Heading as="h1" mb={[4, 2]} className="text--xxxl">
            {post.title}
          </Heading>

          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <Flex sx={{ flex: 1, alignItems: 'flex-end' }}>
              <Box>
                {post.subTitle && (
                  <Heading className="text--md">{post.subTitle}</Heading>
                )}

                <Heading sx={{ color: 'gray', mb: 1 }} className="text--md">
                  at {post.venue}
                </Heading>

                <Box sx={{ width: '100%' }}>
                  <Flex>
                    {post.tags && (
                      <>
                        {post.tags.map((item, idx) => (
                          <Pill mb={2} key={idx}>
                            <span>#{item.tag}</span>
                          </Pill>
                        ))}
                      </>
                    )}
                    {post.category && (
                      <>
                        {post.category.map((item, key) => (
                          <Pill mb={2} key={key}>
                            <span>#{item.title}</span>
                          </Pill>
                        ))}
                      </>
                    )}
                  </Flex>
                </Box>
              </Box>
            </Flex>

            <Flex sx={{ flex: 1, alignItems: 'flex-end' }}>
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
                flex: [1],
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

        <Section bg="black" color="white">
          <BuyButton />
        </Section>

        {/* <PrevNext pageContext={pageContext} /> */}
      </S.Event>
    </>
  )
}

export default Event

// ___________________________________________________________________
