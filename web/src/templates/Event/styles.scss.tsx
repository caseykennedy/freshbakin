// Event Post Styles:

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

export const BuyButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border: ${theme.border};
  border-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};

  padding: ${theme.space[6]} ${theme.space[2]};
  height: 100%;
  width: 100%;

  font-size: ${theme.fontSizes[4]};
  text-align: center;
  text-transform: uppercase;

  @media ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[4]};
    padding: ${theme.space[6]} ${theme.space[4]};
  }

  &:hover {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }

  &:active {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }
`
