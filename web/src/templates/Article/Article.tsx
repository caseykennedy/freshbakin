// Article template

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + UI
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from 'theme-ui'

// Components
import SEO from '@/components/SEO'
import Section from '@/components/Section'
import BlockContent from '@/components/BlockContent'

// Data
import useSiteSettings from '@/hooks/useSiteSettings'
import { PostContextShape } from '@/globals'

const Article: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const siteSettings = useSiteSettings()
  return (
    <>
      <SEO
        article={true}
        banner={`${post.figure.asset.url}`}
        title={`${post.title} | ${siteSettings.titleShort}`}
        desc={`${post.title}`}
        pathname={`/blog/${post.slug.current}`}
      />
      <S.Article>
        <Section>
          <Box sx={{ width: ['100%', '65%'] }} mb={0}>
            <Heading mb={4} className="text--md  text--uppercase">
              {post.publishedAt}
            </Heading>

            <Heading as="h1" mb={2} className="text--xxl">
              {post.title}
            </Heading>
          </Box>
        </Section>

        <Section>
          <Box sx={{ width: '100%', maxWidth: 800 }} ml="auto">
            {post.figure && (
              <>
                <GatsbyImage
                  image={post.figure.asset.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.figure.alt}
                />
              </>
            )}
          </Box>
        </Section>
        <Section>
          <Flex sx={{ flexDirection: 'column', width: '100%', maxWidth: '800px' }}>
            <Flex sx={{ flexDirection: [`column`, `row`], position: 'relative' }}>
              <Box sx={{ flex: [2, 3], width: '100%' }}>
                <Text>{post._rawBody && <BlockContent blocks={post._rawBody || []} />}</Text>

                {/* <Box mt={6}>
                  {post.tags && (
                    <Flex flexWrap="wrap" mb={4} width={1}>
                      {post.tags.map((item, idx) => (
                        <Pill mb={2} key={idx}>
                          <span>#{item.tag}</span>
                        </Pill>
                      ))}
                    </Flex>
                  )}
                </Box> */}
              </Box>
            </Flex>
          </Flex>
        </Section>
      </S.Article>
    </>
  )
}

export default Article
