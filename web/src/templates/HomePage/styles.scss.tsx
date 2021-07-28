// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui'
import { Gradient } from '../../styles/transitions'

// ___________________________________________________________________

export const HomePage = styled(Box)``

export const Hero = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const Speakers = styled(Box)`
  background: rgb(52, 255, 221);
  background: linear-gradient(
    63deg,
    rgba(52, 255, 221, 1) 30%,
    rgba(112, 212, 255, 1) 55%,
    rgba(0, 255, 0, 1) 83%
  );
  background-size: 300% 300%;
  animation: ${Gradient} 10s ease infinite;

  .card {
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    border: ${theme.border};
    padding: ${theme.space[4]};

    .figure {
      align-self: flex-end;
      clip-path: circle();
      /* filter: grayscale(100); */
      height: 200px;
      width: 200px;
      position: relative;
      top: calc(${theme.space[4]} * -5);
    }
  }
`
