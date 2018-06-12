
import { State, Actions, Type } from './types'

const initialState: State = {
  count: 0,
  list: [{ id: 0 }],
}

export default (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case Type.INCREMENT:
      if (!action.payload) {
        throw Error('Payload is not Defined')
      }
      state.list.push({ id: state.list.length + state.list[0].id })
      return {
        ...state,
        count: state.count + action.payload.count,
      }
    case Type.DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.count,
      }
    default:
      return state
  }
}
