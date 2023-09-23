// Footer:

import * as React from 'react'

// Theme + UI
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Text } from 'theme-ui'

// Components
import MarqueeMessage from '../MarqueeMessage'
import SubscribeForm from './SubscribeForm'
import Icon from '../Icons'

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Box className="footer__marquee">
        <MarqueeMessage />
      </Box>

      <Flex className="footer__subscribe">
        <Box className="form">
          <SubscribeForm />
        </Box>
        <Flex className="social">
          <a href="https://twitter.com/freshbakin" target="_blank">
            <Icon name="twitter" />
          </a>
        </Flex>
      </Flex>

      <Flex className="footer__copyright">
        <Text>&copy;{getYear()}</Text>
        <Text>
          <a href="https://caseykennedy.me" target="_blank">
            groovy website
          </a>
        </Text>
      </Flex>
    </S.Footer>
  )
}

export default Footer
