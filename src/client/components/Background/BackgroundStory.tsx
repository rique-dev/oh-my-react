import { React } from '@lib'
import { storiesOf } from '@storybook/react'
import { Background } from './Background'

storiesOf('components|Layout.Background', module).add('Shape', () => (
  <Background type="Shape">
    <div>Hello World</div>
  </Background>
))
