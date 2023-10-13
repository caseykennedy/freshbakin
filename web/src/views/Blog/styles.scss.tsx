// Blog Styles:

import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.background};
  padding: ${theme.space[2]};
  transition: all 0.0667s ease-in-out;

  &:hover {
    background-color: ${theme.colors.primary};

    .card__action span {
      margin-right: 0;
    }
  }

  .card__title {
    display: flex;
    justify-content: space-between;
  }

  .card__figure {
    display: flex;
    margin: ${theme.space[5]} 0;

    &__container {
      flex: 0.75;
      margin-left: auto;
    }
  }

  .card__excerpt {
    font-size: ${theme.fontSizes[1]};
  }

  .card__action {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.space[2]};
    margin-top: ${theme.space[4]};
    font-size: ${theme.fontSizes[3]};
    text-transform: uppercase;

    span {
      font-size: ${theme.fontSizes[3]};
      margin-right: ${theme.space[2]};
      transition: all 0.0667s ease-in-out;
    }
  }
`

export const Blog = styled.div``
