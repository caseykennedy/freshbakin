// Interactive page
// ___________________________________________________________________

import React from 'react'

import SEO from '../components/SEO'
import ExperientialPage from '../views/ExperientialPage'
import useSiteSettings from '../hooks/useSiteSettings'

// ___________________________________________________________________

const Interactive = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={`/experiential`}
        title={`Expressive, immersive experiences for your event, show or festival | ${site.titleShort}`}
      />
      <ExperientialPage />
    </>
  )
}

export default Interactive
