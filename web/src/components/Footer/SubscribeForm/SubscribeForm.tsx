// Subscribe Form Component:

import React from 'react'
import { Input } from 'theme-ui'
import Icon from '@/components/Icons'

import * as S from './styles.scss'

const SubscribeForm = () => (
  <S.SubscribeForm>
    <h4>Never miss a beat</h4>
    <form name="Fresh Bakin' Subscribe" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
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

export default SubscribeForm
