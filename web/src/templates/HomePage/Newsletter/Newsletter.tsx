// Newsletter Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Input } from 'theme-ui'

// Components
import Section from '../../../components/Section'
import Icon from '../../../components/Icons'

// ___________________________________________________________________

const Newsletter = () => {
  return (
    <S.Newsletter>
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <form
            name="dWeb Summit Subscribe"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input
              type="hidden"
              name="form-name"
              value="dWeb Summit Subscribe"
            />

            <label htmlFor="email" style={{ display: 'none' }}>
              Email address:
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required={true}
              className="form-control"
            />

            <Flex className="submit">
              <button
                type="submit"
                value="Submit form"
                // onClick={() => {
                //   gtag.event({
                //     category: 'Submit form',
                //     action: 'Click',
                //     label: 'Footer newsletter sign up'
                //   })
                // }}
              >
                <Icon name="arrow" />
              </button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </S.Newsletter>
  )
}

export default Newsletter
