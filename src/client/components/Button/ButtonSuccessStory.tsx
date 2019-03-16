import { Bootstrap } from '@containers/Bootstrap'
import { mockTest, noop } from '@lib'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { ButtonSuccess } from './ButtonSuccess'

storiesOf('components|Data Entry.Button', module).add('ButtonSuccess', () => (
  <Bootstrap isStorybook>
    <ButtonSuccess handleClick={noop} message={mockTest.message.test} />
  </Bootstrap>
))
