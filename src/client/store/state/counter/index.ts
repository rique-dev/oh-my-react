
import { connectState } from '@lib'
import { Action, ActionCreator, Reducer } from 'redux'

// types
enum typeAction {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT',
}

type INCREMENT = typeAction.INCREMENT
type DECREMENT = typeAction.DECREMENT

export type CounterState = {
  count: number;
}
interface IncrementAction extends Action<INCREMENT> {
  payload: CounterState
}

interface DecrementAction extends Action<DECREMENT> {
  payload: CounterState
}

type CounterActions = IncrementAction | DecrementAction

// Reducer
const initialState: CounterState = {
  count: 0,
}

const reducer: Reducer<CounterState, CounterActions> = (state = initialState, action) => {
  switch (action.type) {
    case typeAction.INCREMENT:
      return {
        count: state.count + action.payload.count,
      }
    case typeAction.DECREMENT:
      return {
        count: state.count - action.payload.count,
      }
    default:
      return state
  }
}

export default reducer

// Actions
export interface CounterDispatch {
  increment: (payload: CounterState) => void
  decrement: (payload: CounterState) => void
}

export const increment = (payload: CounterState): IncrementAction => ({
  payload,
  type: typeAction.INCREMENT,
})

export const decrement = (payload: CounterState): DecrementAction => ({
  payload,
  type: typeAction.DECREMENT,
})

// operations

// decorator
export type CounterProps = CounterState & CounterDispatch

/**
 * Conecta os dispatchs e state
 */
export const connectCounter = () => {
  return connectState<CounterState, CounterDispatch>(
    state => state.counter,
    {
      increment,
      decrement,
    },
  )
}
