// Global styles

import { createGlobalStyle } from 'styled-components'

import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}

  /* ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.black};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.background};
    border-left: ${theme.border};
    border-color: ${theme.colors.black};
  }
  ::-webkit-scrollbar-thumb:hover {
  } */
  
  html,
  body {
    border: 0;
    margin: 0;
    padding: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .marquee-container {
    overflow: hidden;
  }
`

export default GlobalStyles
