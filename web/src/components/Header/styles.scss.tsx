// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Flex } from 'theme-ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.space[2]};
  height: 150px;
  width: 100%;

  @media ${theme.mq.tablet} {
    height: ${theme.headerHeight};
  }

  .header {
    &__billboard {
      flex: 3;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      @media ${theme.mq.tablet} {
        flex: 1;
      }
    }

    &__menu {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
`

export const Logo = styled(Flex)`
  display: flex;
  flex-direction: column;
`
