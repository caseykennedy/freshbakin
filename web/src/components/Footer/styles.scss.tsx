// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

import Section from '../Section'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  padding: ${theme.space[1]} ${theme.space[2]} ${theme.space[6]};
  position: relative;

  border-top: ${theme.border};

  .footer {
    &__marquee {
      border-bottom: ${theme.border};
      padding-bottom: ${theme.space[1]};
    }

    &__subscribe {
      display: flex;
      align-items: center;
      width: 100%;

      .form {
        border-right: ${theme.border};
        flex: 2;
        margin: ${theme.space[2]} ${theme.space[2]} ${theme.space[2]} 0;
        padding: ${theme.space[6]} ${theme.space[2]} 0 0;

        @media ${theme.mq.tablet} {
          flex: 1;
        }
      }

      .social {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: ${theme.space[6]};
          &:hover {
            transform: scale(1.25);
          }
        }
      }
    }

    &__copyright {
      display: flex;
      justify-content: space-between;

      border-top: ${theme.border};
      margin: 0 auto;
      max-width: ${theme.maxWidth};
      padding-top: ${theme.space[2]};
      width: 100%;
    }
  }
`
