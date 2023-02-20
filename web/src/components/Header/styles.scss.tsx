// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  display: flex;
  justify-content: space-between;

  padding: ${theme.space[2]};
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
      flex: 2;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      height: 100%;
    }
  }
`

export const Logo = styled(Flex)`
  display: flex;
  flex-direction: column;
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  position: relative;
  z-index: 9999;

  @media ${theme.mq.tablet} {
    display: none;
  }
`