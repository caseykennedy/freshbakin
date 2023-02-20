import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'

// ___________________________________________________________________

type Props = { fill?: string }

const Experiential: React.FC<Props> = ({ fill }) => {
  return (
    <SVG
      width="100%"
      viewBox="0 0 1404 170"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      fill={fill}
    >
      <motion.path
        variants={polyVariant}
        d="M0 0H108.023V19.4286H21.0718V73.8286H93.4911V93.2571H21.0718V150.571H111.172V170H0V0Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M172.121 83.0572L118.109 0H142.814L185.684 66.0571L229.039 0H251.806L197.794 83.0572L255.439 170H230.492L183.989 100.057L137.243 170H114.476L172.121 83.0572Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M333.102 0C344.243 0 354.093 2.18571 362.651 6.55715C371.209 10.7667 377.748 16.8381 382.27 24.7714C386.952 32.5429 389.293 41.6905 389.293 52.2143C389.293 62.7381 386.952 71.9667 382.27 79.9C377.587 87.8333 370.967 93.9857 362.409 98.3571C354.012 102.567 344.243 104.671 333.102 104.671H289.021V170H267.949V0H333.102ZM289.021 85.2429H331.164C342.306 85.2429 351.187 82.2476 357.807 76.2571C364.427 70.2667 367.737 62.2524 367.737 52.2143C367.737 42.1762 364.427 34.2429 357.807 28.4143C351.348 22.4238 342.548 19.4286 331.406 19.4286H289.021V85.2429Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M400.859 0H508.882V19.4286H421.931V73.8286H494.35V93.2571H421.931V150.571H512.031V170H400.859V0Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M589.692 0C600.833 0 610.683 2.18571 619.241 6.55715C627.799 10.7667 634.419 16.8381 639.102 24.7714C643.784 32.5429 646.125 41.6905 646.125 52.2143C646.125 64.0333 642.815 74.3143 636.195 83.0572C629.736 91.6381 621.017 97.4667 610.037 100.543L648.063 170H624.327L589.207 104.671H545.853V170H524.781V0H589.692ZM545.853 85.2429H587.996C599.138 85.2429 608.018 82.2476 614.639 76.2571C621.259 70.2667 624.569 62.2524 624.569 52.2143C624.569 42.3381 621.259 34.4048 614.639 28.4143C608.018 22.4238 599.218 19.4286 588.238 19.4286H545.853V85.2429Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M661.948 0H683.02V170H661.948V0Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M704.977 0H813.001V19.4286H726.049V73.8286H798.469V93.2571H726.049V150.571H816.15V170H704.977V0Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M828.899 170V0H848.276L939.345 131.143V0H959.932V170H940.556L849.487 38.8571V170H828.899Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M971.499 0H1102.53V19.4286H1047.55V170H1026.48V19.4286H971.499V0Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1114.11 0H1135.19V170H1114.11V0Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1143.34 170L1208.01 0H1232.95L1297.38 170H1274.86L1256.93 124.1H1183.06L1165.14 170H1143.34ZM1189.36 104.914H1250.64L1219.88 23.0714L1189.36 104.914Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1305.66 170V0H1326.74V150.571H1404V170H1305.66Z"
        className="letter"
      />
    </SVG>
  )
}

export default Experiential

// ___________________________________________________________________

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
