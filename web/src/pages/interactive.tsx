// Interactive page
import React from 'react'

import SEO from '@/components/SEO'
import InteractivePage from '@/views/InteractivePage'
import useSiteSettings from '@/hooks/useSiteSettings'

const Interactive = () => {
  const site = useSiteSettings()
  return (
    <>
      <SEO
        pathname={`/experiential`}
        title={`Expressive, interactive, immersive entertainment for your corporate event, show or festival | ${site.titleShort}`}
      />
      <InteractivePage />
    </>
  )
}

export default Interactive
