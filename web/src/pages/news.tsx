// News page

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import NewsPage from '../views/NewsPage'

// Data
import useSiteSettings from '../hooks/useSiteSettings'

const News = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/news`} title={`News | ${site.titleShort}`} />
      <NewsPage />
    </>
  )
}

export default News
