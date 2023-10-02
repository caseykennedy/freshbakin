// Footer:

import * as React from 'react'
import MarqueeMessage from '@/components/MarqueeMessage'
import Icon from '@/components/Icons'
import SubscribeForm from './SubscribeForm'
import * as S from './styles.scss'

const getYear = () => new Date().getFullYear()

const Footer: React.FC = () => (
  <S.Footer>
    <div className="footer__marquee">
      <MarqueeMessage />
    </div>

    <div className="footer__subscribe">
      <div className="footer__subscribe__form">
        <SubscribeForm />
      </div>
      <div className="social">
        <a href="https://instagram.com/freshbakin/" target="_blank" rel="noreferrer nofollow">
          <Icon name="instagram" />
        </a>
      </div>
    </div>

    <div className="footer__copyright">
      <div>&copy;{getYear()}</div>
      <div>
        <a href="https://caseykennedy.me" target="_blank" rel="noreferrer nofollow">
          groovy site
        </a>
      </div>
    </div>
  </S.Footer>
)

export default Footer
