import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { Heading, Text } from 'theme-ui'

import Figure from './Figure'

type BlockShape = {
  blocks: any
}

const serializers = {
  types: {
    block(props: any) {
      switch (props.node.style) {
        case 'h1':
          return <Heading as="h1">{props.children}</Heading>

        case 'h2':
          return (
            <Heading as="h2" mt={4} mb={3}>
              {props.children}
            </Heading>
          )

        case 'h3':
          return (
            <Heading as="h3" mt={4} mb={3}>
              {props.children}
            </Heading>
          )

        case 'h4':
          return (
            <Heading as="h4" mt={4} mb={3}>
              {props.children}
            </Heading>
          )

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        case 'a':
          return (
            <a rel="noopener" target="_blank">
              {props.children}
            </a>
          )

        case 'ul':
          return <ul>{props.children}</ul>

        case 'li':
          return <li>{props.children}</li>

        default:
          return <Text as="p" mb={4}>{props.children}</Text>
      }
    },
    figure(props: any) {
      return <Figure {...props.node} />
    },
  },
}

const BlockContent: React.FC<BlockShape> = ({ blocks }) => (
  <BaseBlockContent
    blocks={blocks}
    imageOptions={{ w: 320, h: 240, fit: 'max' }}
    serializers={serializers}
  />
)

export default BlockContent
