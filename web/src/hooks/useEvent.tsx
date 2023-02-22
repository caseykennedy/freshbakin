// useEvent hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useEvent = () => {
  const data = useStaticQuery<EventShape>(graphql`
    query EventQuery {
      events: allSanityEvent(sort: { order: ASC, fields: startDate }) {
        edges {
          node {
            _rawExcerpt
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
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 0.65
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
