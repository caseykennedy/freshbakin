// Newsletter Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Newsletter = styled(Box)`
  .social {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: ${theme.space[5]};

    @media ${theme.mq.tablet} {
      justify-content: flex-end;
    }
  }

  form {
    position: relative;

    input {
      letter-spacing: 0;
      font-size: ${theme.fontSizes[2]};

      background: transparent;
      border: ${theme.border};
      border-color: ${theme.colors.gray};
      border-radius: 999px;
      outline: 0;
      padding: ${theme.space[3]} ${theme.space[5]};

      @media ${theme.mq.tablet} {
        font-size: ${theme.fontSizes[3]};
      }

      @media ${theme.mq.desktop} {
        font-size: ${theme.fontSizes[4]};
        padding: ${theme.space[3]} ${theme.space[5]};
      }
    }

    .submit {
      display: flex;
      align-items: center;

      position: absolute;
      top: 0;
      right: ${theme.space[4]};
      height: 100%;
      z-index: 9;

      button {
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        padding: ${theme.space[2]} ${theme.space[3]};
        transition: background-color ${theme.transition.global};

        &:hover {
          svg {
            fill: ${theme.colors.tertiary};
          }
        }

        svg {
          fill: ${theme.colors.white};
          width: ${theme.space[5]};
        }
      }
    }
  }
`
