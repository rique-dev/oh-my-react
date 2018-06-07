
import { connectState, Action, ActionCreator, Reducer } from '@lib'
import { RootState } from '@State'

// types
enum type {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT',
}

type INCREMENT = type.INCREMENT
type DECREMENT = type.DECREMENT

export type State = {
  count?: number;
}
interface Increment extends Action<INCREMENT> {
  payload: State
}

interface Decrement extends Action<DECREMENT> {
  payload: State
}

type Actions = Increment | Decrement

// Reducer
const initialState: State = {
  count: 0,
}

const reducer: Reducer<State, Actions> = (state = initialState, action) => {
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

export default reducer

// Actions
export interface Dispatch {
  increment?: (payload: State) => void
  decrement?: (payload: State) => void
}

export const increment = (payload: State): Increment => ({
  payload,
  type: type.INCREMENT,
})

export const decrement = (payload: State): Decrement => ({
  payload,
  type: type.DECREMENT,
})

// selectors
interface Selectors {
  isPrime: number
}

export const isPrime = (state: State) => state.count % 2 === 0
// operations

const operations = {
  decrement,
  increment: (payload: State) => {
    return (dispatch) => {
      dispatch(increment(payload))
      dispatch(increment({ count: 2 }))
    }
  },
}

// decorator
export type Props = State & Dispatch & Selectors

/**
 * Conecta os dispatchs e state
 */
export const connectCounter = () => {
  const mapStateToProps = (state: RootState) => {
    return {
      ...state.counter,
      isPrime: isPrime(state.counter),
    }
  }
  return connectState<State, Dispatch>(
    mapStateToProps,
    {
      ...operations,
    },
  )
}
