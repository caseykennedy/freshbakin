// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Article = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};
  }

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

  .utilities {
    @media ${theme.mq.tablet} {
      position: sticky;
      top: ${theme.space[5]};
    }
  }
`
