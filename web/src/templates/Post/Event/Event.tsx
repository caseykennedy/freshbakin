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
  const eventStartDate = format(new Date(post.startDate), 'MMMM io ● yyyy')
  const eventStartTime = format(new Date(post.startDate), 'haaa')
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
        eventPrice={post.price}
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/events/${post.slug.current}`}
      />
      <S.Event>
        <Section bg="black" color="white">
          <Flex sx={{ flexDirection: ['column', 'row'], width: '100%' }}>
            <Flex sx={{ flex: [1, 1.5], pr: [0, 4] }}>
              <Box sx={{ flex: 1 }}>
                <Flex sx={{justifyContent: 'space-between'}}>
                  <Text as="p" className="text--sm  text--uppercase">
                    {eventStartDate}
                  </Text>

                  <Text as="p" className="text--sm  text--uppercase">
                    {post.city}, {post.state}
                  </Text>
                </Flex>

                <Heading as="h1" mb={0} className="text--xxxl">
                  {post.title}
                </Heading>
                <Heading sx={{ color: 'gray', mb: 2 }} className="text--lg">
                  {post.subTitle}
                </Heading>

                <Box mb={7}>
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

                <Box>
                  <Text as="p" mb={3} className="text--lg">
                    {eventStartTime} ● {post.ageGroup}
                  </Text>
                  <Text>
                    {post._rawInfo && (
                      <BlockContent blocks={post._rawInfo || []} />
                    )}
                  </Text>
                  <Text as="p" mt={3} className="text--lg">
                    ${post.price}
                  </Text>
                </Box>
              </Box>
            </Flex>

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
