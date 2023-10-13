// usePost hook
// Hook for querying data

import { PostShape } from '@/globals'
import { graphql, useStaticQuery } from 'gatsby'

const usePost = () => {
  const data = useStaticQuery<PostShape>(graphql`
    query PostQuery {
      posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            title
            _rawFigure
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "MMM. DD, YYYY")
            slug {
              current
            }
            tags {
              tag
            }
            figure {
              alt
              caption
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1.6
                  sizes: "(max-width: 800px) 40vw, 25vw"
                )
                url
              }
            }
            categories {
              title
            }
            authors {
              name
              role
              avatar {
                asset {
                  gatsbyImageData(
                    fit: FILLMAX
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, AVIF, WEBP]
                    sizes: "156px"
                  )
                  url
                }
              }
            }
            eventReference {
              event {
                _rawInfo
                address
                ageGroup
                category {
                  title
                }
                city
                figure {
                  alt
                  caption
                  asset {
                    gatsbyImageData(
                      aspectRatio: 0.65
                      fit: FILLMAX
                      formats: [AUTO, AVIF, WEBP]
                      layout: FULL_WIDTH
                      placeholder: BLURRED
                      sizes: "(max-width: 800px) 40vw, 25vw"
                    )
                    url
                  }
                }
                slug {
                  current
                }
                startDate
                state
                subTitle
                tags {
                  tag
                }
                ticketUrl
                title
                venue
              }
            }
          }
          previous {
            slug {
              current
            }
            title
            _rawExcerpt
          }
          next {
            slug {
              current
            }
            title
            _rawExcerpt
          }
        }
      }
    }
  `)

  return data.posts.edges
}

export default usePost
