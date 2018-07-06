import { React } from '@lib'
import { storiesOf } from '@storybook/react'
import { A } from './A'

storiesOf('components|Navigation.Link', module).add('default', () => (
  <A href="https:\\facebook.com" target="_blank">
    Facebook
  </A>
))
