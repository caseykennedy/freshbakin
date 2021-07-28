// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Components
import Header from '../Header'
import Footer from '../Footer'

// Styles + Theme
import * as S from './styles.scss'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  location?: {
    pathname: string
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(
    `%c dWeb Summit | crafted with care | caseykennedy.hns.to `,
    `background: #5700ff; color: #ffffff`
  )
  return (
    <S.Wrapper>
      <Header />
      <S.Main ref={mainRef}>{children}</S.Main>
      {/* <Footer /> */}
    </S.Wrapper>
  )
}

export default Layout
