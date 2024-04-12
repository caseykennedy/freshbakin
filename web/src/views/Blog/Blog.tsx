// Blog:

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { format } from 'date-fns'

// Theme + ui
import * as S from './styles.scss'
import { Grid, Heading } from 'theme-ui'

// Components
import Icon from '../../components/Icons'
import Section from '../../components/Section'
import BlockContent from '../../components/BlockContent'

import usePost from '../../hooks/usePost'
import { PostData } from '../../globals'

const orbMotion = {
  rest: {
    opacity: 0,
    right: '0px',
  },
  hover: {
    opacity: 1,
    right: '32px',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
}

const Card = ({ post }: PostData) => {
  return (
    <Link to={`/blog/${post.slug.current}`} style={{ display: 'inline-flex', height: '100%' }}>
      <S.Card initial="rest" whileHover="hover" animate="rest">
        <div className="card__title">
          <Heading as="h2" sx={{ fontSize: [4], textTransform: 'uppercase', maxWidth: '14ch' }}>
            {post.title}
          </Heading>
          <Heading sx={{ fontSize: [3], textTransform: 'uppercase' }}>
            {format(new Date(post.publishedAt), 'MMM. do')}
          </Heading>
        </div>

        <div className="card__util">
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

          {/* <div className="card__excerpt">
          {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
        </div> */}

          <div className="card__action">
            <S.Orb variants={orbMotion}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </S.Orb>
          </div>
        </div>
      </S.Card>
    </Link>
  )
}

const Blog = () => {
  const posts = usePost()
  return (
    <S.Blog>
      <Section bg="black">
        <Grid columns={[1, 3]} sx={{ bg: 'black', gap: 2 }}>
          {posts.map(({ node: post }, idx) => (
            <Card post={post} key={idx} />
          ))}
        </Grid>
      </Section>
    </S.Blog>
  )
}

export default Blog
