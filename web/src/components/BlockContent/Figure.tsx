import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import { Box } from '../ui'

const Figure = (props: any) => {
  return (
    <Box
      as="figure"
      my={6}
      mx="auto"
      width="auto"
      style={{ maxWidth: '600px' }}
    >
      {props.asset && (
        <Image
          {...props}
          alt={props.alt}
          width={500}
          // style it how you want it
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      <figcaption>{props.caption}</figcaption>
    </Box>
  )
}

export default Figure
