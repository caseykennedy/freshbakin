// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { Gradient } from '../../styles/transitions'

// ___________________________________________________________________

export const HomePage = styled(Box)``

export const Hero = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const Events = styled(Box)`
  text-transform: uppercase;

  .events {
    &__grid {
      .grid-event {
      }
    }

    &__list {
      border-bottom: ${theme.border};
      border-color: ${theme.colors.white};
      margin-top: ${theme.space[4]};

      .list-event {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-top: ${theme.border};
        border-color: ${theme.colors.white};
        cursor: pointer;
        padding: ${theme.space[4]} 0;
        transition: ${theme.transition.all};

        &:hover {
          /* background: ${theme.colors.white}; */
          /* color: ${theme.colors.black}; */
          padding-left: ${theme.space[2]};
        }
      }
    }
  }
`
