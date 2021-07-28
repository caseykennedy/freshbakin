import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

// ___________________________________________________________________

const Symbol = () => (
  <SVG
    height="47"
    viewBox="0 0 40 47"
    fill="none"
  >
    <defs>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(19.8285 23.8573) scale(17.1132 17.1129)"
      >
        <stop stopColor={theme.colors.primary} />
        <stop offset="0.275759" stopColor={theme.colors.primary} />
        <stop offset="0.642387" stopColor={theme.colors.white} />
        <stop offset="1" stopColor={theme.colors.white} />
      </radialGradient>
    </defs>
    <path
      d="M8.823 23.8574C8.823 29.9361 13.7497 34.8613 19.8284 34.8613C25.9057 34.8613 30.8337 29.9361 30.8337 23.8574C30.8337 17.7801 25.9057 12.8509 19.8284 12.8509C13.7497 12.8509 8.823 17.7801 8.823 23.8574Z"
      fill="url(#paint0_radial)"
    />
    <path
      d="M0.5979 12.586V34.8633L19.8912 46.002L39.1846 34.8633V12.586L19.8912 1.44729L0.5979 12.586Z"
      stroke="black"
      stroke-width="0.918667"
      stroke-miterlimit="10"
    />
    <path
      d="M19.8917 23.7285L0.618408 12.5858"
      stroke="black"
      stroke-width="0.918667"
      stroke-miterlimit="10"
    />
    <path
      d="M19.8916 23.7285L39.1863 12.5858"
      stroke="black"
      stroke-width="0.918667"
      stroke-miterlimit="10"
    />
    <path
      d="M19.8916 23.7292V46.0039"
      stroke="black"
      stroke-width="0.918667"
      stroke-miterlimit="10"
    />
  </SVG>
)

export default Symbol

// ___________________________________________________________________

const SVG = styled(motion.svg)``
