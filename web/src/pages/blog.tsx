// News page

import React from 'react'

// Components
import SEO from '../components/SEO'
import Blog from '../views/Blog'

// Data
import useSiteSettings from '../hooks/useSiteSettings'

const BlogPage = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO pathname={`/blog`} title={`Blog | ${site.titleShort}`} />
      <Blog />
    </>
  )
}

export default BlogPage
