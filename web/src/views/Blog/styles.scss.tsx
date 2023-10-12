// Blog Styles:

import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  padding: ${theme.space[4]};
  border-radius: 12px;
  transition: all 0.0667s ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary};
    border-radius: 32px;

    .card__action span {
      margin-left: ${theme.space[5]};
    }
  }

  .card {
    &__title {
      display: flex;
      justify-content: space-between;
    }

    &__figure {
      display: flex;
      margin: ${theme.space[5]} 0;

      &__container {
        flex: 0.75;
        margin-left: auto;
      }
    }

    &__excerpt {
      font-size: ${theme.fontSizes[1]};
    }

    &__action {
      display: flex;
      align-items: center;
      gap: ${theme.space[2]};
      margin-top: ${theme.space[4]};
      font-size: ${theme.fontSizes[3]};
      text-transform: uppercase;

      span {
        transition: all 0.0667s ease-in-out;
      }
  }
`

export const Blog = styled.div``
