// Layout:
import React, { useRef } from 'react'

import Footer from '@/components/Footer'
import FreshBakin from '@/components/FreshBakin'
import Header from '@/components/Header'
import MarqueeMessage from '@/components/MarqueeMessage'

import * as S from './styles.scss'

import 'react-responsive-modal/styles.css'

export type LayoutProps = {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  const isHome = location.pathname === '/'

  // eslint-disable-next-line no-console
  console.log(`%c FreshBakin' | crafted with care | caseykennedy.me `, `background: #ffffff; color: #000000`)
  return (
    <S.Wrapper>
      <S.Wordmark>
        <div className="wordmark__inner">{isHome ? <FreshBakin /> : <MarqueeMessage />}</div>
      </S.Wordmark>
      <Header isHome={isHome} />
      <S.Main ref={mainRef}>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  )
}

export default Layout
