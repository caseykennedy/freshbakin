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
  item: any
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
      whileTap={{ scale: 0.95 }}
      onClick={handleExitOnClick}
      isDark={isDark}
    >
      <Link to={item.link}>{item.name}</Link>
    </S.NavLink>
  )
}

const MobileNav: React.FC<NavProps> = ({ handleExitOnClick, isOpen }) => {
  return (
    <motion.div initial="closed" animate={isOpen ? 'open' : 'closed'}>
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
    name: 'Home',
    link: '/',
  },
  {
    name: 'Incubator',
    link: '/incubator',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Donate',
    link: '/donate',
  },
  {
    name: 'Grants',
    link: '/grants',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
]

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.25 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
