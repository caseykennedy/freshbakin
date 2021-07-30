// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Flex } from 'theme-ui'

// ___________________________________________________________________

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const Main = styled.main`
  margin: 0 auto;
  position: relative;
  max-height: 100%;
  max-width: ${theme.siteWidth};
  width: 100%;
`

export const Wordmark = styled(Flex)`
  padding: ${theme.space[4]} ${theme.space[4]} 0 ${theme.space[4]};
  width: 100%;

  .wordmark__inner {
    border-bottom: ${theme.border};
    padding-bottom: ${theme.space[4]};
    width: 100%;
  }
`