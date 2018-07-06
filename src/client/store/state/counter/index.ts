import { connectState } from '@lib'
import { RootState } from '..'
import operations from './operations'
import * as selectors from './selectors'
import { Dispatch, Props, State } from './types'

/**
 * Conecta no component operations e state
 */
const connectCounter = () => {
  const mapStateToProps = (state: RootState) => ({
    ...state.counter,
    isPrime: selectors.isPrime(state.counter),
  })

  const mapDispatchToProps = {
    ...operations,
  }

  return connectState<State, Dispatch>(mapStateToProps, mapDispatchToProps)
}

export { default } from './reducers'
export { connectCounter, State, Props }
