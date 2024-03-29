// useExperience hook
import { ExperienceShape } from '@/globals'
import { graphql, useStaticQuery } from 'gatsby'

const useExperience = () => {
  const data = useStaticQuery<ExperienceShape>(graphql`
    query ExperienceQuery {
      experiences: allSanityExperience {
        edges {
          node {
            _rawExcerpt
            _rawInfo
            ageGroup
            category {
              title
            }
            figure {
              alt
              asset {
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1.777
                )
                url
              }
            }
            poster {
              alt
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
            videoUrl
            slug {
              current
            }
            subTitle
            tags {
              tag
            }
            title
            socialLinks {
              label
              url
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

  return data.experiences.edges
}

export default useExperience
