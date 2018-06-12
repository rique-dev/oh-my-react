import { State as Payload, Type } from './types'
import { createAction } from '@lib'

export const increment = createAction<Payload>(Type.INCREMENT)

export const decrement = createAction<Payload>(Type.DECREMENT)
