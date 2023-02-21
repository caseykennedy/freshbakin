// InteractivePage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const InteractivePage = styled.div`
  background: ${theme.colors.black};
  color: ${theme.colors.white};

  .hero {
    border-bottom: ${theme.border};
    border-color: ${theme.colors.white};
    padding-bottom: ${theme.space[2]};

    &__tags {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-bottom: ${theme.space[1]};

      font-size: ${theme.fontSizes[4]};
      text-transform: uppercase;
    }

    &__statement {
    }

    &__marquee {
      border-top: ${theme.border};
      border-bottom: ${theme.border};
      border-color: ${theme.colors.white};
      margin-top: ${theme.space[2]};
      margin-bottom: ${theme.space[2]};
      padding-top: ${theme.space[2]};
      padding-bottom: ${theme.space[2]};
    }
  }

  .intro {
    max-width: 1024px;
    margin: 0 auto;

    h1 {
      margin: 0 auto ${theme.space[2]};
      text-align: center;
      text-transform: uppercase;
      max-width: 35ch;
    }
  }

  .features {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    gap: ${theme.space[4]};

    &__item {
      border: ${theme.border};
      border-color: ${theme.colors.white};
      border-radius: ${theme.borderRadius};
      padding: ${theme.space[3]} ${theme.space[5]};

      font-size: ${theme.fontSizes[4]};
      text-align: center;
      text-transform: uppercase;

      &:hover {
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        color: ${theme.colors.black};
      }
    }
  }

  .experiences {
    &__item {
      display: flex;
      flex-flow: column-reverse nowrap;

      border-top: ${theme.border};
      border-color: ${theme.colors.white};
      padding-top: ${theme.space[2]};
      padding-bottom: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        flex-flow: row wrap;
      }

      &__details {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        a {
          background: ${theme.colors.white};
          border: ${theme.border};
          border-color: ${theme.colors.white};
          border-radius: ${theme.borderRadius};

          display: inline-block;
          margin-top: ${theme.space[5]};
          padding: ${theme.space[2]} ${theme.space[4]};

          color: ${theme.colors.black};
          font-size: ${theme.fontSizes[3]};
          text-align: center;
          text-transform: uppercase;

          &:hover {
            background: ${theme.colors.primary};
            border-color: ${theme.colors.primary};
            color: ${theme.colors.black};
          }

          span {
            font-size: ${theme.fontSizes[3]};
            line-height: 0%;
            margin-left: ${theme.space[4]};
          }
        }
      }

      &__figure {
        flex: 2;
        border-bottom: ${theme.border};
        border-color: ${theme.colors.white};
        margin-bottom: ${theme.space[2]};
        padding-bottom: ${theme.space[2]};

        @media ${theme.mq.tablet} {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;

          border-left: ${theme.border};
          border-color: ${theme.colors.white};
          margin-left: ${theme.space[2]};
          padding-left: ${theme.space[2]};
        }
      }

      &:nth-child(even) {
        flex-flow: column-reverse nowrap;

        @media ${theme.mq.tablet} {
          flex-flow: row-reverse wrap;
        }

        .experiences__item__figure {
          border-left: none;
          margin-left: 0;
          padding-left: 0;

          border-bottom: ${theme.border};
          border-color: ${theme.colors.white};
          margin-bottom: ${theme.space[2]};
          padding-bottom: ${theme.space[2]};

          @media ${theme.mq.tablet} {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;

            border-right: ${theme.border};
            border-color: ${theme.colors.white};
            margin-right: ${theme.space[2]};
            padding-right: ${theme.space[2]};
          }
        }
      }
    }
  }
`
