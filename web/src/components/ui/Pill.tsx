// Pill Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '.'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type PillProps = {
  bg?: string
  color?: string
}

const Pill = styled(Flex)<PillProps>`
  display: flex;
  align-items: center;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  margin-right: ${theme.space[2]};
  padding: ${theme.space[1]} ${theme.space[2]};

  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[1]};
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }

  @media ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[2]};
  }
`

export default Pill
