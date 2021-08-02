// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'
import FreshBakin from '../FreshBakin'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'
import { Box, Text } from 'theme-ui'
import Marquee from 'react-fast-marquee'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const MarqueeProps = {
  gradient: false,
  speed: 20,
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  const isHome = location.pathname === '/'

  // eslint-disable-next-line no-console
  console.log(
    `%c dWeb Summit | crafted with care | caseykennedy.hns.to `,
    `background: #5700ff; color: #ffffff`
  )
  return (
    <S.Wrapper>
      <S.Wordmark>
        <Box className="wordmark__inner">
          {isHome ? (
            <FreshBakin />
          ) : (
            <Marquee {...MarqueeProps}>
              <Text className="text--sm  text--uppercase">
                ● PURVEYORS OF FINE TIMES SINCE 2002 ● BAKIN’ UP THE FRESHEST
                SHOWS IN RENO, TAHOE AND BEYOND ● PURVEYORS OF FINE TIMES SINCE 2002 ● BAKIN’ UP THE FRESHEST
                SHOWS IN RENO, TAHOE AND BEYOND
              </Text>
            </Marquee>
          )}
        </Box>
      </S.Wordmark>
      <Header isHome={isHome} />
      <S.Main ref={mainRef}>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
