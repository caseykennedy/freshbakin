// useEvent hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useEvent = () => {
  const data = useStaticQuery<EventShape>(graphql`
    query EventQuery {
      events: allSanityEvent(sort: { order: DESC, fields: startDate }) {
        edges {
          node {
            _rawExcerpt
            _rawInfo
            address
            ageRestriction
            category {
              title
            }
            city
            figure {
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  # aspectRatio: 9 / 16
                )
                url
              }
            }
            price
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

  return data.events.edges
}

export default useEvent
