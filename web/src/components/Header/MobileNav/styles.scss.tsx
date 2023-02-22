// Mobile Navigation Styles:
// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'
import theme from '../../../gatsby-plugin-theme-ui'

export const MobileNav = styled(motion.ul)`
  display: flex;
  flex-flow: column nowrap;

  margin: 0;
  height: 100%;
  width: 100%;

  background: ${theme.colors.background};
`

export const NavLink = styled(motion.li)`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;

  margin: 0;
  width: 100%;
  padding: ${theme.space[2]};

  &:not(:last-child) {
    border-bottom: ${theme.border};
  }

  a {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[3]};
    text-decoration: uppercase;
    text-transform: uppercase;

    &:hover {
      color: inherit;
      text-decoration: none;
    }

    span {
      font-size: 16px;
      text-transform: none;
      max-width: 33ch;
    }
  }
`
