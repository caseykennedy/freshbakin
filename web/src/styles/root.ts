// Root variables
import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'

const RootVariables = css`
  :root {
    /* -------------------------------- 
    Spacing System
    -------------------------------- */
    --space-unit: 1em;
    --space-xxs: calc(0.25 * var(--space-unit));
    --space-xs: calc(0.5 * var(--space-unit));
    --space-sm: calc(0.75 * var(--space-unit));
    --space-md: calc(1 * var(--space-unit));
    --space-lg: calc(2 * var(--space-unit));
    --space-xl: calc(3.25 * var(--space-unit));
    --space-xxl: calc(5.25 * var(--space-unit));

    /* -------------------------------- 
    Typography System
    -------------------------------- */
    /* set base values */
    --text-base-size: 1em;
    --text-scale-ratio: 1.414;

    /* line-height */
    --heading-line-height: 1;
    --body-line-height: 1;

    /* letter-spacing */
    --heading-letter-spacing: -1px;
    --body-letter-spacing: 0.5px;

    @media ${theme.mq.tablet} {
      --text-base-size: 1em;
      --body-line-height: 1.15;
    }

    /* type scale */
    --text-xs: calc(1em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
    --text-sm: calc(1em / var(--text-scale-ratio));
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio)
    );
    --text-xxxl: calc(
      1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) *
        var(--text-scale-ratio)
    );
  }
`

export default RootVariables
