// NewsPage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { Gradient } from '../../styles/transitions'

// ___________________________________________________________________

export const NewsPage = styled(Box)`
  .card {
    display: flex;
    flex-direction: column;
    border-bottom: ${theme.border};
    border-color: ${theme.colors.white};
    padding: ${theme.space[2]};

    @media ${theme.mq.tablet} {
      border-right: ${theme.border};
      border-color: ${theme.colors.white};
      border-bottom: none;
    }
  }
`
