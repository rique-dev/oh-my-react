import { createAction } from '@lib'
import { State as Payload, Type } from './types'

export const increment = createAction<Payload>(Type.INCREMENT)

export const decrement = createAction<Payload>(Type.DECREMENT)
