// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const Event = styled.div`
  .button {
    border: ${theme.border};
    border-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
    padding: ${theme.space[2]} ${theme.space[4]};
    width: 100%;

    font-size: ${theme.fontSizes[4]};
    text-align: center;
  }
`
