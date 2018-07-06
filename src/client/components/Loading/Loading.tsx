import { React, reactDelayRender } from '@lib'
import s from './Loading.scss'

export const Loading = reactDelayRender({ delay: 300 })(() => (
  <div className={s.l}>Loading...</div>
))
