// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { Text } from 'theme-ui'
import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'
import { motion } from 'framer-motion'

// ___________________________________________________________________

const orbMotion = {
  rest: { opacity: 0, marginTop: '50px', ease: 'easeOut', duration: 1, type: 'spring' },
  hover: {
    opacity: 1,
    marginTop: '0px',
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeIn',
    },
  },
}

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Link
          to={item.link}
          activeClassName="active"
          partiallyActive={true}
          key={idx}
        >
          <S.LinkMotion initial="rest" whileHover="hover" animate="rest">
            <Text
              as="span"
              sx={{
                fontSize: 4,
                letterSpacing: '-2px',
                textTransform: 'uppercase',
              }}
            >
              {item.name}
            </Text>
            <S.Orb variants={orbMotion}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </S.Orb>

            <Text as="span">{item.span}</Text>
          </S.LinkMotion>
        </Link>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'shows',
    link: '/',
    span: "Bakin' up the freshest shows in Reno, Tahoe &amp; beyond.",
  },
  {
    name: 'news',
    link: '/news',
    span: 'Never miss a beat. Stay in tune with Reno events.',
  },
]
