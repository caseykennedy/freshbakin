// Interactive page
// ___________________________________________________________________

import React from 'react'

import SEO from '../components/SEO'
import InteractivePage from '../views/InteractivePage'
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Interactive = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={`/interactive`}
        title={`Interactive | ${site.titleShort}`}
      />
      <InteractivePage />
    </>
  )
}

export default Interactive
