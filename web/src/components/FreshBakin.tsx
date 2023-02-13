import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { useColorMode } from 'theme-ui'

// ___________________________________________________________________

type Props = { fill?: string }

const FreshBakin: React.FC<Props> = ({ fill }) => {
  return (
    <SVG
      width="100%"
      viewBox="0 0 1403 145"
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      fill={fill}
    >
      <motion.path
        variants={polyVariant}
        d="M0 1.74754H108.168V21.7195H21.6336V80.1374H93.2482V100.109H21.6336V176.502H0V1.74754Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M186.825 1.74754C198.263 1.74754 208.375 3.99438 217.161 8.48807C225.947 12.8153 232.744 19.0566 237.552 27.2118C242.359 35.2006 244.763 44.604 244.763 55.4222C244.763 67.5718 241.364 78.1403 234.568 87.1276C227.937 95.9486 218.985 101.94 207.712 105.102L246.752 176.502H222.383L186.327 109.346H141.817V176.502H120.183V1.74754H186.825ZM141.817 89.3745H185.084C196.522 89.3745 205.64 86.2955 212.437 80.1374C219.234 73.9794 222.632 65.741 222.632 55.4222C222.632 45.2698 219.234 37.1145 212.437 30.9565C205.64 24.7985 196.605 21.7195 185.333 21.7195H141.817V89.3745Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M261.007 1.74754H371.91V21.7195H282.641V77.6409H356.991V97.6129H282.641V156.53H375.143V176.502H261.007V1.74754Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M403.153 119.332C403.981 131.149 408.706 140.636 417.326 147.792C425.947 154.783 436.888 158.278 450.15 158.278C462.085 158.278 471.7 155.698 478.994 150.539C486.454 145.213 490.184 137.89 490.184 128.569C490.184 121.746 488.112 116.337 483.968 112.342C479.989 108.348 474.767 105.435 468.302 103.604C462.002 101.607 453.382 99.6933 442.441 97.8625C425.035 94.8668 411.193 89.957 400.915 83.1332C390.637 76.3095 385.498 65.2417 385.498 49.9299C385.498 40.1103 387.984 31.4558 392.957 23.9663C397.931 16.3104 404.893 10.4021 413.845 6.24123C422.963 2.08042 433.323 0 444.928 0C457.195 0 468.053 2.24685 477.502 6.74054C486.952 11.2342 494.411 17.5587 499.882 25.7139C505.353 33.7027 508.419 42.9397 509.082 53.425H487.698C486.371 43.2726 481.813 35.1173 474.021 28.9593C466.23 22.8013 456.532 19.7223 444.928 19.7223C433.323 19.7223 424.123 22.302 417.326 27.4614C410.529 32.4544 407.131 39.5278 407.131 48.6816C407.131 55.3389 409.12 60.5816 413.099 64.4095C417.078 68.0711 422.217 70.9004 428.516 72.8976C434.815 74.7284 443.436 76.5591 454.377 78.3899C471.783 81.3857 485.708 86.3787 496.152 93.3689C506.596 100.193 511.818 111.26 511.818 126.572C511.818 136.558 509.165 145.462 503.861 153.285C498.722 161.107 491.427 167.182 481.978 171.509C472.695 175.836 462.002 178 449.901 178C436.307 178 424.455 175.587 414.342 170.76C404.23 165.767 396.356 158.86 390.719 150.039C385.249 141.052 382.265 130.816 381.768 119.332H403.153Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M528.086 1.4979H549.719V77.6409H639.735V1.4979H661.368V176.502H639.735V97.6129H549.719V176.502H528.086V1.4979Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M799.523 1.74754C817.924 1.74754 832.098 5.74193 842.044 13.7307C852.157 21.7195 857.213 32.7873 857.213 46.9341C857.213 57.2529 854.56 65.8242 849.256 72.648C843.951 79.3053 836.242 83.9654 826.13 86.6283C851.659 91.4549 864.424 105.352 864.424 128.32C864.424 143.299 858.953 155.115 848.012 163.77C837.237 172.258 821.654 176.502 801.264 176.502H737.855V1.74754H799.523ZM759.489 77.6409H800.518C811.625 77.6409 820.245 75.1445 826.379 70.1515C832.512 65.1585 835.579 58.2515 835.579 49.4306C835.579 40.6096 832.512 33.7859 826.379 28.9593C820.411 23.9663 811.79 21.4698 800.518 21.4698H759.489V77.6409ZM759.489 156.78H801.264C814.526 156.78 824.638 154.2 831.601 149.041C838.729 143.881 842.293 136.725 842.293 127.571C842.293 117.751 838.729 110.262 831.601 105.102C824.472 99.7765 814.36 97.1136 801.264 97.1136H759.489V156.78Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M861.834 176.502L928.227 1.74754H953.839L1019.98 176.502H996.858L978.457 129.318H902.615L884.214 176.502H861.834ZM909.08 109.596H971.992L940.411 25.4642L909.08 109.596Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1028.49 1.74754H1050.12V100.858L1137.9 1.74754H1164.26L1100.6 75.3941L1169.23 176.502H1143.37L1084.69 91.871L1050.12 131.066V176.502H1028.49V1.74754Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1175.87 1.74754H1197.5V176.502H1175.87V1.74754Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1220.05 176.502V1.74754H1239.94L1333.43 136.558V1.74754H1354.57V176.502H1334.68L1241.18 41.6914V176.502H1220.05Z"
        className="letter"
      />
      <motion.path
        variants={polyVariant}
        d="M1383.36 0.249647C1389.32 0.249647 1394.05 2.74614 1397.53 7.73912C1401.18 12.5657 1403 18.5573 1403 25.7139C1403 36.3656 1399.85 44.6872 1393.55 50.6788C1387.42 56.6704 1378.88 59.8326 1367.94 60.1655V48.432C1375.23 48.2655 1380.54 46.1851 1383.85 42.1907C1387.17 38.1963 1388.83 33.6194 1388.83 28.46C1388.83 26.9621 1388.74 25.8803 1388.58 25.2146C1386.59 27.2118 1383.77 28.2104 1380.12 28.2104C1376.14 28.2104 1372.91 27.0453 1370.43 24.7153C1368.1 22.3852 1366.94 19.0566 1366.94 14.7293C1366.94 10.5685 1368.35 7.15662 1371.17 4.4937C1374.16 1.66433 1378.22 0.249647 1383.36 0.249647Z"
        className="letter"
      />
    </SVG>
  )
}

export default FreshBakin

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
