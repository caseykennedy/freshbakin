// Transitoin keyframes

// Core
import { css, keyframes } from 'styled-components'

// Theme
import theme from '../gatsby-plugin-theme-ui'

// Gradient
export const Gradient = keyframes`
  0% {
    background-position: 0% 50%
  }
  
  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
`

// Slide to Right
export const SlideToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
`

// Slide to Right
export const SlideToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`

// Slide Up
export const SlideUp = keyframes`
  0% {
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0%);
  }
`

// Fade In
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

// Fade Out
export const FadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

// Rotate
export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`
