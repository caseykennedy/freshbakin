// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import Typist from 'react-typist'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

// Theme + ui
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { Box, Flex, Text, useColorMode } from 'theme-ui'

// Components
import Symbol from '../Symbol'
import Navigation from './Navigation'
import MobileNav from './MobileNav'
import Modal from '../Modal'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)
  return (
    <>
      <S.Header px={theme.gutter.axis}>
        <Flex className="header-inner">
          <Link to="/" className="logo" aria-label="dotNFT, back to home">
            <S.Logo onClick={() => setNavOpen(false)}>
              <Text className="wordmark" aria-label="dotNFT">
                FreshBakin'
              </Text>
            </S.Logo>
          </Link>

          <S.Menu>
            <Navigation />

            {/* <Box className="symbol">
              <Symbol />
            </Box> */}
          </S.Menu>
        </Flex>
      </S.Header>

      {/* <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal> */}
    </>
  )
}

export default Header

// const cursorProps = {
//   show: false,
//   blink: true,
//   element: '|',
//   hideWhenDone: true,
//   hideWhenDoneDelay: 1000,
// }
