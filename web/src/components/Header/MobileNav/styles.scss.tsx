// Mobile Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { motion } from 'framer-motion'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'

// Begin Styles
// ___________________________________________________________________

export const MobileNav = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0;
  height: 100%;
  width: 100%;
`

export const NavLink = styled(motion.li)`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  padding: ${theme.space[2]} ${theme.space[2]};

  a {
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[3]};
    text-decoration: uppercase;
    width: 100%;

    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
`
