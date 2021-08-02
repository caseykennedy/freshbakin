// Subscribe Form Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading, Text, Input } from 'theme-ui'

// Components
import Section from '../../Section'
import Icon from '../../Icons'

// ___________________________________________________________________

const SubscribeForm = () => {
  return (
    <S.SubscribeForm>
      <Heading as="h4" mb={1}>
        Never miss a beat
      </Heading>
      <form
        name="Fresh Bakin' Subscribe"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Fresh Bakin' Subscribe" />

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

        <button type="submit" value="Submit form">
          Subscribe
          <Icon name="arrow" />
        </button>
      </form>
    </S.SubscribeForm>
  )
}

export default SubscribeForm
