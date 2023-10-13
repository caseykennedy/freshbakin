// Blog:

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + ui
import * as S from './styles.scss'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

// Components
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

import usePost from '../../hooks/usePost'

import { PostData } from '../../globals'

const Card = ({ post }: PostData) => {
  return (
    <>
      <S.Card to={`/blog/${post.slug.current}`}>
        <div className="card__title">
          <Heading as="h2" sx={{ fontSize: [4], textTransform: 'uppercase', maxWidth: '14ch' }}>
            {post.title}
          </Heading>
          <Heading sx={{ fontSize: [3], textTransform: 'uppercase' }}>
            {format(new Date(post.publishedAt), 'MMM. do')}
          </Heading>
        </div>

        <div className="card__figure">
          <div className="card__figure__container">
            <GatsbyImage
              image={post.figure.asset.gatsbyImageData}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={post.figure.alt}
            />
          </div>
        </div>

        <div className="card__excerpt">{post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}</div>

        <div className="card__action">
          <span>●</span>
        </div>
      </S.Card>
    </>
  )
}

const Blog = () => {
  const posts = usePost()
  return (
    <S.Blog>
      <Section bg="black">
        <Grid columns={[1, 3]} sx={{ bg: 'black', gap: 2 }}>
          {posts.slice(0, 8).map(({ node: post }, key) => (
            <Card post={post} key={key} />
          ))}
        </Grid>
      </Section>
    </S.Blog>
  )
}

export default Blog
