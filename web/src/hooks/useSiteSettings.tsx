// useSiteSettings hook
// Hook for querying site settings data

import { graphql, useStaticQuery } from 'gatsby'
import { SettingsShape } from '@/globals'

const useSiteSettings = () => {
  const data = useStaticQuery<SettingsShape>(graphql`
    query SiteSettingsQuery {
      settings: allSanitySiteSettings {
        edges {
          node {
            author
            backgroundColor
            banner {
              asset {
                url
              }
            }
            description
            googleTagID
            headline
            language
            logo
            ogLanguage
            ogSiteName
            siteName
            themeColor
            title
            titleAlt
            titleShort
            url
            userTwitter
          }
        }
      }
    }
  `)

  return data.settings.edges[0].node
}

export default useSiteSettings
