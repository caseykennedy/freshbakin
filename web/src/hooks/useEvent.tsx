// useEvent hook
// Hook for querying data

import { graphql, useStaticQuery } from 'gatsby'
import { EventShape } from '@/globals'

const useEvent = () => {
  const data = useStaticQuery<EventShape>(graphql`
    query EventQuery {
      events: allSanityEvent(sort: { order: ASC, fields: startDate }) {
        edges {
          node {
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
          previous {
            slug {
              current
            }
            title
          }
          next {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  return data.events.edges
}

export default useEvent
