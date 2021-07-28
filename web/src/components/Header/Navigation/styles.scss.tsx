// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: none;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media ${theme.mq.tablet} {
    display: flex;
  }

  a {
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[2]};
    text-decoration: none;
    margin-left: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      margin-left: ${theme.space[6]};
    }

    &.active,
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`
