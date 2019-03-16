import { Bootstrap } from '@containers/Bootstrap'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import SignUp from './SignUp'

storiesOf('containers|Session', module).add('SignUp', () => (
  <Bootstrap isStorybook>
    <SignUp />
  </Bootstrap>
))
