// Mixins
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

export const textCrop = (
  lineHeight = 1.3,
  topAdjustment = 0,
  bottomAdjustment = 0
) => {
  const topCrop = 8
  const bottomCrop = 8
  const cropFontSize = 36
  const cropLineHeight = 1.2

  const dynamicTopCrop =
    (topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize

  const dynamicBottomCrop =
    (bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize

  const marginBottom = `-${dynamicTopCrop + topAdjustment}em`

  const marginTop = `-${dynamicBottomCrop + bottomAdjustment}em`

  return css`
    line-height: ${lineHeight};
    &::before,
    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }
    &::before {
      margin-bottom: ${marginBottom};
    }
    &::after {
      margin-top: ${marginTop};
    }
  `
}

// Breakpoints
// ___________________________________________________________________

const breakpoints: string[] = ['768px', '1140px']
export const breakpoint = {
  tablet: `(min-width: ${breakpoints[0]})`,
  desktop: `(min-width: ${breakpoints[1]})`,
}

export const fontSmooth = css`
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: 'pnum';
  text-rendering: geometricPrecision;
  font-feature-settings: 'pnum';
  font-variant-numeric: proportional-nums;
  font-variant-ligatures: discretionary-ligatures;
`
