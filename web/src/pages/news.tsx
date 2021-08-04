// News page

// ___________________________________________________________________

// Libraries
import React from 'react'

// Components
import SEO from '../components/SEO'
import NewsPage from '../templates/NewsPage'

// Data
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

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
