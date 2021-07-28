// Staff Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import styled from 'styled-components'
import { Flex } from '../../../components/ui'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const PrevNext = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-top: ${theme.border};

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }
`

export const Button = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  font-family: ${theme.fonts.heading};
  font-weight: 500;
  line-height: 1.15;
  text-align: center;

  border-left: none;
  padding: ${theme.space[6]} ${theme.space[4]};

  &:nth-child(2) {
    border-left: none;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      border-top: none;
      border-left: ${theme.border};
    }
  }

  &:hover {
    background: ${theme.colors.muted};
    color: ${theme.colors.text};
  }
`
