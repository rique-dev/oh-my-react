
import { connectState } from '@lib'
import { RootState } from '@State'
import * as selectors from './selectors'
import operations from './operations'
import { State, Dispatch, Props } from './types'
import { reducer } from './reducers'

/**
 * Conecta os dispatchs e state
 */
export const connectCounter = () => {
  const mapStateToProps = (state: RootState) => {
    return {
      ...state.counter,
      isPrime: selectors.isPrime(state.counter),
    }
  }

  return connectState<State, Dispatch>(
    mapStateToProps,
    {
      ...operations,
    },
  )
}

export default reducer
export {
  State,
  Props,
}
