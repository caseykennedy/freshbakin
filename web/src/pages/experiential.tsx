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
        pathname={`/experiential`}
        title={`Experiential, immersive events | ${site.titleShort}`}
      />
      <InteractivePage />
    </>
  )
}

export default Interactive
