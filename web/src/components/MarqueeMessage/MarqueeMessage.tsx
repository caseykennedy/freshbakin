// MarqueeMessage:

import * as React from 'react'
import Marquee from 'react-fast-marquee'

type Props = {
  message?: string
  speed?: number
}

const MarqueeMessage: React.FC<Props> = ({ message, speed = 55 }) => {
  const MarqueeProps = {
    gradient: false,
    speed,
  }
  return (
    <Marquee {...MarqueeProps}>
      <div className="text--sm  text--uppercase">{message}</div>
    </Marquee>
  )
}

export default MarqueeMessage

const defaultProps = {
  message:
    ' ● PURVEYORS OF FINE TIMES SINCE 2002 ● BAKIN’ UP THE FRESHEST SHOWS IN RENO, TAHOE AND BEYOND ● PURVEYORS OF FINE TIMES SINCE 2002 ● BAKIN’ UP THE FRESHEST SHOWS IN RENO, TAHOE AND BEYOND ',
}

MarqueeMessage.defaultProps = defaultProps
