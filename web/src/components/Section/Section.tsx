// Section:
// Global Section component

// Core
import * as React from 'react'
import { Box } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'

type Props = {
  bg?: string
  border?: boolean
  children: React.ReactNode
  className?: string
  color?: string
  maxWidth?: number | number[] | string | string[]
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
  id?: string
  overflow?: string
}

const Section: React.FC<Props> = ({
  bg,
  border,
  children,
  className,
  color,
  maxWidth,
  pt,
  pb,
  pr,
  pl,
  id,
  overflow,
}) => (
  <Box
    as="section"
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
    id={id}
    className={className}
    sx={{
      borderTop: border ? theme.border : `none`,
      borderColor: `white`,
      overflow: overflow ? overflow : `visible`,
      position: `relative`,
      width: `100%`,
    }}
  >
    <Box
      pr={pr}
      pl={pl}
      mx="auto"
      sx={{
        maxWidth: maxWidth ? maxWidth : theme.maxWidth,
        boxSizing: 'content-box',
      }}
    >
      {children}
    </Box>
  </Box>
)

export default Section

const defaultProps = {
  pt: theme.gutter.space,
  pb: theme.gutter.space,
  pr: theme.gutter.space,
  pl: theme.gutter.space,
}

Section.defaultProps = defaultProps
