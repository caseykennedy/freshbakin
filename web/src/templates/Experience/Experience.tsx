// Experience template
// ___________________________________________________________________

// Libraries
import React, { useEffect, useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import ResponsiveEmbed from 'react-responsive-embed'
import { Box, Flex, Text, Heading } from 'theme-ui'

import * as S from './styles.scss'

import Pill from '../../components/Pill'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'
import ExperienceList from '../../components/ExperienceList'

import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

const BuyButton = (props: { contactEmail: string; eventTitle: string }) => {
  const { contactEmail, eventTitle } = props
  return (
    <a
      href={`mailto:${contactEmail}?subject=${eventTitle} Event Booking Inquiry`}
      className="button"
      target="_blank"
      rel="noreferer nofollow"
    >
      <Box py={5}>Inquire Now</Box>
    </a>
  )
}

const Experience: React.FC<ExperienceContextShape> = ({ pageContext }) => {
  const post = pageContext.experience
  const siteSettings = useSiteSettings()

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
            <Heading sx={{ color: 'gray' }} className="text--md">
              {post.subTitle}
            </Heading>

            <Heading
              sx={{ color: 'gray', textAlign: 'right' }}
              className="text--md"
            >
              {post.ageGroup}
            </Heading>
          </Flex>

          <Heading as="h1" mt={1} mb={[4, 2]} className="text--xxxl">
            {post.title}
          </Heading>

          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <Flex sx={{ flex: 1, alignItems: 'flex-end' }}>
              <Box>
                <Flex sx={{ flexFlow: 'column nowrap', mb: 2 }}>
                  {post.socialLinks.map((item, idx) => (
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
                    {post.tags.map((item, idx) => (
                      <Pill key={idx}>
                        <span>#{item.tag}</span>
                      </Pill>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Flex>

            <Flex sx={{ flex: 1, alignItems: 'flex-end', mt: 1 }}>
              <BuyButton
                contactEmail={post.contactEmail}
                eventTitle={post.title}
              />
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
                  <BlockContent blocks={post._rawInfo || []} />
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              {post.videoUrl && (
                <Box sx={{ mb: 2, width: '100%' }}>
                  <ResponsiveEmbed src={post.videoUrl} allowFullScreen={true} />
                </Box>
              )}
              <GatsbyImage
                image={post.poster.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.poster.alt}
              />
            </Box>
          </Flex>
        </Section>

        {/* {post.videoUrl && (
          <Section bg="black">
            <Box sx={{ mx: 'auto', maxWidth: '1440px', width: '100%' }}>
              <ResponsiveEmbed src={post.videoUrl} allowFullScreen={true} />
            </Box>
          </Section>
        )} */}

        <Section bg="black" color="white">
          <BuyButton contactEmail={post.contactEmail} eventTitle={post.title} />
        </Section>

        <Section bg="black" color="white">
          <Heading as="h4" color="gray" pt={1}>
            Experiences
          </Heading>
          <ExperienceList />
        </Section>
      </S.Experience>
    </>
  )
}

export default Experience
