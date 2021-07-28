// gatsby-browser

import React from 'react'
import Layout from './src/components/Layout'

// Styles + Theme
import GlobalStyles from './src/styles/global'

// ___________________________________________________________________

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return <>{element}</>
}
