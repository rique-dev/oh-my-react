import { Bootstrap } from '@containers/Bootstrap'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Header from './Header'

storiesOf('containers|Navigation', module).add('Header', () => (
  <Bootstrap isStorybook>
    <Header />
  </Bootstrap>
))
