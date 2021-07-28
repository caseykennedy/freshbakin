import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'

// ___________________________________________________________________

type Props = { fill?: string }

const Handshake: React.FC<Props> = ({ fill }) => {
  return (
    <SVG
      width="28"
      viewBox="0 0 27.89 29.12"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      fill={fill}
    >
      <defs>
        <linearGradient
          id="Indigo_224"
          y1="14.56"
          x2="27.89"
          y2="14.56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={theme.colors.accent} />
          <stop offset="0.75" stopColor={theme.colors.primary} />
          <stop offset="1" stopColor={theme.colors.secondary} />
        </linearGradient>
      </defs>
      <path
        className="hns-1"
        d="M24.07,9.5,22.26,6.29h3.51a.32.32,0,0,1,.25.14l.69,1.13L27.89,9.5ZM17.59,29a.26.26,0,0,1-.23.15H13.77l5.57-10a.54.54,0,0,0-.21-.73.59.59,0,0,0-.26-.07h0l-9.49,0L7.49,15.07h14l.07,0h0a.61.61,0,0,0,.25-.23l2.28-4.22h3.76Zm-4.75-.38-.45-.74c-.57-1-1.31-2.17-1.4-2.3a.31.31,0,0,1,0-.26c.14-.24,2.66-4.78,3.27-5.89H18ZM6.56,22.33,4.73,19.08l1.85-3.46,1.85,3.21C7.85,19.91,7,21.6,6.56,22.33Zm-2.45.51h-2a.33.33,0,0,1-.25-.15l-.59-1L0,19.62H3.81l1.81,3.22ZM10.3.15A.24.24,0,0,1,10.53,0h3.6L8.54,10v0l0,.05,0,.05a.09.09,0,0,1,0,0v.21s0,0,0,0a.43.43,0,0,0,0,.05l0,0s0,0,0,0l0,0,0,0,0,0,.05,0,0,0h0l.08,0H18.5l1.1,1.91c.29.52.54,1,.74,1.3H6.54a.53.53,0,0,0-.46.28L3.8,18.55H0Zm4.75.4.33.55,1.51,2.47a.29.29,0,0,1,0,.27L13.6,9.72H9.92Zm6.27,6.24L23.15,10l-1.87,3.45-.76-1.33-1.09-1.91Z"
      />
    </SVG>
  )
}

export default Handshake

// ___________________________________________________________________

const SVG = styled(motion.svg)<{ fill?: string }>`
  .hns-1 {
    fill-rule: evenodd;
    fill: ${(p) => (p.fill ? theme.colors.black : `url(#Indigo_224)`)};
  }
`

const polyVariant = {
  visible: {
    opacity: 1,
    transition: {
      duration: '0.333s',
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.015, delayChildren: 0.02 },
  },
}
