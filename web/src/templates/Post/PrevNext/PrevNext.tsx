// Previous / Next pre-footer
// TODO: button bg image

// ___________________________________________________________________

import React from 'react'

// Components
import Icon from '../../../components/Icons'

// Elements
import { Flex } from '../../../components/ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const path = 'blog'

const PrevNext: React.FC<EventContextShape> = ({ pageContext }) => {
  const post = pageContext.event
  const prev = pageContext.prev
  const next = pageContext.next
  // console.log('—————|— Prev / Next —|—————')
  // console.log(prev)
  // console.log(next)
  return (
    <S.PrevNext width={1}>
      {!prev ? (
        <S.Button to={`/${path}`}>View all</S.Button>
      ) : (
        <S.Button to={`/${path}/${prev.slug.current}`}>
          {prev.title}
        </S.Button>
      )}
      {!next ? (
        <S.Button to={`/${path}`}>View all</S.Button>
      ) : (
        <S.Button to={`/${path}/${next.slug.current}`}>
          {next.title}
        </S.Button>
      )}
    </S.PrevNext>
  )
}

export default PrevNext
