// Subscribe Form Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { lighten } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const SubscribeForm = styled(Box)`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    @media ${theme.mq.desktop} {
      /* flex-direction: row; */
      /* flex-wrap: nowrap; */
    }

    input[type='email'] {
      border: ${theme.border};
      border-radius: 0;
      outline: none;
      padding: ${theme.space[2]} ${theme.space[2]};

      font-size: ${theme.fontSizes[2]};
      line-height: normal;
      text-transform: uppercase;

      &::placeholder {
        color: ${theme.colors.gray};
        font-weight: 400;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.space[2]};

      color: ${theme.colors.white};
      text-transform: uppercase;

      background: ${theme.colors.black};
      border: none;
      border-radius: 0;
      cursor: pointer;
      transition: ${theme.transition.all};

      svg {
        fill: ${theme.colors.white};
        margin-left: ${theme.space[4]};
        width: 18px;
      }

      &:hover {
        background: ${theme.colors.gray};
        color: ${theme.colors.black};
        
        svg {
          fill: ${theme.colors.black};
        }
      }

      @media ${theme.mq.desktop} {
        margin-top: 0;
      }
    }
  }
`
