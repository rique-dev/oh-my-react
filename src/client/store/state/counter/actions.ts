import { State, type, Increment, Decrement } from './types'

export const increment = (payload: State): Increment => ({
  payload,
  type: type.INCREMENT,
})

export const decrement = (payload: State): Decrement => ({
  payload,
  type: type.DECREMENT,
})
