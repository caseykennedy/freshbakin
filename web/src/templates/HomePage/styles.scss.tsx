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
      /* border-bottom: ${theme.border}; */
      border-color: ${theme.colors.white};
      margin-top: ${theme.space[4]};

      .list-event {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        border-top: ${theme.border};
        border-color: ${theme.colors.white};
        cursor: pointer;
        padding: ${theme.space[4]} ${theme.space[2]} ${theme.space[4]} 0;
        z-index: 1;

        &::after {
          background: ${theme.colors.white};
          content: '';
          position: absolute;
          bottom: 0%;
          left: 0%;
          right: 0%;
          height: 0%;
          width: 100%;
          transition: ${theme.transition.all};
          /* transform: perspective(75em) rotateX(50deg); */
          z-index: -1;
        }

        &:hover {
          color: ${theme.colors.black};
          top: 0%;
          padding-left: ${theme.space[2]};

          &::after {
            top: 0%;
            height: 100%;
            transform: perspective(0em) rotateX(0deg);
          }
        }
      }
    }
  }
`
