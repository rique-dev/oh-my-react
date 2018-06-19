import { connectState } from '@lib'
import { RootState } from '@State'
import operations from './operations'
import * as selectors from './selectors'
import { Dispatch, Props, State } from './types'

export { default } from './reducers'
export { State, Props }

/**
 * Conecta no component operations e state
 */
export const connectCounter = () => {
  const mapStateToProps = (state: RootState) => ({
    ...state.counter,
    isPrime: selectors.isPrime(state.counter),
  })

  const mapDispatchToProps = {
    ...operations,
  }

  return connectState<State, Dispatch>(mapStateToProps, mapDispatchToProps)
}
