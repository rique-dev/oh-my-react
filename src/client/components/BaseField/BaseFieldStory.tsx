import { React } from '@lib'
import { Input } from '@lib/material-ui'
import { storiesOf } from '@storybook/react'
import { BaseField } from './BaseField'

storiesOf('components|Data Entry.BaseField', module).add('Shape', () => (
  <BaseField id="test" label="test">
    <Input id="test" />
  </BaseField>
))
