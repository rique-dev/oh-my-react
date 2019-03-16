import { React } from '@lib'
import { storiesOf } from '@storybook/react'
import { A } from './A'

storiesOf('components|Navigation.A', module).add('default', () => (
  <A href="https:\\facebook.com" target="_blank">
    Facebook
  </A>
))
