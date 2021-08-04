// NewsPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

// Components
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

import usePost from '../../hooks/usePost'

// ___________________________________________________________________

const NewsPage: React.FC = () => {
  const posts = usePost()
  console.log(posts)
  return (
    <S.NewsPage>
      <Section bg="black" color="white">
        <Grid columns={[1, 3]} gap={2}>
          {posts.slice(0, 8).map(({ node: post }, key) => (
            <Link to={`/news/${post.slug.current}`} className="card" key={key}>
              <Flex sx={{ flex: 1, justifyContent: 'space-between', mb: 4 }}>
                <Heading as="h4">{post.title}</Heading>
                <Heading className="text--md">
                  {format(new Date(post.publishedAt), 'MMM. io')}
                </Heading>
              </Flex>
              <Box sx={{ flex: 1, fontSize: 1 }}>
                {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
              </Box>
            </Link>
          ))}
        </Grid>
      </Section>
    </S.NewsPage>
  )
}

export default NewsPage
