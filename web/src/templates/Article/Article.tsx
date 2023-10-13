// Article template

// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

// Theme + UI
import * as S from './styles.scss'
import { Box, Flex, Text, Heading } from 'theme-ui'

// Components
import SEO from '@/components/SEO'
import Section from '@/components/Section'
import BlockContent from '@/components/BlockContent'
import Pill from '@/components/Pill'

// Data
import useSiteSettings from '@/hooks/useSiteSettings'
import { PostContextShape } from '@/globals'

const Article: React.FC<PostContextShape> = ({ pageContext }) => {
  const post = pageContext.post
  const siteSettings = useSiteSettings()
  const FeaturedEvent = post.eventReference.event

  const BuyButton = () => (
    <a href={FeaturedEvent.ticketUrl || '#'} target="_blank" rel="nofollow noreferrer" className="article__btn">
      <span>Buy Tickets {!FeaturedEvent.ticketUrl && 'Soon'}</span>
    </a>
  )

  const EventButton = () => (
    <Link to={`/events/${FeaturedEvent.slug.current || '#'}`} rel="nofollow noreferrer" className="article__btn">
      <span>Event Details</span>
    </Link>
  )
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
          <Box sx={{ width: ['100%'] }} mb={0}>
            <Heading mb={4} className="text--md  text--uppercase">
              {post.publishedAt}
            </Heading>

            <Heading as="h1" className="text--xxxl">
              {post.title}
            </Heading>
          </Box>
        </Section>

        <Section>
          <Box sx={{ width: '100%', maxWidth: 800, my: 6, ml: 'auto' }}>
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
          <div className="article__body">
            <div className="article__body__block">
              <Box sx={{ maxWidth: ['100%', '800px'] }}>
                {post._rawBody && <BlockContent blocks={post._rawBody || []} />}
              </Box>
            </div>
            <aside className="article__body__aside">
              {/* <Heading as="h4" sx={{ mt: 0 }}>
                {FeaturedEvent.title}
              </Heading> */}
              <BuyButton />
              <EventButton />
            </aside>
          </div>
        </Section>
      </S.Article>
    </>
  )
}

export default Article
