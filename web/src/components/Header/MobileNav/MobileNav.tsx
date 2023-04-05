// MobileNav:
// Mobile Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import theme from '../../../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: {
    name: string
    link: string
    detail?: string
    type?: string
  }
  handleExitOnClick: () => any
}

type NavProps = {
  handleExitOnClick: () => any
  isOpen: boolean
}

const NavLink: React.FC<LinkProps> = ({ item, handleExitOnClick }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <S.NavLink
      variants={itemVariants}
      whileTap={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.black,
      }}
      onClick={handleExitOnClick}
    >
      {item.type === 'external' ? (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.name}
          <span>{item.detail}</span>
        </a>
      ) : (
        <Link to={item.link}>
          {item.name}
          <span>{item.detail}</span>
        </Link>
      )}
    </S.NavLink>
  )
}

const MobileNav: React.FC<NavProps> = ({ handleExitOnClick, isOpen }) => {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      style={{ display: 'flex', flexFlow: 'column nowrap', height: 'inherit' }}
    >
      <S.MobileNav variants={listVariants}>
        {data.map((item, idx) => (
          <NavLink
            key={idx}
            handleExitOnClick={handleExitOnClick}
            item={item}
          />
        ))}
      </S.MobileNav>
    </motion.div>
  )
}

export default MobileNav

// ___________________________________________________________________

const data = [
  {
    name: 'shows',
    link: '/',
    detail: "Bakin' up the freshest shows in Reno, Tahoe &amp; beyond.",
  },
  {
    name: 'interactive',
    link: '/interactive',
    detail: 'Elevating events with immersive experiences.',
  },
  {
    name: 'shop',
    link: 'https://www.sacredstatedesign.com/fresh-bakin',
    detail: 'Snag some swag.',
    type: 'external',
  },
]

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      stiffness: 100,
      velocity: -100,
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {},
  },
}

const listVariants = {
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
  closed: {
    opacity: 0,
  },
}
