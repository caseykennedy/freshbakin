// Post Styles:

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

export const Article = styled.article`
  background: ${theme.colors.black};
  color: ${theme.colors.white};

  a {
    /* These are technically the same, but use both */
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;
    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  .article__body {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: ${theme.space[4]};
    position: relative;

    @media ${theme.mq.tablet} {
      flex-flow: row nowrap;
    }

    &__block {
      flex: 2;
    }

    &__aside {
      display: flex;
      flex-flow: column nowrap;
      gap: ${theme.space[2]};
      width: 100%;
      flex: 1;
      top: 0;
      padding-top: ${theme.space[2]};
      text-align: right;

      @media ${theme.mq.tablet} {
        position: sticky;
        /* width: initial; */
      }
    }
  }

  .article__btn {
    display: flex;
    align-items: center;
    justify-content: center;

    border: ${theme.border};
    border-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};

    padding: ${theme.space[5]} ${theme.space[2]};
    height: 100%;
    width: 100%;

    font-size: ${theme.fontSizes[4]};
    text-align: center;
    text-transform: uppercase;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[4]} ${theme.space[3]};
    }

    @media ${theme.mq.desktop} {
      padding: ${theme.space[5]} ${theme.space[3]};
    }

    &:hover {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.black};
    }

    &:active {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.black};
    }
  }
`
