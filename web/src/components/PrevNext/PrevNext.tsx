// Previous / Next
// ___________________________________________________________________

import React from 'react'
import * as S from './styles.scss'

// ___________________________________________________________________

const path = 'blog'

const PrevNext: React.FC<EventContextShape> = ({ pageContext }) => {
  const post = pageContext.event
  const prev = pageContext.prev
  const next = pageContext.next
  return (
    <S.PrevNext>
      {!prev ? (
        <S.Button to={`/${path}`}>View all</S.Button>
      ) : (
        <S.Button to={`/${path}/${prev.slug.current}`}>{prev.title}</S.Button>
      )}
      {!next ? (
        <S.Button to={`/${path}`}>View all</S.Button>
      ) : (
        <S.Button to={`/${path}/${next.slug.current}`}>{next.title}</S.Button>
      )}
    </S.PrevNext>
  )
}

export default PrevNext
