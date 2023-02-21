// ExperienceList styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { motion } from 'framer-motion'

// ___________________________________________________________________

export const ExperienceList = styled.div<{ inverted?: boolean }>`
  .experience {
    &__list {
      border-color: ${(p) =>
        p.inverted ? theme.colors.black : theme.colors.white};
      margin-top: ${theme.space[4]};
      text-transform: uppercase;

      .list-event {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;

        border-top: ${theme.border};
        border-color: ${(p) =>
          p.inverted ? theme.colors.black : theme.colors.white};
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
