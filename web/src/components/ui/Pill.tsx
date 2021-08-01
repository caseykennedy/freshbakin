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

  /* background-color: ${theme.colors.black}; */
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.borderRadius};
  margin-right: ${theme.space[2]};
  padding: ${theme.space[1]} ${theme.space[2]};

  font-size: ${theme.fontSizes[2]};
  white-space: nowrap;

  transition: all ${theme.transition.global};

  &:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }
`

export default Pill
