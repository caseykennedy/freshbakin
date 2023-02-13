// Article template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text, Heading } from 'theme-ui'

// Components
import Pill from '../../components/Pill'
import SEO from '../../components/SEO'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'
import PrevNext from '../../components/PrevNext'

// Data
import useSiteSettings from '../../hooks/useSiteSettings'

// ___________________________________________________________________

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
        pathname={`/articles/${post.slug.current}`}
      />
      <S.Article>
        <Section>
          <Box sx={{ width: ['100%', '100%'] }} mb={0}>
            <Heading className="text--md  text--uppercase">
              {post.publishedAt}
            </Heading>

            <Heading as="h1" mb={4} className="text--xxl">
              {post.title}
            </Heading>

            <Flex sx={{ flexDirection: [`column`, `row`] }}>
              <Box sx={{ flex: [1, 2] }}>
                {post._rawExcerpt && (
                  <BlockContent blocks={post._rawExcerpt || []} />
                )}
              </Box>
            </Flex>
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

                {post.figure.caption && (
                  <Text as="figcaption" sx={{ fontSize: 0 }} py={4} px={[4, 0]}>
                    {post.figure.caption}
                  </Text>
                )}
              </>
            )}
          </Box>
        </Section>
        <Section>
          <Flex sx={{ flexDirection: 'column', width: ['100%', '100%'] }}>
            <Flex
              sx={{ flexDirection: [`column`, `row`], position: 'relative' }}
            >
              <Box sx={{ flex: [2, 3], width: '100%' }}>
                <Text>
                  {post._rawBody && (
                    <BlockContent blocks={post._rawBody || []} />
                  )}
                </Text>

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

// ___________________________________________________________________
