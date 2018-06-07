
import { State, Actions, type } from './types'
import { Reducer } from '@lib'

const initialState: State = {
  count: 0,
}

export const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return {
        count: state.count + action.payload.count,
      }
    case type.DECREMENT:
      return {
        count: state.count - action.payload.count,
      }
    default:
      return state
  }
}
