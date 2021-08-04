// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { motion } from 'framer-motion'

// ___________________________________________________________________

export const Nav = styled.nav`
  display: none;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  @media ${theme.mq.tablet} {
    display: flex;
  }

  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: ${theme.border};

    color: ${theme.colors.text};
    text-decoration: none;

    padding-right: ${theme.space[4]};
    padding-left: ${theme.space[4]};
    height: 100%;

    span {
      max-width: 250px;
    }

    &.active {
      .orb {
        opacity: 1 !important;
      }
    }

    /* &.active,
    &:hover {
      color: ${theme.colors.primary};
    } */
  }
`

export const LinkMotion = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  height: 100%;
`

export const Orb = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;

  svg {
    width: auto;
    height: 50px;
    object-fit: scale-down;
  }
`
