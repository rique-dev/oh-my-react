import { henryqrm } from '@images'
import { React } from '@lib'
import { storiesOf } from '@storybook/react'
import { Avatar } from './Avatar'

storiesOf('components|Data Display.Avatar', module).add('default', () => (
  <Avatar {...henryqrm} />
))

storiesOf('components|Data Display.Avatar', module).add('withBorder', () => (
  <Avatar withBorder {...henryqrm} />
))
