// Pill Styles:
import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'

type PillProps = {
  bg?: string
  color?: string
}

const Pill = styled.div<PillProps>`
  display: flex;
  align-items: center;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.black};
  border-radius: ${theme.borderRadius};
  padding: ${theme.space[2]} ${theme.space[4]};

  color: ${theme.colors.black};
  font-size: ${theme.fontSizes[2]};
  white-space: nowrap;

  &:hover {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }
`

export default Pill
