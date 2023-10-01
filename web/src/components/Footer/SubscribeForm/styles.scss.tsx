// Subscribe Form Styles:

import styled from 'styled-components'
import theme from '@/gatsby-plugin-theme-ui'

export const SubscribeForm = styled.div`
  width: 100%;

  h4 {
    margin-top: 0;
    margin-bottom: ${theme.space[1]};
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

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
