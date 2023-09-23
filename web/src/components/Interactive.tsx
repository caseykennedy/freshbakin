import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'

type Props = { fill?: string }

const Interactive: React.FC<Props> = ({ fill }) => {
  return (
    <SVG
      width="100%"
      viewBox="0 0 1402 185"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      fill={fill}
    >
      <motion.path
        variants={polyVariant}
        d="M0 1.55898H22.6057V183.441H0V1.55898Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M46.1614 183.441V1.55898H66.9483L164.646 141.868V1.55898H186.732V183.441H165.946L68.2475 43.132V183.441H46.1614Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M199.142 1.55898H339.713V22.3455H280.73V183.441H258.124V22.3455H199.142V1.55898Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M352.138 1.55898H468.025V22.3455H374.744V80.5478H452.435V101.334H374.744V162.655H471.403V183.441H352.138V1.55898Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M554.717 1.55898C566.669 1.55898 577.236 3.89747 586.417 8.57444C595.597 13.0782 602.7 19.574 607.723 28.0618C612.747 36.3764 615.258 46.1634 615.258 57.4228C615.258 70.0679 611.707 81.0674 604.605 90.4214C597.676 99.6021 588.322 105.838 576.543 109.129L617.337 183.441H591.873L554.197 113.546H507.686V183.441H485.081V1.55898H554.717ZM507.686 92.7598H552.898C564.85 92.7598 574.377 89.5552 581.48 83.1461C588.582 76.7369 592.133 68.1625 592.133 57.4228C592.133 46.8563 588.582 38.3685 581.48 31.9593C574.377 25.5501 564.937 22.3455 553.158 22.3455H507.686V92.7598Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M613.87 183.441L683.246 1.55898H710.009L779.125 183.441H754.961L735.733 134.333H656.483L637.255 183.441H613.87ZM663.239 113.806H728.977L695.978 26.243L663.239 113.806Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M773.391 92.5C773.391 74.3118 776.942 58.2023 784.044 44.1714C791.146 30.1404 801.28 19.3141 814.445 11.6924C827.61 3.89747 842.853 0 860.176 0C880.27 0 897.072 5.45646 910.584 16.3694C924.268 27.2823 932.843 42.1793 936.307 61.0604H913.702C910.411 48.4153 903.915 38.5417 894.214 31.4396C884.687 24.3375 872.994 20.7865 859.136 20.7865C846.664 20.7865 835.664 23.8179 826.137 29.8806C816.61 35.9433 809.248 44.4312 804.051 55.3441C799.028 66.0838 796.516 78.4691 796.516 92.5C796.516 106.358 799.028 118.743 804.051 129.656C809.248 140.569 816.61 149.057 826.137 155.119C835.664 161.182 846.664 164.213 859.136 164.213C873.167 164.213 884.86 160.749 894.214 153.82C903.568 146.718 909.977 136.758 913.442 123.94H936.048C932.583 142.821 924.095 157.718 910.584 168.631C897.246 179.544 880.443 185 860.176 185C842.853 185 827.61 181.189 814.445 173.567C801.28 165.772 791.146 154.946 784.044 141.088C776.942 127.058 773.391 110.861 773.391 92.5Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M932.365 1.55898H1072.94V22.3455H1013.95V183.441H991.348V22.3455H932.365V1.55898Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1085.36 1.55898H1107.97V183.441H1085.36V1.55898Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1116.19 1.55898H1140.1L1195.7 156.678L1251.05 1.55898H1274.43L1208.95 183.441H1181.67L1116.19 1.55898Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1282.74 1.55898H1398.62V22.3455H1305.34V80.5478H1383.03V101.334H1305.34V162.655H1402V183.441H1282.74V1.55898Z"
        className="letter"
      />
    </SVG>
  )
}

export default Interactive

const SVG = styled(motion.svg)<{ fill?: string }>`
  .letter {
    fill: ${(p) => (p.fill ? p.fill : theme.colors.black)};
  }
`

const polyVariant = {
  visible: {
    opacity: 1,
    marginTop: '5px',
    transition: {
      duration: 1,
      type: 'spring',
      ease: 'easeOut',
    },
  },
  hidden: {
    opacity: 0,
  },
}

const svgVariant = {
  visible: {
    transition: { staggerChildren: 0.075, delayChildren: 0.1 },
  },
}
