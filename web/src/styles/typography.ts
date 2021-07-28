// Typography

// ___________________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// Stolzl Light
import StolzlLightEot from './fonts/Stolzl-Light.eot'
import StolzlLightOtf from './fonts/Stolzl-Light.otf'
import StolzlLightWoff from './fonts/Stolzl-Light.woff'
import StolzlLightWoff2 from './fonts/Stolzl-Light.woff2'

// Stolzl Regular
import StolzlRegularEot from './fonts/Stolzl-Regular.eot'
import StolzlRegularOtf from './fonts/Stolzl-Regular.otf'
import StolzlRegularWoff from './fonts/Stolzl-Regular.woff'
import StolzlRegularWoff2 from './fonts/Stolzl-Regular.woff2'

// Stolzl Book
import StolzlBookEot from './fonts/Stolzl-Book.eot'
import StolzlBookOtf from './fonts/Stolzl-Book.otf'
import StolzlBookWoff from './fonts/Stolzl-Book.woff'
import StolzlBookWoff2 from './fonts/Stolzl-Book.woff2'

// Stolzl Medium
import StolzlMediumEot from './fonts/Stolzl-Medium.eot'
import StolzlMediumOtf from './fonts/Stolzl-Medium.otf'
import StolzlMediumWoff from './fonts/Stolzl-Medium.woff'
import StolzlMediumWoff2 from './fonts/Stolzl-Medium.woff2'

// Stolzl Bold
import StolzlBoldEot from './fonts/Stolzl-Bold.eot'
import StolzlBoldOtf from './fonts/Stolzl-Bold.otf'
import StolzlBoldWoff from './fonts/Stolzl-Bold.woff'
import StolzlBoldWoff2 from './fonts/Stolzl-Bold.woff2'

// DM Mono Regular
import DMMonoRegularEot from './fonts/DMMono-Regular.eot'
import DMMonoRegularWoff2 from './fonts/DMMono-Regular.woff2'
import DMMonoRegularWoff from './fonts/DMMono-Regular.woff'
import DMMonoRegularOtf from './fonts/DMMono-Regular.otf'

// ___________________________________________________________________

const Typography = css`
  /* Stolzl Light */
  @font-face {
    font-family: 'Stolzl';
    src: url(${StolzlLightEot});
    src: url(${StolzlLightWoff2}) format('woff2'),
      url(${StolzlLightWoff}) format('woff'),
      url(${StolzlLightOtf}) format('opentype'),
      url(${StolzlLightEot}?#iefix) format('embedded-opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* Stolzl Regular */
  @font-face {
    font-family: 'Stolzl';
    src: url(${StolzlRegularEot});
    src: url(${StolzlRegularWoff2}) format('woff2'),
      url(${StolzlRegularWoff}) format('woff'),
      url(${StolzlRegularOtf}) format('opentype'),
      url(${StolzlRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Stolzl Book */
  @font-face {
    font-family: 'Stolzl';
    src: url(${StolzlBookEot});
    src: url(${StolzlBookWoff2}) format('woff2'),
      url(${StolzlBookWoff}) format('woff'),
      url(${StolzlBookOtf}) format('opentype'),
      url(${StolzlBookEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  /* Stolzl Medium */
  @font-face {
    font-family: 'Stolzl';
    src: url(${StolzlMediumEot});
    src: url(${StolzlMediumWoff2}) format('woff'),
      url(${StolzlMediumWoff}) format('woff'),
      url(${StolzlMediumOtf}) format('opentype'),
      url(${StolzlMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* Stolzl Bold */
  @font-face {
    font-family: 'Stolzl';
    src: url(${StolzlBoldEot});
    src: url(${StolzlBoldWoff2}) format('woff2'),
      url(${StolzlBoldWoff}) format('woff'),
      url(${StolzlBoldOtf}) format('opentype'),
      url(${StolzlBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* DM Mono Regular */
  @font-face {
    font-family: 'DMMono';
    src: url(${DMMonoRegularEot});
    src: url(${DMMonoRegularWoff2}) format('woff2'),
      url(${DMMonoRegularWoff}) format('woff'),
      url(${DMMonoRegularOtf}) format('opentype'),
      url(${DMMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    color: ${theme.colors.text};

    font-size: ${theme.fontSizes[2]};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  mark {
    background-color: ${theme.colors.accent};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    transition: ${theme.transition.all};
  }

  .text--xxxl {
    font-size: ${theme.fontSizes[5]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[6]};
    }

    @media ${theme.mq.desktop} {
      font-size: ${theme.fontSizes[7]};
    }
  }

  h1,
  .text--xxl {
    font-size: ${theme.fontSizes[6]};
    margin: 0 0 ${theme.space[2]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[7]};
    }
  }

  h2,
  .text--xl {
    font-size: ${theme.fontSizes[5]};

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h3,
  .text--lg {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[5]});
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[4]});
    }
  }

  h5,
  .text--sm {
    font-size: calc(${theme.fontSizes[2]});
  }

  h6,
  .text--xs {
    font-size: calc(${theme.fontSizes[1]} * 1.15);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;

    @media ${theme.mq.tablet} {
      font-size: ${theme.fontSizes[1]};
    }
  }

  p,
  .text--base {
    font-size: ${theme.fontSizes[2]};
    line-height: ${theme.root.font.bodyLineHeight};

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.primary};

      &:hover,
      &:focus {
        text-decoration: none;
        color: ${theme.colors.primary};
      }
    }

    strong {
    }
  }

  strong {
    font-weight: 800;
  }

  sup {
    font-size: 70%;
    font-weight: 800;
  }

  .text--mono {
    font-family: ${theme.fonts.mono};
    letter-spacing: -0.75px;
  }

  .text--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .text--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text--underline {
    text-decoration: underline;
  }

  .text--justify {
    @media ${theme.mq.tablet} {
      text-align: justify;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    /* text-decoration-thickness: 1.5px; */

    position: relative;
    transition: ${theme.transition.all};

    /* &:hover,
    &:focus {
      color: ${theme.colors.primary};
      text-decoration: none;
    } */

    &.text--link {
      font-weight: 600;
      transform: text-decoration ${theme.transition.global};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  mark {
    background-color: transparent;
    border: 2px solid red;
    color: inherit;
    padding: 0 calc(${theme.space[1]} / 1.5);
  }

  ul {
    margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    /* list-style-position: inside; */
    list-style-type: square;

    @media ${theme.mq.tablet} {
      margin: 0 0 ${theme.space[6]} ${theme.space[4]};
    }

    li {
      font-size: ${theme.fontSizes[2]};
      margin: 0 0 ${theme.space[4]};

      @media ${theme.mq.tablet} {
        font-size: calc(${theme.fontSizes[2]} * 1.25);
      }

      &:last-child {
        margin-bottom: 0;
      }

      a {
        text-decoration: underline;
        color: ${theme.colors.primary};

        &:hover,
        &:focus {
          text-decoration: none;
          color: ${theme.colors.primary};
        }
      }

      strong {
      }
    }
  }
`

export default Typography

// ___________________________________________________________________
