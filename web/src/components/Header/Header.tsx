// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text } from 'theme-ui'

// Components
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'

// ___________________________________________________________________

type Props = {
  isHome: boolean
}

const Header: React.FC<Props> = ({ isHome }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header>
        <Flex className="header__billboard">
          <S.Logo onClick={() => setNavOpen(false)}>
            <Link
              to="/"
              className="logo"
              aria-label="Fresh Bakin', back to home"
            >
              FreshBakin'
            </Link>
          </S.Logo>

          {isHome && (
            <Text as="span" sx={{ fontWeight: 600 }}>
              Fresh Bakin’ evolves art,
              <br />
              music, community and culture… nicely.
            </Text>
          )}
        </Flex>

        <Flex className="header__menu">
          <Navigation />
        </Flex>
      </S.Header>

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header
