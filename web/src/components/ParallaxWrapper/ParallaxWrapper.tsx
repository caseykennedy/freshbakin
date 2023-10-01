// Post Meta

import * as React from 'react'
import { motion } from 'framer-motion'

import useParallaxEffect from '@/hooks/useParallaxEffect'

type Props = {
  children: React.ReactNode
  speed: number
}

const PostMeta: React.FC<Props> = ({ children, speed }) => {
  const position = useParallaxEffect(speed)
  return (
    <motion.div animate={{ x: position.x, y: position.y }} transition={{ type: 'spring', stiffness: 50 }}>
      {children}
    </motion.div>
  )
}

export default PostMeta
