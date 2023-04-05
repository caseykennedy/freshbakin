// Navigation
// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { Text, Heading } from 'theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

const orbMotion = {
  rest: {
    opacity: 0,
    marginTop: '50px',
  },
  hover: {
    opacity: 1,
    marginTop: '0px',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
}

const data = [
  {
    name: 'shows',
    link: '/',
    span: "Bakin' up the freshest shows in Reno, Tahoe & beyond.",
  },
  {
    name: 'interactive',
    link: '/interactive',
    span: 'Elevating events with immersive experiences.',
  },
  //   {
  //     name: 'news',
  //     link: '/news',
  //     span: 'Never miss a beat. Stay in tune with Reno events.',
  //   },
]

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Link
          to={item.link}
          activeClassName="active"
          // partiallyActive={true}
          key={idx}
        >
          <S.LinkMotion initial="rest" whileHover="hover" animate="rest">
            <Heading className="text--md">{item.name}</Heading>

            <S.Orb variants={orbMotion} className="orb">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </S.Orb>

            <span>{item.span}</span>
          </S.LinkMotion>
        </Link>
      ))}
      <a
        href="https://www.sacredstatedesign.com/fresh-bakin"
        target="_blank"
        rel="noreferrer"
      >
        <S.LinkMotion initial="rest" whileHover="hover" animate="rest">
          <Heading className="text--md">shop</Heading>

          <S.Orb variants={orbMotion} className="orb">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </S.Orb>

          <span>Snag some swag.</span>
        </S.LinkMotion>
      </a>
    </S.Nav>
  )
}

export default Navigation
