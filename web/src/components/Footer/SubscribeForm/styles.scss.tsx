// Subscribe Form Styles:

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

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
      border-radius: ${theme.borderRadius};
      outline: none;
      padding: ${theme.space[2]} ${theme.space[4]};

      font-size: ${theme.fontSizes[2]};
      line-height: normal;
      text-transform: uppercase;

      &::placeholder {
        color: ${theme.colors.gray};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${theme.space[2]} ${theme.space[4]};

      color: ${theme.colors.white};
      font-weight: 500;
      text-transform: uppercase;

      background: ${theme.colors.black};
      border: ${theme.border};
      border-radius: ${theme.borderRadius};
      cursor: pointer;

      svg {
        fill: ${theme.colors.white};
        margin-left: ${theme.space[4]};
        width: 18px;
      }

      &:hover {
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
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
