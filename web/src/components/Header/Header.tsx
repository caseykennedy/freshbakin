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
import Symbol from '../Symbol'

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
          <S.Logo sx={{ mb: 5 }} onClick={() => setNavOpen(false)}>
            <Link
              to="/"
              className="logo"
              aria-label="Fresh Bakin', back to home"
            >
              <Symbol />
            </Link>
          </S.Logo>

          {isHome && (
            <Text as="span" sx={{ fontWeight: 600, mt: 6 }}>
              Fresh Bakin’ evolves art,
              <br />
              music, community and culture… nicely.
            </Text>
          )}
        </Flex>

        <Flex className="header__menu">
          <Navigation />
          <S.Toggle onClick={toggleMenu} aria-label="toggle menu">
            <HamburgerMenu
              isOpen={!isNavOpen ? false : true}
              menuClicked={toggleMenu}
              width={44}
              height={14}
              strokeWidth={2}
              rotate={0}
              color={theme.colors.black}
              borderRadius={0}
              animationDuration={0.333}
            />
          </S.Toggle>
        </Flex>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
